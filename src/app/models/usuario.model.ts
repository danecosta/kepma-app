export class Usuario {
    id: string;
    email: string;
    nome: string;
    senha: string;
    confirmarsenha: string;

    constructor(nome = '', email = '') { }
}
