import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Имя обязательно"),
  email: z.string().email("Неверный формат email"),
  message: z.string().min(1, "Сообщение обязательно"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;