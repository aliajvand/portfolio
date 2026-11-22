/**
 * The icon rail on the left. Order here = order on screen.
 * `icon` must be one of the names listed in src/lib/icons.js
 */
export const sidebar = [
  { to: '/', hash: '#top', label: 'صفحه اصلی', icon: 'home' },
  { to: '/#startup', hash: '#startup', label: 'استارتاپ RCI (به زودی)', icon: 'sparkles' },
  { to: '/#projects', hash: '#projects', label: 'پروژه‌های عملیاتی', icon: 'folder' },
  { to: '/#skills', hash: '#skills', label: 'مهارت‌های فنی', icon: 'layers' },
  { to: '/#experience', hash: '#experience', label: 'سوابق و افتخارات', icon: 'briefcase' },
  { to: '/#resume', hash: '#resume', label: 'رزومه ATS', icon: 'fileText' },
  { to: '/#contact', hash: '#contact', label: 'ارتباط مستقیم', icon: 'send' },
]

export default sidebar
