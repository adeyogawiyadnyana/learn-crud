import { prisma } from "@/lib/prisma";

export const getContact = async () => {
	try {
		const contacts = await prisma.contact.findMany();
		return contacts;
	} catch (error) {
		throw new Error("Failed to get contacts");
	}
};
