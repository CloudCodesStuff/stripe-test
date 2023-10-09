import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prismam: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prismam = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prismam = global.cachedPrisma;
}

export const prisma = prismam;
