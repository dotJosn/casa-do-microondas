import Link from "next/link";

export default function Footer() {
  return (
    <footer className='mt-auto bg-[#FF5926] py-6 text-white'>
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          © Casa do Microondas em Curitiba - Conserto de Microondas Curitiba
        </p>
        <p className='mt-2 text-gray-100 text-xs md:text-sm'>
          Implantado e Customizado por <Link href="https://github.com/dotJosn" className="underline">JOSN</Link>
        </p>
      </div>
    </footer>
  );
}