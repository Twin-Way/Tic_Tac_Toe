import UiFieldLabel from './UiFieldLabel';
import UiFieldInput from './UiFieldInput';
import UiFieldMessage from './UiFieldMessege.jsx';

/**
 * @param {{
 *   label?: string,
 *   placeholder: string,
 *   helperText?: string,
 *   isError?: string,
 *   className?: string,
 *   required?: boolean,
 * }}
 */
export default function UiTextField({ label, required, helperText, isError, className, placeholder }) {
  const id = 'example2';

  return (
    <div className={className}>
      <UiFieldLabel label={label} required={required} htmlFor={id} />
      <UiFieldInput id={id} required={required} placeholder={placeholder} isError={isError} type="email" />
      <UiFieldMessage helperText={helperText} isError={isError} />
    </div>
  );
}
