import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a
        href='https://www.linkedin.com/in/h-m-mohaimanul-islam-290948168/'
        target='_blank'
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://www.facebook.com/islam.partho/' target='_blank'>
        {' '}
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href='https://github.com/Partho-FRz' target='_blank'>
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
