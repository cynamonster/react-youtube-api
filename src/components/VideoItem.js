import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div 
            className="item video-item" 
            onClick={() => onVideoSelect(video)}
            key={video.id.videoId}
            >
            <img
                src={video.snippet.thumbnails.medium.url}
                className="ui image"
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;