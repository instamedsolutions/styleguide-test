import preventDefault, { preventAndCall, CustomEvent } from './preventDefault';

const getFakeEvent = () => ({
  stopPropagation: jest.fn(),
  preventDefault: jest.fn()
});

describe('utils/preventDefault', () => {
  describe('preventDefault', () => {
    it('should stop event propagation', () => {
      const event = getFakeEvent();

      preventDefault(event);

      expect(event.stopPropagation).toHaveBeenCalled();
      expect(event.preventDefault).toHaveBeenCalled();
    });
  });

  describe('preventAndCall', () => {
    let event: CustomEvent;
    const fn = jest.fn();
    beforeEach(() => {
      event = getFakeEvent();

      fn.mockClear();

      preventAndCall(fn)(event);
    });

    it('should stop event propagation', () => {
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should call function', () => {
      expect(fn).toHaveBeenCalled();
    });
  });
});
