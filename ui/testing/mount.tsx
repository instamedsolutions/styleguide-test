import { mount } from 'enzyme';
import prepareTreeDefault, { TreeOptions } from './prepareTree';
import { act } from 'react-dom/test-utils';
import 'jest-styled-components';

export { act };


export const buildMount = (prepareTree = prepareTreeDefault) => (
  children: React.ReactElement,
  options: TreeOptions = {}
) => {
  const wrapper = mount(
    prepareTree(children, options)
  );

  return wrapper;
};


const mountComponent = buildMount();

export default mountComponent;
