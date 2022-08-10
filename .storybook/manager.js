import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Instamed',
  brandUrl: 'https://instamed.fr',
  brandImage: 'https://www.instamed.fr/wp-content/themes/instamed/img/logo-instamed.svg'
});

addons.setConfig({
  theme
});
