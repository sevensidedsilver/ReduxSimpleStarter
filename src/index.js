//because we're using es6, we can use modules in seperate files
//by importing that files
import _ from 'lodash'
import React, {Component} from 'react';
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video_detail'

// youtube api key
const API_KEY = 'AIzaSyAhcd77WrxLMVLy7HILfUtefJ4dz6Cc1q4';
//import compoennts
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'



// create a new compoennt
// it will produce some html

// const won't change
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      //video that gets selected from search
      selectedVideo: null

    }

    this.videoSearch('vim')

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       }) // same as ({videos:videos})... only works
                                // when the key/values are the same
    })
  }

  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term) }, 200)

    return (
      <div>

        <SearchBar onSearchTermChange={videoSearch}/>


        <VideoDetail video={this.state.selectedVideo} />
        {/*  videos is a prop
              passing props  */}
        <VideoList
          // defines a function that updates the state
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>

    </div>
    )

  }
}
  // end or return




// we need to create an instance of app before sending it to the dom


// the html then needs to be rendered into the dom  on the page

// wrapping the const in tags makes an instance of it
// the second argument tells react where to render the instance of app
ReactDom.render(<App />, document.querySelector('.container'))
