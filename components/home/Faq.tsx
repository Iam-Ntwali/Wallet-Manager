import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-gray-50 to-white font-sans"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our wallet management application
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="faq-1"
              className="border-b border-gray-200 pb-2"
            >
              <AccordionTrigger className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                Is my financial data secure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pl-2">
                <p>Yes, your data is completely secure. We implement:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>End-to-end encryption for all sensitive information</li>
                  <li>Regular security audits and updates</li>
                  <li>No sharing of personal data with third parties</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-2"
              className="border-b border-gray-200 pb-2"
            >
              <AccordionTrigger className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                Can I export my transaction history?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pl-2">
                <p>
                  Yes, you can export your data in various formats including:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>CSV for spreadsheet applications</li>
                  <li>PDF for printable reports</li>
                  <li>JSON for developers and data integration</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-3"
              className="border-b border-gray-200 pb-2"
            >
              <AccordionTrigger className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                Is there a mobile app?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pl-2">
                <p>
                  Currently, we offer a mobile-responsive web application that
                  works seamlessly across all devices. Our native mobile apps
                  for iOS and Android are in development and will be released
                  soon!
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-4"
              className="border-b border-gray-200 pb-2"
            >
              <AccordionTrigger className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pl-2">
                <p>Getting started is easy:</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                  <li>Create a free account</li>
                  <li>Connect your bank accounts (optional)</li>
                  <li>Start tracking your expenses and income</li>
                </ol>
                <p className="mt-2">
                  Our intuitive dashboard will give you insights immediately!
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="pb-2">
              <AccordionTrigger className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                Is there a premium version?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pl-2">
                <p>Yes, we offer both free and premium tiers:</p>
                <div className="mt-2">
                  <p>
                    <span className="font-medium">Free:</span> Basic expense
                    tracking and budgeting
                  </p>
                  <p>
                    <span className="font-medium">Premium:</span> Advanced
                    analytics, investment tracking, and personalized financial
                    advice
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
