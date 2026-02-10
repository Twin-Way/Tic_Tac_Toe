import clsx from 'clsx';

/**
 * @param {{
 *   helperText?: string,
 *   isError?: string,
 * }}
 */
export default function UiFieldMessage({ helperText, isError }) {
  if (!helperText && !isError) return null;

  return (
    <p className={clsx('mt-1 text-sm', isError ? 'text-orange-600' : 'text-slate-400')}>{isError ?? helperText}</p>
  );
}
