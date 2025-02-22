import Image from 'next/image'
import gold from '../../../assets/medal_1.svg'
import silver from '../../../assets/medal_2.svg'
import copper from '../../../assets/medal_3.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[550px] md:max-w-[440px] space-y-5 ">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="relative py-9 rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 leading-none ">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span> | Diogo Guimarães
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1.030
          </span>
          <Image
            src={gold}
            alt="gold medal"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative py-9 rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 leading-none">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | Diogo Guimarães
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            901
          </span>
          <Image
            src={silver}
            alt="silver medal"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative py-9 rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 leading-none">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | Diogo Guimarães
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            869
          </span>
          <Image
            src={copper}
            alt="copper medal"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
