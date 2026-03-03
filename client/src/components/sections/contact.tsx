import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";

import { useCreateRegistration } from "@/hooks/use-registrations";
import { registrationSchema } from "@/lib/registration";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  const { mutate, isPending } = useCreateRegistration();

  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      track: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof registrationSchema>) {
    mutate(values, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <section id="contact" className="py-24 relative bg-accent/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Готов <span className="text-primary">побеждать?</span></h2>
              <p className="text-lg text-muted-foreground">
                Оставь заявку прямо сейчас. Количество мест ограничено, отбор проводится на конкурсной основе.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:info@technofest.kg" className="text-lg font-semibold hover:text-primary transition-colors">info@technofest.kg</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <a href="tel:+996555123456" className="text-lg font-semibold hover:text-primary transition-colors">+996 555 123 456</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telegram</div>
                  <a href="https://t.me/technofest_main" target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-primary transition-colors">@technofest_main</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="border-border/50 bg-background/50 backdrop-blur-md shadow-xl">
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">ФИО / Название команды</FormLabel>
                            <FormControl>
                              <Input placeholder="Иван Иванов" className="h-12 bg-accent/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="ivan@example.com" className="h-12 bg-accent/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="track"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Направление</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-accent/50">
                                <SelectValue placeholder="Выберите трек" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Хакатон">Хакатон</SelectItem>
                              <SelectItem value="Киберспорт">Киберспорт</SelectItem>
                              <SelectItem value="Экобатл">Экобатл</SelectItem>
                              <SelectItem value="Робототехника">Робототехника</SelectItem>
                              <SelectItem value="Косплей">Косплей</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Сообщение (Опционально)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Расскажите о себе, своей команде или идее..." 
                              className="resize-none min-h-[120px] bg-accent/50" 
                              {...field} 
                              value={field.value || ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-14 text-lg rounded-xl bg-primary hover:bg-primary/90"
                      disabled={isPending}
                    >
                      {isPending ? (
                        "Отправка..."
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Подать заявку
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
