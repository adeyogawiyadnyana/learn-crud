import ContactTable from "@/app/contact/components/ContactTable";
import React from "react";
import { number } from "zod";

const Page = ({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		page?: string;
	};
}) => {
	const query = searchParams?.query || "";
	const currentPage = Number(searchParams?.page) || 1;

	return (
		<div className="w-full h-screen flex justify-center items-start pt-32">
			<ContactTable query={query} currentPage={currentPage} />
		</div>
	);
};

export default Page;
