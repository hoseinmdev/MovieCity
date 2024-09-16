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
        'rounded-lg px-5 py-2 text-sm font-medium transition-all lg:px-7 lg:text-base',
        {
          'bg-primary text-white': type === 'primary',
          'border-neutral-800 text-neutral-800 border bg-transparent':
            type === 'secondary',
          'bg-error-400 text-white': type === 'danger',
          'border-gray4 border bg-white text-black hover:opacity-80':
            type === 'cancel',
          'bg-warning-400 text-white hover:opacity-80': type === 'yellow',
          'text-white bg-red-400 hover:opacity-80':
            type === 'red',
          'cursor-not-allowed opacity-50': isDisabled || isLoading,
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
