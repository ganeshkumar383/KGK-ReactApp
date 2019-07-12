import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import axios from 'axios';

const YT_API = 'AIzaSyDqL_re6cE8YhtNr_O7GvX1SX3aQo1clyg';
const API_URL = 'https://jsonplaceholder.typicode.com';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'to React Tube',
      videos: [],
      selectedVideo: {snippet:{title:'Ganesh',description:'React',name:'ganesh',email:'KGK'},id:{videoId:'Video 1'}}
    };

    this.searchYoutube('')

  }
  videoSearch = _.debounce((term) => { this.searchYoutube(term) }, 300);

  searchYoutube(term) {
    console.log("searchYoutube");
    console.log(term);
//https://jsonplaceholder.typicode.com/todos?userId=1
    const url = `${API_URL}/todos?userId=`+term;//users/
    axios.get(url).then(response => response.data)
    .then((data) => {
      debugger;
      if(data.length==undefined)
      data = [data];
      console.log(data);
      let newData = {snippet:{title:data.title,description:data.email},id:{videoId:data.phone}};
      console.log(newData);
      this.state.selectedVideo.snippet.title = data.title;
      this.state.selectedVideo.id.videoId = data.phone;
      // console.log(this.state.selectedVideo);
       //console.log(this.state.videos);
      this.setState({videos:data ,selectedVideo:newData});
      //console.log(this.state.users);
      console.log('srchend 1');
      //console.log(this.state.videos);  
      console.log('srchend');
     })

    // YTSearch({ key: YT_API, term: term}, (videos) => {
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0]
    //   });
    // });
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div className="container">
          <SearchBar
            onChange={(searchTerm) => {this.searchYoutube(searchTerm)}} />
          <VideoPlayer video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
            videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
