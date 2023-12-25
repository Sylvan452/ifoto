import type { Metadata } from 'next';
import './globals.css';
import Header from '../../components/Header';
import PromptInput from '../../components/PromptInput';

export const metadata: Metadata = {
  title: 'Ifoto',
  description: 'Ifoto-AI Generated Image App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <PromptInput />
        {children}
      </body>
    </html>
  );
}
