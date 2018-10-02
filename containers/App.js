
import React, { Component } from 'react';
import _ from 'lodash';
import axios from "axios";

import TedData from '../components/TedData';
import Filter from '../components/Filter';
 
var data = [
  {id: 1, name: 'Gob', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'}
];
 
 
class App extends Component {


    state = {
        tedData: [],
        tags: [],
        events: ""
    };
//http://localhost:8080/tedtalk/search/search?tags=culture1&tags=children&event=TED2006&offset=0&pageSize=10
    componentDidMount() {
        var params = new URLSearchParams();
        var i;
        var tagParam = this.state.tags;
        for(i = 0; i < tagParam; i++) {
            params.append("tags", tagParam[i]);
        }
        params.append("event", this.state.events);
        params.append("offset", 0);
        params.append("pageSize", 10);
        var request = {
            params: params
        };
        axios
          .get("http://localhost:8080/tedtalk/search/search", request)
          .then(response => {
            // create an array of contacts only with relevant data
            const newTedData= _.map(response.data._embedded.tedTalks ,c => {
              return {
                description: c.description,
                event: c.event,
                mainSpeaker: c.mainSpeaker,
                name: c.name,
                publishDate: c.publishDate,
                speakerOccupation: c.speakerOccupation,
                title: c.title,
                url: c.url,
                views: c.views,
                relatedTalksTitles: _.map(c.relatedTalks, 'title'),
                tedTalkRatings: c.description,
                tags: _.map(c.tags, 'name'),
              };
            });
    
            
            const newState = Object.assign({}, this.state, {
                tedData: newTedData
            });
    
            
            this.setState(newState);
          })
          .catch(error => console.log(error));
      }

    render() {
        return (
        <div className="App">
            <Filter updateTedData={this.updateTedData}/>
            <p>Ted Data Table</p>
            
            <TedData tedData={this.state.tedData}/>
        </div>
        );
    }

    updateTedData(tags, event) {
        this.state.tags = tags.split(" ");
        this.state.events = event;
    }
}
 
export default App;