import React from "react";
import './Card.css';

class Card extends React.Component {
  render() {

    const {title, developer, img, sales} = this.props.game;
    return (
      <section className='card'>
        <img src={img} alt='game pic' />
        <h1>{title}</h1>
        <p>{developer}</p>
        <p>{sales}</p>
      </section>
    )
  }
}

export default Card;