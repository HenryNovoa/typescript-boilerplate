import { hello } from './index';

describe('Testing Jest Configuration', () => {
  it('Const must have a HELLO value', () => {
    expect(hello).toBe('HELLO CONFIGSS');
  });
});
