import React, { useState } from 'react';
import Card from './Card';
import NavBar from '../Common/NavBar';
import './Wallet.css';

const cardsData = [
    { id: 'apple-cash', content: 'Apple Cash', className: 'apple-cash' },
    { id: 'apple-card', content: 'Apple Card', className: 'apple-card' },
    { id: 'chargepoint', content: 'ChargePoint', className: 'chargepoint' },
    { id: 'rei', content: 'REI', className: 'rei' },
    { id: 'ulta', content: 'Ulta', className: 'ulta' },
    { id: 'equinox', content: 'Equinox', className: 'equinox' },
    { id: 'delta', content: 'Delta SkyMiles', className: 'delta' }
];

function Wallet() {
    const [expandedCard, setExpandedCard] = useState(null);

    const expandCard = (cardId) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    return (

        <div className="main">
            <div className="wallet">
                {cardsData.map((card, index) => (
                    <Card
                        key={card.id}
                        card={card}
                        index={index}
                        expanded={expandedCard === card.id}
                        expandCard={expandCard}
                    />
                ))}
            </div>
            <NavBar />
        </div>



    );
}

export default Wallet;
