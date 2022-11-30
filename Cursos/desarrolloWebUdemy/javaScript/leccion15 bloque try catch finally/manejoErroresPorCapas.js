const servicioRejected = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("algo mal en la servicioRejected");
  }, 2000);
});

const controlador = async () => {
    try{
        let algo = await servicioRejected
        return algo
    }catch(err){
        // console.error(err);
        // throw new Error("algo mal")
    }
};

const servicioResolved = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data:"todo ok en el servicio resuelto"});
    }, 1000);
  });


const controlador2 = async () => {
    try{
        let algo = await servicioResolved
        return algo
    }catch(err){
        throw new Error("algo mal")
    }
};

const llamadaControladores = async ()=>{
    try{
        const valor1 = controlador()
        const valor2 = controlador2()
        let [resuelta1, resuelta2] = await Promise.allSettled([valor1, valor2])
        resuelta1 = resuelta1.value.data
        resuelta2 = resuelta2.value.data
        
        return {resuelta1, resuelta2}
    }catch(err){
        throw new Error(err.stack)
    }
}

llamadaControladores().then(ambos=>{
    console.log('ambos: ', ambos);
}).catch(err=>{
    console.log('err llamada en promesa.catch: ', err.stack);
})