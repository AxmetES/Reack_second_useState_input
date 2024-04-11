import React from 'react';


type Props = {
    onAddClick:() => void;
    onChange: (value: string) => void;
    inputValue: string;
}

export const Input: React.FC<Props> = ({onAddClick, onChange, inputValue}) => {
  return(
      <>
          <input placeholder={`Input new task`}
                 value={inputValue}
                 onChange={(e) => onChange(e.target.value)}/>
          <button onClick={onAddClick}>Add task</button>
      </>
  )
}