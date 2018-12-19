import React from 'react';

const MyProfileCount = ({ commentsCount, postsCount }) => {
    return (
        <div className="row m-2 p-2">
                <button type="button" 
                className="btn btn-primary col-5 offset-lg-3 col-lg-2 ">
                    Posts <span className="badge badge-light">{postsCount}</span>
                </button>
                
                <button type="button" 
                className="btn btn-primary offset-2 col-5 col-lg-2">
                    Comments <span className="badge badge-light">{commentsCount}</span>
                </button>
                
            
        </div>
    )
}
export default MyProfileCount;
