import clsx from 'clsx';

/**
 * @param {{
 *   label?: string,
 *   required?: boolean,
 *   htmlFor?: string,
 * }}
 */
export default function UiFieldLabel({ label, required, htmlFor }) {
  if (!label) return null;

  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        required && "after:text-orange-600 after:content-['*']",
        'mb-1 block text-sm font-medium text-slate-900 after:ml-0.5',
      )}
    >
      {label}
    </label>
  );
}
