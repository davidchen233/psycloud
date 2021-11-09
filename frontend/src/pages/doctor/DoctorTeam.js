import React from 'react';
import Card from './Card';
import './DoctorTeam.scss';
import { useState } from 'react';

function DoctorTeam() {
  return (
    <>
      <section className="team-page">
        <h3 className="team-title">-心理師團隊-</h3>
        <section className="control-section">
          <section className="search-section">
            <input type="text" class="search-input"></input>
            <input
              type="submit"
              className="search-btn"
              value="依專長搜尋"
            ></input>
          </section>
          <button className="search-btn round">壓力檢測</button>
        </section>
        <section className="team-container">
          <div className="show">
            <Card />
          </div>
          <div className="show">
            <Card />
          </div>
          <div className="show">
            <Card />
          </div>
          <div className="show">
            <Card />
          </div>
          <div className="show">
            <Card />
          </div>
          <div className="show">
            <Card />
          </div>
          <div className="show">
            <Card />
          </div>
          <div className="show">
            <Card />
          </div>
          <div className="show">
            <Card />
          </div>
          <div className="show">
            <Card />
          </div>
        </section>
      </section>
      {/* had to write this to overwrite the home page background... */}
      <style>
        {
          '#root {background: linear-gradient(#c5f0ff50, #ffffda50, #ff9bc050);}'
        }
      </style>
    </>
  );
}

export default DoctorTeam;
