import React, { Component } from 'react';
import IdeaCard from './IdeaCard';

export default class IdeaList extends Component {
    render() {
      let ideas = this.props.ideaList;
      const trItem = ideas.map((item,index) => (
        <IdeaCard
          key={index}
          idea={item}
          index={index}
          editIdeaSubmit={this.props.editIdeaSubmit}      
          deleteIdea={this.props.deleteIdea}
        />
      ));
      console.log(trItem)
      return <tbody>{trItem}</tbody>;
    }
}