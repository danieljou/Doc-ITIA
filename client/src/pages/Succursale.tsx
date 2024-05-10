/** @format */

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetSuccursaleQuery } from "../store/api/MainApi";
import { Succursale as SS } from "../interfaces/mainInterfaces";
import { Dialog, IconButton } from "@mui/material";
import { CgClose } from "react-icons/cg";
import Surcusale from "../components/SuccusaleForm";
import { useState } from "react";
const Succursale = () => {
	const { data, isSuccess } = useGetSuccursaleQuery();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const columns: GridColDef<SS[number]>[] = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "nom",
			headerName: "Non",
			width: 150,
		},
		{
			field: "adresse",
			headerName: "adresse",
			width: 150,
		},
		{
			field: "responsable",
			headerName: "Responsable",
			type: "number",
			width: 110,
		},
		{
			field: "telephone",
			headerName: "Télephone",
			type: "number",
			width: 180,
		},
		{
			field: "email",
			headerName: "Email",
			type: "number",
			width: 200,
		},
		{
			field: "code_postal",
			headerName: "Code postal",
			type: "number",
			width: 180,
		},
	];
	return (
		<div>
			<div className="flex justify-end  ">
				<button
					onClick={() => setIsOpen(true)}
					className="px-4 py-2 bg-blue-500 text-white">
					Ajouter
				</button>
			</div>
			<Dialog open={isOpen} fullWidth>
				<div className="p-4">
					<div className="flex justify-end">
						<IconButton onClick={() => setIsOpen(false)}>
							<CgClose />
						</IconButton>
					</div>
					<div className="w-full">
						<Surcusale />
					</div>
				</div>
			</Dialog>
			<div className="my-5">
				{isSuccess && (
					<DataGrid
						rows={data ? data : []}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel: {
									pageSize: 5,
								},
							},
						}}
						pageSizeOptions={[5]}
						checkboxSelection
						disableRowSelectionOnClick
					/>
				)}
			</div>
		</div>
	);
};

export default Succursale;
