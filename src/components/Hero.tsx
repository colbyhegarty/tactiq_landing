import { motion } from "framer-motion";
import { Apple } from "lucide-react";

const PhoneMockup = () => (
  <div className="phone-mockup w-56 md:w-64 glow-card">
    <div className="absolute inset-0 flex items-center justify-center bg-muted">
      <p className="text-muted-foreground text-sm px-6 text-center">App screenshot placeholder</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(148_38%_45%/0.08),transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-primary mb-4">
              Soccer Coaching App
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Plan Smarter.{" "}
              <span className="text-gradient-primary">Coach Better.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              A drill library, session planner, and visual drill editor built for soccer coaches who take training seriously.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 glow-primary"
            >
              <Apple className="w-5 h-5" />
              Download on the App Store
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="animate-float">
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
