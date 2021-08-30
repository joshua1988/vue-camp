module.exports = function(data) {
  const fs = require("fs");

  function getFiles(dir) {
    const all = fs.readdirSync(dir);
    const filtersDir = all.filter(
      file => file.includes(".md") && !file.includes('waiting')
    );

    return {
      title: data.title,
      collapsable: data.collapsable,
      children: filtersDir.map(
        mdName => `/${data.dirName}/${mdName.split(".")[0]}`
      )
    };
  }

  // const filePath =
  //   process.env.NODE_ENV === "development"
  //     ? `./docs/${data.dirName}`
  //     : `./${data.dirName}`;
  return getFiles(`./docs/${data.dirName}`);
};
