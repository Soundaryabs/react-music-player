import React,{ Component} from "react";

class Search extends Component{
    state = {artistQuery:''};

    searchArtist =()=>{
        this.props.search(this.state.artistQuery);
    };

    handleKeyPress = event =>{
        if (event.key === 'Enter'){
            this.searchArtist();
        }
    };

    updateArtistHistory = event =>{
        this.setState({ artistQuery: event.target.value});
    };
    render(){
        return(
            
            <div className="row">
                <div className = "col-md-10 col-md-offset-1 well">
                    <div className ="form-group">
                        <input 
                            type="search"
                            className="form-control"
                            placeholder="Search here for an Artist"
                            onChange = {this.updateArtistHistory}
                            onKeyPress={this.handleKeyPress}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.searchArtist}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;