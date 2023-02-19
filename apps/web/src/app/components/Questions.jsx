import {useGlobalContext} from '../Context.jsx'

const Questions = () => {
  const {questions, selectQuestion} = useGlobalContext();


  if (questions.length < 1) {
    return <section className="section">
      <h4>Brak pytań</h4>
    </section>
  }

  return (
    <section className="section-center">
      {questions.map((question) => {
        const {id, title, category} = question
        return (
          <article onClick={() => selectQuestion(id)} key={id} className="single-meal">
            <h5>{title}</h5>
            <p>{ category.length > 1 ? category.map((category, index) => {

              if(category.length === index + 2) {
                return '';
              } else {
                return category + ' / ';
              }

            }) : category}</p>
          </article>
        );
      })}
    </section>
  );

}

  export default Questions

