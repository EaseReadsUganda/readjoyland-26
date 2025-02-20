import { motion } from "framer-motion";
export const HeroSection = () => {
  return <section className="relative py-20 px-6">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} className="container max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 font-medium rounded-full bg-accent/10 text-accent text-5xl text-center">
          Uganda's Premier Digital Reading Platform
        </span>
        <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
          Your Gateway to Endless Stories
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience unlimited reading for just 20,000 UGX per month or choose individual books at 5,000 UGX each.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#pricing" className="button-primary">
            View Pricing Plans
          </a>
          <a href="#features" className="button-secondary">
            Explore Features
          </a>
        </div>
      </motion.div>
    </section>;
};