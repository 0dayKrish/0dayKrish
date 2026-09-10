import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  identity: {
    name: "Krish Sharma",
    handle: "0daykrish",
    role: "Cybersecurity Researcher",
    subRole: "Community Builder & AI Security Practitioner",
    tagline:
      "Working across offensive security, web application security, AI Security, vulnerability research, penetration testing, and cybersecurity community building.",
    location: "Vadodara / Gujarat, India",
    status: "OPEN TO RESEARCH & SECURITY DISCUSSIONS",
    uptimeDate: "2025-06-01T00:00:00Z", // BSides Vadodara founding milestone
    social: {
      linkedin: "https://linkedin.com/in/0daykrish",
      github: "https://github.com/0daykrish",
      emailWork: "krish@bsidesvadodara.in",
      emailPersonal: "0daykrish@gmail.com",
      bsidesUrl: "https://bsidesvadodara.in",
    },
  },

  about: {
    headline: "RESEARCHING ATTACK VECTORS. FORTIFYING SYSTEMS. EMPOWERING THE COMMUNITY.",
    manifestoParagraphs: [
      "I am a cybersecurity researcher, penetration tester, and community builder focused on technical offensive security, web and API security testing, vulnerability research, and the emerging frontier of AI and LLM security.",
      "Rather than treating security as an afterthought or a checkbox, my work centers on understanding how systems fail under adversarial conditions. From dissecting complex access-control logic and authentication flaws in modern web architectures to probing LLMs for prompt injections and attack surface vulnerabilities, I approach systems with a rigorous, methodical mindset.",
      "Beyond technical research, I am deeply committed to ecosystem growth. As the Founder of BSides Vadodara, I bridge the gap between ambitious students, active vulnerability researchers, seasoned security practitioners, and industry leaders through conferences, technical workshops, and collaborative knowledge-sharing.",
    ],
    stats: [
      {
        label: "COMMUNITY_FOUNDED",
        value: "BSides Vadodara",
        subtext: "Independent Security Initiative",
      },
      {
        label: "AI_SECURITY",
        value: "MSec-CAIS",
        subtext: "Certified AI Security Expert",
      },
      {
        label: "CORE_FOCUS",
        value: "Offensive / Web / AI",
        subtext: "Penetration Testing & Red Teaming",
      },
      {
        label: "COMMUNITY_PERIOD",
        value: "Jun 2025 - Present",
        subtext: "Leading Community Operations",
      },
    ],
  },

  skillCategories: [
    {
      id: "offensive-sec",
      title: "OFFENSIVE & APPLICATION SECURITY",
      description: "Hands-on vulnerability assessment, manual exploitation, and penetration testing methodologies.",
      skills: [
        "Web Application Penetration Testing",
        "API Security Testing",
        "Vulnerability Assessment",
        "Network Penetration Testing",
        "Authentication & Authorization Testing",
        "Session Management Testing",
        "SQL Injection",
        "Cross-Site Scripting (XSS)",
        "IDOR / BOLA",
        "CSRF",
        "Security Misconfiguration",
        "Access Control Testing",
        "Manual Exploitation",
        "Security Testing & Remediation",
      ],
    },
    {
      id: "ai-frameworks",
      title: "FRAMEWORKS & AI SECURITY",
      description: "Adversarial testing of machine learning systems, prompt injection defense, and threat modeling frameworks.",
      skills: [
        "AI / LLM Security",
        "OWASP Top 10 for LLM Applications",
        "Prompt Injection Analysis",
        "LLM Attack Surface Analysis",
        "AI Security Testing",
        "OWASP Top 10",
        "OWASP API Security Top 10",
        "MITRE ATT&CK",
        "CWE & CVE / CVSS",
        "NIST Cybersecurity Framework",
        "STRIDE Threat Modeling",
      ],
    },
    {
      id: "sec-tools",
      title: "SECURITY TOOLS & PLATFORMS",
      description: "Industry-standard tooling for reconnaissance, packet inspection, proxying, and automated scanning.",
      skills: [
        "Burp Suite",
        "Nmap",
        "Wireshark",
        "Metasploit",
        "Nikto",
        "Gobuster",
        "ffuf",
        "SQLmap",
        "OWASP ZAP",
        "Kali Linux",
        "Git / GitHub",
        "SSH",
      ],
    },
    {
      id: "programming-automation",
      title: "PROGRAMMING & AUTOMATION",
      description: "Scripting and systems development for custom exploits, automation pipelines, and analysis.",
      skills: [
        "Python",
        "Java",
        "C / C++",
        "JavaScript",
        "Bash / Shell Scripting",
        "SQL",
        "HTML5 / CSS3",
        "REST APIs",
        "Automation Scripting",
      ],
    },
    {
      id: "cloud-infra",
      title: "CLOUD & INFRASTRUCTURE",
      description: "Core networking protocols, server hardening, virtualization, and attack surface minimization.",
      skills: [
        "Linux Administration",
        "Windows Server",
        "Networking & TCP/IP",
        "DNS & HTTP/HTTPS Protocols",
        "Firewalls & Packet Filtering",
        "Web Servers (Nginx, Apache)",
        "Virtualization",
        "Cloud Security Fundamentals",
        "Infrastructure Security",
        "Server Hardening",
      ],
    },
    {
      id: "sec-engineering",
      title: "SECURITY ENGINEERING & MONITORING",
      description: "Defensive controls, hardening baselines, log telemetry, and proactive remediation.",
      skills: [
        "Security Hardening",
        "Secure Configuration",
        "Vulnerability Remediation",
        "Security Assessment",
        "Log Analysis",
        "Firewall Monitoring",
        "Incident Analysis",
        "Authentication Security",
        "Secure HTTP Headers",
        "Session Security Controls",
        "SIEM Fundamentals",
      ],
    },
  ],

  featuredProjects: [
    {
      id: "ai-prompt-eval",
      title: "LLM Guardrail & Prompt Injection Testbed",
      summary:
        "An adversarial testing harness designed to evaluate large language model applications against OWASP Top 10 for LLM vulnerabilities, indirect prompt injections, and system prompt leakage.",
      impact:
        "Simulates multi-turn jailbreak attempts, evaluates guardrail bypass rates, and generates structured security evaluation reports.",
      category: "AI & LLM Security",
      technologies: ["Python", "OpenAI / Claude API", "Prompt Injection", "OWASP LLM Top 10", "FastAPI"],
      year: "2025",
      githubUrl: "https://github.com/0daykrish",
      caseStudy: {
        overview:
          "With the rapid adoption of agentic LLM systems, prompt injection and jailbreaks represent direct risks to application business logic. This project evaluates model vulnerabilities against automated injection payloads.",
        objectives: [
          "Benchmark LLM guardrails against direct and indirect prompt injections",
          "Test extraction resistance of system instructions and sensitive context",
          "Automate scoring of model susceptibility using adversarial heuristics",
        ],
        technicalHighlights: [
          "Synthesizes 50+ adversarial jailbreak techniques across token manipulation, character obfuscation, and cognitive deception",
          "Validates output against strict delimiter enforcement and data sanitization filters",
          "Generates structured JSON and Markdown audit logs with CVSS-inspired risk vectors",
        ],
        findingsOrResults: [
          "Demonstrated that heuristic guardrails without semantic validation could be bypassed via multi-turn framing",
          "Implemented defense-in-depth sanitization reducing injection success significantly in test harnesses",
        ],
        keyTakeaway:
          "AI security requires treating natural language user input with the same zero-trust model historically applied to untrusted SQL or shell commands.",
      },
    },
    {
      id: "web-recon-pipeline",
      title: "Automated Attack Surface & Reconnaissance Engine",
      summary:
        "A modular offensive reconnaissance and asset discovery toolchain for mapping web applications, discovering hidden endpoints, parameter fuzzing, and auditing exposed headers.",
      impact:
        "Accelerates penetration testing scope discovery by automating multi-stage subdomain enumeration, technology profiling, and ffuf-based fuzzing workflows.",
      category: "Offensive Security",
      technologies: ["Bash", "Python", "ffuf", "Nmap", "Nikto", "Linux"],
      year: "2024",
      githubUrl: "https://github.com/0daykrish",
      caseStudy: {
        overview:
          "During web application penetration tests, thorough reconnaissance is critical to uncovering forgotten staging endpoints, misconfigured headers, and exposed administrative interfaces.",
        objectives: [
          "Unify asynchronous asset discovery and virtual host detection into a streamlined pipeline",
          "Automate security header and SSL/TLS cipher audit checks",
          "Export standardized target profiles for manual Burp Suite deeper inspection",
        ],
        technicalHighlights: [
          "Orchestrates fast endpoint probing using custom wordlists tuned for modern microservices",
          "Integrated rate-limiting aware fuzzing to minimize detection and avoid service disruption",
          "Automates baseline scans across target subdomains with consolidated reporting",
        ],
        findingsOrResults: [
          "Drastically cut reconnaissance time during security assessments while surfacing shadowed endpoints",
          "Flagged missing security headers (HSTS, CSP, X-Frame-Options) across testing environments",
        ],
        keyTakeaway:
          "Effective offensive security is built on meticulous reconnaissance—understanding every entry point before initiating targeted exploitation.",
      },
    },
    {
      id: "api-bola-auditor",
      title: "API Security & BOLA / IDOR Verification Lab",
      summary:
        "A dedicated testing environment and test suite modeling Broken Object Level Authorization (BOLA) and Broken Object Property Level Authorization (BOPLA) scenarios in modern REST APIs.",
      impact:
        "Provides reproducible test fixtures for testing authorization enforcement across tenant boundaries, UUID vs integer identifiers, and role-based access matrix validation.",
      category: "Web Security",
      technologies: ["Python", "REST APIs", "Burp Suite", "OWASP API Top 10", "SQL"],
      year: "2024",
      githubUrl: "https://github.com/0daykrish",
      caseStudy: {
        overview:
          "BOLA remains the #1 risk on the OWASP API Security Top 10. This lab environment simulates real-world SaaS multi-tenancy access-control logic to practice and validate remediation strategies.",
        objectives: [
          "Demonstrate exploitation mechanisms of IDOR and BOLA in microservices architectures",
          "Implement robust user-context validation on every object retrieval query",
          "Create automated test scripts to detect unauthorized cross-tenant data access",
        ],
        technicalHighlights: [
          "Simulated multi-tenant user authentication with JWT validation and scoped permissions",
          "Mapped stateful parameter tampering vectors across nested API routes",
          "Provided side-by-side vulnerable vs hardened code patterns",
        ],
        findingsOrResults: [
          "Proved that frontend UI role checks provide zero security without backend database query ownership verification",
          "Codified strict object ownership checks into reusable API security patterns",
        ],
        keyTakeaway:
          "Never rely on obscure identifiers or client-side trust; object-level access must be explicitly authorized at the database query layer.",
      },
    },
    {
      id: "network-telemetry-sentinel",
      title: "Network Packet Analyzer & Telemetry Monitor",
      summary:
        "A lightweight network traffic inspection and protocol monitoring script utilizing Wireshark/tshark primitives and Python socket analysis to audit unusual connection patterns.",
      impact:
        "Analyzes TCP/UDP connection states, highlights unencrypted plaintext protocols (HTTP/FTP/Telnet), and flags unexpected DNS tunneling heuristics.",
      category: "Network Security",
      technologies: ["Python", "Wireshark", "TCP/IP", "Networking", "Linux"],
      year: "2024",
      githubUrl: "https://github.com/0daykrish",
      caseStudy: {
        overview:
          "Understanding low-level packet flow is essential for both penetration testing and infrastructure hardening. This tool provides real-time protocol telemetry across local interfaces.",
        objectives: [
          "Inspect raw network frames to identify cleartext credential transmissions",
          "Audit outbound DNS query rates for anomalies",
          "Verify firewall boundary enforcement across internal subnets",
        ],
        technicalHighlights: [
          "Python packet parser capturing SYN/ACK handshakes and analyzing packet headers",
          "Automated rule checks against known insecure ports and legacy protocols",
          "Real-time console telemetry with colorized severity alerts",
        ],
        findingsOrResults: [
          "Detected lingering legacy cleartext services in test lab subnets",
          "Validated proper TLS termination on internal load balancers",
        ],
        keyTakeaway:
          "Deep networking knowledge (TCP/IP, DNS, routing) is the bedrock of both offensive exploitation and defensive engineering.",
      },
    },
  ],

  researchAndWriteups: [
    {
      id: "research-01",
      title: "Dissecting BOLA: Systematic Methodology for Identifying Broken Object-Level Authorization",
      scope: "API Security & Access Control",
      category: "Web App Security",
      date: "2025",
      summary:
        "A practical technical guide detailing the identification and manual verification of BOLA/IDOR vulnerabilities in modern single-page applications and REST APIs.",
      tags: ["API Security", "BOLA", "IDOR", "Burp Suite", "OWASP API #1"],
      findingsHighlight:
        "Focuses on parameter pollution, nested object paths, and the difference between synthetic GUID obscurity and genuine server-side authorization checks.",
      reportDetails: {
        targetType: "RESTful API / Single-Page Application",
        vulnerabilityClass: "CWE-639: Authorization Bypass Through User-Controlled Key",
        severity: "HIGH",
        attackVector: "Stateful parameter tampering on user-controlled object identifiers",
        remediation:
          "Enforce tenant ownership validation at the data-access layer via session context rather than client-supplied parameters.",
      },
    },
    {
      id: "research-02",
      title: "Attack Vectors in Large Language Models: Prompt Injections & Context Contamination",
      scope: "AI Security & Adversarial Testing",
      category: "AI/LLM Threat Analysis",
      date: "2025",
      summary:
        "An exploration of how adversarial natural language prompts hijack instruction hierarchies, bypass system guardrails, and exfiltrate sensitive instructions in RAG architectures.",
      tags: ["AI Security", "LLM Top 10", "Prompt Injection", "Red Teaming", "RAG"],
      findingsHighlight:
        "Demonstrated vulnerabilities where untrusted retrieved documents override the primary system directive through synthetic delimiter tokens.",
      reportDetails: {
        targetType: "LLM Agentic RAG Application",
        vulnerabilityClass: "OWASP LLM01: Prompt Injection",
        severity: "CRITICAL",
        attackVector: "Indirect prompt injection embedded within ingested third-party documentation",
        remediation:
          "Implement strict structural segregation between control instructions and data context, coupled with semantic guardrail verification.",
      },
    },
    {
      id: "research-03",
      title: "Practical Privilege Escalation & Session Flaws in Modern JWT Implementations",
      scope: "Authentication & Cryptography",
      category: "Vulnerability Research",
      date: "2024",
      summary:
        "Technical analysis of misconfigured JSON Web Token validation routines, including algorithm confusion ('none' & RS256/HS256 key confusion) and weak secret key auditing.",
      tags: ["JWT", "Authentication", "Session Security", "Burp Suite", "Manual Exploitation"],
      findingsHighlight:
        "Highlights the distinction between token decryption and signature verification, demonstrating how flawed libraries accept unauthorized claims.",
      reportDetails: {
        targetType: "Web Authentication Service",
        vulnerabilityClass: "CWE-287: Improper Authentication",
        severity: "HIGH",
        attackVector: "Signature verification bypass through algorithm confusion and header manipulation",
        remediation:
          "Explicitly enforce algorithm whitelisting server-side and ensure cryptographic keys have adequate entropy.",
      },
    },
    {
      id: "research-04",
      title: "Methodical Reconnaissance: From Scope Definition to High-Value Attack Surfaces",
      scope: "Penetration Testing Methodology",
      category: "CTF / Methodology",
      date: "2024",
      summary:
        "A structured playbook for security practitioners on conducting active and passive reconnaissance without generating redundant noise or triggering false positives.",
      tags: ["Reconnaissance", "Nmap", "ffuf", "Network Security", "OSINT"],
      findingsHighlight:
        "Systematic correlation of DNS records, SSL SAN entries, technology fingerprinting, and targeted parameter fuzzing.",
      reportDetails: {
        targetType: "Enterprise Perimeter & Web Endpoints",
        vulnerabilityClass: "CWE-200: Exposure of Sensitive Information",
        severity: "MEDIUM",
        attackVector: "Exposed development endpoints and unindexed administrative interfaces",
        remediation:
          "Implement continuous external attack surface management (EASM) and strict ingress routing policies.",
      },
    },
  ],

  experience: [
    {
      id: "bsides-vadodara",
      role: "Founder & Community Lead",
      organization: "BSides Vadodara",
      location: "Vadodara, Gujarat, India",
      period: "June 2025 - Present",
      isCurrent: true,
      type: "Community & Leadership",
      websiteUrl: "https://bsidesvadodara.in",
      description:
        "Founded and actively lead BSides Vadodara, an independent community-driven cybersecurity conference and organization connecting students, ethical hackers, security researchers, and enterprise professionals.",
      highlights: [
        "Spearhead community building initiatives to bring together curious students, independent researchers, and seasoned cybersecurity practitioners under one collaborative ecosystem.",
        "Architect and organize cybersecurity events, workshops, technical talks, and community meetups focused on offensive security, AI defense, and hands-on skills.",
        "Lead sponsorship outreach, institutional partnerships, and professional networking to ensure conference sustainability and accessible learning for all attendees.",
        "Coordinate speaker selection, CFP reviews, technical tracks, and student mentorship programs.",
        "Manage a dedicated team of volunteers and drive end-to-end event operations across logistics, venue coordination, digital presence, and communications.",
      ],
    },
    {
      id: "security-researcher-independent",
      role: "Cybersecurity Practitioner & Vulnerability Researcher",
      organization: "Independent Technical Security",
      location: "India / Remote",
      period: "Ongoing",
      isCurrent: true,
      type: "Security Research",
      description:
        "Conducting independent security research, web application penetration testing, vulnerability assessments, and AI security experiments.",
      highlights: [
        "Perform manual penetration testing across web applications, APIs, and network endpoints following OWASP Top 10 and NIST frameworks.",
        "Research attack surface vulnerabilities in emerging AI/LLM applications, focusing on prompt injection vectors, jailbreaking resistance, and data privacy.",
        "Participate in CTF challenges and develop automated scripts for security auditing, fuzzing, and reconnaissance.",
        "Document and publish technical findings, methodology breakdowns, and remediation advisories for developer and security audiences.",
      ],
    },
  ],

  certifications: [
    {
      id: "cais",
      name: "Modern Security Certified AI Security Expert (MSec-CAIS)",
      issuer: "Modern Security",
      category: "AI Security",
      status: "Certified",
    },
    {
      id: "ccst-net",
      name: "Cisco Certified Support Technician (CCST) – Networking",
      issuer: "Cisco",
      category: "Networking",
      status: "Certified",
    },
    {
      id: "palo-alto",
      name: "Cybersecurity Foundation Student Certificate",
      issuer: "Palo Alto Networks",
      category: "Security Fundamentals",
      status: "Completed",
    },
    {
      id: "ibm-python",
      name: "Python Programming Certificate",
      issuer: "IBM Developer",
      category: "Software & Automation",
      status: "Completed",
    },
    {
      id: "certiport-js",
      name: "IT Specialist – JavaScript",
      issuer: "Certiport",
      category: "Software & Automation",
      status: "Certified",
    },
    {
      id: "certiport-html-css",
      name: "IT Specialist – HTML & CSS",
      issuer: "Certiport",
      category: "Software & Automation",
      status: "Certified",
    },
  ],

  bsidesVadodara: {
    role: "Founder & Community Lead",
    period: "June 2025 - Present",
    title: "BSides Vadodara",
    subtitle: "Security Conference & Community Initiative",
    url: "https://bsidesvadodara.in",
    overview:
      "BSides Vadodara is an independent, community-driven cybersecurity conference and ecosystem in Vadodara, Gujarat. Part of the global Security BSides movement, its mission is to democratize security education, provide a stage for grassroots researchers, and bridge the divide between academic talent and enterprise cybersecurity leaders.",
    pillars: [
      {
        number: "01",
        title: "COMMUNITY & ECOSYSTEM BUILDING",
        description:
          "Connecting curious students, aspiring analysts, independent vulnerability hunters, and corporate CISOs in an open, inclusive, vendor-neutral environment.",
      },
      {
        number: "02",
        title: "CONFERENCE & TECHNICAL SESSIONS",
        description:
          "Curating in-depth security presentations, vulnerability case studies, and live demonstrations across web security, reverse engineering, cloud defense, and AI security.",
      },
      {
        number: "03",
        title: "HANDS-ON WORKSHOPS & VILLAGES",
        description:
          "Organizing interactive technical training, capture-the-flag competitions, and practical skill-building workshops led by practicing professionals.",
      },
      {
        number: "04",
        title: "SPONSORSHIPS, CFP & OPERATIONS",
        description:
          "Leading end-to-end conference execution: speaker CFP curation, corporate sponsorship partnerships, volunteer management, marketing, and logistics.",
      },
    ],
    impactMetrics: [
      {
        label: "ROLE",
        detail: "Founder & Community Lead",
      },
      {
        label: "TIMELINE",
        detail: "June 2025 - Present",
      },
      {
        label: "MISSION",
        detail: "Democratizing Cybersecurity Knowledge in Gujarat",
      },
      {
        label: "OFFICIAL_PORTAL",
        detail: "bsidesvadodara.in",
      },
    ],
  },
};
