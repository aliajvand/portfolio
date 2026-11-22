/**
 * The icon rail on the left. Order here = order on screen.
 * `icon` must be one of the names listed in src/lib/icons.js
 */
export const sidebar = [
  { to: '/', hash: '#top', label: 'Home', icon: 'home' },
  { to: '/#projects', hash: '#projects', label: 'Projects', icon: 'folder' },
  { to: '/#skills', hash: '#skills', label: 'Skills', icon: 'layers' },
  { to: '/#experience', hash: '#experience', label: 'Experience', icon: 'briefcase' },
  { to: '/#resume', hash: '#resume', label: 'Resume', icon: 'fileText' },
  { to: '/#contact', hash: '#contact', label: 'Contact', icon: 'send' },
]

export default sidebar
