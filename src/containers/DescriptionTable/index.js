import React from 'react'
import Description from './components/Description'
import Table from './components/Table'

import * as S from './styled'

const DescriptionTable = () => {
  return (
    <S.DescriptionTableWrapper>
      <Table />
      <Description />
    </S.DescriptionTableWrapper>
  )
}

export default DescriptionTable
