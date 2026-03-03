import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().min(1, "Введите имя или название команды"),
  email: z.string().email("Введите корректный email"),
  track: z.string().min(1, "Выберите направление"),
  message: z.string().optional(),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;

export type RegistrationRecord = RegistrationInput & {
  id: number;
  createdAt: string;
};
