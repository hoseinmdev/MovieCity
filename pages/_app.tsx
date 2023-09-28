import '@/styles/globals.css'
import "@/i18n";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} /> 
} 
