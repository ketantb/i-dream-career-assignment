import { DummyData } from "./data";
// import { userCount } from "./cardData"
import "../styles/card.css"
import { useState } from "react";
import { BsThreeDots, BsHeart } from 'react-icons/bs';
import { SlPaperPlane } from 'react-icons/sl';
import Loader from "./loader";

const Cards = ({userData}) => {
    // console.log(userData)
    const cardData = userData      // || DummyData
    // console.log(cardData)
    if(!cardData){
        return(
            <Loader/>
        )
    }
    return ( 
        <>
             <section className="cards">
                <div>
                    {cardData.map((items) => {
                        const { date, description, id, likes, location, imgUrl, author } = items;
                        return (
                            <div className="card" key={id}>
                                <div className="card-header">
                                    <div>
                                        <div className="user-name">{author}</div>
                                        <div className="user-location">{location}</div>
                                    </div>
                                    <div className="more-icon-block">
                                        <BsThreeDots className="more-icon"/>
                                    </div>
                                </div>
                                <div><img id="post-img" src={imgUrl} alt="Avatar" /></div>
                                <div className="likebtn-share-date-block">
                                    <div className="like-share-block">
                                        <div>
                                            <BsHeart className="heart-icon"/>
                                        </div>
                                        <div>
                                            <SlPaperPlane className="share-icon"/>
                                        </div>
                                    </div>
                                    <div className="date">
                                        {date}
                                    </div>
                                </div>
                                <div className="like-count">{likes} likes</div>
                                <div className="description">{description}</div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Cards;