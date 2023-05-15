let userId;
userId = 50;
userId = "45";
(() => {
    let userId;
    userId = 12;
    userId = "Dylan";
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`Bienvenido ${myText.toLowerCase()}`);
        }
        else {
            console.log(`su ID es: ${myText.toFixed(2)}`);
        }
    }
    greeting('Dylan');
    greeting(12.1212121212);
})();
