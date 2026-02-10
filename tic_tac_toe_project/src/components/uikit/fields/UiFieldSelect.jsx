import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';

/**
 * @param {{
 *   value: any,
 *   onChange: (value: any) => void,
 *   options: { value: any, label: string }[],
 *   placeholder?: string,
 *   isError?: string,
 *   disabled?: boolean,
 *   id?: string,
 * }}
 */
export default function UiFieldSelect({
  value,
  onChange,
  options,
  placeholder = 'Выберите значение',
  isError,
  disabled,
  id,
}) {
  const selectedOption = options.find(o => o.value === value);

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div className="relative">
        <Listbox.Button
          id={id}
          className={clsx(
            'leading-[1.2] text-sm py-2 px-2 block w-full rounded-md shadow-sm text-left',
            'focus:outline-none focus:ring-opacity-50',
            'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
            isError
              ? 'focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600'
              : 'focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-200',
          )}
        >
          <span className={clsx('block truncate', !selectedOption && 'text-slate-400')}>
            {selectedOption?.label ?? placeholder}
          </span>
        </Listbox.Button>

        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
            {options.map(option => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  clsx('cursor-pointer select-none px-2 py-2', active ? 'bg-teal-50 text-teal-700' : 'text-slate-900')
                }
              >
                {({ selected }) => (
                  <span className={clsx('block truncate', selected && 'font-medium')}>{option.label}</span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
