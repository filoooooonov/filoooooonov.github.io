import { ProcessSteps } from "@/components/blocks/process-block";
import { ContactBlock } from "@/components/blocks/contact-block";
import { AdminPanelBlock } from "@/components/blocks/admin-block";
import { TestimonialBlock } from "../blocks/testimonial-block";
import { Values } from "../blocks/values-block";
// import { TestimonialBlock } from "@/components/blocks/testimonial-block";

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {/* Process Steps Block - Spans 2 columns on larger screens */}
      <div className="col-span-1 md:col-span-2 row-span-1 ">
        <Values />
      </div>

      {/* Contact Block */}
      <div className="col-span-1 row-span-1">
        <ContactBlock />
      </div>

      {/* Admin Panel Block */}
      <div className="hidden lg:block col-span-1 row-span-1">
        <TestimonialBlock />
      </div>

      {/* Tailored Design Block */}
      <div className="hidden lg:block col-span-1 md:col-span-2 row-span-1 lg:h-[350px]">
        <ProcessSteps />
      </div>
    </div>
  );
}
