---
slug: config-nvim-with-lua-finish-my-ide
title: 'Configure Nvim with Lua: Finish my IDE, git, project (9)'
datePublished: '2022-10-14'
lastUpdated: '2022-10-14'
excerpt: 'A quick look at the git and project plugins'
tags: [{ name: 'Vim/Nvim', background: '#019030' }, { name: 'Lua', background: '#000080' }]
show: true
---

<script>
  import GenericLink from '$lib/components/Link/GenericLink.svelte';
</script>

In others articles we saw how to configure <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim</GenericLink> from basic configuration to autocompletion. Today, we going to see how configure for git features and other features like IDEs.
To configure our <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim</GenericLink> we move to the nvim folder:

```shell
  cd .config/nvim
```

### Install and configure gitsigns.nvim and diffview.nvim

An important plugin, with 2.1k stars is <GenericLink ariaLabel="gitsigns.nvim" href="https://github.com/lewis6991/gitsigns.nvim" target="_blank">gitsigns.nvim</GenericLink>, this plugin have this features:

- Signs for added, removed, and changed lines
- Asynchronous using luv
- Preview diffs of hunks (with word diff)
- Customisable (signs, highlights, mappings, etc)
- Status bar integration
- Git blame a specific line using virtual text.
- Automatically follow files moved in the index.

Other important plugin, with 1.5k stars is <GenericLink ariaLabel="diffview.nvim" href="https://github.com/sindrets/diffview.nvim" target="_blank">diffview.nvim</GenericLink>.

1. The first step: we add the plugins <GenericLink ariaLabel="gitsigns.nvim" href="https://github.com/lewis6991/gitsigns.nvim" target="_blank">gitsigns.nvim</GenericLink> and <GenericLink ariaLabel="diffview.nvim" href="https://github.com/sindrets/diffview.nvim" target="_blank">diffview.nvim</GenericLink> to the plugins.lua file, with others plugins.

```shell
  nvim lua/configs/plugins.lua
```

2. We add this and save it:

```lua
  -- ...others configs...
  return packer.startup(function(use)
    -- ...others plugins...

    -- Git
    use 'lewis6991/gitsigns.nvim'
    use { 'sindrets/diffview.nvim', requires = 'nvim-lua/plenary.nvim' }

    -- ...others configs...
  end)
```

3. Install the packages:

```shell
  :PackerInstall
```

4. Later, we create the gitsigns file.

```shell
  nvim lua/configs/gitsigns.lua
```

5. We add this code and save it:

```lua
  local ok, gitsigns = pcall(require, 'gitsigns')

  if not ok then
    return
  end

  gitsigns.setup {
    signs = {
      add = { hl = "GitSignsAdd", text = "+", numhl = "GitSignsAddNr", linehl = "GitSignsAddLn" },
      change = { hl = "GitSignsChange", text = "~", numhl = "GitSignsChangeNr", linehl = "GitSignsChangeLn" },
      delete = { hl = "GitSignsDelete", text = "-", numhl = "GitSignsDeleteNr", linehl = "GitSignsDeleteLn" },
      topdelete = { hl = "GitSignsDelete", text = "契", numhl = "GitSignsDeleteNr", linehl = "GitSignsDeleteLn" },
      changedelete = { hl = "GitSignsChange", text = "▎", numhl = "GitSignsChangeNr", linehl = "GitSignsChangeLn" },
    },
    signcolumn = true, -- Toggle with `:Gitsigns toggle_signs`
    numhl = false, -- Toggle with `:Gitsigns toggle_numhl`
    linehl = false, -- Toggle with `:Gitsigns toggle_linehl`
    word_diff = false, -- Toggle with `:Gitsigns toggle_word_diff`
    watch_gitdir = {
      interval = 1000,
      follow_files = true,
    },
    attach_to_untracked = true,
    current_line_blame = true, -- Toggle with `:Gitsigns toggle_current_line_blame`
    current_line_blame_opts = {
      virt_text = true,
      virt_text_pos = "eol", -- 'eol' | 'overlay' | 'right_align'
      delay = 1000,
      ignore_whitespace = false,
    },
    current_line_blame_formatter_opts = {
      relative_time = false,
    },
    sign_priority = 6,
    update_debounce = 100,
    status_formatter = nil, -- Use default
    max_file_length = 40000,
    preview_config = {
      -- Options passed to nvim_open_win
      border = "single",
      style = "minimal",
      relative = "cursor",
      row = 0,
      col = 1,
    },
    yadm = {
      enable = false,
    },
  }
```

6. Later, we create the diffview file.

```shell
  nvim lua/configs/diffview.lua
```

7. We add this code and save it:

```lua
  local ok, diffview = pcall(require, 'diffview')

  if not ok then
    return
  end

  diffview.setup({})

```

8. To use these settings, we need to call the gitsigns and diffview files in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  -- ...
  require('configs.gitsigns')
  require('configs.diffview')
