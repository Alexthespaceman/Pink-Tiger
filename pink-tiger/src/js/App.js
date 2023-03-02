import '../index.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage title={'hello, click here to continue'}/>
    </div>
  );
}

export default App;
