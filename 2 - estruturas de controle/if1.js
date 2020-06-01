function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com a nota:", nota);
  } else {
    console.log("Reprovado com a nota:", nota);
  }
}

soBoaNoticia(9.0);

soBoaNoticia(6.0);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("É verdade..." + valor);
  }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(true);
seForVerdadeEuFalo(false);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});