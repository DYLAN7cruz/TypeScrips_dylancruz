let userId: number|string;

userId = 50;
userId = "45";

(()=>{
  let userId: string | number;
  userId = 12;
  userId = "Dylan";

  function greeting(myText: string | number){
   if (typeof myText === 'string'){
    console.log(`Bienvenido ${myText.toLowerCase()}`);
   } else {
    console.log(`su ID es: ${myText.toFixed(2)}`);
   }
  }
  greeting('Dylan');
  greeting(12.1212121212)
})();
