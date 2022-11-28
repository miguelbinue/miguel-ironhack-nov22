# Miguel's notes Ironhack!

_Esto es una recopilación de notas durante el curso de Front-end en Ironhack._

Links útiles: :)

- https://chiamakaikeanyi.dev/how-to-write-good-git-commit-messages/
- https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## W01

### D01

#### Comandos del terminal

- whoami --> nombre de usuario de tu ordenador
- ls --> contenido del directorio
- cd --> cambiar de directorio --> para mover utilizar ".."
- mkdir --> nueva carpeta
- touch --> nuevo fichero
- cp --> copiar archivos
- mv /directory --> mover archivos

#### Secuencia del repositorio

- git init --> crear repositorio en tu directorio del equipo
- git add "fichero" o <.> (todos los ficheros) --> trackea ficheros en el servidor
- git rm --cached "nombre-archivo" --> quitar el trackeo a un fichero
- git commit -m <"mensaje">

- **FAQ frecuentes de la secuencia**
  - ¿Necesito bajarme un proyecto de GitHub? **fork + git clone "link"**
  - ¿Como vinculo GitHub con mi directorio? **git init**
  - ¿Como actualizo cambios de mi equipo a GitHub? **git add . --> git commit -m "" --> git push origin main**
  - ¿Como actualizo cambios de GitHub a mi equipo? **check del repositorio actualizado --> git pull origin main**
  - ¿Que es el pull request? **La manera de entregar cambios de un proyecto que no es tuyo**

### D02

#### HTML - Estructura

```
<!DOCTYPE html>
<html>
  <head>
    <title>My first document</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    ...
  </body>
</html>
```

#### "Block" vs. "Inline"

- Block: p, pre, h1, ol, ul, li, table, form, fieldset

-Inline: strong, links (a href = ""), break (br), img src = "", script, span, button, input, labels, select, textarea

#### HTML - Semántica

- `<header>` --> Encabezado
- `<footer>` --> Pie de página
- `<nav>` --> Menú de navegación
- `<section>` --> Agrupación de contenido extenso
- `<div>` --> Crear secciones y agrupación de contenido concreto
- `<article>` --> Comentarios de usuarios, forum posts..., parte independiente del documento
- `<aside>` --> Contenido en menú de navegación, sidebar
- `<details>` --> Información que el usuario puede cambiar/interactuar
- `<figure>` --> Agrupar contenido gráfico
- `<mark>` --> Agrupar contenido destacado
- Otros
  - `<figcaption>`
  - `<main>`
  - `<summary>`
  - `<time>`

### D03

#### CSS - Estructura

### D04

### D05

## W02 - JavaScript

### D01 - Conditionals

#### Data types in JavaScript

```
- Number: 26
- String: '26'
- Boolean: true
- Null
- Undefined
- Symbol
```

-------------------------**Numbers & Strings**-------------------------

- `.length` --> Te coge un valor numérico
- `.indexOf(substr)` --> Devuelve un valor de la posición de la string. Si no está, devuelve -1
- `.slice(num1, num2)` --> Coge un segmento, si este existe, de una string determinada por dos posiciones
- `localeCompare()` --> Compara tamaños de strings y devuelve 1 si es >, -1 si es < o 0 si es =

- `startsWith()`
- `endsWith()`
- `includes()`

-------------------------**Boolean, Undefined & Null**------------------------------

### D02 - Functions and Arrays

### D03 - DOM & Events

### D04 - Array methods

### D05 - Promises & callbacks

#### Promises

- `.then`
- `.catch`
- `.finally`
- `Promise.all()`
  ![Image text](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/javascript/promises-2.png)

#### Asynchronic & Delays

- `setTimeout()
- `setInterval()`

#### Async | Await

Es una sintaxis más leíble que las anteriores

## W03

D01
D02
D03
D04
D05

## W04

D01
D02
D03
D04
D05

## W05

D01
D02
D03
D04
D05

## W06

D01
D02
D03
D04
D05
