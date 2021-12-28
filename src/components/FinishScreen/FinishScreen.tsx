import React, { FC } from "react"
import { BoldText, FinishScreenStyled, Score } from "./FinishScreen.styled"
import { Button } from "antd"

interface Props {
  name: string
  score: number
  resetGame: () => void
}
const FinishScreen: FC<Props> = ({ score, name, resetGame }) => {
  return (
    <FinishScreenStyled>
      <BoldText>Congratulations, {name}!</BoldText>
      <BoldText>Your score: </BoldText>
      <Score>{score} points</Score>

      <Button onClick={resetGame}>Restart game</Button>
    </FinishScreenStyled>
  )
}

export default FinishScreen
