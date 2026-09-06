import { useState, useRef } from "react";
import {
  ExternalLink,
  ChevronRight,
  MapPin,
  Clock,
  Building2,
  Check,
  AlertCircle,
  Share2,
  Briefcase,
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { toast } from "sonner";

// ============================================================================
// OFFICIAL GOOGLE FORM LINK - Noble Citizen Foundation / Tech4Growth
// ============================================================================
const GOOGLE_FORM_URL = "https://forms.gle/7BwswZS6TzaruXBXA";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  team: string;
  type: string;
  duration: string;
  stipend: string;
  location: string;
  shortDescription: string;
  aboutRole: string;
  whatYouWillWorkOn: string[];
  whatYouWillLearn: string[];
  technologies: { name: string; category: string }[];
  whoShouldApply: string[];
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: "full-stack-intern",
    title: "FULL STACK DEVELOPER INTERN",
    department: "Engineering",
    team: "NCF Web Team",
    type: "Volunteer Internship",
    duration: "6 Months",
    stipend: "Unpaid",
    location: "Remote / Hybrid (India)",
    shortDescription:
      "Gain hands-on experience building real-world web projects with the NCF Web Team.",
    aboutRole:
      "We are looking for curious and committed individuals who want to learn, contribute, and gain hands-on experience by working on real-world projects. This opportunity is designed for people who want to move beyond tutorials and start building.",
    whatYouWillWorkOn: [
      "Frontend development",
      "Backend development",
      "APIs and integrations",
      "Database work",
      "Bug fixing",
      "UI improvements",
      "Real project features",
    ],
    whatYouWillLearn: [
      "Practical web development",
      "Team collaboration",
      "GitHub workflows",
      "Real project development",
      "Problem solving",
      "Professional development practices",
    ],
    technologies: [
      { name: "React.js", category: "Frontend" },
      { name: "Python", category: "Backend / Scripting" },
      { name: "Node.js", category: "Backend Runtime" },
      { name: "AWS", category: "Cloud Infrastructure" },
      { name: "Docker", category: "Containerization" },
      { name: "GitHub", category: "Version Control" },
    ],
    whoShouldApply: [
      "Students learning web development",
      "Beginners looking for practical experience",
      "Developers interested in full-stack development",
      "People who want to build real projects",
      "Curious and committed learners",
    ],
  },
  {
    id: "frontend-intern",
    title: "FRONTEND DEVELOPER INTERN",
    department: "Engineering",
    team: "NCF Web Team",
    type: "Volunteer Internship",
    duration: "6 Months",
    stipend: "Unpaid",
    location: "Remote / Hybrid (India)",
    shortDescription:
      "Learn to create responsive, accessible, and engaging web experiences while contributing to real projects.",
    aboutRole:
      "We are looking for curious and committed individuals who want to learn frontend development and contribute to real-world projects. This opportunity is designed for people who want to move beyond tutorials and start building practical web experiences.",
    whatYouWillWorkOn: [
      "Building responsive website interfaces",
      "Developing reusable UI components",
      "Improving website layouts and user experience",
      "Working with APIs and frontend integrations",
      "Fixing bugs and improving existing features",
      "Collaborating with designers and developers",
      "Contributing to real project features",
    ],
    whatYouWillLearn: [
      "Practical frontend development",
      "Responsive web design",
      "Component-based development",
      "GitHub workflows",
      "Team collaboration",
      "Problem solving",
      "Professional development practices",
    ],
    technologies: [
      { name: "HTML", category: "Markup" },
      { name: "CSS", category: "Styling" },
      { name: "JavaScript", category: "Logic & ES6" },
      { name: "React.js", category: "Frontend Framework" },
      { name: "Git / GitHub", category: "Version Control" },
    ],
    whoShouldApply: [
      "Students learning frontend development",
      "Beginners looking for practical experience",
      "People interested in web design and development",
      "Developers who want to improve their frontend skills",
      "Curious and committed learners",
    ],
  },
];

export default function Careers() {
  const [selectedJobId, setSelectedJobId] = useState<string>("full-stack-intern");
  const [copied, setCopied] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  const selectedJob =
    JOB_OPENINGS.find((job) => job.id === selectedJobId) || JOB_OPENINGS[0];

  const handleApplyClick = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectJob = (id: string) => {
    setSelectedJobId(id);
    if (window.innerWidth < 1024 && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navigation />
      <div className="bg-black pt-16 lg:pt-20 min-h-screen text-white font-sans selection:bg-[#D00D0D]/30 selection:text-white">
        
        {/* PAGE HEADER */}
        <header className="border-b border-white/10 bg-black py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D00D0D] bg-[#D00D0D]/10 border border-[#D00D0D]/20 px-3 py-1 rounded">
              CAREERS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-4 mb-3">
              Find Your Next Opportunity
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-normal leading-relaxed">
              Join the NCF Web Team and build real-world experience through meaningful projects.
            </p>
          </div>
        </header>

        {/* MAIN TWO-COLUMN MNC CORPORATE JOB LISTING LAYOUT */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: OPENINGS LIST (35-40% Width -> 5 cols on lg) */}
            <aside className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#D00D0D]" /> Open Positions
                </h2>
                <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  {JOB_OPENINGS.length} Available
                </span>
              </div>

              <div className="space-y-3">
                {JOB_OPENINGS.map((job) => {
                  const isSelected = job.id === selectedJobId;
                  return (
                    <button
                      key={job.id}
                      onClick={() => handleSelectJob(job.id)}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-200 relative group flex items-start justify-between gap-4 ${
                        isSelected
                          ? "bg-zinc-900 border-[#D00D0D] shadow-lg shadow-[#D00D0D]/10"
                          : "bg-zinc-950 border-white/10 hover:border-white/25 hover:bg-zinc-900/60"
                      }`}
                    >
                      {/* Active Indicator Bar */}
                      {isSelected && (
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#D00D0D] rounded-l-xl"></div>
                      )}

                      <div className="space-y-2 pl-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D00D0D] bg-[#D00D0D]/10 px-2 py-0.5 rounded">
                            {job.team}
                          </span>
                          <span className="text-[11px] font-medium text-gray-400">
                            • {job.duration}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-white group-hover:text-white transition-colors leading-snug">
                          {job.title}
                        </h3>

                        <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-normal">
                          {job.shortDescription}
                        </p>

                        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#D00D0D]" /> {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#D00D0D]" /> {job.location}
                          </span>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 mt-1 ${
                          isSelected
                            ? "text-[#D00D0D] translate-x-1"
                            : "text-gray-600 group-hover:text-gray-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Sidebar Note */}
              <div className="p-4 rounded-xl border border-white/10 bg-zinc-950/80 text-xs text-gray-400 space-y-1">
                <p className="font-semibold text-gray-300">Looking for other roles?</p>
                <p>New internship cycles and projects open periodically. Bookmark this portal for updates.</p>
              </div>
            </aside>

            {/* RIGHT COLUMN: SELECTED INTERNSHIP DETAILS PANEL (60-65% Width -> 7 cols on lg) */}
            <section
              ref={detailsRef}
              className="lg:col-span-7 bg-zinc-950 border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 space-y-8 sticky top-24 shadow-2xl"
            >
              {/* Header Info & Apply CTA */}
              <div className="pb-6 border-b border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D00D0D]">
                      <Building2 className="w-4 h-4 text-[#D00D0D]" />
                      <span>{selectedJob.team}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400">{selectedJob.duration} Volunteer Internship</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {selectedJob.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleShareClick}
                      className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-white/20 transition-all text-xs font-medium flex items-center gap-1.5"
                      title="Share Job"
                    >
                      <Share2 className="w-4 h-4 text-[#D00D0D]" />
                      <span className="hidden sm:inline">{copied ? "Copied" : "Share"}</span>
                    </button>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="pt-2">
                  <button
                    onClick={handleApplyClick}
                    className="inline-flex items-center justify-center space-x-2 bg-[#D00D0D] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#B00B0B] transition-all duration-200 shadow-md text-base w-full sm:w-auto"
                  >
                    <span>Apply Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ABOUT THE ROLE */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D00D0D]">
                  ABOUT THE ROLE
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                  {selectedJob.aboutRole}
                </p>
              </div>

              <hr className="border-white/10" />

              {/* WHAT YOU'LL WORK ON */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D00D0D]">
                  WHAT YOU'LL WORK ON
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2.5 pt-1">
                  {selectedJob.whatYouWillWorkOn.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D00D0D] shrink-0 mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-white/10" />

              {/* WHAT YOU'LL LEARN */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D00D0D]">
                  WHAT YOU'LL LEARN
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2.5 pt-1">
                  {selectedJob.whatYouWillLearn.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-[#D00D0D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-white/10" />

              {/* TECHNOLOGIES */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D00D0D]">
                  TECHNOLOGIES
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  {selectedJob.technologies.map((tech, idx) => (
                    <div key={idx} className="bg-white/5 p-3 rounded-lg border border-white/10 text-left">
                      <div className="text-sm font-bold text-white">{tech.name}</div>
                      <div className="text-[11px] text-gray-400">{tech.category}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 font-medium pt-1">
                  Technology exposure may vary depending on project requirements.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* WHO SHOULD APPLY? */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D00D0D]">
                  WHO SHOULD APPLY?
                </h3>
                <ul className="space-y-2.5 pt-1">
                  {selectedJob.whoShouldApply.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D00D0D] shrink-0 mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 font-medium pt-1">
                  You don't need to know everything. You need the willingness to learn and contribute.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* INTERNSHIP DETAILS TABLE */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D00D0D]">
                  INTERNSHIP DETAILS
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  <div className="bg-black p-3.5 rounded-lg border border-white/10">
                    <span className="text-[11px] text-gray-500 uppercase font-semibold block">Role</span>
                    <span className="text-sm font-bold text-white">{selectedJob.title}</span>
                  </div>
                  <div className="bg-black p-3.5 rounded-lg border border-white/10">
                    <span className="text-[11px] text-gray-500 uppercase font-semibold block">Duration</span>
                    <span className="text-sm font-bold text-white">{selectedJob.duration}</span>
                  </div>
                  <div className="bg-black p-3.5 rounded-lg border border-white/10">
                    <span className="text-[11px] text-gray-500 uppercase font-semibold block">Type</span>
                    <span className="text-sm font-bold text-white">{selectedJob.type}</span>
                  </div>
                  <div className="bg-black p-3.5 rounded-lg border border-white/10">
                    <span className="text-[11px] text-gray-500 uppercase font-semibold block">Stipend</span>
                    <span className="text-sm font-bold text-white">{selectedJob.stipend}</span>
                  </div>
                  <div className="bg-black p-3.5 rounded-lg border border-white/10">
                    <span className="text-[11px] text-gray-500 uppercase font-semibold block">Experience</span>
                    <span className="text-sm font-bold text-white">Beginners Welcome</span>
                  </div>
                  <div className="bg-black p-3.5 rounded-lg border border-white/10">
                    <span className="text-[11px] text-gray-500 uppercase font-semibold block">Location</span>
                    <span className="text-sm font-bold text-white">{selectedJob.location}</span>
                  </div>
                </div>
              </div>

              <hr className="border-white/10" />

              {/* IMPORTANT INFORMATION */}
              <div className="bg-black p-5 rounded-xl border border-white/10 flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-[#D00D0D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    IMPORTANT INFORMATION
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    This is a 6-month volunteer internship opportunity. It is unpaid, but selected interns will gain practical experience, mentorship, and the opportunity to contribute to real-world projects.
                  </p>
                </div>
              </div>

              <hr className="border-white/10" />

              {/* APPLICATION PROCESS */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D00D0D]">
                  APPLICATION PROCESS
                </h3>
                <div className="grid sm:grid-cols-3 gap-3 pt-1">
                  {[
                    { step: "01 — Apply", text: "Submit your application through our Google Form." },
                    { step: "02 — Connect", text: "Our team reviews your application and contacts shortlisted candidates." },
                    { step: "03 — Build", text: "Start learning, contributing, and working on real projects." },
                  ].map((s, idx) => (
                    <div key={idx} className="bg-black p-4 rounded-lg border border-white/10 space-y-1">
                      <span className="text-xs font-mono font-bold text-[#D00D0D] block">{s.step}</span>
                      <p className="text-xs text-gray-300 leading-relaxed">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-white/10" />

              {/* FINAL CTA AT BOTTOM OF DETAILS PANEL */}
              <div className="pt-2 bg-black p-6 md:p-8 rounded-xl border border-white/10 text-center space-y-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Ready to Build Something Real?
                </h3>
                <button
                  onClick={handleApplyClick}
                  className="inline-flex items-center justify-center space-x-2 bg-[#D00D0D] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#B00B0B] transition-all duration-200 shadow-md text-base w-full sm:w-auto"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

            </section>
          </div>
        </main>

        {/* FOOTER NOTICE */}
        <footer className="border-t border-white/10 py-8 bg-black text-center text-xs text-gray-500 font-mono mt-12">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-gray-300 font-semibold">Noble Citizen Foundation</span> • Tech4Growth • NCF Web Team
            </div>
            <div className="text-gray-400">
              "Work. Learn. Grow. Impact."
            </div>
          </div>
        </footer>

      </div>
      <Footer />
    </>
  );
}
