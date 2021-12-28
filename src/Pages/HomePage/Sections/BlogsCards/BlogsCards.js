import React from 'react';
import "./BlogsCards.css"

const BlogsCards = () => {
    return (
        <div className="BC">
            <div id="card1" className="BC-cards">

                <img src="//images.ctfassets.net/ooa29xqb8tix/4cDON6Rn9Q5ysi4HCsJQOF/fedd689e11b818352c033d5e502ea23c/SwiftUI_Concurrency_800x600_cover.png?w=400&q=50" className="BC-img" />
                <p className="BC-text">
                Problem Fixing Blog
                </p>
                <p className="BC-reating">
                    Reating - 5.0
                </p>

            </div>
        </div>
    );
};

export default BlogsCards;