import "./css/CreatePost.css";
import { Container } from "react-bootstrap"
import { useContext } from "react"
import { ProfileContext } from "../redux/contexts/ProfileContext"
import 'bootstrap-icons/font/bootstrap-icons.css';

const CreatePost = ({ newPostText, setNewPostText, createPost, posts }) => {
    const { profile } = useContext(ProfileContext)
    const userProfileImg = profile ? profile.image : '';

    return (
        <div className="createPostWrapper">
            <div>
                <form onSubmit={createPost}>
                <div className="searchBarPost">
                    <img className="ProfileImgPost" src={userProfileImg} alt="foto profilo utente" />
                        <input
                            value={newPostText}
                            onChange={(e) => setNewPostText(e.target.value)}
                            placeholder="Start a post"
                        />
                </div>
                    <div className="iconWrapperPost">
                        <div className="singleIconWrapperPost">
                            <i className="bi bi-image-fill mediaIcon"></i>
                            <p className="IconPost">Media</p>
                        </div>
    
                        <div className="singleIconWrapperPost">
                            <i className="bi bi-calendar3 calendarIcon "></i>
                            <p className="IconPost">Event</p>
                        </div>
    
                        <div className="singleIconWrapperPost">
                            <i className="bi bi-pencil-square writeIcon"></i>
                            <p className="IconPost">Write Article</p>
                        </div>
        
                        <button type="submit">Send post</button>
                    </div>
                </form>
            </div>
            </div>
    );
};

export default CreatePost;