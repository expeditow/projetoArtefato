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

                <div id="BLOCO_DISPONÍVEL">

                    <button id = "BLOCO_CANCELAR" onClick={setModalOpen}>
                        Cancelar
                    </button>

                    <button id = "BLOCO_CONFIRMAR" onClick = {handleIncreaseLotacaoBotao}>
                        Confirmar
                    </button>

                    <div id = "CONTEUDO_MODAL">

                        
                       
                        <div id = "IMAGEM_DISPONIVEL"></div>

                        <p id = "TITULO_DISPONIVEL">Disponível</p>

                        <p id = "VAGAS_MODAL">Vagas Preenchidas / Total</p>

                        <p id = "PESSOAS_MODAL">{integer}</p>
                        
                    </div>

                </div>
            </div>
        )
    }
    return (null)
    
}