import {useGlobalContext} from '../Context.jsx'

const Navbar = () => {
  const {fetchRandomQuestion} = useGlobalContext()

  const handleRandomQuestion = () => {
    fetchRandomQuestion()
  }

  return (
    <section className="search-container">
        <h1><b>LONDOK</b> is coming...</h1>

      <button type="btn" className="btn btn-hipster" onClick={handleRandomQuestion}>Wylosuj pytania</button>
    </section>
  );
}

export default Navbar
