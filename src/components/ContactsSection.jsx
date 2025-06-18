import { Mail, Phone, Github } from "lucide-react";

export const ContactsSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or just want to say hello? Feel free to reach out—I’d love to hear from you!
                </p>

                <div className="flex justify-center">
                    <div className="space-y-8 max-w-md w-full">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
                        <div className="space-y-6">

                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-foreground mb-1">Email</span>
                                    <a
                                        href="mailto:j.torres.532464@umindanao.edu.ph"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        j.torres.532464@umindanao.edu.ph
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-foreground mb-1">Phone</span>
                                    <a
                                        href="tel:+639455428974"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +63 945 542 8974
                                    </a>
                                </div>
                            </div>

                            {/* GitHub */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Github className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-foreground mb-1">GitHub</span>
                                    <a
                                        href="https://github.com/JlnnTrrs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        github.com/JlnnTrrs
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
