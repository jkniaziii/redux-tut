import './App.css';
import HomeContainer from './containers/HomeContainer';
import Header from './components/Header';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
    <HeaderContainer />
    <HomeContainer />
    </div>
  );
}

export default App;
