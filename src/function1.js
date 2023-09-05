"use strict";
function dizOi(nome) {
    return `Olá ${nome}`;
}
const cumprimento = dizOi("Alice");
console.log(cumprimento);
class Cumprimento {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
const pessoa = new Cumprimento("Alice");
console.log(pessoa.dizOla());
