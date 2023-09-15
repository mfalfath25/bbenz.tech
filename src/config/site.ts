export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'benzwrld',
  description: 'Fajar Alfath digital space',
  author: 'Fajar Alfath',
  googleVerification: 'XSeHJYSwFk2Q21IyoclMJh5KwBE0psF9IP2S1mM_2uo',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/mfalfath25/benz-personal',
    linkedin: 'https://www.linkedin.com/in/mfalfath25/',
    twitter: 'https://twitter.com/_benzwrld',
  },
}
