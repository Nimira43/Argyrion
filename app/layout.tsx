import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'
import './globals.css';
import Link from 'next/link';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Argyrion',
  description: 'Next JS ecommerce project with Tailwind, TypeScript, Shadcn, Prisma, Postgres and Docker',
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <>
            <ul>
              <li>
                <Link href='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/products'>
                  Products
                </Link>
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>  
            {children}
          </>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
