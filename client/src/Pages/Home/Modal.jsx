import Modal, { Children } from "react"
import "./Modal.css"

export default function Podal({props, isOpen, setModalOpen, children}){


    if(isOpen){
        return(

            
            <div id="BACKGROUND_id">

                <div id="MODAL_id">

                    <button id = "BLOCO_CANCELAR" onClick={setModalOpen}>
                        Cancelar
                    </button>

                    <button id = "BLOCO_CONFIRMAR">
                        Confirmar
                    </button>

                    <div id = "CONTEUDO_MODAL">
                        <p>TESTANDO {props.integer}</p>
                    </div>

                </div>
            </div>
        )
    }
    return (null)
    
}