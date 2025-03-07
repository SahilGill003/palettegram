/* eslint-disable quotes */
import { Download, Heart, MessageCircle, Share } from "react-feather";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const SinglePost = ({ singlePost, onLikeClick }) => {
  const post = singlePost;

  const authState = useSelector((state) => state.authenticator);
  return (
    <div className="w-full">
      <div>
        <Link
          className="flex items-center gap-4 mb-2"
          to={`/user/${post?.userId}`}
        >
          <img
            className="w-8 h-8 rounded-full"
            src="https://pbs.twimg.com/media/FyCXwYdWYBULeZW?format=jpg&name=small"
            alt=""
          />
          <span className="font-medium text-md">{authState?.fullName}</span>
        </Link>
      </div>
      <Link
        className="flex items-center gap-4 mb-2"
        to={`/post/${post?.$id}`}
      >
        <div className="my-3">
          <p className="text-lg">
            {post?.postTitle ? post?.postTitle : "No Title"}
          </p>
          {post?.postImage.length > 0 ? (
            <img className="w-full" src={post?.postImage} alt={post?.postTitle} />
          ) : null}
        </div>
      </Link>
      <div className="flex justify-around">
        <div
          className="flex items-center gap-2 group text-blue-500"
          onClick={()=>onLikeClick(post)}
        >
          <div className={`p-2 rounded-full ${post.likes.includes(authState.userId)? "bg-blue-800 text-blue-300" : "group-hover:bg-blue-800 group-hover:text-blue-300"} flex justify-center items-center`}>
            <Heart size={16} />
          </div>
          <span className="font-light">{post.likes.length}</span>
        </div>

        <div className="flex items-center gap-2 group text-blue-500">
          <div className="p-2 rounded-full group-hover:bg-blue-800 group-hover:text-blue-300 flex justify-center items-center">
            <MessageCircle size={16} />
          </div>
          <span className="font-light">{post.comments.length}</span>
        </div>
        <div className="flex items-center gap-2 group text-blue-500">
          <div className="p-2 rounded-full group-hover:bg-blue-800 group-hover:text-blue-300 flex justify-center items-center">
            <Share size={16} />
          </div>
          <span className="font-light">3213</span>
        </div>
        <div className="p-2 rounded-full flex justify-center items-center text-blue-500 hover:bg-blue-800 hover:text-blue-300">
          <Download size={16} />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
