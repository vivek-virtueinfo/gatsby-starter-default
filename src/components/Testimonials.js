import React, { Component } from 'react';

class Testimonials extends Component {
   render() {

      // Checking if there is data
      if (this.props.data) {
         // Iterating over available testimonial comments and creating JSX
         var testimonials = this.props.data.testimonials.map(function (testimonials) {
            return <li key={testimonials.user}>
               <blockquote>
                  <p>{testimonials.text}</p>
                  <cite>{testimonials.user}</cite>
               </blockquote>
            </li>
         });
         // Declaring background image URL
         var backgroundImage = 'https://i.ibb.co/931rT2d/testimonials-bg.jpg';
      }

      return (
         <section id="testimonials"
            style={{ background: "#161415 url(" + {backgroundImage} + ") no-repeat top center" }}>

            <div className="text-container">
               <div className="row">

                  <div className="two columns header-col">
                     <h1><span>Client Testimonials</span></h1>
                  </div>

                  <div className="ten columns flex-container">
                     <ul className="slides">
                        {testimonials}
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Testimonials;
