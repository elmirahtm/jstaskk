let name = prompt("Adiniz nedir?")
let gender = prompt("what is your gender?(m or f)");
// if(gender==="m"|| gender==="M" ){
//     document.write("salam cenab");
// }
// else if(gender==="f" || gender==="F"){
//     document.write("salam xanim")
// }
// else{
//     document.write("hec bir hal duzgun deyil")
// }

switch (gender) {
    case "m": 
    case "M":
    document.write(`salam yoldas ${name }`);
        break;
case "f":
case "F":
    document.write(`salam  hormetli ${name} xanim`)
        break;
    default:document.write("hec bir hal dogru deyil");
        
}