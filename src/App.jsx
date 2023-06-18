// Import libraries

// Import images
import logo from "./logo.svg";

// Import CSS
import "./styles/App.css";
import "./styles/nullstyle.css";
import "./styles/Imports.css";

// Import components
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
