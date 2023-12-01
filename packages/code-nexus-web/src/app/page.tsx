'use client'

import { CodeNexus } from 'code-nexus-react';
import Image from 'next/image';
import Header from '../components/header';

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col justify-between">
      <Header></Header>
    </main>
  )
}
