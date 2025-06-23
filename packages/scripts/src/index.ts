import { runPromise } from "@repo/core/index";

(async () => {
  const r = await runPromise();
  console.log("r", r);
})();
