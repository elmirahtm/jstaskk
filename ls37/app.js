// 4.Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin 
// ikinci üç rəqəminin cəminə bərabər olduğunu yoxlayan isLucky(123321) funksiyasını yazın.
// Bilet uğurlu olarsa, 
// funksiya true, uğursuz olarsa, false qaytarmalıdı




// videodersden yazdim
function isLucky(bilet) {
let b=String(bilet);
let ilk= +b[0] + +b[1] + +b[2]
let son= +b[3] + +b[4] + +b[5]
 
if (ilk===son) {
    return true;
} else {
    return false;
}

}
console.log(isLucky(123321));