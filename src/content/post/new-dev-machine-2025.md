---
title: New Machine Dev Tools (2025 Edition)
description: I got a new dev machine for the first time in 4 years, here are my stack choices.
publishDate: "2025-03-23"
tags: ["macos", "dev"]
---

I am going through that occasional ritual of setting up a new machine for development after I ran out of disk space and, frequently, memory on my old machine. Some say it was the 162 open Chrome tabs and 16 VS Code workspaces that were the problem, but I say no! New hardware is required. For the record, the new machine is a 16" M4 Pro MBP w/ 48GB RAM.

As I try to do when I get a new machine, I evaluated and picked the various little dev tools I'm going to use to make my life easier. Here, in no particular order, are my picks for 2025 (so far).

### Terminal: [Ghostty](https://ghostty.org/)

This went from zero to no-brainer the moment I tried it (which was on my old machine). Ghostty is faster than iTerm2 and Terminal.app and isn't trying to be more than an excellent terminal. For the record / for fun, here's my tiny Ghostty config:

```
font-family = 0xProto Nerd Font Mono
minimum-contrast = 3
theme = gruvbox-material
window-padding-x = 20
window-padding-y = 20
```

### Shell: ZSH with [oh-my-zsh](https://ohmyz.sh/) via [antigen](https://github.com/zsh-users/antigen)

I took a look at Starship.rs because it was advertised as "super fast" but for whatever raeson that wasn't my experience - the default setup added 300-500ms of latency after a command completed before the prompt reappeared, and that bugged me. I've been using `oh-my-zsh` for nearly a decade and ultimately decided to keep doing so. It's simple, the default config tells me what I want to know. Good enough!

### Editor: [VS Code](https://code.visualstudio.com/)

I've kicked the tires on Cursor but it isn't really compatible (i.e. isn't allowed) for Googlers and it's not better enough for me to pay for it just for personal time fun stuff.

### Color Theme: [Gruvbox Material Dark](https://github.com/sainnhe/gruvbox-material-vscode)

I changed to this one a month or two before I got the new machine and I'm not tired of it yet. I like the warm tones while still getting a nice bit of contrast. Using across both VS Code and Ghostty.

### AI Code Assistant: [Cline](https://cline.bot)

I've spent the most time with Cline and Claude Code, and although Claude Code feels slightly more autonomous I like how well Cline fits into my workflow, the fact that it's fully open source, and that I can use the GCP Claude endpoints and Gemini APIs directly instead of through an untrusted proxy layer.

### Language Version Manager: [mise-en-place](https://mise.jdx.dev/)

This one I took from recommendations on social - it's like `nvm` but works across other languages as well. I spend a fair amount of time with Go (yay!) and Python (sigh) these days, so it's nice to have the flexibility.

### JS Package Manager: [PNPM](https://pnpm.io/)

PNPM should be the default package manager for JS. It's literally 3-4x faster than vanilla NPM and once you start using it it's really hard to go back to the before times.

### Code Font: [0xProto Nerd Font](https://www.programmingfonts.org/#oxproto)

Somehow I had never come across Nerd Fonts before and I 0xProto was a font I hadn't seen either. It feels chunky, readable, and vaguely 80's sci-fi in a way I'm enjoying for the moment.

---

That's what I've landed on so far for the new machine. Any must-have tools I'm missing? Any must-replace alternatives for my picks? Let me know!