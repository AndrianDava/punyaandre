import 'semantic-ui-css/semantic.min.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'YT DOWNLOADER',
    description: 'Download Video Dan Music Dari YouTube .',
    image: './public/logo.png',
    keywords: 'downtube,youtube downloader,nextjs,react,procet,download youtube,youtube mp3'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
      <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
            </head>
            <body className={inter.className} style={{ backgroundColor: '#222831' }}>{children}</body>
        </html>
    )
}
