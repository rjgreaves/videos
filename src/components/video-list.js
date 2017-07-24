/**
 * Created by reube on 24/07/2017.
 */
import React from 'react';
import VideoListItem from './video-list-item';

const videoList = (props) => {

    const videoListItems = props.videos.map((video) => {
        return (
            <li className="list-group-item">
                {video.title}
            </li>
        )
    });

    return (
        <ul className="col-md-4 list-group">
            { videoListItems }
        </ul>
    )
};

export default videoList;