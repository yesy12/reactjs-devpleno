import React, {useState} from 'react'; //hook useState
import logo from './logo.svg';
import './App.css';

//element
const element = <h2> Olá mundo!</h2> //JSX
const element2 = React.createElement("div", null, React.createElement('h2', null , "Olá mundo React.createElement") )

{/*
function MostrarI(props){
    return <p> {props.i} </p>
}
*/}


//Component
function App(props) {
    {/*
    const [i, setI] = useState(1)
    
    const increment = () => {
        setI( i + 1)
    }*/}
    
    //ENTRADA, RODANDO, FIM
    const [stateGame,setStateGame] = useState("ENTRADA")
    
    //palpites
    const [guess,setGuess] = useState(150)
    const [numGuess,setNumGuess] = useState(1)
    
    const [min,setMin] = useState(0);
    const [max,setMax] = useState(300);
    
    const start = () => {
        setStateGame("RODANDO")
        setMin(0)
        setMax(300)
        setNumGuess(1)
        setGuess(150)
    }
    
    if(stateGame=== "ENTRADA"){
        return (
            <div className = "App">
                <button onClick={start}> Começar a Jogar </button>
            </div>
        )
    }
    
    const menor = () => {
        setNumGuess(numGuess + 1)
        setMax(guess)
        const nextGuess = parseInt( (guess - min) /2) + min
        setGuess(nextGuess)
    }
    
    const maior = () => {
        setNumGuess(numGuess + 1)
        setMin(guess)
        const nextGuess = parseInt( (max - guess) / 2) + guess
        setGuess(nextGuess)
    }
    
    const acertou = () => {
        setStateGame("FIM")
    }
    
    if(stateGame === "FIM"){
        return (
            <div className = "App">
                <p> Acertei o numero {guess}, tentando {numGuess} vezes </p>
                <button onClick={start}>Jogar novamente</button>
            </div>
        )
    }
    
  return (
    <div className="App">
        {/*
        <h1> Editado por {props.name}</h1>
        <h2> Numero {i} </h2>
        
        <button onClick={increment}>Incrementar</button>
         {element} 
        
         Número é <MostrarI i={i} /> */}
        <p> O seu palpite é {guess} ? </p>
      
        <p> Número Min : {min} / Número Max : {max} </p>
        
        <button onClick={menor}>Menor</button>
        
        <button onClick={acertou}>Acertou</button>
        
        <button onClick={maior}>Maior</button>
      
    </div>
  );
}

//Class ES6


export default App;
