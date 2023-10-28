import Game from "./components/Game";
import passportInstance from "./initPassport";

async function handleLogin() {
  const provider = passportInstance.connectEvm();
  const accounts = await provider.request({ method: "eth_requestAccounts" });
}

function App() {
  return (
  <>
    <button onClick={handleLogin}>Login</button>
    <Game />
  </>
  )
}

export default App;
