import React, { Component } from 'react';

class About extends Component {
   render() {

      // Checking if there is data
      if (this.props.data) {
         // Declaring and assigining values to variable
         var profilepic = "https://img.icons8.com/plasticine/2x/user.png";
         var bio = this.props.data.bio;
         var otherSkills = this.props.data.otherSkills.map(function (skill) {
            return <span key={skill.tech}>
               <span><b>{skill.tech}</b> : </span>  <span>{skill.tools}</span><br/> 
            </span>
          })
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt=" Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns">
                        {/* <h2>Relative Work Experience</h2> */}
                        <h2>Other technical skills</h2>
                        <p className="address">
                           {otherSkills}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default About;
