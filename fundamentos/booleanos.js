let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
/* !! = não não gera um verdadeiro
    ! = gera um falso
*/
console.log(!!isAtivo);

console.log("\nOs verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("\nOs falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("\nPra finalizar...");
let nome = "Lucas";
console.log(nome || "Desconhecido");

let nomeVazio = "";
console.log(nomeVazio || "Desconhecido");
