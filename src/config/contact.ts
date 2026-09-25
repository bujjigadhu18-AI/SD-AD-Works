/**
 * Centralized Contact and Social Configuration for SD ADWORKS
 * Single source of truth for WhatsApp, Instagram, and Email.
 */
export const CONTACT = {
  whatsapp: "919014407732",
  instagram: "https://www.instagram.com/_d.i.n.e.s.h_2604/",
  email: "bujjigadhu18@gmail.com"
};

// Backwards-compatible alias for existing components
export const CONTACT_CONFIG = {
  WHATSAPP_NUMBER: CONTACT.whatsapp,
  INSTAGRAM_URL: CONTACT.instagram,
  EMAIL_ADDRESS: CONTACT.email,
  DEFAULT_WHATSAPP_MESSAGE: "Hi Sai, I saw the SD ADWORKS portfolio and I'm interested in creating an ad for my business.",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const number = CONTACT.whatsapp;
  const text = encodeURIComponent(customMessage || CONTACT_CONFIG.DEFAULT_WHATSAPP_MESSAGE);
  if (!number || number === "REPLACE_WITH_YOUR_NUMBER") {
    return `https://wa.me/?text=${text}`;
  }
  return `https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${text}`;
}

export function getEmailMailto(subject: string = "Project Inquiry — SD ADWORKS", body: string = ""): string {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export interface BriefData {
  name: string;
  business: string;
  businessType: string;
  requirement: string;
}

export function generateWhatsAppBrief(data: BriefData): string {
  return `Hi Sai,

I found SD ADWORKS through your portfolio.

Name: ${data.name}
Business: ${data.business}
Business Type: ${data.businessType}
Project Requirement: ${data.requirement}

I'd like to discuss an advertisement.`;
}
