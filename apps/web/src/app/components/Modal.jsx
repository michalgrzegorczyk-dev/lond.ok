import { useGlobalContext } from '../Context.jsx';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Modal.css';

const Modal = () => {
  const { selectedQuestion, closeModal } = useGlobalContext();
  const { title, answer } = selectedQuestion;
  const [editorTitle, setEditorTitle] = useState(title);
  const [editorAnswer, setEditorAnswer] = useState(answer);
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  const reset = () => {
    setEditorTitle(title);
    setEditorAnswer(answer);
  }

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          {editMode ? (
            <EditModalContent
              editorTitle={editorTitle}
              editorAnswer={editorAnswer}
              setEditorAnswer={setEditorAnswer}
              setEditorTitle={setEditorTitle}
            />
          ) : (
            <>
              <h4 dangerouslySetInnerHTML={{ __html: editorTitle }}></h4>
              <div dangerouslySetInnerHTML={{ __html: editorAnswer }}></div>
            </>
          )}

          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            Zamknij
          </button>
          <button className="btn btn-hipster" onClick={toggleEditMode}>
            Edytuj
          </button>
          {editMode && <button className="btn" onClick={reset}>Resetuj</button>}
        </div>
      </div>
    </aside>
  );
};

export default Modal;

const EditModalContent = ({
  editorTitle,
  setEditorTitle,
  editorAnswer,
  setEditorAnswer,
}) => {
  return (
    <>
      <h3>Tryb edycji pytania</h3>
      <label className="editor-label">Tytuł</label>
      <ReactQuill className="editor" value={editorTitle} onChange={setEditorTitle} />
      <label className="editor-label">Odpowiedz</label>
      <ReactQuill className="editor" value={editorAnswer} onChange={setEditorAnswer} />
    </>
  );
};
