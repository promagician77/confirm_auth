'use client'

import Image from "next/image";

const AgentsLogo: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 32 32" className={className}>
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path d="M3 28 L13 4 L23 4 L13 28 Z" fill="url(#logoGradient)"/>
    <path d="M20 20 L29 20 L29 28 L20 28 Z" fill="url(#logoGradient)"/>
  </svg>
);

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <main className="flex flex-col gap-[32px] items-center text-center w-full max-w-2xl">
        <div className="flex flex-col items-center gap-4">
          <AgentsLogo className="w-20 h-20" />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Agents.ai</h1>
            <p className="text-lg text-gray-600">AI-Powered Browser Automation</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto border border-gray-100">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full"></div>
              <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome to Agents.ai!</h2>
            <p className="text-gray-600 leading-relaxed text-center">
              Please close this tab and return to your browser extension to complete the login process.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <button
            className="bg-color-to-red"
            onClick={() => 
              window.close()
            }
          >
            <span className="relative z-10">Close Browser</span>
          </button>
        </div>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center text-gray-500 mt-auto">
        <span className="text-sm">© 2024 Agents.ai. All rights reserved.</span>
      </footer>
    </div>
  );
}
