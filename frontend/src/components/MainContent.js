import React from 'react';
import './mainContent.css';


function MainContent(props) {
  return (
    <>
      <main>
        <div className="container">{props.children}</div>
      </main>
    </>
  );
}

export default MainContent;
