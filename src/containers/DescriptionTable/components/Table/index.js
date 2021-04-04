import React from 'react'

import * as S from './styled';

const Table = () => {
  return (
    <S.Table>
      <tbody>
        <S.TableRow>
          <S.TableHeader>Year</S.TableHeader>
          <td>1888</td>
        </S.TableRow>
        <S.TableRow>
          <S.TableHeader>Medium</S.TableHeader>
          <td>Oil on canvas</td>
        </S.TableRow>
        <S.TableRow>
          <S.TableHeader>Location</S.TableHeader>
          <td>Ayale University Gallery</td>
        </S.TableRow>
        <S.TableRow>
          <S.TableHeader>Size</S.TableHeader>
          <td>28.5IN x 36.3IN</td>
        </S.TableRow>
      </tbody>
  </S.Table>
  )
}

export default Table
