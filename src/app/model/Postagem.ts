import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem{
    public idPostagem: number;
    public dataPostagem: Date;
    public titulo: string;
    public texto: string;
    public temaRelacionado: Tema;
    public usuarioRelacionado: Usuario
}