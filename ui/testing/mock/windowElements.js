class ResizeObserver {
  observe = jest.fn()
  unobserve = jest.fn()
  disconnect = jest.fn()
}

window.ResizeObserver = ResizeObserver;

const intersectionObserverMock = () => ({
  observe: () => null
});

window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
