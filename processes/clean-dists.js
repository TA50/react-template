

var fs = require('fs');
const path = require('path');
const packagesPath = path.join(__dirname, "..", "packages");

const args = process.argv.slice(2);
const packageName = args[0];
const pathesToDelete = [];

if (packageName) {
  const distPath = path.join(packagesPath, packageName, "dist");
  pathesToDelete.push(distPath);
} else {
  const dirs = fs.readdirSync(packagesPath);

  dirs.forEach(pkg => {

    const distPath = path.join(packagesPath, pkg, "dist");
    pathesToDelete.push(distPath);
  });

}
pathesToDelete.forEach(distPath => {
  fs.rm(distPath, { recursive: true }, (err) => {
    if (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }

    console.log(`${distPath} is deleted!`);
  });
})
