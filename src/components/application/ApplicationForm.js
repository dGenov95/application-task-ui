import React, {useState} from 'react';

const ApplicationForm = (props) => {
    const [isDataValid, setIsDataValid] = useState(false);

    async function handleFormSubmit(event){
        event.preventDefault();
        
        const formData = new FormData(event.target);
        
        await fetch('http://localhost:8000/applications/', {
            method: 'POST',
            body: formData,
        });
    };

    const handleFormChange = event => {
        //TODO
    };

    return (
        <form onSubmit={handleFormSubmit} onChange= {handleFormChange}>
            <label htmlFor='name' > Name: </label>
            <input type='text' name='name' />
            <label htmlFor='email' > Email: </label>
            <input type='text' name='email' />
            <label htmlFor='phone'> Phone: </label>
            <input type='text' name='phone' />
            <label htmlFor='loanAmount'>Loan amount: </label>
            <input type='number' name='loanAmount' />
            <button>{'Submit form'}</button>
        </form>
    );
}

export default ApplicationForm;