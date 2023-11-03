// 5.İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin. 
// Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın. 
// İstifadəçi səhv formatda dəyər daxil edərsə,
//  «Yanlış dəyər daxil edilib» bildirişi göstərin.
 
let user=prompt("YYYY.MM.DD bu cur daxil edin")
let date= new Date()
let day= date.getDate()
let month=date.getMonth()+1
let year=date.getFullYear()
let common=`${day}.${month}.${year}`
console.log(common);
if (user!= 'YYYY.MM.DD') {
    console.log("yalnis deyer daxil ediib");
    
} else {
    console.log("duzgundur");
    
}