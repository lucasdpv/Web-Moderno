// par nome/valor
const saudacao = "Opa"; // contexto lexico 1

function exec() {
  const saudacao = "Falaaa"; // contexto lexico 2
  return saudacao;
}

const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logadouro: "Rua muito legal",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);

