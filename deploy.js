const fs = require("fs");
const path = require("path");
const spawn = require("cross-spawn");
const pkg = require("./package.json");

function delDir(file) {
  if (fs.statSync(file).isDirectory()) {
    const list = fs.readdirSync(file);
    list.forEach((v, i) => {
      const url = file + "/" + v;
      const stats = fs.statSync(url);
      if (stats.isFile()) {
        fs.unlinkSync(url);
      } else {
        arguments.callee(url);
      }
    });
    fs.rmdirSync(file);
  } else {
    fs.unlinkSync(file);
  }
}

function shell(command, directory) {
  console.log("$ " + command);
  try {
    const args = command.split(" ");
    const cmd = args.shift();

    const result = spawn.sync(cmd, args, {
      cwd: directory || process.cwd(),
      env: process.env,
      stdio: "inherit",
      encoding: "utf-8"
    });
    if (result.status !== 0) {
      process.exit(result.status);
    }
  } catch (err) {
    console.log("catch err =>", err);
  }
}

(function() {
  shell("yarn lint");
  shell("yarn build");

  delDir(path.resolve(process.cwd(), "./dist/blog/.git"));

  const commands = [
    "git config user.name 'Robotism'",
    "git config user.email 'zlhc@live.com'",

    "git init",
    "git add .",
    "git commit -m 'deploy'",
    "git remote add origin https://github.com/HtmlOS/htmlos.github.io.git",
    "git push -u origin master --force"
  ];

  commands.forEach(function(cmd) {
    shell(cmd, path.resolve(process.cwd(), "./dist"));
  });
})();
