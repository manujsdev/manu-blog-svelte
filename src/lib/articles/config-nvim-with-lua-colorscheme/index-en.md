---
slug: config-nvim-with-lua-colorscheme
title: 'Configure Nvim with Lua: Set colorscheme (4)'
datePublished: '2022-09-22'
lastUpdated: '2022-09-22'
excerpt: 'A quick look at the basic vim/nvim configuration, in this case set the colorscheme'
tags: [{ name: 'Vim/Nvim', background: '#019030' }, { name: 'Lua', background: '#000080' }]
show: true
---

<script>
  import GenericLink from '$lib/components/Link/GenericLink.svelte';
</script>

Another of the facilities that Neovim offers is that it has several types of colors, which can be chosen, and can be install plugins with other colorschemes. You can read about color schemes in the documentation:

```shell
  nvim
```

```nvim
  :help colorscheme
```

To change between the different colorscheme that exist we can execute this command:

```vim
  :colorscheme <name>
```

We change _<name>_ to the name you want and you will see how the style changes.

```vim
  :colorscheme darkblue
```

```vim
  :colorscheme industry
```

In this way, we are changing the colors, but when we close neovim and reopen it we will not have the one we chose previously selected. But Neovim provides the possibility for that configuration to persist. Therefore, we will follow these steps:

1. We move to the nvim folder:

```shell
  cd .config/nvim
```

2. Then, we will open the options file (where we have the basic configurations).

```shell
  nvim lua/configs/options/init.lua
```

3. We add this code and save it:

```lua
  local options = {
    -- ...others configs...
    termguicolors = true -- Enables 24-bit RGB color
  }
```

4. Later, we create the colorscheme file.

```shell
  nvim lua/configs/colorscheme.lua
```

5. We add this code and save it:

```lua
  local colorscheme = "gruvbox"
  local ok, _ = pcall(vim.cmd, "colorscheme " .. colorscheme)
  vim.o.background = "dark" -- or "light" for light mode
  if not ok then
    vim.notify("colorscheme " .. colorscheme .. " not found!")
    return
  end
```

- The _colorscheme_ variable defines the name that we are going to assign.
- Then with the command _vim.cmd_ the colorscheme is changed.
- In case the colorscheme does not exist, we show a message on the neovim command line.

6. To use these settings, we need to call the colorscheme file in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  require('configs.colorscheme')
```

- In this case, since the colorscheme _gruvbox_ does not exist, the message will appear. You can try others that come by default such as: darkblue, blue, desert, default, etc.
  I like <GenericLink ariaLabel="gruvbox.nvim" href="https://github.com/ellisonleao/gruvbox.nvim" target="_blank">gruvbox.nvim</GenericLink> and it is the one we are going to configure.

7. Then, we add the plugin <GenericLink ariaLabel="gruvbox.nvim" href="https://github.com/ellisonleao/gruvbox.nvim" target="_blank">gruvbox.nvim</GenericLink> to the plugins.lua file (where we are going to put the plugins to install).

```shell
  nvim lua/configs/plugins.lua
```

8. We add this and save it:

```lua
  -- ...others configs...
  return packer.startup(function(use)
    -- ...others plugins...

    -- My colorscheme`
    use 'ellisonleao/gruvbox.nvim'

    -- ...others configs...
  end)
```

9. Install the packages:

```shell
  :PackerInstall
```

10. Close and open again, and you will see the results...

There are other popular colorschemes, such as:

- <GenericLink ariaLabel="monokai.nvim" href="https://github.com/tanvirtin/monokai.nvim" target="_blank">monokai.nvim</GenericLink>
- <GenericLink ariaLabel="tokyonight.nvim" href="https://github.com/folke/tokyonight.nvim" target="_blank">tokyonight.nvim</GenericLink>
- <GenericLink ariaLabel="nightfox.nvim" href="https://github.com/EdenEast/nightfox.nvim" target="_blank">nightfox.nvim</GenericLink>

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
```

### Conclusion

In this way we saw how the different colorschemes that neovim brings by default can be changed and we also saw how to configure another through a plugin. Now you can test other colorschemes. I hope it will be helpful for those who want to experiment.

### Resources

- <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua website</GenericLink>
- <GenericLink ariaLabel="Read about Vim" href="https://www.vim.org/" target="_blank">Vim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim-Lua" href="https://github.com/nanotee/nvim-lua-guide" target="_blank">Nvim-Lua Guide</GenericLink>
- <GenericLink ariaLabel="gruvbox.nvim" href="https://github.com/ellisonleao/gruvbox.nvim" target="_blank">gruvbox.nvim</GenericLink>
