import React,{useState} from 'react';

const Test = () => {
    const [name,setName] = useState({}) 

    const changeValue= ()=>{
        setName({
            name:"nayan"
        })
    }
    return (
        <div >
            <button onClick={changeValue}>
                change
            </button>
            <h3>{name.name}</h3>
        </div>
    );
};

export default Test;