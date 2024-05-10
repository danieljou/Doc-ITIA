/** @format */

import * as yup from "yup";
import { useFormik } from "formik";
import { CgSpinner } from "react-icons/cg";
import toast from "react-hot-toast";
import { Client } from "../interfaces/mainInterfaces";
import {
	useCreateClientMutation,
	useGetClientsQuery,
} from "../store/api/MainApi";

const Surcusale = () => {
	const { refetch } = useGetClientsQuery();
	// const searchParams = new URLSearchParams(location.search);
	// const next = searchParams.get("next") || "";

	const [Create, { isLoading }] = useCreateClientMutation();

	const validationSchema = yup.object().shape({
		// username: yup.string().required("Le nom d'utilisateur est requis"),
		// password: yup.string().required("Le mot de passe est requis"),
	});

	const formik = useFormik<Omit<Client, "id">>({
		initialValues: {
			adresse: "",
			code_postal: "",
			email: "",
			nom: "",
			prenom: "",
			pays: "",
			succursale: 1,
			telephone: "",
			ville: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => handleSubmit(values),
	});
	const handleSubmit = async (values: Omit<Client, "id">) => {
		const res = await Create(values);
		console.log("RESPONSE ", res);

		if ("data" in res) {
			toast.success("Successfully ADDED");
			refetch();
			// await storeToken(payload);
		} else {
			toast.error("Une erreur est survenue");

			return; // Retour anticipé en cas d'erreur
		}
	};

	return (
		<div>
			<div className="text-center text-2xl">Formulaire succusale</div>
			<div
				className="space-y-4 md:space-y-6"
				onSubmit={() => formik.handleSubmit()}>
				<div className="grid grid-cols-2 gap-3">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Nom
						</label>
						<input
							{...formik.getFieldProps("nom")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
								formik.errors.nom ? "border-red-500" : "border-red-500stroke"
							}`}
							placeholder="nom"
						/>
						{formik.errors.nom && (
							<p className="text-red-500 text-sm">{formik.errors.nom}</p>
						)}
					</div>

					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Prenom
						</label>
						<input
							{...formik.getFieldProps("prenom")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
								formik.errors?.prenom
									? "border-red-500"
									: "border-red-500stroke"
							}`}
							placeholder="prenom"
						/>
						{formik.errors.prenom && (
							<p className="text-red-500 text-sm">{formik.errors.prenom}</p>
						)}
					</div>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							addresse
						</label>
						<input
							{...formik.getFieldProps("adresse")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
								formik.errors.adresse
									? "border-red-500"
									: "border-red-500stroke"
							}`}
							placeholder="nom"
						/>
						{formik.errors.adresse && (
							<p className="text-red-500 text-sm">{formik.errors.adresse}</p>
						)}
					</div>

					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							code postal
						</label>
						<input
							{...formik.getFieldProps("code_postal")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
								formik.errors.code_postal
									? "border-red-500"
									: "border-red-500stroke"
							}`}
							placeholder="code postal"
						/>
						{formik.errors.code_postal && (
							<p className="text-red-500 text-sm">
								{formik.errors.code_postal}
							</p>
						)}
					</div>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							ville
						</label>
						<input
							{...formik.getFieldProps("ville")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
								formik.errors.ville ? "border-red-500" : "border-red-500stroke"
							}`}
							placeholder="ville"
						/>
						{formik.errors.ville && (
							<p className="text-red-500 text-sm">{formik.errors.ville}</p>
						)}
					</div>

					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Pays
						</label>
						<input
							{...formik.getFieldProps("pays")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
								formik.errors.pays ? "border-red-500" : "border-red-500stroke"
							}`}
							placeholder="Pays"
						/>
						{formik.errors.pays && (
							<p className="text-red-500 text-sm">{formik.errors.pays}</p>
						)}
					</div>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Télephone
					</label>
					<input
						{...formik.getFieldProps("telephone")}
						type="text"
						id="email"
						className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
							formik.errors.telephone
								? "border-red-500"
								: "border-red-500stroke"
						}`}
						placeholder="Télephone"
					/>
					{formik.errors.telephone && (
						<p className="text-red-500 text-sm">{formik.errors.telephone}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						email
					</label>
					<input
						{...formik.getFieldProps("email")}
						type="text"
						id="email"
						className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
							formik.errors.email ? "border-red-500" : "border-red-500stroke"
						}`}
						placeholder="email"
					/>
					{formik.errors.email && (
						<p className="text-red-500 text-sm">{formik.errors.email}</p>
					)}
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
						"Ajouter"
					)}
				</button>
			</div>
		</div>
	);
};

export default Surcusale;
