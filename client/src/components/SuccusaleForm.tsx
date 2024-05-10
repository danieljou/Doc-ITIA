/** @format */

import * as yup from "yup";
import { useFormik } from "formik";
import { CgSpinner } from "react-icons/cg";
import toast from "react-hot-toast";
import { Succursale } from "../interfaces/mainInterfaces";
import {
	useCreateSurcusalleMutation,
	useGetSuccursaleQuery,
} from "../store/api/MainApi";

const Surcusale = () => {
	const { refetch } = useGetSuccursaleQuery();
	// const searchParams = new URLSearchParams(location.search);
	// const next = searchParams.get("next") || "";

	const [Create, { isLoading }] = useCreateSurcusalleMutation();

	const validationSchema = yup.object().shape({
		adresse: yup.string().required("Ce champs est requis"),
		code_postal: yup.number().required("Ce champs est requis"),
		email: yup
			.string()
			.email("entrez un email valide")
			.required("Ce champs est requis"),
		nom: yup.string().required("Ce champs est requis"),
		telephone: yup.string().required("Ce champs est requis"),
		responsable: yup.string().required("Ce champs est requis"),
	});

	const formik = useFormik<Omit<Succursale, "id">>({
		initialValues: {
			adresse: "",
			code_postal: "",
			email: "",
			nom: "",
			telephone: "",
			responsable: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => handleSubmit(values),
	});
	const handleSubmit = async (values: Omit<Succursale, "id">) => {
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
							Adresse
						</label>
						<input
							{...formik.getFieldProps("adresse")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
								formik.errors?.adresse
									? "border-red-500"
									: "border-red-500stroke"
							}`}
							placeholder="adresse"
						/>
						{formik.errors.adresse && (
							<p className="text-red-500 text-sm">{formik.errors.adresse}</p>
						)}
					</div>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Reponsable
						</label>
						<input
							{...formik.getFieldProps("responsable")}
							type="text"
							id="email"
							className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
								formik.errors.responsable
									? "border-red-500"
									: "border-red-500stroke"
							}`}
							placeholder="nom"
						/>
						{formik.errors.responsable && (
							<p className="text-red-500 text-sm">
								{formik.errors.responsable}
							</p>
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
