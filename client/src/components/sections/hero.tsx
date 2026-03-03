import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] dark:opacity-[0.1]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider">Регистрация открыта</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6"
          >
            TECHNO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">FEST</span> 2026
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Крупнейший технологический хакатон и фестиваль инноваций в Центральной Азии. Создавай будущее вместе с нами.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-foreground/80 bg-background/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium">9–11 Апреля 2026</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 bg-background/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="font-medium">г. Бишкек</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="contact" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all group">
                Зарегистрироваться
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="schedule" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl border-border/50 bg-background/50 backdrop-blur-sm hover:bg-accent transition-all">
                Смотреть программу
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
