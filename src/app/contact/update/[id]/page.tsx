import React from "react";
import EditForm from "../../components/EditForm";
import { getContactById } from "@/lib/data";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
	const id = params.id;
	const contact = await getContactById(id);
	if (!contact) {
		notFound();
	}

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-full h-full">
				<div className="">
					<EditForm data={contact} />
				</div>
			</div>
		</div>
	);
};

export default Page;
