import React, { useState } from 'react'


export default function Formularios(){
//     // para trabajar el manejo del estado en formularos react remcomienta con estados
//     const [nombre, setNombre] = useState("");
//     const [sabor, setSabor] = useState("");
//     const [lenguaje, setLenguaje] = useState("");
//     const [teminos, setTeminos] = useState(false);

//     const handleSubmit =(e)=>{
//         e.preventDefault();
//         alert("El formulario se ha enviado");
//     }
//     return (
//         // el accion se lo quitamos porque controlamos la accrion con javaScrtp
//         <>
//            <h2>Formularios</h2>
//            <form onSubmit={handleSubmit}>
//                <label htmlfor="nombre">Nombre</label>
//                {/* le ponemos name para poder acceder con la sintaxis del putno */}
//                <input type="text" 
//                id="nombre"
//                name="nombre" 
//                value={nombre}
//             //    e.target es el evento que origina el evento
//                onChange={(e)=>setNombre(e.target.value)} ></input>
//                <p>Elige tu sabor JS favorito</p>
//                <input 
//                  type="radio"
//                  id="vanilla" name="sabor"
//                  value="vanilla"
//                  defaultChecked="vanilla"
//                  onChange={(e)=>setSabor(e.target.value)}></input>
//                <label htmlFor="vanilla">Vanilla</label>   
//                <br/>       
//                 <input 
//                  type="radio"
//                  id="react" name="sabor"
//                  value="react"
//                  onChange={(e)=>setSabor(e.target.value)}></input>
//                <label htmlFor="react">React </label>
//                <br/>       
//                <input 
//                  type="radio"
//                  id="angular" name="sabor"
//                  value="angular"
//                  onChange={(e)=>setSabor(e.target.value)}></input>
//                <label htmlFor="angular">Angular</label>
//                <br/>       
//                <input 
//                  type="radio"
//                  id="vue" name="sabor"
//                  value="vue"
//                  onChange={(e)=>setSabor(e.target.value)}></input>
//                <label htmlFor="vue">Vue</label>
//                <br/>       
//                <input 
//                  type="radio"
//                  id="svelte" name="sabor"
//                  value="svelte"vue
//                  onChange={(e)=>setSabor(e.target.value)}></input>
//                <label htmlFor="svelte">Svelte</label>
//                <p>Elige tu lenguaje de programacion favorito</p>
//                <select name="lenguaje" onChange={(e)=>setLenguaje(e.target.value)} defaultValue="">
//                    <option value="">----</option>
//                    <option value="js">javaScript</option>
//                    <option value="php">PHP</option>
//                    <option value="py">Python</option>
//                    <option value="go">GO</option>
//                    <option value="rb">Ruby</option>
//                </select>
//                <br/>
//                <label htmlfor="terminis">Acepto terinos y condiciones</label>
//                <input
//                type="checkbox"
//                id="terminos"
//                name="terminos"
//                onChange={(e)=>setTeminos(e.target.checked)}
//                />
//                <br/>
//                <input type="submit"/>
//            </form>
//         </>
//         )
// }
    const handleSubmit =(e)=>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }
  // para trabajar el manejo del estado en formularos react remcomienta con estados
  const [form, setForm] = useState({});

  const handleChange =(e)=>{
    //   lo que ya traiga la variable form de estado, asique uso el spreadoperator
      setForm({
        //   para hacer una mezcla de lo que ya tenga el formunlario, mas lo otro
          ...form,
        //   es importante que tengan el atrubuto name
        //   si ya esta esa variable en el formulario la actualiza nada mas
        //  lo vuelvo propiedad del objeto desestructurando
        [e.target.name]: e.target.value,
        // el objeto que desencadeno el evento lo captura con e y con las propiedades accedemos al resto
      })
  }
  const handleChecked =(e)=>{
      setForm({
          ...form,
          [e.target.name]: e.target.checked,
      })
  }
  return (
      // el accion se lo quitamos porque controlamos la accrion con javaScrtp
      <>
         <h2>Formularios</h2>
         <form onSubmit={handleSubmit}>
             <label htmlfor="nombre">Nombre</label>
             {/* le ponemos name para poder acceder con la sintaxis del putno */}
             <input type="text" 
             id="nombre"
             name="nombre" 
             value={form.nombre}
          //    e.target es el evento que origina el evento
             onChange={handleChange} ></input>
             <p>Elige tu sabor JS favorito</p>
             <input 
               type="radio"
               id="vanilla" name="sabor"
               value="vanilla"
               defaultChecked="vanilla"
               onChange={handleChange}></input>
             <label htmlFor="vanilla">Vanilla</label>   
             <br/>       
              <input 
               type="radio"
               id="react" name="sabor"
               value="react"
               onChange={handleChange}></input>
             <label htmlFor="react">React </label>
             <br/>       
             <input 
               type="radio"
               id="angular" name="sabor"
               value="angular"
               onChange={handleChange}></input>
             <label htmlFor="angular">Angular</label>
             <br/>       
             <input 
               type="radio"
               id="vue" name="sabor"
               value="vue"
               onChange={handleChange}></input>
             <label htmlFor="vue">Vue</label>
             <br/>       
             <input 
               type="radio"
               id="svelte" name="sabor"
               value="svelte"vue
               onChange={handleChange}></input>
             <label htmlFor="svelte">Svelte</label>
             <p>Elige tu lenguaje de programacion favorito</p>
             <select name="lenguaje" onChange={handleChange} defaultValue="">
                 <option value="">----</option>
                 <option value="js">javaScript</option>
                 <option value="php">PHP</option>
                 <option value="py">Python</option>
                 <option value="go">GO</option>
                 <option value="rb">Ruby</option>
             </select>
             <br/>
             <label htmlfor="terminis">Acepto terinos y condiciones</label>
             <input
             type="checkbox"
             id="terminos"
             name="terminos"
             onChange={handleChecked}
             />
             <br/>
             <input type="submit"/>
         </form>
      </>
      )
}