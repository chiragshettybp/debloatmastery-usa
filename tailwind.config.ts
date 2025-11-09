import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				purple: {
					DEFAULT: '#6B7280',
					light: '#E5E7EB',
					lighter: '#F3F4F6',
					dark: '#374151'
				},
				orange: {
					DEFAULT: '#6B7280'
				},
				dark: {
					DEFAULT: '#FFFFFF',
					purple: '#F9FAFB'
				}
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				wiggle: {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'18%': { transform: 'rotate(-3deg) scale(1.04)' },
					'36%': { transform: 'rotate(3deg) scale(1.08)' },
					'54%': { transform: 'rotate(-1.5deg) scale(1.1)' },
					'72%': { transform: 'rotate(2deg) scale(1.08)' },
					'90%': { transform: 'rotate(0deg) scale(1.03)' },
					'100%': { transform: 'rotate(0deg) scale(1)' }
				},
				ctaPulse: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.045)' }
				},
				'pop-up': {
					'0%': { transform: 'scale(0.87)', opacity: '0' },
					'80%': { transform: 'scale(1.06)', opacity: '1' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				wiggle: 'wiggle 2.7s cubic-bezier(0.36,1.11,0.89,0.44) infinite',
				'cta-pulse': 'ctaPulse 6.5s cubic-bezier(0.77, 0, 0.18, 1) infinite',
				'pop-up': 'pop-up 0.44s cubic-bezier(0.3,1.01,0.32,1) 1',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
