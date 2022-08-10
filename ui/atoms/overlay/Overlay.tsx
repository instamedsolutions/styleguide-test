import React, { FC } from 'react';
import cls from 'classnames';

export type OverlayType = {
  className?: string;
  onClick?: () => void
}

/**
 * Overlay content
 * @type {OverlayType}
 */
const Overlay: FC<OverlayType> = ({
  className,
  ...rest
}) => {

  const overlayCls = cls(
    'absolute top-0 right-0 left-0 w-full h-full bg-gray-900 opacity-40',
    className
  );

  return (
    <div className={overlayCls} {...rest}></div>
  );
};
export default Overlay;
