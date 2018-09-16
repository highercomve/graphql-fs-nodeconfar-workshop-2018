# Step 1

Queremos listar los nombres de los archivos en `ROOT_PATH`.

Query:

```gql
query listFiles {
  files {
    name
  }
}
```

Result:

```json
{
  "data": {
    "files": [
      {
        "name": "fileA.txt"
      },
      {
        "name": "fileB.txt"
      }
    ]
  }
}
```

## Crear un tipo File

Los componentes más básicos de un _GraphQL schema_ son los tipos, que representan un objeto que
se puede fetchear de nuestro servicio, y los _fields_ que tiene.

```gql
type Field {
  name: String!
}
```

> __String__ es uno de los tipos escalares built-in de GraphQL.

> __String!__ indica que GraphQL garantiza que el objeto no puede devolver _null_ para ese field.

## Agregar un field _files_ al tipo Query

TODO: hablar del tipo Query

```qgl
type Query {
  files: [File!]!
}
```

> __[File!]!__ representa un array de objetos de tipo File no _null_ y que siempre va a devolver un array,
aunque sea vacío `[]`.

## Resolver el field _files_

TODO: hablar de resolvers

```js
{
  Query: {
    files: (obj, args) {
      // TODO: implement read ROOT_PATH dir
      return [];
    }
  }
}
```