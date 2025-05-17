import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState("");

	const form = useRef();

	const sendEmail = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await emailjs.sendForm(
				"service_rrmafge",
				"template_usnwf69",
				form.current,
				{
					publicKey: "EL2jkFkw_ry76V_GL",
				}
			);
			toast({
				title: "Message Sent!",
				description: "Thank you for your message",
			});
			setError("");
			e.target.reset();
		} catch (error) {
			setError("Something went wrong. Please try again.");
			toast({
				title: "Error",
				description: `Message could not be sent. ${
					error.text || "Please try again later."
				}`,
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-3xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Get In <span className="text-primary">Touch</span>
				</h2>

				<div className="bg-card p-8 rounded-lg shadow-xs text-left">
					<h3 className="text-2xl font-semibold mb-6">
						Send a Message
					</h3>
					<form ref={form} className="space-y-6" onSubmit={sendEmail}>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium mb-2"
							>
								Your Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								className="input-gradient-shadow w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
								placeholder="Name"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium mb-2"
							>
								Your Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								className="input-gradient-shadow w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
								placeholder="Email"
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium mb-2"
							>
								Your Message
							</label>
							<textarea
								id="message"
								name="message"
								required
								rows={4}
								className="input-gradient-shadow w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
								placeholder="Message."
							/>
						</div>
						<button
							type="submit"
							disabled={isSubmitting}
							className={cn(
								"cosmic-button flex items-center justify-center gap-2 cursor-pointer"
							)}
						>
							{isSubmitting ? "Sending..." : "Send a message"}
							<Send size={16} />
						</button>

						{error && (
							<p className="text-red-600 text-sm mt-2">{error}</p>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};
