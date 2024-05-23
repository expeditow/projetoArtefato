import Modal, { Children } from "react"
import "./Modal.css"

export default function Podal({integer, setLotacaoBotao, isOpen, setModalOpen, children}){

    const handleIncreaseLotacaoBotao = () => {
          setLotacaoBotao((prevLotacao) => prevLotacao + 1);
          console.log("cheguei na funcao");
          setModalOpen()
      };

    if(isOpen){

        return(

            
            <div id="BACKGROUND_id">

                <div id="MODAL_id">

                    <button id = "BLOCO_CANCELAR" onClick={setModalOpen}>
                        Cancelar
                    </button>

                    <button id = "BLOCO_CONFIRMAR" onClick = {handleIncreaseLotacaoBotao}>
                        Confirmar
                        {setModalOpen}
                    </button>

                    <div id = "CONTEUDO_MODAL">
                        {children}
                        {integer}
                    </div>

                </div>
            </div>
        )
    }
    return (null)
    
}