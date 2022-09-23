---
slug: config-nvim-with-lua-plugin-package-management
title: 'Configure Nvim with Lua: Plugin/package management (3)'
datePublished: '2022-09-21'
lastUpdated: '2022-09-22'
excerpt: 'A quick look at the basic vim/nvim configuration, in this case with the plugin/package management: Packer'
tags: [{ name: 'Vim/Nvim', background: '#019030' }, { name: 'Lua', background: '#000080' }]
show: true
---

<script>
  import GenericLink from '$lib/components/Link/GenericLink.svelte';
</script>

Nvim supports the installation of plugins, this helps to add functionality to our configuration, to install the plugins we must have a package manager. In this case I have selected <GenericLink ariaLabel="Packer.nvim: plugin/package management" href="https://github.com/wbthomason/packer.nvim" target="_blank">Packer.nvim</GenericLink>, since we are using <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua</GenericLink>.

We can start to create the plugins.lua file.

1. We move to the nvim folder:

```shell
  cd .config/nvim
```

2. Then, we create the plugins.lua file (where we are going to put the configs and plugins to install).

```shell
  nvim lua/configs/plugins.lua
```

3. We add this:

```lua
  local ensure_packer = function()
    local fn = vim.fn
    local install_path = fn.stdpath('data')..'/site/pack/packer/start/packer.nvim'
    if fn.empty(fn.glob(install_path)) > 0 then
      fn.system({'git', 'clone', '--depth', '1', 'https://github.com/wbthomason/packer.nvim', install_path})
      vim.cmd [[packadd packer.nvim]]
      return true
    end
    return false
  end

  local packer_bootstrap = ensure_packer()

  vim.cmd([[
    augroup packer_user_config
    autocmd!
    autocmd BufWritePost plugins.lua source <afile> | PackerCompile
    augroup end
  ]])

  local ok, packer = pcall(require, 'packer')
  if not ok then
    return
  end

  packer.init({
    display = {
      open_fn = function()
        return require('packer.util').float({ border = 'rounded' }) -- Using a floating window
      end
    }
  })

  return packer.startup(function(use)
    use 'wbthomason/packer.nvim'
    -- My plugins here
    use "nvim-lua/plenary.nvim" -- used by telescope, gitsigns, vgit, neogit, neo-tree.
    use 'lewis6991/impatient.nvim'

    -- Automatically set up your configuration after cloning packer.nvim
    -- Put this at the end after all plugins
    if packer_bootstrap then
      require('packer').sync()
    end
  end)
```

1. _ensure_packer_ function is for download packer.
2. _vim.cmd([[autogroup...]])_ is for configure Neovim to automatically run _:PackerCompile_ whenever _plugins.lua_ is updated.
3. To prevent unexpected errors you can use _pcall()_.
4. _packer.init(_ is for custom initialization, in this case, I configured Packer to use a floating window for command outputs.
5. The last section: _return packer.startup(function(use)..._ is where add plugins.

Also, I installed <GenericLink ariaLabel="Plenary.nvim" href="https://github.com/nvim-lua/plenary.nvim" target="_blank">Plenary.nvim</GenericLink>, a useful lua functions used in lots of plugins, example:

- <GenericLink ariaLabel="telescope.nvim" href="https://github.com/nvim-telescope/telescope.nvim" target="_blank">telescope.nvim</GenericLink>
- <GenericLink ariaLabel="titsigns.nvim" href="https://github.com/lewis6991/gitsigns.nvim" target="_blank">gitsigns.nvim</GenericLink>
- <GenericLink ariaLabel="vgit.nvim" href="https://github.com/tanvirtin/vgit.nvim" target="_blank">vgit.nvim</GenericLink>
- <GenericLink ariaLabel="neogit" href="https://github.com/TimUntersberger/neogit" target="_blank">neogit</GenericLink>
- <GenericLink ariaLabel="neo-tree.nvim" href="https://github.com/nvim-neo-tree/neo-tree.nvim" target="_blank">neo-tree.nvim</GenericLink>

I installed another important plugin: <GenericLink ariaLabel="impatient.nvim" href="https://github.com/lewis6991/impatient.nvim" target="_blank">impatient.nvim</GenericLink>. This plugin _"Speed up loading Lua modules in Neovim to improve startup time"_. You can verify the <GenericLink ariaLabel="impatient.nvim" href="https://github.com/lewis6991/impatient.nvim#performance-example" target="_blank">impatient.nvim performance</GenericLink>

1. To configure this plugin:

```shell
  nvim lua/configs/impatient.lua
```

2. Add this content:

```lua
  local ok, impatient = pcall(require, "impatient")
  if not ok then
    return
  end

  impatient.enable_profile()
```

3. Lastly, to use impatient, we need to call the impatient file in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  require('configs.impatient')
```

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
```

### Conclusion

Now you can install the plugins as you prefer. In next articles we will see some plugins that will help us to configure Nvim as our IDE. I hope it will be helpful for those who want to experiment.

### Resources

- <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua website</GenericLink>
- <GenericLink ariaLabel="Read about Vim" href="https://www.vim.org/" target="_blank">Vim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim-Lua" href="https://github.com/nanotee/nvim-lua-guide" target="_blank">Nvim-Lua Guide</GenericLink>
- <GenericLink ariaLabel="Packer.nvim: plugin/package management" href="https://github.com/wbthomason/packer.nvim" target="_blank">Packer.nvim</GenericLink>
