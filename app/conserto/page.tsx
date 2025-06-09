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

      <main className="bg-gray-50 min-h-screen">
        <section className="bg-[#FF5926] py-12 md:py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <FaClock className="text-4xl" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                CONSERTO EM 30 MINUTOS
              </h1>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Serviço expresso para seu micro-ondas com agilidade e qualidade
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[#FF5926] text-white py-4 px-6">
              <div className="flex items-center gap-3">
                <FaInfoCircle className="text-xl" />
                <h2 className="text-xl font-bold">Informações Importantes</h2>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-lg mb-6 text-gray-700">
                Informamos aos nossos clientes que orçamento e conserto em 30 minutos serão realizados desde que:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaCheck className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">O cliente aguarde no balcão</h3>
                    <p className="text-gray-600">A preferência será de quem estiver aguardando</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaExclamationTriangle className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Não seja aparelho importado</h3>
                    <p className="text-gray-600">Pode haver dificuldade em encontrar peças ou fazer adaptações</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaExclamationTriangle className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Não tenha vindo de outra oficina</h3>
                    <p className="text-gray-600">Algumas vezes vêm todo mexido, faltando peças ou com a fiação trocada</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaClock className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Seja dentro do horário do técnico</h3>
                    <p className="text-gray-600">
                      Horário de atendimento: <strong className="text-[#FF5926]">08:30h às 11:30h</strong> e <strong className="text-[#FF5926]">13h às 16:30h</strong>
                      <br />
                      Após este horário será orçado e consertado no dia seguinte
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaExclamationTriangle className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Não necessite de pintura ou retoque</h3>
                    <p className="text-gray-600">Nesse caso precisa-se de até 15 dias para ficar pronto</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaExclamationTriangle className="text-[#FF5926] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Exceções</h3>
                    <p className="text-gray-600">
                      Não serão avaliados na hora os micro-ondas de Convecção, Fornos Elétricos Fischer Lumen, 
                      Fornos Elétricos de Embutir 60L de qualquer marca, máquinas de pão ou qualquer outro 
                      aparelho que o técnico julgar necessário mais tempo para avaliação.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-gray-50 border-l-4 border-[#FF5926] p-4 rounded-r">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <FaInfoCircle className="text-[#FF5926] text-xl mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Observações importantes</h3>
                    <p className="text-gray-600 mt-2">
                      Dentro dos 30 minutos está incluso a limpeza e higienização. Mas caso o aparelho esteja 
                      muito engordurado, com pó incrustado ou precise de cuidados extras (polimento, tirar 
                      manchas, limpeza dos dutos) pode demorar um pouco mais.
                    </p>
                    <p className="text-gray-600 mt-4 font-medium">
                      Contamos com sua compreensão.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-2xl font-bold text-[#FF5926]">CASA DO MICROONDAS</p>
                <p className="text-gray-500 mt-2">Qualidade e agilidade no conserto do seu eletrodoméstico</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}