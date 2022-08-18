function $(val) {
  return document.querySelectorAll(val);
}
let inp = $("input");
let m1 = $(".m1");
let m2 = $(".m2");
let res = $(".result");
let allFil = false;
let laast = false;

let mat1 = [],
  mat2 = [];

function calc() {
  let or = Math.sqrt(mat1.length);

  for (let i = 0; i < or * or; i++) {
    let n = i + 1;
    let mat1_s = parseInt((n - 1) / or) * or;
    let mat2_s = n % or == 0 ? or : n % or;
    let val_n = 0;
    for (let a = mat2_s - 1, b = mat1_s; a < mat1.length; a += or, b++) {
      val_n += mat1[b] * mat2[a];
    }
    res[i].innerHTML = val_n;
  }
}

document.querySelector(".btn").onclick = () => {
  console.log(allFil);
  for (let b = 0; b < m1.length; b++) {
    mat1[b] = m1[b].value === "" ? 0 : parseInt(m1[b].value);
    mat2[b] = m1[b].value === "" ? 0 : parseInt(m2[b].value);
  }
  calc();
};

function check() {
  if (laast && !allFil) document.querySelector(".btn").click();
}

for (let g = 0; g < inp.length; g++) {
  inp[g].addEventListener("input", () => {
    allFil = inp[g].value == "";
    check();
    console.log(g + 1 >= inp.length);
    if (g === inp.length - 1) {
      laast = true;
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.which === 13) {
    console.log(e.which);
    calc();
  }
});
