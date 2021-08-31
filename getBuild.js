module.exports = function (data) {
  const fs = require('fs');
  const yamlFront = require('yaml-front-matter');

  function getFiles(dir) {
    const dirArray = [];
    const all = fs.readdirSync(dir);
    const filtersDir = all.filter(file => file.includes('.md'));

    for (let file of filtersDir) {
      const fileData = fs.readFileSync(`${dir}/${file}`);
      const fileMetaData = yamlFront.loadFront(fileData);
      if (fileMetaData.isDeploy) {
        dirArray.push({ file: file.split('.')[0], order: fileMetaData.order });
      };
    }

    dirArray.sort((prev, next) => (prev.order > next.order ? 1 : -1));

    return {
      title: data.title,
      collapsable: data.collapsable,
      children: dirArray.map(({ file }) => `/${data.dirName}/${file}`),
    };
  }

  return getFiles(`./docs/${data.dirName}`);
};