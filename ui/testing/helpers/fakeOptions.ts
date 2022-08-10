import { OptionType } from '@ui/types';

type optsType = {
  icon?: boolean
}

const fakeOptions = (nb: number, opts?: optsType): OptionType[] => Array
  .from(Array(nb))
  .map(
    (_, key) => ({
      value: `value ${key}`,
      label: `Option ${key}`,
      icon: opts && opts.icon ? 'hospital' : undefined
    })
  );

export default fakeOptions;
