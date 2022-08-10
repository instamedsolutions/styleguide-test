import icons from './icons';

describe('ui/atoms/icons/icon', () => {
  it('List of icon', () => {
    expect(Object.keys(icons)).toMatchSnapshot();
  });
});
