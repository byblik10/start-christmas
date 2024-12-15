import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens: {
		'm' : '300px',
		'm1' : '350px',
		'sm': '409px',
		'sm1': '450px',
		'sm1/5': '500px',
		'sm1/8': '565px',
		'sm2': '580px',
		'md': '640px',
		'md2': '750px',
		'md3': '930px',
		'lg': '1280px',
		'lg2': '1440px',
		'lg3': '1800px',
	},
  	extend: {
		textShadow: {
			outline: '0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black',
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	require("tailwindcss-animate"),
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
	function ({ addUtilities }: { addUtilities: any }) {
		addUtilities({
		  '.text-shadow-outline': {
			'text-shadow': '0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black',
		  },
		  
		});
	  },
	  // eslint-disable-next-line @typescript-eslint/no-require-imports
	  require('tailwindcss-motion'),
  ],
} satisfies Config;
