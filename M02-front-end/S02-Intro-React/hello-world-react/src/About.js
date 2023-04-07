import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {'Diego Sette'}
        </h1>
        <p>
          {'I am a 35 years old brazilian guy living in Amsterdam and studying at Trybe to be a Web Developer'}
        </p>
        <h2>
          {'My Skills'}
        </h2>
        <ul>
          <li>Install React</li>
          <li>Create a Component</li>
          <li>Create a Class</li>
        </ul>
      </div>
    );
  }
}

export default AboutMe;