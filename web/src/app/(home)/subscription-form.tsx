'use client'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export default function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  function onSubscribe(data: SubscriptionSchema) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className=" bg-gray-700 rounded-2xl border border-gray-600 p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading text-gray-200 font-semibold text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              placeholder="Nome completo"
              type="text"
              {...register('name')}
            />
          </InputRoot>

          {errors?.name && (
            <p className="font-semibold text-xs text-danger">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              placeholder="E-mail"
              type="email"
              {...register('email')}
            />
          </InputRoot>
          {errors?.email && (
            <p className="font-semibold text-xs text-danger">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <Button>
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
