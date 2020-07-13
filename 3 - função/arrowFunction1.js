let dobro = function (a) {
  return a * 2;
};

dobro = (a) => {
  return a * 2;
};

dobro = (a) => a * 2; // retunr implícito

console.log(dobro(Math.PI));

let ola = function () {
  return "Olá";
};

let ola = () => "olá"; // let ola = _ => 'olá'; (ALTERNATIVA)
