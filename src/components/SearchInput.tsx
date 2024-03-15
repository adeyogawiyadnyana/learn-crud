"use client";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const SearchInput = () => {
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
			/>
		</div>
	);
};

export default SearchInput;
