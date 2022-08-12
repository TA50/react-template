import fs from "fs";
import path from "path";

const packagesPath = path.join(__dirname, "..", "packages");

const args = process.argv.slice(2);
const packageName = args[0];
const pathesToDelete = [];

if (packageName) {
  const distPath = path.join(packagesPath, packageName, "dist");
  pathesToDelete.push(distPath);
} else {
  const dirs = fs.readdirSync(packagesPath);

  dirs.forEach((pkg) => {
    const distPath = path.join(packagesPath, pkg, "dist");
    pathesToDelete.push(distPath);
  });
}
pathesToDelete.forEach((distPath: string) => {
  fs.rm(distPath, { recursive: true }, (err) => {
    if (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }

    // eslint-disable-next-line no-console
    console.log(`${distPath} is deleted!`);
  });
});
