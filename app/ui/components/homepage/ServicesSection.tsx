import Link from "next/link";

type Service = {
  title: string;
  description: string;
  icon: string;
};

export default function ServicesSection() {
  const services: Service[] = [
    {
      title: "Conserto de Microondas",
      description:
        "Reparo técnico especializado para todos os modelos e marcas de microondas",
      icon: "🔧",
    },
    {
      title: "Conserto de Forno Elétrico",
      description: "Conserto profissional de fornos elétricos com garantia",
      icon: "🔥",
    },
    {
      title: "Reformas de Microondas",
      description: "Reforma completa deixando seu microondas como novo",
      icon: "🔄",
    },
    {
      title: "Acessórios Originais",
      description: "Venda de peças e acessórios originais para seu aparelho",
      icon: "⚙️",
    },
    {
      title: "Microondas Novos e Usados",
      description: "Venda de aparelhos novos e seminovos com garantia",
      icon: "🛒",
    },
    {
      title: "Busca e Entrega",
      description: "Serviço conveniente de busca e entrega do seu aparelho",
      icon: "🚚",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href="/contato">
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center h-full flex flex-col">
        <div className="text-4xl mb-4 flex-shrink-0">{service.icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex-shrink-0">
          {service.title}
        </h3>
        <p className="text-gray-600 flex-grow">{service.description}</p>
      </div>
    </Link>
  );
}