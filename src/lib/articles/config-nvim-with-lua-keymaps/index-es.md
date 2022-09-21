---
slug: config-nvim-with-lua-keymaps
title: 'Configure Nvim with Lua: Keymaps (2)'
datePublished: '2022-09-20'
lastUpdated: '2022-09-20'
excerpt: 'A quick look at the basic vim/nvim configuration, in this case with keymaps'
tags: [{ name: 'Vim/Nvim', background: '#019030' }, { name: 'Lua', background: '#000080' }]
show: true
---

<script>
  import GenericLink from '$lib/components/Link/GenericLink.svelte';
</script>

One of the facilities that vim/nvim provides is the opportunity to create custom keymaps. In the documentation, which you can read at:

```shell
  vim

  :help mapping
```

In the vim/nvim documentation, we see that:
**"Key mapping is used to change the meaning of typed keys. The most common use
is to define a sequence of commands for a function key"**

They also explain that there are seven types of mappings:

- For Normal mode: When typing commands.
- For Visual mode: When typing commands while the Visual area is highlighted.
- For Select mode: like Visual mode but typing text replaces the selection.
- For Operator-pending mode: When an operator is pending (after "d", "y", "c",
  etc.). See below: omap-info.
- For Insert mode. These are also used in Replace mode.
- For Command-line mode: When entering a ":" or "/" command.
- For Terminal mode: When typing in a :terminal buffer.

| COMMANDS MAP | COMMANDS NOMAP | COMMANDS UNMAP | MODES                                    |
| ------------ | -------------- | -------------- | ---------------------------------------- |
| :map         | :noremap       | :unmap         | Normal, Visual, Select, Operator-pending |
| :nmap        | :nnoremap      | :nunmap        | Normal                                   |
| :vmap        | :vnoremap      | :vunmap        | Visual and Select                        |
| :smap        | :snoremap      | :sunmap        | Select                                   |
| :xmap        | :xnoremap      | :xunmap        | Visual                                   |
| :omap        | :onoremap      | :ounmap        | Operator-pending                         |
| :map!        | :noremap!      | :unmap!        | Insert and Command-line                  |
| :imap        | :inoremap      | :iunmap        | Insert                                   |
| :lmap        | :lnoremap      | :lunmap        | Insert, Command-line, Lang-Arg           |
| :cmap        | :cnoremap      | :cunmap        | Command-line                             |
| :tmap        | :tnoremap      | :tunmap        | Terminal                                 |

All this can be complicated, especially for those of us who are starting in this world, but luckily Nvim provides us with this **nvim_set_keymap()** function. As I tell you on all occasions, you can go to its documentation to learn more about its operation:

```shell
  nvim

  :help nvim_set_keymap
```

With this function we sets a global mapping for the given mode. The parameters it accepts are:

| PARAMS | DESCRIPTION                                                                                                                                                                                                                                                                                                                             |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode   | Mode short-name (map command prefix: "n", "i", "v", "x", …) or "!" for :map!, or empty string for :map.                                                                                                                                                                                                                                 |
| lhs    | Left-hand-side _lhs_ of the mapping.                                                                                                                                                                                                                                                                                                    |
| rhs    | Right-hand-side _rhs_ of the mapping.                                                                                                                                                                                                                                                                                                   |
| opts   | Optional parameters map. Accepts all :map-arguments as keys excluding _<buffer>_ but including noremap and "desc". "desc" can be used to give a description to keymap. When called from Lua, also accepts a "callback" key that takes a Lua function to call when the mapping is values are Booleans. Unknown key is an error.executed. |

I think we can start to create the keymaps.lua file. The first thing we will do is create the file where the basic vim configurations will be, example: if we want to see the number of lines.

1. We move to the nvim folder:

```shell
  cd .config/nvim
```

2. Then, we create the keymaps.lua file (where we are going to put the custom keymaps).

```shell
  nvim lua/configs/keymaps.lua
```

3. We create a function **keymap** for the **nvim_set_keymap** use:

```lua
  function keymap(mode, lhs, rhs, opts)
    local options = { noremap = true }
    if opts then
        options = vim.tbl_extend("force", options, opts)
    end
    vim.api.nvim_set_keymap(mode, lhs, rhs, options)
  end
```

We now use this function to configure our custom keymaps. The first example I want to put is how we select the all content of a file. By default it would be this:

```shell
  gg<S-v>G
```

- We use _gg_ to go to the beginning of the file
- Then _Shift+v_ to switch to **VISUAL LINE** mode
- Then we use _G_ to move to the end of the file, and the all content is selected.

So, we are going to configure other keys to execute the same task, I put Ctrl+a, since that combination is very common in other editors.

```lua
  -- Select all content in the file
  keymap("", "<C-a>", "gg<S-v>G", opts)
```

4. Save it and test.

5. Lastly, to use these keymap, we need to call the keymaps file in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  require('configs.keymaps')
```

Also, we can add other configurations:

```lua
  -- Move text up and down
  keymap("v", "<C-j>", ":m .+1<CR>==", opts)
  keymap("v", "<C-k>", ":m .-2<CR>==", opts)
  -- Stay in indent mode
  keymap("v", "<", "<gv", opts)
  keymap("v", ">", ">gv", opts)
```

The directory of folders we have it like this:

```
nvim
├─ init.lua
└─ lua
     └─ configs
            └─ options
            |      └─ init.lua
            └─ keymaps.lua
```

### Conclusion

Now you can configure the keys as you prefer. I think that this way you are ready to continue with the configuration of your preferences. I hope it will be helpful for those who want to experiment with custom keymaps.

### Resources

- <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua website</GenericLink>
- <GenericLink ariaLabel="Read about Vim" href="https://www.vim.org/" target="_blank">Vim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim-Lua" href="https://github.com/nanotee/nvim-lua-guide" target="_blank">Nvim-Lua Guide</GenericLink>
