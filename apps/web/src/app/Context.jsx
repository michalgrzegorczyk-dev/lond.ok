import React, {useState, useContext, useEffect} from 'react'
import {data} from "./questions-data";

const AppContext = React.createContext({})

const AppProvider = ({children}) => {
  const [questions, setQuestions] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  const fetchMeals = () => {
    setQuestions(data.questions);
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  const fetchRandomQuestion = () => {
    setQuestions([data.questions[generateRandomInteger(0, data.questions.length-1)]]);
  }

  const selectQuestion = (questionId) => {
    let question = questions.find((question) => question.id === questionId);
    setSelectedQuestion(question);
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <AppContext.Provider
      value={{questions, fetchRandomQuestion, showModal, selectQuestion, selectedQuestion, closeModal}}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}

const generateRandomInteger = (min, max) => Math.floor(min + Math.random()*(max - min + 1))
