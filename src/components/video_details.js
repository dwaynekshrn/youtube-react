import React from 'react';

const VideoDetail = ({video}) => {
if(!video){
    return <div>Loading...</div>
}
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
     <div className="col-sm-12 col-md-6 col-lg-6" >
       <div className="video-detail">
          <div className="embed-responsive embed-responsive-16by9">
             <iframe className="embed-responsive-item" src={url}></iframe>
          </div>
          <div className="card">
           <div className="card-body" style={{padding: '15px', marginTop: '5px' }}>
           <div><h4>{video.snippet.title}</h4></div>
           <div><i>{video.snippet.description}</i></div>
           </div>
          </div>
       </div>
    </div>
    )
}

export default VideoDetail;