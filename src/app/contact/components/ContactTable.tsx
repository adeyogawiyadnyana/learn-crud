import React from "react";
import { getContact } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import SearchInput from "./SearchInput";
import { ButtonCreate, DeleteButton, EditButton } from "./Button";

const ContactTable = async () => {
	const data = await getContact();

	return (
		<div className="w-full xl:px-24">
			<div className="w-full flex items-center justify-end gap-4 mb-4">
				<SearchInput />
				<ButtonCreate />
			</div>
			<table className="w-full text-sm text-left text-gray-500">
				<thead className="w-full bg-slate-100">
					<tr className="w-full">
						<th className="px-6 py-2 border-b border-r text-center">
							#
						</th>
						<th className="px-6 py-2 border-b border-r">
							Name
						</th>
						<th className="px-6 py-2 border-b border-r">
							Phone number
						</th>
						<th className="px-6 py-2 border-b border-r">
							Created At
						</th>
						<th className="px-6 py-2 border-b border-r text-center">
							Action
						</th>
					</tr>
				</thead>
				<tbody className="w-full">
					{data.map((item, index) => (
						<tr key={item.id} className="w-full">
							<td className="px-6 py-2 border-b border-r text-center">
								{index + 1}
							</td>
							<td className="px-6 py-2 border-b border-r">
								{item.name}
							</td>
							<td className="px-6 py-2 border-b border-r">
								{item.phone}
							</td>
							<td className="px-6 py-2 border-b border-r">
								{formatDate(
									item.createdAt.toString()
								)}
							</td>
							<td className="px-6 flex gap-2 py-2 border-b border-r justify-center">
								<EditButton id={item.id} />
								<DeleteButton id={item.id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ContactTable;
