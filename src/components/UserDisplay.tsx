import { useUser } from "@/hooks/useUser";

function UserDisplay() {
  const { user, login, logout } = useUser();

  if (!user) {
    return (
      <button
        onClick={() =>
          login({
            name: "Gisa",
            email: "gisaaimesavio@gmail.com",
          })
        }
      >
        Login
      </button>
    );
  }
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <p>{user.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserDisplay;
