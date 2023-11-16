// Sənə bir task.
// Doğum ilinə əsasən indiki yaşı hesablayan calcAge funksiyası yarat.
// Sonra bir array yarat, içində 3 fərqli adamın doğum ili olsun( sadəcə doğum illəri yazılacaq arraydə).
// Sonra calcAge funksiyası ilə həmin adamların yaşını hesabla və yaşları yeni Arraydə yaz. Həmin yeni arrayi sonda console-a çıxar.

    let DogumIli=2004;
     let IndikiIl=2023;
     result=IndikiIl-DogumIli;
     
     let person=[
        
         {
        ad:'aynur',
        DogumIli:1994,
  
        result:IndikiIl-1994,
    } ,
    {
        ad:'gunay',
        DogumIli:2000,
        result:IndikiIl-2000,
    },
    {
        ad:'elcan',
        DogumIli:2004,
        result:IndikiIl-2004,
    }
    
  ]
   function calcAge() {
    document.write(result);
console.log(person);
   }
   calcAge();

