const nome = "Rebeca";
const concaTenacao = "Olá " + nome + "!";
const template = `
    Olá
    ${nome}!`;
console.log(concaTenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
