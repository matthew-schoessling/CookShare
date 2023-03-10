import Routing from './routes/Routing';
import Parse from "parse";
import * as ENV from './environments'
// Connect to our specific database
// Going to want to put these as ENV_VARS at some point
Parse.initialize(ENV.APP_ID,ENV.JS_KEY);
Parse.serverURL = ENV.SERVER_URL;

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
