import { motion } from "framer-motion";
import { Search, LayoutList, Share2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse or create drills",
    description: "Explore 250+ drills or build your own with the visual editor.",
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
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            How it <span className="text-gradient-gold">works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From discovery to the pitch in three simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                Step {s.step}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
