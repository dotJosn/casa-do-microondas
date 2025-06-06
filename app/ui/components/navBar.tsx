import Image from "next/image";
import Link from "next/link";

export default function NavBAr(props: string) {
    return (
        <nav className="bg-[#FF5926] px-8 py-5 text-white flex justify-between items-center">
            <section>
                <Link href={props.inicio} >
                    <Image src={props.logo} alt={props.logoAlt} width={props.width} height={props.height} />
                </Link>
            </section>
            <ol className="list-none gap-6 flex font-bold">
                <li>
                    <Link
                        className="hover:text-[#FF0]"
                        href={props.inicio}>INICIO
                    </Link>
                </li>
                <li>
                    <Link
                        className="hover:text-[#FF0]"
                        href={props.local}>
                        LOCALIZAÇÃO
                    </Link>
                </li>
                <li>
                    <Link
                        className="hover:text-[#FF0]"
                        href={props.conserto}>
                        CONSERTO EM 30 MINUTOS
                    </Link>
                </li>
                <li>
                    <Link
                        className="hover:text-[#FF0]"
                        href={props.contato}>
                        CONTATO
                    </Link>
                </li>
            </ol>
        </nav>
    )
}
