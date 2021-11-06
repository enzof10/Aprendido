import React,{Component} from "react";

// 1 montaje con el metodo constructor
// 2 render Fase de actualizacion o redibujar
// 3 component didUnmout que espera a que el componente este en el DOM
// 4 componentDidUpdate que se ejecuta y sirve capturar estados previos a la renderizacion
// Cinco component willnmout que se ejecuta cuando elemina una componente

class Reloj extends Component{
    // le vamos a pasar la hora como una props
    constructor(props){
        super(props);
        console.log("Relojjj","algo Dentro del componente reloj")
    }
    componentWillUnmount(){
        // cuando el componente no exista se ejecuta
        // alert("Se elemina el Reloj Componente")
        console.log("Se elminia el reloj componente")
    }
    render(){
        return(
            <h3>Reloj Componente: {this.props.hora}</h3>
        )
    }
}


export default class CicloVida extends Component{
    // PRIMER METODO CONSTRUCTOR DE LA FASE DE MONTAJE  
    constructor(props){
        super(props);
        console.log(0,"el componente se inicializa, aun no esta en el DOM")

        this.state={
            hora:new Date().toLocaleTimeString(),
            // para eliminar el componente Reloj usamos el renderizado condicional
            // creo una variable de estado en el padre, el reloj no se va  amostrar por defecto
            visible:false
        }
        this.temporizador = null;
    }
    componentDidMount(){
        // sivre para hacer peticiones o solicitar datos externos 
        console.log(1, "El componente ya se encuentra en el DOM")
    }
    componentDidUpdate(prevProps, prevSatate){
        // se ejecuta antes que se haga la actualizacion
        // captura las props y estados previos, muestra el segundo anterior al de la pantalla
        console.log(2, "El estado o las props demlos componentes han cambiado");
        console.log("prevProps: ",prevProps);
        console.log("prevState",prevSatate);
    }
 
    // adicionalmente me permite pasar propiedades previas y el estado previo por si necetito trabajar con esos valores antes e actualizar el estado
    ticTac = ()=>{
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })    
        }, 1000);
    };

    iniciar = ()=>{
        this.ticTac();
        this.setState({
            visible:true
        })
    };
    detener = ()=>{
        clearInterval(this.temporizador);
        this.setState({
            visible:false
        })
    };


    render(){
        console.log(
            4,
            "El componente se Dibuja o Redibuja por algun cambio en el DOM"
        );
        return(
            <>
                <h2>Ciclo de vida de los componentes de clases</h2>
                <h3>{this.state.hora}</h3>
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
                {/* operador de cortocircuito , si state es visible lo muestra
                funciona como un operador ternario maso*/}
                {this.state.visible && <Reloj hora={this.state.hora}/>}
            </>
        )
    }
}