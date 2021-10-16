// es un tipo Object
// let autos = new Array("BMW","Mercedes Benz", "Volvo"); forma vieja
// const porque no se va a modificiar la referencia en memoria pero si el arrreglo
const autos = ["BMW","Mercedes Benz", "Volvo"];
console.log(autos);

console.log(autos[1]);

for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}

autos[0] = "bmw";
console.log(autos[0]);

// push el metodo para agregar elementos al final del arreglo
autos.push("Audi");
console.log(autos[3]);

// se le puede agregar elementos con la propiedad de largo
// ademas tambien con cualquier valor pero los anteriores quedarian vacios
autos[autos.length] = "Cadilac";
autos[20] = "Porshe";
console.log(autos.length);
console.log(autos);

// como saber si es un arreglo con la clase Array
console.log(Array.isArray(autos));

// si es una instancia de la clase array
console.log( autos instanceof Array);

