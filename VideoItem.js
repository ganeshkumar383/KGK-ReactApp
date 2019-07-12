import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {

  console.log('VideoItem');
  //console.log(video);
  console.log('VideoItem end');

  var imgUrl = 'https://via.placeholder.com/90x90.png?text=';//video.snippet.thumbnails.default.url;
  //https://via.placeholder.com/150/d32776
  return(
    <li className="list-group-item" onClick={() => { onVideoSelect(video) }}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl+video.id} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoItem;