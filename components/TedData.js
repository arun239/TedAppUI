import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';


class TedData extends Component {
    render() {
      return (
        <div>
          <BootstrapTable data={this.props.tedData}>
            <TableHeaderColumn isKey dataField='tedData.description'>
            Description
            </TableHeaderColumn>
            <TableHeaderColumn dataField='event'>
            Event
            </TableHeaderColumn>
            <TableHeaderColumn dataField='mainSpeaker'>
            Main_Speaker
            </TableHeaderColumn>
            <TableHeaderColumn  dataField='name'>
            Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField='publishDate'>
            Published_Date
            </TableHeaderColumn>
            <TableHeaderColumn dataField='speakerOccupation'>
            Speaker_Occupation
            </TableHeaderColumn>
            <TableHeaderColumn  dataField='relatedTalksTitles'>
            Related_Talks_Titles
            </TableHeaderColumn>
            <TableHeaderColumn dataField='tags'>
            Tags
            </TableHeaderColumn>
            <TableHeaderColumn  dataField='title'>
            Title
            </TableHeaderColumn>
            <TableHeaderColumn dataField='url'>
            Url
            </TableHeaderColumn>
            <TableHeaderColumn dataField='views'>
            Views
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
  }
   
  export default TedData;