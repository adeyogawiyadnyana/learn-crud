"use client";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchInput = () => {
	const searchParams = useSearchParams();
	const pathName = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((value: string) => {
		console.log(value);
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set("query", value);
			replace(`${pathName}?${params.toString()}`);
		} else {
			params.delete("query");
			replace(`${pathName}?${params.toString()}`);
		}
	}, 1500);

	return (
		<div className="relative">
			<div className="absolute opacity-40 z-10 left-2 top-1/2 -translate-y-1/2">
				<IconSearch size={22} />
			</div>
			<input
				type="text"
				name="search"
				id="searc"
				placeholder="Search name"
				className="p-2 pl-10 border border-gray-300 rounded"
				defaultValue={searchParams.get("query")?.toString()}
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
			/>
		</div>
	);
};

export default SearchInput;
