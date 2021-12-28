const WORD_SPACING = {
  max: 90,
  min: 20,
}

export const randomSpacing = () =>
  Math.floor(
    Math.random() * (WORD_SPACING.max - WORD_SPACING.min + 1) +
      WORD_SPACING.min,
  )
