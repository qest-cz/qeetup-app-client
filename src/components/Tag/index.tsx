import { Tag as TagProps } from 'constants/types'
import React from 'react'

import { ImportantChip, StyledChip } from './styled'

const Tag = ({ isImportant, value }: TagProps) => {
  if (isImportant) {
    return <ImportantChip>{value}</ImportantChip>
  }

  return <StyledChip>{value}</StyledChip>
}

export default Tag
