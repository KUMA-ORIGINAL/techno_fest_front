import { motion } from "framer-motion";
import { Code2, Gamepad2, Leaf, Bot, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tracks = [
  {
    id: "hackathon",
    title: "Хакатон",
    icon: Code2,
    description: "Разработка IT-продуктов, AI-решений и мобильных приложений за 48 часов в режиме нон-стоп.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "esports",
    title: "Киберспорт",
    icon: Gamepad2,
    description: "Крупнейшие турниры по CS2, Dota 2 и мобильному киберспорту с отдельным призовым фондом.",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "ecobattle",
    title: "Экобатл",
    icon: Leaf,
    description: "Создание технологических решений для защиты окружающей среды и устойчивого развития (GreenTech).",
    color: "from-emerald-400 to-green-600"
  },
  {
    id: "robotics",
    title: "Робототехника",
    icon: Bot,
    description: "Битвы роботов, выставка дронов и разработка аппаратных инноваций (Hardware).",
    color: "from-orange-400 to-red-500"
  },
  {
    id: "cosplay",
    title: "Косплей",
    icon: Palette,
    description: "Грандиозный конкурс косплея в стилистике Cyberpunk, Sci-Fi и фэнтези с профессиональным жюри.",
    color: "from-indigo-400 to-purple-600"
  }
];

export function TracksSection() {
  return (
    <section id="tracks" className="py-24 bg-accent/30 relative border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Направления фестиваля
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Выберите трек по душе. Участвуйте соло или собирайте команду, чтобы побороться за главный приз в своей категории.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""} // Center the last one if needed
            >
              <Card className="h-full relative overflow-hidden group border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${track.color} transition-opacity duration-500`} />
                
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${track.color} shadow-lg text-white`}>
                    <track.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {track.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
