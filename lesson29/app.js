let person={
    age:+prompt("yasinizi daxil edin"),
    retirementAge:+prompt("teqaud yasinizi daxil edin"),

setage: function istifadeci() {
    age:
    console.log(this.age);
},

getYearsBeforeRetirement :function() 
    {
        retirementAge:
    if (this.age<65  &&  this.retirementAge<30) {
        console.log(`teqaud ilinize qalan il ${ this.age- this.retirementAge}`);
    } else {
        console.log("artiq teqaud yasiniz kecib");
    }
},


};

person.setage();
person.getYearsBeforeRetirement();






// const person = {
//     age: +prompt("Yaşınızı daxil edin"),
//     retirementAge: +prompt("Təqaüd ilini daxil edin"),
//     setAge: function() {
//         console.log(this.age);
//     },
//     getYearsBeforeRetirement: function() {
//         if (this.age < 65 && this.retirementAge < 2030) {
//             console.log(`${this.retirementAge} - təqaud ilinə qədər qalan il: ${this.retirementAge - this.age}`);
//         } else {
//             console.log("Artıq təqaud yaşı keçib və ya təqaud ili düzgün daxil edilməyib");
//         }
//     },
// };

// person.setAge();
// person.getYearsBeforeRetirement();












