import styled from 'styled-components'
import { RobotFaceDirectionEnum } from '../../globalTypes'

const Table = styled.table`
  padding: 50px 50px 0 50px;
  margin: 0 auto;
  background: #ffffff75;
`

const TableCell = styled.td`
  border: 1px solid black;
  height: 50px;
  width: 50px;
`
interface ActiveCellProps {
  faceDirection: RobotFaceDirectionEnum
}

const TableCellActive = styled.td<ActiveCellProps>`
  border: 1px solid black;
  height: 50px;
  width: 50px;

  ${(props): string | false =>
    props.faceDirection === RobotFaceDirectionEnum.East &&
    `
      background-image: url(/car-east.png);
      background-size: contain;
      background-repeat: round;
    `};

  ${(props): string | false =>
    props.faceDirection === RobotFaceDirectionEnum.North &&
    `
      background-image: url(/car-north.png);
      background-size: contain;
      background-repeat: round;
    `};

  ${(props): string | false =>
    props.faceDirection === RobotFaceDirectionEnum.South &&
    `
      background-image: url(/car-south.png);
      background-size: contain;
      background-repeat: round;
    `};

  ${(props): string | false =>
    props.faceDirection === RobotFaceDirectionEnum.West &&
    `
      background-image: url(/car-west.png);
      background-size: contain;
      background-repeat: round;
    `};
`

export { Table, TableCell, TableCellActive }
