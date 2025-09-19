'use client';

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function ContactForm() {
  const [status, setStatus] = useState({ loading: false, success: null as string | null, error: null as string | null });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (res.ok) {
        setStatus({ loading: false, success: resData.message, error: null });
        reset();
      } else {
        setStatus({ loading: false, success: null, error: resData.message || "Ошибка при отправке" });
      }
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, success: null, error: "Ошибка при отправке" });
    }
  };

  // Авто-скрытие уведомлений
  useEffect(() => {
    if (status.success || status.error) {
      const timer = setTimeout(() => setStatus({ loading: false, success: null, error: null }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status.success, status.error]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">Имя</label>
        <Input
          id="name"
          {...register("name")}
          className={`bg-input border-border ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">Email</label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className={`bg-input border-border ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">Сообщение</label>
        <Textarea
          id="message"
          rows={5}
          {...register("message")}
          className={`bg-input border-border ${errors.message ? "border-red-500" : ""}`}
          placeholder="Расскажите нам о своём проекте или задайте вопрос..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground flex justify-center items-center cursor-pointer"
        disabled={status.loading}
      >
        {status.loading ? <span className="animate-pulse">Отправка...</span> : "Отправить сообщение"}
      </Button>

      <div className="absolute top-full left-0 w-full mt-2 flex justify-center">
        {status.success && <p className="bg-green-100 text-green-700 px-4 py-2 rounded transition-opacity duration-500 opacity-100">{status.success}</p>}
        {status.error && <p className="bg-red-100 text-red-700 px-4 py-2 rounded transition-opacity duration-500 opacity-100">{status.error}</p>}
      </div>
    </form>
  );
}
