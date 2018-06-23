import React from 'react';
import fox from './The fox.jpeg';
import hound from './The hound.jpg';

class Shepard extends React.Component {
    render() {
        return (
            <div>
                <img src={fox} alt="fox"/>
                <img src={hound} alt="hound"/>
            </div>
        );
    }
}

export default Shepard;