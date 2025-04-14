import { lazy, Suspense } from "react";
import ErrorMessage from "../../../app/components/ErrorMessage";
import LoadingSpinner from "../../../app/components/LoadingSpinner";
import { usePosts, useUsers } from "../hooks/useDashboard";

// Lazy load components
const PostLists = lazy(() => import("../components/PostLists"));
const UserLists = lazy(() => import("../components/UserLists"));

function DashboardPage() {
  const { data: posts, isLoading: postsLoading, error: postError } = usePosts();
  const { data: users, isLoading: usersLoading, error: userError } = useUsers();

  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <h1 className="text-5xl font-bold block">Dashboard</h1>
      <a href="/dashboard-old-code" className="text-blue-500 underline">
        Dashboard before refactoring
      </a>
      <div className=" w-full">
        <Suspense fallback={<LoadingSpinner />}>
          {users && !usersLoading && <UserLists users={users} />}
          {userError && <ErrorMessage error={userError} />}
        </Suspense>
      </div>
      <div className="w-full">
        <Suspense fallback={<LoadingSpinner />}>
          {posts && !postsLoading && <PostLists posts={posts} />}
          {postError && <ErrorMessage error={postError} />}
        </Suspense>
      </div>
    </div>
  );
}
export default DashboardPage;
