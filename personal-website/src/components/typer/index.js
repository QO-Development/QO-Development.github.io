import React from 'react'
import {Col} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import './typer.css';

class Typer extends React.Component {

  render() {
    return(
      <Col 
        md={12}
      >
        <div  className="typeContainer">
          <h4><span className="comment">// Let's turn coffee into code...</span></h4>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('<span class="func">func</span> <span class="funcName">make</span>(coffee <span class="param">string</span>) Product { <br />')
                .pauseFor(1500)
                .typeString('<span class="indent"> <span class="keyword">if</span> caffeinated { </span> <br />')
                .typeString('<span class="doubleIndent">product := hack() </span> <br />')
                .typeString('<span class="doubleIndent"> <span class="keyword">return</span> product </span> <br />')
                .typeString('<span class="indent">} <span class="keyword"> else </span> { </span> <br />')
                .typeString('<span class="doubleIndent"> consume(coffee) </span> <br />')
                .typeString('<span class="doubleIndent"> product := make(coffee) </span> <br />')
                .typeString('<span class="keyword doubleIndent">return</span> product <br />')
                .typeString('<span class="indent"> } </span> <br />')
                .typeString('}')
                .start();
            }}
          />
        </div>
      </Col>
    );
  }
}

export default Typer; 
