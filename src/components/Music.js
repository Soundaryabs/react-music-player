import React,{Component} from 'react';
import Search from './sub/Search';
import Artist from './sub/Artist';
import Track from './sub/Track';

const API_ADDRESS ='https://spotify-api-wrapper.appspot.com';

class Music extends Component{
    state={artist:null,tracks:[]};

    componentDidMount(){
        this.searchArtist('Ilayaraja');
    }

    searchArtist = artistQuery =>{
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
        .then(response =>response.json())
        .then(json =>{
            console.log(json);

            if (json.artists.total > 0){ 
                const artist = json.artists.items[0];
                this.setState({artist});

                //api to call top tracks
                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response => response.json())
                .then(json =>{
                    console.log(json.tracks);
                    this.setState({tracks:json.tracks});
                })
                .catch(error =>alert(error.message));
            }
        })
        .catch(error => alert(error.message));
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron">
                        <h1 className="text-center">Music player</h1>
                    </div>
                </div>
                <Search  search={this.searchArtist}/>
                <Artist artist={this.state.artist}/>
                <Track tracks={this.state.tracks} />
            </div>
        );
    }
}

export default Music;