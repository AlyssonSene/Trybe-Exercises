import React, { Component} from 'react';

class Image extends Component {
  render() {
    return <img src='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
    alt={this.props.alternativeText} />;
  }
}

export default Image;