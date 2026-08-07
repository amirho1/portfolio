import { rmSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = process.cwd();

for (const generatedDirectory of [".next", "out"]) {
  const target = resolve(projectRoot, generatedDirectory);

  if (target === projectRoot) {
    throw new Error("Refusing to remove the project root.");
  }

  rmSync(target, { recursive: true, force: true });
}
