import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Pokemon from './components/Pokemon/Pokemon';

function App() {

  const [state, setState] = useState({
    hp1: 120,
    hp2: 100
  })


  const handleCharizardAttack = () =>{
    setState({ ...state, 
      hp2: (state.hp1 - 10)
    })
    
   }
  
   const handlePikachuAttack = () =>{
      setState({ ...state, 
      hp1: (state.hp2 - 10)
    })
   }

  return (
    <div className="App">
      <Pokemon name={"Pikachu"} hp={state.hp2} img={'https://pokestop.io/img/pokemon/pikachu-256x256.png'} attack={handleCharizardAttack}/>
      <Pokemon name={"Charizard"} hp={state.hp1} img={'https://pokestop.io/img/pokemon/charizard-256x256.png'} attack={handlePikachuAttack}/>
    </div>
  );
}

export default App;
