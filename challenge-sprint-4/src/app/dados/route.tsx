"use client";
import { TipoPessoa } from "@/types";
import { useEffect, useState } from "react";

export default function Pessoas() {

    const [lista, setLista] = useState<TipoPessoa[]>([])

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch("http://localhost:3000/base/base-dados", {
                method: "POST", // ou outro método suportado
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ /* dados que você quer enviar */ })
            });
            const data = await response.json();
            console.log(data);
            setLista(data);
        }
        chamadaApi();
    }, []);


    return (
        <div>
            <h1>Pessoas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Sexo</th>
                        <th>Tipo de Veiculo</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((pessoa) => (
                        <tr key={pessoa.id}>
                            <td>{pessoa.id}</td>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.idade}</td>
                            <td>{pessoa.sexo}</td>
                            <td>{pessoa.tipoVeiculo}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>Total de produtos: {lista.length}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}