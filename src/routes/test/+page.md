---
slug: first-article
title: Introduction to Programming
datePublished: '2022-08-05'
lastUpdated: '2022-09-08'
excerpt: 'A quick look to programming'
tags: [{ name: 'algorhitm', background: '#ff3e00' }, { name: 'programming', background: '#ead41c' }]
---

```js
console.log('Hello, World!');
```

**Nice to meet you!**

https://www.lua.org/
https://www.vim.org/
https://neovim.io/
https://github.com/nanotee/nvim-lua-guide

Es importante tener un dominio sobre los editores de texto que usemos para desarrollar software, o simplemente editar textos.
Por eso quiero explicar como tengo configurado en mi entorno de trabajo uno de los mas utilizados y estables en la industria, Vim.
Quiero aclarar que solo estaremos viendo como configurarlo, no como trabajar con vim/nvim, pero les puedo recomendar a los que estan comenzando que vean la serie de videos basicos de como mejorar la productividad del canal [Compa Compila](https://www.youtube.com/channel/UCEKs1YXXru5ZKwYh5QKS30w) de youtube.

Segun el sitio oficial Vim es:
Un editor de texto
"Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient"
Ademas que cuenta con algunas caracteristicas interesantes:

- persistent, multi-level undo tree
- extensive plugin system
- support for hundreds of programming languages and file formats
- powerful search and replace
- integrates with many tools

En Vim se puede utilizar vimscript y/o lua para realizar las configuraciones. En el caso nuestro trabajaremos con lua.
Que es Lua? Segun su sitio oficial:
"Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description."
Si les interesa aprender sobre Lua, pueden ir a https://www.lua.org/ y ampliar sus conocimientos.

Aqui veremos como configurar neovim. Para ello debemos tener un archivo init.vim o init.lua (pero nunca ambos archivos). Se puede profundizar tambien los conocimientos de configuracion abriendo el editor y ejecutando el siguiente comando:

- `:help config`

El archivo de configuracion principal se localiza aqui:

| Env              | Config                                       |
| ---------------- | -------------------------------------------- |
| Unix             | ~/.config/nvim/init.lua (or init.vim)        |
| Windows          | ~/AppData/Local/nvim/init.lua (or init.vim)  |
| $XDG_CONFIG_HOME | $XDG_CONFIG_HOME/nvim/init.lua (or init.vim) |

Para una mejor organizacion de las configuraciones tenemos la opcion de ponerlas modularmente, todos los modulos Lua deben ir dentro de la carpeta lua/

| Env              | Config                    |
| ---------------- | ------------------------- |
| Unix             | ~/.config/nvim/lua        |
| Windows          | ~/AppData/Local/nvim/lua  |
| $XDG_CONFIG_HOME | $XDG_CONFIG_HOME/nvim/lua |

Si tiene un modulo mymodule.mysubmodule, cada directorio es buscado por `lua/mymodule/mysubmodule.lua`, o `lua/mumodule/mysubmodule/init.lua`.

Se puede utilizar `require()` para cargar los modulos que se configuren. Ejemplo:

- `require('mymodule')`

Si se fijan no es necesario poner la extension `.lua`. Tambien se pueden cargar submodulos de dos maneras:

- `require('other_modules.anothermodule')`
- `require('other_modules/anothermodule')`

Otra informacion importante es saber que de no existir un modulo o ese modulo tiene algun error, se puede detener la ejecucion. Para prevenir de errores inesperados se puede utilizar `pcall()`

```lua
local ok, _ = pcall(require, 'module_with_error')
if not ok then
  -- not loaded
end
```

Pueden estudiar mas sobre este tema usando:

- `:help lua-require`

Me parece que ya podemos comenzar a configurar. Lo primero que haremos es crear el archivo donde estaran las configuraciones basicas de vim, ejemplo: si queremos que se vean los numero de lineas, etc.

1. Nos movemos a la carpeta nvm:

- `cd .config/nvim`

2. Creamos el archivo principal de configuracion, lo guardamos y cerramos (por el momento no le agregamos contenido, igual pueden poner algun comentario :-)):

- `nvim init.lua`

3. Luego creamos el directorio lua y dentro nuestro primer modulo (donde vamos a poner las configuraciones basicas).

- `mkdir -p lua/configs/options`
- `nvim lua/configs/options/init.lua`

4. Agregamos este codigo y lo guardamos:

```lua
local options = {
  number = true -- show line numbers
}

for k, v in pairs(options) do
  vim.opt[k] = v
end
```

- Aqui hay dos puntos importantes:
  - Lo primero es declarar una variable con las configuraciones que deseamos (en este caso para que se muestren los numeros de lineas).
  - La segunda parte utiliza el _wrapper_ `vim.opt.*` como mecanismo para asignar las configuraciones en Lua.

5. Por ultimo, para utilizar estas configuraciones, debemos llamar al archivo de configuraciones en el archivo principal (`init.lua`)

- `nvim init.lua`
- Agregar esto: `require('configs.options')`

De esta manera ya tendran configurado para que se muestren los numeros de lineas.

Tambien podemos agregar otras configuraciones:

```lua
local options = {
  number = true,            -- show line numbers
  relativenumber = true,    -- Show the line number relative to the line with the cursor in front of each line
  cursorline = true,        -- highlight the current line
  tabstop = 2,              -- Number of spaces that a <Tab> in the file counts for
  shiftwidth = 2,           -- Number of spaces to use for each step of (auto)indent
  expandtab = true,         -- Use the appropriate number of spaces to insert a <Tab>
  backup = false,           -- disabled the creation of backups
  cmdheight = 2,            -- Number of screen lines to use for the command-line
  fileencoding = 'utf-8',   -- File-content encoding for the current buffer
  hlsearch = true,          -- When there is a previous search pattern, highlight all its matches
  showmatch = true          -- When a bracket is inserted, briefly jump to the matching one
}


```

1. _cursorline_: marca la linea donde se encuentra el cursor
2. _tabstop_, _shiftwidth_ y _expandtab_: se utilizan para configurar los tabs

Pueden ir agregando otras configuraciones a su gusto, pueden ir viendo lo que hace cada una de ellas buscando en la documentacion de vim:

- `:help number`
- `:help cursorline`

Pienso que de esta manera ya estan listos para continuar con las configuraciones de sus preferencias. Espero sea de ayuda para los que deseen experimentar y los que tienen pensado asumir a vim/nvim como uno de sus principales, o el principal editor de textos.
