import React, { Component } from 'react';
import $ from 'jquery';
import './../static/css/layout.css';
import './../static/css/default.css';
import './../static/css/default.css';
import './../static/css/fonts.css';
import './../static/css/magnific-popup.css';
import './../static/css/media-queries.css';
import './../static/js/init';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';

/**
 * To fetch resorces from contentful using its token and space
 */
const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "o7gz42v92veo",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "YAaqmibuZgwE6gMIVu1hc52Rw8RXMFFMesSqhkd439E"
});


class App extends Component {

  /**
   * To construct component
   * @param props to get data properties of component 
   */
  constructor(props) {
    super(props);
    // Defining state and it's necessary variable
    this.state = {
      profileData: {}
    };
  }

  /**
   * To get profile Data from Contentful CMS
   */
  getProfileData() {
    // Getting URL of asset from Contentful
    client.getAsset("5oyV2jJ9yoOt1lpDHEWxIp").then(asset => {
      const fileURL = asset.fields.file.url;
      // Making API call on recieved JSON data from fileURL
      $.ajax({
        url: fileURL,
        dataType: 'json',
        cache: false,
        success: function (data) {          
          // Updating state when get profile data
          this.setState({ profileData: data });
        }.bind(this),
        error: function (xhr, status, err) {
          // If there is error in fetching data from URL, then it will come here
          // Log of error
          console.log(err);
        }
      });
    })
      .catch(err => console.log(err));
  }

  /**
   * This is component method to call when it gets mount
   */
  componentDidMount() {
    this.getProfileData();
  }

  /**
   * To render DOM in browser from JSX
   */
  render() {
    return (
      <div className="App">
        {/* These all are parts of Profile page divided in components  */}
        <Header data={this.state.profileData.main} />
        <About data={this.state.profileData.main} />
        <Resume data={this.state.profileData.resume} />
        <Portfolio data={this.state.profileData.portfolio} />
        <Contact data={this.state.profileData.main} />
        <Footer data={this.state.profileData.main} />
      </div>
    );
  }
}

export default App;
