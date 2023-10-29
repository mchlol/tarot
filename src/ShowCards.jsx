import { useState, useEffect } from "react";
import testImg from './assets/cards/c01.jpg';
import CardImage from "./CardImage";

export default function CardDetails(props) {

    const [cards, setCards] = useState(props.cards);

    useEffect( () => {
        console.log('Card details cards: ',cards);
    },[cards]);

    // intepret the short name to retrieve the right card image
    function getImgCode(card) {
        const name = card.name_short;
        let letter = name.slice(0,1);
        let lastNums = name.slice(2);

        // get major arcana
        if (letter === 'a') {
            letter = 'm'
        } 

        // get minor arcana
        if (lastNums === 'ac') {
            lastNums = '01'
        } else if (lastNums === 'pa') {
            lastNums = '11'
        } else if (lastNums === 'kn') {
            lastNums = '12'
        } else if (lastNums === 'qu') {
            lastNums = '13'
        } else if (lastNums === 'ki') {
            lastNums = '14'
        }

        const code = letter+lastNums;
        return code;
    }

    return (
        <section className="cards-section">
            <em>Displaying {props.num === 'All' ? 'all' : props.num} card(s)</em>

            <div className="cards-container">

                {cards.map(card => 

                    <div className="card" key={card.name_short}>

                        <h3>{card.name === 'Fortitude' ? 'Fortitude (Strength)' : card.name}</h3>

                        <CardImage className='card-img' alt={card.desc} fileName={getImgCode(card)}/>

                        <p>{card.meaning_up}</p>

                    </div>
                )}
            </div>
        </section>
    )
}
