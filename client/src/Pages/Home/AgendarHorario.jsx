import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Modal from './Modal'
import "./AgendarHorario.css";

function AgendarHorario() {

  const { nomeUsuario } = useParams();
  const { emailUsuario } = useParams();

  const [openModal1140, setOpenModal1140] = useState(false)
  const [openModal1150, setOpenModal1150] = useState(false)
  const [openModal1200, setOpenModal1200] = useState(false)
  const [openModal1210, setOpenModal1210] = useState(false)
  const [openModal1220, setOpenModal1220] = useState(false)
  const [openModal1230, setOpenModal1230] = useState(false)
  const [openModal1240, setOpenModal1240] = useState(false)
  const [openModal1250, setOpenModal1250] = useState(false)
  const [openModal1300, setOpenModal1300] = useState(false)
  const [openModal1310, setOpenModal1310] = useState(false)


  // Valor inicial da lotação, pode ser alterado conforme necessário
  const [lotacaoBotao1, setLotacaoBotao1] = useState(0);
  const [lotacaoBotao2, setLotacaoBotao2] = useState(0);
  const [lotacaoBotao3, setLotacaoBotao3] = useState(0);
  const [lotacaoBotao4, setLotacaoBotao4] = useState(0);
  const [lotacaoBotao5, setLotacaoBotao5] = useState(0);
  const [lotacaoBotao6, setLotacaoBotao6] = useState(0);
  const [lotacaoBotao7, setLotacaoBotao7] = useState(0);
  const [lotacaoBotao8, setLotacaoBotao8] = useState(0);
  const [lotacaoBotao9, setLotacaoBotao9] = useState(0);
  const [lotacaoBotao10, setLotacaoBotao10] = useState(0);

  //define cor do botao conforme lotacao
  function definirCorBotao(lotacao) {
    if (lotacao >= 0 && lotacao < 10) {
      return "button-green";
    } else if (lotacao >= 10 && lotacao < 20) {
      return "button-green-light";
    } else if (lotacao >= 20 && lotacao < 30) {
      return "button-yellow";
    } else if (lotacao >= 30 && lotacao < 40) {
      return "button-orange";
    } else if (lotacao >= 40 && lotacao < 50) {
      return "button-red-light";
    } else if (lotacao === 50) {
      return "button-red-strong";
    }
  }

  // Manipula o aumento da lotação para o Botão 1
  /*const handleIncreaseLotacaoBotao1 = () => {
    if (lotacaoBotao1 < 50) {
      setLotacaoBotao1((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao1+1);
           
    }
  };
  // Manipula o aumento da lotação para o Botão 2
  const handleIncreaseLotacaoBotao2 = () => {
    if (lotacaoBotao2 < 50) {
      setLotacaoBotao2((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao2+1);
    }
  };

  const handleIncreaseLotacaoBotao3 = () => {
    if (lotacaoBotao3 < 50) {
      setLotacaoBotao3((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao3+1);
    }
  };
  const handleIncreaseLotacaoBotao4 = () => {
    if (lotacaoBotao4 < 50) {
      setLotacaoBotao4((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao4+1);
    }
  };
  const handleIncreaseLotacaoBotao5 = () => {
    if (lotacaoBotao5 < 50) {
      setLotacaoBotao5((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao5+1);
    }
  };
  const handleIncreaseLotacaoBotao6 = () => {
    if (lotacaoBotao6 < 50) {
      setLotacaoBotao6((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao6+1);
    }
  };
  const handleIncreaseLotacaoBotao7 = () => {
    if (lotacaoBotao7 < 50) {
      setLotacaoBotao7((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao7+1);
    }
  };

  const handleIncreaseLotacaoBotao8 = () => {
    if (lotacaoBotao8 < 50) {
      setLotacaoBotao8((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao8+1);
    }
  };
  const handleIncreaseLotacaoBotao9 = () => {
    if (lotacaoBotao9 < 50) {
      setLotacaoBotao9((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao9+1);
    }
  };
  const handleIncreaseLotacaoBotao10 = () => {
    if (lotacaoBotao10 < 50) {
      setLotacaoBotao10((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao10+1);
    }
  };*/



  return (
    
    <>

   <Modal integer = {lotacaoBotao1} setLotacaoBotao = {setLotacaoBotao1} isOpen = {openModal1140} setModalOpen = {() => setOpenModal1140(!openModal1140)}>
      {/* children*/}
    </Modal>
    
    <Modal integer = {lotacaoBotao5} setLotacaoBotao = {setLotacaoBotao5} isOpen = {openModal1150} setModalOpen = {() => setOpenModal1150(!openModal1150)}>
      {/* children*/}
    </Modal>

    <Modal integer = {lotacaoBotao2} setLotacaoBotao = {setLotacaoBotao2} isOpen = {openModal1200} setModalOpen = {() => setOpenModal1200(!openModal1200)}>
      {/* children*/}
    </Modal>

    <Modal integer = {lotacaoBotao6} setLotacaoBotao = {setLotacaoBotao6} isOpen = {openModal1210} setModalOpen = {() => setOpenModal1210(!openModal1210)}>
      {/* children*/}
    </Modal>

    <Modal integer = {lotacaoBotao3} setLotacaoBotao = {setLotacaoBotao3} isOpen = {openModal1220} setModalOpen = {() => setOpenModal1220(!openModal1220)}>
      {/* children*/}
    </Modal>

    <Modal integer = {lotacaoBotao7} setLotacaoBotao = {setLotacaoBotao7} isOpen = {openModal1230} setModalOpen = {() => setOpenModal1230(!openModal1230)}>
      {/* children*/}

    </Modal>

    <Modal integer = {lotacaoBotao4} setLotacaoBotao = {setLotacaoBotao4} isOpen = {openModal1240} setModalOpen = {() => setOpenModal1240(!openModal1240)}>
      {/* children*/}

    </Modal>

    <Modal integer = {lotacaoBotao8} setLotacaoBotao = {setLotacaoBotao8} isOpen = {openModal1250} setModalOpen = {() => setOpenModal1250(!openModal1250)}>
      {/* children*/}

    </Modal>

    <Modal integer = {lotacaoBotao10} setLotacaoBotao = {setLotacaoBotao10} isOpen = {openModal1300} setModalOpen = {() => setOpenModal1300(!openModal1300)}>
      {/* children*/}

    </Modal>

    <Modal integer = {lotacaoBotao9} setLotacaoBotao = {setLotacaoBotao9} isOpen = {openModal1310} setModalOpen = {() => setOpenModal1310(!openModal1310)}>
      {/* children*/}

    </Modal>

    <div id="registro">
        {/* titulo da pagina */}
        <div>
          <h3>
            <div id="title">Agendar Horário</div>
          </h3>


          <div id="botoes">

            <div className="coluna"> 

              <button

                className={`button ${definirCorBotao(lotacaoBotao1)}`}
                onClick= {() => setOpenModal1140(true)}
              >
                11:40
              </button>

              <button
                className={`button ${definirCorBotao(lotacaoBotao2)}`}
                onClick= {() => setOpenModal1200(true)}
              >
                12:00
              </button>

              <button
                className={`button ${definirCorBotao(lotacaoBotao3)}`}
                onClick= {() => setOpenModal1220(true)}
              >
                12:20
              </button>

              <button
                className={`button ${definirCorBotao(lotacaoBotao4)}`}
                onClick= {() => setOpenModal1240(true)}

              >
                12:40
              </button>

              <button
                className={`button ${definirCorBotao(lotacaoBotao10)}`}
                onClick= {() => setOpenModal1300(true)}
              >
                13:00
              </button>

            </div>
            <div className="coluna">
              <button
                className={`button ${definirCorBotao(lotacaoBotao5)}`}
                onClick= {() => setOpenModal1150(true)}
              >
                11:50
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao6)}`}
                onClick= {() => setOpenModal1210(true)}
              >
                12:10
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao7)}`}
                onClick= {() => setOpenModal1230(true)}
              >
                12:30
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao8)}`}
                onClick= {() => setOpenModal1250(true)}
              >
                12:50
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao9)}`}
                onClick= {() => setOpenModal1310(true)}
              >
                13:10
              </button>
            </div>
          </div>
        </div>

        {/* Cardapio */}
        {/* Rodapé */}
        <button id="cardapio">Ver Cardápio</button>

        <p id="lowText">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </p>
      </div>
      {/* verifica parametros */}
      {console.log("email: %s \n nome: %s", emailUsuario, nomeUsuario)};
    </>
  );
}


export default AgendarHorario;
