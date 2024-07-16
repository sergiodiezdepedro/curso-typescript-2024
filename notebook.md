# Curso de Typescript 2024

## Handbook oficial

[Link](https://www.typescriptlang.org/docs/handbook/intro.html)

## Básicos

**Transpilar**:

```bash
tsc nombre_archivo.ts
```

**Inicializar (tsconfig.json)**

```bash
tsc --init
```

Tras la creación de este archivo, para transpilar todos los archivos `.ts` con: `tsc` es suficiente.

**Watch Mode**

```bash
tsc --watch
```

```bash
tsc -w
```

## Tipos de datos

[Documentación oficial](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

Primitivos:

- String
- Number
- Boolean
- null, undefined
- Symbol (sym)

Compuestos:

- Objetos literales
- Funciones
- Clases
- Arrays
- Interfaces
- Genéricos
- Tuplas

## `tsconfig.json`

[Documentación oficia](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

**Depurar código .ts**

```json
 /* Enable constraints that allow a TypeScript project to be used with project references. Hay que descomentar esta línea */
"composite": true,
/* Create source map files for emitted JavaScript files. Hay que descomentar esta línea */
 "sourceMap": true,                                             
```
**IMPORTANTE**: hay que hacer estos cambios en el `tsconfig.json` con el watch para transpilar al vuelo detenido.


**Sin comentarios en los archivos `.js`**

```json
 /* Disable emitting comments. Hay que descomentar esta línea */
"removeComments": true,                          
```

**Excluir de la transpilación directorios y/o archivos**

```json
/* Al final del tsconfig.json */
{
    /* Las opciones del archivo */
},
"exclude": [
    "loren-ipsum/*.ts",
    "dist",
    "out",
    "tests",
    "**/*.spec.ts",
    "**/*.test.ts"
]
```
[Un ejemplo](https://chatgpt.com/share/29f9f68e-311a-4cf6-a691-bf985bfdd442)

**Unir todos los archivos `.ts` en un único archivo `.js` de salida**

```json
/* Specify what module code is generated. Sólo los módulos 'amd' y 'system' admiten la posibilidad de un archivo único de salida*/
 "module": "amd",                                
   /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. Descomentar la línea y poner el nombre dle arcghvo de salida deseado*/
"outFile": "./lorem-ipsum.js",                               
```

**Decoradores en TypeScript**

[Documentación oficial](https://www.typescriptlang.org/docs/handbook/decorators.html)

**Convert JSON into typesafe code in any language**
https://quicktype.io/

Hay una extensión para Visual Studio Code: `Paste JSON as Code` .