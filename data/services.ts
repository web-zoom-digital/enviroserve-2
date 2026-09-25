export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface ServiceSection {
  title: string;
  subtitle: string;
  content: string[];
  points?: string[];
  image: string;
  imageAlt: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrowCategory: string;
  category: "Recycling Solutions" | "EPR Compliance" | "Enterprise Solutions";
  heroDescription: string;
  heroImage: string;
  
  // Summary Section
  summary: {
    text: string;
    highlights: string[];
  };

  // Mandatory 4 Alternating Sections
  // Section 1: Image Left / Content Right
  // Section 2: Content Left / Image Right
  // Section 3: Image Left / Content Right
  // Section 4: Content Left / Image Right
  alternatingSections: ServiceSection[];

  // Process Steps
  processSteps: ProcessStepItem[];

  // Benefits
  benefits: {
    title: string;
    description: string;
  }[];

  // Target Audience / Who is this for
  targetAudience: {
    title: string;
    categories: string[];
  };

  // Why EnviroServe
  whyEnviroServe: {
    title: string;
    items: { title: string; desc: string }[];
  };

  // FAQ Items (5-8 unique per service)
  faqs: FAQItem[];

  // SEO Metadata
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const servicesData: Record<string, ServiceDetail> = {
  "e-waste-recycling": {
    slug: "e-waste-recycling",
    title: "Responsible E-Waste Recycling for a Circular Future",
    shortTitle: "E-Waste Recycling",
    eyebrowCategory: "RECYCLING SOLUTIONS",
    category: "Recycling Solutions",
    heroImage: "/images/categories/ewaste.webp",
    heroDescription:
      "Scientific de-manufacturing, automated shredding, and precious metal extraction for end-of-life electronics. We prevent hazardous toxic leaching while returning critical secondary raw materials to manufacturing supply chains.",
    summary: {
      text: "E-waste contains valuable secondary metals alongside hazardous elements that require scientific collection, depollution, and processing. EnviroServe provides formal, CPCB-compliant e-waste recycling for enterprises nationwide.",
      highlights: [
        "Zero-Landfill Processing",
        "Precious Metal Recovery",
        "Form-6 Recycling Certificate",
        "DoD Compliant Data Destruction",
      ],
    },
    alternatingSections: [
      {
        title: "The Growing Challenge of End-of-Life Electronics",
        subtitle: "Environmental Hazard & Material Loss",
        content: [
          "Electronic waste is currently the fastest-growing solid waste stream globally. Improper disposal leads to heavy metal contamination (lead, mercury, cadmium) in soil and groundwater, while wasting scarce non-renewable metals.",
          "Formal recycling ensures end-of-life IT assets, servers, printed circuit boards (PCBs), and consumer appliances are systematically processed under controlled zero-emission conditions.",
        ],
        points: [
          "Elimination of informal acid baths and cable burning",
          "Extraction of high-purity copper, aluminum, and gold",
          "Complete regulatory immunity under E-Waste Rules",
        ],
        image: "/images/blog/e-waste.webp",
        imageAlt: "Scientific E-Waste Facility and Component Sorting",
      },
      {
        title: "Scientific De-Manufacturing & Depollution",
        subtitle: "Safety-First Disassembly",
        content: [
          "Our recovery process begins with manual depollution—extracting hazardous components such as mercury switches, CRTs, battery units, and capacitors before automated shredding.",
          "Technicians separate clean plastics, ferrous metals, non-ferrous alloys, and high-value populated circuit boards to maximize secondary material purity.",
        ],
        points: [
          "Barcoded inventory tracking for every intake lot",
          "Hazardous component isolation prior to granulation",
          "Zero-landfill diversion protocols across all fractions",
        ],
        image: "/images/services/ai-generated-e-waste-awareness-create-an-image-that-raises-awareness-about-electronic-waste-background-image-generative-ai-photo.jpg",
        imageAlt: "Electronic Circuit Board and Hardware Recovery",
      },
      {
        title: "Mechanical Shredding & Density Metal Recovery",
        subtitle: "Automated Size Reduction",
        content: [
          "De-polluted electronic scrap passes into industrial hammermill shredders and multi-stage density air separators. Magnetic and eddy-current separators segregate iron, steel, aluminum, and copper.",
          "Populated printed circuit boards are concentrated and channelized to primary hydrometallurgical smelters for high-yield precious metal refining.",
        ],
        points: [
          "Magnetic separation of ferrous alloys",
          "Eddy-current recovery of copper and aluminum",
          "Smelter-ready concentrates for domestic manufacturing",
        ],
        image: "/images/services/mechanicals-shredding-e-waste.png",
        imageAlt: "Industrial Material Recovery & Sorting Machinery",
      },
      {
        title: "Certified Data Destruction & Audit Verification",
        subtitle: "Complete Enterprise Data Security",
        content: [
          "Alongside physical material recovery, EnviroServe delivers DoD 5220.22-M software sanitization and industrial degaussing or physical shredding for storage hard drives and solid-state drives.",
          "Upon completion, clients receive serial-matched Form-6 Recycling Certificates and Data Destruction Certificates required for corporate ESG and compliance audits.",
        ],
        points: [
          "Serial-numbered drive tracking and destruction logs",
          "Audit-ready Form-6 certificates recognized by SPCB",
          "Tamper-proof digital compliance documentation",
        ],
        image: "/images/services/360_F_319512685_63GEqom3zgl15eTV97QSrqL8i28D3XJ0.jpg",
        imageAlt: "IT Asset Storage and Data Security Recovery",
      },
    ],
    processSteps: [
      { number: "01", title: "Collection & Transport", description: "GPS-monitored pickup from enterprise sites using UN-certified containment vessels." },
      { number: "02", title: "Intake & Barcode Tagging", description: "Digital weighing, lot barcode generation, and diagnostic category classification." },
      { number: "03", title: "Manual De-Manufacturing", description: "Depollution of hazardous elements (batteries, mercury tubes, capacitors)." },
      { number: "04", title: "Automated Shredding", description: "Multi-stage granulation with eddy-current and magnetic metal separation." },
      { number: "05", title: "Refining & Documentation", description: "Smelter re-entry channelization and serial-matched Form-6 certificate issuance." },
    ],
    benefits: [
      { title: "Zero Landfill Commitment", description: "Ensure 100% compliant diversion of toxic electronic scrap away from municipal dumps." },
      { title: "Precious Mineral Recovery", description: "Reclaim high-purity copper, aluminum, silver, and gold to feed local industrial supply chains." },
      { title: "Complete Data Security", description: "Combine physical hardware recycling with certified DoD hard drive destruction." },
      { title: "Full Regulatory Immunity", description: "Receive official, audit-ready recycling certificates recognized by CPCB and SPCB." },
    ],
    targetAudience: {
      title: "WHO IS THIS FOR?",
      categories: [
        "IT Companies & Enterprise Tech Parks",
        "Electronics Original Equipment Manufacturers (OEMs)",
        "Educational Institutions & Research Laboratories",
        "Telecom Infrastructure & Data Center Operators",
        "Government Bodies & Public Sector Enterprises",
      ],
    },
    whyEnviroServe: {
      title: "WHY ENVIROSERVE",
      items: [
        { title: "CPCB & SPCB Authorized", desc: "Full statutory authorization with CPCB/SPCB compliant processing facilities." },
        { title: "Pan-India Logistics", desc: "GPS-tracked hazardous transportation fleet capable of bulk corporate pickups." },
        { title: "Traceable Recovery", desc: "Transparent mass-balance tracking and serial-matched compliance certification." },
      ],
    },
    faqs: [
      {
        question: "What types of e-waste can EnviroServe recycle?",
        answer: "We recycle all categories of IT and electronic equipment including desktop PCs, laptops, servers, network switches, printed circuit boards (PCBs), monitors, mobile phones, telecom hardware, and consumer electronics.",
      },
      {
        question: "How does EnviroServe ensure enterprise data security during recycling?",
        answer: "We offer DoD 5220.22-M compliant software wiping, industrial degaussing, and physical hard drive shredding. Clients receive serial-matched Data Destruction Certificates for legal audit compliance.",
      },
      {
        question: "What documentation does a business receive after e-waste recycling?",
        answer: "Clients receive official CPCB Form-6 Recycling Certificates detailing lot weight, material breakdown, and destruction verification for environmental and statutory audits.",
      },
      {
        question: "How is e-waste collected from remote office sites across India?",
        answer: "EnviroServe operates a pan-India reverse logistics fleet equipped with GPS tracking and UN-certified containment boxes to execute scheduled on-site pickups nationwide.",
      },
      {
        question: "Does EnviroServe support bulk IT asset decommissioning?",
        answer: "Yes, our technical field teams assist with on-site server rack dismantling, asset tagging, secure loading, and compliant transport to our processing centers.",
      },
    ],
    meta: {
      title: "Responsible E-Waste Recycling Services | EnviroServe",
      description: "Scientific e-waste recycling, precious metal extraction, and certified data destruction for enterprise IT assets in India.",
      keywords: ["e waste recycling", "e waste recycling company", "electronic waste management", "e waste recycling India", "IT asset recycling"],
    },
  },

  "li-ion-battery-recycling": {
    slug: "li-ion-battery-recycling",
    title: "Closed-Loop Lithium-Ion Battery Recycling & Material Recovery",
    shortTitle: "Li-Ion Battery Recycling",
    eyebrowCategory: "RECYCLING SOLUTIONS",
    category: "Recycling Solutions",
    heroImage: "/images/hero/li-ion-battery-recycling-hero.png",
    heroDescription:
      "Advanced, fire-safe recycling for spent EV battery packs, energy storage systems (ESS), and portable lithium cells. Recovering battery-grade Lithium, Cobalt, Nickel, and Manganese for closed-loop manufacturing.",
    summary: {
      text: "As India accelerates electric mobility and renewable energy storage, managing end-of-life Lithium-Ion batteries is critical. EnviroServe provides diagnostic discharge, inert shredding, and Black Mass extraction under strict thermal safety protocols.",
      highlights: [
        "Closed-Loop Mineral Extraction",
        "Battery-Grade Black Mass",
        "Deep-Discharge Fire Safety",
        "CPCB Battery Rules 2022 Compliance",
      ],
    },
    alternatingSections: [
      {
        title: "The Growing Need for Lithium Battery Recovery",
        subtitle: "Critical Mineral Conservation",
        content: [
          "Spent lithium-ion batteries represent both a thermal fire hazard and a massive opportunity for critical mineral recovery. Raw materials like Lithium, Cobalt, and Nickel are scarce and heavily imported.",
          "EnviroServe's specialized processing extracts high-purity cathode and anode active materials, enabling circular battery-to-battery supply chains.",
        ],
        points: [
          "Prevention of thermal runaway fire hazards during storage",
          "Recovery of battery-grade Cobalt, Lithium, and Nickel",
          "Fulfillment of mandatory material recovery targets under Battery Rules 2022",
        ],
        image: "/images/services/Closed-Loop Lithium-Ion.png",
        imageAlt: "Lithium-Ion Battery Packs and Storage Recovery",
      },
      {
        title: "Diagnostic Testing & Deep Electrical Discharging",
        subtitle: "Risk-Free Processing Protocols",
        content: [
          "Before dismantling, EV packs and battery modules undergo state-of-health diagnostics and deep electrical discharging to deplete residual energy completely.",
          "Discharged energy is either harvested or neutralized using controlled salt-bath discharging systems, eliminating any risk of short-circuits or thermal runaway during crushing.",
        ],
        points: [
          "Comprehensive diagnostic state-of-charge assessment",
          "Automated deep discharging to zero electrical energy",
          "Thermal imaging monitoring during pack disassembly",
        ],
        image: "/images/services/diagnostic-testing-li-ion.png",
        imageAlt: "Lithium Battery Module and Safe Containment",
      },
      {
        title: "Inert Shredding & Black Mass Extraction",
        subtitle: "High-Yield Mechanical Separation",
        content: [
          "Discharged cells are granulated under inert gas cover to capture electrolyte vapors and isolate separator films safely.",
          "Multi-tier air classification separates Copper foil, Aluminum foil, plastic casings, and fine 'Black Mass' powder containing concentrated Cobalt, Nickel, Lithium, and Manganese.",
        ],
        points: [
          "Inert gas blanket preventing chemical oxidation",
          "High-purity Black Mass concentrate production",
          "95%+ metal recovery efficiency from cathode scrap",
        ],
        image: "/images/hero/hero-services-dslr.jpg",
        imageAlt: "Industrial Battery Shredding Machinery",
      },
      {
        title: "Refining Supply Chain & EPR Credit Generation",
        subtitle: "Circular Re-Entry into Manufacturing",
        content: [
          "Extracted Black Mass is channelized to certified hydrometallurgical refiners to produce battery-grade precursor salts.",
          "EnviroServe logs recovery yields directly on CPCB portals, generating verified Battery Waste EPR credits for EV OEMs and battery pack importers.",
        ],
        points: [
          "Precursor salt re-entry into cathode manufacturing",
          "CPCB portal credit upload matching mandatory recovery percentages",
          "Full audit verification for battery producers and importers",
        ],
        image: "/images/services/refining-supply-chain-ion.png",
        imageAlt: "Battery Waste Recovery Materials and Black Mass",
      },
    ],
    processSteps: [
      { number: "01", title: "Thermal Transit", description: "Pickup using insulated UN-rated hazardous containment packaging." },
      { number: "02", title: "Diagnostics & Discharge", description: "State-of-charge assessment followed by complete electrical neutralization." },
      { number: "03", title: "Module Dismantling", description: "Isolation of busbars, BMS circuits, wiring, and module housing." },
      { number: "04", title: "Inert Granulation", description: "Crushing under inert gas to yield Copper foil, Aluminum foil, and Black Mass." },
      { number: "05", title: "EPR Credit Filing", description: "Filing recovery yields on CPCB Battery Waste portal for credit transfer." },
    ],
    benefits: [
      { title: "Critical Mineral Recovery", description: "Reclaim high-purity battery-grade Cobalt, Lithium, Nickel, and Manganese for local manufacturing." },
      { title: "Thermal Fire Mitigation", description: "Complete electrical discharging eliminates thermal runaway risks during handling and storage." },
      { title: "Battery EPR Compliance", description: "Generate legitimate material recovery credits mandated under Battery Waste Management Rules, 2022." },
      { title: "Closed-Loop Supply Chain", description: "Enable EV OEMs and cell assemblers to establish sustainable circular battery lifecycles." },
    ],
    targetAudience: {
      title: "WHO IS THIS FOR?",
      categories: [
        "Electric Vehicle (EV) OEMs (2W, 3W, 4W & Commercial Vehicles)",
        "Lithium Battery Pack Assemblers & Cell Manufacturers",
        "Solar & Renewable Energy Storage (ESS) Operators",
        "Telecom Tower Infrastructure Companies",
        "Consumer Electronics & Power Tool Importers",
      ],
    },
    whyEnviroServe: {
      title: "WHY ENVIROSERVE",
      items: [
        { title: "Specialized Battery Infrastructure", desc: "Dedicated deep-discharging and inert crushing systems designed specifically for Li-Ion chemistry." },
        { title: "Thermal Safety Assurance", desc: "Strict hazardous handling protocols adhering to international battery transit guidelines." },
        { title: "CPCB BWM Portal Ready", desc: "Seamless generation and transfer of chemistry-matched material recovery credits." },
      ],
    },
    faqs: [
      {
        question: "What Lithium-Ion battery chemistries can EnviroServe process?",
        answer: "We process all major lithium chemistries including LFP (Lithium Iron Phosphate), NMC (Nickel Manganese Cobalt), LCO (Lithium Cobalt Oxide), LMO, and LTO battery packs.",
      },
      {
        question: "What is 'Black Mass' in lithium battery recycling?",
        answer: "Black Mass is the fine powder extracted after shredding discharged lithium cells. It contains concentrated amounts of cathode active materials including Cobalt, Nickel, Lithium, and Manganese.",
      },
      {
        question: "How are damaged or swollen EV battery packs transported safely?",
        answer: "We use thermal insulation containers, fire-retardant vermiculite packing, and GPS-monitored hazardous transport vehicles compliant with UN battery packaging standards.",
      },
      {
        question: "Does battery recycling fulfill statutory targets under Battery Rules 2022?",
        answer: "Yes, recycling spent lithium batteries through EnviroServe generates verified recovery certificates required to meet mandatory CPCB annual recycling targets.",
      },
      {
        question: "Can EnviroServe collect spent batteries directly from automotive service centers?",
        answer: "Yes, we operate pan-India reverse logistics for EV service centers, dealership networks, and battery replacement hubs.",
      },
    ],
    meta: {
      title: "Lithium-Ion Battery Recycling Services | EnviroServe",
      description: "Closed-loop Li-ion battery recycling, Black Mass extraction, and EV battery recovery solutions in India.",
      keywords: ["lithium battery recycling", "EV battery recycling", "black mass recovery", "battery waste management India", "lithium ion recycling"],
    },
  },

  "e-waste-epr": {
    slug: "e-waste-epr",
    title: "Turnkey E-Waste EPR Registration & Credit Management",
    shortTitle: "E-Waste EPR",
    eyebrowCategory: "EPR COMPLIANCE",
    category: "EPR Compliance",
    heroImage: "/images/categories/ewaste.webp",
    heroDescription:
      "End-to-end Extended Producer Responsibility (EPR) advisory under E-Waste Management Rules. We manage portal registration, historical sales audits, physical recycling channelization, and verified CPCB credit transfers.",
    summary: {
      text: "Producers, Importers, and Brand Owners (PIBOs) of Electrical and Electronic Equipment (EEE) face strict annual recycling targets under CPCB guidelines. EnviroServe delivers single-window EPR compliance to safeguard license continuity.",
      highlights: [
        "106 EEE Item Codes Supported",
        "CPCB Portal Registration",
        "Verified Recycling Credits",
        "Zero Penalty Audit Protection",
      ],
    },
    alternatingSections: [
      {
        title: "Navigating Mandatory E-Waste EPR Obligations",
        subtitle: "Statutory Rules & Compliance Timelines",
        content: [
          "The E-Waste Management Rules require producers and importers of electrical hardware to take back and recycle a defined percentage of their market placement tonnage.",
          "Failing to fulfill annual EPR targets triggers environmental compensation fines, import license holds, and public CPCB query notices.",
        ],
        points: [
          "Target calculations based on product category lifespans",
          "Quarterly and annual return submission deadlines",
          "Mandatory credit procurement from authorized recyclers",
        ],
        image: "/images/blog/epr-compliance.webp",
        imageAlt: "EPR Compliance Documentation and Portal Filing",
      },
      {
        title: "Sales Ledger Audit & Target Estimation",
        subtitle: "Precise Mathematical Reconciliation",
        content: [
          "Our regulatory consultants review your historical sales registers and ICEGATE import bills of entry across all 106 EEE product codes.",
          "We calculate exact target obligations in metric tons, establishing an audit-proof compliance plan before portal submission.",
        ],
        points: [
          "Mapping products across IT, consumer appliances, and medical EEE",
          "Verification against Customs ICEGATE import metrics",
          "Formulation of multi-year target fulfillment roadmaps",
        ],
        image: "/images/services/3775146-1024x683.jpg",
        imageAlt: "Compliance Portal Calculation and Audit Workspace",
      },
      {
        title: "Physical Waste Recycling & Credit Procurement",
        subtitle: "Audit-Proof Material Channelization",
        content: [
          "EnviroServe collects equivalent e-waste tonnage through authorized take-back networks and processes it in CPCB-licensed recycling facilities.",
          "Material recovery yields are logged on national portals to generate legitimate, non-duplicable EPR credit certificates.",
        ],
        points: [
          "Legitimate credit generation backed by physical waste flow",
          "Zero risk of fraudulent or unverified recycler credits",
          "Transparent mass-balance documentation for state audits",
        ],
        image: "/images/categories/ewaste.webp",
        imageAlt: "E-Waste Recycling Stream and Sorting Facility",
      },
      {
        title: "Portal Credit Transfer & Annual Return Filing",
        subtitle: "Complete CPCB Registration Lifecycle",
        content: [
          "We manage your official portal portal account—executing credit transfers directly to your producer account and filing error-free annual returns.",
          "Clients receive a tamper-proof digital compliance binder containing all certificates, manifests, and filing receipts for statutory inspection.",
        ],
        points: [
          "Direct credit transfer on centralized CPCB portal",
          "Timely submission ahead of annual filing cutoffs",
          "Comprehensive 5-year compliance digital archive",
        ],
        image: "/images/hero/hero-about-dslr.jpg",
        imageAlt: "Corporate Compliance Review and Certificate Portfolio",
      },
    ],
    processSteps: [
      { number: "01", title: "Target Audit", description: "Reconcile past sales data against CPCB product lifespan schedules." },
      { number: "02", title: "Portal Registration", description: "File application for Producer/Importer EPR Registration Certificate." },
      { number: "03", title: "Credit Matching", description: "Channelize physical e-waste to generate matching EPR credit tonnage." },
      { number: "04", title: "Credit Transfer", description: "Transfer verified recycling certificates on CPCB portal account." },
      { number: "05", title: "Annual Filing", description: "File official annual returns before regulatory cutoff dates." },
    ],
    benefits: [
      { title: "Audit Immunity", description: "100% legal compliance backed by physical material channelization logs." },
      { title: "Timely Submission", description: "Never miss quarterly portal deadlines or annual CPCB return cutoffs." },
      { title: "Turnkey Execution", description: "Single-window service handling registration, credits, and paperwork." },
      { title: "License Continuity", description: "Protect import licenses and business operating permits from CPCB holds." },
    ],
    targetAudience: {
      title: "WHO IS THIS FOR?",
      categories: [
        "Electronics Original Equipment Manufacturers (OEMs)",
        "IT Hardware & Telecom Importers",
        "Consumer Electronics & Appliance Brands",
        "Medical Device & Commercial Equipment Importers",
      ],
    },
    whyEnviroServe: {
      title: "WHY ENVIROSERVE",
      items: [
        { title: "CPCB Regulatory Expertise", desc: "In-depth understanding of national e-waste portal schemas and filing requirements." },
        { title: "Physical Asset Backing", desc: "Credits generated exclusively from our own CPCB-authorized recycling operations." },
        { title: "Dedicated Advisory Desk", desc: "Assigned compliance officer managing all portal interactions and documentation." },
      ],
    },
    faqs: [
      {
        question: "Who is classified as a Producer under E-Waste EPR?",
        answer: "Any entity manufacturing, importing, or selling Electrical and Electronic Equipment (EEE) under its own brand name in India is classified as a Producer and must fulfill annual EPR obligations.",
      },
      {
        question: "How are E-Waste EPR targets calculated?",
        answer: "Targets are calculated based on the sales volume of your EEE product codes in previous years, adjusted for product lifespan schedules defined under CPCB E-Waste Management Rules.",
      },
      {
        question: "What happens if a company fails to fulfill its annual EPR target?",
        answer: "Failing to meet targets results in Environmental Compensation (EC) financial penalties from CPCB and potential suspension of import licenses.",
      },
      {
        question: "Can EnviroServe handle historical registration backlogs?",
        answer: "Yes, our advisory desk assists PIBOs with delayed registrations, historical target calculations, and corrective filing submissions.",
      },
      {
        question: "Are EPR credit certificates transferable between companies?",
        answer: "EPR credits must be procured from registered recyclers and transferred directly to the producer's portal account in accordance with CPCB transfer protocols.",
      },
    ],
    meta: {
      title: "E-Waste EPR Registration & Compliance Services | EnviroServe",
      description: "Complete CPCB E-Waste EPR registration, credit procurement, and annual filing services for producers and importers.",
      keywords: ["e waste epr", "epr registration e-waste", "epr credit procurement", "cpcb epr filing", "e-waste compliance India"],
    },
  },

  "li-ion-battery-epr": {
    slug: "li-ion-battery-epr",
    title: "Battery Waste Management (BWM) EPR Compliance & Credits",
    shortTitle: "Li-Ion Battery EPR",
    eyebrowCategory: "EPR COMPLIANCE",
    category: "EPR Compliance",
    heroImage: "/images/categories/liion.png",
    heroDescription:
      "End-to-end Battery Waste Management (BWM) Rules 2022 registration, credit matching, and material-specific recovery filing for EV producers, battery pack assemblers, and cell importers.",
    summary: {
      text: "India's Battery Waste Management Rules require mandatory percentage extraction targets for Cobalt, Nickel, Lithium, and Lead. EnviroServe provides chemistry-matched EPR credit generation to ensure full compliance.",
      highlights: [
        "BWM Portal Registration",
        "Chemistry-Matched Credits (LFP/NMC)",
        "Material Recovery Certification",
        "CPCB Audit Immunity",
      ],
    },
    alternatingSections: [
      {
        title: "Mandatory Battery Waste Management Rules 2022",
        subtitle: "Chemistry-Specific Recovery Targets",
        content: [
          "Unlike general waste rules, Battery EPR requires producers to account for exact battery chemistries and meet minimum recovery percentages of critical metals.",
          "Importers and EV manufacturers face strict environmental compensation fees for target shortfalls or improper chemistry logging.",
        ],
        points: [
          "Mandatory percentage recovery for Lithium, Cobalt, and Nickel",
          "Chemistry matching across LFP, NMC, LCO, and Lead-acid streams",
          "Centralized CPCB BWM portal registration and reporting",
        ],
        image: "/images/blog/battery-waste.webp",
        imageAlt: "Battery Waste Management and BWM Compliance",
      },
      {
        title: "Battery Mass Audit & Obligation Mapping",
        subtitle: "Accurate Chemistry Reconciliation",
        content: [
          "EnviroServe audits your imported or assembled battery pack tonnage, categorizing cells by weight, energy capacity (kWh), and active cathode chemistry.",
          "We establish precise recovery metrics matching CPCB's annual ramp-up schedule for EV, industrial, and portable batteries.",
        ],
        points: [
          "Classification across Automotive, Industrial, and Portable cells",
          "Calculation of metal-wise recovery tonnage obligations",
          "ICEGATE import bill reconciliation for cell importers",
        ],
        image: "/images/services/482114651Battery-removebg-preview.png",
        imageAlt: "Battery Cell Mass and Capacity Verification",
      },
      {
        title: "Material Recovery & Legitimate Credit Generation",
        subtitle: "Closed-Loop Processing Backing",
        content: [
          "Through our licensed lithium battery recycling facility, spent packs are processed into high-purity Black Mass, extracting Cobalt, Nickel, and Lithium.",
          "Recovery yields are certified and uploaded to CPCB portals as legitimate EPR credits for direct transfer to producer accounts.",
        ],
        points: [
          "Credits backed by physical Black Mass and metal extraction",
          "Exact matching of mandatory cathode metal percentages",
          "Transparent mass-balance documentation for state board audits",
        ],
        image: "/images/hero/hero-services-dslr.jpg",
        imageAlt: "Battery Recycling Shredding and Metal Recovery",
      },
      {
        title: "Portal Account Management & Annual Returns",
        subtitle: "Frictionless Regulatory Filing",
        content: [
          "Our advisory team manages your centralized CPCB BWM portal account—executing credit transfers and filing annual returns well ahead of statutory deadlines.",
          "Clients receive complete digital audit portfolios verifying full target fulfillment across all chemistry streams.",
        ],
        points: [
          "Direct credit transfer on CPCB BWM centralized system",
          "Annual return submission with zero data mismatch",
          "Protection against CPCB environmental compensation fines",
        ],
        image: "/images/blog/epr-compliance.webp",
        imageAlt: "CPCB BWM Portal Filing and Annual Audit",
      },
    ],
    processSteps: [
      { number: "01", title: "Chemistry Audit", description: "Calculate obligation tonnage by battery chemistry and kWh capacity." },
      { number: "02", title: "BWM Registration", description: "File application for Producer/Importer Registration on CPCB portal." },
      { number: "03", title: "Credit Sourcing", description: "Procure verified material recovery credits generated from spent battery processing." },
      { number: "04", title: "Credit Transfer", description: "Transfer chemistry-matched credits to producer portal account." },
      { number: "05", title: "Annual Return", description: "Submit verified annual battery waste returns ahead of CPCB deadlines." },
    ],
    benefits: [
      { title: "Chemistry-Matched Accuracy", description: "Ensure exact matching of mandatory Lithium, Cobalt, Nickel, and Lead recovery credits." },
      { title: "Zero Compensation Penalty", description: "Eliminate risks of heavy financial penalties imposed for Battery EPR shortfalls." },
      { title: "Single-Window Management", description: "Turnkey handling of CPCB registration, credit procurement, and return filing." },
      { title: "Supply Chain Circularity", description: "Demonstrate verified ESG commitment to closed-loop electric mobility." },
    ],
    targetAudience: {
      title: "WHO IS THIS FOR?",
      categories: [
        "Electric Vehicle (EV) Manufacturers (2W, 3W, 4W, Commercial Vehicles)",
        "Lithium Battery Cell Importers & Pack Assemblers",
        "Solar Inverter & Energy Storage System (ESS) Brands",
        "Consumer Electronics & Power Bank Manufacturers",
      ],
    },
    whyEnviroServe: {
      title: "WHY ENVIROSERVE",
      items: [
        { title: "Licensed Battery Recycling", desc: "Credits generated directly from authorized lithium battery processing operations." },
        { title: "Chemistry Alignment", desc: "Expert matching of LFP and NMC target obligations with cathode recovery streams." },
        { title: "CPCB BWM Specialists", desc: "Dedicated advisory team experienced in centralized battery portal compliance." },
      ],
    },
    faqs: [
      {
        question: "Are EV manufacturers obligated under Battery EPR in India?",
        answer: "Yes, EV manufacturers are classified as producers under the Battery Waste Management Rules, 2022 and must fulfill annual recycling and material recovery targets.",
      },
      {
        question: "What specific metals must be recovered under Battery EPR?",
        answer: "The rules mandate minimum percentage recovery of Cobalt, Nickel, Lithium, and Lead, with target percentages increasing annually.",
      },
      {
        question: "Can general e-waste credits be used for battery EPR compliance?",
        answer: "No, Battery EPR credits must originate exclusively from registered battery refurbishers or recyclers under the BWM portal.",
      },
      {
        question: "How does EnviroServe ensure chemistry matching for EPR credits?",
        answer: "We categorize battery waste streams into LFP, NMC, LCO, and Lead-acid, generating credit certificates that match your exact product sales breakdown.",
      },
      {
        question: "When are annual returns due under the Battery Waste Management Rules?",
        answer: "Annual returns under BWM rules are typically due by April 30th following the end of each financial year.",
      },
    ],
    meta: {
      title: "Lithium-Ion Battery EPR Compliance Services | EnviroServe",
      description: "CPCB Battery Waste Management Rules registration, chemistry-matched EPR credits, and annual return filing.",
      keywords: ["battery epr", "bwm rules 2022", "ev battery epr", "lithium battery epr credit", "cpcb battery registration"],
    },
  },



  "battery-waste-epr": {
    slug: "battery-waste-epr",
    title: "Lead-Acid & General Battery Waste EPR Services",
    shortTitle: "General Battery EPR",
    eyebrowCategory: "EPR COMPLIANCE",
    category: "EPR Compliance",
    heroImage: "/images/services/lead-acid-and-general.png",
    heroDescription:
      "Comprehensive compliance for conventional Lead-Acid, Nickel-Cadmium, UPS, and Primary Zinc batteries under the Battery Waste Management Rules. Turnkey CPCB portal registration, scrap channelization, and credit filing.",
    summary: {
      text: "Conventional Lead-Acid and industrial batteries contain heavy lead contents and acidic electrolytes demanding 100% closed-loop smelting. EnviroServe fulfills take-back obligations through CPCB-registered green lead smelters.",
      highlights: [
        "Lead-Acid Take-Back Compliance",
        "Green Lead Smelter Credits",
        "Automotive & UPS Battery Coverage",
        "CPCB BWM Portal Filing",
      ],
    },
    alternatingSections: [
      {
        title: "Managing Statutory Lead-Acid Battery Obligations",
        subtitle: "Environmental Liability & Recovery",
        content: [
          "Lead-acid batteries represent a significant environmental risk if improperly disposed of in informal scrap yards. Heavy lead poisoning and acid spills present severe public health hazards.",
          "Under BWM Rules, battery manufacturers and importers must ensure 100% of sold battery lead mass is recovered through licensed secondary lead smelters.",
        ],
        points: [
          "Complete recovery of metallic lead and lead compounds",
          "Safe neutralization of spent sulfuric acid electrolyte",
          "Fulfillment of mandatory take-back percentages",
        ],
        image: "/images/services/lead-acid-battery.png",
        imageAlt: "Lead-Acid Battery Scrap and Industrial Battery Recovery",
      },
      {
        title: "Lead Mass Audit & Production Reconciliation",
        subtitle: "Tonnage Target Calculations",
        content: [
          "EnviroServe audits your annual battery sales ledgers, calculating exact lead content tonnage across automotive starter batteries, UPS cells, and industrial standby power packs.",
          "We establish a clear target fulfillment roadmap matching mandatory annual recovery schedules mandated by CPCB.",
        ],
        points: [
          "Lead tonnage calculation across automotive and industrial lines",
          "Reconciliation for imported primary dry cell batteries",
          "Audit-proof document preparation for state pollution boards",
        ],
        image: "/images/services/lead-mass-aduit.png",
        imageAlt: "Industrial Battery Storage and Scrap Inventory",
      },
      {
        title: "Green Smelter Channelization & Credit Generation",
        subtitle: "Environmentally Sound Lead Smelting",
        content: [
          "We channelize spent batteries to authorized green lead smelters equipped with advanced bag-house filtration and effluent treatment systems.",
          "Smelters process scrap into refined secondary lead ingots, issuing verified recycling certificates that are uploaded to the CPCB centralized system.",
        ],
        points: [
          "Secondary lead ingot re-entry into battery manufacturing",
          "Zero-emission smelting backed by CPCB process approvals",
          "Non-duplicable digital recycling credits",
        ],
        image: "/images/services/green-smelter.png",
        imageAlt: "Secondary Lead Smelting and Processing Facility",
      },
      {
        title: "Centralized Portal Filing & Annual Returns",
        subtitle: "Audit-Ready Regulatory Compliance",
        content: [
          "EnviroServe manages your CPCB BWM portal account—transferring lead recovery credits to your producer account and filing annual returns.",
          "Clients receive complete compliance archives verifying zero target shortfall and full release from environmental compensation liabilities.",
        ],
        points: [
          "Direct credit transfer on CPCB centralized BWM portal",
          "Timely annual return filing with zero calculation errors",
          "Guaranteed protection against statutory non-compliance fines",
        ],
        image: "/images/blog/epr-compliance.webp",
        imageAlt: "Centralized Battery Portal Account Management",
      },
    ],
    processSteps: [
      { number: "01", title: "Target Calculation", description: "Audit annual battery sales volume in metric tons of lead content." },
      { number: "02", title: "BWM Registration", description: "Obtain Producer/Importer Registration on centralized CPCB portal." },
      { number: "03", title: "Scrap Channelization", description: "Collect and channelize spent lead-acid cells to registered green smelters." },
      { number: "04", title: "Credit Transfer", description: "Transfer certified lead recovery credits to your producer account." },
      { number: "05", title: "Annual Return", description: "File verified annual battery returns before regulatory deadlines." },
    ],
    benefits: [
      { title: "Turnkey Compliance", description: "Complete release from environmental compensation liabilities under Battery Rules." },
      { title: "Green Smelter Network", description: "Ensure spent batteries are refined exclusively in bag-house filtered, zero-discharge smelters." },
      { title: "Audit Immunity", description: "100% audit-proof documentation backed by physical lead mass recovery verification." },
      { title: "Automotive & Industrial Scope", description: "Comprehensive coverage for 2W/4W starter batteries, UPS packs, and industrial standby cells." },
    ],
    targetAudience: {
      title: "WHO IS THIS FOR?",
      categories: [
        "Automotive Lead-Acid Battery Manufacturers",
        "UPS & Solar Inverter Battery Brands",
        "Industrial Lead-Acid Cell Importers",
        "Primary Dry-Cell Battery Importers & Distributors",
      ],
    },
    whyEnviroServe: {
      title: "WHY ENVIROSERVE",
      items: [
        { title: "Authorized Smelter Network", desc: "Direct partnerships with CPCB-approved green secondary lead smelters." },
        { title: "Lead Mass Calculation", desc: "Precise mathematical audit of lead mass per battery model." },
        { title: "Full Statutory Protection", desc: "Zero discrepancy record across state pollution board compliance audits." },
      ],
    },
    faqs: [
      {
        question: "What types of general batteries are covered under Battery EPR?",
        answer: "Covered types include automotive lead-acid batteries, industrial UPS batteries, inverter batteries, Ni-Cd batteries, and primary dry-cell batteries.",
      },
      {
        question: "How are lead-acid battery EPR obligations calculated?",
        answer: "Obligations are calculated based on the total weight of metallic lead contained in the batteries sold or imported by your company in previous financial years.",
      },
      {
        question: "What is a 'Green Lead Smelter'?",
        answer: "A Green Lead Smelter is a CPCB-registered secondary smelting plant equipped with acoustic bag-house air filters, wet scrubbers, and effluent treatment plants to refine lead safely without air or water pollution.",
      },
      {
        question: "Can primary non-rechargeable dry cell importers apply for EPR?",
        answer: "Yes, importers of primary zinc-carbon or alkaline dry cells are also obligated producers under the Battery Waste Management Rules.",
      },
      {
        question: "What documentation is generated upon battery recycling?",
        answer: "Recyclers issue lead recovery certificates detailing scrap lot weight, lead yield, and serial manifest numbers required for portal credit submission.",
      },
    ],
    meta: {
      title: "Lead-Acid & General Battery EPR Services | EnviroServe",
      description: "CPCB Battery EPR compliance, green lead smelter credit procurement, and annual return filing for lead-acid battery brands.",
      keywords: ["lead acid battery epr", "battery waste epr", "green lead smelter credit", "cpcb battery portal", "battery recycling compliance"],
    },
  },





  "multi-category-epr": {
    slug: "multi-category-epr",
    title: "Unified Multi-Category EPR Advisory & Execution",
    shortTitle: "Multi-Category EPR",
    eyebrowCategory: "EPR COMPLIANCE",
    category: "EPR Compliance",
    heroImage: "/images/hero/unified-multi-category-epr.png",
    heroDescription:
      "Consolidated, single-window compliance management across E-Waste, Plastic Packaging, Battery Waste, Waste Tyres, and Used Oil. Eliminating portal fragmentation with unified audit management.",
    summary: {
      text: "Enterprise conglomerates and importers often fall under multiple national EPR regulations simultaneously. EnviroServe provides a single-window compliance desk to manage registrations, credit portfolios, and annual filings across all CPCB portals.",
      highlights: [
        "Single-Window Advisory Desk",
        "E-Waste + Plastic + Battery + Tyre + Oil",
        "Consolidated Credit Portfolio",
        "Dedicated Compliance Account Manager",
      ],
    },
    alternatingSections: [
      {
        title: "The Friction of Fragmented Multi-Portal Compliance",
        subtitle: "Siloed Portals & Audit Overhead",
        content: [
          "Managing multiple logins, varying portal schemas, conflicting deadline calendars, and disparate recycling vendors creates massive administrative overhead and legal audit risk.",
          "A single data mismatch in one category can trigger CPCB query notices that impact brand reputation and import licenses.",
        ],
        points: [
          "Fragmented management across 5 separate CPCB portals",
          "Varying calculation schemas and deadline calendars",
          "High risk of audit failure with unverified vendors",
        ],
        image: "/images/blog/epr-compliance.webp",
        imageAlt: "Multi-Category Compliance Documentation and Audit Desk",
      },
      {
        title: "Master Product Portfolio Audit & Mapping",
        subtitle: "Unified Tonnage Reconciliation",
        content: [
          "Our regulatory team deconstructs your entire product lines—mapping plastic packaging mass, electrical component weights, battery capacities, and lubricant volumes into a master compliance ledger.",
          "We establish an integrated target fulfillment roadmap, optimizing credit procurement across all applicable waste streams simultaneously.",
        ],
        points: [
          "Single master audit covering packaging, IT hardware, and batteries",
          "ICEGATE import bill reconciliation across all HS codes",
          "Multi-category target calculation and roadmap",
        ],
        image: "/images/services/3775146-1024x683.jpg",
        imageAlt: "Master Compliance Audit Workspace and Calculations",
      },
      {
        title: "Consolidated Credit Sourcing & Recycler Network",
        subtitle: "Integrated Recycling Backing",
        content: [
          "EnviroServe leverages its pan-India recycling infrastructure and authorized processor network to source legitimate EPR credits across e-waste, plastics, lithium batteries, tyres, and used oil.",
          "Clients benefit from consolidated credit pricing, single-invoice settlement, and uniform mass-balance documentation quality.",
        ],
        points: [
          "Bundled credit procurement across all 5 waste streams",
          "Uniform documentation quality and mass-balance logs",
          "Single point of vendor billing and legal accountability",
        ],
        image: "/images/services/consolidated-credit-sourcing.png",
        imageAlt: "Multi-Stream Recycling Facility and Material Operations",
      },
      {
        title: "Unified Compliance Dashboard & Annual Returns",
        subtitle: "Executive Visibility & Total Immunity",
        content: [
          "Your dedicated account manager oversees all portal submissions—uploading verified credit certificates and filing annual returns ahead of every statutory deadline.",
          "Executives receive real-time dashboard visibility and a master digital compliance binder for state pollution board audits.",
        ],
        points: [
          "Real-time visibility into target progress across all portals",
          "Zero missed cutoffs across E-Waste, Plastic, Battery, Tyre, Oil",
          "Tamper-proof master digital compliance archive",
        ],
        image: "/images/hero/hero-about-dslr.jpg",
        imageAlt: "Executive Regulatory Compliance Review and Reports",
      },
    ],
    processSteps: [
      { number: "01", title: "Master Audit", description: "Deconstruct product lines into plastics, e-waste, battery, and oil metrics." },
      { number: "02", title: "Portal Registrations", description: "File single-window registrations across all applicable CPCB portals." },
      { number: "03", title: "Integrated Credit Sourcing", description: "Simultaneous procurement of verified recycling certificates." },
      { number: "04", title: "Portal Transfers", description: "Execute credit transfers across e-waste, plastic, battery, and oil accounts." },
      { number: "05", title: "Master Annual Returns", description: "File error-free annual returns ahead of all regulatory cutoffs." },
    ],
    benefits: [
      { title: "Single Point of Accountability", description: "One dedicated advisory desk managing all CPCB & SPCB regulatory interactions." },
      { title: "Cost Optimization", description: "Volume discounts on credit procurement across multi-category packaging and waste streams." },
      { title: "Zero Missed Deadlines", description: "Unified master compliance calendar tracking every quarterly and annual cutoff." },
      { title: "Executive Peace of Mind", description: "Executive dashboard visibility with complete digital audit binders." },
    ],
    targetAudience: {
      title: "WHO IS THIS FOR?",
      categories: [
        "Multinational Conglomerates with Diverse Product Lines",
        "Technology & Consumer Electronics Importers",
        "Automotive OEMs & Heavy Industrial Manufacturers",
        "Large Retail Networks & E-Commerce Platforms",
      ],
    },
    whyEnviroServe: {
      title: "WHY ENVIROSERVE",
      items: [
        { title: "Pan-India Multi-Stream Reach", desc: "Capability to handle electronics, plastics, batteries, tyres, and oil simultaneously." },
        { title: "Consolidated Compliance", desc: "Single vendor invoice, single point of contact, and uniform documentation." },
        { title: "Executive Advisory", desc: "Senior regulatory consultants providing strategic guidance for ESG leadership." },
      ],
    },
    faqs: [
      {
        question: "Why choose Multi-Category Advisory over individual vendors?",
        answer: "It eliminates vendor fragmentation, guarantees consistent documentation quality, reduces billing overhead, and provides executive visibility across your entire corporate environmental obligation.",
      },
      {
        question: "Can EnviroServe handle companies operating under 3 or 4 different portals?",
        answer: "Yes, we manage registrations, credit procurement, trading, and return filings across all 5 national CPCB portals under a single advisory desk.",
      },
      {
        question: "How does EnviroServe ensure zero missed deadlines across multiple portals?",
        answer: "We deploy an automated master compliance calendar overseen by an assigned dedicated account manager who handles all submissions ahead of cutoffs.",
      },
      {
        question: "Is multi-category credit procurement cost-effective?",
        answer: "Yes, bundling credit requirements across e-waste, plastic, battery, and oil allows clients to benefit from volume pricing and reduced administrative overhead.",
      },
      {
        question: "What reporting does executive management receive?",
        answer: "Executives receive quarterly compliance progress reports and a digital compliance binder containing all certificates, manifests, and filing receipts.",
      },
    ],
    meta: {
      title: "Multi-Category EPR Advisory Services | EnviroServe",
      description: "Unified single-window EPR compliance management across E-Waste, Plastics, Batteries, Tyres, and Used Oil portals.",
      keywords: ["multi category epr", "cpcb epr advisory", "consolidated epr compliance", "epr portal filing", "waste management compliance India"],
    },
  },

  "annual-filing": {
    slug: "annual-filing",
    title: "Annual EPR Filing & Regulatory Audit Support",
    shortTitle: "Annual EPR Filing",
    eyebrowCategory: "EPR COMPLIANCE",
    category: "EPR Compliance",
    heroImage: "/images/services/annual-epr-filling.png",
    heroDescription:
      "Error-free annual return preparation, ICEGATE import reconciliation, mass-balance audit verification, and digital CPCB filing support across all environmental compliance portals.",
    summary: {
      text: "Securing EPR registration and credits is only half the battle. Submitting inaccurate or late Annual Returns on CPCB portals can result in registration holds and heavy financial penalties. EnviroServe delivers meticulous pre-filing audits and return execution.",
      highlights: [
        "ICEGATE Import Reconciliation",
        "Pre-Filing Data Reconciliation",
        "Error-Free CPCB Return Upload",
        "Tamper-Proof Audit Archives",
      ],
    },
    alternatingSections: [
      {
        title: "The Critical Importance of Accurate Annual Returns",
        subtitle: "Audit Scrutiny & Regulatory Risks",
        content: [
          "CPCB and SPCB state boards routinely audit annual return submissions against Customs ICEGATE import data and recycler mass-balance logs.",
          "Calculation errors, mismatched item codes, or unverified credit certificate numbers trigger automatic query notices and potential license holds.",
        ],
        points: [
          "Strict non-extendable statutory filing cutoffs",
          "Automated penalty triggers on CPCB portals for mismatches",
          "Risk of registration revocation during surprise state audits",
        ],
        image: "/images/blog/epr-compliance.webp",
        imageAlt: "Annual Compliance Audit and Portal Filing Documentation",
      },
      {
        title: "Pre-Filing Data Reconciliation & ICEGATE Audit",
        subtitle: "Flawless Mathematical Verification",
        content: [
          "Our compliance team performs a pre-filing audit—cross-referencing your sales ledgers and ICEGATE import declarations against target fulfillment calculations.",
          "We resolve discrepancies in weight metrics, category codes, or credit serial numbers before executing portal submissions.",
        ],
        points: [
          "Cross-checking import bills against ICEGATE customs logs",
          "Mass-balance verification of credit certificates",
          "Zero-discrepancy ledger reconciliation",
        ],
        image: "/images/services/free-filling-audit.png",
        imageAlt: "Data Audit Desk and Import Ledger Reconciliation",
      },
      {
        title: "Portal Submission & Document Certification",
        subtitle: "Seamless Return Execution",
        content: [
          "We execute annual return filings directly on the respective CPCB centralized portals, verifying that all uploaded data matches statutory schemas.",
          "Filing receipts and official confirmation certificates are downloaded and verified for legal compliance.",
        ],
        points: [
          "Flawless submission on centralized national portals",
          "Generation of official CPCB return acknowledgment receipts",
          "Full compliance verification across state board frameworks",
        ],
        image: "/images/services/3775146-1024x683.jpg",
        imageAlt: "Digital Portal Filing and Acknowledgment Receipts",
      },
      {
        title: "Tamper-Proof Compliance Archiving",
        subtitle: "5-Year Audit Readiness",
        content: [
          "All filed returns, credit certificates, import bills, and manifest slips are compiled into a digital compliance binder.",
          "This archive guarantees immediate audit readiness whenever state pollution control board inspectors request historical records.",
        ],
        points: [
          "Digital tamper-proof compliance binder for 5+ years",
          "Immediate retrieval during SPCB physical facility audits",
          "Complete statutory protection for corporate legal teams",
        ],
        image: "/images/hero/hero-about-dslr.jpg",
        imageAlt: "Corporate Compliance Archiving and Digital Portfolio",
      },
    ],
    processSteps: [
      { number: "01", title: "Document Collection", description: "Gather sales ledgers, ICEGATE import bills, and credit certificates." },
      { number: "02", title: "Data Reconciliation", description: "Cross-check tonnage calculations and credit serial numbers." },
      { number: "03", title: "Pre-Filing Audit", description: "Verify zero data mismatch against CPCB portal schemas." },
      { number: "04", title: "Portal Execution", description: "File official Annual Returns on respective centralized portals." },
      { number: "05", title: "Audit Archiving", description: "Deliver digital compliance binder for 5-year audit readiness." },
    ],
    benefits: [
      { title: "Zero Discrepancy Risk", description: "Thorough pre-filing verification prevents CPCB query notices or financial penalties." },
      { title: "ICEGATE Alignment", description: "Ensure import volume calculations match official Customs declarations exactly." },
      { title: "5-Year Audit Readiness", description: "Complete digital compliance archive ready for state pollution board inspections." },
      { title: "Stress-Free Cutoffs", description: "Submissions completed well ahead of statutory annual return deadlines." },
    ],
    targetAudience: {
      title: "WHO IS THIS FOR?",
      categories: [
        "Registered PIBOs across E-Waste, Plastic, Battery, Tyre, Oil",
        "Electronics & Hardware Importers needing Customs clearance validation",
        "Corporate Legal & Sustainability Audit Departments",
        "Multinational Brands operating under CPCB compliance",
      ],
    },
    whyEnviroServe: {
      title: "WHY ENVIROSERVE",
      items: [
        { title: "Regulatory Audit Experience", desc: "Deep familiarity with CPCB portal schemas, error codes, and audit mechanisms." },
        { title: "ICEGATE Reconciliation", desc: "Expert cross-referencing of import Customs data with compliance filings." },
        { title: "Zero Penalty Guarantee", desc: "Track record of error-free return submissions across India." },
      ],
    },
    faqs: [
      {
        question: "When are annual EPR returns due on CPCB portals?",
        answer: "Filing cutoffs vary by category—typically June 30th for Plastics & E-Waste, and April 30th for Batteries. We ensure all returns are prepared and submitted well in advance.",
      },
      {
        question: "What happens if an annual return contains calculation errors?",
        answer: "CPCB portals flag data mismatches during automated audits, issuing query notices and potential environmental compensation fines until rectified.",
      },
      {
        question: "How does EnviroServe reconcile import data for annual filings?",
        answer: "We cross-reference your annual import bills of entry with official Customs ICEGATE records to ensure exact weight and code alignment.",
      },
      {
        question: "What documentation should be preserved after filing annual returns?",
        answer: "Companies should preserve filing receipts, credit transfer certificates, manifest logs, and sales ledgers for a minimum of 5 years.",
      },
      {
        question: "Does EnviroServe support audit queries raised by SPCB state boards?",
        answer: "Yes, our advisory team assists clients in responding to statutory query notices and providing verified documentation during state board inspections.",
      },
    ],
    meta: {
      title: "Annual EPR Filing & Audit Support | EnviroServe",
      description: "Error-free annual EPR return filing, ICEGATE import reconciliation, and CPCB audit support for PIBOs.",
      keywords: ["annual epr filing", "cpcb annual return", "epr audit support", "icegate epr reconciliation", "annual return e-waste plastic"],
    },
  },

  "pro-services": {
    slug: "pro-services",
    title: "Circular Economy Responsibility (CER) Turnkey Execution",
    shortTitle: "Circular Economy Responsibility",
    eyebrowCategory: "ENTERPRISE SOLUTIONS",
    category: "Enterprise Solutions",
    heroImage: "/images/services/77b38d02-7a38-4c16-b60b-cd637fd8aa56.jpeg",
    heroDescription:
      "Pan-India physical take-back infrastructure, closed-loop resource recovery, consumer awareness campaigns, and formal recycler channelization driving sustainable circular product lifecycles.",
    summary: {
      text: "Through Circular Economy Responsibility (CER), EnviroServe operates ground-level collection networks, closed-loop resource recovery systems, and compliant channelization to help enterprises transition from linear disposal to a sustainable circular economy.",
      highlights: [
        "Closed-Loop Resource Recovery",
        "Pan-India Collection Bins",
        "Kabadiwala & Aggregator Formalization",
        "Traceable Sustainability Channelization",
      ],
    },
    alternatingSections: [
      {
        title: "The Challenge of Circular Resource Recovery Infrastructure",
        subtitle: "Physical Take-Back & Closed-Loop Needs",
        content: [
          "Producers and enterprises require robust physical collection systems, consumer awareness drives, and closed-loop recycling channels to keep valuable materials within the industrial cycle.",
          "EnviroServe's Circular Economy Responsibility model bridges this gap by deploying compliant collection networks and formalizing informal scrap aggregators into traceable circular loops.",
        ],
        points: [
          "Establishing branded take-back bins in major metro hubs",
          "Integrating informal waste pickers into safe collection channels",
          "Executing mandatory public awareness workshops under sustainability rules",
        ],
        image: "/images/services/77b38d02-7a38-4c16-b60b-cd637fd8aa56.jpeg",
        imageAlt: "EnviroServe Operations and Collection Center Network",
      },
      {
        title: "Branded Collection Bins & Regional Take-Back Hubs",
        subtitle: "Consumer-Facing Infrastructure",
        content: [
          "EnviroServe places branded e-waste and battery drop boxes at retail networks, corporate tech parks, educational campuses, and residential centers.",
          "Collected materials are aggregated at regional hubs, weighed, tagged with unique barcodes, and prepped for safe transport to processing plants.",
        ],
        points: [
          "Custom branded e-waste drop boxes for corporate clients",
          "Regional aggregation hubs in major metro centers",
          "Barcoded lot tracking from consumer drop to recycling plant",
        ],
        image: "/images/categories/ewaste.webp",
        imageAlt: "Collection Bins and E-Waste Sorting Hub",
      },
      {
        title: "Consumer Awareness & ESG Circularity Campaigns",
        subtitle: "Measurable Impact Education",
        content: [
          "We organize structured e-waste and battery awareness drives across schools, colleges, corporate offices, and municipal communities.",
          "Campaigns educate the public on toxic waste hazards, promoting responsible segregation and driving footfall to authorized take-back centers.",
        ],
        points: [
          "Educational workshops and corporate eco-drives",
          "Digital awareness campaigns driving consumer participation",
          "Measurable ESG impact metrics for brand reporting",
        ],
        image: "/images/hero/hero-about-dslr.jpg",
        imageAlt: "Corporate ESG Awareness Drive and Environmental Education",
      },
      {
        title: "Traceable Channelization & Closed-Loop Material Recovery",
        subtitle: "Audit-Proof Resource Management",
        content: [
          "Collected scrap is channelized exclusively to licensed recycling facilities for scientific de-manufacturing and precious metal recovery.",
          "Circular Economy Responsibility operations are documented through comprehensive monthly collection reports and manifest receipts.",
        ],
        points: [
          "Exclusive channelization to CPCB-authorized processing plants",
          "Monthly collection tonnage and awareness activity logs",
          "Comprehensive circularity representation for client brands",
        ],
        image: "/images/services/3775146-1024x683.jpg",
        imageAlt: "Circularity Operations Reporting and Document Archiving",
      },
    ],
    processSteps: [
      { number: "01", title: "Strategy Design", description: "Formulate circular take-back logistics plan tailored to brand distribution." },
      { number: "02", title: "Bin Deployment", description: "Place branded collection boxes across corporate and retail points." },
      { number: "03", title: "Awareness Drives", description: "Execute public educational workshops and consumer eco-campaigns." },
      { number: "04", title: "Logistics Pickup", description: "Schedule regular collection and transport to authorized recycling centers." },
      { number: "05", title: "Monthly Reporting", description: "Deliver comprehensive collection and channelization audit reports." },
    ],
    benefits: [
      { title: "Turnkey Circular System", description: "Fulfill closed-loop resource recovery and physical take-back obligations without capital expenditure." },
      { title: "Brand Reputation Boost", description: "Showcase active corporate environmental responsibility and circular economy commitment to stakeholders." },
      { title: "Informal Formalization", description: "Integrate traditional scrap aggregators into safe, wage-supported collection networks." },
      { title: "Audit Readiness", description: "Complete documentation backing all physical collection and awareness metrics." },
    ],
    targetAudience: {
      title: "WHO IS THIS FOR?",
      categories: [
        "Global Technology Brands entering the Indian Market",
        "Electronics OEMs seeking turnkey physical circular fulfillment",
        "Retail Chains & Supermarket Networks establishing take-back bins",
        "Battery Manufacturers needing consumer collection networks",
      ],
    },
    whyEnviroServe: {
      title: "WHY ENVIROSERVE",
      items: [
        { title: "Authorized Circular Operations", desc: "Official authorization under national environmental frameworks." },
        { title: "Pan-India Ground Network", desc: "Established collection points and logistics connections nationwide." },
        { title: "Integrated Processing", desc: "Direct ownership of recycling channels ensuring zero unverified drop-offs." },
      ],
    },
    faqs: [
      {
        question: "What is Circular Economy Responsibility (CER)?",
        answer: "Circular Economy Responsibility (CER) encompasses physical ground collection, closed-loop resource recovery, consumer awareness drives, and scientific recycling operations to ensure end-of-life products are transformed back into industrial raw materials.",
      },
      {
        question: "Can EnviroServe place branded e-waste drop boxes at client offices?",
        answer: "Yes, we design, deploy, and maintain custom co-branded collection boxes at corporate office sites, retail hubs, and tech parks.",
      },
      {
        question: "How does EnviroServe track e-waste collected through circular channels?",
        answer: "Every intake lot is weighed, barcoded, and logged in our digital inventory management system from collection point to final recycling.",
      },
      {
        question: "Are public awareness campaigns part of Circular Economy Responsibility?",
        answer: "Yes, regular consumer awareness drives on e-waste segregation and environmental protection are an integral part of our circular responsibility initiatives.",
      },
      {
        question: "What reporting does a brand receive from EnviroServe's circular operations?",
        answer: "Brands receive monthly collection logs, awareness campaign photo documentation, weight certificates, and sustainability audit summary reports.",
      },
    ],
    meta: {
      title: "Circular Economy Responsibility Services | EnviroServe",
      description: "Turnkey Circular Economy Responsibility services: Pan-India closed-loop recovery, collection bin networks, and awareness drives.",
      keywords: ["circular economy responsibility", "closed loop recycling india", "circular product lifecycle", "e-waste take back india", "resource recovery"],
    },
  },

  "reverse-logistics": {
    slug: "reverse-logistics",
    title: "Pan-India Secure Reverse Logistics for Recyclable Materials",
    shortTitle: "Reverse Logistics",
    eyebrowCategory: "ENTERPRISE SOLUTIONS",
    category: "Enterprise Solutions",
    heroImage: "/images/services/WhatsApp-Image-2025-12-16-at-15.16.20.jpeg",
    heroDescription:
      "Compliant take-back logistics, UN-certified hazardous packaging, GPS tracking, and pan-India transportation for e-waste, spent battery packs, and bulk industrial recyclables.",
    summary: {
      text: "Transporting hazardous electronic scrap, lithium batteries, and industrial waste requires specialized transit permits, shock-absorbent packaging, and trained handlers. EnviroServe operates nationwide reverse logistics tailored for recyclables.",
      highlights: [
        "GPS-Monitored Fleet",
        "UN-Certified Hazardous Packaging",
        "Form-9 Transit Manifest Compliance",
        "Pan-India Site Pickup Capability",
      ],
    },
    alternatingSections: [
      {
        title: "The Logistical Challenges of Hazardous Scrap Transit",
        subtitle: "Safety & Compliance Requirements",
        content: [
          "Moving spent electronics, EV batteries, and industrial hazardous materials without proper packaging, vehicle permits, or trained crews risks transit fires, chemical spills, and police impoundment.",
          "EnviroServe provides specialized, permit-backed transit fleets engineered for safe, compliant movement between enterprise sites and recycling centers.",
        ],
        points: [
          "Form-9 hazardous consignment note compliance for state movement",
          "Thermal packaging for EV lithium battery transport",
          "Trained crews equipped with spill response kits",
        ],
        image: "/images/services/WhatsApp-Image-2025-12-16-at-15.16.20.jpeg",
        imageAlt: "EnviroServe Reverse Logistics Fleet and Transport Containers",
      },
      {
        title: "UN-Certified Hazardous Packaging & Palletization",
        subtitle: "Transit Risk Mitigation",
        content: [
          "Our field teams provide on-site pallet wrapping, thermal insulation lining, and UN-certified containment boxes designed specifically for battery packs and heavy IT server racks.",
          "Every consignment is barcoded and hazard-labeled before loading onto hydraulic tail-lift vehicles.",
        ],
        points: [
          "UN-rated fire-retardant containment for lithium cells",
          "Hydraulic tail-lifts and rigging gear for heavy IT racks",
          "Barcode lot tagging for complete chain of custody",
        ],
        image: "/images/categories/metal.png",
        imageAlt: "Heavy Equipment Palletization and Loading Operations",
      },
      {
        title: "GPS Real-Time Tracking & Electronic Manifests",
        subtitle: "Complete Chain-of-Custody Transparency",
        content: [
          "Vehicles are equipped with real-time GPS tracking and temperature sensors for sensitive battery consignments.",
          "Electronic Form-9 manifests and digital weight receipts provide instant proof of pickup and direct transit without illegal drop-offs.",
        ],
        points: [
          "Real-time GPS tracking link for corporate client security teams",
          "Temperature and vibration monitoring for spent EV packs",
          "Electronic Form-9 manifest verification upon arrival",
        ],
        image: "/images/services/gps-real-time.png",
        imageAlt: "GPS Fleet Tracking and Transit Manifest Management",
      },
      {
        title: "Direct Delivery & Weight Audit Verification",
        subtitle: "Guaranteed Destination Arrival",
        content: [
          "Consignments are transported directly to CPCB-authorized recycling facilities without intermediate storage or informal diversion.",
          "Upon arrival, lot weights are verified on calibrated weighbridges, and digital delivery confirmations are issued to the client.",
        ],
        points: [
          "Calibrated weighbridge digital mass verification",
          "Immediate issuance of signed delivery confirmation receipts",
          "Full indemnification against transit environmental liabilities",
        ],
        image: "/images/services/direct-delivery.png",
        imageAlt: "Weighbridge Mass Verification and Intake Log",
      },
    ],
    processSteps: [
      { number: "01", title: "Consignment Booking", description: "Assess weight, volume, battery chemistry, and location specifics." },
      { number: "02", title: "On-Site Packaging", description: "Deploy UN-certified boxes, thermal liners, and barcode tagging." },
      { number: "03", title: "GPS Escorted Transit", description: "Direct transit to authorized facilities with real-time GPS tracking." },
      { number: "04", title: "Weighbridge Intake", description: "Verify gross and net weights on calibrated intake weighbridges." },
      { number: "05", title: "Delivery Confirmation", description: "Issue signed electronic Form-9 manifest and weight receipt." },
    ],
    benefits: [
      { title: "Pan-India Coverage", description: "Seamless pickup capability across metro hubs, tier-2 cities, and remote tower sites." },
      { title: "Full Liability Protection", description: "Complete transit risk mitigation adhering to motor vehicle and hazardous waste guidelines." },
      { title: "UN-Certified Packaging", description: "Deploy fire-retardant containers, thermal liners, and shock isolation packing." },
      { title: "Complete Chain of Custody", description: "Real-time GPS tracking and electronic Form-9 manifest logs for every shipment." },
    ],
    targetAudience: {
      title: "WHO IS THIS FOR?",
      categories: [
        "Corporate IT Companies replacing hardware nationwide",
        "EV Manufacturers transporting warranty-returned battery packs",
        "Telecom Operators decommissioning remote cell tower sites",
        "Industrial Plants clearing obsolete electrical machinery",
      ],
    },
    whyEnviroServe: {
      title: "WHY ENVIROSERVE",
      items: [
        { title: "Permit-Backed Fleet", desc: "Authorized hazardous waste transit permits across state borders." },
        { title: "Heavy Rigging Capability", desc: "Hydraulic tail-lifts, forklifts, and trained crews for heavy server rack pickups." },
        { title: "Zero Transit Leakage", desc: "Guaranteed direct transit from client gate to authorized recycling plant." },
      ],
    },
    faqs: [
      {
        question: "What types of materials can EnviroServe transport via reverse logistics?",
        answer: "We transport electronic scrap, spent lithium EV battery packs, lead-acid batteries, plastic scrap, waste tyres, used oil drums, and obsolete IT server racks.",
      },
      {
        question: "How are damaged or thermally compromised battery packs transported?",
        answer: "We use fire-retardant vermiculite packaging, thermal insulation containment boxes, and real-time temperature-monitored vehicles compliant with UN standards.",
      },
      {
        question: "What is a Form-9 Hazardous Manifest?",
        answer: "Form-9 is a statutory consignment document required under Hazardous Waste Rules for tracking hazardous waste movement from sender to recycling facility.",
      },
      {
        question: "Can EnviroServe handle multi-location pickups across different states?",
        answer: "Yes, our central logistics desk coordinates simultaneous multi-site pickups across metro and tier-2 locations nationwide.",
      },
      {
        question: "Do you provide labor and rigging for heavy equipment loading?",
        answer: "Yes, our crews arrive with hydraulic tail-lifts, forklifts, pallets, and rigging tools for safe loading.",
      },
    ],
    meta: {
      title: "Pan-India Reverse Logistics for Recyclables | EnviroServe",
      description: "GPS-tracked, UN-certified hazardous reverse logistics for e-waste, lithium batteries, and industrial scrap in India.",
      keywords: ["reverse logistics e waste", "hazardous waste transport", "battery transit packaging", "form 9 manifest", "e-waste logistics India"],
    },
  },

  "asset-liquidation": {
    slug: "asset-liquidation",
    title: "Corporate IT Asset Liquidation & Certified Data Destruction",
    shortTitle: "Asset Liquidation",
    eyebrowCategory: "ENTERPRISE SOLUTIONS",
    category: "Enterprise Solutions",
    heroImage: "/images/services/corporate-it.png",
    heroDescription:
      "Enterprise IT asset recovery, residual valuation, certified DoD 5220.22-M data sanitization, and eco-friendly de-manufacturing for surplus office laptops, servers, and telecom hardware.",
    summary: {
      text: "Modernizing corporate IT infrastructure generates obsolete laptops, servers, and storage arrays. EnviroServe helps enterprises maximize financial value recovery while guaranteeing 100% data sanitization and zero-landfill disposal.",
      highlights: [
        "DoD 5220.22-M Data Sanitization",
        "Hardware Valuation & Buyback",
        "On-Site Hard Drive Degaussing",
        "Serial-Matched Destruction Audit",
      ],
    },
    alternatingSections: [
      {
        title: "The Risks of Improper IT Asset Disposal",
        subtitle: "Data Leaks & Value Depreciation",
        content: [
          "Discarding corporate storage media without certified data wiping risks catastrophic confidential data leaks, GDPR/IT Act penalties, and brand damage.",
          "Meanwhile, sitting IT assets rapidly depreciate in warehouse storage, losing potential residual market value.",
        ],
        points: [
          "Risk of proprietary code or customer data leaks from sold drives",
          "Rapid financial depreciation of stored IT equipment",
          "Need for formal asset retirement documentation",
        ],
        image: "/images/services/risk-improper.png",
        imageAlt: "IT Asset Liquidation Storage and Server Rack Inspection",
      },
      {
        title: "Comprehensive Asset Valuation & Audit",
        subtitle: "Transparent Financial Return",
        content: [
          "Our asset liquidation team evaluates your decommissioned hardware—testing working condition, specifications, and market re-sale or scrap value.",
          "We provide a transparent valuation proposal, allowing enterprises to offset technology refresh costs through asset recovery.",
        ],
        points: [
          "Detailed component-level grading and market evaluation",
          "Transparent buyback proposal for working IT assets",
          "Eco-friendly recycling channelization for non-working scrap",
        ],
        image: "/images/services/comprehensive-aduit.png",
        imageAlt: "IT Hardware Evaluation and Specifications Testing",
      },
      {
        title: "Certified On-Site Data Wiping & Hard Drive Shredding",
        subtitle: "100% Data Sanitization Guarantee",
        content: [
          "EnviroServe performs DoD 5220.22-M 3-pass or 7-pass software sanitization, industrial degaussing, or physical hard drive punch/shredding.",
          "Data destruction can be executed on-site at your facility under your security team's supervision before hardware removal.",
        ],
        points: [
          "DoD 5220.22-M and NIST 800-88 compliant data wiping",
          "On-site mobile hard drive shredding and degaussing",
          "Zero data recovery possibility from sanitized storage media",
        ],
        image: "/images/services/certified-on-site-data.png",
        imageAlt: "Hard Drive Shredding and Data Security Processing",
      },
      {
        title: "Destruction Certification & Environmental Reporting",
        subtitle: "Complete Audit Immunity",
        content: [
          "Upon completion, clients receive serial-matched Data Destruction Certificates detailing drive serial numbers, wiping method, and date of destruction.",
          "Non-working hardware is channelized to our CPCB-authorized recycling facility, providing Form-6 recycling certificates for corporate sustainability reporting.",
        ],
        points: [
          "Serial-numbered Data Destruction Certificates",
          "Form-6 recycling documentation for zero-landfill verification",
          "Tamper-proof compliance digital binder for IT audits",
        ],
        image: "/images/hero/hero-about-dslr.jpg",
        imageAlt: "Serial-Matched Destruction Certificate and Compliance Portfolio",
      },
    ],
    processSteps: [
      { number: "01", title: "Asset Inventory", description: "Audit equipment specs, serial numbers, and physical condition." },
      { number: "02", title: "Valuation Proposal", description: "Deliver transparent asset buyback or recycling valuation proposal." },
      { number: "03", title: "Data Sanitization", description: "Execute DoD 5220.22-M software wiping or physical hard drive shredding." },
      { number: "04", title: "Secure Transport", description: "GPS-tracked removal and transit to processing facilities." },
      { number: "05", title: "Certificate Issuance", description: "Provide serial-matched Data Destruction and Form-6 Certificates." },
    ],
    benefits: [
      { title: "Financial Value Recovery", description: "Maximize residual financial returns from surplus laptops, servers, and network gear." },
      { title: "100% Data Security", description: "Eliminate data leak risks with DoD 5220.22-M compliant software wiping and hard drive shredding." },
      { title: "On-Site Service", description: "Perform data destruction directly at your corporate premises under internal security supervision." },
      { title: "Zero Landfill Compliance", description: "Ensure non-working scrap is channelized exclusively to CPCB-authorized recycling operations." },
    ],
    targetAudience: {
      title: "WHO IS THIS FOR?",
      categories: [
        "Corporate IT Departments upgrading office hardware",
        "Data Centers decommissioning storage arrays & server racks",
        "Financial Institutions & Banks with strict data security rules",
        "BPOs & Software Companies liquidating surplus laptops",
      ],
    },
    whyEnviroServe: {
      title: "WHY ENVIROSERVE",
      items: [
        { title: "DoD Wiping Standard", desc: "Certified DoD 5220.22-M 3-pass/7-pass sanitization protocols." },
        { title: "On-Site Shredding Fleet", desc: "Mobile hard drive shredders for on-premises security destruction." },
        { title: "Full Legal Certification", desc: "Serial-numbered certificates protecting IT directors from data breach liability." },
      ],
    },
    faqs: [
      {
        question: "What types of IT assets can EnviroServe liquidate?",
        answer: "We liquidate desktop PCs, laptops, enterprise servers, storage arrays (SAN/NAS), networking switches, routers, monitors, printers, and telecom hardware.",
      },
      {
        question: "Can data destruction be performed on-site at our corporate office?",
        answer: "Yes, our mobile data destruction teams bring industrial degaussers and physical drive punchers/shredders to execute data sanitization at your premises.",
      },
      {
        question: "What standards are used for data sanitization?",
        answer: "We follow DoD 5220.22-M (3-pass and 7-pass) and NIST 800-88 standards for logical data wiping, combined with physical crushing or shredding for storage media.",
      },
      {
        question: "How is residual financial value determined for old IT hardware?",
        answer: "Valuation is calculated based on working condition, specs (processor, RAM, generation), cosmetic grade, and current secondary market demand.",
      },
      {
        question: "What documentation does EnviroServe provide after IT asset liquidation?",
        answer: "Clients receive a serial-matched Data Destruction Certificate, lot asset inventory report, payment invoice, and CPCB Form-6 Recycling Certificate.",
      },
    ],
    meta: {
      title: "Corporate IT Asset Liquidation & Data Destruction | EnviroServe",
      description: "Enterprise IT asset liquidation, DoD 5220.22-M data destruction, and server recovery solutions in India.",
      keywords: ["it asset liquidation", "data destruction certificate", "dod hard drive wiping", "corporate asset disposal", "server recycling India"],
    },
  },

  "solar-panel-recycling": {
    slug: "solar-panel-recycling",
    title: "Responsible Solar Panel & Photovoltaic Recycling",
    shortTitle: "Solar Panel Recycling",
    eyebrowCategory: "RECYCLING SOLUTIONS",
    category: "Recycling Solutions",
    heroImage: "/images/hero/hero-home-dslr.jpg",
    heroDescription:
      "Scientific de-manufacturing, thermal delamination, and material recovery for end-of-life solar PV panels. We extract high-purity solar glass, aluminum frames, silver, and silicon for circular re-use.",
    summary: {
      text: "As solar energy installations expand rapidly across India, managing decommissioned solar photovoltaic (PV) modules and solar farm scrap is essential. EnviroServe delivers closed-loop solar recycling—extracting high-value glass, aluminum frames, junction boxes, and silicon wafers under zero-landfill protocols.",
      highlights: [
        "Solar PV Glass Recovery",
        "Aluminum Frame Extraction",
        "Silver & Silicon Reclamation",
        "CPCB E-Waste Rules Compliance",
      ],
    },
    alternatingSections: [
      {
        title: "The End-of-Life Challenge of Photovoltaic Modules",
        subtitle: "Preventing Solar Waste Landfilling",
        content: [
          "Decommissioned solar PV panels contain heavy glass, anodized aluminum frames, junction boxes, and trace toxic materials such as cadmium or lead in solder. Improper disposal wastes valuable silver, silicon, and tempered glass.",
          "EnviroServe provides specialized, CPCB-compliant solar recycling facilities engineered to recover up to 95% of module materials by weight.",
        ],
        points: [
          "Prevention of PV module dumping in municipal landfills",
          "Recovery of high-transparency solar tempered glass",
          "Channelization of heavy metal solder away from soil",
        ],
        image: "/images/hero/hero-home-dslr.jpg",
        imageAlt: "Solar Panel Recycling Infrastructure and Decommissioned Modules",
      },
      {
        title: "Frame Removal & Thermal Glass Delamination",
        subtitle: "Mechanical & Thermal Disassembly",
        content: [
          "Our recycling process begins with automated removal of aluminum mounting frames and junction boxes for direct metal smelting re-entry.",
          "The laminated glass-EVA-cell sandwich undergoes thermal or mechanical delamination, cleanly separating high-transparency solar glass cullet.",
        ],
        points: [
          "Automated hydraulic frame removal and aluminum sorting",
          "Thermal separation of EVA encapsulant film",
          "High-purity glass cullet isolation for glass manufacturing",
        ],
        image: "/images/services/frame-removal-solar-panel.png",
        imageAlt: "Automated Solar Module Frame Removal and Glass Cullet Recovery",
      },
      {
        title: "Silicon Wafer & Precious Metal Reclamation",
        subtitle: "Chemical & Physical Separation",
        content: [
          "Exposed silicon solar cells undergo micro-shredding and chemical leaching to separate silver grid contacts, copper interconnect ribbons, and high-purity silicon granules.",
          "Reclaimed silver and refined silicon granules are channelized back into specialized industrial manufacturing supply chains.",
        ],
        points: [
          "Recovery of fine silver grid contacts",
          "High-purity silicon wafer granule isolation",
          "Copper ribbon channelization to primary smelters",
        ],
        image: "/images/services/silicon-wafer-solar-panel.png",
        imageAlt: "Silicon Cell Granulation and Silver Reclamation",
      },
      {
        title: "Solar Farm Decommissioning & Audit Verification",
        subtitle: "Turnkey Solar Asset Recycling",
        content: [
          "EnviroServe provides on-site solar farm module unmounting, packing, and GPS-tracked logistics fleet for utility-scale solar projects nationwide.",
          "Clients receive serial-matched Form-6 Recycling Certificates and ESG sustainability reporting verification upon process completion.",
        ],
        points: [
          "On-site solar farm dismantling and bulk transport logistics",
          "Serial-matched Form-6 recycling certificates",
          "Full compliance documentation for ESG and sustainability audits",
        ],
        image: "/images/services/solar-farm-decommissioning.png",
        imageAlt: "Solar Asset Audit Verification and Form-6 Certification",
      },
    ],
    processSteps: [
      { number: "01", title: "Collection & Transit", description: "GPS-monitored bulk pickup from solar farms and rooftop sites nationwide." },
      { number: "02", title: "Frame Disassembly", description: "Mechanical removal of aluminum frames and copper junction boxes." },
      { number: "03", title: "Thermal Delamination", description: "Separation of tempered glass cullet from EVA polymer film." },
      { number: "04", title: "Cell Granulation", description: "Chemical and physical extraction of silver, copper, and silicon." },
      { number: "05", title: "Certificates & Re-Entry", description: "Issuing Form-6 recycling certificates and secondary material supply." },
    ],
    benefits: [
      { title: "Solar Glass Recovery", description: "Reclaim high-transparency tempered glass cullet for industrial glass manufacturing." },
      { title: "Precious Silver Extraction", description: "Recover valuable silver grid lines and copper interconnect ribbons from PV cells." },
      { title: "Solar Farm ESG Compliance", description: "Provide audit-ready Form-6 recycling documentation for utility-scale solar projects." },
      { title: "Zero Landfill Commitment", description: "Divert up to 95% of solar module mass away from municipal dumps and landfills." },
    ],
    targetAudience: {
      title: "WHO IS THIS FOR?",
      categories: [
        "Utility-Scale Solar Farm Developers & IPPs",
        "Solar Panel Manufacturers & Photovoltaic Cell Importers",
        "EPC Contractors & Solar System Installers",
        "Commercial & Industrial Rooftop Solar Operators",
        "Government Renewable Energy Agencies",
      ],
    },
    whyEnviroServe: {
      title: "WHY ENVIROSERVE",
      items: [
        { title: "Specialized PV Infrastructure", desc: "Dedicated thermal delamination and glass separation systems for solar modules." },
        { title: "Bulk Solar Logistics", desc: "Heavy transport fleet capable of clearing multi-megawatt solar farm scrap." },
        { title: "Full Legal Certification", desc: "Serial-matched CPCB Form-6 recycling certificates for audit compliance." },
      ],
    },
    faqs: [
      {
        question: "What components of a solar panel can be recycled?",
        answer: "Up to 95% of a solar PV module can be recycled including the anodized aluminum frame, glass sheet, copper junction box, silver grid lines, and silicon wafers.",
      },
      {
        question: "Why can't solar panels be disposed of in regular landfills?",
        answer: "Solar panels contain trace amounts of heavy metals (such as lead in solder and cadmium in thin-film cells) that risk environmental leaching if dumped in unlined municipal landfills.",
      },
      {
        question: "Does EnviroServe handle utility-scale solar farm decommissioning pickups?",
        answer: "Yes, our field operations team provides on-site packing, heavy transport loading, and pan-India reverse logistics for multi-megawatt solar power plants.",
      },
      {
        question: "How is silver and silicon recovered from solar cells?",
        answer: "After removing the glass and EVA layer, solar cells undergo chemical leaching and micro-granulation to separate silver grid contacts, copper ribbons, and high-purity silicon granules.",
      },
      {
        question: "What documentation does a solar farm developer receive after recycling?",
        answer: "Clients receive serial-matched CPCB Form-6 Recycling Certificates detailing lot weight, component breakdown, and audit-ready ESG sustainability reports.",
      },
    ],
    meta: {
      title: "Solar Panel & Photovoltaic Recycling Services | EnviroServe",
      description: "Scientific solar PV panel recycling, glass separation, aluminum frame recovery, and silver/silicon extraction in India.",
      keywords: ["solar panel recycling", "solar pv recycling", "photovoltaic module recycling", "solar farm decommissioning", "solar recycling India"],
    },
  },
};

// Aliases for slug compatibility
servicesData["general-battery-epr"] = servicesData["battery-waste-epr"];
servicesData["annual-epr-filing"] = servicesData["annual-filing"];
servicesData["solar-recycling"] = servicesData["solar-panel-recycling"];
servicesData["solar-pv-recycling"] = servicesData["solar-panel-recycling"];

