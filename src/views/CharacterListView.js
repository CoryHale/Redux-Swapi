import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
      {this.props.fetching && (<h1>LOADING...</h1>)}
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
});


export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
