import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import CallToAction from '../components/CallToAction/CallToAction';

export default function HomePage() {

  return (
    <>
      <div className="flex flex-col gap-10">
        <Hero />
        <Features />
        <CallToAction />
      </div>
    </>
  )
}

