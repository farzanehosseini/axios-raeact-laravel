import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap';
function Example() {
    const [inputName,setInputName]=useState('');
    const [inputFamily,setInputFamily]=useState('');
    const setName=(event)=>{
        setInputName(event.target.value.toUpperCase());
        console.log(inputName);
    }
     const setFamily=(event)=>{
            setInputFamily(event.target.value.toUpperCase());
            console.log(inputFamily);
          }
      
      const data={
        name:inputName,
        family:inputFamily,
      
      }
      const postData=(e)=>{
   
        console.log(data);
        e.preventDefault();

       
        
        axios.post('/getData', data)
.then(response => console.log("name:", response.data.name,"family:",response.data.family))
.catch(error => {
    console.log("Error:", error.response ? error.response.data : error.message);
});
       
      };
    return (
        <form id="form">
        
        <div className="form-group" onSubmit={postData}>
    <label >name</label>
    <input type="text" name="nametext" className="form-control" onChange={setName}/>
        </div>
        <div className="form-group">
<label >family</label>
<textarea className="form-control" name="family" onChange={setFamily}></textarea>
</div>
    <button className="btn btn-danger" type="submit" onClick={postData}>submit</button>
    
</form>


        
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Example />);