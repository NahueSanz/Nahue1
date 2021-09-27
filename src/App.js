import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListProducts from './components/ListProducts/ListProducts'

function App() {

  return (
    <body className="app">
    <div>
        <p>
          <NavBar/>
          <ListProducts/>
        </p>      
    </div>
    </body>
  );
}

export default App;
