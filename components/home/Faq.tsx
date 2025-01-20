import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50 font-sans">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text:4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-xl font-semibold text-gray-900">
                Is my financial data secure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, we use industry-standard encryption to protect your data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-xl font-semibold text-gray-900">
                Can I export my transaction history?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, you can export your data in various formats for your
                records.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-xl font-semibold text-gray-900">
                Is there a mobile app?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Currently, we offer a mobile-responsive web application.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
