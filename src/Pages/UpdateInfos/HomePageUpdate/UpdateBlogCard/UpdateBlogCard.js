import React,{useState, useEffect} from 'react';
import "./UpdateBlogCard.css";
import {useParams} from "react-router";

const UpdateBlogCard = () => {
    
    const [BlogCardData, setBlogCardData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/UpdateBlogCard/${id}`)
        .then(res => res.json())
        .then(data => setBlogCardData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateBlogImg = e => {
        const blogImg = e.target.value;
        const UpdateBlogCardData = {blogImg:blogImg, blogName:BlogCardData.blogName, blogReating:BlogCardData.blogReating, color:BlogCardData.color};
        console.log(UpdateBlogCardData);

        setBlogCardData(UpdateBlogCardData);
    }
    const updateBlogName = e => {
        const blogName = e.target.value;
        const UpdateBlogCardData = {blogImg:BlogCardData.blogImg, blogName:blogName, blogReating:BlogCardData.blogReating, color:BlogCardData.color};
        console.log(UpdateBlogCardData);

        setBlogCardData(UpdateBlogCardData);
    }
    const updateBlogReating = e => {
        const blogReating = e.target.value;
        const UpdateBlogCardData = {blogImg:BlogCardData.blogImg, blogName:BlogCardData.blogName, blogReating:blogReating, color:BlogCardData.color};
        console.log(UpdateBlogCardData);

        setBlogCardData(UpdateBlogCardData);
    }
    const updateBlogCardColor = e => {
        const color = e.target.value;
        const UpdateBlogCardData = {blogImg:BlogCardData.blogImg, blogName:BlogCardData.blogName, blogReating:BlogCardData.blogReating, color:color};
        console.log(UpdateBlogCardData);

        setBlogCardData(UpdateBlogCardData);
    }

    //submit
    const submit = e => {
        fetch(`http://localhost:2333/UpdateBlogCard/${id}`, {
            method:"PUT",
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
        Name: {BlogCardData.number}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={updateBlogImg} value={BlogCardData.blogImg || ""} />
            <input type="text" onChange={updateBlogName} value={BlogCardData.blogName || ""} />
            <input type="text" onChange={updateBlogReating} value={BlogCardData.blogReating || ""} />
            <input type="text" onChange={updateBlogCardColor} value={BlogCardData.color || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateBlogCard;