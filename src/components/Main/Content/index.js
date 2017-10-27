import './styles.css';
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import SteamIcon from '../../../images/steam.svg';
import GithubCircleIcon from '../../../images/github-circle.svg';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: '100%',
  },
});

function Content(props) {
  const {classes} = props;

  return (
    <div className="content">
      <div className="Container">
        <Typography
          type="headline"
          style={{color: 'inherit', maxWidth: 400}}
        >
          icicle.moe에 오신 걸 환영합니다.
        </Typography>
      </div>

      <div className="Container" style={{marginTop: 0}}>
        {[
          {icon: SteamIcon, uri: 'http://steamcommunity.com/id/cirnov/'},
          {icon: GithubCircleIcon, uri: 'https://github.com/CirnoV'},
        ].map((item) => (
          <Button
            key={item.uri}
            target="_blank"
            href={item.uri}
            className={classes.button}
          >
            <img
              key={item.uri}
              className="iconImage"
              src={item.icon}
              width="120"
              height="120"
              alt="icon"
            />
          </Button>
        ))}
      </div>
    </div>
  );
}

Content.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
