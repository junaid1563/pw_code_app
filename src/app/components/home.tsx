import NavBar from "./navbar";
import WelcomeMessage from "./WelcomeMessage";

export default function Homepage() {
  return (
    <>
      <div className="bg-gray-700">
        <NavBar></NavBar>
        <WelcomeMessage></WelcomeMessage>
      </div>
    </>
  );
}
