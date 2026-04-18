import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Material Design 3 Button Component
 * Reusable button strictly following MD3 guidelines.
 */
const Button = forwardRef(
  (
    {
      variant = 'filled',
      size = 'medium',
      children,
      icon,
      trailingIcon,
      disabled = false,
      fullWidth = false,
      className = '',
      type = 'button',
      onClick,
      ...props
    },
    ref
  ) => {
    // Base classes strict to MD3 button specs:
    // fully rounded, Label Large tracking/weight
    const baseClasses =
      'relative inline-flex items-center justify-center box-border rounded-full font-medium tracking-[0.1px] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 overflow-hidden select-none';

    // Using custom M3 colors defined in tailwind.config.cjs
    const variantClasses = {
      filled:
        'bg-m3-primary text-white hover:bg-[#8A0027] hover:shadow-m3-sm active:bg-[#720020] active:shadow-none focus-visible:ring-m3-primary',
      outlined:
        'border border-m3-outline text-m3-primary bg-transparent hover:bg-m3-primary/10 hover:border-m3-primary active:bg-m3-primary/20 focus-visible:ring-m3-primary',
      text: 'bg-transparent text-m3-primary hover:bg-m3-primary/10 active:bg-m3-primary/20 focus-visible:ring-m3-primary',
      elevated:
        'bg-m3-surface text-m3-primary shadow-m3-sm hover:shadow-m3-md hover:bg-white active:bg-m3-surface/80 active:shadow-m3-sm focus-visible:ring-m3-primary',
      tonal:
        'bg-m3-primary-container text-[#3A000D] hover:bg-m3-primary-container/80 hover:shadow-m3-sm active:bg-m3-primary-container/60 active:shadow-none focus-visible:ring-m3-primary',
    };

    // Disabled states exactly as MD3 (12% opacity bg, 38% opacity text relative to on-surface)
    const disabledClasses = {
      filled: 'bg-gray-500/12 text-gray-500/38 shadow-none cursor-not-allowed',
      outlined: 'border border-gray-500/12 text-gray-500/38 bg-transparent cursor-not-allowed',
      text: 'bg-transparent text-gray-500/38 cursor-not-allowed',
      elevated: 'bg-gray-500/12 text-gray-500/38 shadow-none cursor-not-allowed',
      tonal: 'bg-gray-500/12 text-gray-500/38 cursor-not-allowed',
    };

    // Setup sizes according to MD3 proportions
    const sizeTheme = {
      small: {
        height: 'h-8',
        text: 'text-[13px]',
        gap: 'gap-1.5',
        iconSize: 'w-[16px] h-[16px]',
        padding: {
          default: variant === 'text' ? 'px-2' : 'px-4',
          leading: variant === 'text' ? 'pl-3 pr-4' : 'pl-3 pr-4', // text is handled below but we keep these simple
          trailing: variant === 'text' ? 'pl-4 pr-3' : 'pl-4 pr-3',
          both: variant === 'text' ? 'px-2' : 'px-3',
          iconOnly: 'w-8 p-0',
        },
      },
      medium: {
        height: 'h-10',
        text: 'text-sm',
        gap: 'gap-2',
        iconSize: 'w-[18px] h-[18px]',
        padding: {
          default: variant === 'text' ? 'px-3' : 'px-6',
          leading: variant === 'text' ? 'pl-3 pr-4' : 'pl-4 pr-6',
          trailing: variant === 'text' ? 'pl-4 pr-3' : 'pl-6 pr-4',
          both: variant === 'text' ? 'px-3' : 'px-4',
          iconOnly: 'w-10 p-0',
        },
      },
      large: {
        height: 'h-12',
        text: 'text-base',
        gap: 'gap-2.5',
        iconSize: 'w-[20px] h-[20px]',
        padding: {
          default: variant === 'text' ? 'px-4' : 'px-8',
          leading: variant === 'text' ? 'pl-4 pr-5' : 'pl-6 pr-8',
          trailing: variant === 'text' ? 'pl-5 pr-4' : 'pl-8 pr-6',
          both: variant === 'text' ? 'px-4' : 'px-6',
          iconOnly: 'w-12 p-0',
        },
      },
    };

    const currentSize = sizeTheme[size] || sizeTheme.medium;

    // Padding adjustments per strict MD3 guidelines based on icon presence
    let paddingClasses = currentSize.padding.default;
    if (icon && !trailingIcon) {
      paddingClasses = currentSize.padding.leading;
    } else if (!icon && trailingIcon) {
      paddingClasses = currentSize.padding.trailing;
    } else if (icon && trailingIcon) {
      paddingClasses = currentSize.padding.both;
    }

    // If no children (icon-only button)
    if (!children) {
      paddingClasses = currentSize.padding.iconOnly;
    }

    const widthClass = fullWidth ? 'w-full flex' : 'inline-flex';
    const stateClasses = disabled ? disabledClasses[variant] : variantClasses[variant];

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseClasses} ${currentSize.height} ${currentSize.text} ${currentSize.gap} ${stateClasses} ${paddingClasses} ${widthClass} ${className}`}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        {...props}
      >
        {/* Optional Leading Icon */}
        {icon && (
          <span className={`flex items-center justify-center ${currentSize.iconSize}`}>{icon}</span>
        )}

        {/* Button Label */}
        {children && <span>{children}</span>}

        {/* Optional Trailing Icon */}
        {trailingIcon && (
          <span className={`flex items-center justify-center ${currentSize.iconSize}`}>
            {trailingIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

Button.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outlined', 'text', 'elevated', 'tonal']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node,
  icon: PropTypes.node,
  trailingIcon: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

export default Button;
