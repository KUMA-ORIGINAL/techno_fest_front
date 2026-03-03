import { useMutation } from "@tanstack/react-query";
import { type RegistrationInput, type RegistrationResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateRegistration() {
  const { toast } = useToast();
  
  return useMutation<RegistrationResponse, Error, RegistrationInput>({
    mutationFn: async (data: RegistrationInput) => {
      // Имитация задержки сети
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Сохраняем локально в localStorage для демонстрации
      const registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
      const newRegistration = {
        ...data,
        id: Math.floor(Math.random() * 10000),
        createdAt: new Date().toISOString()
      };
      registrations.push(newRegistration);
      localStorage.setItem("registrations", JSON.stringify(registrations));
      
      return newRegistration as any;
    },
    onSuccess: () => {
      toast({
        title: "Заявка успешно сохранена локально!",
        description: "В этой версии данные хранятся в вашем браузере.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error.message || "Что-то пошло не так. Попробуйте еще раз.",
        variant: "destructive",
      });
    }
  });
}
