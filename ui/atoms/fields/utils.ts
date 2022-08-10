import { ColorType } from '@ui/types';

const commonClasses = 'w-full bg-white text-xs font-medium placeholder-gray-400 outline-none';
const borderCls = 'rounded-lg border border-gray-100';

export type getFieldClassesProps = {
  active?: boolean;
  color?: ColorType;
  borderless?: boolean;
};

const activeClasses: { [key in ColorType]?: string } = {
  primary: 'focus:border-primary-500 active:border-primary-500'
};

/**
 * generate common fields classes
 */
export const getFieldClasses = ({
  active = true,
  color = 'primary',
  borderless
} : getFieldClassesProps = {}): string => {
  const classes = [commonClasses];

  if (!borderless) {
    classes.push(borderCls);
  }

  if (active && activeClasses?.[color]) {
    classes.push(activeClasses?.[color] || '');
  }

  return classes.join(' ');
};
