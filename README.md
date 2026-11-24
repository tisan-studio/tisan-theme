# TISan theme for Claude Code

A dark look for the Claude Code desktop and mobile apps: deep forest-green background, gold accents and cream text.

It colours Claude Code sessions (the Code tab). It does not change the regular Chat, and the terminal draws no themes.

## Install

At the prompt of a terminal Claude Code session:

```
/plugin install tisan-theme --marketplace tisan-studio/tisan-theme
```

Answer `y` to add the marketplace, then press Enter to install for your user.

From a shell:

```
claude plugin install tisan-theme --marketplace tisan-studio/tisan-theme
```

In the desktop app: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `tisan-studio/tisan-theme`, then **Add plugin**.

The theme appears in the next Claude Code session you start.

## Colours

| Role | Colour |
| --- | --- |
| Background | `#0f2419` |
| Cards / panels | `#142d20`, `#193526`, `#1d3b2b` |
| Accent (gold) | `#c9a227` |
| Headings | `#e0c060` |
| Text | `#f3ead6` |
| Secondary text | `#dcd0b5` |
| Muted text | `#b8ab8c` |

To change them, edit `hooks/register.ts`.
