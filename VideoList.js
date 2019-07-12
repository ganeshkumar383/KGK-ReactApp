import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
  console.log('VideoList');
  //console.log(videos);
  //console.log(onVideoSelect);
  console.log('VideoList end');
  if (!videos) {
    return <div>Loading...</div>;
  }
  var test = videos;//[{id:1,name:'ret'},{id:2,name:'ret 2'}];
  const videoItems = test.map((video) => {
    console.log(video);
    return (
      <VideoItem
        onVideoSelect={ onVideoSelect }
        key={video.title}
        video={video}
      />
  );
  });

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
}

export default VideoList;