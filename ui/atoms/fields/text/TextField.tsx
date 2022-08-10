import React, { FC, ChangeEvent, MouseEvent } from 'react';
import cls from 'classnames';

import { IconType, SizeType, KeyOfSizeType } from '@ui/types';
import { getIcon } from '@ui/atoms/icons/icon/utils';
import InputContainer from '@ui/atoms/containers/input/InputContainer';
import { getFieldClasses } from '@ui/atoms/fields/utils';
import Skeleton from '@ui/atoms/loaders/skeleton/Skeleton';

type IconProps = {
  icon?: IconType;
  onIconClick?: (event: MouseEvent) => void;
};

const sizes: KeyOfSizeType = {
  small: 'p-2',
  base: 'p-3',
  large: 'p-4'
};

export type TextFieldProps = React.HTMLAttributes<HTMLInputElement> & IconProps & {
  id?: string;
  name: string;
  type?: string;
  className?: string;
  label?: string;
  value?: string;
  error?: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  loading?: boolean;
  borderless?: boolean;
  size?: SizeType;
};

export const TextFieldSkeleton: FC = () => <Skeleton size='large' field />;

const Icon:FC<IconProps> = ({ icon, onIconClick }) => {
  const Icon: React.ComponentType | undefined = getIcon(icon);
  if (!Icon) {
    return null;
  }

  const className = 'absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-400';
  if (!onIconClick) {
    return (
      <span className={className}>
        <Icon />
      </span>
    );
  }

  return (
    <span
      className={cls(className, 'hover:text-primary-500 transition-colors cursor-pointer')}
      onClick={onIconClick}
      aria-hidden='true'
    >
      <Icon />
    </span>
  );
};

const TextField:React.ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (props, ref) => {
  const {
    className,
    id,
    name,
    type = 'text',
    value,
    placeholder,
    label,
    icon,
    onChange,
    onIconClick,
    error,
    readOnly,
    loading,
    borderless = false,
    size = 'base',
    ...rest
  } = props;

  const inputCls = React.useMemo(
    () => cls(
      getFieldClasses({ active: !readOnly, borderless }),
      {
        'text-danger-500 border-danger-500': !!error && !readOnly,
        'pr-7': !!icon,
        'text-gray-300': readOnly
      }
    ),
    [readOnly, icon, error, borderless]
  );

  return (
    <InputContainer
      htmlFor={id || name}
      error={error}
      label={label}
      loading={loading}
      data-testid={`textfield-${type}-${name}`}
      className={className}
      skeleton={TextFieldSkeleton}
    >
      <input
        {...rest}
        id={id || name}
        ref={ref}
        type={type}
        name={name}
        readOnly={readOnly}
        className={cls(inputCls, sizes[size])}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Icon onIconClick={onIconClick} icon={icon} />
    </InputContainer>
  );
};

export default React.forwardRef(TextField);
