import React, { useState } from 'react'
import { AppStyled } from './AppStyles'
import { CommandHistory } from './components/CommandHistory/CommandHistory'
import { CommandLine } from './components/CommandLine/CommandLine'
import { TableTop } from './components/TableTop/TableTop'
import type { CommandType, CommandHistoryType, TableStateType } from './globalTypes'

const App: React.FC = () => {
  const initialState: TableStateType = {
    gridSize: 5,
    robotIsPlaced: false,
  }
  const [tableState, setTableState] = useState(initialState)
  const [history, setHistory] = useState<CommandHistoryType[]>([])

  const processCommand = (command: CommandType, newTableState: TableStateType): void => {
    setTableState(newTableState)
    setHistory([...history, { ...command, order: history.length + 1 }])
  }

  return (
    <AppStyled>
      <TableTop tableState={tableState} />
      <CommandLine onCommand={processCommand} tableState={tableState} />
      <CommandHistory commands={history} />
    </AppStyled>
  )
}

export default App
