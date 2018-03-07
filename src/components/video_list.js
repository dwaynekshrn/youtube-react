import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
    const videoItems = videos.map(video => {
        return <VideoListItem onVideoSelect={onVideoSelect} video={video} key={video.etag} />
    })
    return (
       <div className="col-sm-12 col-md-6 col-lg-6">
        <ul className="list-group">
          {videoItems}
        </ul>
        </div>
    )
}

export default VideoList;