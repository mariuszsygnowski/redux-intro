import React from 'react';
import CountrySelector from '../components/CountrySelector';

class CountrySelectorContainer extends React.Component {
  constructor(props){
    super(props);

    const reduxState = this.props.store.getState();

    this.state = {
        selectedCountry: reduxState.country.selectedCountry,
        countryListOpen: reduxState.country.countryListOpen
    }

    this.handleFocus = this.handleFocus.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount(){
    const { store } = this.props;

    store.subscribe( () => {
      this.updateFromStore();
    });
  }

selectCountry(country){
    this.props.store.dispatch({
      type: 'SET_SELECTED_COUNTRY',
      selectedCountry: country
    });

    this.props.store.dispatch({
      type: 'SET_COUNTRY_LIST_OPEN',
      countryListOpen: false
    });
  }


  handleFocus(event){
    this.props.store.dispatch({
      type: 'SET_COUNTRY_LIST_OPEN',
      countryListOpen: true
    });
  }

  handleBlur(event){
    this.props.store.dispatch({
      type: 'SET_COUNTRY_LIST_OPEN',
      countryListOpen: false
    });
  }

  updateFromStore(){
    const { store } = this.props;

    const reduxState = store.getState();

    this.setState({
      
      selectedCountry: reduxState.country.selectedCountry,
        countryListOpen: reduxState.country.countryListOpen
    });
  }

  render(){
    return (
      <CountrySelector
        selectedCountry={this.state.selectedCountry}
        countryListOpen={this.state.countryListOpen}
        handleBlur={this.handleBlur}
        handleFocus={this.handleFocus}
        selectCountry={this.selectCountry}
      />
    );
  }
}

export default CountrySelectorContainer;
