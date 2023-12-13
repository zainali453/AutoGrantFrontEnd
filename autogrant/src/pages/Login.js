import Header from "../components_authentication/Header";
import Login from "../components_authentication/Login";

export default function LoginPage() {
  return (
    <>
      <div
        className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 "
        style={{
          color: "#FFF5E0",
        }}
      >
        {/* Apply the same border radius and width as the SignupPage */}
        <div
          className="max-w-lg w-full space-y-8 rounded-2xl p-10"
          style={{
            background: "#141E46",
            color: "#FFF5E0",
          }}
        >
          <Header
            heading="Login"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
          />
          <Login />
        </div>
      </div>
    </>
  );
}
