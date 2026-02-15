'use client'

import { NavigationBar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }

    setLoading(false)
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <main className="bg-background">
      <NavigationBar />

      {/* Toast Message */}
      {status && (
        <div className="fixed top-6 right-6 z-50">
          <div
            className={`px-6 py-4 rounded-xl shadow-xl text-white font-medium
            ${status === "success" ? "bg-green-600" : "bg-red-600"}`}
          >
            {status === "success"
              ? "✅ Message sent! We’ll reply within 24 hours."
              : "❌ Failed to send message. Try WhatsApp or email."}
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
          Let’s Talk About Your Idea
        </h1>
        <p className="mt-6 text-lg text-foreground/70">
          Tell us what you want to build. We usually reply within 24 hours.
        </p>
      </section>

     

      {/* FORM */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="rounded-2xl border border-border p-8 sm:p-12 bg-card/20">

          <h2 className="text-2xl font-bold mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e)=>setFormData({...formData,name:e.target.value})}
              className="w-full rounded-lg border border-border px-4 py-3 bg-background"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e)=>setFormData({...formData,email:e.target.value})}
              className="w-full rounded-lg border border-border px-4 py-3 bg-background"
              required
            />

            <input
              type="text"
              placeholder="Company (optional)"
              value={formData.company}
              onChange={(e)=>setFormData({...formData,company:e.target.value})}
              className="w-full rounded-lg border border-border px-4 py-3 bg-background"
            />

            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e)=>setFormData({...formData,message:e.target.value})}
              className="w-full rounded-lg border border-border px-4 py-3 bg-background"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground hover:scale-105 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </main>
  )
}
