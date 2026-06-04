import { motion } from "framer-motion";
import { Apple } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="relative bg-card border border-border rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(148_38%_45%/0.08),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
              Free to start. Upgrade when you're ready.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-lg mx-auto">
              Browse drills, build sessions, and run them on the field — all free. Unlock the full library and advanced features with Pro.
            </p>
            <a
              href="https://apps.apple.com/us/app/tactiq-practice-planner/id6763797389"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 hover:scale-105 glow-primary text-sm sm:text-base"
            >
              <Apple className="w-5 h-5" />
              Download on the App Store
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
