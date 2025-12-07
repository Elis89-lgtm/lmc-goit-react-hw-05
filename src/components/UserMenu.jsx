import { useUser } from "../userContext";

export const UserMenu = () => {
  const { isLoggedIn, username, login, logOut } = useUser();
  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcome, {username}</p>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <button onClick={login}>Log in</button>
      )}
      ;
    </div>
  );
};
