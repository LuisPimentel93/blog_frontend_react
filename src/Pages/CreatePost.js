import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom';




const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6 ] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
const formats = [
'header',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image'
]

const CreatePost = () => {
    const homeNavigate = useNavigate();
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState (false)
    
    
    async function createNewPost(e) {
        e.preventDefault();
    
        const data = new FormData(e.currentTarget)
        data.set('content', content)
        data.set('files', files)
        const formData = Object.fromEntries(data)
        console.log(formData)
        const response = await fetch('http://localhost:8080/profiles/post',{
            method: 'POST',
            body: data,
        })
        if (response.ok) {
            console.log(response)
            setRedirect(true)
         }
        
        if (redirect){
            return  homeNavigate('/')
        }
       
    }
  return (
    <form onSubmit={createNewPost}>
        <input type='title' 
        placeholder='Title'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}/>

        <input type='summary' 
        placeholder='Summary'
        name='summary'
        value={summary}
        onChange={e => setSummary(e.target.value)}/>

        <input type='file'
        name='file'
       
         onChange={e => setFiles(e.target.value)}/>

        <ReactQuill
        name='content' 
        value={content} 
        onChange={newValue => setContent(newValue)}
        modules={modules} formats={formats}/>
        <button style={{marginTop:'5px'}}>Create Post</button>
    </form>
  )
}
   
export default CreatePost
