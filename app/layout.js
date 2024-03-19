import 'semantic-ui-css/semantic.min.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'YT DOWNLOADER',
    description: 'Download YouTube videos and musics with this Next.js app.',
    image: '',
    keywords: 'downtube,youtube downloader,nextjs,react,procet,download youtube,youtube mp3'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel='icon' href='/favicon.ico' />
            </head>
            <body className={inter.className} style={{ backgroundColor: '#ACE2E1' }}>{children}</body>
        </html>
    )
}
