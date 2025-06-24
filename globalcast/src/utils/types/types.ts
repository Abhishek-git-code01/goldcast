export interface FaqEntry {
  question: string;
  anshwer: string;
}

export interface TestimonialCardProps {
  name: string;
  title: string;
  company?: string;
  testimonial: string;
  avtar: string;
  className?: string;
}

export interface BlockCardItem {
  icon: string;
  title: string;
  descripton: string;
}