import { motion } from "framer-motion";
import { BookOpen, CalendarDays, FileDown, PenTool } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Drill Library",
    description:
      "Browse drills by category, difficulty, age group, and player count. Every drill includes animated diagrams, setup instructions, and coaching points.",
  },
  {
    icon: CalendarDays,
    title: "Session Planner",
    description:
      "Build full training sessions with a timeline, drag activities, set durations, and add coaching notes. Start session mode to run through activities live on the field.",
  },
  {
    icon: PenTool,
    title: "Visual Drill Editor",
    description:
      "Create custom drills with a drag-and-drop canvas. Place players, cones, goals, and draw movement arrows.",
  },
  {
    icon: FileDown,
    title: "PDF Export & Sharing",
    description:
      "Export session plans as clean PDFs and share directly with players and assistant coaches via email or text.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(148_38%_45%/0.05),transparent_60%)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Everything you need to{" "}
            <span className="text-gradient-primary">run great practices</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            From drill discovery to on-field execution — all in one app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group bg-card border border-border rounded-2xl p-5 sm:p-6 hover:border-primary/40 transition-all duration-300 glow-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
