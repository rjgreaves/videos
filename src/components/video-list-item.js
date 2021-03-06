/**
 * Created by reube on 24/07/2017.
 */
import React from 'react';

const videoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </li>
    );
};

export default videoListItem;