import React, { useState, useEffect } from 'react';

const Application = ({match}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loanAmount, setLoanAmount] = useState(0.0);
    const [interestRate, setInterestRate] = useState(0.0);

    async function fetchApplication(id) {
        await fetch('http://localhost:8000/applications/' + id)
            .then(res => res.json())
            .then(res => {
                setName(res.name);
                setEmail(res.email);
                setPhone(res.phone);
                setLoanAmount(res.loanAmount);
                setInterestRate(res.interestRate);

            }, (err) => console.log(err));
    }

    useEffect(() => {
        fetchApplication(match.params.id);
    });

    return (
        <div>
            <h1>Applicant Name: {name}</h1>
            <h2>Email address: {email}</h2>
            <h2>Phone number: {phone}</h2>
            <hr/>
            <h1>Loan amount: {loanAmount}</h1>
            <h2>Calculated Interest Rate: {interestRate}%</h2>
        </div>
    );

};

export default Application;