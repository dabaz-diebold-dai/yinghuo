import { faqs } from "@/components/CMS";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-left md:text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">
          常问问题
        </h2>
        <Accordion type="single" collapsible className="w-full text-neutral-100">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="border-none outline-none text-lg underline-offset-4 text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-neutral-400 text-base text-left">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}