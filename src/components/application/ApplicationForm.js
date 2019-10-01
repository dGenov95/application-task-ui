import React, { useState } from 'react';
import { Redirect} from 'react-router-dom';

const ApplicationForm = (props) => {
    const [isDataValid, setIsDataValid] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loanAmount, setLoanAmount] = useState(0.0);

    async function handleFormSubmit(event){
        event.preventDefault();
        if (name && email.includes('@') && phone.match('[0-9]') && loanAmount > 0.0) {
            
            setIsDataValid(true);
            const formData = new FormData(event.target);

            await fetch('http://localhost:8000/applications/', {
                method: 'POST',
                body: formData,
            });
        } else {
            setIsDataValid(false);
        }
    };

    if (!isDataValid) {
        return <Redirect to='/error'/>
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='name' > Name: </label>
            <input type='text' name='name' required onChange={(e) => setName(e.target.value)}/>
            <label htmlFor='email' > Email: </label>
            <input type='email' name='email' required onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='phone'> Phone: </label>
            <input type='text' name='phone' required onChange={(e) => setPhone(e.target.value)}/>
            <label htmlFor='loanAmount'>Loan amount: </label>
            <input type='number' name='loanAmount' required onChange={(e) => setLoanAmount(e.target.value)}/>
            <button>{'Submit form'}</button>
        </form>
    );
}

export default ApplicationForm;