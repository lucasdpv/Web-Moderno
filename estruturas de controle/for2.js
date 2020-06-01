const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (const i in notas) {
  console.log(i, notas[i]);
}

const pessoa = {
  nome: "Lucas",
  sobreNome: "Vieira",
  idade: 27,
  peso: 80,
};

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
