import React, { useEffect, useState } from 'react';

function FormData() {
    const data = {name:"", email:"", password:""}
    const [inputData, setinputData] = useState(data)
    const [flag, setflag] = useState(false)
    useEffect(()=>{
console.log("Registered")
    },[flag])
    function handleData(e){
        setinputData({...inputData, [e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are Mandatory")
        }
        else{
setflag(true)
        }
    }
    return (
        <>
        <pre>{(flag)?<h2 className='ui-design'>Hello {inputData.name}, you have Registered successfully</h2>:""}</pre>
        <form className="container" onSubmit={handleSubmit}>
            <div className="header">
                <h1>Registration Form</h1>
            </div>
            <div>
                <input type='text' placeholder='Enter your Name' name='name' value={inputData.name} onClick={handleData}/>
            </div>
            <div>
                <input type='text' placeholder='Enter your Email' name='name' value={inputData.email} onClick={handleData}/>
            </div>
            <div>
                <input type='text' placeholder='Enter your Password' name='password' value={inputData.password} onClick={handleData}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
        </>
    );
}

export default FormData;
