import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <Link href="/">Go home</Link>
    </>
  );
}
