import "./Modal.css";
import ReactDOM from 'react-dom';


// la propiedad children hace referencia a lo que tenga adentro en el componente padre
const ModalPortal = ({children, isOpen, closeModal}) => {
    console.log(children)
    const handleModalContainerClick=(e)=> e.stopPropagation();

    return ReactDOM.createPortal (
        // hacemos el class name dinamico y detenemos la propagacion del cierre en el container del modal
       <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
           <div className="modal-container" onClick={handleModalContainerClick}>
               <button className="modal-close" onClick={closeModal}>
                   X
                </button>
               {children}
           </div>
       </article>,
       document.getElementById("modal")
    )
}

export default ModalPortal
