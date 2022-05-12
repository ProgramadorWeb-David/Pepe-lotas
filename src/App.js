import pepeColon from './assets/img/pepeColon.png';
import './App.css';
import styled from 'styled-components';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={ pepeColon } alt="imagen pepe de colon"/>
        <P>
          PEPE-lotas : una web e-commerce que vende pelotas!
        </P>
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
