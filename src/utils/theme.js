export function initTheme() {
  const stored = localStorage.getItem('theme')
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = stored ?? (systemDark ? 'dark' : 'light')
  document.documentElement.dataset.theme = theme
}

export function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = next
  localStorage.setItem('theme', next)
}
