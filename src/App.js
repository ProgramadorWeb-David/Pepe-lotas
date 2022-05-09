import pepeColon from './assets/img/pepeColon.png';
import pelota from './assets/img/pelota.png';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ pepeColon } alt="imagen pepe de colon"/>
        <P>
          PEPE-lotas : una web e-commerce que vende pelotas!
        </P>
        <img src={ pelota } alt="imagen pelota"/>
      </header>
    </div>
  );
}

const P = styled.p`
    font-weight: bold;
    color: #70ec99;
    font-size: 40px;
`;

export default App;
