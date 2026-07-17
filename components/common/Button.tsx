import React from 'react';
import createConditionalClass from '@/utils/createConditionalClass';
import Spinner from './Spinner';

export interface ButtonProps {
  children: React.ReactNode;
  type: 'primary' | 'secondary' | 'yellow' | 'red' | 'cancel' | 'danger';
  isDisabled?: boolean;
  isLoading?: boolean;
  htmlType?: 'submit' | 'button';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  isDisabled,
  isLoading,
  htmlType = 'submit',
  className,
  onClick,
}) => {
  return (
    <button
      type={htmlType}
      onClick={!isDisabled && !isLoading ? onClick : undefined}
      disabled={isDisabled || isLoading}
      className={createConditionalClass(
        'glow-primary-sm rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 lg:px-7 lg:text-base',
        {
          'bg-primary text-white hover:bg-primaryHover': type === 'primary',
          'glass glass-hover text-white': type === 'secondary',
          'bg-red-500/90 text-white shadow-[0_0_16px_rgba(239,68,68,0.4)]':
            type === 'danger',
          'glass text-white hover:bg-white/10': type === 'cancel',
          'bg-gold text-white glow-gold': type === 'yellow',
          'text-white bg-primary hover:bg-primaryHover':
            type === 'red',
          'cursor-not-allowed opacity-50 hover:translate-y-0': isDisabled || isLoading,
          [className as string]: Boolean(className),
        },
      )}
    >
      {isLoading && ['primary', 'secondary', 'yellow'].includes(type) ? (
        <Spinner
          type={
            ['primary', 'secondary'].includes(type) ? 'secondary' : 'primary'
          }
          className="mx-auto h-4 w-4"
        />
      ) : (
        children
      )}
    </button>
  );
};
export default Button;
