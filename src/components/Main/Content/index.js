import './styles.css';
import React, {Component} from 'react';
import anime from 'animejs';
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

class Content extends Component {
  componentDidMount() {
    anime({
      targets: '#text',
      translateY: ['10rem', '0rem'],
      delay: 500,
      easing: 'easeOutExpo',
      duration: 2000,
      opacity: [0, 1],
    });

    anime({
      targets: '#icon-github',
      translateY: ['10rem', '0rem'],
      delay: 620,
      easing: 'easeOutExpo',
      duration: 2200,
      opacity: [0, 1],
    });

    anime({
      targets: '#icon-steam',
      translateY: ['10rem', '0rem'],
      delay: 600,
      easing: 'easeOutExpo',
      duration: 2200,
      opacity: [0, 1],
    });
  }

  render() {
    return (
      <div className="content">
        <div className="Container" id="text">
          <Typography
            type="headline"
            style={{color: 'inherit', maxWidth: 400}}
          >
            icicle.moe에 오신 걸 환영합니다.
          </Typography>
        </div>

        <div className="Container" style={{marginTop: 0}}>
          {[
            {id: 'icon-steam', icon: SteamIcon, uri: 'http://steamcommunity.com/id/cirnov/'},
            {id: 'icon-github', icon: GithubCircleIcon, uri: 'https://github.com/CirnoV'},
          ].map((item) => (
            <Button
              key={item.id}
              id={item.id}
              target="_blank"
              href={item.uri}
              className={this.props.classes.button}
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
}

Content.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
