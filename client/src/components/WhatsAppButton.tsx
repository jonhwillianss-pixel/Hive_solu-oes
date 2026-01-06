/**
 * WhatsApp Floating Button Component
 * 
 * Botão flutuante fixo no canto inferior direito que abre o WhatsApp
 * com uma mensagem pré-definida para contato com o escritório.
 */

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "5561999999999"; // Número do WhatsApp (com código do país e DDD)
  const message = "Olá! Gostaria de saber mais sobre os serviços de arquitetura e engenharia da Sua Casa.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
      title="Enviar mensagem via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
