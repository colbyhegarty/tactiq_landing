import heroPhones from "@/assets/hero-phones.png";
import { motion } from "framer-motion";
import { Apple } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(148_38%_45%/0.08),transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6">
              Your Practice.{" "}
              <span className="text-gradient-primary">Made Perfect.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
              300+ drills, a visual editor, and a session planner — everything a
              soccer coach needs to run training that actually works.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 hover:scale-105 glow-primary text-sm sm:text-base"
            >
              <Apple className="w-5 h-5" />
              Download on the App Store
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end lg:-my-8 -mx-4 sm:mx-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="animate-float w-full max-w-sm sm:max-w-md lg:max-w-3xl">
              <img
                src={heroPhones}
                alt="Tactiq app showing static and animated drill diagrams"
                className="w-full h-auto select-none"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
