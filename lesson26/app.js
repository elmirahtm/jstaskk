
let seria=+prompt("seria nomresi necedir?")

let telefonnomresi=11
function isValidNumber(telefonnomresi,seria) {
    if (telefonnomresi===11 && seria==+7) {
     return true;   
    }else{
        return false;
    }
}
document.write( isValidNumber(telefonnomresi,seria));