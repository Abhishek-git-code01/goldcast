import { BlockCardItem, FaqEntry, TestimonialCardProps} from "../types/types";
import { contentfulClient } from "./apiCedincial";
export interface ContentfulFaqItem {
  fields: {
    question: string;
    anshwer: string;
  };
}


export const getFaqs = async (): Promise<FaqEntry[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'faq', 
  });

  return response.items.map((item) => {
    const faqItem = item as unknown as ContentfulFaqItem;
    return {
      question: faqItem.fields.question,
      anshwer: faqItem.fields.anshwer,
    };
  });
};



export const getTestimonials = async (): Promise<TestimonialCardProps[]> => {
  const entries = await contentfulClient.getEntries({
    content_type: 'clientReview', 
  });

  return entries.items.map((item) => {
    const avatar = item.fields.avtar as { fields?: { file?: { url?: string } } } | undefined;
    
    return {
      name: item.fields.name as string,
      title: item.fields.title as string,
      company: item.fields.company as string,
      testimonial: item.fields.description as string, 
      avtar: avatar?.fields?.file?.url
        ? `https:${avatar.fields.file.url}`
        : '/default-avatar.png',
    };
  });
};




export const getBlockCards = async (): Promise<BlockCardItem[]> => {
  const res = await contentfulClient.getEntries({
    content_type: 'service',
  });

  return res.items.map((item) => {
    const icon = item.fields.icon as { fields?: { file?: { url?: string } } } | undefined;
    
    return {
      icon: icon?.fields?.file?.url
        ? `https:${icon.fields.file.url}`
        : '/icons/default.png',
      title: item.fields.title as string,
      descripton: item.fields.descripton as string,
    };
  });
};
