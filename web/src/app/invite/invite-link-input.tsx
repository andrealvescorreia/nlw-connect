import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

export default function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/dufhiudhfi"
      />

      <IconButton className="-mr-2">
        {/* margin-right: -8px; */}
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
