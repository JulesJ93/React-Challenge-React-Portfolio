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
      <p className="content">
        I always act as a product manager for learning resources, which guides
        users to what they need in the moment, but also enable them to explore
        content on their terms using video, audio, documentation, and so much
        more in an advanced learning ecosystem.
      </p>
    </div>
  );
}


