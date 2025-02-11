'use client'
import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <a href="/" className="flex items-center px-2 py-2 text-gray-900">
                    Democracy Platform
                  </a>
                  <div className="hidden sm:ml-6 sm:flex">
                    <a href="/proposals" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                      Proposals
                    </a>
                    <a href="/profile" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
                      Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
  
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
  
          <footer className="bg-white shadow-sm mt-8">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 text-sm">
                Democracy Platform - Version 0.1.0
              </p>
            </div>
          </footer>
        </body>
      </html>
    )
  }