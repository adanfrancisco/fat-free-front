import React,{useState, useEffect} from "react"
import './editableCell.css'

const EditableCell = ({
  data: [row,column],
  value: initialValue,
  row: { index },
  column: { id },
  
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue)
  const onChange = e => {
    setValue(e.target.value)
  }
  
  const onBlur = () => {
    console.log(index, id, value)
    // updateMyData(index, id, value)
  }
const onClick = (cell) => {
  console.log(row, column)
  // console.log(index?.row?.original);
}
  const handleFocus = (event) => event.target.select();
  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  return (
    <input 
    type="number" 
    onFocus={handleFocus}
    value={value} 
    onChange={onChange}  
    onBlur={onBlur} 
    onClick={onClick}
  />
    )
  
}
export default EditableCell