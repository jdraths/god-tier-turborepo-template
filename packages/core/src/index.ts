import { db, usersTable } from "@repo/db";

export const runPromise = async () => {
  const _user = await db.select().from(usersTable).limit(1);
  const awaited = await Promise.resolve(1);
  return awaited;
};
