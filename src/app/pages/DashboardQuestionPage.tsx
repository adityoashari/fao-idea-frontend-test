import { useEffect, useState } from "react";

type TUser = {
  id: number;
  name: string;
  email: string;
};

type TPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const DashboardQuestionPage = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [posts, setPosts] = useState<TPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  console.log({ users, loading });
  return (
    <div>
      <h2>Dashboard</h2>
      {loading && <p>Loading...</p>}
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardQuestionPage;
