import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>On prends un café pour discuter ?</h2>
        <p>Par mail: <a href="mailto:floriane.erceau@gmail.com" rel="noopener noreferrer" onClick="ga('send', 'event', 'Contact', 'click', 'Mail');"><span>floriane.erceau@gmail.com </span></a> 
        </p>
      </div>
    );
  }
}
 
export default Contact;