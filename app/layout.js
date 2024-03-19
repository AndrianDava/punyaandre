import 'semantic-ui-css/semantic.min.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'YT DOWNLOADER',
    description: 'Download Video Dan Music Dari YouTube .',
    image: '',
    keywords: 'downtube,youtube downloader,nextjs,react,procet,download youtube,youtube mp3'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel='icon' href='/icon.svg' />
            </head>
            <body className={inter.className} style={{ backgroundColor: '#124076' }}>{children}</body>
        </html>
    )
}
