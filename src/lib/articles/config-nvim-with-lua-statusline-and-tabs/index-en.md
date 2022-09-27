---
slug: config-nvim-with-lua-statusline-and-tabs
title: 'Configure Nvim with Lua: The statusline (Lualine) and open tabs (bufferline) (6)'
datePublished: '2022-09-26'
lastUpdated: '2022-09-26'
excerpt: 'A quick look at the statusline and tabsline: use the lualine and bufferline plugins'
tags: [{ name: 'Vim/Nvim', background: '#019030' }, { name: 'Lua', background: '#000080' }]
show: false
---

<script>
  import GenericLink from '$lib/components/Link/GenericLink.svelte';
</script>

An important piece in our editor/IDE is the statusline bar, where we can see important information such as the mode it is in (insert, normal, visual, etc), Also, we can see what position on the page we are in, the type of file, etc.. By default the status bar shows the file path and cursor position, and the mode. All this can be customized, even create your own plugin. For now, you can start familiarizing yourself with its documentation if you are curious:

```vim
  :help statusline
```

There are some plugins that add more features as a statusline:

- <GenericLink ariaLabel="lightline.vim" href="https://github.com/itchyny/lightline.vim" target="_blank">lightline.vim</GenericLink>
- <GenericLink ariaLabel="vim-airline" href="https://github.com/vim-airline/vim-airline" target="_blank">vim-airline</GenericLink>
- <GenericLink ariaLabel="lualine.nvim" href="https://github.com/nvim-lualine/lualine.nvim" target="_blank">lualine.nvim</GenericLink>

Today, we going to test <GenericLink ariaLabel="lualine.nvim" href="https://github.com/nvim-lualine/lualine.nvim" target="_blank">lualine.nvim</GenericLink>, because it is written in <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua</GenericLink>. But, you can experiment with the others, and use the one you wish.

<GenericLink ariaLabel="lualine.nvim" href="https://github.com/nvim-lualine/lualine.nvim" target="_blank">lualine.nvim</GenericLink>, is _a blazing fast and easy to configure Neovim statusline written in Lua_. This plugin have a high performance, you can see here: <GenericLink ariaLabel="lualine.nvim: performance compared to other plugins" href="https://github.com/nvim-lualine/lualine.nvim#performance-compared-to-other-plugins" target="_blank">lualine.nvim: performance</GenericLink>

### Use lualine.nvim

1. The first step: we add the plugin <GenericLink ariaLabel="lualine.nvim" href="https://github.com/nvim-lualine/lualine.nvim" target="_blank">lualine.nvim</GenericLink> to the plugins.lua file (where we are going to put the plugins to install).

```shell
  nvim lua/configs/plugins.lua
```

2. We add this and save it:

```lua
  -- ...others configs...
  return packer.startup(function(use)
    -- ...others plugins...

    use {
      'nvim-lualine/lualine.nvim',
      requires = { 'kyazdani42/nvim-web-devicons', opt = true }
    }

    -- ...others configs...
  end)
```

- To use <GenericLink ariaLabel="nvim-web-devicons" href="https://github.com/kyazdani42/nvim-web-devicons" target="_blank">nvim-web-devicons</GenericLink>, it requires a patched font: <GenericLink ariaLabel="nerdfonts" href="https://www.nerdfonts.com" target="_blank">nerdfonts</GenericLink>, if you want icons. I recommend that you use it.

3. Install the packages:

```shell
  :PackerInstall
```

4. Later, we create the lualine file.

```shell
  nvim lua/configs/lualine.lua
```

5. We add this code and save it:

```lua
  local ok, lualine = pcall(require, 'lualine')
  if not ok then
    return
  end

  -- git branch
  local branch = {
    'branch',
    icon = ''
  }

  -- diagnostics count from your preferred source
  local diagnostics = {
    'diagnostics',
    sources = { 'nvim_diagnostic', 'nvim_lsp' },
    sections = { 'error', 'warn' },
    symbols = { error = ' ', warn = ' ' },
    colored = false,
    update_in_insert = false,
    always_visible = true
  }

  -- vim mode
  local mode = {
    'mode',
    fmt = function(str)
      return '-- ' .. str .. ' --'
    end
  }

  -- git diff status
  local diff = {
    'diff',
    colored = false
  }

  lualine.setup({
    options = {
      theme = 'gruvbox_dark',
      disabled_filetypes = { "dashboard", 'NvimTree', "Outline" }
    },
    sections = {
      lualine_a = { branch, diagnostics },
      lualine_b = { mode },
      lualine_c = {},
      lualine_x = { diff, "encoding", 'filetype' },
      lualine_y = { 'location' },
      lualine_z = { 'progress' }
    },
    extensions = {'nvim-tree'}
  })
```

