import './styles.css';
import React from 'react';
import Logo from './Logo';
import Content from './Content';

function Main() {
  return (
    <header className="wrapper">
      <Logo />
      <Content />
    </header>
  );
}

export default Main;
