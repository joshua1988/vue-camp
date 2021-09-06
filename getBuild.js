const fs = require("fs");
const yamlFront = require("yaml-front-matter");

function getChildrenFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter(file => file.includes(".md"))
    .reduce((acc, cur) => {
      const fileData = fs.readFileSync(`${dir}/${cur}`);
      const { isDeploy, order } = yamlFront.loadFront(fileData);

      if (isDeploy) {
        acc.push({ file: cur.split(".")[0], order });
      }
      return acc;
    }, [])
    .sort((prev, next) => {
      if (!prev.order) {
        throw new Error(`${dir}/${prev.file}에 order 값이 없습니다`);
      }
      return prev.order > next.order ? 1 : -1;
    })
    .map(({ file }) => `/${dir.split("/")[2]}/${file}`);
}

function getBuild(data) {
  const { title, collapsable, dirName } = data;

  return {
    title,
    collapsable,
    children: getChildrenFiles(`./docs/${dirName}`)
  };
}

module.exports = getBuild;