```

You can see now if you have changes in your files, if your add new lines, if your delete, etc. With <GenericLink ariaLabel="diffview.nvim" href="https://github.com/sindrets/diffview.nvim" target="_blank">diffview.nvim</GenericLink> you can see the diff with other commits and _opening a diff view during a merge or a rebase will list the conflicted files in their own section_.
Get started by opening file history for:

- The current branch: :DiffviewFileHistory
- The current file: :DiffviewFileHistory %
- For more info, see :h :DiffviewFileHistory.

In the documentation, you can read more.

### Install and configure alpha-nvim and project.nvim

On the other hand, we need to configure a plugin to load the projects, also we need configure a visual interface for the first actions when opening the Neovim. For this, we going to install and configure <GenericLink ariaLabel="alpha-nvim" href="https://github.com/goolord/alpha-nvim" target="_blank">alpha-nvim</GenericLink>, a _fast and fully programmable greeter for neovim_ and <GenericLink ariaLabel="project.nvim" href="https://github.com/ahmedkhalf/project.nvim" target="_blank">project.nvim</GenericLink>, that provides superior project management.

1. The first step: we add the plugin <GenericLink ariaLabel="nvim-lspconfig" href="https://github.com/neovim/nvim-lspconfig" target="_blank">nvim-lspconfig</GenericLink> to the plugins.lua file.

```shell
  nvim lua/configs/plugins.lua
```

2. We add this and save it:

```lua
  -- ...others configs...
  return packer.startup(function(use)
    -- ...others plugins...

    -- Project
    use "ahmedkhalf/project.nvim"
    use 'goolord/alpha-nvim'

    -- ...others configs...
  end)
```

3. Install the packages:

```shell
  :PackerInstall
```

4. Later, we create the project file.

```shell
  nvim lua/configs/project.lua
```

5. We add this code and save it:

```lua
  local ok, project = pcall(require, 'project_nvim')
  if not ok then
    return
  end

  project.setup({})

  local ok_telescope, telescope = pcall(require, 'telescope')
  if not ok_telescope then
    return
  end

  telescope.load_extension('projects')
```

6. Later, we create the alpha file.

```shell
  nvim lua/configs/alpha.lua
```

7. We add this code and save it:

```lua
  local ok, alpha = pcall(require, 'alpha')

  if not ok then
    return
  end

  local ok_dashboard, dashboard = pcall(require, 'alpha.themes.dashboard')

  if not ok_dashboard then
    return
  end

  -- Set header
  dashboard.section.header.val = {
      "                                                     ",
      "  ███╗   ██╗███████╗ ██████╗ ██╗   ██╗██╗███╗   ███╗ ",
      "  ████╗  ██║██╔════╝██╔═══██╗██║   ██║██║████╗ ████║ ",
      "  ██╔██╗ ██║█████╗  ██║   ██║██║   ██║██║██╔████╔██║ ",
      "  ██║╚██╗██║██╔══╝  ██║   ██║╚██╗ ██╔╝██║██║╚██╔╝██║ ",
      "  ██║ ╚████║███████╗╚██████╔╝ ╚████╔╝ ██║██║ ╚═╝ ██║ ",
      "  ╚═╝  ╚═══╝╚══════╝ ╚═════╝   ╚═══╝  ╚═╝╚═╝     ╚═╝ ",
      "                                                     "
  }

  -- Set menu
  dashboard.section.buttons.val = {
    dashboard.button("a", "  > New file" , ":ene <BAR> startinsert <CR>"),
    dashboard.button("ff", "  > Find file", ":Telescope find_files<CR>"),
    dashboard.button("r", "  Recently used files", ":Telescope oldfiles <CR>"),
    dashboard.button("fg", "  Find text", ":Telescope live_grep <CR>"),
    dashboard.button("p", "  Find project", ":Telescope projects <CR>"),
    dashboard.button("c", "  Settings", ":e ~/.config/nvim/init.lua <CR>"),
    dashboard.button("q", "  Quit Neovim", ":qa<CR>"),
  }

  -- Send config to alpha
  alpha.setup(dashboard.opts)

  -- Disable folding on alpha buffer
  vim.cmd([[
      autocmd FileType alpha setlocal nofoldenable
  ]])
```

8. To use these settings, we need to call the project and alpha files in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  -- ...
  require('configs.project')
  require('configs.alpha')
```

And that's it!! You can use a greeter for your IDE, manage your projects and you can see the signs in the files changes.

### Directory

We have the directory of folders like this:

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
    └─ telescope.lua
    └─ cmp.lua
    └─ lsp.lua
    └─ treesitter.lua
    └─ gitsigns.lua
    └─ diffview.lua
    └─ project.lua
    └─ alpha.lua
```

### Conclusion

In this article we learned how to install and configure the plugins for manage the projects and the gitsigns features.

### Resources

- <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua website</GenericLink>
- <GenericLink ariaLabel="Read about Vim" href="https://www.vim.org/" target="_blank">Vim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim-Lua" href="https://github.com/nanotee/nvim-lua-guide" target="_blank">Nvim-Lua Guide</GenericLink>
- <GenericLink ariaLabel="gitsigns.nvim" href="https://github.com/lewis6991/gitsigns.nvim" target="_blank">gitsigns.nvim</GenericLink>
- <GenericLink ariaLabel="diffview.nvim" href="https://github.com/sindrets/diffview.nvim" target="_blank">diffview.nvim</GenericLink>
- <GenericLink ariaLabel="alpha-nvim" href="https://github.com/goolord/alpha-nvim" target="_blank">alpha-nvim</GenericLink>
- <GenericLink ariaLabel="project.nvim" href="https://github.com/ahmedkhalf/project.nvim" target="_blank">project.nvim</GenericLink>
