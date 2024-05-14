import React from 'react';

const Form = ({ type, id, msg, onChange }) => {
    return (
        <div>
            <div className="form-floating my-5 ms-1">
                <input 
                    type={type} 
                    className="form-control" 
                    id={id} 
                    placeholder={msg}
                    onChange={onChange}  
                />
                <label className="ms-2" htmlFor={id}>{msg}</label>
            </div>
        </div>
    )
}

export default Form;
