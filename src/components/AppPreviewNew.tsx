import { motion } from "framer-motion";
import screenshotLibrary from "@/assets/screenshot-library.png";
import screenshotSession from "@/assets/screenshot-session.png";
import screenshotEditor from "@/assets/screenshot-editor.png";
import screenshotSessionMode from "@/assets/screenshot-session-mode.png";
import iphoneFrame from "@/assets/iphone-frame.png";
import videoEditor from "@/assets/video-editor.mp4";
import videoSessionMode from "@/assets/video-session-mode.mp4";
import { BookOpen, PenTool, CalendarDays, Play } from "lucide-react";

// Screen inset percentages (measured from the iPhone mockup)
// These position the video/screenshot inside the phone frame
const SCREEN_INSET = {
  top: "1.94%",
  left: "4.22%",
  width: "91.38%",
  height: "96.29%",
};

interface Screen {
  label: string;
  poster: string;
  video?: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  description: string;
}

const screens: Screen[] = [
  {
    label: "Drill Library",
    poster: screenshotLibrary,
    icon: BookOpen,
    headline: "256 drills, searchable in seconds",
    description:
      "Filter by category, age group, difficulty, and player count. Every drill comes with a full diagram, setup instructions, and coaching points — no more Googling or flipping through binders.",
  },
  {
    label: "Visual Drill Editor",
    poster: screenshotEditor,
    video: videoEditor,
    icon: PenTool,
    headline: "Build drills the way you see them",
    description:
      "Drop players, cones, goals, and balls onto a pitch canvas. Draw movement arrows and passing lines. Your custom drills look just as polished as the ones in the library.",
  },
  {
    label: "Session Planner",
    poster: screenshotSession,
    icon: CalendarDays,
    headline: "Plan a full session in minutes",
    description:
      "Drag drills into a timeline, set durations, and add coaching notes. See your entire practice at a glance — from warm-up to cool-down — with total time tracked automatically.",
  },
  {
    label: "Session Mode",
    poster: screenshotSessionMode,
    video: videoSessionMode,
    icon: Play,
    headline: "Run it live on the sideline",
    description:
      "Tap Start and step through each activity on the field. See the drill diagram, setup instructions, and coaching points — all formatted for a quick glance between whistles.",
  },
];

/** Phone mockup wrapper — layers content behind the device frame */
function PhoneMockup({ children, isVideo }: { children: React.ReactNode; isVideo?: boolean }) {
  return (
    <div className="relative w-56 md:w-64" style={{ aspectRatio: "1160 / 2371" }}>
      {/* Screen content */}
      <div
        className="absolute overflow-hidden"
        style={isVideo ? {
          // Videos include the status bar — extend area so bezel hides it
          top: "1.94%",
          left: "4.22%",
          width: "91.38%",
          height: "96.29%",
          borderRadius: "7.5%",
        } : {
          // Static screenshots — exact screen area
          top: SCREEN_INSET.top,
          left: SCREEN_INSET.left,
          width: SCREEN_INSET.width,
          height: SCREEN_INSET.height,
          borderRadius: "7.5%",
        }}
      >
        {children}
      </div>
      {/* iPhone frame overlay */}
      <img
        src={iphoneFrame}
        alt=""
        className="relative z-10 w-full h-full pointer-events-none select-none"
        draggable={false}
      />
    </div>
  );
}

const AppPreview = () => {
  return (
    <section id="preview" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(148_38%_45%/0.06),transparent_70%)]" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            See it in <span className="text-gradient-primary">action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Designed for coaches, built for the sideline.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {screens.map((screen, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={screen.label}
                className={`flex flex-col items-center gap-10 md:gap-16 ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Phone mockup with content */}
                <div className="flex-shrink-0">
                  <PhoneMockup isVideo={!!screen.video}>
                    {screen.video ? (
                      <video
                        src={screen.video}
                        poster={screen.poster}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={screen.poster}
                        alt={`${screen.label} screenshot`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </PhoneMockup>
                </div>

                {/* Copy */}
                <div className="flex-1 max-w-lg text-center md:text-left">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <screen.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">
                      {screen.label}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
                    {screen.headline}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {screen.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
