import { prisma } from "@/lib/prisma";

export const getContact = async () => {
	try {
		const contacts = await prisma.contact.findMany();
		return contacts;
	} catch (error) {
		throw new Error("Failed to get contacts");
	}
};

export const getContactById = async (id: string) => {
	try {
		const contact = await prisma.contact.findUnique({
			where: { id },
		});
		return contact;
	} catch (error) {
		throw new Error("Failed to get contacts");
	}
};
