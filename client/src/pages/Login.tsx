/** @format */

import { useEffect, useState } from "react";
import { BiMoney } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useLoginUserMutation } from "../store/api/AuthenticationApi";
import { useFormik } from "formik";
import { LoginSuccess, RootLoginError } from "../interfaces/user";
import { initialState, loginSuccess } from "../store/slices/AuthSlice";
import { CgSpinner } from "react-icons/cg";
import toast from "react-hot-toast";
interface Log {
	username: string;
	password: string;
}
const Login = () => {
	const isLogin = useAppSelector((state) => state.AuthSlice.isLogin);
	const navigate = useNavigate();

	useEffect(() => {
		if (isLogin === true) {
			// navigate("/");
		}
	}, []);

	const dispatch = useAppDispatch();
	// const searchParams = new URLSearchParams(location.search);
	// const next = searchParams.get("next") || "";

	const [passswordHide, setPasswordHide] = useState<boolean>(true);

	const [Login, { isLoading }] = useLoginUserMutation();

	const validationSchema = yup.object().shape({
		username: yup.string().required("Le nom d'utilisateur est requis"),
		password: yup.string().required("Le mot de passe est requis"),
	});

	const formik = useFormik<Log>({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => handleSubmit(values),
	});
	const handleSubmit = async (values: {
		username: string;
		password: string;
	}) => {
		const res = await Login(values);
		console.log("RESPONSE ", res);

		if ("data" in res) {
			// toast.success("Successfully logged");
			console.log("SUCESS");
			const sucessData = res?.data as LoginSuccess;
			console.log(sucessData.token.user.email);
			const payload: initialState = {
				access: sucessData.token.access,
				isError: false,
				isLogin: true,
				isLoading: false,
				refresh: sucessData.token.refresh,
				user_infos: sucessData.token.user,
			};
			// dispacth(setLoginTrue());
			console.log("DISPATCH");
			localStorage.setItem("WD_USER", JSON.stringify(payload));
			dispatch(loginSuccess(payload));

			navigate("/dash");
			// await storeToken(payload);
		} else {
			const ErrorData = res?.error as RootLoginError;
			if (ErrorData.status === 401) {
				console.log(ErrorData);
				toast.error("Login ou mot de passe incorrect");
				// toast.show("Login ou mot de passe incorrect", { type: "error" });
			}

			return; // Retour anticipé en cas d'erreur
		}
	};

	return (
		<div>
			<section className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<a
						href="#"
						className="flex items-center mb-6 text-2xl font-semibold text-blue-500 dark:text-white">
						<BiMoney className="text-blue-500 text-2xl" size={75} />
						INTIA - AFREETECH
					</a>
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Sign in to your account
							</h1>
							<div
								className="space-y-4 md:space-y-6"
								onSubmit={() => formik.handleSubmit()}>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Your email
									</label>
									<input
										{...formik.getFieldProps("username")}
										type="text"
										id="email"
										className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
											formik.errors.username
												? "border-red-500"
												: "border-red-500stroke"
										}`}
										placeholder="username"
									/>
									{formik.errors.username && (
										<p className="text-red-500 text-sm">
											{formik.errors.username}
										</p>
									)}
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Password
									</label>
									<input
										{...formik.getFieldProps("password")}
										type={passswordHide ? "password" : "text"}
										id="password"
										placeholder="••••••••"
										className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
											formik.errors.password
												? "border-red-500"
												: "border-red-500stroke"
										}`}
									/>
									{formik.errors.password && (
										<p className="text-red-500 text-sm">
											{formik.errors.password}
										</p>
									)}
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input
												onChange={() => setPasswordHide(!passswordHide)}
												id="remember"
												aria-describedby="remember"
												type="checkbox"
												className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
											/>
										</div>
										<div className="ml-3 text-sm">
											<label
												htmlFor="remember"
												className="text-gray-500 dark:text-gray-300">
												Show Password
											</label>
										</div>
									</div>
								</div>
								<button
									disabled={isLoading}
									onClick={() => formik.handleSubmit()}
									className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
									{isLoading ? (
										<span className="animate-spin w-full justify-center items-center flex">
											<CgSpinner />
										</span>
									) : (
										"Sign IN"
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;
