import React,{useState, useEffect} from 'react';
import "./UpdatePaymentSystemRules.css";
import {useParams} from "react-router";

const UpdatePaymentSystemRules = () => {
    
    const [PaymentSystemRules, setPaymentSystemRules] = useState([]);

    useEffect(()=>{
        fetch(`https://magical-programmer-server-from-git.onrender.com/UpdatePaymentSystemRules/${id}`)
        .then(res => res.json())
        .then(data => setPaymentSystemRules(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateRule = e => {
        const rule = e.target.value;
        const UpdatePaymentSystemRules = {rule:rule};
        console.log(UpdatePaymentSystemRules);

        setPaymentSystemRules(UpdatePaymentSystemRules);
    }

    //submite
    const submit = e => {
        fetch(`https://magical-programmer-server-from-git.onrender.com/UpdatePaymentSystemRules/${id}`, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(PaymentSystemRules)
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        Name: {PaymentSystemRules.number}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={updateRule} value={PaymentSystemRules.rule || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdatePaymentSystemRules;