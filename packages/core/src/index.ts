import { prisma, User } from "@repo/db";

export const runPromise = async () => {
  const user: User | null = await prisma.user.findFirst();
  const awaited = await Promise.resolve(1);
  return awaited;
};