6. Open the option/init.lua file (where we are going to put the basic options).

```shell
  nvim lua/configs/options/init.lua
```

7. Add this:

```lua
  local options = {
    -- ...others options...
    showmode = false,          -- we don't need show mode because we see in the lualine statusline (Insert, Visual, etc)
    -- ...others options...
  }
```

8. To use these settings, we need to call the lualine file in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  require('configs.lualine')
```

<GenericLink ariaLabel="lualine.nvim" href="https://github.com/nvim-lualine/lualine.nvim" target="_blank">lualine.nvim</GenericLink> have other important feature: the tabline. _You can use lualine to display components in tabline. The configuration for tabline sections is exactly the same as that of the statusline._ But _if you want a more sophisticated tabline you can use other tabline plugins with lualine too_:

- <GenericLink ariaLabel="nvim-bufferline.lua" href="https://github.com/akinsho/nvim-bufferline.lua" target="_blank">nvim-bufferline.lua</GenericLink>
- <GenericLink ariaLabel="tabline.nvim" href="https://github.com/kdheepak/tabline.nvim" target="_blank">tabline.nvim</GenericLink>

In this case, we see <GenericLink ariaLabel="nvim-bufferline.lua" href="https://github.com/akinsho/nvim-bufferline.lua" target="_blank">nvim-bufferline.lua</GenericLink>.

### Use nvim-bufferline.lua

1. The first step: we add the plugin <GenericLink ariaLabel="nvim-bufferline.lua" href="https://github.com/akinsho/nvim-bufferline.lua" target="_blank">nvim-bufferline.lua</GenericLink> to the plugins.lua file.

```shell
  nvim lua/configs/plugins.lua
```

2. We add this and save it:

```lua
  -- ...others configs...
  return packer.startup(function(use)
    -- ...others plugins...

    use {
      'akinsho/bufferline.nvim',
      tag="v2.*",
      requires = 'kyazdani42/nvim-web-devicons'
    }

    -- ...others configs...
  end)
```

3. Install the packages:

```shell
  :PackerInstall
```

4. Later, we create the bufferline file.

```shell
  nvim lua/configs/bufferline.lua
```

5. We add this code and save it:

```lua
  local ok, bufferline = pcall(require, 'bufferline')
  if not ok then
    return
  end

  bufferline.setup({
    options = {
      numbers = 'ordinal',
      offsets = { { filetype = "NvimTree", text = "File Explorer", text_align = 'center' } },
    }
  })
```

6. Open the option/init.lua file (where we are going to put the basic options).

```shell
  nvim lua/configs/options/init.lua
```

7. Add this:

```lua
  local options = {
    -- ...others options...
    mouse = "a"  -- mouse support for all modes
    -- ...others options...
  }
```

8. Open the keymaps.lua file (where we are going to put the custom keymaps).

```shell
  nvim lua/configs/keymaps.lua
```

9. Add this:

```lua
  -- ...others keymaps...

  -- Move to buffer next or previous (Shift + l or Shift + h)
  keymap("n", "<S-l>", ":bnext<CR>", opts)
  keymap("n", "<S-h>", ":bprevious<CR>", opts)

  -- ...others keymaps...
```

10. To use these settings, we need to call the bufferline file in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  require('configs.bufferline')
```

And that's it!! You can use lualine and bufferline!

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
        └─ lualine.lua
        └─ bufferline.lua
```

### Conclusion

In this article we learned how to configure <GenericLink ariaLabel="lualine.nvim" href="https://github.com/nvim-lualine/lualine.nvim" target="_blank">lualine.nvim</GenericLink>, a neovim statusline and <GenericLink ariaLabel="nvim-bufferline.lua" href="https://github.com/akinsho/nvim-bufferline.lua" target="_blank">nvim-bufferline.lua</GenericLink>, a neovim tabline. Now you can test other statusline/tabline if you wish. I hope it will be helpful for those who want to experiment.

### Resources

- <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua website</GenericLink>
- <GenericLink ariaLabel="Read about Vim" href="https://www.vim.org/" target="_blank">Vim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim-Lua" href="https://github.com/nanotee/nvim-lua-guide" target="_blank">Nvim-Lua Guide</GenericLink>
- <GenericLink ariaLabel="lualine.nvim" href="https://github.com/nvim-lualine/lualine.nvim" target="_blank">lualine.nvim</GenericLink>
- <GenericLink ariaLabel="nvim-bufferline.lua" href="https://github.com/akinsho/nvim-bufferline.lua" target="_blank">nvim-bufferline.lua</GenericLink>
