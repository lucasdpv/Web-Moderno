// novo recurso do es2015

const pessoa = {
  nome: "lucas",
  idade: 27,
  endereco: {
    logadouro: "av. rogaciano leite",
    numero: 1060,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobreNome, bemHumorado = true } = pessoa;
console.log(sobreNome, bemHumorado);

const {
  endereco: { logadouro, numero, cep },
} = pessoa;
console.log(logadouro, numero, cep);

const {
  conta: { ag, num },
} = pessoa;
console.log(ag, num);
