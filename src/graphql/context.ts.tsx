import { PrismaClient } from "@prisma/client";
import { prisma } from "../libs/prisma";

export type context = {
    prisma: PrismaClient
}


export const context: context = { prisma };