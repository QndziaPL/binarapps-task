import styled from "styled-components"

export const SingleWordStyled = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
`

export const CheckedViewSingleWord = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
  flex-direction: column;
  position: relative;
`

export const GoodOrBadLabel = styled.div`
  position: absolute;
  opacity: 50%;
  top: -20px;
`
