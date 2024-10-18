// React
import { motion } from "framer-motion"

const App = () => {
  return (
    <section className="grid place-content-center h-screen gap-3 bg-indigo-400">
      <Fliplink href="#">twitter</Fliplink>
      <Fliplink href="#">facebook</Fliplink>
      <Fliplink href="#">linkedin</Fliplink>
      <Fliplink href="#">instagram</Fliplink>
    </section>
  )
}

const DURATION = 0.25
const STAGGER = 0.025

const Fliplink = ({ href, children }: { children: string, href: string }) => {
  return (
    <motion.a
      href={href}
      initial='initial'
      whileHover='hover'
      transition={{ staggerChildren: 0.2 }}
      className="uppercase relative overflow-hidden text-zinc-900 block font-black text-4xl font-[gilroy]
      sm:text-7xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 0.75 }}
    >
      <motion.span
        className="inline-block"
        variants={{
          initial: { y: 0 },
          hover: { y: '-100%' }
        }}
        transition={{ duration: DURATION, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 inline-block"
        variants={{
          initial: { y: '100%' },
          hover: { y: 0 }
        }}
        transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER }}
      >
        {children}
      </motion.span>
    </motion.a>
  )
}

export default App
