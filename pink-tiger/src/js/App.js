import '../index.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage props={[{title:'Welcome, click here to see the wonders of the universe'}, {homeScreenId:'home-screen'}, {greetingMessageId:'hello-message'}]} />
    </div>
  );
}

export default App;
