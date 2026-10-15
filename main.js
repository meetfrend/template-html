// Page behavior. Loaded as an ES module, so split code into more files with import/export.

const root = document.documentElement

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const dark = root.classList.toggle('dark')
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {}
})

const counter = document.getElementById('counter')
let count = 0
counter?.addEventListener('click', () => {
  count += 1
  counter.textContent = `Clicked ${count} ${count === 1 ? 'time' : 'times'}`
})
