import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./../containers/app.css";


class Filter extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          tags: "",
          events: ""
        };
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
        //event.preventDefault();
        
        this.props.updateParentTedData(this.state.tags, this.state.events); 
      }


      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="tags" bsSize="large">
                <ControlLabel>Tags</ControlLabel>
                <FormControl
                  autoFocus
                  type="text"
                  value={this.state.tags}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="events" bsSize="large">
                <ControlLabel>Events</ControlLabel>
                <FormControl
                  value={this.state.events}
                  onChange={this.handleChange}
                  type="text"
                />
              </FormGroup>
              <Button
                block
                bsSize="large"
                type="submit"
              >
                Filter
              </Button>
            </form>
          </div>
        );
      }
  }
   
  export default Filter;