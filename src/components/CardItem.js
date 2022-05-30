import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

        if (props.video != "")
        {
            return (
            <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <video playsInline src={props.video} className="cards__item__img" autoPlay loop muted/>
                    </figure>   
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
            </>
            )
        }
        else 
        {
            return (
            <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="TravelImage" className="cards__item__img"/>
                    </figure>   
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
            </>
            )
        }
   }


export default CardItem;
//<img src={props.src} alt="TravelImage" className="cards__item__img" />