import React from 'react';

export default function About() {
  return (
    <div>
      <p className="content is-medium">From Sales to Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/IMG_0022.jpg'} alt="Jules Joseph"/>
      <p className="content is-italic mt-4">
      Hello, my name is Jules Joseph I am a web developer from Brockton,MA currently residing in West New York, New Jersey. I have a strong passion for collaboration and creativity and most importantly continued learning.    </p>
    </div>
  );
}


