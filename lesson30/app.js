let calc={
    a:+prompt("ededi daxil edin"),
    b:+prompt("ededi daxil edin"),
    // opeator:prompt("isare hansidir?"),
    
    
    
    add:function () {
    document.write(`${this.a + this.b } ` + " " );
       
    },
    
    divide:function  () {
               document.write(`${this.a / this.b}` + " ");
    },

    subtraction:function  () {
               document.write(`${this.a - this.b}` + " " );
    },

    multiplication:function  () {
               document.write(`${this.a * this.b}`  + " ");
    },




}


calc.add();
calc.divide();
calc.subtraction();
calc.multiplication();