import React, { FC, useState } from "react"
import {
  LoginScreenStyled,
  PlayButton,
  StyledInput,
  Title,
} from "./LoginScreen.styled"
import { Button } from "antd"

interface Props {
  pickName: (name: string) => void
}

const LoginScreen: FC<Props> = ({ pickName }) => {
  const [name, setName] = useState("")

  const handlePickName = () => {
    pickName(name)
  }

  return (
    <LoginScreenStyled>
      <Title>Wordcloud game</Title>
      <StyledInput
        placeholder={"Enter your nickname here..."}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button disabled={name === ""} onClick={handlePickName}>
        Play
      </Button>
    </LoginScreenStyled>
  )
}

export default LoginScreen
