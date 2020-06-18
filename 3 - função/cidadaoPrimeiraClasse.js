// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {}

// Armazenar em uma variavel
const fun2 = function () {};

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
  return "opa";
};
console.log(obj.falar());

// Passar função como parametro
function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});

// Uma função pode retornar/conter um função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}


var qualquer = [{id:'1'},{id:'2'},{id:'3'},{id:'4'}]

var qualquer1 = [2,3,4,5]


console.log(qualquer1.reduce(myFunc));


function myFunc(total, num ) {
   return total - num;
}
