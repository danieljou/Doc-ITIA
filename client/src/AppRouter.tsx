/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashHome from "./pages/DashHome";
import Clients from "./pages/Clients";
import Succursale from "./pages/Succursale";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" Component={Login} />
				<Route path="dash" Component={Dashboard}>
					<Route index Component={DashHome} />
					<Route path="succursale" Component={Succursale} />
					<Route path="clients" Component={Clients} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
