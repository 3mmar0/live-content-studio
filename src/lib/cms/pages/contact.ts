import { definePage, f, section } from "../schema";
import heroImg from "@/assets/h-contact.jpg";

export const contactHero = section("hero", {
 label: "الواجهة الرئيسية",
 fields: [f.text("eyebrow", "العنوان التمهيدي"), f.text("title", "العنوان"), f.textarea("subtitle", "النص التعريفي"), f.image("image", "الصورة")],
 defaults: {
  "eyebrow": "تواصل معنا",
  "title": "نسعد بتواصلك",
  "subtitle": "اترك رسالتك وسيتواصل معك فريقنا في أقرب وقت.",
  "image": heroImg
},
 legacyPageFields: { title: "heroTitle", subtitle: "heroSubtitle" },
});

export const contactContact = section("contact", {
 label: "التواصل والنموذج",
 fields: [f.text("text0", "text0"), f.text("text1", "text1"), f.text("text2", "text2"), f.text("text3", "text3"), f.text("text4", "text4"), f.text("text5", "text5"), f.text("text6", "text6"), f.text("text7", "text7"), f.text("text8", "text8"), f.text("text9", "text9"), f.text("text10", "text10"), f.text("text11", "text11"), f.text("text12", "text12")],
 defaults: {
  "text0": "البريد الإلكتروني",
  "text1": "info@yourcompany.example.com",
  "text2": "الهاتف",
  "text3": "+1 555-555-5556",
  "text4": "تم استلام رسالتك",
  "text5": "شكراً لك، سنتواصل معك قريباً.",
  "text6": "نوع الطلب",
  "text7": "دورة تدريبية",
  "text8": "استشارة شركات",
  "text9": "استشارة فردية",
  "text10": "ريادة الأعمال",
  "text11": "أخرى",
  "text12": "إرسال"
},
});

export const contactPage = definePage({ key: "contact", slug: "/contact", title: "تواصل معنا", sections: [contactHero, contactContact] });
