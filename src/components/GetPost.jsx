import React from 'react';

const GetPost = ({ posts }) => {
    console.log(posts);
    return (
        <div 
        style={{width: '80em'}}
        className='commentWrapperGetPost'>
            {posts.map(data => (
                <div key={data._id}>
                    {data.image ? <img
                    style={{width: '20em'}}
                    className='imgGetPost' 
                    src={data.image} alt="post picture" /> : ''}
                    <p 
                    style={{width: '20em'}}
                    className='commentGetPost'>{data.username}</p>
                    <p 
                    style={{width: '20em'}}
                    className='commentGetPost'>{data.text}</p>
                </div>
            ))}
        </div>
    );
};

export default GetPost;
