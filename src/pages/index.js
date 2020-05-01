import React, { Component } from 'react';
import $ from 'jquery';
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

import 'font-awesome/css/font-awesome.min.css';

const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "o7gz42v92veo",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "YAaqmibuZgwE6gMIVu1hc52Rw8RXMFFMesSqhkd439E"
});



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profileData: {}
    };
  }

  /**
   * To get profile Data from Contentful CMS
   */
  getProfileData() {
    // Getting URL of asset from Contentful
    client.getAsset("5iv740dYEzS9mfqMgjqlC").then(asset => {
      const fileURL = asset.fields.file.url;
      // Making API call on recieved URL
      $.ajax({
        url: fileURL,
        dataType: 'json',
        cache: false,
        success: function (data) {
          this.setState({ profileData: data });
        }.bind(this),
        error: function (xhr, status, err) {
          console.log(err);
        }
      });
    })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getProfileData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.profileData.main} />
        <About data={this.state.profileData.main} />
        <Resume data={this.state.profileData.resume} />
        <Portfolio data={this.state.profileData.portfolio} />
        <Testimonials data={this.state.profileData.testimonials} />
        <Contact data={this.state.profileData.main} />
        <Footer data={this.state.profileData.main} />
      </div>
    );
  }
}

export default App;
