import './App.css';
import Onboarding from './components/Onboarding';
import ProgrssBar from './components/ProgrssBar';


function App() {
  return (
    <div className="App">
<Onboarding/>
<ProgrssBar progress={33.3333}/>
    </div>
  );
}

export default App;
