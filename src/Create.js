import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle]= useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]= useState('voxer');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog={title,body,author};
        
        setIsPending(true);
        fetch( "http://localhost:8000/blogs" ,{
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }) 
        .then(()=>{
            console.log('Blog Added');
            setIsPending(false);
            //history.go(-1);
            history.push ('/');
        })
        .catch(err => {
            console.log(err);
            
        })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Author</label>
                <select
                    onChange={ (e) => setAuthor(e.target.value) }
                >
                    <option value="voxer">Voxer</option>
                    <option value="suchit">Suchit</option>
                </select>
                <label>Blog Content</label>
                <textarea 
                    cols="30" 
                    rows="8"
                    required
                    onChange={ (e)=> setBody(e.target.value) }
                ></textarea>
                
                {!isPending && <input type="submit"/>}
                {isPending && <button disabled="disabled">Adding Blog...</button> }
            </form>  
            
        </div>
    );
}
    
export default Create;
