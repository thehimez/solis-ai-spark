import { useState } from "react";
import { Search, ChevronDown, Mail, Copy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is Mastersolis Infotech?',
    answer: 'Mastersolis Infotech is an IT services & training company offering web/app development, cloud & cybersecurity solutions, and training/internships in technologies like full-stack development and basic IoT.'
  },
  {
    question: 'When was the company established?',
    answer: 'The company was incorporated on December 18, 2023 (MCA record: U62099AP2023PTC113281).'
  },
  {
    question: 'Where is the company located?',
    answer: 'Officially registered in Nellore, Andhra Pradesh. They also list a branch / office presence in Bangalore (Hebbal) — verify before visiting physically.'
  },
  {
    question: 'Do they offer internships or training?',
    answer: 'Yes. They advertise short-term internships & industrial training programs in web development, full-stack, cloud, AI basics and introductory IoT. Confirm specific syllabus and mentor details before enrolling.'
  },
  {
    question: 'Are the internships paid or free?',
    answer: 'Many programs are fee-based (paid). Always confirm duration, deliverables, and refund policy in writing before paying any fees.'
  },
  {
    question: 'Will I get a certificate?',
    answer: 'Participants typically receive an Internship Completion Certificate and a project report or letter of recommendation on request. Verify the signature and company details on the certificate.'
  },
  {
    question: 'Do they guarantee placement after training?',
    answer: 'No guaranteed placements are advertised. They may provide placement assistance or guidance but don\'t promise jobs.'
  },
  {
    question: 'How do I verify the company is legitimate?',
    answer: 'Check MCA records for CIN, ask for an office visit (if local), look for past trainee reviews or LinkedIn mentions, and request sample certificates or project showcases.'
  },
  {
    question: 'What should I ask before joining a paid training?',
    answer: 'Ask about project details, mentor profile, duration, schedule (online/offline), fee & refund policy, certificate type, and placement support.'
  },
  {
    question: 'Who are the directors/founders?',
    answer: 'Public records list Mr. Charan Vishnu Kathari and Mr. Rama Masthan Kathari as directors at incorporation.'
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { toast } = useToast();

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+913583763456');
    toast({
      title: "Phone number copied",
      description: "+913583763456",
    });
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <header className="flex items-start gap-6 mb-8">
          <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center shadow-elegant">
            <span className="text-primary-foreground font-bold text-2xl">MS</span>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mastersolis Infotech — FAQs
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Common questions about internships, training, services and how to verify the company.
            </p>
          </div>
        </header>

        {/* Search & Badge */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search FAQs (example: internships, certificates, fees)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/50 border-border"
            />
          </div>
          <Badge variant="secondary" className="self-start">
            Updated: Nov 7, 2025
          </Badge>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-6">
          {/* FAQ List */}
          <Card className="shadow-elegant">
            <CardContent className="p-6">
              <div className="space-y-3">
                {filteredFAQs.map((faq, index) => (
                  <Collapsible
                    key={index}
                    open={openItems.includes(index)}
                    onOpenChange={() => toggleItem(index)}
                  >
                    <div className="border border-border/50 rounded-xl overflow-hidden transition-all hover:border-primary/20">
                      <CollapsibleTrigger className="w-full p-4 flex items-center justify-between gap-4 text-left hover:bg-accent/5 transition-colors">
                        <h3 className="font-semibold text-base">{faq.question}</h3>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
                            openItems.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  No FAQs match your search. Try different keywords.
                </p>
              )}

              <footer className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
                Can't find an answer? Contact the company and ask for written confirmation. 
                Always verify before paying fees.
              </footer>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg">Company Snapshot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Registered:</span>
                    <span className="font-semibold">Dec 18, 2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CIN:</span>
                    <span className="font-semibold text-xs">U62099AP2023PTC113281</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-muted-foreground">Locations:</span>
                    <span className="font-semibold text-right text-sm">
                      Nellore (registered)<br/>Bangalore (claimed)
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    className="flex-1"
                    onClick={() => window.location.href = 'mailto:info@mastersolisinfotech.com'}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={copyPhoneNumber}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Phone
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
