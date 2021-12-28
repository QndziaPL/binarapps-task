import React, { FC } from "react"
import { WrapperStyled } from "./Wrapper.styled"

const Wrapper: FC = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>
}

export default Wrapper
