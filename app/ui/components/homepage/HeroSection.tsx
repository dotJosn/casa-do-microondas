import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#FF5926] py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Assistência Técnica de Microondas
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Conserto profissional para todas as marcas com garantia de 90 dias
        </p>
        <Link href="/contato">
          <button className="bg-white text-[#FF5926] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer">
            Agende seu Serviço
          </button>
        </Link>
      </div>
    </section>
  );
}