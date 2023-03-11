import '../index.css';
import Header from './Components/Header';
import PhotoDisplayer from './Components/PhotoDisplayer';
function App() {
  return (
    <div className="App">
      <Header />
      <PhotoDisplayer props={[{title:'Welcome, click here to see the wonders of the universe'}, {homeScreenId:'home-screen'}, {greetingMessageId:'hello-message'}]} />
    </div>
  );
}

export default App;
