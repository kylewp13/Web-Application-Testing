import React from 'react';

const Display = (props) => {
    return (
        <div>
            <h2 data-testid='ball'>Ball: {props.balls}</h2>
            <h2 data-testid='strikes'>Strikes: {props.strikes}</h2>
        </div>
    )
};

export default Display