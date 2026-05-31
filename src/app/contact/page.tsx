"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value, // Dynamically updates 'name', 'email', or 'message'
  }));
};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // Stop native browser page refresh
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Failed to send message');

    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' }); // Clear fields upon success
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false); // Turn off loading state regardless of outcome
  }
};
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-md bg-deep-navy p-8 rounded-lg shadow-lg border border-primary/20">
        <h1 className="text-4xl font-bold text-primary text-center mb-4">Contact Me</h1>
        <p className="mt-2 text-lg text-gray-400 text-center mb-8">Let's get in touch.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-500"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-500 resize-y"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 px-6 py-3 bg-primary text-deep-navy font-bold rounded-lg hover:bg-primary/80 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Submission Status Feedback */}
          {submitStatus === 'success' && (
            <p className="text-green-500 text-center mt-4">Thanks, message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </main>
  );
}
