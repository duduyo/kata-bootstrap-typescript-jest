import Bidon from '../src/Bidon'

describe('Utils test case', () => {
  it('Add 1 + 2, should return 3', () => {
    const utils = new Bidon();
    const result = 3;

    expect(utils.addValues(1, 2)).toBe(result);
  });
});

