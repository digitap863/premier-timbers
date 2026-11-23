// components/ContactForm.tsx
"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
    "w-full border-0 border-b border-white bg-transparent px-[14px] py-4 text-[15px] text-white placeholder:text-white/60 focus:border-b-2 focus:outline-none max-md:px-2 max-md:py-3.5 max-md:text-base";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("Request failed");
            form.reset();
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

        return (
        <section className="bg-white px-5 py-10 sm:px-8 lg:px-8 max-md:px-4 max-md:py-8">
            <div className="mx-auto max-w-[1440px] rounded-xl bg-[#384B38] px-6 pb-12 pt-16 sm:px-12 lg:px-20 max-md:px-5 max-md:pb-8 max-md:pt-10">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl font-heading leading-tight tracking-tight text-white sm:text-5xl lg:text-[50px] max-md:text-[30px]">
                        Send Messages
                    </h2>
                    <p className="mx-auto mt-4 font-heading max-w-[610px] text-base leading-[23px] text-white max-md:mt-3 max-md:text-sm max-md:leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-10 font-heading max-md:mt-6">
                    <div className="grid gap-x-5 gap-y-1 md:grid-cols-2">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            autoComplete="given-name"
                            className={fieldClass}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            autoComplete="family-name"
                            className={fieldClass}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            autoComplete="email"
                            className={fieldClass}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            autoComplete="tel"
                            className={fieldClass}
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={4}
                        required
                        className={`${fieldClass} mt-1 block h-[140px] resize-y max-md:h-[120px]`}
                    />

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-5 h-[52px] w-full rounded-md border border-white text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#384B38] disabled:opacity-60 max-md:mt-4 max-md:h-12"
                    >
                        {status === "sending" ? "Sending..." : "Send Messages"}
                    </button>

                    {status === "sent" && (
                        <p className="mt-4 text-center text-sm text-white" role="status">
                            Thanks! Your message has been sent.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="mt-4 text-center text-sm text-red-200" role="alert">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}