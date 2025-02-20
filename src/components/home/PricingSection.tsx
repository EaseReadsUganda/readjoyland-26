import { motion } from "framer-motion";
import { Book, CreditCard, Clock, Sparkles, MessageSquare } from "lucide-react";
export const PricingSection = () => {
  return <section id="pricing" className="py-20 px-6 bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Choose Your Reading Journey</h2>
          <p className="text-muted-foreground">Flexible plans designed for every reader</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Subscription Card */}
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
        }} className="glass card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl">Monthly Subscription</h3>
              <span className="text-accent">
                <Sparkles className="w-6 h-6" />
              </span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">20,000 UGX</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Book className="w-5 h-5 text-accent" />
                <span>Unlimited access to 10,000+ eBooks</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent" />
                <span>24/7 Priority Support</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>Personalized Recommendations</span>
              </li>
            </ul>
            <button className="button-primary w-full bg-black">Subscribe Now</button>
          </motion.div>

          {/* Pay-Per-Book Card */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="glass card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl">Pay-Per-Book</h3>
              <span className="text-accent">
                <CreditCard className="w-6 h-6" />
              </span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">5,000 UGX</span>
              <span className="text-muted-foreground">/book</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Book className="w-5 h-5 text-accent" />
                <span>One-time purchase per book</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span>24-hour money-back guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>Yours forever</span>
              </li>
            </ul>
            <button className="button-secondary w-full text-slate-50 bg-black rounded-sm">Browse Books</button>
          </motion.div>
        </div>
      </div>
    </section>;
};