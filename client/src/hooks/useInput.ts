import {useState, SetStateAction} from 'react'

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: { target: { value: SetStateAction<string> } }) => setValue(e.target.value)

  return {value, onChange, setValue}
}
