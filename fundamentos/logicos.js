function compras(trabalho1, trabalho2) {
  const compraSoverte = trabalho1 || trabalho2;
  const compraTv50 = trabalho1 && trabalho2;
  //const compraTv32 = !!(trabalho1 ^ trabalho2); //bitwise xor
  const compraTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !compraSoverte; // operador unario

  return { compraSoverte, compraTv50, compraTv32, manterSaudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

console.log(compras(true, true).compraTv32.valueOf())
