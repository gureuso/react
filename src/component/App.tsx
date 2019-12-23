import React from 'react';
import 'static/css/App.less';
import $ from 'jquery';

class App extends React.Component {
  componentDidMount() {
    $('h1').click(() => {
      alert('hello world!!!');
    });
  }
  render() {
    return (
      <div>
        <h1>React</h1>
      </div>
    );
  }
}

export default App;
