import React from 'react';

export default function About() {
  return (
    <div>
      <p className="content is-medium">Technical Writer and Something-of-a Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
      <p className="content is-italic mt-4">
      Hello, my name is Jules Joseph I am a web developer from Brockton,MA and currently reside in West New York, New Jersey.
      </p>
    </div>
  );
}


