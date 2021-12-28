import React, { FC } from "react"
import { Popover } from "antd"
import {
  CheckedViewSingleWord,
  GoodOrBadLabel,
  SingleWordStyled,
} from "./SingleWord.styled"

interface Props {
  picked: boolean
  pick: () => void
  title: string
  good: boolean
  checked: boolean
  spacing: number
}

const SingleWord: FC<Props> = ({
  picked,
  pick,
  title,
  checked,
  good,
  spacing,
}) => {
  if (checked) {
    if (picked) {
      return (
        <CheckedViewSingleWord
          style={{ color: good ? "green" : "red", margin: `20px ${spacing}px` }}
        >
          <GoodOrBadLabel>{good ? "Good" : "Bad"}</GoodOrBadLabel>
          <div>{title}</div>
        </CheckedViewSingleWord>
      )
    }
    return (
      <CheckedViewSingleWord style={{ margin: `20px ${spacing}px` }}>
        {title}
      </CheckedViewSingleWord>
    )
  }
  return (
    <Popover content={picked ? "Deselect" : "Select"}>
      <SingleWordStyled
        style={{
          margin: `20px ${spacing}px`,
          color: picked ? "#1381bb" : "#bebebe",
        }}
        onClick={pick}
      >
        {title}
      </SingleWordStyled>
    </Popover>
  )
}

export default SingleWord
