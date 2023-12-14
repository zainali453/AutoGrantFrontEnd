import Header from "../components_authentication/Header";
import Login from "../components_authentication/Login";
import { Navigate } from "react-router-dom";
export default function LoginPage({ handleLogin, isLoggedIn }) {
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <div
        className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 "
        style={{
          background: "#B6BBC4",
          color: "#B6BBC4",
        }}
      >
        <div
          className="max-w-lg w-full space-y-8 rounded-2xl p-10"
          style={{
            background: "#161A30",
            color: "#161A30",
          }}
        >
          <Header
            heading="Login"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
          />
          <Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </>
  );
}
