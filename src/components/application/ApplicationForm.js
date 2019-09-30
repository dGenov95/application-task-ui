import React from 'react';

const ApplicationForm = (props) => {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        fetch('http://localhost:8000/applications/', {
            method: 'POST',
            body: formData,
        })
            .then(() => console.log('successfull form submission'))
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit= {handleFormSubmit}>
            <label htmlFor='name' > Name: </label>
            <input type='text' name='name'/>
            <label htmlFor='email' > Email: </label>            
            <input type='text' name='email' />
            <label htmlFor='phone'> Phone: </label>
            <input type='text' name='phone'/>
            <label htmlFor='loanAmount'>Loan amount: </label>
            <input type='number' name='loanAmount' />
            <button>{'Submit form'}</button>
        </form>
    );
}

export default ApplicationForm;