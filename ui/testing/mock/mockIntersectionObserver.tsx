type onChangeArgsType = {
  isIntersecting: boolean
}
type onChange = (arg: onChangeArgsType[]) => void;

type MockIntersectionObserverType = (isIntersecting: boolean) => () => void
const mockIntersectionObserver: MockIntersectionObserverType = (isIntersecting) => {
  const original = window.IntersectionObserver;

  class IntersectionObserverMock {
    onChange: onChange = () => { /* */ };

    constructor(onChange: onChange) {
      this.onChange = onChange;
    }

    observe() { this.onChange([{ isIntersecting }]); }

    disconnect() { /* */ }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  window.IntersectionObserver = IntersectionObserverMock;

  return () => { window.IntersectionObserver = original; };
};

export default mockIntersectionObserver;
