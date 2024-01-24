import React from 'react';

const GetPost = ({ posts }) => {
    console.log(posts);
    return (
        <div>
            {posts.map(data => (
                <div key={data._id}>
                    <p>{data.username}</p>
                    <p>{data.text}</p>
                    <p>{data.image}</p>
                </div>
            ))}
        </div>
    );
};

export default GetPost;