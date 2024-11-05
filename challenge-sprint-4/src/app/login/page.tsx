"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
    nome: string;
    idade: number;
    sexo: string;
    tipoVeiculo: string;
};

const MeuFormulario: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        nome: "",
        idade: 0,
        sexo: "",
        tipoVeiculo: "",
    });

    const [mensagem, setMensagem] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "idade" ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Dados enviados:", formData);
        setMensagem("Formulário enviado com sucesso!");


        await new Promise((resolve) => setTimeout(resolve, 1000));


        setTimeout(() => {
            router.push("/");
        }, 3000);
        
        // Limpar o formulário
        setFormData({ nome: "", idade: 0, sexo: "", tipoVeiculo: "" });
    };

    return (
        <div className="main">
            <h1 className="titulo">Cadastro de Pessoa</h1>
            <form onSubmit={handleSubmit} className="bg-yellow-100 border-2 border-black w-80 p-4 text-2xl m-auto rounded-2xl">
                <div>
                    <label>
                        Nome:
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            className="rounded-xl"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Idade:
                        <input
                            type="number"
                            name="idade"
                            value={formData.idade || ""}
                            onChange={handleChange}
                            required
                            className="rounded-xl"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Sexo:
                        <select name="sexo" value={formData.sexo} onChange={handleChange} required>
                            <option value="">Selecione...</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Tipo de Veículo:
                        <input
                            type="text"
                            name="tipoVeiculo"
                            value={formData.tipoVeiculo}
                            onChange={handleChange}
                            required
                            className="rounded-xl"
                        />
                    </label>
                </div>
                <button type="submit" className="p-2 bg-white rounded-xl m-auto mt-[20px]">Enviar</button>
            </form>
            {mensagem && <div style={{ color: 'green' }}>{mensagem}</div>}
        </div>
    );
};

export default MeuFormulario;
