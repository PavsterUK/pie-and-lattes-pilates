import main_logo from "./images/main_logo.svg";
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>

      <div class="zone red container">
        <img class="cover" src={main_logo} alt="" srcset="" />
      </div>

      <div class="zone blue grid-wrapper">
        <div class="box zone">
          <img src="/img/data_storage_2_2.png" />
        </div>

      </div>
      <footer class="zone yellow">Footer Thank You</footer>
    </div>
  );
}

export default App;
