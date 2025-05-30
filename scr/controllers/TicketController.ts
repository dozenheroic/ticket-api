import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class TicketController {
    static async create({ title, description, price }: { title: string; description: string; price: number }) {
        return prisma.ticket.create({
            data: { title, description, price },
        });
    }

    static async getById({ id }: { id: number }) {
        return prisma.ticket.findUnique({
            where: { id },
        });
    }

    static async getAll() {
        return prisma.ticket.findMany();
    }

    static async deleteById({ id }: { id: number }) {
        return prisma.ticket.delete({
            where: { id },
        });
    }
}
