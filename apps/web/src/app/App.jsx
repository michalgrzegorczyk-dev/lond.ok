import {useGlobalContext} from './Context'
import './App.css'
import Navbar from './components/Navbar'
import Questions from './components/Questions'
import Modal from './components/Modal'

export function App() {
  const {showModal} = useGlobalContext()

  return (
    <main>
      <Navbar/>

      <Questions/>

      {showModal && <Modal/>}
    </main>
  );
}

export default App;

