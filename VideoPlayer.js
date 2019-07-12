import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Loading video player...</div>;
  }
  const videoId = video.id.videoId;
  const url = 'https://www.youtube.com/embed/pChmieCDWpo';//`https://jsonplaceholder.typicode.com/posts/${videoId}`;
 
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.title}</div>
        <div>{video.email}</div>
      </div>
    </div>
  );
}

export default VideoPlayer;