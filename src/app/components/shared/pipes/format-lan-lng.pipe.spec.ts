import { FormatLanLngPipe } from './format-lan-lng.pipe';

describe('FormatLanLngPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatLanLngPipe();
    expect(pipe).toBeTruthy();
  });

  it('format lat & lng', () => {
    const pipe = new FormatLanLngPipe();
    const lat = 1.22222222;
    expect(pipe.transform(lat)).toBe(lat.toFixed(6));
  });
});
