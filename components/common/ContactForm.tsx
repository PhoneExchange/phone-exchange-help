"use client";

import { useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setError(null);

    e.preventDefault();
    const form = e.currentTarget;

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
      hp: String(fd.get("hp") || ""), // honeypot
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    setLoading(false);

    if (!res.ok || !data.ok) {
      setError(data.error || `Failed (HTTP ${res.status})`);
      return;
    }
    setOk(true);
    if (form) {
      form.reset();
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-indigo-900 ">Name</label>
          <input name="name" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium text-indigo-900">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-indigo-900">Subject</label>
        <input name="subject" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
      </div>

      <div>
        <label className="text-sm font-medium text-indigo-900">Message</label>
        <textarea
          name="message"
          rows={6}
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      <div aria-hidden="true" className="hidden">
        <input name="hp" tabIndex={-1} autoComplete="off" />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {ok && <p className="text-sm text-green-600">Thanks! We’ll get back to you shortly.</p>}

      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-indigo-600 px-4 py-2 text-white disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
