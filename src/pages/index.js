import React, { Component } from 'react';
import '../App.css';
import '../css/layout.css';
import '../css/default.css';
import '../css/fonts.css';
import '../css/magnific-popup.css';
import '../css/media-queries.css';
import '../js/init';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import * as resumeDataJSON from './resumeData.json';

import 'font-awesome/css/font-awesome.min.css';




class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: resumeDataJSON.default
    };
    console.log('resumeDataJSON', resumeDataJSON.default);
    
  }


  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
