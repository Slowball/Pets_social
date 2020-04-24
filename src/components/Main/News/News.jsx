import React from 'react';
import m from './News.module.css';

function News (props) {
    return (
            <div className={m.item}>
                {props.news}

            </div>
    )
}
export default News;