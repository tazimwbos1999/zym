import './globals.css';
import AOSWrapper from './components/AOSWrapper';

export const metadata = {
  title: 'Gym membership',
  description: 'Transform your journey',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        <AOSWrapper>
          <main>{children}</main>
        </AOSWrapper>
      </body>
    </html>
  );
}