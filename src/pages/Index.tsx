import { motion } from "framer-motion";
import { Book, CreditCard, Clock, Sparkles, MessageSquare, BookOpen, UserCheck, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container max-w-6xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent">
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
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-secondary">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Choose Your Reading Journey</h2>
            <p className="text-muted-foreground">Flexible plans designed for every reader</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Subscription Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass card"
            >
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
              <button className="button-primary w-full">Subscribe Now</button>
            </motion.div>

            {/* Pay-Per-Book Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass card"
            >
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
              <button className="button-secondary w-full">Browse Books</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose ReadJoy?</h2>
            <p className="text-muted-foreground">Discover the features that make our platform unique</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
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

      {/* Getting Started Section */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Getting Started</h2>
          <p className="text-muted-foreground mb-12">Begin your reading journey in four simple steps</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((item, index) => (
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

      {/* CTA Section */}
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
    </div>
  );
};

export default Index;
