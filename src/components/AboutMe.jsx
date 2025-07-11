import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Growing as a Developer, One Line of Code at a Time</h3>
                    <p className="text-muted-foreground">
                        I'm a third-year Computer Science student with a strong interest in becoming a full-stack developer. I enjoy exploring both frontend and backend development, and I'm driven by the challenge of building applications that are not only functional but also intuitive and engaging.
                    </p>
                    <p className="text-muted-foreground">
                        As I continue to grow in this field, I’m focused on improving my skills, applying what I learn in real-world projects, and collaborating with others who share the same passion for technology. I'm excited to keep learning, creating, and contributing to meaningful work in the world of software development.

                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                     <a href="#contact" className="cosmic-button">
                        {" "}
                        Get in Touch
                     </a>
                     <a href="/TORRES_RESUME.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download CV
                     </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex  items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                             <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Website/Mobile/Software Development</h4>
                                <p className="text-muted-foreground">
                                    Building seamless experiences across platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex  items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                             <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Crafting user-friendly designs with clarity and purpose.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex  items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                             <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Documentation</h4>
                                <p className="text-muted-foreground">
                                    Bringing clarity to code and projects through well-written documentation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}
