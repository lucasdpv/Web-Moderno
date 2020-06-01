function tratarErroElancar(erro) {
  throw new Error("...");
}

function imprimiNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroElancar(e);
  } finally {
      console.log('final');
      
  }
}

const obj = { nome: "Erro" };
imprimiNomeGritado(obj);

