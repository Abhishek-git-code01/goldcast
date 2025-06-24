import { BlockCardItem, FaqEntry, TestimonialCardProps} from "../types/types";
import { contentfulClient } from "./apiCedincial";



export const getFaqs = async (): Promise<FaqEntry[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'faq', 
  });

  return response.items.map((item: any) => ({
    question: item.fields.question,
    anshwer: item.fields.anshwer,
  }));
};




export const getTestimonials = async (): Promise<TestimonialCardProps[]> => {
  const entries = await contentfulClient.getEntries({
    content_type: 'clientReview', 
  });

  return entries.items.map((item: any) => ({
    name: item.fields.name,
    title: item.fields.title,
    company: item.fields.company,
    testimonial: item.fields.description, 
    avtar: item.fields.avtar?.fields?.file?.url
      ? `https:${item.fields.avtar.fields.file.url}`
      : '/default-avatar.png',
  }));
};





export const getBlockCards = async (): Promise<BlockCardItem[]> => {
  const res = await contentfulClient.getEntries({
    content_type: 'service',
  });

  return res.items.map((item: any) => ({
    icon: item.fields.icon?.fields?.file?.url
      ? `https:${item.fields.icon.fields.file.url}`
      : '/icons/default.png',
    title: item.fields.title,
    descripton: item.fields.descripton,
  }));
};

