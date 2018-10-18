/**
 * @module Resolvers
 * Funciones que resuelven los campos no triviales
 * de los tipos de nuestro esquema.
 */

const {
  // eslint-disable-next-line no-unused-vars
  FILE_TYPE, DIR_TYPE, readDir, writeFile,
} = require('./filesystem');

const dirResolver = type => async (obj, { dir }) => {
  const name = obj && obj.name ? obj.name : '';
  const path = obj && obj.path ? obj.path : null;
  const finalPath = path ? `${path}/${name}` : name;
  const directory = await readDir(dir || finalPath);
  return type ? directory.filter(f => f.type === type) : directory;
};

module.exports = {
  Query: {
    hello(obj, { name }) {
      return `Hello ${name || 'World'}!`;
    },
    files: dirResolver(FILE_TYPE),
    dirs: dirResolver(DIR_TYPE),
    ls: dirResolver(),
    // Agrega debajo los resolvers para Query
  },
  Stat: {
    __resolveType(obj) {
      switch (obj.type) {
      case FILE_TYPE:
        return 'File';
      case DIR_TYPE:
        return 'Dir';
      default:
        return null;
      }
    },
  },
  Dir: {
    dirs: dirResolver(DIR_TYPE),
    files: dirResolver(FILE_TYPE),
    ls: dirResolver(),
  },
  // Agrega debajo los resolvers para tipos custom como File
};
