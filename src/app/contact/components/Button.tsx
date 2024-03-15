"use client";
import { deleteContact } from "@/lib/action";
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

export const EditButton = ({ id }: { id: string }) => {
	return (
		<div className="">
			<Link href={`/contact/update/${id}`}>
				<button className="flex gap-2 bg-green-500 px-4 py-1 rounded text-white font-semibold items-center">
					<IconEdit />
					Edit
				</button>
			</Link>
		</div>
	);
};

export const DeleteButton = ({ id }: { id: string }) => {
	const deleteId = deleteContact.bind(null, id);
	return (
		<div className="">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const confirmation = window.confirm(
						"Are you sure you want to delete this contact?"
					);
					if (confirmation) {
						deleteId();
					}
				}}
			>
				<button className="flex gap-2 bg-red-500 px-4 py-1 rounded text-white font-semibold items-center">
					<IconTrash />
					Delete
				</button>
			</form>
		</div>
	);
};
