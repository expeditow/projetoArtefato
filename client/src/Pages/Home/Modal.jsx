import Modal, { Children } from "react"


const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    right: '0' ,
    left: '0' ,
    backgroundColor: 'rgb(0 , 0, 0, 0.7)',
    zIndex: '1000',
    color: 'black',
}

const MODAL_STYLE = {
    position: 'absolute',
    fontFamily: 'Montserrat',
    display: 'block',
    width: '482px',
    height: '534px',
    borderRadius: '30px',
    top: '18%', /* Posiciona o texto no final do quadrado */
    left: '50%', /* Posiciona o texto no meio horizontalmente */
    transform: 'translateX(-50%)', /* Centraliza horizontalmente */
    margin: '0', /* Remove margens padrão */
    backgroundColor: 'white',
}

const BLOCK_STYLE = {
    cursor: 'pointer',
    width: '389px',
    height: '89px',
    position: 'absolute',
    display: 'block',
    top: '90%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'red',
    borderRadius: '30px',

}
const BLOCO_CONFIRMAR = {
    color: 'white',
    fontFamily: 'Montserrat',
    cursor: 'pointer',
    borderRadius: '30px',
    width: '389px',
    height: '89px',
    backgroundColor: 'rgba(28, 76, 46, 1)',
    top: '70%',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    display: 'block',
}
const CONTEUDO_MODAL = {
    fontFamily: 'Montserrat',
    transform: 'translateX(-50%)',
    position: 'absolute',
    top: '20%',
    left: '50%',
}
export default function Podal({isOpen, setModalOpen, children}){

    if(isOpen){
        return(
            
            <div style={BACKGROUND_STYLE}>

                <div style = {MODAL_STYLE}>

                    <div style = {BLOCK_STYLE} onClick={setModalOpen}>
                        <div>CANCELAR</div>
                    </div>

                    <div style = {BLOCO_CONFIRMAR}>
                        <h1>CONFIRMAR</h1>
                    </div>
                    <div style = {CONTEUDO_MODAL}>
                        {children}
                        <p>asdojkds</p>
                    </div>

                </div>
            </div>
        )
    }
    return (null)
    
}