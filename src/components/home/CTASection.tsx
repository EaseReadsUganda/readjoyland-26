import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
export const CTASection = () => {
  const {
    toast
  } = useToast();
  const handleSignUp = () => {
    toast({
      title: "Coming Soon",
      description: "Account creation will be available shortly!"
    });
  };
  return <section className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="text-3xl md:text-4xl mb-6">Start Your Reading Journey Today</h2>
          <p className="text-lg mb-8 opacity-90">Create your free account now and get instant access to thousands of premium books</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={handleSignUp}>
              Create Free Account
            </Button>
            <Button size="lg" variant="outline" onClick={handleSignUp} className="bg-neutral-950 hover:bg-neutral-800">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};