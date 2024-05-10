/** @format */

import { CgSpinner } from "react-icons/cg";
import { useGetDashQuery } from "../store/api/MainApi";

const DashHome = () => {
	const { data, isSuccess, isLoading } = useGetDashQuery();
	return (
		<div>
			{isSuccess && (
				<div className="grid grid-cols-3 gap-8">
					<div className="p-8 font-bold py-20 bg-blue-300 border-gray-100  rounded-sm border-2 ">
						<div className="text-xl">Succursale</div>
						<div className="text-4xl">{data.succ}</div>
					</div>
					<div className="p-8 font-bold py-20 bg-red-300 border-gray-100  rounded-sm border-2 ">
						<div className="text-xl">Clients</div>
						<div className="text-4xl">{data.clients}</div>
					</div>
					<div className="p-8 font-bold py-20 bg-green-300 border-gray-100  rounded-sm border-2 ">
						<div className="text-xl">Asssurances</div>
						<div className="text-4xl">{data.ass}</div>
					</div>
				</div>
			)}
			{isLoading && (
				<div className="flex justify-center animate-spin">
					{" "}
					<CgSpinner size={100} />{" "}
				</div>
			)}
		</div>
	);
};

export default DashHome;
