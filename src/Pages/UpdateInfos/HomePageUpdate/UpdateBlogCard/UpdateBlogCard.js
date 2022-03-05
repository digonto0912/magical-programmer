import React,{useState, useEffect} from 'react';
import "./UpdateBlogCard.css";
import {useParams} from "react-router";

const UpdateBlogCard = () => {
    
    const [BlogCardData, setBlogCardData] = useState([]);
    const [image, setImage] = useState(null);

    useEffect(()=>{
        fetch(`https://blooming-island-64834.herokuapp.com/UpdateBlogCard/${id}`)
        .then(res => res.json())
        .then(data => setBlogCardData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateBlogName = e => {
        const blogName = e.target.value;
        const UpdateBlogCardData = {blogName:blogName, blogReating:BlogCardData.blogReating, colorId:BlogCardData.colorId};

        setBlogCardData(UpdateBlogCardData);
    }
    const updateBlogReating = e => {
        const blogReating = e.target.value;
        const UpdateBlogCardData = {blogName:BlogCardData.blogName, blogReating:blogReating, colorId:BlogCardData.colorId};

        setBlogCardData(UpdateBlogCardData);
    }
    const updateBlogCardColorId = e => {
        const colorId = e.target.value;
        const UpdateBlogCardData = {blogName:BlogCardData.blogName, blogReating:BlogCardData.blogReating, colorId:colorId};

        setBlogCardData(UpdateBlogCardData);
    }

    //submit
    const submit = e => {

        e.preventDefault();
        
        const formData = new FormData();
        formData.append("blogName", BlogCardData.blogName);
        formData.append("blogReating", BlogCardData.blogReating);
        formData.append("colorId", BlogCardData.colorId);
        formData.append("img", image);
        console.log(image);


        fetch(`https://blooming-island-64834.herokuapp.com/UpdateBlogCard/${id}`, {
            method:"PUT",
            body: formData
        })
        .then(res => res.json())
        .then(data => data)

    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        colorId: {BlogCardData.colorId}
        </h1>
            <form onSubmit={submit}>
            <input accept='image/*' type="file" onChange={e => setImage(e.target.files[0])} />
            <input type="text" onChange={updateBlogName} value={BlogCardData.blogName || ""} />
            <input type="text" onChange={updateBlogReating} value={BlogCardData.blogReating || ""} />
            <input type="text" onChange={updateBlogCardColorId} value={BlogCardData.colorId || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateBlogCard;