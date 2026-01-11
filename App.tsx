import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  FileText,
  Calendar,
  TrendingUp,
  Mail,
  ShieldAlert,
  ChevronRight,
  DollarSign,
  Users,
  Search,
  MousePointer2,
  Percent,
  MessageSquare
} from 'lucide-react';
import { Section } from './components/Section';
import { EvidenceChart } from './components/EvidenceChart';
import { InfoCard } from './components/InfoCard';
import { EvidenceGallery, EvidenceImage } from './components/EvidenceGallery';

// DASHBOARD EVIDENCE
const INITIAL_EVIDENCE_IMAGES: EvidenceImage[] = [
  {
    src: "/Images/dashboard-overview.png",
    alt: "Lucid Affiliate Dashboard Overview",
    caption: "Dashboard Overview: $40,368.97 Unpaid Earnings (Payout 100%)"
  },
  {
    src: "/Images/performance-peak.png",
    alt: "Mobile Performance Graph - Peak",
    caption: "Performance Spike: Dec 12 Peak ($5,969.00)"
  },
  {
    src: "/Images/graph-detail.png",
    alt: "Detailed Graph View",
    caption: "Daily Detail: Dec 15 ($2,784.93) & Dec 16 ($448.26)"
  }
];

// EMAIL THREAD EVIDENCE (7 IMAGES)
const EMAIL_EVIDENCE_IMAGES: EvidenceImage[] = [
  {
    src: "/Images/email-01.jpg",
    alt: "Email Correspondence 1",
    caption: "Part 1: Initial Inquiry regarding account status"
  },
  {
    src: "/Images/email-02.jpg",
    alt: "Email Correspondence 2",
    caption: "Part 2: Discussion with Jonathan Nguyen"
  },
  {
    src: "/Images/email-03.jpg",
    alt: "Email Correspondence 3",
    caption: "Part 3: Request for clarification on payout"
  },
  {
    src: "/Images/email-04.jpg",
    alt: "Email Correspondence 4",
    caption: "Part 4: Further exchange regarding traffic quality"
  },
  {
    src: "/Images/email-05.jpg",
    alt: "Email Correspondence 5",
    caption: "Part 5: Escalation of the issue"
  },
  {
    src: "/Images/email-06.jpg",
    alt: "Email Correspondence 6",
    caption: "Part 6: Notice of account review"
  },
  {
    src: "/Images/email-07.jpg",
    alt: "Email Correspondence 7",
    caption: "Part 7: Final communication before termination"
  }
];

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [evidenceImages] = useState<EvidenceImage[]>(INITIAL_EVIDENCE_IMAGES);
  const [emailImages] = useState<EvidenceImage[]>(EMAIL_EVIDENCE_IMAGES);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-slate-900 font-sans">

      {/* Navigation / Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-background/95 backdrop-blur-sm border-slate-200 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg md:text-xl tracking-tight">
            <ShieldAlert className="text-red-500" size={24} />
            <span>TRANSPARENCY<span className="text-slate-500">REPORT</span></span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#overview" className="hover:text-slate-900 transition-colors">Overview</a>
            <a href="#emails" className="hover:text-slate-900 transition-colors">Communication</a>
            <a href="#evidence" className="hover:text-slate-900 transition-colors">Evidence</a>
            <a href="#concerns" className="hover:text-slate-900 transition-colors">Key Concerns</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Grid decorative */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 text-xs font-semibold uppercase tracking-wider mb-6">
            <AlertTriangle size={14} />
            Public Affiliate Complaint
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Account Terminated.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-500">
              Payments Withheld.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed mb-8">
            A public transparency report regarding my experience as an affiliate marketer for <span className="text-slate-900 font-semibold">LucidTrading.com</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#overview" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">
              Read the Report
              <ChevronRight size={18} />
            </a>
            <a href="#evidence" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors">
              View Evidence
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <Section id="overview" title="Overview" icon={<FileText />}>
        <p className="mb-6">
          This document serves as a <strong>public complaint and transparency report</strong>. It details my experience as an affiliate marketer for LucidTrading.com.
        </p>
        <div className="bg-slate-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
          <p className="text-slate-800 italic">
            "I am publishing this statement to request a clear explanation, accountability, and transparency from Lucid Trading regarding the unilateral termination of my affiliate account and the withholding of recorded commissions."
          </p>
        </div>
        <p>
          This report is not an accusation of criminal conduct but a presentation of facts regarding the sudden removal of a high-performing affiliate account without warning or justification.
        </p>
      </Section>

      {/* Background Section */}
      <Section id="background" title="Background" icon={<Calendar />}>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-slate-900 font-semibold mb-4 text-lg">Role Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-blue-50 rounded text-blue-600"><Users size={16} /></div>
                <div>
                  <span className="block text-slate-500 text-xs uppercase">Role</span>
                  <span className="text-slate-900">Affiliate Marketer</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-blue-50 rounded text-blue-600"><Search size={16} /></div>
                <div>
                  <span className="block text-slate-500 text-xs uppercase">Target Website</span>
                  <span className="text-slate-900">LucidTrading.com</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-blue-50 rounded text-blue-600"><Calendar size={16} /></div>
                <div>
                  <span className="block text-slate-500 text-xs uppercase">Promotion Period</span>
                  <span className="text-slate-900">Oct 16, 2025 – Dec 18, 2025</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-slate-900 font-semibold mb-4 text-lg border-b border-slate-200 pb-2">Performance Summary</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Referred tens of thousands of real users
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Legitimate, organic, conversion-based traffic
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Consistent commission earnings recorded
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                No prior warnings or violations
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Key Facts & Timeline Section */}
      <Section id="timeline" title="Key Facts & Timeline Summary" icon={<Calendar />}>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

          {/* Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-[.is-active]:bg-emerald-50 group-[.is-active]:border-emerald-200 text-slate-400 group-[.is-active]:text-emerald-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Users size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900">1. Affiliate Relationship</span>
                <span className="text-xs font-mono text-emerald-600 border border-emerald-200 bg-emerald-50 px-2 py-0.5 rounded">Oct 16 - Dec 18</span>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm list-disc pl-4 marker:text-slate-400">
                <li>I was an official affiliate partner of <span className="text-slate-900">LucidTrading.com</span>.</li>
                <li>Referred <strong className="text-slate-900">tens of thousands</strong> of real users through my affiliate links.</li>
                <li>All traffic and conversions were recorded and tracked inside Lucid Trading’s own affiliate dashboard.</li>
              </ul>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-[.is-active]:bg-emerald-50 group-[.is-active]:border-emerald-200 text-slate-400 group-[.is-active]:text-emerald-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <DollarSign size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900">2. Recorded Commissions</span>
                <span className="text-xs font-mono text-emerald-600 border border-emerald-200 bg-emerald-50 px-2 py-0.5 rounded">Verified Stats</span>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm list-disc pl-4 marker:text-slate-400">
                <li>Over <strong className="text-emerald-600">$40,000 USD</strong> in unpaid commissions displayed on the dashboard.</li>
                <li>Multiple days with <strong className="text-slate-900">$2,000–$5,000 USD</strong> in daily earnings.</li>
                <li>Figures generated by Lucid Trading’s internal system, not third-party tools.</li>
                <li>No disputes or invalidation notices were shown at the time.</li>
              </ul>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-[.is-active]:bg-blue-50 group-[.is-active]:border-blue-200 text-slate-400 group-[.is-active]:text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Mail size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.1)] relative">
              <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-blue-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm">Key Evidence</div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-blue-600">3. First Email From Lucid Trading</span>
                <span className="text-xs font-mono text-blue-600">Dec 10, 2025</span>
              </div>
              <p className="text-xs text-slate-500 mb-3 border-b border-slate-200 pb-2">
                Sender: Jonathan Nguyen (Live Trading Manager)
              </p>
              <ul className="space-y-2 text-slate-700 text-sm list-disc pl-4 marker:text-blue-500">
                <li>Lucid Trading <strong className="text-slate-900">acknowledged</strong> the existence of generated affiliate commissions.</li>
                <li>Stated payouts were paused pending a Zoom call.</li>
                <li>Requested disclosure of marketing platforms/traffic sources.</li>
                <li>Referenced general affiliate fraud but <strong className="text-slate-900">did not accuse me personally</strong> or specify any violation.</li>
              </ul>
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-[.is-active]:bg-amber-50 group-[.is-active]:border-amber-200 text-slate-400 group-[.is-active]:text-amber-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <AlertTriangle size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900">4. Lack of Formal Violation Notice</span>
              </div>
              <p className="text-sm text-slate-600 mb-2">At no point did Lucid Trading:</p>
              <ul className="space-y-2 text-slate-600 text-sm list-disc pl-4 marker:text-amber-500">
                <li>Identify a specific policy violation.</li>
                <li>Provide evidence of invalid traffic.</li>
                <li>Issue a formal warning or strike.</li>
                <li>Offer a written appeal or dispute process.</li>
              </ul>
            </div>
          </div>

          {/* Item 5 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-[.is-active]:bg-red-50 group-[.is-active]:border-red-200 text-slate-400 group-[.is-active]:text-red-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <ShieldAlert size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-red-200 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-red-600">5. Account Termination</span>
                <span className="text-xs font-mono text-red-700">Dec 18, 2025</span>
              </div>
              <ul className="space-y-2 text-slate-700 text-sm list-disc pl-4 marker:text-red-500">
                <li>Affiliate account was <strong>unilaterally deleted</strong>.</li>
                <li>Without prior warning.</li>
                <li>Without written justification.</li>
                <li>Without resolution of the recorded unpaid commissions.</li>
                <li>Follow-up emails received no response.</li>
              </ul>
            </div>
          </div>

          {/* Item 6 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-[.is-active]:bg-slate-100 text-slate-400 group-[.is-active]:text-slate-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Search size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900">6. Core Concerns</span>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm list-disc pl-4 marker:text-slate-400">
                <li>Recorded commissions acknowledged but never paid.</li>
                <li>Termination occurred <em>after</em> significant traffic/revenue generated.</li>
                <li>No transparent explanation or due process provided.</li>
                <li>No official statement on unpaid earnings.</li>
              </ul>
            </div>
          </div>

          {/* Item 7 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-[.is-active]:bg-slate-100 text-slate-400 group-[.is-active]:text-slate-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <InfoCard size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900">7. Purpose of Publication</span>
              </div>
              <p className="text-sm text-slate-600">
                This summary is published for <strong>transparency and community awareness</strong>. It does not make allegations of criminal wrongdoing but presents verifiable facts, documented timelines, and system-generated data.
              </p>
            </div>
          </div>

        </div>
      </Section>

      {/* NEW SECTION: Email Communication History */}
      <Section id="emails" title="Communication History" icon={<MessageSquare />}>
        <p className="mb-6">
          The following images document the email correspondence between myself and <strong>Jonathan Nguyen</strong> (Affiliate Manager at Lucid Trading). This thread demonstrates the lack of clear communication prior to the sudden termination.
        </p>

        <EvidenceGallery
          images={emailImages}
          title="Email Thread (Chronological Order)"
          aspect="vertical" // Ensures email screenshots aren't cropped awkwardly
          layout="timeline"
        />
        <p className="text-sm text-slate-500 italic mt-4">
          * Click on any image to enlarge and read the full text.
        </p>
      </Section>

      {/* Evidence Section */}
      <Section id="evidence" title="Financial Evidence" icon={<TrendingUp />}>


        {/* Gallery Section */}
        <EvidenceGallery
          images={evidenceImages}
          title="Dashboard Screenshots"
          aspect="video"
          cols={1}
        />

        <p className="text-sm text-slate-500 italic mt-8 text-center">
          * Screenshots taken on Dec 16 and Dec 18, 2025, immediately prior to loss of access.
        </p>
      </Section>

      {/* Key Concerns */}
      <Section id="concerns" title="Key Concerns" icon={<AlertTriangle />}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-400 transition-colors">
            <h3 className="font-bold text-slate-900 mb-2">Lack of Warning</h3>
            <p className="text-slate-600">Why was an affiliate delivering high-quality traffic (34% conversion rate) and significant revenue removed without a single warning?</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-400 transition-colors">
            <h3 className="font-bold text-slate-900 mb-2">Policy Silence</h3>
            <p className="text-slate-600">Why was no reason or specific policy violation disclosed at the time of termination?</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-400 transition-colors">
            <h3 className="font-bold text-slate-900 mb-2">Confiscated Funds</h3>
            <p className="text-slate-600">What happens to the <strong>$40,368.97</strong> USD in commissions already recorded and verified in the system?</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-400 transition-colors">
            <h3 className="font-bold text-slate-900 mb-2">Standard Practice?</h3>
            <p className="text-slate-600">Is this the standard treatment for affiliates once they have successfully generated traffic and revenue?</p>
          </div>
        </div>
      </Section>

      {/* Public Notice / Call to Action */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Conclusion & Public Notice</h2>

          <div className="bg-white p-8 rounded-2xl border-2 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.1)] mb-10 text-left">
            <p className="mb-6 text-xl md:text-2xl font-semibold text-slate-900">I respectfully request that <strong>LucidTrading.com</strong>:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-900 border border-slate-300 flex items-center justify-center font-bold text-base">1</div>
                <span className="text-lg md:text-xl text-slate-700 pt-0.5">Provide a <strong className="text-slate-900">public and documented explanation</strong> for this account termination.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-900 border border-slate-300 flex items-center justify-center font-bold text-base">2</div>
                <span className="text-lg md:text-xl text-slate-700 pt-0.5">Clarify the status of the <strong className="text-slate-900">unpaid affiliate commissions</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-900 border border-slate-300 flex items-center justify-center font-bold text-base">3</div>
                <span className="text-lg md:text-xl text-slate-700 pt-0.5">Establish a transparent appeal or dispute resolution process.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-base shadow-lg shadow-red-900/50">4</div>
                <span className="text-lg md:text-xl text-white font-bold pt-0.5">I demand LucidTrading to reopen my account.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-base shadow-lg shadow-red-900/50">5</div>
                <span className="text-lg md:text-xl text-white font-bold pt-0.5">Must pay my remaining unpaid commissions.</span>
              </li>
            </ul>
          </div>

          <div className="inline-block p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm mb-12">
            <p className="font-bold mb-1 flex items-center justify-center gap-2">
              <AlertTriangle size={16} /> ADVISORY
            </p>
            Until this matter is resolved, I advise other affiliates to exercise caution and ensure they fully understand the risks involved when promoting this platform.
          </div>

          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            This document is shared in good faith for transparency and community awareness. It does not accuse Lucid Trading of fraud or criminal wrongdoing, but seeks clarity based on verifiable data.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-background text-center">
        <div className="container mx-auto px-4 text-slate-600 text-sm">
          <p>© 2026 Transparency Report. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;