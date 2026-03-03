import { motion } from "framer-motion";
import { Rocket, Users, Lightbulb, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Rocket,
    title: "Мощный старт",
    description: "Возможность реализовать свою идею от концепта до рабочего прототипа за 48 часов.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Users,
    title: "Крутое комьюнити",
    description: "Нетворкинг с топ-специалистами, менторами и единомышленниками со всего региона.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Lightbulb,
    title: "Реальные кейсы",
    description: "Решение актуальных проблем бизнеса и экологии, работа с технологиями будущего.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    icon: Trophy,
    title: "Инвестиции",
    description: "Шанс получить финансирование от венчурных фондов и партнеров фестиваля.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Почему стоит быть на <span className="text-primary">TECHNO FEST</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Это не просто хакатон. Это масштабная площадка, где пересекаются технологии, творчество и бизнес. Мы собираем лучших разработчиков, инженеров, геймеров и креаторов, чтобы вместе создать инновации завтрашнего дня.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-accent/50 p-4 rounded-2xl border border-border/50">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">3</div>
                <div className="text-sm font-medium">Дня непрерывного драйва<br/>и инноваций</div>
              </div>
              <div className="flex items-center gap-4 bg-accent/50 p-4 rounded-2xl border border-border/50">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">1.5k+</div>
                <div className="text-sm font-medium">Участников со всей<br/>Центральной Азии</div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${benefit.bg}`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
