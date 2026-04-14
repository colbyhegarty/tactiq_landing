import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I used to spend Sunday nights planning sessions on paper. Now I pull up Tactiq, pick drills, and I'm done in 10 minutes.",
    name: "Coach Mike R.",
    role: "U14 Club Coach",
  },
  {
    quote:
      "The drill editor is a game-changer. I can show my assistants exactly what I want instead of trying to explain it.",
    name: "Sarah T.",
    role: "High School Varsity Coach",
  },
  {
    quote:
      "Session mode on the sideline means I'm not fumbling with a clipboard anymore. I just swipe to the next drill.",
    name: "James L.",
    role: "U10 Rec League Coach",
  },
];

const SocialProof = () => {
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
            Coaches are{" "}
            <span className="text-gradient-gold">loving it</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Hear from coaches who've made the switch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-6 relative glow-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90 mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
