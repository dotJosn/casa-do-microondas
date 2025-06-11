import Head from "next/head";
import { LocationCard } from "@/app/ui/components/location/LocationCard";

export default function Localizacao() {
  const unidades: Unidades[] = [
    {
      cidade: "Curitiba",
      bairro: "Rebouças",
      nome: "Unidade Kennedy",
      endereco: "Av. Presidente Kennedy, 410 - Rebouças",
      telefone: "(41) 3332-8000",
      horario: "Seg-Sex: 08h-18h | Sáb: 09h-13h",
      coordenadas: "-25.4371,-49.2700",
    },
    {
      cidade: "Curitiba",
      bairro: "Santa Felicidade",
      nome: "Unidade Santa Felicidade",
      endereco: "Rua Saturnino Miranda, 84 - Santa Felicidade",
      telefone: "(41) 3272-8000",
      horario: "Seg-Sex: 08h-19h | Sáb: 09h-14h",
      coordenadas: "-25.3865,-49.3104",
    },
    {
      cidade: "São José dos Pinhais",
      bairro: "Centro",
      nome: "Unidade Rui Barbosa",
      endereco: "Av. Rui Barbosa, 8706 - Centro",
      telefone: "(41) 3332-8000",
      horario: "Seg-Sex: 08h-17h | Sáb: 09h-12h",
      coordenadas: "-25.5353,-49.2059",
    },
  ];

  return (
    <>
      <Head>
        <title>Nossas Unidades - Casa do Microondas</title>
        <meta
          name="description"
          content="Encontre a unidade da Casa do Microondas mais próxima de você em Curitiba e São José dos Pinhais"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <section className="bg-[#FF5926] py-12 text-white md:py-16">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl">
              Nossas Unidades
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl">
              Encontre a Casa do Microondas mais próxima de você na região de
              Curitiba
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mb-16 md:gap-8 lg:grid-cols-3">
            {unidades.map((unidade) => (
              <LocationCard
                key={unidade.nome}
                cidade={unidade.cidade}
                bairro={unidade.bairro}
                nome={unidade.nome}
                endereco={unidade.endereco}
                telefone={unidade.telefone}
                horario={unidade.horario}
                numeroUnidade={unidades.indexOf(unidade) + 1}
              />
            ))}
          </div>

          <div className="rounded-lg bg-white p-4 shadow-lg sm:p-6 md:p-8">
            <h2 className="mb-6 font-bold text-gray-800 text-xl sm:text-2xl">
              Localização no Mapa
            </h2>

            <div className="mb-8">
              <h3 className="mb-3 font-semibold text-gray-700 text-lg">
                {unidades[0].nome}
              </h3>
              <div className="aspect-h-9 aspect-w-16 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5494757412584!2d-49.267548484985376!3d-25.45332148377765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce48c9ef39769%3A0xef8a017c3ba84507!2sAv.+Pres.+Kennedy%2C+410+-+Rebou%C3%A7as%2C+Curitiba+-+PR!5e0!3m2!1spt-BR!2sbr!4v1497629686263"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                  aria-label={`Mapa da ${unidades[0].nome}`}
                  title={`Mapa da ${unidades[0].nome}`}
                />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-3 font-semibold text-gray-700 text-lg">
                {unidades[1].nome}
              </h3>
              <div className="aspect-h-9 aspect-w-16 overflow-hidden rounded-lg">
                <iframe
                  src="https://maps.google.com.br/maps?f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Rua+Saturnino+Miranda,+84+-+Santa+Felicidade++-+curitiba&amp;aq=&amp;sll=-25.453343,-49.265397&amp;sspn=0.00838,0.013937&amp;ie=UTF8&amp;hq=&amp;hnear=R.+Saturnino+Miranda,+84+-+Santa+Felicidade,+Curitiba+-+Paran%C3%A1,+82030-320&amp;t=m&amp;z=14&amp;ll=-25.400057,-49.334174&amp;output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                  title={`Mapa da ${unidades[1].nome}`}
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-700 text-lg">
                {unidades[2].nome}
              </h3>
              <div className="aspect-h-9 aspect-w-16 overflow-hidden rounded-lg">
                <iframe
                  src={
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.222540833897!2d-49.2085486849871!3d-25.5352989838085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfd0f8bdf3e3d%3A0x5e7e5b1a5a6e5c5e!2sAv.%20Rui%20Barbosa%2C%208706%20-%20Centro%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                  }
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                  title={`Mapa da ${unidades[2].nome}`}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
