import { FaRegQuestionCircle as Sobre } from "react-icons/fa";
import { FaHandshakeSimple as Maos } from "react-icons/fa6";
import { IoPersonCircle as Entrar } from "react-icons/io5";

import Link from "next/link";

export default function Menu () {
    return (
        <nav className="nav-menu">
            <ul className="itensMenu">
                <li>
                    
                    <Link href="#sobre">
                        <Sobre className="inline"></Sobre>
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link href="#parceiros">
                        <Maos className="inline"></Maos>
                        Parceiros
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <Entrar className="inline"></Entrar>
                        Entrar
                    </Link>
                    
                </li>
            </ul>
        </nav>
    )
}