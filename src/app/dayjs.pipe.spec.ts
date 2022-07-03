import { DAYJSPipe } from './dayjs.pipe';

describe('DAYJSPipe', () => {
  it('create an instance', () => {
    const pipe = new DAYJSPipe();
    expect(pipe).toBeTruthy();
  });
});
