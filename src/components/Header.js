import React, { Component } from 'react';

class Header extends Component {
   render() {

      // Checking if there is data
      if (this.props.data) {
         // Declaring and assigining values to variable
         var name = this.props.data.name;
         var description = this.props.data.description;
      }

      return (
         <header id="home"
            style={{ background: "#161415 url(" + "https://papers.co/wallpaper/papers.co-ns52-mountain-night-sky-star-space-nature-28-wallpaper.jpg" + ") no-repeat top center" }}>
            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">I'm {name}.</h1>
                  <h3>{description}.</h3>
                  <hr />
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
