import { ComponentProps } from "react";

// Pattern: Composition

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}
export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    >
    </div>
  )
}

interface InputIconProps extends ComponentProps<'span'> { }
export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 
      group-[&:not(:has(input:placeholder-shown))]:text-gray-100
      group-data-[error=true]:text-danger"
      {...props}
    >
    </span>
  )
}


interface InputField extends ComponentProps<'input'> { }
export function InputField(props: InputField) {
  return (
    <input
      className="text-gray-100 w-full outline-0 placeholder:text-gray-400"
      {...props}
    />
  )
}