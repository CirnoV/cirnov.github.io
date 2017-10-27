import './styles.css';
import 'typeface-roboto';
import React from 'react';
import Typography from 'material-ui/Typography';
import IcicleLogo from '../../../images/icicle-logo.svg';

function Logo() {
  return (
    <div className="logo">
      <img
        className="logoImage"
        src={IcicleLogo}
        alt="logoImage"
      />
      <Typography
        type="display3"
        style={{color: 'inherit', marginLeft: 12, fontWeight: 100}}
      >
        iCICLE
      </Typography>
    </div>
  );
}

export default Logo;
