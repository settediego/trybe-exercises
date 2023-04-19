import React, { Component } from 'react';
import Card from './Card';
import videoGames from '../data';
import PropTypes from 'prop-types';

class VideoGameList extends Component {
  render(){
    return (
      <div>
        {videoGames.map((videoGame) => <Card key={videoGame.id} game={videoGame} />)}
      </div>
    )
  }
}

VideoGameList.propTypes = {
  //arrayOf porque temos um array de jogos
  videoGames: PropTypes.arrayOf(
      PropTypes.shape({
          title: PropTypes.string,
          developer: PropTypes.string,
          sales: PropTypes.number,
          img: PropTypes.string
      })
  )
}

VideoGameList.defaultProps = {
  games: []
}

export default VideoGameList;