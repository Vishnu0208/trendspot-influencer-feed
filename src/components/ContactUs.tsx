import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-20 bg-gradient-card/20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about trending content? Want to collaborate or suggest new features? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you're a content creator looking for inspiration or a brand seeking collaboration opportunities, 
                we're here to help you navigate the world of social media trends.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-gradient-accent rounded-lg p-3">
                  <Mail className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Us</h4>
                  <p className="text-muted-foreground">hello@influencehub.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-gradient-accent rounded-lg p-3">
                  <Phone className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="bg-gradient-accent rounded-lg p-3">
                  <MapPin className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Visit Us</h4>
                  <p className="text-muted-foreground">123 Creator Street, Influence City, IC 12345</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  Instagram
                </Button>
                <Button variant="outline" size="sm">
                  TikTok
                </Button>
                <Button variant="outline" size="sm">
                  YouTube
                </Button>
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-primary/20 shadow-glow animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-foreground text-2xl">Send Us a Message</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-muted border-primary/20 text-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-muted border-primary/20 text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-muted border-primary/20 text-foreground"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-muted border-primary/20 text-foreground resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button type="submit" className="w-full" variant="glow" size="lg">
                  Send Message <Send className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">How often is content updated?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We update our trending content daily to ensure you always have access to the latest viral ideas and trends.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">Can I suggest new categories?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Absolutely! We're always looking to expand our categories based on user feedback and emerging trends.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">Is there a mobile app?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our website is fully responsive and works great on mobile. A dedicated app is coming soon!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;