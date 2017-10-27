import './styles.css';
import 'typeface-roboto';
import React, {Component} from 'react';
import anime from 'animejs';
import Typography from 'material-ui/Typography';
// import IcicleLogo from '../../../images/icicle-logo.svg';

class Logo extends Component {
  componentDidMount() {
    anime({
      targets: '#icicleCenter',
      translateX: ['-20rem', '0rem'],
      delay: 500,
      duration: 500,
      opacity: [0, 1],
      easing: 'easeInOutQuart',
    });

    anime({
      targets: '#logoText',
      translateY: ['10rem', '0rem'],
      delay: 1000,
      duration: 500,
      opacity: [0, 1],
      easing: 'easeInOutQuart',
    });

    anime({
      targets: '.logo',
      translateY: ['5rem', '0rem'],
      delay: 2000,
      duration: 1500,
      easing: 'easeOutExpo',
    });
  }

  render() {
    return (
      <div className="logo">
        {/* <img
          className="logoImage"
          src={IcicleLogo}
          alt="logoImage"
        /> */}
        {/* eslint-disable */}
        <svg xmlns="http://www.w3.org/2000/svg" className="logoImage" viewBox="0 0 200 200">
          <g fill="#2196F3">
            <path id="icicleTop" d="M50 0l103.127 28.963L200 92.683 96.887 63.72z"/>
            <path id="icicleBottom" d="M50 200l103.127-28.964L200 107.316 96.887 136.28z"/>
            <path id="icicleCenter" d="M0 100.39L104.58 73.66l95.418 25.956L95.43 126.34z"/>
          </g>
        </svg>
        {/* eslint-enable */}
        <Typography
          type="display3"
          style={{color: 'inherit', marginLeft: 12, fontWeight: 100}}
        >
          i
        </Typography>
        <Typography
          id="logoText"
          type="display3"
          style={{color: 'inherit', fontWeight: 100}}
        >
          CICLE
        </Typography>
      </div>
    );
  }
}

export default Logo;
