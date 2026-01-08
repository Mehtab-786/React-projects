import { useEffect, useState } from "react";
import StorageService from "../appwrite/StorageService";
import PostCard from "../components/PostCard";
import Container from "../components/container/Container";

function AllPostPage() {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    StorageService.getAllPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div>
      <Container>
        {Posts.map((item) => (
          <PostCard post={item} key={item.$id} />
        ))}
      </Container>
    </div>
  );
}

export default AllPostPage;
