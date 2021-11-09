import React,{ useRef} from 'react'


// no se puede usar create ref en componentes funcionale
export default function Referencias(){
    // creo las referencias, le pongo la palabra ref para saber que es una referencia
    // en un class component se hacen let refMenu = createRef 

     let refMenuBtn = useRef(), //es como un selector que ya existe en el dom pero dentro de react
         refMenu = useRef();
        //  si creo las referencias pero no los asigno a ninguna etiquete queda undefined

   const handleMenu=()=>{
    console.log("ref menu y menubtn" ,refMenu,refMenuBtn)
    console.log(refMenuBtn.current)
    // ya cree una referencia para acceder al elmento del DOM ASIQUE LA USAMOS aca
        if(refMenuBtn.current.texContent === "Menu"){
            refMenuBtn.current.texContent = "Cerrar";
            refMenu.current.style.display="block";
        }else{
            refMenuBtn.current.texContent = "Menu";
            refMenu.current.style.display="none";
        }

    }

     // de la manera tradicional
    // const handleToggleMenu=(e)=>{
    //     const $menu = document.getElementById("menu")
        
    //     if(e.target.texContent === "Menu"){
    //         console.log(e.target.texContent);
    //         console.log(e.target);
    //         console.log(e);
    //         e.target.texContent = "Cerrar";
    //         $menu.style.display="block";
    //     }else{
    //         e.target.texContent = "Menu";
    //         $menu.style.display="none";
    //     }
    // }
    return(
        <>
        <h2>Referencias</h2>
        <button  id="but" ref={refMenuBtn} onClick={handleMenu}>Menu</button>
        <nav id="menu" ref={refMenu}style={{display:"none"}}>
            {/*eslint-disable-next-line */}
            <a href="#">Seccion 1</a>
            <br/>
            {/*eslint-disable-next-line */}
            <a href="#">Seccion 2</a>
            <br/>
            {/*eslint-disable-next-line */}
            <a href="#">Seccion 3</a>
            <br/>
            {/*eslint-disable-next-line */}
            <a href="#">Seccion 4</a>
            <br/>
            {/*eslint-disable-next-line */}
            <a href="#">Seccion cinco</a>
        </nav>
        </>
    )
}