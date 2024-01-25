import React from 'react';

const GetPost = ({ posts }) => {
    console.log(posts);
    return (
        <div>
            {posts.map(data => (
                <div key={data._id}>
                    {data.image ? <img 
                    style={{width: '2rem' }}
                    src={data.image} alt="post picture" /> : ''}
                    <p>{data.username}</p>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    );
};

export default GetPost;
