import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// TISan: deep forest green ground, gold accents, cream text. Dark only.
const { theme, problems } = makeColors({
  label: 'TISan',
  only: 'dark',
  roles: { accent: '#c9a227', danger: '#e0705a', success: '#9ccc78', warning: '#e0b050', pro: '#bfa3dc' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#0f2419',
        'surface-1': '#142d20',
        'surface-2': '#193526',
        'surface-3': '#1d3b2b',
        'text-primary': '#f3ead6',
        'text-secondary': '#dcd0b5',
        'text-muted': '#b8ab8c',
      },
    },
  },
})

const GOLD = '#c9a227'

const BASE: ThemeSetArgs = { colors: theme, backdrop: { color: 'surface-0' } }

const STYLED: ThemeSetArgs = {
  ...BASE,
  style: {
    Heading: { color: '#e0c060' },
    UserMessage: { backgroundColor: '#193526', borderColor: GOLD, borderWidth: 1, radius: 12 },
    ToolUse: { color: '#dcd0b5', backgroundColor: '#142d20', radius: 6, paddingX: 8 },
  },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    let set
    try {
      set = await $.theme.set(STYLED)
    } catch (error) {
      $.ui.log(String(error))
      set = await $.theme.set(BASE)
    }
    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })
}
