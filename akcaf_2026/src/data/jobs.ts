export type JobOpening = {
  slug: string;
  title: string;
  division: string;
  summary: string;
  applyNote?: string;
  sections: Array<{ title: string; items: string[] }>;
};

export const jobOpenings: JobOpening[] = [
  {
    slug: 'customer-support-engineer',
    title: 'Customer Support Engineer / Specialist',
    division: 'Customer Support',
    summary:
      'We are seeking a professional and proactive Customer Support Specialist to join our team. You will be the primary point of contact for customers, providing timely, accurate and high-quality support across technical and commercial queries. The role focuses on resolving issues efficiently, ensuring excellent customer experience and building long-term customer relationships. Strong communication skills and a solution-oriented mindset are essential.',
    applyNote:
      'To apply, please submit your CV and a short covering note outlining your relevant customer support experience.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          'Respond promptly to customer enquiries via phone, email and other channels.',
          'Diagnose and resolve technical and non-technical customer issues in a professional manner.',
          'Log, track and manage support tickets through to successful resolution.',
          'Escalate complex issues to the appropriate internal teams (technical, service, sales or management) while keeping the customer informed.',
          'Provide clear guidance, product information and process support to customers.',
          'Maintain accurate records of all customer interactions in the CRM / ticketing system.',
          'Identify recurring issues and feedback trends, and share insights with internal teams to drive continuous improvement.',
          'Follow up with customers after issue resolution to confirm satisfaction.',
          'Contribute to the creation and updating of knowledge base articles, FAQs and support documentation.',
          'Uphold high standards of customer service and represent the company professionally at all times.',
        ],
      },
      {
        title: 'Essential Requirements',
        items: [
          'Previous experience in a customer support, technical support or helpdesk role.',
          'Excellent verbal and written communication skills.',
          'Strong problem-solving ability and a calm, professional approach under pressure.',
          'Ability to prioritise workload and manage multiple enquiries effectively.',
          'Competent IT skills and experience using CRM or ticketing systems.',
          'Customer-focused attitude with a genuine desire to help and deliver positive outcomes.',
          'Reliable, organised and able to work both independently and as part of a team.',
        ],
      },
      {
        title: 'Desirable',
        items: [
          'Experience in a technical product or B2B support environment.',
          'Familiarity with support tools such as Zendesk, Freshdesk, Salesforce or similar.',
          'Ability to understand and explain technical concepts clearly to non-technical customers.',
          'Experience handling both pre- and post-sales customer queries.',
        ],
      },
      {
        title: 'What We Offer',
        items: [
          'Competitive salary.',
          'Supportive team environment with clear career development opportunities.',
          'Ongoing training and product knowledge development.',
          'Modern tools and systems to help you deliver excellent support.',
          'Opportunity to make a real impact on customer satisfaction and company reputation.',
        ],
      },
    ],
  },
  {
    slug: 'service-engineer-air-division',
    title: 'Service Engineer - Air Division',
    division: 'Compressed Air Division',
    summary:
      'Join our compressed air division as a Service Engineer handling compressor, dryer, vacuum pump, diaphragm pump, piping and package installation work across customer sites in the UAE.',
    sections: [
      {
        title: 'Service Jobs',
        items: [
          'Attend compressor services including minor, major, corrective and troubleshooting work.',
          'Attend service leads given by the sales team.',
          'Visit the customer and check requirements for compressor, dryer, vacuum pump and diaphragm pump service enquiries.',
        ],
      },
      {
        title: 'Contract',
        items: [
          'Inspect compressors and dryers on site to estimate AMC proposals with a consumable spares list.',
        ],
      },
      {
        title: 'Aftersales Visits',
        items: [
          'Visit existing and new clients and inspect equipment such as compressors, refrigerated dryers, N2 generators, diaphragm pumps and vacuum pumps.',
          'Provide preventive or corrective services where required.',
        ],
      },
      {
        title: 'Enquiries Handling',
        items: [
          'Select the correct products based on customer requirements, submit technical offers and follow up.',
          'Check floor drawings and visit site to estimate piping installation (GI pipes / aluminium pipes).',
        ],
      },
      {
        title: 'Project Handling',
        items: [
          'Coordinate with the service team for complete package installations, including compressor systems and N2 generator packages.',
        ],
      },
      {
        title: 'Requirements',
        items: [
          'B.Tech or Diploma in a relevant field.',
          'At least 4 years of relevant experience in the UAE.',
          'Excellent command of the English language; additional languages are a plus.',
          'Strong communication and coordination skills.',
          'Ability to work independently and as part of a team.',
        ],
      },
    ],
  },
  {
    slug: 'service-engineer-cnc-division',
    title: 'Service Engineer - CNC Division',
    division: 'CNC / EDM',
    summary:
      'We are a specialist supplier of CNC machine tools and EDM equipment seeking experienced Service Engineers to join our technical team. You will be responsible for the installation, commissioning, maintenance, troubleshooting and repair of CNC machining centres, lathes and EDM machines at customer sites. This is a hands-on field role requiring strong mechanical, electrical and CNC systems knowledge, excellent problem-solving skills and a customer-focused approach.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          'Install, commission and set up new CNC and EDM machines at customer facilities.',
          'Diagnose, troubleshoot and repair mechanical, electrical, electronic, hydraulic and pneumatic faults on CNC and EDM equipment.',
          'Perform scheduled preventive maintenance and service visits to maximise machine uptime.',
          'Carry out software/firmware updates, parameter adjustments and control system diagnostics (Fanuc, Siemens, Heidenhain, Mitsubishi or equivalent).',
          'Provide technical support and training to customers on correct machine operation and basic maintenance.',
          'Accurately document service reports, parts usage and recommendations.',
          'Liaise with internal sales, applications and spare-parts teams to ensure efficient service delivery.',
          'Maintain tools, diagnostic equipment and company vehicle in good condition.',
          'Adhere to health & safety standards and company procedures at all times.',
        ],
      },
      {
        title: 'Essential Requirements',
        items: [
          'Proven experience as a Service Engineer, Field Service Technician or Maintenance Engineer working on CNC machine tools and/or EDM machines.',
          'Strong mechanical and electrical fault-finding skills.',
          'Working knowledge of CNC control systems and machine tool technology.',
          'Ability to read and interpret electrical/mechanical schematics and technical manuals.',
          'Full, clean driving licence and willingness to travel to customer sites (regional or national travel as required).',
          'Good communication skills and a professional, customer-oriented attitude.',
          'Ability to work independently and manage your own schedule.',
        ],
      },
      {
        title: 'Desirable',
        items: [
          'Experience with Fanuc, Siemens, Heidenhain or similar CNC controls.',
          'EDM (wire or die-sinking) machine experience.',
          'Relevant technical qualifications (e.g. HNC/HND in Mechanical/Electrical Engineering or equivalent apprenticeship).',
          'Previous experience in a machine-tool dealer or OEM service environment.',
        ],
      },
      {
        title: 'What We Offer',
        items: [
          'Competitive salary + overtime / call-out allowance.',
          'Company vehicle, tools and mobile phone.',
          'Ongoing product training and technical development.',
          'Supportive technical team environment.',
          'Opportunity to work with the latest CNC and EDM technology.',
        ],
      },
    ],
  },
  {
    slug: 'sales-engineer',
    title: 'Sales Engineer',
    division: 'Industrial Solutions',
    summary:
      'We are seeking a Sales Engineer to develop customer enquiries, prepare technical offers and convert opportunities across industrial lubrication, compressed air, CNC support and related engineering solutions in the UAE.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          'Visit customers to understand requirements and recommend the correct Petrotek products and solutions.',
          'Prepare and submit technical/commercial offers and follow up enquiries through to close.',
          'Support sales leads related to compressors, dryers, vacuum pumps, diaphragm pumps, piping and industrial reliability solutions.',
          'Inspect sites, review drawings and estimate installation or package requirements where needed.',
          'Coordinate with service and project teams for compressor system and N2 generator package installations.',
          'Build long-term customer relationships and identify aftersales, AMC and preventive service opportunities.',
        ],
      },
      {
        title: 'Requirements',
        items: [
          'B.Tech or Diploma in a relevant field.',
          'At least 4 years of sales experience in the UAE.',
          'Excellent command of the English language; additional languages are a plus.',
          'Strong communication and negotiation skills.',
          'Ability to work independently and as part of a team.',
        ],
      },
    ],
  },
];

export function getJobBySlug(slug: string) {
  return jobOpenings.find((job) => job.slug === slug);
}
