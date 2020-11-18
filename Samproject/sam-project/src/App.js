import Logincontainer from "./container/Logincontainer";
import { Accounts } from "./components/Auth/Accounts";
const App = () => {
  return (
    <>
      <Accounts>
        <Logincontainer />
      </Accounts>
    </>
  );
}

export default App;
