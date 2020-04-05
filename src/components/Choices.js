import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Choices extends Component {
  updateUserChoice = (e) => {
    this.props.choice(e.target.value);
  };

  render() {
    return this.props.options.map((option) => (
      <label key={option.id}>
        <input
          type='radio'
          name='rpc'
          value={option.name}
          checked={option.name === this.props.stateUserChoice}
          onChange={this.updateUserChoice}
        />{" "}
        {option.name}
      </label>
    ));
  }
}

Choices.propTypes = {
  stateUserChoice: PropTypes.string.isRequired,
  choice: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
