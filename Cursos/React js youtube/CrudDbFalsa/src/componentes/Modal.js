import "./Modal.css"

// la propiedad children hace referencia a lo que tenga adentro en el componente padre
const Modal = ({children, isOpen, closeModal}) => {
    console.log(children)
    const handleModalContainerClick=(e)=> e.stopPropagation();
    return (
        // hacemos el class name dinamico y detenemos la propagacion del cierre en el container del modal
       <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
           <div className="modal-container" onClick={handleModalContainerClick}>
               <button className="modal-close" onClick={closeModal}>X</button>
               {children}
           </div>
       </article>
    )
}

export default Modal
