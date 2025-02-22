import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Mail, User } from 'lucide-react'

export default function SubscriptionForm() {
  return (
    <form className=" bg-gray-700 rounded-2xl border border-gray-600 p-8 space-y-6 w-full md:max-w-[440px]">
      <h2 className="font-heading text-gray-200 font-semibold text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField placeholder="Nome completo" type="text" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField placeholder="E-mail" type="email" />
        </InputRoot>
      </div>
      <Button>
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
