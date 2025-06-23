export const runPromise = async () => {
  const awaited = await Promise.resolve(1);
  return awaited;
};
