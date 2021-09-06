import React, {useState} from 'react'

const UserForm = (props) => {
    const [label, setLabel] = useState("default label");
    const [content, setContent] = useState("default content");
    const [review, setReview] = useState("default review");
    const createTab = (e) =>{
        e.preventDefault();
        props.createNewTab({label:label, content:content,review:review})
        // if you want to clear the input fields after submitting  set attributes to empty
        setLabel("Enter Label");
        setContent("Enter Content");
        setReview("Enter Review");
    }
    return (
        <div>
            <form onSubmit ={createTab}>
                <input 
                    type="text" 
                    onChange={(e)=> setLabel(e.target.value)} 
                    value = {label}
                />
                <input 
                    type="text"
                    onChange={(e)=>setContent(e.target.value)} 
                    value={content}
                />
                <input 
                    type="text"
                    onChange={(e)=>setReview(e.target.value)} value={review}
                />
                <input 
                    type="submit" 
                    value="Create Tab" 
                />
            </form>
        </div>
    )
}

export default UserForm
