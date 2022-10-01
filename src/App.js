import './App.css';
import AssignmentMarks from './component/AssignmentMarks/AssignmentMarks';
import NavBar from './component/Header/NavBar';
import PhoneBar from './component/phoneBar/PhoneBar';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;