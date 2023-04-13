import Image from './Image';
import staringcat from './images/staringcat.jpg'
import React from 'react';

class App extends React.Component {
  render () {
    return (
      <main>
      <Image source={ staringcat } alternativeText="Cute cat staring" />
      </main>
    );
  }
};

export default App;