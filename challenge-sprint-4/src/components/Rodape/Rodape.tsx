import Link from "next/link";

export default function Rodape() {
    return (
        <footer className="rodape">
            <div className="integrantes">
                <h1 className="titulo">Integrantes</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="https://github.com/Carlos-Eduardo-Rabelo">
                                Carlos Eduardo
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/GiovanniSouzaL">
                                Giovanni de Souza
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/luketa02496">
                                Lucas Abud
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="links-uteis">
                <h1 className="titulo">Links Úteis</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="https://www.portoseguro.com.br">
                                Porto Seguro    
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.oxigenioaceleradora.com.br">
                                Oxigênio Aceleradora
                            </Link>    
                        </li>
                        <li>
                            <Link href="https://www.fiap.com.br">
                                Fiap
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}