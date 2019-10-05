import React, { useState } from 'react';
import { Redirect} from 'react-router-dom';

const ApplicationForm = (props) => {
    const [isLoanValid, setIsLoanValid] = useState(true);
    const [validationErrors, setValidationErrors] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loanAmount, setLoanAmount] = useState(0.0);

    const renderErrors = () => {
        const errors = validationErrors;
        if (errors.length > 0) {
            return errors.map(err => <li key={err.id}>{err.value}</li>);
        }
    };
    const getValidationErrors = () => {
        const validationErrors = [];
        if (name.length < 2) {
            validationErrors.push({
                id: 'name',
                value: 'Name must be at least 2 characters long'
            });
        }
        if (!email.includes('@')) {
            validationErrors.push({
                id: 'email',
                value: 'Email must be in a valid format'
            });
        }
        if (!phone.match('[0-9]')) {
            validationErrors.push({
                id: 'phone',
                value: 'Phone must contain only numbers'
            });
        }
        if (loanAmount < 1) {
            validationErrors.push({
                id: 'loan',
                value: 'Loan amount must be at least 1'
            });
        }
        return validationErrors;
    }

    async function handleFormSubmit(event){
        event.preventDefault();
        const validationErrors = getValidationErrors();

        if (validationErrors.length > 0) {
            setValidationErrors(validationErrors);
            return;
        }
        const formData = new FormData(event.target);
        let response;
        try {
            response = await fetch('http://localhost:8000/applications/', {
                method: 'POST',
                body: formData,
            });
        } catch (err) {
            setIsLoanValid(false);
            console.log('Problem with POST request: ' + err.message);
        }
        
        if (!response.ok) {
            setIsLoanValid(false);
            return;
        }
        setIsLoanValid(true);

    };

    if (!isLoanValid) {
        return <Redirect to='/error'/>
    }

    return (
        <div className={props.className}>
            {renderErrors()}
            <form  onSubmit={handleFormSubmit}>
                <div className = 'form-group'>
                    <label htmlFor='name' > Name: </label>
                    <input type='text' name='name'  className='form-control'required onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='email' > Email: </label>
                    <input type='email' name='email'  className='form-control'required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='phone'> Phone: </label>
                    <input type='text' name='phone' className='form-control' required onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='loanAmount'>Loan amount: </label>
                    <input type='number' name='loanAmount' className='form-control' required onChange={(e) => setLoanAmount(e.target.value)}/>
                </div>
                <button className='btn btn-primary mt-3'>{'Submit form'}</button>
            </form>
        </div>
    );
}

export default ApplicationForm;