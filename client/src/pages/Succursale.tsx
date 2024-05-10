/** @format */

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetSuccursaleQuery } from "../store/api/MainApi";
import { Succursale as SS } from "../interfaces/mainInterfaces";
const Succursale = () => {
	const { data, isSuccess } = useGetSuccursaleQuery();
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
				<button className="px-4 py-2 bg-blue-500 text-white">Ajouter</button>
			</div>
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
