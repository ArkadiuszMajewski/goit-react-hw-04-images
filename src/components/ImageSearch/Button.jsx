import React, { Component } from 'react';
import '../styles.css';

class ButtonLoad extends Component {
  render() {
    // console.log(this.props.addExtraImg);
    return (
      <div className="ButtonContainer">
        <button
          onClick={this.props.addExtraImg}
          className="Button"
          type="submit"
        >
          Load more
        </button>
      </div>
    );
  }
}
export default ButtonLoad;
