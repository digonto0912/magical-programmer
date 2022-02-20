import React,{useState, useEffect} from 'react';
import "./AddInfosBlogCard.css";
import {useParams} from "react-router";

const AddInfosBlogCard = () => {
    
    const [BlogCardData, setBlogCardData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/AddInfosBlogCard/${id}`)
        .then(res => res.json())
        .then(data => setBlogCardData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosBlogImg = e => {
        const blogImg = e.target.value;
        const AddInfosBlogCardData = {blogImg:blogImg, blogName:BlogCardData.blogName, blogReating:BlogCardData.blogReating, color:BlogCardData.color};
        console.log(AddInfosBlogCardData);

        setBlogCardData(AddInfosBlogCardData);
    }
    const AddInfosBlogName = e => {
        const blogName = e.target.value;
        const AddInfosBlogCardData = {blogImg:BlogCardData.blogImg, blogName:blogName, blogReating:BlogCardData.blogReating, color:BlogCardData.color};
        console.log(AddInfosBlogCardData);

        setBlogCardData(AddInfosBlogCardData);
    }
    const AddInfosBlogReating = e => {
        const blogReating = e.target.value;
        const AddInfosBlogCardData = {blogImg:BlogCardData.blogImg, blogName:BlogCardData.blogName, blogReating:blogReating, color:BlogCardData.color};
        console.log(AddInfosBlogCardData);

        setBlogCardData(AddInfosBlogCardData);
    }
    const AddInfosBlogCardColor = e => {
        const color = e.target.value;
        const AddInfosBlogCardData = {blogImg:BlogCardData.blogImg, blogName:BlogCardData.blogName, blogReating:BlogCardData.blogReating, color:color};
        console.log(AddInfosBlogCardData);

        setBlogCardData(AddInfosBlogCardData);
    }

    //submit
    const submit = e => {
        fetch(`http://localhost:2333/AddInfosBlogCard`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(BlogCardData)
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        color: {BlogCardData.color}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={AddInfosBlogImg} value={BlogCardData.blogImg || ""} />
            <input type="text" onChange={AddInfosBlogName} value={BlogCardData.blogName || ""} />
            <input type="text" onChange={AddInfosBlogReating} value={BlogCardData.blogReating || ""} />
            <input type="text" onChange={AddInfosBlogCardColor} value={BlogCardData.color || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosBlogCard;