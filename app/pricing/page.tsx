import { Check, ArrowRight } from "lucide-react";
import { FaGears } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PortfolioPricing() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Hero */}
      <div className="mx-auto max-w-5xl px-4 pt-20 pb-16">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Pricing
        </h1>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-4 pb-24">
        {/* Core Features */}
        <div className="space-y-12">
          <div className="flex flex-col">
            <h1 className="text-3xl mb-8">Business Portfolio Website</h1>
            <p className="text-lg text-zinc-300">
              Fast, professional, client-oriented website ready for use.
            </p>
          </div>

          <section className="space-y-8">
            <h2>Choose your pricing plan</h2>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
              {/* Basic Tier */}
              <div className="relative w-full overflow-hidden rounded-lg border border-primary/10 bg-primary/[0.01] hover:bg-primary/[0.02] duration-300 hover:border-primary">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-primary">Basic</h3>
                  <p className="mt-4 text-3xl font-bold text-white">600€</p>
                  <p className="mt-2 text-sm text-zinc-400">One-time payment</p>
                  <ul className="mt-8 space-y-4 text-base text-zinc-300">
                    <li className="flex gap-x-2 items-center text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      Static website
                    </li>
                    <li className="flex gap-x-2 items-center text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      2-3 main pages
                    </li>
                    <li className="flex gap-x-2 items-center text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      Simple text/image portfolio
                    </li>
                    <li className="flex gap-x-2 items-center text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      No API elements
                    </li>
                  </ul>
                </div>
              </div>
              {/* Pro Tier */}
              <div className="relative w-full  overflow-hidden rounded-lg border border-primary/10 bg-primary/[0.01] hover:bg-primary/[0.02] duration-300 hover:border-primary">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-primary">Pro</h3>
                  <p className="mt-4 text-3xl font-bold text-white">700-800€</p>
                  <p className="mt-2 text-sm text-zinc-400">One-time payment</p>
                  <ul className="mt-8 space-y-4 text-base text-zinc-300">
                    <li className="flex gap-x-2 items-center text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      All Basic features included
                    </li>
                    <li className="flex gap-x-2 items-center text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      3+ main pages
                    </li>
                    <li className="flex gap-x-2 items-center text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      Dynamic elements
                    </li>

                    <li className="flex gap-x-2 items-center  text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      Third party integrations
                    </li>
                    <li className="flex gap-x-2 items-center  text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      Google Analytics
                    </li>
                  </ul>
                </div>
              </div>
              {/* Advanced Tier */}
              <div className="relative w-full  overflow-hidden rounded-lg border border-primary/10 bg-primary/[0.01] hover:bg-primary/[0.02] duration-300 hover:border-primary">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-primary">
                    Advanced
                  </h3>
                  <p className="mt-4 text-3xl font-bold text-white">1200€</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    + 15€/mo for admin panel
                  </p>
                  <ul className="mt-8 space-y-4 text-base text-zinc-300">
                    <li className="flex gap-x-2 items-center text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      All Pro features included
                    </li>

                    <li className="flex gap-x-2 items-center text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      Admin panel for content management (CMS)
                    </li>
                    <li className="flex gap-x-2 items-center text-sm">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      Easy content updates
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Which option is best for me?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    The <span className="text-primary">Basic plan</span> is best
                    for simple portfolio websites that do not require any
                    frequent changes in the future. If you know that your
                    website will not need any changes in the future and if it is
                    supposed to be a simple portfolio, the{" "}
                    <span className="text-primary">Basic plan</span> is best for
                    you. However, if you plan on changing text or images in the
                    website on a daily or weekly basis, consider the{" "}
                    <span className="text-primary">Advanced plan</span>.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the admin panel?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Smth</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* <section className="border-l-2 border-primary pl-6">
            <h2 className="text-2xl font-semibold text-white">What you get:</h2>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>2-3 main pages</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>High website performance score</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Great SEO optimization</span>
              </li>
            </ul>
          </section> */}

          {/* Admin Features */}
          <section className="p-6 bg-zinc-800/50 border-2 border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <FaGears />
              Technicalities
            </h2>
            <div className="mt-4 space-y-6 text-stone-300">
              <p>
                The final price includes the development and deployment of the
                website. You get the ability to change any texts or images on
                the website in an easy-to-understand admin panel. Google
                Analytics integration is also possible.
              </p>
              <div className="rounded-lg bg-zinc-800/70 p-6">
                <h3 className="font-medium text-white">
                  The admin panel allows you to change:
                </h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Any texts and images
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Metadata
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Order of sections in a page
                  </li>
                </ul>
              </div>
              <p className="text-sm text-zinc-400">
                Note: the price does not include a domain name - this is on your
                part. However, I can help with that!
              </p>
            </div>
          </section>
          <section></section>

          {/* Monthly Service */}
          <section className="border-l-2 border-primary pl-6">
            <h2 className="text-2xl font-semibold text-white">
              Monthly Service Option
            </h2>
            <div className="mt-4 space-y-6 text-zinc-300">
              <p>
                After development, you can subscribe to a monthly service fee
                (30-60€ depending on the website). This includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Fast technical support regarding the website</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Quick fixes and adjustments in layout/design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Add new text/image section for a page</span>
                </li>
              </ul>
              <div className="rounded-lg bg-zinc-800/50 p-6">
                <p className="font-medium text-white">
                  Without monthly subscription, individual service prices:
                </p>
                <ul className="mt-3 space-y-2 text-zinc-300">
                  <li>• New text/image section: 60€</li>
                  <li>• New page: 100-300€ (depending on complexity)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                <h3 className="font-medium text-primary">
                  Additional Services (+100€ each)
                </h3>
                <ul className="mt-3 space-y-2 text-zinc-300">
                  <li>• Contact form with email integration</li>
                  <li>• Third-party service integrations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section className="border-l-2 border-primary pl-6">
            <h2 className="text-2xl font-semibold text-white">
              Why choose a coded website?
            </h2>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  Everything is custom! (a lot more freedom in your design)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Great SEO optimization out of the box</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Faster loading speed</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Sometimes cheaper than a website builder</span>
              </li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="mailto:alexfiloonov@gmail.com"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-1 text-lg font-medium transition duration-300 text-black hover:bg-amber-400"
          >
            Email me
          </a>
        </div>
      </div>
    </div>
  );
}
