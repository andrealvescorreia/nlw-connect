import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
}

export function Button(props: ButtonProps) {
  return <button
    className="flex justify-between items-center px-5 h-12 w-full bg-gray-500 text-blue font-semibold rounded-xl cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
    {...props}
  />
}