import React from 'react';

const ApplicationForm = (props) => {
    const SUBMIT_BUTTON_VALUE = 'Submit form'
    return (
        <form action ='http//localhost:8000/' method= 'POST'>
            <input type='text' name='name'/>
            <input type='text' name='email'/>
            <input type='text' name='phone'/>
            <input type='number' name='loanAmount'/>
            <input type='submit' value={SUBMIT_BUTTON_VALUE}/>
        </form>
    );
}

export default ApplicationForm;