const hello = `
query hello {
  hello
}
`;

const helloNodeConf = `
query hello {
  hello(name: "NodeConf")
}
`;

const files = `
query listFiles {
  files {
    name
    type
  }
}
`;

const dirs = `
query listDirs {
  dirs {
    name
    type
  }
}
`;

const filesAndDirs = `
query listFilesAndDirs {
  files {
    name
    type
  }
  dirs {
    name
    type
  }
}
`;

const filesAndDirsRecursive = `
query listFilesAndDirsRecursive {
  dirs {
    name
    type
    files {
      name
      type
    }
    dirs {
      name
      type
    }
  }
}
`;

const list = `
query list {
  ls {
    name
    type
  }
}
`;

const listRecursive = `
query listRecursive {
  ls {
    name
    type
    ... on Dir {
      ls {
        name
        type
      }
    }
  }
}
`;

const listDir = `
query listDir {
  ls(dir: "Mother") {
    name
    type
  }
}
`;

const listDirRecursive = `
query listDirRecursive {
  ls(dir: "Mother") {
    ...stats
    ... on Dir {
      ls {
        ...stats
      }
    }
  }
}

fragment stats on Stat {
  name
  type
}
`;

const writeFile = `
mutation writeFile($name: String!, $content: String!) {
  writeFile(name: $name, content: $content) {
    name
  }
}
`;

module.exports = {
  hello,
  helloNodeConf,
  files,
  dirs,
  filesAndDirs,
  filesAndDirsRecursive,
  list,
  listRecursive,
  listDir,
  listDirRecursive,
  writeFile,
};
