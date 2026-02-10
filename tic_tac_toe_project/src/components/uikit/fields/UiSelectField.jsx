import UiFieldLabel from './UiFieldLabel';
import UiFieldSelect from './UiFieldSelect';
import UiFieldMessage from './UiFieldMessege.jsx';

/**
 * @param {{
 *   label?: string,
 *   required?: boolean,
 *   value: any,
 *   onChange: (value: any) => void,
 *   options: { value: any, label: string }[],
 *   placeholder?: string,
 *   helperText?: string,
 *   isError?: string,
 *   className?: string,
 *   disabled?: boolean,
 * }}
 */
export default function UiSelectField({
  label,
  required,
  value,
  onChange,
  options,
  placeholder,
  helperText,
  isError,
  className,
  disabled,
}) {
  const id = 'ui-select-field';

  return (
    <div className={className}>
      <UiFieldLabel label={label} required={required} htmlFor={id} />

      <UiFieldSelect
        id={id}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isError={isError}
        disabled={disabled}
      />

      <UiFieldMessage helperText={helperText} isError={isError} />
    </div>
  );
}
