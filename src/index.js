import {renderEnterTree} from "./render";
import state from "./redux/state";
import * as serviceWorker from './serviceWorker';


renderEnterTree(state);


serviceWorker.unregister();
