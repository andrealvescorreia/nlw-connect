import { Radio } from 'lucide-react'
import Image from 'next/image'
import logo from '../../assets/logo.svg'
import SubscriptionForm from './subscription-form'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="min-h-dvh flex justify-center items-center gap-16 flex-col md:flex-row">
      <div className="flex flex-col items-center flex-1 md:items-start gap-10 ">
        <Image src={logo} alt="devstage" width={108.5} height={30} />
        <h1 className="text-4xl font-heading text-center md:text-left leading-none font-medium flex flex-col md:text-7xl  max-w-[550px]">
          {/* max-width para quebrar o texto do titulo em 2*/}
          <span className="text-blue">CodeCraft </span>
          Summit 2025
        </h1>

        <div className="flex w-full gap-5 items-stretch flex-col md:flex-row text-gray-300">
          <div className="flex-1 bg-gray-700 rounded-2xl border border-gray-600 p-8 space-y-6 leading-relaxed text-sm md:text-base">
            <div className=" flex items-center justify-between">
              <h2 className="font-heading text-gray-200 font-semibold text-xl">
                Sobre o evento
              </h2>
              <span className="text-xs text-purple font-semibold flex items-center gap-2">
                <Radio className="size-5" />
                AO VIVO
              </span>
            </div>
            <p>
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento. Vamos
              mergulhar nas tendências mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, workshops e hackathons.
              <br />
              <br />
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
            </p>
          </div>
          <Suspense>
            <SubscriptionForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
