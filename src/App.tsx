import React, { useEffect, useState } from "react"
import LoginScreen from "./components/LoginScreen/LoginScreen"
import { SingleQuestion } from "./types/types"
import { mockQuestions } from "./mocks/mocks"
import SingleStage from "./components/SingleStage/SingleStage"
import FinishScreen from "./components/FinishScreen/FinishScreen"

const App = () => {
  const [name, setName] = useState<string>()

  const [question, setQuestion] = useState<SingleQuestion>(
    mockQuestions[Math.floor(Math.random() * mockQuestions.length)],
  )
  const [finished, setFinished] = useState(false)
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    setRandomQuestion()
  }, [])

  const setRandomQuestion = () => {
    const question =
      mockQuestions[Math.floor(Math.random() * mockQuestions.length)]
    setQuestion(question)
  }

  const resetGame = () => {
    setRandomQuestion()
    setScore(0)
    setFinished(false)
  }

  const finishGame = (score: number) => {
    setScore(score)
    setFinished(true)
  }

  if (!name) return <LoginScreen pickName={setName} />

  if (!finished)
    return <SingleStage stageData={question} finishGame={finishGame} />

  return <FinishScreen name={name} score={score} resetGame={resetGame} />
}

export default App
