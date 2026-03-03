import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Кто может принять участие в фестивале?",
    answer: "Участвовать может любой желающий старше 16 лет: разработчики, дизайнеры, студенты, геймеры и энтузиасты технологий. Ограничений по уровню навыков нет — главное желание и идеи!"
  },
  {
    question: "Нужна ли команда для участия в хакатоне?",
    answer: "Вы можете зарегистрироваться как соло-участник или с готовой командой (от 2 до 5 человек). Если у вас нет команды, мы проведем специальную сессию матчмейкинга в первый день, где вы сможете найти единомышленников."
  },
  {
    question: "Участие в TECHNO FEST платное?",
    answer: "Нет, участие в хакатоне и профильных треках абсолютно бесплатное благодаря нашим спонсорам. Отбор проходит на конкурсной основе по заполненным заявкам."
  },
  {
    question: "Какое оборудование нужно брать с собой?",
    answer: "Для участников хакатона и робототехники необходимо иметь собственный ноутбук и специфичное оборудование для вашего проекта. Базовые материалы, интернет, розетки, еду и напитки предоставляем мы."
  },
  {
    question: "Кому принадлежат права на разработанный продукт?",
    answer: "Все права на интеллектуальную собственность, созданную во время хакатона, на 100% принадлежат команде разработчиков."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
          <p className="text-muted-foreground">Все, что нужно знать перед тем как подать заявку</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-accent/30 border border-border/50 rounded-xl px-6 data-[state=open]:bg-accent/50 transition-colors"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
