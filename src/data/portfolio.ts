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

  currentlyFocus: [
    {
      id: "current-research",
      index: "01",
      category: "RESEARCH",
      title: "Offensive Security & AI Threat Vectors",
      subtitle: "Vulnerability Research & Adversarial Testing",
      description:
        "Investigating broken object authorization boundaries (BOLA/IDOR) in modern REST APIs and researching prompt injection attack vectors against RAG and agentic LLM systems.",
      status: "ACTIVE",
      tags: ["Web App Security", "BOLA / IDOR", "OWASP LLM Top 10", "Burp Suite"],
      linkHref: "#research",
      linkLabel: "EXPLORE RESEARCH DOSSIERS",
    },
    {
      id: "current-bsides",
      index: "02",
      category: "BUILDING",
      title: "BSides Vadodara Ecosystem",
      subtitle: "Community Leadership & Operations",
      description:
        "Directing community operations for Western India's independent security conference, coordinating CFP reviews, organizing hands-on workshops, and bridging academia with enterprise cybersecurity.",
      status: "ACTIVE",
      tags: ["Security BSides", "CFP Direction", "Workshops", "Vadodara"],
      linkHref: "#bsides",
      linkLabel: "VIEW BSIDES INITIATIVE",
    },
    {
      id: "current-tooling",
      index: "03",
      category: "WORKING ON",
      title: "Security Tooling & Automation",
      subtitle: "Reconnaissance & Hardening Pipelines",
      description:
        "Developing modular CLI automation tools including Wraith for bug bounty asset discovery and engineering hardened Zero Trust self-hosted infrastructure telemetry.",
      status: "ACTIVE",
      tags: ["Python", "CLI Automation", "Asset Discovery", "Bug Bounty"],
      linkHref: "#projects",
      linkLabel: "VIEW PROJECT BUILDS",
    },
    {
      id: "current-accreditations",
      index: "04",
      category: "EXPLORING",
      title: "Offensive Accreditations & Hands-On Labs",
      subtitle: "Active Certification Pipeline",
      description:
        "Advancing through rigorous offensive security laboratories and exam preparations across TryHackMe Junior Pentester (PT1), EC-Council CPENT, and Altered Security CRTP.",
      status: "ACTIVE",
      tags: ["TryHackMe PT1", "EC-Council CPENT", "CRTP Active Directory", "MSec-CAIS"],
      linkHref: "#credentials",
      linkLabel: "CHECK ACCREDITATIONS",
    },
  ],

  attackSurfaceDomains: [
    {
      id: "web-security",
      label: "Web Security",
      category: "Application Security",
      shortDescription:
        "Auditing modern web architectures for authentication flaws, broken authorization logic, session hijacking, and injection vulnerabilities.",
      technologies: ["Burp Suite", "OWASP Top 10", "JWT", "Session Security", "REST APIs"],
      relatedProjectIds: ["email-tracker", "api-bola-auditor"],
      relatedResearchIds: ["research-01", "research-03"],
      sectionLink: "#projects",
      position: { x: 50, y: 12 },
    },
    {
      id: "offensive-sec",
      label: "Offensive Security",
      category: "Exploitation & Red Teaming",
      shortDescription:
        "Methodical penetration testing, adversarial simulation, boundary probing, and adopting the attacker mindset to uncover systemic weaknesses.",
      technologies: ["Kali Linux", "Metasploit", "Nmap", "Manual Exploitation", "Linux"],
      relatedProjectIds: ["wraith-recon", "web-recon-pipeline"],
      relatedResearchIds: ["research-04"],
      sectionLink: "#projects",
      position: { x: 80, y: 22 },
    },
    {
      id: "pen-testing",
      label: "Penetration Testing",
      category: "Assessment & Auditing",
      shortDescription:
        "Comprehensive technical security assessments mapping attack surfaces, validating findings, and eliminating theoretical false-positives.",
      technologies: ["Burp Suite", "Nmap", "ffuf", "Nikto", "OWASP ZAP"],
      relatedProjectIds: ["web-recon-pipeline", "network-telemetry-sentinel"],
      relatedResearchIds: ["research-04"],
      sectionLink: "#methodology",
      position: { x: 92, y: 50 },
    },
    {
      id: "vuln-research",
      label: "Vulnerability Research",
      category: "Deep-Dive Analysis",
      shortDescription:
        "Dissecting complex architectural logic flaws, authorization bypasses, cryptographic misconfigurations, and novel attack surfaces.",
      technologies: ["CWE", "CVE / CVSS", "STRIDE", "MITRE ATT&CK", "Code Review"],
      relatedProjectIds: ["api-bola-auditor"],
      relatedResearchIds: ["research-01", "research-02", "research-03", "research-04"],
      sectionLink: "#research",
      position: { x: 80, y: 78 },
    },
    {
      id: "ai-llm-security",
      label: "AI / LLM Security",
      category: "Emerging Threat Vectors",
      shortDescription:
        "Adversarial testing of large language models, prompt injection defenses, context contamination, and agentic guardrail bypass analysis.",
      technologies: ["OWASP LLM Top 10", "Prompt Injection", "Guardrail Bypass", "RAG Security", "MSec-CAIS"],
      relatedProjectIds: ["ai-prompt-eval"],
      relatedResearchIds: ["research-02"],
      sectionLink: "#projects",
      position: { x: 50, y: 88 },
    },
    {
      id: "sec-automation",
      label: "Security Automation",
      category: "Tooling & Infrastructure",
      shortDescription:
        "Building lightweight CLI utilities, event-driven backup pipelines, and automated asset discovery workflows for offensive and defensive operations.",
      technologies: ["Python", "Bash", "systemd", "FastAPI", "rclone", "Docker"],
      relatedProjectIds: ["wraith-recon", "cloud-backup-manager", "home-server-infra"],
      relatedResearchIds: [],
      sectionLink: "#projects",
      position: { x: 20, y: 78 },
    },
    {
      id: "community-builder",
      label: "Community Builder",
      category: "Ecosystem & Mentorship",
      shortDescription:
        "Connecting grassroots researchers, ambitious students, and enterprise CISOs through collaborative knowledge-sharing and technical workshops.",
      technologies: ["Workshops", "Mentorship", "Technical Talks", "CFP Review"],
      relatedProjectIds: [],
      relatedResearchIds: [],
      sectionLink: "#about",
      position: { x: 8, y: 50 },
    },
    {
      id: "bsides-vadodara",
      label: "BSides Vadodara",
      category: "Conference Leadership",
      shortDescription:
        "Founding and directing Gujarat's premier community cybersecurity conference to democratize offensive security education.",
      technologies: ["Event Operations", "Keynotes", "Sponsorships", "Villages"],
      relatedProjectIds: [],
      relatedResearchIds: [],
      sectionLink: "#bsides",
      position: { x: 20, y: 22 },
    },
  ],

  securityMethodology: [
    {
      step: "01",
      title: "RECON",
      phase: "Discovery & Footprinting",
      summary: "Understand the target and identify the external attack surface.",
      description:
        "Enumerate domain assets, subdomains, network ranges, open ports, and technology stacks to establish a complete target perimeter before conducting active probes.",
      techniques: ["Passive OSINT", "DNS Correlation", "Port & Service Fingerprinting", "ASN & Range Mapping"],
      deliverable: "Target Attack Surface Inventory",
      icon: "Radar",
    },
    {
      step: "02",
      title: "MAP",
      phase: "Architecture & Boundary Profiling",
      summary: "Map technologies, endpoints, authentication boundaries, APIs, and potential entry points.",
      description:
        "Trace request-response flows, reverse-engineer API route hierarchies, inspect client JavaScript bundles, and delineate trust boundaries between microservices.",
      techniques: ["API Schema Extraction", "Authentication Flow Tracing", "Hidden Parameter Fuzzing", "Technology Stack Auditing"],
      deliverable: "Threat Landscape & Route Matrix",
      icon: "Network",
    },
    {
      step: "03",
      title: "TEST",
      phase: "Vulnerability Assessment & Fuzzing",
      summary: "Test assumptions and identify security weaknesses across logic and protocols.",
      description:
        "Execute systematic manual and automated probes against access controls, session state, injection surfaces, parameter tampering, and business logic assumptions.",
      techniques: ["Stateful Parameter Tampering", "BOLA / IDOR Probing", "Injection Vector Testing", "Business Logic Scenarios"],
      deliverable: "Observed Anomalies & Flaw Identifiers",
      icon: "Terminal",
    },
    {
      step: "04",
      title: "VALIDATE",
      phase: "Exploitability & Impact Verification",
      summary: "Validate whether a finding is actually exploitable and determine its real impact.",
      description:
        "Strip away theoretical assumptions to construct reliable, non-destructive proof-of-concepts, eliminating false-positives and determining true business impact.",
      techniques: ["Exploit Chaining", "False-Positive Elimination", "CVSS Severity Alignment", "Privilege Escalation Proof"],
      deliverable: "Validated PoC & Severity Vector",
      icon: "ShieldAlert",
    },
    {
      step: "05",
      title: "DOCUMENT",
      phase: "Technical Dossier & Reporting",
      summary: "Document the issue clearly and make the result reproducible.",
      description:
        "Draft comprehensive technical dossiers detailing step-by-step reproduction instructions, raw HTTP request/response artifacts, and actionable remediation roadmaps.",
      techniques: ["Step-by-Step Reproduction Guides", "Raw Packet Artifacts", "Risk Vector Scoring", "Clear Evidence Captures"],
      deliverable: "Comprehensive Security Report",
      icon: "FileText",
    },
    {
      step: "06",
      title: "REMEDIATE",
      phase: "Root-Cause Hardening & Advisory",
      summary: "Where applicable, identify the underlying cause and help determine an appropriate fix.",
      description:
        "Analyze systemic root causes—such as architectural design gaps or missing database ownership checks—and provide practical, defense-in-depth guidance.",
      techniques: ["Architectural Hardening", "Query-Level Ownership Checks", "Defense-in-Depth Policies", "Verification Re-Testing"],
      deliverable: "Defensive Mitigation Guidance",
      icon: "CheckCircle2",
    },
  ],

  featuredProjects: [
    {
      id: "wraith-recon",
      title: "Wraith",
      summary:
        "A Python CLI reconnaissance framework for bug bounty automation, combining subdomain enumeration, port scanning, and vulnerability fingerprinting into an open-source security research tool.",
      impact:
        "Automates multi-stage asset discovery, port scanning, and vulnerability fingerprinting for ethical hackers and security researchers. Published as an open-source framework on GitHub.",
      category: "Offensive Security",
      technologies: [
        "Python",
        "CLI",
        "Subdomain Enumeration",
        "Port Scanning",
        "Vulnerability Fingerprinting",
        "Bug Bounty Automation",
        "Git/GitHub",
      ],
      year: "Nov 2025 – Apr 2026",
      githubUrl: "https://github.com/0daykrish",
      caseStudy: {
        overview:
          "Wraith is a modular Python CLI reconnaissance framework engineered specifically for bug bounty automation and penetration testing scope discovery.",
        problem:
          "External attack surfaces in wide-scope bug bounty programs and enterprise penetration tests require hours of repetitive, manual reconnaissance across fragmented tools, delaying targeted testing of business logic.",
        approach:
          "Engineered an extensible, asynchronous Python CLI tool integrating multi-source DNS enumeration, threaded socket port probing, and fingerprinting heuristics into a cohesive discovery pipeline.",
        objectives: [
          "Automate fast, multi-source subdomain enumeration and target footprinting",
          "Integrate multi-threaded port scanning with service version and vulnerability fingerprinting",
          "Develop and publish an extensible open-source CLI framework on GitHub for the security community",
        ],
        technicalHighlights: [
          "Engineered a lightweight, pluggable CLI architecture supporting customizable reconnaissance profiles",
          "Automated target asset correlation between active DNS discovery and open port identification",
          "Implemented vulnerability fingerprinting heuristics to quickly surface high-value attack surfaces",
        ],
        securityDetails:
          "Applies targeted banner grabbing, HTTP response header profiling, SSL certificate SAN extraction, and signature matching to isolate shadowed or unmaintained assets.",
        findingsOrResults: [
          "Dramatically reduced the time required to map wide-scope external perimeters in bug bounty programs",
          "Published as an open-source research tool on GitHub with clean documentation",
        ],
        keyTakeaway:
          "High-yield bug bounty research starts with efficient automation of repetitive discovery, allowing researchers to concentrate manual testing on complex business logic.",
      },
    },
    {
      id: "home-server-infra",
      title: "Self-Hosted Home Server Infrastructure",
      summary:
        "A self-hosted server platform on repurposed hardware using containerized services for media, photo management, cloud storage, tracking, monitoring, and infrastructure management.",
      impact:
        "Secured remote access via Cloudflare DNS, Zero Trust controls, and Cloudflare Tunnel, eliminating direct public exposure. Centralized monitoring with Prometheus/Grafana and Wazuh SIEM.",
      category: "Cloud & Infrastructure",
      technologies: [
        "Linux",
        "Docker / Containers",
        "Cloudflare Zero Trust",
        "Cloudflare Tunnel",
        "Prometheus",
        "Grafana",
        "Wazuh SIEM",
        "Server Hardening",
      ],
      year: "May 2026 – Jun 2026",
      caseStudy: {
        overview:
          "Architected and deployed a self-hosted server platform on repurposed hardware, containerizing core services and implementing enterprise-grade Zero Trust remote access and security monitoring.",
        problem:
          "Self-hosting sensitive internal utilities on physical hardware traditionally exposes public IP addresses, opening home networks to automated port scans, brute-force probes, and boundary traversal.",
        approach:
          "Architected an isolated containerized environment on repurposed hardware fronted by Cloudflare Zero Trust tunnels and monitored continuously by Wazuh SIEM and Prometheus/Grafana.",
        objectives: [
          "Repurpose hardware into an isolated, containerized self-hosted platform for media, storage, and infrastructure",
          "Eliminate direct public exposure of internal services using Cloudflare DNS and Zero Trust Tunnels",
          "Deploy Prometheus & Grafana for telemetry and integrate Wazuh SIEM for continuous security event auditing",
        ],
        technicalHighlights: [
          "Orchestrated containerized microservices ensuring isolated runtime environments and minimal host privilege",
          "Enforced Cloudflare Zero Trust identity policies and encrypted tunnels for remote access without port forwarding",
          "Configured Wazuh agents for continuous log analysis, authentication event auditing, and anomaly detection",
        ],
        securityDetails:
          "Enforces Zero Trust identity validation and eliminates all inbound port forwarding. Wazuh host agents continuously ingest syslog and SSH telemetry for anomalous behavior.",
        findingsOrResults: [
          "Zero open inbound ports on the network boundary, effectively shielding internal infrastructure from unauthorized scans",
          "Complete real-time operational and security telemetry across authentication logs, system metrics, and anomalous events",
        ],
        keyTakeaway:
          "Adopting a Zero Trust architecture and dedicated SIEM logging transforms consumer or repurposed hardware into a robust, enterprise-hardened environment.",
      },
    },
    {
      id: "cloud-backup-manager",
      title: "Cloud Backup Manager",
      summary:
        "A real-time Linux backup solution with cloud synchronization, audit logging, automated file-change detection, and instant cloud uploads using rclone and systemd.",
      impact:
        "Orchestrates multi-service cloud backup pipelines with automated event-driven file monitoring and structured audit logs for resilient data recovery.",
      category: "Tooling & Automation",
      technologies: [
        "Linux",
        "Python",
        "Bash",
        "rclone",
        "systemd",
        "Audit Logging",
        "File Watchers",
        "Cloud Storage",
      ],
      year: "Aug 2025 – Sep 2025",
      githubUrl: "https://github.com/0daykrish",
      caseStudy: {
        overview:
          "Cloud Backup Manager is an automated Linux backup and synchronization toolchain utilizing systemd service automation and rclone to provide resilient, continuous file protection.",
        problem:
          "Static cron-based backup scripts either poll excessively or fail to catch sudden data loss between intervals, lacking verifiable cryptographic audit logs to confirm offsite integrity.",
        approach:
          "Built a Linux daemon using systemd inotify path watchers and rclone differential synchronization to trigger instant, event-driven offsite encrypted backups upon file mutation.",
        objectives: [
          "Implement automated real-time file-change detection on Linux environments",
          "Orchestrate multi-cloud upload targets through optimized rclone workflows",
          "Generate comprehensive audit logs to ensure backup verification and traceability",
        ],
        technicalHighlights: [
          "Configured systemd path watchers and services for event-triggered, zero-latency backup dispatch",
          "Integrated rclone cloud synchronization with bandwidth-efficient differential upload logic",
          "Built structured audit logging recording upload statuses, file hashes, and execution metrics",
        ],
        securityDetails:
          "Generates SHA-256 file integrity checksums, maintains structured audit logs for forensic validation, and safeguards offsite cloud endpoints against unauthorized tampering.",
        findingsOrResults: [
          "Automated disaster-recovery readiness with instant offsite synchronization on file modification",
          "Eliminated reliance on fragile cron polling in favor of native Linux event-driven architecture",
        ],
        keyTakeaway:
          "Reliable backup engineering demands event-driven automation, verifiable integrity logs, and resilient cloud integration.",
      },
    },
    {
      id: "email-tracker",
      title: "Email Tracker",
      summary:
        "A Python Flask-based email tracking system using a 1x1 pixel technique to record opens with timestamp, IP, and user-agent data, featuring SMTP handling and a campaign web interface.",
      impact:
        "Delivers real-time email engagement forensics, automatic URL detection, and an analytics interface for managing campaigns and inspecting recipient telemetry.",
      category: "Web Security",
      technologies: [
        "Python",
        "Flask",
        "SMTP Handling",
        "1x1 Tracking Pixel",
        "IP Telemetry",
        "User-Agent Analysis",
        "Web Analytics",
      ],
      year: "Sep 2025 – Oct 2025",
      githubUrl: "https://github.com/0daykrish",
      caseStudy: {
        overview:
          "Developed a Python Flask web application that employs 1x1 transparent tracking pixel beacons and SMTP handling to analyze email interaction patterns and client device forensics.",
        problem:
          "Understanding how mail clients handle untrusted external assets and identifying privacy leakage via automatic image loading requires empirical forensic telemetry.",
        approach:
          "Developed a Python Flask service serving dynamic 1x1 transparent tracking beacons combined with SMTP injection to capture client interaction metadata in real time.",
        objectives: [
          "Deploy an endpoint serving a dynamic 1x1 tracking pixel that logs open timestamps, client IPs, and user agents",
          "Implement robust SMTP message handling with automatic URL detection and parameter injection",
          "Build an intuitive web interface for campaign management and real-time interaction analytics",
        ],
        technicalHighlights: [
          "Developed lightweight Flask beacon route with cache-control headers ensuring fresh client requests",
          "Extracted and parsed client request headers to capture device types, operating systems, and client environments",
          "Designed dashboard views providing clear visualization of read counts, geographical IP lookups, and timeline metrics",
        ],
        securityDetails:
          "Analyzes User-Agent strings, client IP geographical routing, and HTTP cache-control bypass techniques while demonstrating client tracking mitigation controls.",
        findingsOrResults: [
          "Accurately gathered forensic engagement telemetry across diverse webmail and desktop client applications",
          "Demonstrated practical implementation of web beacons and their privacy implications in modern email systems",
        ],
        keyTakeaway:
          "Hands-on telemetry development deepens understanding of web protocols, header parsing, and client-side privacy boundaries.",
      },
    },
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
        problem:
          "Modern LLM agent architectures that ingest untrusted user input or external web data are susceptible to direct jailbreaks and indirect prompt injection attacks that subvert core instructions.",
        approach:
          "Engineered an automated adversarial test harness simulating 50+ injection patterns, multi-turn cognitive deception, and token boundary bypasses against LLM endpoints.",
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
        securityDetails:
          "Evaluates system prompt extraction resistance, tests delimiter enforcement, and audits outputs against OWASP Top 10 for LLM Applications (LLM01 Prompt Injection).",
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
        problem:
          "Shadowed staging subdomains, legacy API endpoints, and missing defensive HTTP headers frequently go undetected during preliminary penetration testing phases.",
        approach:
          "Developed an integrated offensive bash/Python pipeline coordinating fast fuzzing, virtual host discovery, and security header audits into unified Burp Suite target files.",
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
        securityDetails:
          "Automates rate-limiting-aware parameter fuzzing with ffuf, verifies HSTS/CSP header enforcement, and flags unindexed administrative paths.",
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
        problem:
          "Broken Object Level Authorization (BOLA/IDOR) is the #1 OWASP API vulnerability, often overlooked because traditional automated scanners cannot understand multi-tenant business context.",
        approach:
          "Designed a dedicated REST API lab simulating multi-tenant SaaS environments to model horizontal and vertical privilege escalation vectors across database queries.",
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
        securityDetails:
          "Tests stateful parameter tampering across integer vs UUID identifiers, proves the failure of UI-only access control, and demonstrates database-level tenant binding remediation.",
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
        problem:
          "Lax internal network segmentation and unencrypted legacy protocols transmit sensitive credentials in cleartext, enabling credential sniffing and lateral movement.",
        approach:
          "Developed a lightweight Python socket capture script utilizing tshark packet dissection to inspect live TCP/UDP handshakes and flag non-compliant plaintext protocols.",
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
        securityDetails:
          "Flags cleartext HTTP, FTP, and Telnet communications, inspects high-frequency DNS query volume for covert tunneling heuristics, and verifies boundary egress enforcement.",
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
      verificationUrl: "https://www.credly.com/badges/99409da1-0b53-48cb-bc75-1d38a982f8e6/public_url",
      badgeLabel: "CREDLY VERIFIED",
    },
    {
      id: "aws-cloud-foundations",
      name: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services Training and Certification",
      category: "Cloud",
      status: "Certified",
      verificationUrl: "https://www.credly.com/badges/bc85fe7e-0444-41b8-a4a1-4c34b9315e76/public_url",
      badgeLabel: "CREDLY VERIFIED",
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
      verificationUrl: "https://www.credly.com/badges/a1fa328d-4ed1-4bea-a4d9-b4840a1d6119/public_url",
      badgeLabel: "CREDLY VERIFIED",
    },
    {
      id: "certiport-html-css",
      name: "IT Specialist – HTML & CSS",
      issuer: "Certiport",
      category: "Software & Automation",
      status: "Certified",
      verificationUrl: "https://www.credly.com/badges/df924b2c-f4aa-4f71-9a48-073bed170360/public_url",
      badgeLabel: "CREDLY VERIFIED",
    },
    {
      id: "pt1",
      name: "Junior Penetration Tester (PT1)",
      issuer: "TryHackMe",
      category: "Offensive Security",
      status: "In Progress",
      focus: "Hands-on network enumeration, vulnerability identification & web app penetration testing.",
    },
    {
      id: "cpent",
      name: "Certified Penetration Testing Professional (CPENT)",
      issuer: "EC-Council",
      category: "Offensive Security",
      status: "In Progress",
      focus: "Multi-cast pivoting, binary analysis, IoT firmware exploitation & advanced CTF methodologies.",
    },
    {
      id: "crtp",
      name: "Certified Red Team Professional (CRTP)",
      issuer: "Altered Security",
      category: "Red Teaming",
      status: "In Progress",
      focus: "Active Directory exploitation, Kerberos ticket abuse, local privilege escalation & domain dominance.",
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
