import icons from '@ui/atoms/icons/icons';

import { getIcon } from './utils';

describe('ui/atoms/icons/icon/utils', () => {
  describe('getIcon, should return', () => {
    it('undefined when icon not found', () => {
      expect(getIcon('shisihdehdehdiehdiehdeihdeidh')).not.toBeDefined();
    });

    it('icon component when exists', () => {
      expect(getIcon('check')).toEqual(icons.check);
    });
  });
});
