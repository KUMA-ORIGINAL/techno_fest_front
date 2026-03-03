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
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-accent/50 backdrop-blur-sm rounded-xl border border-border/50">
            {scheduleData.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`relative px-4 py-2 sm:px-8 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${
                  activeDay === index 
                    ? "bg-background text-primary shadow-sm ring-1 ring-border/50 scale-[1.02]" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="text-[10px] sm:text-xs font-normal opacity-70 leading-none mb-0.5">{day.date}</div>
                {day.day.split(':')[1] || day.day}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule List */}
        <div className="max-w-3xl mx-auto">
          <motion.div 
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {scheduleData[activeDay].events.map((event, index) => (
              <Card 
                key={index} 
                className="group p-4 sm:p-5 border-border/40 bg-background/40 hover:bg-accent/30 transition-all hover:border-primary/30"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="flex items-center gap-2 text-primary font-mono font-bold text-sm sm:text-base shrink-0">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors truncate">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
