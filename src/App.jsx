import { useState } from "react";
import * as S from "./style";
import acertoSom from "./assets/acertoMizeravi.mp3";

export default function App() {
  // primeiroValor é variável de estado
  // setPrimeiroValor é a função atualizadora
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();
  const [temaEscuro, setTemaEscuro] = useState(false);

  const audio = new Audio(acertoSom);
   // Reiniciar o som para que ele toque do início a cada vez
  audio.currentTime = 0;
  const tocarSom = () => {
    
    audio.play();
  };
  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
  };
  

  // o 'e' é de 'event',ambos podem ser usados
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };
  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
    tocarSom(); // Toca o som ao clicar
  };
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
    tocarSom(); // Toca o som ao clicar
  };
  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
    tocarSom(); // Toca o som ao clicar
  };
  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
    tocarSom(); // Toca o som ao clicar
  };

  const limpar = () => {
    setPrimeiroValor(undefined);
    setSegundoValor(undefined);
    setResultado(undefined);
  };

  // condição para desabilitar os botões se n tiver nenhum valor inserido nos inputs
  const isButtonDisabled = 
  (primeiroValor === undefined || segundoValor === undefined) ||
  (primeiroValor === 0 && segundoValor === 0);

  return (
    
      
      <main>
      <S.GlobalStyle  temaEscuro={temaEscuro} />
      
      <h1>Calculadora <button className="btn-tema" onClick={alternarTema}>
          {temaEscuro ? "◑" : "◐"}
        </button></h1>
      
      
      {/* onChange é um evento de js, de mudança/alteração, pega a mudança que ocorre no input. Captura o que o usuário está digitando */}
      
      <input
        onChange={capturandoPrimeiroValor}
        type="number"
        placeholder="Insira um número"
        value={primeiroValor === undefined ? '' : primeiroValor}
      />
      <input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoSegundoValor}
        value={segundoValor === undefined ? '' : segundoValor}
      />
      <section>
      <button onClick={soma} disabled={isButtonDisabled}>+</button>
      <button onClick={subtracao} disabled={isButtonDisabled}>-</button>
      <button onClick={multiplicacao} disabled={isButtonDisabled}>x</button>
      <button onClick={divisao} disabled={isButtonDisabled}>÷</button>
      <button onClick={limpar} >C</button>
      </section>
      <h3>{resultado}</h3>
     
      
      
      
      </main>
      
        
    
  );
}