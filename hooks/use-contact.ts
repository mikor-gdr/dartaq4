import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import api from "@/lib/axios";
import { ContactFormData } from "@/lib/validations/contact";

export function useContact() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await api.post("/contact", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Pesan berhasil dikirim!", {
        description: "Kami akan menghubungi Anda segera.",
      });
    },
    onError: () => {
      toast.error("Terjadi kesalahan!", {
        description: "Silakan coba lagi atau hubungi kami langsung.",
      });
    },
  });
}

