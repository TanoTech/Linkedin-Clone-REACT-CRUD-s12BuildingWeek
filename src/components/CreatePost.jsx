import "./css/CreatePost.css";
import { Container } from "react-bootstrap"
import { useContext } from "react"
import { ProfileContext } from "../redux/contexts/ProfileContext"

const CreatePost = ({ newPostText, setNewPostText, createPost, posts }) => {
    const { profile } = useContext(ProfileContext)
    const userProfileName = profile ? `${profile.name} ${profile.surname}` : ''
    const userProfileTitle = profile ? profile.title : '';
    const userProfileImg = profile ? profile.image : '';

    return (
        <div className="createPostWrapper">
            <form onSubmit={createPost}>
                <textarea
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder="Scrivi qui il tuo post..."
                />
                <button type="submit">Invia Post</button>
            </form>
        </div>
    );
};

export default CreatePost;