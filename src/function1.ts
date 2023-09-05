function dizOi (nome:string):string {

  return `Olá ${nome}`
  }
  const cumprimento = dizOi("Alice")
  
  console.log(cumprimento)




class Cumprimento {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  dizOla(): string {
    return `${this.nome} disse oi`;
  }
}

const pessoa = new Cumprimento("Alice");
console.log(pessoa.dizOla());