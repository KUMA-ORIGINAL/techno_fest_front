import { motion } from "framer-motion";
import { Trophy, Gift, Target, Sparkles } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

export function PrizesSection() {
  return (
    <section id="prizes" className="py-24 relative overflow-hidden bg-primary/5 border-y border-primary/20">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-8 font-semibold tracking-wide">
              <Sparkles className="w-5 h-5" />
              ГРАНД ПРИЗОВОЙ ФОНД
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50">
              $50,000<span className="text-primary">+</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Общий призовой фонд будет разделен между победителями всех направлений. Лучшие проекты получат предложения об инвестициях!
            </p>

            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <Button size="lg" className="h-14 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
                Забрать свой приз
              </Button>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Гран-при Хакатона", amount: "$15,000", icon: Trophy, delay: 0.1 },
              { title: "Киберспорт (Общий)", amount: "$10,000", icon: Target, delay: 0.2 },
              { title: "Экобатл & Роботы", amount: "$10,000", icon: Gift, delay: 0.3 },
              { title: "Инвестиционный пул", amount: "$15,000+", icon: Sparkles, delay: 0.4 },
            ].map((prize, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: prize.delay }}
                className="bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-border/50 shadow-xl"
              >
                <prize.icon className="w-10 h-10 text-primary mb-4" />
                <div className="text-3xl font-black mb-2">{prize.amount}</div>
                <div className="text-sm font-medium text-muted-foreground">{prize.title}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
