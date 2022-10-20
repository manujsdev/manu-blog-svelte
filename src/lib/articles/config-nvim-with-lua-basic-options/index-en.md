---
slug: config-nvim-with-lua-basic-options
title: 'Configure Nvim with Lua: Basic Options (1)'
datePublished: '2022-09-18'
lastUpdated: '2022-10-20'
excerpt: 'A quick look at the basic vim/nvim configuration, in this case with tab settings, show line number, set relative line number and others'
tags: [{ name: 'Vim/Nvim', background: '#019030' }, { name: 'Lua', background: '#000080' }]
show: true
---

<script>
  import GenericLink from '$lib/components/Link/GenericLink.svelte';
</script>

It is important to have a domain of the text editors that we use to develop software, or simply edit texts.
That is why I want to explain how I have one of the most used and stable in the industry, Vim, configured in my work environment.
I want to clarify that we will only be looking at how to configure it, not how to work with vim/nvim, but I can recommend those who are starting to watch the series of basic videos on how to improve the productivity of the channel <GenericLink aria-label="Read a post about Twin Lens Reflex cameras" href="https://www.youtube.com/channel/UCEKs1YXXru5ZKwYh5QKS30w" target="_blank">Compa compila</GenericLink> from youtube. Also, you can learn with:

```shell
 vim

:help
```

or, do the Vim tutor, a 30-minute interactive course for the basic commands

```shell
 vimtutor
```

According to the official Vim site it is:
**"Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient"**
Also, It has some interesting features:

- persistent, multi-level undo tree
- extensive plugin system
- support for hundreds of programming languages and file formats
- powerful search and replace
- integrates with many tools

With Vim you can use vimscript and/or lua language to do the configurations. In this case, we use Lua.

### What is Lua?

According to the official Vim site it is:
"Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description."

If you are interested in learning about Lua, you can go to official [Lua site](https://www.lua.org/).

We going to see how to configure Neovim. For this, we have a _init.vim_ or _init.lua_ file (never both). I recommend you study the documentation of vim to expand knowledge on this topic. They can open the editor (vim) and run the following command:

```shell
:help config
```

The main configuration file is located here:

| Env              | Config                                       |
| ---------------- | -------------------------------------------- |
| Unix             | ~/.config/nvim/init.lua (or init.vim)        |
| Windows          | ~/AppData/Local/nvim/init.lua (or init.vim)  |
| $XDG_CONFIG_HOME | $XDG_CONFIG_HOME/nvim/init.lua (or init.vim) |

For a better organization of the configurations we have the option to put them modularly, all the Lua modules must go inside the _lua/_ folder

| Env              | Config                    |
| ---------------- | ------------------------- |
| Unix             | ~/.config/nvim/lua        |
| Windows          | ~/AppData/Local/nvim/lua  |
| $XDG_CONFIG_HOME | $XDG_CONFIG_HOME/nvim/lua |

If you have a **mymodule.mysubmodule** module, each directory is searched for _lua/mymodule/mysubmodule.lua_, or _lua/mumodule/mysubmodule/init.lua_.

You can use _require()_ to load the modules. Example:

```lua
  require('mymodule')
```

It is not necessary to put the extension _.lua_. Also, you can load submodules in two ways:

```lua
  require('other_modules.anothermodule')
```

```lua
  require('other_modules/anothermodule')
```

Another important information is to know that if a module does not exist or that module has an error, the execution can be stopped. To prevent unexpected errors you can use _pcall()_

```lua
  local ok, _ = pcall(require, 'module_with_error')
  if not ok then
    -- not loaded
  end
```

Again, I recommend you study the documentation of vim to expand knowledge on this topic. They can open the editor (vim) and run the following command:

```shell
  :help lua-require
```

I think we can start configuring now. The first thing we will do is create the file where the basic vim configurations will be, example: if we want to see the number of lines.

1. We move to the nvim folder:

```shell
  cd .config/nvim
```

2. We create the main configuration file, we save it and close (at the moment we do not add content, you can still put a comment :-)):

```shell
  nvim init.lua
```

3. Then, we create the lua directory and inside our first module (where we are going to put the basic configurations).

```shell
  mkdir -p lua/configs/options
  nvim lua/configs/options/init.lua
```

4. We add this code and save it:

```lua
  local options = {
    number = true -- show line numbers
  }

  for k, v in pairs(options) do
    vim.opt[k] = v
  end
```

- There are two important points here.:
  - The first thing is to declare a variable with the configurations that we want (in this case so that the numbers of lines are show).
  - The second part uses the **wrapper** _vim.opt.\*_ as a mechanism to assign settings in Lua.

5. Lastly, to use these settings, we need to call the settings file in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  require('configs.options')
```

You already have configured to display the line numbers. Also, We can add other configurations:

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

1. _cursorline_: marks the line when the cursor is found.
2. _tabstop_, _shiftwidth_ y _expandtab_: this is used for config the tabs spaces.

You can add other configurations, you can see what each of them does by searching the vim documentation:

```shell
  :help number
  :help cursorline
```

We have the directory of folders like this:

```
nvim
├─ init.lua
└─ lua
  └─ configs
    └─ options
      └─ init.lua
```

### Conclusion

I think that this way you are ready to continue with the configuration of your preferences. I hope it will be helpful for those who want to experiment and those who are planning to take on vim/nvim as one of their main, or main text editor.

### Resources

- <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua website</GenericLink>
- <GenericLink ariaLabel="Read about Vim" href="https://www.vim.org/" target="_blank">Vim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim-Lua" href="https://github.com/nanotee/nvim-lua-guide" target="_blank">Nvim-Lua Guide</GenericLink>
