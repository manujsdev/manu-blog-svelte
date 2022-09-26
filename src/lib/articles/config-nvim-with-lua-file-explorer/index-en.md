---
slug: config-nvim-with-lua-file-explorer
title: 'Configure Nvim with Lua: File Explorer (5)'
datePublished: '2022-09-25'
lastUpdated: '2022-09-26'
excerpt: 'A quick look at the File Explorer'
tags: [{ name: 'Vim/Nvim', background: '#019030' }, { name: 'Lua', background: '#000080' }]
show: true
---

<script>
  import GenericLink from '$lib/components/Link/GenericLink.svelte';
</script>

Vim/Neovim has a file explorer that we can use to move within the folders of our project, or simply the directory that we want to work. If you open a terminal and start Neovim, you can run this command:

```vim
  :Lexplore
```

According to the documentation: _With Lexplore toggles a full height Explorer window on the left hand side of the current tab. It will open a netrw window on the current directory if [dir] is omitted; a :Lexplore [dir] will show the specified directory in the left-hand side browser display no matter from which window the command is issued._

If you want to change the size you can do this:

```vim
  :Lexplore 25
```

You can see that now it has a size similar to <GenericLink ariaLabel="VS Code" href="https://code.visualstudio.com/" target="_blank">VS Code</GenericLink> file explorer. With this command you can open and close the file explorer, but if you wish, you can create a custom keymap to facilitate this. Example:

1. We move to the nvim folder:

```shell
  cd .config/nvim
```

2. Then, we will open the keymaps file.

```shell
  nvim lua/configs/keymaps.lua
```

3. We add this code and save it:

```lua
  -- ...others configs...
  -- toggle file explorer
  keymap('n', '<S-e>', ':Lexplore 25<cr>')
  -- ...others configs...
```

- Now you can press _Shift + e_ combination to toggle file explorer.

You already have your keymap configured for the vim/neovim file explorer. Also, there are some plugins (some of them are only for neovim) that add more features as a file explorer:

- <GenericLink ariaLabel="nerdtree" href="https://github.com/preservim/nerdtree" target="_blank">nerdtree (vim/neovim)</GenericLink>
- <GenericLink ariaLabel="nvim-tree.lua" href="https://github.com/kyazdani42/nvim-tree.lua" target="_blank">nvim-tree.lua (neovim)</GenericLink>
- <GenericLink ariaLabel="vim-dirvish" href="https://github.com/justinmk/vim-dirvish" target="_blank">vim-dirvish (vim/neovim)</GenericLink>
- <GenericLink ariaLabel="fern.vim" href="https://github.com/lambdalisue/fern.vim" target="_blank">fern.vim (vim/neovim)</GenericLink>

In this case, we going to test <GenericLink ariaLabel="nvim-tree.lua" href="https://github.com/kyazdani42/nvim-tree.lua" target="_blank">nvim-tree.lua</GenericLink>, because it is written in <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua</GenericLink>. But, you can experiment with the others, and use the one you wish.

### Use nvim-tree.lua

1. The first step: we add the plugin <GenericLink ariaLabel="nvim-tree.lua" href="https://github.com/kyazdani42/nvim-tree.lua" target="_blank">nvim-tree.lua</GenericLink> to the plugins.lua file (where we are going to put the plugins to install).

```shell
  nvim lua/configs/plugins.lua
```

2. We add this and save it:

```lua
  -- ...others configs...
  return packer.startup(function(use)
    -- ...others plugins...

    use {
      'kyazdani42/nvim-tree.lua',
      requires = {
        'kyazdani42/nvim-web-devicons', -- optional, for file icons
      },
      tag = 'nightly' -- optional, updated every week.
    }

    -- ...others configs...
  end)
```

- To use <GenericLink ariaLabel="nvim-web-devicons" href="https://github.com/kyazdani42/nvim-web-devicons" target="_blank">nvim-web-devicons</GenericLink>, it requires a patched font: <GenericLink ariaLabel="nerdfonts" href="https://www.nerdfonts.com" target="_blank">nerdfonts</GenericLink>, if you want icons. I recommend that you use it.

3. Install the packages:

```shell
  :PackerInstall
```

4. Later, we create the nvim-tree file.

```shell
  nvim lua/configs/nvim-tree.lua
```

5. We add this code and save it:

```lua
  local ok, nvim_tree = pcall(require, "nvim-tree")
  if not ok then
    return
  end

  -- disable netrw at the very start of your init.lua (strongly advised)
  vim.g.loaded = 1
  vim.g.loaded_netrwPlugin = 1

  nvim_tree.setup({
    view = {
      width = 35
    },
    renderer = {
      icons = {
        glyphs = {
          git = {
            unstaged = "",
            untracked = "U",
          },
        },
      }
    }
  })
```

6. Open the keymaps.lua file (where we are going to put the custom keymaps).

```shell
  nvim lua/configs/keymaps.lua
```

7. Add this:

```lua
  -- ...others keymaps...

  -- nvim-tree toggle (open/close with Shift + e)
  keymap('n', '<S-e>', ':NvimTreeToggle<cr>', opts)
  -- change of window (example: when you are open nvim-tree, or you are splitted the window)
  keymap('n', '<C-h>', '<C-w>h', opts)
  keymap('n', '<C-j>', '<C-w>j', opts)
  keymap('n', '<C-k>', '<C-w>k', opts)
  keymap('n', '<C-l>', '<C-w>l', opts)

  -- ...others keymaps...
```

8. To use these settings, we need to call the nvim-tree file in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  require('configs.nvim-tree')
```

And that's it!! You can use nvim-tree!

### Directory

The directory of folders we have it like this:

```
nvim
├─ init.lua
└─ lua
    └─ configs
        └─ options
        |   └─ init.lua
        └─ keymaps.lua
        └─ plugins.lua
        └─ impatient.lua
        └─ colorscheme.lua
        └─ nvim-tree.lua
```

### Conclusion

In this article we learned how to use vim/neovim file explorer. Also, there are plugins that we can use. In this case we install and configure <GenericLink ariaLabel="nvim-tree.lua" href="https://github.com/kyazdani42/nvim-tree.lua" target="_blank">nvim-tree.lua</GenericLink>. Now you can test other file explorer if you wish. I hope it will be helpful for those who want to experiment.

### Resources

- <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua website</GenericLink>
- <GenericLink ariaLabel="Read about Vim" href="https://www.vim.org/" target="_blank">Vim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim-Lua" href="https://github.com/nanotee/nvim-lua-guide" target="_blank">Nvim-Lua Guide</GenericLink>
- <GenericLink ariaLabel="nvim-tree.lua" href="https://github.com/kyazdani42/nvim-tree.lua" target="_blank">nvim-tree.lua</GenericLink>
