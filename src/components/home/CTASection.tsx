
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Start Reading?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of readers enjoying unlimited access to premium books</p>
          <button className="button bg-accent text-accent-foreground hover:opacity-90">
            Create Your Account Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};
