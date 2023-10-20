let eded = +prompt("eded teyin edin");
let nefer = +prompt("adamlarin sayini goster")
for (let i = 0; i <=50; i++) {
    document.write(i + "<br>");
}

if (eded===20) {
   console.log("Kapital bank hesabina 1000 manat kocurulsun");
   console.log("5 defeye tapdi");
}else console.log("cavab duz deyil, yeniden sorusun");


if (nefer===1) {
    console.log("1000manat elde etdiniz");
}
if (nefer===2 || nefer===3 || nefer===4  || nefer===5) {
    console.log("750 manat elde etdiniz");
}
if (nefer===6 || nefer===7 || nefer===8  || nefer===9 ) {
    console.log("250 manat elde etdiniz");
}
if (nefer===10 || nefer===11   ) {
    console.log("borcunuz 250 manatdir");
}