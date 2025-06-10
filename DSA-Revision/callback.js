function greet(name){
    console.log(`Hello, ${name}!`);
    }
    function callback(greetingFunction) {
        
        let name = "John";
        greetingFunction(name);
        
        console.log(`Callback executed after greeting ${name}`);
         setTimeout(() => {
            console.log("Executing callback...");
        }, 2000);
}
callback(greet);