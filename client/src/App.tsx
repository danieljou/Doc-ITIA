/** @format */

import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRouter from "./AppRouter";
import { Toaster } from "react-hot-toast";
const Main = () => {
	return (
		<>
			<AppRouter />
		</>
	);
};
function App() {
	return (
		<Provider store={store}>
			<Toaster />
			<Main />
		</Provider>
	);
}

export default App;
