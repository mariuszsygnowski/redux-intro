import React from 'react';
import VotingButtonsContainer from '../containers/VotingButtonsContainer';
import CountrySelectorContainer from '../containers/CountrySelectorContainer';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <VotingButtonsContainer store={this.props.store} />
        <CountrySelectorContainer
        store={this.props.store}
        />
      </div>
    )
  }
}

export default App;
