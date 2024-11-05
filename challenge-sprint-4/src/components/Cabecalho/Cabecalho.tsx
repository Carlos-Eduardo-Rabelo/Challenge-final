import Link from "next/link";
import Menu from "../Menu/Menu";

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <h1 className="logo"><Link href="/">Conserta Fácil</Link> </h1>
            <Menu/>
        </header>
    )
}