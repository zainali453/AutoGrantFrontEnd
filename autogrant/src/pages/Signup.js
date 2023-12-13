import Header from "../components_authentication/Header";
import Signup from "../components_authentication/Signup";

export default function SignupPage() {
  return (
    <>
      <div
        className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-[#B6BBC4]"
        style={{
          background: "#161A30",
          color: "#B6BBC4",
        }}
      >
        {/* Adjust the max-width class and add rounded border class */}
        <div
          className="max-w-lg w-full space-y-8 rounded-2xl p-10 text-[#B6BBC4]"
          style={{
            background: "#31304D",
            color: "#B6BBC4",
          }}
        >
          <Header
            heading="Create an account"
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/"
          />
          <Signup />
        </div>
      </div>
    </>
  );
}
