import type { Config } from 'tailwindcss';

import withMT from '@material-tailwind/react/utils/withMT';
import tailwindCssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      cursor: {
        pointer: 'url(/hand.png), pointer', // Custom hand with pointer
        default: 'url(/hand.png), default', // Custom hand with default
        hand: 'url(/hand.png), pointer',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        crack: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'walk-chicken': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(90%)' },
        },
        'walk-cat': {
          '0%, 100%': { transform: 'translateX(90%)' },
          '50%': { transform: 'translateX(0%)' },
        },
        'run-dog': {
          '0%, 100%': { transform: 'translateX(90%)' },
          '50%': { transform: 'translateX(5%)' },
        },
        'walk-dog': {
          '0%, 100%': { transform: 'translateX(30%)' },
          '50%': { transform: 'translateX(90%)' },
        },
        'walk-snail': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(90%)' },
        },
        'walk-turle': {
          '0%, 100%': { transform: 'translateX(90%)' },
          '50%': { transform: 'translateX(10%)' },
        },

        flip: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(-1)' },
        },
        'flip-reverse': {
          '0%, 100%': { transform: 'scaleX(-1)' },
          '50%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out',
        crack: 'crack 0.5s ease-in-out',
        spin: 'spin 10s linear infinite',
        'walk-chicken': 'walk-chicken 130s linear infinite',
        'walk-cat': 'walk-cat 80s linear infinite',
        'walk-snail': 'walk-snail 500s linear infinite',
        'run-dog': 'run-dog 60s linear infinite',
        'walk-dog': 'walk-dog 100s linear infinite reverse',
        'walk-turle': 'walk-turle 2000s linear infinite',
        'flip-chicken': 'flip 130s step-end infinite',
        'flip-snail': 'flip 500s step-end infinite',
        'flip-dog-reverse': 'flip-reverse 60s step-end infinite',
        'flip-dog': 'flip 100s step-end infinite',
        'flip-turle': 'flip-reverse 2000s step-end infinite',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        button: '0px 6px 0px 0px #000000',
        'button-card': '0px 6px 0px 0px #183153',
        'image-card': '-6px 8px 0px 0px #183153',
        'nav-card': '-3px 4px 0px 0px #183153',
      },
      height: {
        fullscreen: '100dvh',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      rotate: {
        120: '120deg',
      },
    },
  },
  plugins: [tailwindCssAnimate],
};
export default withMT(config);
