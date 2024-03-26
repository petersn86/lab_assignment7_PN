import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
<div className={styles.shape} />;

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
	<div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
/>
          <p className={`${lusitana.className}text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Cool Dogs.</strong> This is the place to find pictures of cool dogs{' '}
            , brought to you by Peter Nolan.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/cool_dog1.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/cool_dog1.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
      <section id="showcase">
        <div className="container">
          <h1><strong>Hub for All Things Awesome & Canine</strong></h1>
          <p>Are you in search of the ultimate paw-some content to elevate your projects, social media, or personal collection? Look no further! Introducing our curated selection of the coolest canine companions you'll ever lay eyes on.</p>
        </div>
      </section>
      <section id="boxes">
        <div className="container">
          <div className="box">
            <Image src="/dog_stylish.png" width={300} height={200} alt="Dogs with stylish outfits" />
            <p className={`${lusitana.className}text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <h3>Dogs with stylish outfits</h3>
            </p>
            <p>Are you ready to take your furry friend's fashion game to the next level? Step into the world of canine couture and discover a realm where style meets wagging tails! Introducing our definitive library to dogs wearing cool outfits – because why should humans have all the fun?</p>
          </div>
          <div className="box">
            <Image src="/dog_surfing.png" width={300} height={200} alt="Dogs doing cool things" />
            <p className={`${lusitana.className}text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <h3>Dogs doing cool things</h3>
            </p>
            <p>Prepare to be amazed as we delve into the world of dogs doing cool things – because these remarkable canines are not just man's best friend; they're also masters of awesomeness! </p>
          </div>
          <div className="box">
            <Image src="/dog_motorcycle.png" width={300} height={200} alt="Dogs up to NO GOOD" />
            <p className={`${lusitana.className}text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <h3>Dogs up to NO GOOD</h3>
            </p>
            <p>A peek into the mischievous world of our furry friends when they think nobody's watching! While dogs are often seen as angels on four legs, behind those innocent eyes and wagging tails lies a mischievous streak that can lead to hilariously naughty behavior.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
