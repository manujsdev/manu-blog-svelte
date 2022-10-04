---
slug: config-nvim-with-lua-fuzzy-finder
title: 'Configure Nvim with Lua: Fuzzy finder, Telescope (7)'
datePublished: '2022-10-04'
lastUpdated: '2022-10-04'
excerpt: 'A quick look at the fuzzy finder Telescope plugin'
tags: [{ name: 'Vim/Nvim', background: '#019030' }, { name: 'Lua', background: '#000080' }]
show: true
---

<script>
  import GenericLink from '$lib/components/Link/GenericLink.svelte';
</script>

An important functionality is the search for words in a file. To search for a string:

```vim
  /wordToFind
```

According to the <GenericLink ariaLabel="neovim doc" href="https://neovim.io/doc/user/usr_03.html#03.8" target="_blank">neovim documentation</GenericLink>:

You will notice that when you type the "/" the cursor jumps to the last line of the Vim window, like with colon commands. That is where you type the word _'wordToFind'_. To find the next occurrence of the same string use the "n" command. The "?" command works like "/" but searches backwards:

```vim
  ?wordToFind
```

The "N" command repeats the last search the opposite direction. Thus using "N" after a "/" command searches backwards, using "N" after "?" searches forwards.

Suppose you see the word "TheLongFunctionName" in the text and you want to find the next occurrence of it. You could type "/TheLongFunctionName", but that's a lot of typing. And when you make a mistake Vim won't find it. There is an easier way: Position the cursor on the word and use the "\*" command. Vim will grab the word under the cursor and use it as the search
string. The "#" command does the same in the other direction. You can prepend a count: "3\*" searches for the third occurrence of the word under the cursor.

There is a plugin that provides us with other facilities such as fuzzy search, file search, etc. <GenericLink ariaLabel="telescope.nvim" href="https://github.com/nvim-telescope/telescope.nvim" target="_blank">telescope.nvim</GenericLink> _is a highly extendable fuzzy finder over lists_.

Today, we going to test <GenericLink ariaLabel="telescope.nvim" href="https://github.com/nvim-telescope/telescope.nvim" target="_blank">telescope.nvim</GenericLink>, because it is written in <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua</GenericLink>.

### Use telescope.nvim

1. The first step: we add the plugin <GenericLink ariaLabel="telescope.nvim" href="https://github.com/nvim-telescope/telescope.nvim" target="_blank">telescope.nvim</GenericLink> to the plugins.lua file.

```shell
  nvim lua/configs/plugins.lua
```

2. We add this and save it:

```lua
  -- ...others configs...
  return packer.startup(function(use)
    -- ...others plugins...

    use { 'nvim-telescope/telescope.nvim', tag = '0.1.0'}

    -- ...others configs...
  end)
```

3. To use <GenericLink ariaLabel="telescope.nvim" href="https://github.com/nvim-telescope/telescope.nvim" target="_blank">telescope.nvim</GenericLink>, it requires the <GenericLink ariaLabel="ripgrep" href="https://github.com/BurntSushi/ripgrep" target="_blank">ripgrep</GenericLink>, a line-oriented search tool that recursively searches the current directory for a regex pattern, if you want use _live_grep_. I recommend that you use it.

- To install this package, you should read <GenericLink ariaLabel="telescope.nvim" href="https://github.com/BurntSushi/ripgrep#installation" target="_blank">installation ripgrep documentacion</GenericLink> to execute the command according to the operating system, examples:

- If you're a macOS Homebrew or a Linuxbrew user, then you can install ripgrep from homebrew-core:

```shell
  $ brew install ripgrep
```

- If you're an Arch Linux user, then you can install ripgrep from the official repos:

```shell
  $ pacman -S ripgrep
```

- If you run Debian Buster (currently Debian stable) or Debian sid:

```shell
  $ sudo apt-get install ripgrep
```

- If you're an Ubuntu Cosmic (18.10) (or newer) user, ripgrep is available using the same packaging as Debian:

```shell
  $ sudo apt-get install ripgrep
```

- If you're a Windows Chocolatey user, then you can install ripgrep from the official repo:

```shell
  $ choco install ripgrep
```

- If you're a Windows Scoop user, then you can install ripgrep from the official bucket:

```shell
  $ scoop install ripgrep
```

4. You should install <GenericLink ariaLabel="fd" href="https://github.com/sharkdp/fd" target="_blank">fd</GenericLink>. _fd is a program to find entries in your filesystem. It is a simple, fast and user-friendly alternative to find_.

- If you're a macOS Homebrew or a Linuxbrew user, then you can install ripgrep from homebrew-core:

```shell
  $ brew install fd
```

- If you're an Arch Linux user, then you can install ripgrep from the official repos:

```shell
  $ pacman -S fd
```

- If you run Debian or other Debian-based Linux distributions:

```shell
  $ sudo apt install fd-find
```

- If you're a Windows Chocolatey user, then you can install ripgrep from the official repo:

```shell
  $ choco install fd
```

- If you're a Windows Scoop user, then you can install ripgrep from the official bucket:

```shell
  $ scoop install fd
```

5. Install the packages:

```shell
  :PackerInstall
```

6. Later, we create the telescope file.

```shell
  nvim lua/configs/telescope.lua
```

7. We add this code and save it:

```lua
  local ok, telescope = pcall(require, 'telescope')
  if not ok then
    return
  end

  telescope.setup()
```

8. To use these settings, we need to call the telescope file in the main file (_init.lua_)

```shell
  nvim init.lua
```

- Add this:

```lua
  require('configs.telescope')
```

9. Open the keymaps.lua file (where we are going to put the custom keymaps).

```shell
  nvim lua/configs/keymaps.lua
```

10. Add this:

```lua
  -- ...others keymaps...

  -- Telescope keymaps
  keymap("n", "ff", "<cmd>Telescope find_files<cr>", opts) -- find files
  keymap("n", "fg", "<cmd>Telescope live_grep<cr>", opts)  -- find by words
  keymap("n", "fb", "<cmd>Telescope buffers<cr>", opts)    -- find opened buffers (tabs)

  -- ...others keymaps...
```

And that's it!! You can use Telescope!

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
```

### Conclusion

In this article we learned how to configure <GenericLink ariaLabel="telescope.nvim" href="https://github.com/nvim-telescope/telescope.nvim" target="_blank">telescope.nvim</GenericLink>, a highly extendable fuzzy finder over lists neovim plugin. Now you can use _ff_ to search for files, _fg_ to search for words and _fg_ to search for opened tabs. I hope it will be helpful for those who want to experiment.

### Resources

- <GenericLink ariaLabel="Read about Lua" href="https://www.lua.org/" target="_blank">Lua website</GenericLink>
- <GenericLink ariaLabel="Read about Vim" href="https://www.vim.org/" target="_blank">Vim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim" href="https://neovim.io/" target="_blank">Neovim website</GenericLink>
- <GenericLink ariaLabel="Read about Neovim-Lua" href="https://github.com/nanotee/nvim-lua-guide" target="_blank">Nvim-Lua Guide</GenericLink>
- <GenericLink ariaLabel="telescope.nvim" href="https://github.com/nvim-telescope/telescope.nvim" target="_blank">telescope.nvim</GenericLink>
