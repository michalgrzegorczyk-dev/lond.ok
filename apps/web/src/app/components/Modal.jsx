import {useGlobalContext} from '../Context.jsx'

const Modal = () => {
  const {selectedQuestion, closeModal} = useGlobalContext()
  const {title, answer} = selectedQuestion;

  return (
    <aside className='modal-overlay'>
      <div className='modal-container'>
        <div className='modal-content'>
          <h4>{title}</h4>
          <div dangerouslySetInnerHTML={ {__html: answer} }></div>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>Zamknij</button>
          <button className="btn btn-hipster">Edytuj</button>
        </div>
      </div>
    </aside>
  );
}

export default Modal
