import clsx from 'clsx';

/*
@param {{
  children,
  className: string,
  size: 'lg' | 'md',
  variant: 'primary' | 'outline',
}} props
*/

export default function UiButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    'transition-colors',
    className,
    {
      md: 'font-[Inter] leading-[1.2] rounded text-sm px-6 py-2',
      lg: 'font-[Inter] leading-[1.2] rounded-lg text-2xl px-5 py-2',
    }[size],
    {
      primary: 'bg-teal-600 text-white hover:bg-teal-500',
      outline: 'border border-teal-600 text-teal-600 hover:bg-teal-50',
    }[variant],
  );

  return <button className={buttonClassName}>{children}</button>;
}
