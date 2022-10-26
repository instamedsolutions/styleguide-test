import { IconType } from '@ui/atoms/icons/icons';
// import { OptionType } from '@ui/organisms/selectors/types';

// export type { OptionType };

export type { IconType };

export const colors = ['primary', 'secondary', 'danger', 'success', 'light'] as const;
export type ColorType = typeof colors[number];

export type KeyOfColorType<V = string> = {
  [key in ColorType]?: V;
};

export const sizes = ['small', 'base', 'large'] as const;
export type SizeType = typeof sizes[number];
export type KeyOfSizeType<V = string> = {
  [key in SizeType]: V
};

/**
 * render only few keys partial
 * PartialBy<T, 'onChange'>
 *
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * type of object
 */
export interface ObjectStringNumber { [key: string]: number; }
export interface ObjectStringBool { [key: string]: boolean; }
export interface ObjectStringString { [key: string]: string; }
export interface ObjectStringStringOrBool { [key: string]: string|boolean; }
export interface ObjectStringArrayOrString { [key: string]: []|string; }
