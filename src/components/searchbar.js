import React, {Component} from 'react';

class SearchBar extends Component {
constructor(props){
    super(props);
    this.state = {term: ''}
}

onInputChange(term){
    this.setState({ term });
    this.props.onSearch(term);
}
render(){
    return (
        <div className="form-group">
        <input className="form-control" value={this.state.term}
        onChange={e => this.onInputChange(e.target.value)} />
        </div>  
    )
  }


}

export default SearchBar;