import React, { Component } from 'react';

class Form extends Component {
  
  state = {
    formOk: false
  }


  handleStateTrue = event => {
    event.preventDefault();
    this.setState({ formOk: true });
  }

  handleStateFalse = event => {
    event.preventDefault();
    this.setState({ formOk: false });
  }
  render() {
    return (
      
      <section className="section auth">
        <div>
        <button onClick={this.handleStateTrue} style={{marginLeft: "35%", background:"white", color:"black"} }
                className="button is-primary"
              >Contact</button>
      </div>
      {console.log(this.state.formOk)}
      {this.state.formOk ? <div className="container">
          <h1>Contact information</h1>
          <div>
          <div className="field" style={{width:"25%"}}>
                <input 
                  className="input" 
                  placeholder="Enter full name"
                />
            </div>
            <div className="field" style={{width:"25%"}}>
             
                <input 
                  className="input" 
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
               
             
            </div>
            <div className="field" style={{width:"25%"}}>
            
                <input 
                  className="input" 
                  placeholder="Enter phone number"
                />
               
             
            </div>
            
            <div className="field">
              <p className="control">
                <button onClick={this.handleStateFalse}className="button is-primary" style={{marginLeft: "10%", background:"white", color:"black"}}>
                      Send
                </button>
              </p>
            </div>
          </div>
        </div>: <p></p> }
        
      </section>
    );
  }
}

export default Form;