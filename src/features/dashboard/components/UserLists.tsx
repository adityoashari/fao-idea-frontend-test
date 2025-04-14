import { memo } from "react";
import { TUser } from "../types/user";

const UserLists = memo(({ users }: { users: TUser[] }) => {
  return (
    <div>
      <h3 className="font-semibold">Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
});

export default UserLists;
