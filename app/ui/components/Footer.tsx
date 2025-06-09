import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FF5926] text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          © Casa do Microondas em Curitiba - Conserto de Microondas Curitiba
        </p>
        <p className="text-xs md:text-sm mt-2 text-gray-100">
          Implantado e Customizado por <Link href="https://github.com/dotJosn" className="underline">JOSN</Link>
        </p>
      </div>
    </footer>
  );
}