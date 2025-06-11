import Head from 'next/head';
import { FaClock, FaCheck, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

export default function ConsertoRapido() {
  return (
    <>
      <Head>
        <title>Conserto em 30 Minutos - Casa do Microondas</title>
        <meta name="description" content="Serviço expresso de conserto de micro-ondas em até 30 minutos na Casa do Microondas. Confira as condições." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className='min-h-screen bg-gray-50'>
        <section className='bg-[#FF5926] py-12 text-white md:py-16'>
          <div className='container mx-auto px-4 text-center sm:px-6 lg:px-8'>
            <div className='mb-4 flex items-center justify-center gap-4'>
              <FaClock className="text-4xl" />
              <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>
                CONSERTO EM 30 MINUTOS
              </h1>
            </div>
            <p className='mx-auto max-w-3xl text-lg md:text-xl'>
              Serviço expresso para seu micro-ondas com agilidade e qualidade
            </p>
          </div>
        </section>

        <section className='container mx-auto px-4 py-12 sm:px-6 lg:px-8'>
          <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
            <div className='bg-[#FF5926] px-6 py-4 text-white'>
              <div className="flex items-center gap-3">
                <FaInfoCircle className="text-xl" />
                <h2 className='font-bold text-xl'>Informações Importantes</h2>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className='mb-6 text-gray-700 text-lg'>
                Informamos aos nossos clientes que orçamento e conserto em 30 minutos serão realizados desde que:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className='mt-1 flex-shrink-0'>
                    <FaCheck className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 text-lg'>O cliente aguarde no balcão</h3>
                    <p className="text-gray-600">A preferência será de quem estiver aguardando</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className='mt-1 flex-shrink-0'>
                    <FaExclamationTriangle className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 text-lg'>Não seja aparelho importado</h3>
                    <p className="text-gray-600">Pode haver dificuldade em encontrar peças ou fazer adaptações</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className='mt-1 flex-shrink-0'>
                    <FaExclamationTriangle className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 text-lg'>Não tenha vindo de outra oficina</h3>
                    <p className="text-gray-600">Algumas vezes vêm todo mexido, faltando peças ou com a fiação trocada</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className='mt-1 flex-shrink-0'>
                    <FaClock className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 text-lg'>Seja dentro do horário do técnico</h3>
                    <p className="text-gray-600">
                      Horário de atendimento: <strong className="text-[#FF5926]">08:30h às 11:30h</strong> e <strong className="text-[#FF5926]">13h às 16:30h</strong>
                      <br />
                      Após este horário será orçado e consertado no dia seguinte
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className='mt-1 flex-shrink-0'>
                    <FaExclamationTriangle className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 text-lg'>Não necessite de pintura ou retoque</h3>
                    <p className="text-gray-600">Nesse caso precisa-se de até 15 dias para ficar pronto</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className='mt-1 flex-shrink-0'>
                    <FaExclamationTriangle className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 text-lg'>Exceções</h3>
                    <p className="text-gray-600">
                      Não serão avaliados na hora os micro-ondas de Convecção, Fornos Elétricos Fischer Lumen, 
                      Fornos Elétricos de Embutir 60L de qualquer marca, máquinas de pão ou qualquer outro 
                      aparelho que o técnico julgar necessário mais tempo para avaliação.
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-10 rounded-r border-[#FF5926] border-l-4 bg-gray-50 p-4'>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <FaInfoCircle className='mt-1 text-[#FF5926] text-xl' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 text-lg'>Observações importantes</h3>
                    <p className='mt-2 text-gray-600'>
                      Dentro dos 30 minutos está incluso a limpeza e higienização. Mas caso o aparelho esteja 
                      muito engordurado, com pó incrustado ou precise de cuidados extras (polimento, tirar 
                      manchas, limpeza dos dutos) pode demorar um pouco mais.
                    </p>
                    <p className='mt-4 font-medium text-gray-600'>
                      Contamos com sua compreensão.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className='font-bold text-2xl text-[#FF5926]'>CASA DO MICROONDAS</p>
                <p className='mt-2 text-gray-500'>Qualidade e agilidade no conserto do seu eletrodoméstico</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}