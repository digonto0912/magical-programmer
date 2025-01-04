import React,{useState, useEffect} from 'react';
import "./AddInfosPaymentSystemRules.css";
import {useParams} from "react-router";

const AddInfosPaymentSystemRules = () => {
    
    const [PaymentSystemRules, setPaymentSystemRules] = useState([]);

    useEffect(()=>{
        fetch(`https://magical-programmer-server-from-git.onrender.com/AddInfosPaymentSystemRules/${id}`)
        .then(res => res.json())
        .then(data => setPaymentSystemRules(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosRule = e => {
        const rule = e.target.value;
        const AddInfosPaymentSystemRules = {rule:rule};
        console.log(AddInfosPaymentSystemRules);

        setPaymentSystemRules(AddInfosPaymentSystemRules);
    }

    //submite
    const submit = e => {
        fetch(`https://magical-programmer-server-from-git.onrender.com/AddInfosPaymentSystemRules`, {
            method:"POST",
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
            <input type="text" onChange={AddInfosRule} value={PaymentSystemRules.rule || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosPaymentSystemRules;