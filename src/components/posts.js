import "./components.css"
import FeedPost from "./feedPost"
import PostCreate from "./postcreate"

const postTexts = [
    {
        user: "Sajal Singhal",
        dateAndTime: "15 June 2021 6:11 PM",
        text: "Hi! This is the first post!\nSoon I'll be adding more functionality in it like images, videos, etc",
        likes: 674,
        n_comments: 1,
        comments: [
            {
                user: "Sample User",
                text: "Very good app!",
                dateAndTime: "15 June 2021 6:14 PM"
            }
        ]
    },
    {
        user: "Sample User",
        dateAndTime: "17 June 2021 7:05 PM",
        text: "Hello! This is the sample user posting something, cuz why not? Anyways, how is life? How are you coping with staying home for extended periods of time? Let me know in the comments below",
        likes: 6534,
        n_comments: 1,
        comments : [
            {
                user: "Sajal Singhal",
                text: "I'm fine. I develop this website and do some AI and ML stuff when I'm bored. Also I prepare for tech interviews by doing questions",
                dateAndTime: "17 June 2021 7:08 PM"
            }
        ]
    }
]
const PostComponents = postTexts.map((p) => <FeedPost data = {p} />)
function Posts() {
    return (
        <div className = "posts">
            <PostCreate />
            {PostComponents}
        </div>
    )
}

export default Posts;