import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-3">
        <h3 className="text-2xl">Need help?</h3>
        <p className="text-indigo-900 ">Fill out the form below and we’ll respond shortly.</p>
      </div>
      <ContactForm />
    </div>
  );
}
