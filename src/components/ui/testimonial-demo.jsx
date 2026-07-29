import { TestimonialCarousel } from "@/components/ui/testimonial";

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    description:
      "Amazing experience working with this team! The results exceeded my expectations.",
    designation: "Product Manager",
    company: "Acme Corp",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    description:
      "Highly recommended! Great service and professional approach.",
    designation: "CTO",
    company: "Nova Labs",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80",
    description:
      "Exceptional quality and professionalism. Would definitely work with them again.",
    designation: "Founder",
    company: "BrightPath",
    rating: 4,
  },
];

export function TestimonialCarouselDemo() {
  return (
    <TestimonialCarousel
      testimonials={TESTIMONIAL_DATA}
      className="mx-auto max-w-2xl"
    />
  );
}
