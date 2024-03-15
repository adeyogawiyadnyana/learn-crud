import { IconEdit, IconTrash } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export const ButtonCreate = () => {
	return (
		<div className="">
			<Link href={"/contact/add"}>
				<button className="px-6 py-2 bg-green-500 text-white font-semibold rounded">
					+Create new
				</button>
			</Link>
		</div>
	);
};

export const EditButton = () => {
	return (
		<div className="">
			<Link href={"/contact/edit"}>
				<button className="flex gap-2 bg-green-500 px-4 py-1 rounded text-white font-semibold items-center">
					<IconEdit />
					Edit
				</button>
			</Link>
		</div>
	);
};
export const DeleteButton = () => {
	return (
		<div className="">
			<Link href={"/contact/Delete"}>
				<button className="flex gap-2 bg-red-500 px-4 py-1 rounded text-white font-semibold items-center">
					<IconTrash />
					Delete
				</button>
			</Link>
		</div>
	);
};
