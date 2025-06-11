import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-16 bg-[#FF5926] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Precisa de conserto no seu microondas?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Nossa equipe está pronta para ajudar com um serviço rápido e de
          qualidade
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contato">
            <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#FF5926] transition-colors cursor-pointer">
              Fale conosco
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}