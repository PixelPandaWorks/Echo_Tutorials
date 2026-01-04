"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hello ECHO Tutorial! My name is ${formData.name}. Phone: ${formData.phone}. ${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/911234567890?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Have questions about our batches or teaching style? Feel free to reach out to us. We're here to help your
              child succeed.
            </p>

            <div className="space-y-8">
              <a href="tel:+911234567890" className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">Call Now</p>
                  <p className="text-lg font-medium">+91 12345 67890</p>
                </div>
              </a>

              <a href="mailto:info@echotutorial.com" className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">Email Us</p>
                  <p className="text-lg font-medium">info@echotutorial.com</p>
                </div>
              </a>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">Location</p>
                  <p className="text-lg font-medium">Vapi / Valsad, Gujarat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Student/Parent Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full p-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full p-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12 text-md">
                <Send className="mr-2 h-4 w-4" /> Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
