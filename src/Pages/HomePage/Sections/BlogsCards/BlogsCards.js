import React, {useEffect, useState} from 'react';
import "./BlogsCards.css"

const BlogsCards = () => {

    const [cardDatas, setcardDatas] = useState([]);

    useEffect(()=>{
        fetch("./API/blogsCardsApi.json")
        .then(res => res.json())
        .then(data => setcardDatas(data))
    },[]);

    return (
        <div className="BC">
            {
                cardDatas.map(cardData => <>

                <div className="BC-cards">
                    
                    <img src={cardData.blogImg} className="BC-img" />
                    <p className="BC-text">
                        {cardData.blogName}
                    </p>
                    <p className="BC-reating">
                        Reating - {cardData.blogReating}
                    </p>
                    
                </div>

                </>)
            }
        </div>
    );
};

export default BlogsCards;