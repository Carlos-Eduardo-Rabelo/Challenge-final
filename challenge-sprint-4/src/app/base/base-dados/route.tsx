import { TipoPessoa } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {

    const file = await fs.readFile(process.cwd() + '/src/app/base/db.json', 'utf-8');
    const pessoas = JSON.parse(file);

    return NextResponse.json(pessoas);
}

export async function POST(request: Request) {
    const file = await fs.readFile(process.cwd() + '/src/app/base/db.json', 'utf-8');
    const pessoas: TipoPessoa[] = JSON.parse(file);

    // const {nome,preco,estoque} = await request.json();
    const pessoa: TipoPessoa = await request.json();

    //Criar um ID no novo OBJETO que será inserido no base.json.
    // const produto = {nome,preco,estoque} as TipoProduto;
    pessoa.id = (pessoas[pessoas.length - 1].id + 1);

    console.log(pessoa);

    //Inserir o novo produto que já possui inclusive ID na lista de produtos:
    pessoas.push(pessoa);

    //Processo de manipulação do arquuivo com promises e process.cwd para colocar a lista no arquivo e atualizar ele.

    //1 - Convertendo a lista em STRING
    const fileUpdate = JSON.stringify(pessoas);
    //2 - Escrevendo no arquivo através do caminho especificado.
    await fs.writeFile(process.cwd() + '/src/app/base/db.json', fileUpdate);

    return NextResponse.json(pessoa);
}