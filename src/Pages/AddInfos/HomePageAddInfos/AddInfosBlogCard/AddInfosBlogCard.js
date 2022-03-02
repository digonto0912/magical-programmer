import React,{useState, useEffect} from 'react';
import "./AddInfosBlogCard.css";
import {useParams} from "react-router";

const AddInfosBlogCard = () => {

    const [BlogCardData, setBlogCardData] = useState([]);
    const [image, setImage] = useState(null);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosBlogName = e => {
        const blogName = e.target.value;
        const AddInfosBlogCardData = {blogName:blogName, blogReating:BlogCardData.blogReating, colorId:BlogCardData.colorId};

        setBlogCardData(AddInfosBlogCardData);
    }
    const AddInfosBlogReating = e => {
        const blogReating = e.target.value;
        const AddInfosBlogCardData = {blogName:BlogCardData.blogName, blogReating:blogReating, colorId:BlogCardData.colorId};

        setBlogCardData(AddInfosBlogCardData);
    }
    const AddInfosBlogColorId = e => {
        const colorId = e.target.value;
        const AddInfosBlogCardData = {blogName:BlogCardData.blogName, blogReating:BlogCardData.blogReating, colorId:colorId};

        setBlogCardData(AddInfosBlogCardData);
    }

    //submit
    const submit = e => {

        e.preventDefault();

        if(!image){
            return
        }

        const formData = new FormData();
        formData.append("blogName", BlogCardData.blogName);
        formData.append("blogReating", BlogCardData.blogReating);
        formData.append("colorId", BlogCardData.colorId);
        formData.append("img", image);
        console.log(image);


        fetch(`http://localhost:2333/AddInfosBlogCard`, {
            method:"POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => data)

    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        color: {BlogCardData.blogName}
        </h1>
            <form onSubmit={submit}>
                <input accept='image/*' type="file" onChange={e => setImage(e.target.files[0])} />
                <input type="text" onChange={AddInfosBlogName} placeholder="blog title" />
                <input type="text" onChange={AddInfosBlogReating} placeholder="Blog reating" />
                <input type="text" onChange={AddInfosBlogColorId} placeholder="Blog card id" />

                <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosBlogCard;