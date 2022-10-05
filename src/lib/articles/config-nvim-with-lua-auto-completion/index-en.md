---
slug: config-nvim-with-lua-auto-completion
title: 'Configure Nvim with Lua: auto completion, Cmp, treesitter and lsp (8)'
datePublished: '2022-10-05'
lastUpdated: '2022-10-05'
excerpt: 'A quick look at the auto completion, Cmp, treesitter and lsp'
tags: [{ name: 'Vim/Nvim', background: '#019030' }, { name: 'Lua', background: '#000080' }]
show: false
---

<script>
  import GenericLink from '$lib/components/Link/GenericLink.svelte';
</script>

An important functionality in an IDE is the autocompletion and the highlight code, in Neovim we have plugins for this. Neovim supports <GenericLink ariaLabel="lsp" href="https://microsoft.github.io/language-server-protocol/" target="_blank">LSP</GenericLink> (Language Server Protocol). So, in this article we see how install and configure <GenericLink ariaLabel="nvim-cmp" href="https://github.com/hrsh7th/nvim-cmp" target="_blank">nvim-cmp</GenericLink>, a completion engine plugin for neovim written in Lua. <GenericLink ariaLabel="nvim-lspconfig" href="https://github.com/neovim/nvim-lspconfig" target="_blank">nvim-lspconfig</GenericLink>, an LSP client, and <GenericLink ariaLabel="nvim-treesitter" href="https://github.com/nvim-treesitter/nvim-treesitter" target="_blank">nvim-treesitter</GenericLink>, a plugin to provide some basic functionality such as highlighting.

- We move to the nvim folder:

```shell
  cd .config/nvim
```

### Install and configure nvim-cmp.nvim

1. The first step: we add the plugin <GenericLink ariaLabel="nvim-cmp" href="https://github.com/hrsh7th/nvim-cmp" target="_blank">nvim-cmp</GenericLink> to the plugins.lua file, with others plugins.

```shell
  nvim lua/configs/plugins.lua
```

2. We add this and save it:

```lua
  -- ...others configs...
  return packer.startup(function(use)
    -- ...others plugins...

    use {
      'hrsh7th/nvim-cmp',
      requires = {
        "hrsh7th/cmp-buffer",
        "hrsh7th/cmp-nvim-lsp",
        "hrsh7th/cmp-path",
        "hrsh7th/cmp-nvim-lua",
        "onsails/lspkind-nvim",
        'hrsh7th/cmp-vsnip',
        'hrsh7th/vim-vsnip',
        'saadparwaiz1/cmp_luasnip',
        "L3MON4D3/LuaSnip",
        'rafamadriz/friendly-snippets'
      }
    }

    -- ...others configs...
  end)
```

3. Install the packages:

```shell
  :PackerInstall
```

4. Later, we create the cmp file.

```shell
  nvim lua/configs/cmp.lua
```

5. We add this code and save it:

```lua
  local cmp_ok, cmp = pcall(require, "cmp")
  if not cmp_ok then
    return
  end

  local snip_ok, luasnip = pcall(require, "luasnip")
  if not snip_ok then
    return
  end

  -- Vscode-like: To use existing vs-code style snippets from a plugin (eg. rafamadriz/friendly-snippets) simply install the plugin and then add
  require("luasnip.loaders.from_vscode").lazy_load()

  --   פּ ﯟ   some other good icons
  local kind_icons = {
    Text = "",
    Method = "m",
    Function = "",
    Constructor = "",
    Field = "",
    Variable = "",
    Class = "",
    Interface = "",
    Module = "",
    Property = "",
    Unit = "",
    Value = "",
    Enum = "",
    Keyword = "",
    Snippet = "",
    Color = "",
    File = "",
    Reference = "",
    Folder = "",
    EnumMember = "",
    Constant = "",
    Struct = "",
    Event = "",
    Operator = "",
    TypeParameter = "",
  }

  cmp.setup({
      snippet = {
        -- REQUIRED - you must specify a snippet engine
        expand = function(args)
        --  vim.fn["vsnip#anonymous"](args.body) -- For `vsnip` users.
          luasnip.lsp_expand(args.body) -- For `luasnip` users.
        end
      },
      window = {
        completion = cmp.config.window.bordered(),
      },
      mapping = cmp.mapping.preset.insert({
        ['<C-b>'] = cmp.mapping.scroll_docs(-4),
        ['<C-f>'] = cmp.mapping.scroll_docs(4),
        ['<C-Space>'] = cmp.mapping.complete(),
        ['<C-e>'] = cmp.mapping.abort(),
        ['<CR>'] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.
      }),
      formatting = {
        fields = { "kind", "abbr", "menu" },
        format = function(entry, vim_item)
          -- Kind icons
          vim_item.kind = string.format("%s %s", kind_icons[vim_item.kind], vim_item.kind)
          vim_item.menu = ({
            nvim_lsp = "[LSP]",
            nvim_lua = "[NVIM_LUA]",
            luasnip = "[Snippet]",
            buffer = "[Buffer]",
            path = "[Path]",
          })[entry.source.name]
          return vim_item
        end,
      },
      sources = cmp.config.sources({
        { name = 'vsnip' }, -- For vsnip users.
        { name = 'luasnip' }, -- For luasnip users.
        { name = "buffer" },
        { name = "path" },
        { name = 'cmdline' },
        { name = 'nvim_lsp' },
        { name = 'nvim_lua' }
      }, {
        { name = 'buffer' },
      })
    })
```

6. To use these settings, we need to call the cmp file in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  require('configs.cmp')
```

### Install and configure nvim-lspconfig

1. The first step: we add the plugin <GenericLink ariaLabel="nvim-lspconfig" href="https://github.com/neovim/nvim-lspconfig" target="_blank">nvim-lspconfig</GenericLink> to the plugins.lua file.

```shell
  nvim lua/configs/plugins.lua
```

2. We add this and save it:

```lua
  -- ...others configs...
  return packer.startup(function(use)
    -- ...others plugins...

    -- LSP
   use {
      "williamboman/mason.nvim",
      "williamboman/mason-lspconfig.nvim",
      "neovim/nvim-lspconfig",
   }

    -- ...others configs...
  end)
```

- Here, we are use <GenericLink ariaLabel="mason-lspconfig.nvim" href="https://github.com/williamboman/mason-lspconfig.nvim" target="_blank">mason-lspconfig.nvim</GenericLink> a Neovim plugin that allows you to easily manage external editor tooling such as LSP servers.

3. Install the packages:

```shell
  :PackerInstall
```

- In my case only install lua, svelte, typescript and css LSP, but you are free to install others from <GenericLink ariaLabel="lsp servers" href="https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#configurations" target="_blank">lsp server configurations</GenericLink>

- For Lua:

```shell
  :LspInstall sumneko_lua
```

- For typescript:

```shell
  npm install -g typescript typescript-language-server
```

- In Neovim:

```shell
  :LspInstall tsserver
```

- For svelte:

```shell
  npm install -g svelte-language-server
```

- In Neovim:

```shell
  :LspInstall svelte
```

- For css:

```shell
  npm i -g vscode-langservers-extracted
```

- In Neovim:

```shell
  :LspInstall cssls
```

4. Later, we create the lsp file.

```shell
  nvim lua/configs/lsp.lua
```

5. We add this code and save it:

```lua
  local ok, mason = pcall(require, 'mason')
  if not ok then
    return
  end

  local ok_mason_lsp, mason_lspconfig = pcall(require, 'mason-lspconfig')
  if not ok_mason_lsp then
    return
  end

  local ok_lsp, lspconfig = pcall(require, 'lspconfig')
  if not ok_lsp then
    return
  end

  -- Mappings.
  -- See `:help vim.diagnostic.*` for documentation on any of the below functions
  local opts = { noremap=true, silent=true }
  vim.keymap.set('n', '<space>e', vim.diagnostic.open_float, opts)
  vim.keymap.set('n', '[d', vim.diagnostic.goto_prev, opts)
  vim.keymap.set('n', ']d', vim.diagnostic.goto_next, opts)
  vim.keymap.set('n', '<space>q', vim.diagnostic.setloclist, opts)

  -- Use an on_attach function to only map the following keys
  -- after the language server attaches to the current buffer
  local on_attach = function(client, bufnr)
    -- Enable completion triggered by <c-x><c-o>
    vim.api.nvim_buf_set_option(bufnr, 'omnifunc', 'v:lua.vim.lsp.omnifunc')

    -- Mappings.
    -- See `:help vim.lsp.*` for documentation on any of the below functions
    local bufopts = { noremap=true, silent=true, buffer=bufnr }
    vim.keymap.set('n', 'gD', vim.lsp.buf.declaration, bufopts)
    vim.keymap.set('n', 'gd', vim.lsp.buf.definition, bufopts)
    vim.keymap.set('n', 'K', vim.lsp.buf.hover, bufopts)
    vim.keymap.set('n', 'gi', vim.lsp.buf.implementation, bufopts)
    vim.keymap.set('n', '<C-k>', vim.lsp.buf.signature_help, bufopts)
    vim.keymap.set('n', '<space>wa', vim.lsp.buf.add_workspace_folder, bufopts)
    vim.keymap.set('n', '<space>wr', vim.lsp.buf.remove_workspace_folder, bufopts)
    vim.keymap.set('n', '<space>wl', function()
      print(vim.inspect(vim.lsp.buf.list_workspace_folders()))
    end, bufopts)
    vim.keymap.set('n', '<space>D', vim.lsp.buf.type_definition, bufopts)
    vim.keymap.set('n', '<space>rn', vim.lsp.buf.rename, bufopts)
    vim.keymap.set('n', '<space>ca', vim.lsp.buf.code_action, bufopts)
    vim.keymap.set('n', 'gr', vim.lsp.buf.references, bufopts)
    vim.keymap.set('n', '<space>f', function() vim.lsp.buf.format { async = true } end, bufopts)
  end

  local lsp_flags = {
    -- This is the default in Nvim 0.7+
    debounce_text_changes = 150,
  }


  mason.setup()
  mason_lspconfig.setup({
      ensure_installed = { "sumneko_lua" }
  })
  -- config for Lua
  lspconfig.sumneko_lua.setup {
    on_attach = on_attach,
    flags = lsp_flags,
    settings = {
      Lua = {
        runtime = {
          -- Tell the language server which version of Lua you're using (most likely LuaJIT in the case of Neovim)
          version = 'LuaJIT',
        },
        diagnostics = {
          -- Get the language server to recognize the `vim` global
          globals = {'vim'},
        },
        workspace = {
          -- Make the server aware of Neovim runtime files
          library = vim.api.nvim_get_runtime_file("", true),
        },
        -- Do not send telemetry data containing a randomized but unique identifier
        telemetry = {
          enable = false,
        },
      },
    },
  }

  -- config for typescript
  lspconfig.tsserver.setup{
    on_attach = on_attach,
    flags = lsp_flags,
  }
  -- config for svelte
  lspconfig.svelte.setup{
    on_attach = on_attach,
    flags = lsp_flags,
  }

```

6. To use these settings, we need to call the cmp file in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  require('configs.lsp')
```

Note: With _gd_ you go to method definition.

### Install and configure nvim-treesitter

1. The first step: we add the plugin <GenericLink ariaLabel="nvim-treesitter" href="https://github.com/nvim-treesitter/nvim-treesitter" target="_blank">nvim-treesitter</GenericLink> to the plugins.lua file.

```shell
  nvim lua/configs/plugins.lua
```

2. We add this and save it:

```lua
  -- ...others configs...
  return packer.startup(function(use)
    -- ...others plugins...

    -- Treesitter
   use {
      'nvim-treesitter/nvim-treesitter',
      run = function() require('nvim-treesitter.install').update({ with_sync = true }) end,
    }
   use "p00f/nvim-ts-rainbow"
   use "nvim-treesitter/playground"

    -- ...others configs...
  end)
```

3. Install the packages:

```shell
  :PackerInstall
```

- In my case only install lua, svelte, typescript and css highlighting, but you are free to install others from <GenericLink ariaLabel="treesitter supported-languages" href="https://github.com/nvim-treesitter/nvim-treesitter#supported-languages" target="_blank">supported languages</GenericLink>

- For Lua:

```shell
  :TSInstall lua
```

- For typescript:

```shell
  :TSInstall typescript
```

- For svelte:

```shell
  :TSInstall svelte
```

- For css:

```shell
  :TSInstall css
```

4. Later, we create the treesitter file.

```shell
  nvim lua/configs/treesitter.lua
```

5. We add this code and save it:

```lua
  local ok, configs = pcall(require, 'nvim-treesitter.configs')

  if not ok then
    return
  end

  configs.setup({
    ensure_installed = {
      'lua',
      'typescript',
      'svelte',
      'css'
    },
    highlight = {
      enable = true,
      -- Setting this to true will run `:h syntax` and tree-sitter at the same time.
      -- Set this to `true` if you depend on 'syntax' being enabled (like for indentation).
      -- Using this option may slow down your editor, and you may see some duplicate highlights.
      -- Instead of true it can also be a list of languages
      additional_vim_regex_highlighting = false,
    },
    rainbow = {
      enable = true,
      -- disable = { "jsx", "cpp" }, list of languages you want to disable the plugin for
      extended_mode = true, -- Also highlight non-bracket delimiters like html tags, boolean or table: lang -> boolean
      max_file_lines = nil, -- Do not enable for files with more than n lines, int
      -- colors = {}, -- table of hex strings
      -- termcolors = {} -- table of colour name strings
    },
    playground = {
      enable = true,
      disable = {},
      updatetime = 25, -- Debounced time for highlighting nodes in the playground from source code
      persist_queries = false, -- Whether the query persists across vim sessions
      keybindings = {
        toggle_query_editor = 'o',
        toggle_hl_groups = 'i',
        toggle_injected_languages = 't',
        toggle_anonymous_nodes = 'a',
        toggle_language_display = 'I',
        focus_language = 'f',
        unfocus_language = 'F',
        update = 'R',
        goto_node = '<cr>',
        show_help = '?',
      },
    }
  })
```

6. To use these settings, we need to call the cmp file in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  require('configs.treesitter')
```

And that's it!! You can use Cmp, Lsp Config and Treesitter for autocompletion and highlighting the code.

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
        └─ telescope.lua
        └─ cmp.lua
        └─ lsp.lua
        └─ treesitter.lua
```

### Conclusion

In this article we learned how to install and configure <GenericLink ariaLabel="nvim-cmp" href="https://github.com/hrsh7th/nvim-cmp" target="_blank">nvim-cmp</GenericLink>, a completion engine plugin for neovim written in Lua. <GenericLink ariaLabel="nvim-lspconfig" href="https://github.com/neovim/nvim-lspconfig" target="_blank">nvim-lspconfig</GenericLink>, an LSP client, and <GenericLink ariaLabel="nvim-treesitter" href="https://github.com/nvim-treesitter/nvim-treesitter" target="_blank">nvim-treesitter</GenericLink>, a plugin to provide some basic functionality such as highlighting.. I hope it will be helpful for those who want to experiment.

### Resources

- <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua website</GenericLink>
- <GenericLink ariaLabel="Read about Vim" href="https://www.vim.org/" target="_blank">Vim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim-Lua" href="https://github.com/nanotee/nvim-lua-guide" target="_blank">Nvim-Lua Guide</GenericLink>
- <GenericLink ariaLabel="nvim-cmp" href="https://github.com/hrsh7th/nvim-cmp" target="_blank">nvim-cmp</GenericLink>
- <GenericLink ariaLabel="nvim-lspconfig" href="https://github.com/neovim/nvim-lspconfig" target="_blank">nvim-lspconfig</GenericLink>
- <GenericLink ariaLabel="nvim-treesitter" href="https://github.com/nvim-treesitter/nvim-treesitter" target="_blank">nvim-treesitter</GenericLink>
- <GenericLink ariaLabel="lsp" href="https://microsoft.github.io/language-server-protocol/" target="_blank">LSP</GenericLink>
