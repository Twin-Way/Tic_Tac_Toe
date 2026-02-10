import clsx from 'clsx';

/**
 * @param {{
 *   id: string,
 *   required?: boolean,
 *   placeholder: string,
 *   isError?: string,
 *   type?: string,
 * }}
 */
export default function UiFieldInput({ id, required, placeholder, isError, type = 'text' }) {
  return (
    <input
      id={id}
      type={type}
      required={required}
      placeholder={placeholder}
      className={clsx(
        'leading-[1.2] text-sm py-2 px-2 block w-full rounded-md shadow-sm focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
        isError
          ? 'focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600'
          : 'focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-200',
      )}
    />
  );
}
