import { UpperCasePipe } from './uppercase.pipe';

describe('UppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new UpperCasePipe();
    expect(pipe).toBeTruthy();
  });
});
