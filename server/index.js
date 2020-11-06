/* eslint-disable no-unused-vars */
import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import compression from 'compression';
import Backend from 'i18next-fs-backend';
import path from 'path';
import fs from 'fs';
import renderer from './renderer';
import { configureAppStore } from '../src/store/configureStore';
import i18n from '../src/locales/i18n';
import Routes from '../src/app/Routes';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const appSrc = resolveApp('src');
const i18nextMiddleware = require('i18next-http-middleware');
const app = express();

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
}

app.use(
  compression({
    level: 2, // set compression level from 1 to 9 (6 by default)
    filter: shouldCompress, // set predicate to determine whether to compress
  }),
);

const port = process.env.PORT || 6969;

// To be able to serve static files
app.use(express.static('public'));

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      debug: false,
      preload: ['en', 'vi'],
      ns: ['translations'],
      defaultNS: 'translations',
      backend: {
        loadPath: `${appSrc}/locales/{{lng}}/{{ns}}.json`,
        addPath: `${appSrc}/locales/{{lng}}/{{ns}}.missing.json`,
      },
    },
    () => {
      app
        .disable('x-powered-by')
        .use(i18nextMiddleware.handle(i18n))
        .use('/locales', express.static(`${appSrc}/locales`))
        .use(express.static('public'))
        .get('*', (req, res) => {
          const params = req.params[0].split('/');
          // We create store before rendering html
          const store = configureAppStore({});
          // We pass store to renderer

          // Checks the given path, matches with component and returns array of items about to be rendered
          const routes = matchRoutes(Routes, req.path);

          // Execute all loadData functions inside given urls and wrap promises with new promises to be able to render pages all the time
          // Even if we get an error while loading data, we will still attempt to render page.
          const promises = routes
            .map(({ route }) => {
              return route.loadData ? route.loadData(store, req) : null;
            })
            .map(promise => {
              if (promise) {
                return new Promise((resolve, reject) => {
                  promise.then(resolve).catch(resolve);
                });
              }
              return null;
            });

          // Wait for all the loadData functions, if they are resolved, send the rendered html to browser.
          Promise.all(promises).then(() => {
            const context = {};
            const content = renderer(req, store, context, res);

            if (context.notFound) {
              res.status(404);
            }

            res.send(content);
          });
        });

      app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
      });
    },
  );
