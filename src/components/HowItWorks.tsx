import { motion } from "framer-motion";
import { LayoutList, Search, Share2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse or create drills",
    description: "Explore hundreds of drills or build your own with the visual editor.",
  },
  {
    icon: LayoutList,
    step: "02",
    title: "Build your session plan",
    description: "Drag drills into a timeline, set durations, and add notes.",
  },
  {
    icon: Share2,
    step: "03",
    title: "Share or run it live",
    description: "Export as PDF, share with your team, or run session mode on the field.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            How it <span className="text-gradient-gold">works</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            From discovery to the pitch in three simple steps.
          </p>
        </motion.div>

        {/* Mobile: vertical numbered list. md+: horizontal 3-col grid */}
        <div className="flex flex-col gap-0 md:grid md:grid-cols-3 md:gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Mobile layout: horizontal row */}
              <div className="flex items-start gap-5 md:flex-col md:items-center md:text-center py-6 first:pt-0 last:pb-0 md:py-0">
                {/* Connector line for mobile */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[1.875rem] top-16 bottom-0 w-px bg-border md:hidden" />
                )}

                <div className="relative flex-shrink-0 w-15 h-15">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muted flex items-center justify-center md:mx-auto">
                    <s.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                </div>

                <div className="flex-1 md:flex-none">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                    Step {s.step}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-1 mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs md:mx-auto">
                    {s.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
