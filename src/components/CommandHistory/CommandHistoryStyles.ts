import styled from 'styled-components'

const ItemStyled = styled.li`
  color: green;
  margin: 0 auto;
  text-align: left;
`

const ErrorItemStyled = styled(ItemStyled)`
  color: red;
`

export { ErrorItemStyled, ItemStyled }
