
import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Create Account",
    description: "Sign up for free in seconds"
  },
  {
    step: "2",
    title: "Choose Plan",
    description: "Select your preferred reading plan"
  },
  {
    step: "3",
    title: "Payment",
    description: "Pay via Mobile Money or card"
  },
  {
    step: "4",
    title: "Start Reading",
    description: "Access on any device instantly"
  }
];

export const GettingStartedSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-4">Getting Started</h2>
        <p className="text-muted-foreground mb-12">Begin your reading journey in four simple steps</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <span className="inline-block w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold mb-4">
                {item.step}
              </span>
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
