import React, { Component } from 'react';

class Footer extends Component {
   render() {

      return (
         <footer>

            <div className="row">
               <div className="twelve columns">

                  <ul className="copyright">
                     <li>&copy; Copyright 2020 Virtue Info SoftWeb Pvt. Ltd.</li>
                     <li>Design by <a title="Virtue Info" target="_blank" href="https://www.virtueinfo.com">Virtue Info SoftWeb Pvt. Ltd.</a></li>
                  </ul>

               </div>
               <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
         </footer>
      );
   }
}

export default Footer;
