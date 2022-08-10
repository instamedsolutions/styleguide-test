import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { DocsContext } from '@storybook/addon-docs/blocks';
import isString from 'lodash/isString';

const Path = styled.div`
  font-size: 13px;
  color: rgb(118, 118, 118);
  word-break: break-all;
`;

export const ImportPath:FC = () => {
  const context = useContext(DocsContext);

  const fileName = context?.parameters?.fileName;
  if (!isString(fileName)) {
    return null;
  }

  const path = fileName.replace('./', '@')
    .replace('.stories.tsx', '');
  const componentName = path?.split('/').reverse()[0];

  const finalPath = `import ${componentName} from '${path}';`;

  return <Path>{finalPath}</Path>;
};

export default ImportPath;
