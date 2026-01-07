import StorageService from "../appwrite/StorageService";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <img
        src={StorageService.getFilePreview(featuredImage)}
        alt={title}
        className="w-20 h-10"
      />
    </Link>
  );
}

export default PostCard;
