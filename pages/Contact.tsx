import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interest: 'General Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    const phoneRegex = /^\+?[0-9\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', interest: 'General Inquiry', message: '' });
      setErrors({});
    }, 1500);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <SEO 
        title="Contact Us" 
        description="Get in touch with RYLT Energy for quotes, support, or partnership inquiries regarding our sustainable thermal solutions." 
      />
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg">We'd love to hear from you. Please fill out the form below.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-rylt-green/10 p-3 rounded-lg text-rylt-darkGreen">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Headquarters</h3>
                  <a 
                    href="https://www.google.com/maps/place/RYLT+ENERGY/@17.4713848,78.5962559,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9d4f4c101fa9:0xf6b30e81759cbf05!8m2!3d17.4713848!4d78.5962559!16s%2Fg%2F11vb0hvgp9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 leading-relaxed mt-1 max-w-sm block hover:text-rylt-green transition-colors cursor-pointer"
                  >
                    {COMPANY_INFO.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rylt-green/10 p-3 rounded-lg text-rylt-darkGreen">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a 
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-gray-600 mt-1 block hover:text-rylt-green transition-colors cursor-pointer"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am - 6pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rylt-green/10 p-3 rounded-lg text-rylt-darkGreen">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-gray-600 mt-1 block hover:text-rylt-green transition-colors cursor-pointer"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-12 w-full rounded-xl overflow-hidden shadow-md">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1902.8780419784437!2d78.59625587773613!3d17.47138481018179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9d4f4c101fa9%3A0xf6b30e81759cbf05!2sRYLT%20ENERGY!5e0!3m2!1sen!2sin!4v1771344444285!5m2!1sen!2sin" 
                 width="600" 
                 height="450" 
                 style={{ border: 0 }}
                 className="w-full h-80"
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="RYLT Energy Location"
               />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-rylt-green rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-rylt-green font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent outline-none transition-all ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-rylt-green'}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent outline-none transition-all ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-rylt-green'}`}
                      placeholder="+91 98765 43210"
                    />
                     {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent outline-none transition-all ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-rylt-green'}`}
                    placeholder="john@example.com"
                  />
                   {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rylt-green focus:border-transparent outline-none transition-all"
                  >
                    <option>Pool Heat Pumps</option>
                    <option>Industrial Dehumidifiers</option>
                    <option>Service & Support</option>
                    <option>Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent outline-none transition-all ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-rylt-green'}`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                   {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;