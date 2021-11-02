import React from 'react';
import './mainContent.css';

function MainContent(props) {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
}

export default MainContent;
