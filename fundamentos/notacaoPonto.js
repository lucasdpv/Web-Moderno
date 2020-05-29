console.log(Math.ceil(6.1));

const obj1 = {};

obj1.nome = "Bola";
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome;
}

const ojb2 = new Obj('Lucas')
const ojb3 = new Obj('Stephanie')

console.log(ojb2.nome);
console.log(ojb3.nome);
