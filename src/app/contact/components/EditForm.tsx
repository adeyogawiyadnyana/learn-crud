"use client";
import React, { useState } from "react";
import { updateContact } from "@/lib/action";
import { useFormState } from "react-dom";
import type { Contact } from "@prisma/client";
import Link from "next/link";

const EditForm = ({ data }: { data: Contact }) => {
	const UpdateContactWithId = updateContact.bind(null, data.id);
	const [state, formAction] = useFormState(UpdateContactWithId, null);
	const [disableButton, setDisable] = useState(false);

	const handleDisable = () => {
		!disableButton ? setDisable(true) : setDisable(false);
		setTimeout(() => setDisable(false), 3000);
		setDisable(!disableButton);
	};

	return (
		<div className="max-w-5xl mx-auto h-screen flex justify-center items-center">
			<div className="flex flex-col justify-center items-center gap-8 mt-8 bg-white drop-shadow-xl border-2 border-[#f4f4f4] p-8 rounded-lg">
				<h1>EditForm</h1>
				<form action={formAction}>
					<div className="mb-5">
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-900"
						>
							Full Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Full Name..."
							defaultValue={data?.name}
						/>
						<div
							id="name-error"
							aria-live="polite"
							aria-atomic="true"
						>
							<p className="mt-2 text-sm text-red-500">
								{state?.Error?.name}
							</p>
						</div>
					</div>
					<div className="mb-5">
						<label
							htmlFor="phone"
							className="block text-sm font-medium text-gray-900"
						>
							Phone Number
						</label>
						<input
							type="text"
							name="phone"
							id="phone"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Phone Number..."
							defaultValue={data?.phone}
						/>
						<div
							id="phone-error"
							aria-live="polite"
							aria-atomic="true"
						>
							<p className="mt-2 text-sm text-red-500">
								{state?.Error?.phone}
							</p>
						</div>
					</div>
					<div
						id="message-error"
						aria-live="polite"
						aria-atomic="true"
					>
						<p className="mt-2 text-sm text-red-500">
							{state?.message}
						</p>
					</div>
					<div className="w-full flex gap-4 items-center">
						<button
							type="submit"
							className="px-6 py-2 bg-green-500 text-white font-semibold rounded"
							onClick={handleDisable}
						>
							Update contact
						</button>
						<Link href={"/contact"}>Cancel</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditForm;
