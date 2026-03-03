import { useMutation } from "@tanstack/react-query";
import { api, type RegistrationInput, type RegistrationResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateRegistration() {
  const { toast } = useToast();
  
  return useMutation<RegistrationResponse, Error, RegistrationInput>({
    mutationFn: async (data: RegistrationInput) => {
      const res = await fetch(api.registrations.create.path, {
        method: api.registrations.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Ошибка при отправке заявки");
      }
      
      return api.registrations.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Заявка успешно отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
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
