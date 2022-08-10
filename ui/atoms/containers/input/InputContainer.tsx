import React, { FC } from 'react';

import Label from '@ui/atoms/labels/label/Label';
import LabelSkeleton from '@ui/atoms/loaders/label-skeleton/LabelSkeleton';
import { TextFieldSkeleton } from '@ui/atoms/fields/text/TextField';
import ErrorText from '@ui/atoms/texts/error/ErrorText';

export type InputContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  htmlFor?: string;
  label?: string | boolean;
  loading?: boolean;
  skeleton?: FC;
  error?: string;
};

const InputContainer:FC<InputContainerProps> = ({
  label,
  htmlFor,
  error,
  children,
  loading,
  skeleton: InputSkeleton = TextFieldSkeleton,
  ...rest
}) => {
  if (loading) {
    return (
      <div {...rest}>
        {label
          ? <LabelSkeleton />
          : null
        }
        <InputSkeleton />
      </div>
    );
  }

  return (
    <div {...rest }>
      {label
        ? (
          <Label
            htmlFor={htmlFor}
            className='mb-2'
            error={!!error}
          >
            {label}
          </Label>
        ) : null
      }
      <div className='relative'>
        {children}
      </div>
      {error
        ? <ErrorText data-testid='field-error' className='mt-1'>{error}</ErrorText>
        : null
      }
    </div>
  );
};

export default InputContainer;
