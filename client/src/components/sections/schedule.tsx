import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, PlayCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const scheduleData = [
  {
    date: "9 Апреля",
    day: "День 1: Старт",
    events: [
      { time: "09:00 - 11:00", title: "Регистрация участников и сбор команд", location: "Главный холл" },
      { time: "11:00 - 13:00", title: "Официальное открытие TECHNO FEST", location: "Главная сцена" },
      { time: "14:00 - 15:00", title: "Объявление задач Хакатона и старт таймера", location: "Зона кодинга" },
      { time: "15:00 - 20:00", title: "Старт отборочных турниров по Киберспорту", location: "Кибер-арена" },
      { time: "20:00 - 22:00", title: "Первый чекпойнт с менторами", location: "Переговорные" }
    ]
  },
  {
    date: "10 Апреля",
    day: "День 2: Погружение",
    events: [
      { time: "10:00 - 18:00", title: "Продолжение работы над проектами", location: "Зона кодинга" },
      { time: "12:00 - 15:00", title: "Лекции от топ-спикеров IT-индустрии", location: "Лекторий A" },
      { time: "15:00 - 18:00", title: "Выставка робототехники и битва дронов", location: "Экспо-зона" },
      { time: "18:00 - 21:00", title: "Полуфиналы по Киберспорту", location: "Кибер-арена" },
      { time: "21:00 - 23:00", title: "Второй чекпойнт (Pitch-тренировка)", location: "Переговорные" }
    ]
  },
  {
    date: "11 Апреля",
    day: "День 3: Финал",
    events: [
      { time: "09:00 - 12:00", title: "Финальные доработки и сдача проектов", location: "Зона кодинга" },
      { time: "13:00 - 16:00", title: "Защита проектов (Pitch-сессия перед жюри)", location: "Главная сцена" },
      { time: "14:00 - 17:00", title: "Гранд-финал Кибертурнира", location: "Кибер-арена" },
      { time: "17:00 - 19:00", title: "Косплей-шоу и награждение участников", location: "Главная сцена" },
      { time: "19:30 - 21:00", title: "Церемония закрытия и вручение $50,000+", location: "Главная сцена" }
    ]
  }
];

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Программа <span className="text-primary">мероприятия</span>
          </motion.h2>
        </div>

        {/* Day Selectors */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scheduleData.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeDay === index 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105" 
                  : "bg-accent text-muted-foreground hover:bg-accent/80"
              }`}
            >
              <div className="text-sm font-normal opacity-80 mb-1">{day.date}</div>
              {day.day}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <Card className="p-2 sm:p-6 border-border/50 bg-background/50 backdrop-blur-sm">
          <motion.div 
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {scheduleData[activeDay].events.map((event, index) => (
              <div 
                key={index} 
                className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl hover:bg-accent/50 transition-colors border border-transparent hover:border-border/50"
              >
                <div className="sm:w-48 shrink-0 flex items-center gap-2 text-primary font-mono font-bold text-lg">
                  <Clock className="w-5 h-5" />
                  {event.time}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>
                <div className="shrink-0 sm:flex items-center hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-8 h-8 text-primary/50" />
                </div>
              </div>
            ))}
          </motion.div>
        </Card>
      </div>
    </section>
  );
}
