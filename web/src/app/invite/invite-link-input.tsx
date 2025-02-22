'use client' // client component, carrega javascript no lado do cliente
// necessário pois existe interação do usuário com a página, a partir do evento de onClick!

import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkInputProps {
  inviteLink: string
}

export default function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  async function copyInviteLinkToClipboard() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLinkToClipboard}>
        {/* margin-right: -8px; */}
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
