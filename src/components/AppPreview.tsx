import { motion } from "framer-motion";
import screenshotLibrary from "@/assets/screenshot-library.png";
import screenshotSession from "@/assets/screenshot-session.png";
import screenshotEditor from "@/assets/screenshot-editor.png";
import screenshotSessionMode from "@/assets/screenshot-session-mode.png";

const screens = [
  { label: "Drill Library", src: screenshotLibrary },
  { label: "Session Planner", src: screenshotSession },
  { label: "Drill Editor", src: screenshotEditor },
  { label: "Session Mode", src: screenshotSessionMode },
];

const AppPreview = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(148_38%_45%/0.06),transparent_70%)]" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            See it in <span className="text-gradient-primary">action</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Designed for coaches, built for the sideline.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="phone-mockup w-40 md:w-48 glow-card">
                <img
                  src={screen.src}
                  alt={`${screen.label} screenshot`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <span className="mt-4 text-sm font-semibold text-muted-foreground">
                {screen.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
