---
slug: config-nvim-with-lua-add-other-features
title: 'Configure Nvim with Lua: Add other features (10)'
datePublished: '2022-10-17'
lastUpdated: '2022-10-17'
excerpt: 'A quick look at other features'
tags: [{ name: 'Vim/Nvim', background: '#019030' }, { name: 'Lua', background: '#000080' }]
show: true
---

<script>
  import GenericLink from '$lib/components/Link/GenericLink.svelte';
</script>

Today we going to see a some plugins that provide us with excellent features, we going to see how to configure:

- Pairings for "", '', [], (), etc.
- Color highlighter.
- Indentation guides to all lines.
- To format code.

```shell
  cd .config/nvim
```

### Install and configure the plugins

You can see some plugins here <GenericLink ariaLabel="awesome-neovim" href="https://github.com/rockerBOO/awesome-neovim#plugin">awesome-neovim</GenericLink>. I selected this plugins:

- <GenericLink ariaLabel="nvim-autopairs" href="https://github.com/windwp/nvim-autopairs">nvim-autopairs</GenericLink>
- <GenericLink ariaLabel="nvim-colorizer.lua" href="https://github.com/norcalli/nvim-colorizer.lua">nvim-colorizer.lua</GenericLink>
- <GenericLink ariaLabel="indent-blankline.nvim" href="https://github.com/lukas-reineke/indent-blankline.nvim">indent-blankline.nvim</GenericLink>
- <GenericLink ariaLabel="null-ls.nvim" href="https://github.com/jose-elias-alvarez/null-ls.nvim">null-ls.nvim</GenericLink>

1. The first step: we add the plugins to the plugins.lua file.

```shell
  nvim lua/configs/plugins.lua
```

2. We add this and save it:

```lua
  -- ...others configs...
  return packer.startup(function(use)
    -- ...others plugins...

    -- Utils
    use("windwp/nvim-autopairs") -- "", '', {}, [], ()
    use("norcalli/nvim-colorizer.lua") -- colorizer the colors
    use("lukas-reineke/indent-blankline.nvim") --  adds indentation guides to all lines (including empty lines)
    use("jose-elias-alvarez/null-ls.nvim")
     -- ...others configs...
  end)
```

3. Install the packages:

```shell
  :PackerInstall
```

4. Later, we create the nvim-autopairs file.

```shell
  nvim lua/configs/nvim-autopairs.lua
```

5. We add this code and save it:

```lua
  local ok, nvim_autopairs = pcall(require, "nvim-autopairs")
  if not ok then
    return
  end

  nvim_autopairs.setup({
    fast_wrap = {
      map = "<M-e>",
      chars = { "{", "[", "(", '"', "'" },
      pattern = [=[[%'%"%)%>%]%)%}%,]]=],
      end_key = "$",
      keys = "qwertyuiopzxcvbnmasdfghjkl",
      check_comma = true,
      highlight = "Search",
      highlight_grey = "Comment",
    },
  })
```

6. We create the nvim-colorizer file.

```shell
  nvim lua/configs/nvim-colorizer.lua
```

7. We add this code and save it:

```lua
  local ok, colorizer = pcall(require, "colorizer")
  if not ok then
    return
  end

  -- you can add other filetypes
  colorizer.setup({
    "scss",
    "css",
    "html",
    "javascript",
    "typescript",
    "svelte",
    html = {
      mode = "foreground",
    },
  })
```

6. We create the indent_blankline file.

```shell
  nvim lua/configs/indent-blankline.lua
```

7. We add this code and save it:

```lua
  local ok, indent_blankline = pcall(require, "indent_blankline")
  if not ok then
    return
  end

  indent_blankline.setup({
    show_current_context = true,
  })
```

8. We create the null-ls file.

```shell
  nvim lua/configs/null-ls.lua
```

9. We add this code and save it:

```lua
  local ok, null_ls = pcall(require, "null-ls")
  if not ok then
    return
  end

  local formatting = null_ls.builtins.formatting
  local augroup = vim.api.nvim_create_augroup("LspFormatting", {})

  null_ls.setup({
    sources = {
      formatting.stylua,
      formatting.prettier.with({
        filetypes = {
          "html",
          "json",
          "yaml",
          "markdown",
          "md",
          "svelte",
          "javascript",
          "typescript",
          "css",
          "scss",
        },
      }),
    },
    -- you can reuse a shared lspconfig on_attach callback here
    on_attach = function(client, bufnr)
      if client.supports_method("textDocument/formatting") then
        vim.api.nvim_clear_autocmds({ group = augroup, buffer = bufnr })
        vim.api.nvim_create_autocmd("BufWritePre", {
          group = augroup,
          buffer = bufnr,
          callback = function()
            vim.lsp.buf.format({ bufnr = bufnr }) -- this is for 0.8v
            -- vim.lsp.buf.formatting_sync() -- you should use this for 0.7 or minor
          end,
        })
      end
    end,
  })

```

- In my case only use formatting for lua and prettier. You should install this:

- For Lua (you can review how install this package in your OS):

```shell
  brew install stylua
```

- For prettier:

```shell
  npm install -g prettier
```

10. To use these settings, we need to call the configurations files in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  -- ...
  require("configs.nvim-autopairs")
  require("configs.nvim-colorizer")
  require("configs.indent-blankline")
  require("configs.null-ls")
```

And that's it!! You have already configured other functionalities. Now, you can enjoy greater comfort when working.

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
    └─ nvim-autopairs.lua
    └─ nvim-colorizer.lua
    └─ indent-blankline.lua
    └─ null-ls.lua

```

### Conclusion

In this article we learned how to install and configure the plugins to improve our comfort when working.

### Resources

- <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua website</GenericLink>
- <GenericLink ariaLabel="Read about Vim" href="https://www.vim.org/" target="_blank">Vim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim-Lua" href="https://github.com/nanotee/nvim-lua-guide" target="_blank">Nvim-Lua Guide</GenericLink>
- <GenericLink ariaLabel="nvim-autopairs" href="https://github.com/windwp/nvim-autopairs">nvim-autopairs</GenericLink>
- <GenericLink ariaLabel="nvim-colorizer.lua" href="https://github.com/norcalli/nvim-colorizer.lua">nvim-colorizer.lua</GenericLink>
- <GenericLink ariaLabel="indent-blankline.nvim" href="https://github.com/lukas-reineke/indent-blankline.nvim">indent-blankline.nvim</GenericLink>
- <GenericLink ariaLabel="null-ls.nvim" href="https://github.com/jose-elias-alvarez/null-ls.nvim">null-ls.nvim</GenericLink>
- <GenericLink ariaLabel="awesome-neovim" href="https://github.com/rockerBOO/awesome-neovim#plugin">awesome-neovim</GenericLink>
