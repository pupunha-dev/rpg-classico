import Image from 'next/image';
import wp from '@/public/wp.jpg';
import sword from '@/public/icons/sword1.png';
import newAdventure from '@/public/icons/new.png';
import continueAdventure from '@/public/icons/continue.png';
import { pixelifySans } from '@/utils/fonts';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center h-screen w-full">
      <Image src={wp} alt='Wallpaper RPG' fill objectFit='cover' quality={100} className='z-0'/>
      <div className='relative flex flex-col z-10 w-[700px] items-center justify-center border-4 border-stone-400 bg-gradient-to-br from-stone-700 to-zinc-400 rounded-md py-20 space-y-4'>
        <div className='flex space-x-2'>
          <Image src={sword} alt='Sword'/>
          <h1 className={`${pixelifySans.className} text-6xl font-bold`}>RPG CLÁSSICO</h1>
        </div>
        <div>
          <h3 className='text-xl text-white'>Relembrando aventuras épicas e fantásticas</h3>
        </div>
        <div className={`${pixelifySans.className} flex flex-col w-4/5 py-2 space-y-2 items-center`}>
          <Link href="/">
            <button className='flex justify-center items-center border-2 rounded-md bg-green-600 text-white w-[300px] space-x-2 py-2 hover:bg-green-500 active:bg-green-600 ease-linear duration-100'>
              <Image src={newAdventure} alt='Nova Aventura' height={25}/>
              <span className='text-xl'>Iniciar uma aventura</span>
          </button>
          </Link>
          <Link href="/">
            <button className='flex justify-center items-center border-2 rounded-md bg-yellow-600 text-white w-[300px] space-x-2 py-2 hover:bg-yellow-500 active:bg-yellow-600 ease-in-out duration-100'>
              <Image src={continueAdventure} alt='Nova Aventura' height={25}/>
              <span className='text-xl'>Continuar Estória</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
