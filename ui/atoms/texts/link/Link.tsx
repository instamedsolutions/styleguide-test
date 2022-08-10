import React, { MouseEvent, useMemo } from 'react';
import cls from 'classnames';

export type LinkProps = {
  children: React.ReactNode;
  onClick?: (event: MouseEvent, href: string | undefined) => void;
  href?: string;
  target?: string;
  className?: string;
  isBlock?: boolean;
};

const Link:React.ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = ({
  children,
  className,
  href,
  onClick,
  isBlock,
  ...rest
}, ref) => {
  const handleClick = useMemo(
    () => {
      if (!onClick) {
        return undefined;
      }

      return (e: MouseEvent): void => {
        const { shiftKey, altKey, ctrlKey, metaKey } = e;
        if (!(shiftKey || altKey || ctrlKey || metaKey)) {
          e.preventDefault();
          onClick(e, href);
        }
      };
    },
    [onClick, href]
  );

  return (
    <a
      {...rest}
      ref={ref}
      onClick={handleClick}
      href={href}
      className={cls(
        'text-primary-500',
        (onClick || href) && !isBlock ? 'hover:underline' : '',
        onClick || href ? 'cursor-pointer' : 'cursor-default',
        className
      )}
    >
      {children}
    </a>
  );
};

export default React.forwardRef(Link);
