'use client'

import Header from '../components/header';
import { nexusLogo } from '../components/logo';
import OutlinedCard from '../components/outlined-card';

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col">
      <Header></Header>
      <section className='flex flex-col gap-6 center items-center p-4 md:px-14 sm:px-12'>
        <div className='flex flex-col gap-6 center items-center p-14'>
        {nexusLogo("100", "100", true)}
        <h2 className='center text-center'>Framework agnostic code sandbox for any application</h2>
        </div>
        <div className='flex flex-wrap m-auto gap-6 justify-evenly'>
        <OutlinedCard heading='Get Started'>hello</OutlinedCard>
        <OutlinedCard heading='Get Started'>hello</OutlinedCard>
        <OutlinedCard heading='Get Started'>hello</OutlinedCard>
        <OutlinedCard heading='Get Started'>hello</OutlinedCard>
        <OutlinedCard heading='Get Started'>hello</OutlinedCard>
        <OutlinedCard heading='Get Started'>hello</OutlinedCard>
        </div>
      </section>
    </main>
  )
}
