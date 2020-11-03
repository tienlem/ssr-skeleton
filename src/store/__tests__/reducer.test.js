import { createReducer } from '../reducers';

describe('reducer', () => {
  it('should inject reducers', () => {
    const dummyReducer = (s = {}, a) => 'dummyResult';
    const reducer = createReducer({ test: dummyReducer });
    const state = reducer({}, '');
    expect(state.test).toBe('dummyResult');
  });

  it('should return identity reducers when empty', () => {
    const reducer = createReducer();
    const state = { a: 1 };
    const newState = reducer(state, '');
    expect(newState).toBe(state);
  });
});
