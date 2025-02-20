
import { motion } from "framer-motion";
import { BookOpen, UserCheck, LineChart, Sparkles, CreditCard, MessageSquare } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Extensive Library",
    description: "Access thousands of curated books across multiple categories"
  },
  {
    icon: UserCheck,
    title: "Personalized Experience",
    description: "Get book recommendations tailored to your interests"
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description: "Track your reading progress and set personal goals"
  },
  {
    icon: Sparkles,
    title: "Premium Content",
    description: "Exclusive access to special editions and new releases"
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Choose between subscription or pay-per-book options"
  },
  {
    icon: MessageSquare,
    title: "Community",
    description: "Join discussions and share your reading experiences"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Why Choose ReadJoy?</h2>
          <p className="text-muted-foreground">Discover the features that make our platform unique</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <feature.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
