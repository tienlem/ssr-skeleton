import React, { memo } from 'react';
import Form from 'app/components/Form';
import Input from 'app/components/Input';
import Button from 'app/components/Button';
import Card from 'app/components/Card';
import { useTranslation } from 'react-i18next';
import { useInjectSaga } from 'utils/redux-injectors';
import { StyledLogin } from './styles';
import { sliceKey } from './slice';
import saga from './saga';
import useHooks from './hooks';

export const Login = props => {
  useInjectSaga({ key: sliceKey, saga });
  const { handlers } = useHooks();
  const { onFinish, onFinishFailed } = handlers;
  const { t } = useTranslation();

  return (
    <StyledLogin>
      <div className="content-wrapper">
        <Card>
          <Form
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label={t('Authentication.userName')}
              name="userName"
              rules={[
                {
                  required: true,
                  message: t('Authentication.requiredUserName'),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t('Authentication.password')}
              name="password"
              rules={[
                {
                  required: true,
                  message: t('Authentication.requiredPassword'),
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                <span>Submit</span>
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </StyledLogin>
  );
};

export default memo(Login);
