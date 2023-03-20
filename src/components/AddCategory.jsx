import { useState } from "react";


const AddCategory = ({onAddCategory}) => {
    const [inputValue, setinputValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length < 1) return
        
        // setcategories(cat => [...cat, inputValue])
        onAddCategory(inputValue)
        setinputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='buscar gifs' value={inputValue} onChange={e => setinputValue(e.target.value)}  />
        </form>
    );
};

export default AddCategory;