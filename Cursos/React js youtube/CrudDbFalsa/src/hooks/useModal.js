import { useState } from "react"


// sin el export para que se llamen del mismo modo en el archivo del cual se llama
export const useModal = (initialValue = false) => {
    // para controlar el comportamiento
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal=()=> setIsOpen(true)
    const closeModal=()=> setIsOpen(false)



    return [isOpen, openModal, closeModal]
}