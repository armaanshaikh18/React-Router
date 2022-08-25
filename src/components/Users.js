import React from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const showActiveUser = searchParam.get("filter") === "active";
  return (
    <>
      <div>
        <Link to="oneusers">User 1</Link>
        <Link to="userTwo">User 2</Link>
        <Outlet />
        <div>
          <button onClick={() => setSearchParam({ filter: "active" })}>
            Active USers
          </button>
          <button onClick={() => setSearchParam({})}>Reset USers</button>
        </div>
        {showActiveUser ? (
          <h2>Showing All Active user</h2>
        ) : (
          <h2>Showing All Users</h2>
        )}
      </div>
    </>
  );
};

export default Users;
