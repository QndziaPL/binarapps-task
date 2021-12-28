import React, { FC, useEffect, useMemo, useState } from "react"
import { SingleQuestion } from "../../types/types"
import {
  QuestionTitle,
  SingleStageStyled,
  WordsContainer,
} from "./SingleStage.styled"
import SingleWord from "../SingleWord/SingleWord"
import { Button } from "antd"
import { firstLetterUppercase, randomSpacing } from "../../helpers/helpers"

interface Props {
  stageData: SingleQuestion
  finishGame: (score: number) => void
}

const SingleStage: FC<Props> = ({
  stageData: { good_words, all_words, question },
  finishGame,
}) => {
  const [pickedWords, setPickedWords] = useState<string[]>([])
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    let correct = 0
    let wrong = 0

    pickedWords.forEach((word) =>
      good_words.includes(word) ? correct++ : wrong++,
    )

    const missedCorrect = good_words.length - correct

    setScore(correct * 2 - (wrong + missedCorrect))
  }, [pickedWords, good_words])

  const wordsWithSpacings = useMemo(
    () => all_words.map((word) => ({ word, spacing: randomSpacing() })),
    [all_words],
  )

  const pickWord = (word: string) => {
    if (pickedWords.includes(word)) {
      const index = pickedWords.indexOf(word)
      const newArray = [...pickedWords]
      newArray.splice(index, 1)
      setPickedWords(newArray)
    } else {
      setPickedWords([...pickedWords, word])
    }
  }

  const checkAnswers = () => {
    setChecked(true)
  }

  const wordContent = wordsWithSpacings.map(({ word, spacing }) => (
    <SingleWord
      key={word}
      checked={checked}
      good={good_words.includes(word)}
      picked={pickedWords.includes(word)}
      pick={() => pickWord(word)}
      title={word}
      spacing={spacing}
    />
  ))

  return (
    <SingleStageStyled>
      <QuestionTitle>{firstLetterUppercase(question)}</QuestionTitle>
      <WordsContainer>{wordContent}</WordsContainer>
      <Button onClick={checked ? () => finishGame(score) : checkAnswers}>
        {checked ? "Finish game" : "Check answers"}
      </Button>
    </SingleStageStyled>
  )
}

export default SingleStage
