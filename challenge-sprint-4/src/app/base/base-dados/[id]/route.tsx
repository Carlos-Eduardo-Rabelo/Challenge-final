import { TipoPessoa } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: number } }) {
    const file = await fs.readFile(process.cwd() + 'src/app/base/db.json', 'utf8');
    const pessoas: TipoPessoa[] = JSON.parse(file);

    const pessoa = pessoas.find(p => p.id == params.id);

    return NextResponse.json(pessoa);
}