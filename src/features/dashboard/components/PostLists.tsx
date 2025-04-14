import { memo } from "react";
import { TPost } from "../types/post";

const PostLists = memo(({ posts }: { posts: TPost[] }) => {
  return (
    <div>
      <h3 className="font-semibold">Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
});

export default PostLists;
