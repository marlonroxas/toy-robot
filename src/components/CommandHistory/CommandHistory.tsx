import React from 'react'
import { BaseCommandEnum } from '../../globalTypes'
import type { CommandHistoryType } from '../../globalTypes'
import { ErrorItemStyled, ItemStyled } from './CommandHistoryStyles'
import { CommandLineStyled } from '../CommandLine/CommandLineStyles'

interface PropsType {
  commands?: CommandHistoryType[]
}

export const CommandHistory: React.FC<PropsType> = (props) => {
  const { commands } = props
  return (
    <CommandLineStyled>
      {commands && commands.length > 0 && (
        <>
          <h3>Input and Output:</h3>
          <ol>
            {commands.map((cmd: CommandHistoryType) => {
              return cmd.error ? (
                <ErrorItemStyled key={cmd.order}>{`${cmd.fullString} (${cmd.error})`}</ErrorItemStyled>
              ) : (
                <>
                  <ItemStyled key={cmd.order}>{cmd.fullString}</ItemStyled>
                  {cmd.baseCommand === BaseCommandEnum.Report && (
                    <ItemStyled key={`${cmd.order}-${cmd.fullString}`}>
                      Output: {cmd.xcoord},{cmd.ycoord},{cmd.faceDirection}
                    </ItemStyled>
                  )}
                </>
              )
            })}
          </ol>
        </>
      )}
    </CommandLineStyled>
  )
}
