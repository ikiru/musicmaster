import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  search() {
    console.log("this.state", this.state);
    const BASE_URL = "https://api.spotify.com/v1/search";
    const FETCH_URL =
      BASE_URL + "q=" + this.state.query + "&type=artist&limit=1";
    var accessToken =
      "BQDjTyK2bUGHXwOQ3jzPYd7XxubiGIPokJfIHxR4wKCQOeX9wakIU9hn9u0nCWLMg4XOsUuVSQXH2KUDoE-8_jUY0LI4edFJOCBiXW6Rf-vvnn8WDZjZ7WSi6ONsXysECkn2VcUdcZmx_uKr52w5zIJ7-q9yArs&";
    var myHeaders = new Headers();

    var myOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken
      },
      mode: "cors",
      cache: "default"
    };
    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => console.log(json));
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>

        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for and artist"
              value={this.state.query}
              onChange={event => {
                this.setState({ query: event.target.value });
              }}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"> </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">Gallery</div>
      </div>
    );
  }
}

export default App;
