const CreatePost = ({ newPostText, setNewPostText, createPost, posts }) => {
    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={createPost}>
                <textarea
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder="Scrivi qui il tuo post..."
                />
                <button type="submit">Invia Post</button>
            </form>
            {posts.map(data => (
                <div key={data._id}>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    );
};

export default CreatePost;