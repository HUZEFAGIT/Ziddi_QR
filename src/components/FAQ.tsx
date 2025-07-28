import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does ZiddiQR protect my privacy?",
    answer: "Your phone number and personal details stay completely private. When someone scans your QR code, they can only send you messages through our secure platform. You see the message and choose whether to respond - no direct contact info is ever shared.",
    value: "item-1",
  },
  {
    question: "Are the stickers waterproof and durable?",
    answer: "Yes! Our stickers are 100% waterproof, UV-resistant, and heat-tolerant. They won't fade in Indian summers or monsoons. Plus, they're removable without leaving any residue when you want to change characters.",
    value: "item-2",
  },
  {
    question: "Can I choose any character from the 50+ options?", 
    answer: "Currently we're launching with our top 10 most popular characters: IT Baba, Sher-e-Punjab, Mumbai Don, Swagwali Dilli Girl, Desi Warrior, Jatt Muscleman, Namma Techie, UP Bhaiya, Rider X, and Army Kid. More characters will be added based on demand!",
    value: "item-3",
  },
  {
    question: "How do I manage messages and scan analytics?",
    answer: "Every ZiddiQR comes with access to your personal dashboard where you can see all messages, scan statistics, and manage your profile. You'll get notifications when someone scans your code and can respond at your convenience.",
    value: "item-4",
  },
  {
    question: "Is there any subscription fee after buying?",
    answer: "No subscriptions! Your ₹299 covers the premium sticker plus lifetime access to our QR platform, messaging system, and basic analytics. Premium features like advanced analytics may be added later as optional upgrades.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:support@ziddiqr.com"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact our support team
        </a>
      </h3>
    </section>
  );
};
