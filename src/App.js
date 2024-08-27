import './App.css';
import CardContainer from './components/CardContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const text = {
    name: 'X',
    age: '20',
  }

  return (
    <div className="App">
      <CardContainer data={text}/>
    </div>
  );
}

export default App;