import '../index.css';
import Header from './Components/Header';
import PhotoDisplayer from './Components/PhotoDisplayer';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <PhotoDisplayer props={[{title:'Welcome, click here to see the wonders of the universe'}, {homeScreenId:'home-screen'}, {greetingMessageId:'hello-message'}]} />
    </div>
  );
}

export default App;
