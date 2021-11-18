import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ContactForm from "./ContactForm"
import SongSearch from "./SongSearch";

const Modals = () => {
     const [isOpenModal1, openModal1, closeModal1] = useModal(false);
     const [isOpenModal2, openModal2, closeModal2] = useModal(false);
     const [isOpenModalForm, openModalForm, closeModalForm] = useModal(false);
     const [isOpenModalSogn, openModalsong, closeModalSong] = useModal(false);
     return (
        <div>
            <h2>Modales</h2>

            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Hola, este es el contenido de mi modal 1</p>
                <img alt="placeimg" src="https://placeimg.com/400/400/animals" />
            </Modal>

            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2}  closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>Hola, este es el contenido de mi modal 2</p>
                <img alt="placeimg" src="https://placeimg.com/400/400/natura" />
            </Modal>
            <button onClick={openModalForm}>Modal contacto</button>
            <Modal isOpen={isOpenModalForm} closeModal={closeModalForm}>
                <ContactForm/>
            </Modal>
            <button onClick={openModalsong}>Modal Canciones</button>
            <Modal isOpen={isOpenModalSogn} closeModal={closeModalSong}>
                <SongSearch/>
            </Modal>

        </div>
    )
}

export default Modals
