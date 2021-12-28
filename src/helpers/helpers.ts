import { mockQuestions } from "../mocks/mocks"

const WORD_SPACING = {
  max: 90,
  min: 20,
}

export const randomSpacing = () =>
  Math.floor(
    Math.random() * (WORD_SPACING.max - WORD_SPACING.min + 1) +
      WORD_SPACING.min,
  )

export const firstLetterUppercase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const pickRandomQuestion = () =>
  mockQuestions[Math.floor(Math.random() * mockQuestions.length)]
