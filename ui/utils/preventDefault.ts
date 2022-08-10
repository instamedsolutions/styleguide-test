export type CustomEvent = {
  stopPropagation: () => void;
  preventDefault: () => void;
};

export const stopPropagation = (e: CustomEvent) => {
  e.stopPropagation();
};

/**
 * simple prevent default action
 */
const preventDefault = (e: CustomEvent): void => {
  e.stopPropagation();
  e.preventDefault();
};

/**
 * exec function pass by args and event propogation
 *
 */
export const preventAndCall = (fn?: () => void) => (e: CustomEvent): void => {
  preventDefault(e);

  fn && fn();
};

export default preventDefault;
