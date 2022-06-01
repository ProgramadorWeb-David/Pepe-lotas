import './App.css';
import ItemDetailContainer from './components/ItemDetailContainder/ItemDetailContainer';
import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer />
      {/* <ItemListContainer description={'PEPE-lotas : una web e-commerce que vende pelotas!'} /> */}
    </div>
  );
}

export default App;
