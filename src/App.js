import './App.css';
import TopBar from './Components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner';
import StoreListing from './Components/StoreListing';


function App() {
  return (
    <div className="App">
      <TopBar />
      <h1>Instacart WebPage</h1>
      <Banner />
      <StoreListing />
    </div>
  );
}

export default App;
