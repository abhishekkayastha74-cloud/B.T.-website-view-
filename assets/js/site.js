const lang = document.documentElement.lang.startsWith("gu") ? "gu" : "en";
const isGu = lang === "gu";

function imagePath(fileName) {
  return isGu ? `../assets/images/${fileName}` : `assets/images/${fileName}`;
}

const page = document.body.dataset.page || "home";
const slug = document.body.dataset.slug || "";

const files = {
  home: "index.html",
  about: "about.html",
  practice: "practice-areas.html",
  courts: "courts-forums.html",
  insights: "insights.html",
  contact: "contact.html",
  disclaimer: "disclaimer.html",
  privacy: "privacy-policy.html",
  terms: "terms.html",
  cookies: "cookie-policy.html"
};

const labels = {
  en: {
    home: "Home",
    about: "About",
    practice: "Practice Areas",
    courts: "Courts & Forums",
    insights: "Legal Insights",
    contact: "Contact"
  },

  gu: {
    home: "મુખ્ય પાનું",
    about: "પરિચય",
    practice: "કાર્યક્ષેત્રો",
    courts: "કોર્ટ અને સત્તાધિકારીઓ",
    insights: "કાનૂની માહિતી",
    contact: "સંપર્ક"
  }
};


/* =========================================================
   PRACTICE AREAS
========================================================= */

const practiceAreas = [

  {
    slug: "civil-commercial",

    en: {
      title: "Civil & Commercial Litigation",

      short:
        "Civil suits, injunctions, recovery, contracts, property disputes, execution, appeals and settlement.",

      intro:
        "Advice and representation may be undertaken in civil suits and commercial disputes involving declaration, injunction, possession, recovery, summary suits, specific performance, partition, succession, contractual disputes, partnership disputes, execution proceedings, appeals, revisions, mediation and settlement.",

      points: [
        [
          "Civil Suits",
          "Declaration, possession, injunction and other civil proceedings subject to facts and jurisdiction."
        ],
        [
          "Recovery",
          "Recovery and execution proceedings based on the relevant record and applicable procedure."
        ],
        [
          "Commercial Disputes",
          "Contractual, partnership and other business-related disputes."
        ],
        [
          "Appeals & Revisions",
          "Appellate or revisional proceedings where legally maintainable."
        ]
      ]
    },

    gu: {
      title: "સિવિલ અને વાણિજ્યિક કેસો",

      short:
        "દાવા, મનાઈહુકમ, વસૂલાત, કરાર, મિલકત વિવાદ, અમલવારી, અપીલ અને સમાધાન.",

      intro:
        "જાહેરાતના દાવા, મનાઈહુકમ, કબજો, નાણાં વસૂલાત, સમરી સૂટ, ચોક્કસ પાલન, ભાગલા, વારસાઈ, કરારભંગ, ભાગીદારી અથવા વ્યાપારી વિવાદ, ડિક્રીની અમલવારી, અપીલ, રિવિઝન, મીડિયેશન અને સમાધાન સંબંધિત સલાહ તથા રજૂઆત હાથ ધરવામાં આવી શકે છે.",

      points: [
        [
          "સિવિલ દાવા",
          "જાહેરાત, કબજો, મનાઈહુકમ અને અન્ય લાગુ સિવિલ કાર્યવાહી."
        ],
        [
          "વસૂલાત",
          "રેકોર્ડ અને લાગુ પ્રક્રિયા મુજબ વસૂલાત અને અમલવારી બાબતો."
        ],
        [
          "વ્યાપારી વિવાદ",
          "કરાર, ભાગીદારી અને અન્ય વ્યવસાયિક વિવાદો."
        ],
        [
          "અપીલ અને રિવિઝન",
          "કાયદેસર રીતે જાળવાય ત્યાં અપીલ અથવા રિવિઝન કાર્યવાહી."
        ]
      ]
    }
  },


  {
    slug: "criminal-law",

    en: {
      title: "Criminal Law & Proceedings",

      short:
        "Complaints, FIR-related proceedings, bail, remand, discharge, trial, revision and appeal.",

      intro:
        "Advice and representation may be undertaken in criminal complaints, FIR-related proceedings, anticipatory and regular bail, remand, discharge, trial, revision and appeal, as applicable. Strategy depends on the record, stage of investigation or trial and governing criminal law.",

      points: [
        [
          "FIR Proceedings",
          "Procedural advice and representation in FIR-related matters as applicable."
        ],
        [
          "Bail",
          "Anticipatory and regular bail proceedings depending on the record and stage."
        ],
        [
          "Trial Proceedings",
          "Defence, complainant or victim-related assistance where professionally permissible."
        ],
        [
          "Revision & Appeal",
          "Revision or appellate proceedings based on applicable law and maintainability."
        ]
      ]
    },

    gu: {
      title: "ફોજદારી કાયદો અને કાર્યવાહી",

      short:
        "ફરિયાદ, FIR, જામીન, રિમાન્ડ, ડિસ્ચાર્જ, ટ્રાયલ, રિવિઝન અને અપીલ.",

      intro:
        "ફોજદારી ફરિયાદ, FIR સંબંધિત કાર્યવાહી, આગોતરા અને નિયમિત જામીન, રિમાન્ડ, ડિસ્ચાર્જ, ટ્રાયલ, રિવિઝન અને અપીલમાં લાગુ પડતી સલાહ અને રજૂઆત હાથ ધરવામાં આવી શકે છે.",

      points: [
        [
          "FIR કાર્યવાહી",
          "લાગુ પડે ત્યાં FIR સંબંધિત પ્રક્રિયાત્મક સલાહ અને રજૂઆત."
        ],
        [
          "જામીન",
          "રેકોર્ડ અને તબક્કા મુજબ આગોતરા અથવા નિયમિત જામીન કાર્યવાહી."
        ],
        [
          "ટ્રાયલ",
          "લાગુ વ્યાવસાયિક નિયમો મુજબ ટ્રાયલ સંબંધિત સહાય."
        ],
        [
          "રિવિઝન અને અપીલ",
          "લાગુ કાયદા મુજબ રિવિઝન અથવા અપીલ કાર્યવાહી."
        ]
      ]
    }
  },


  {
    slug: "family-law",

    en: {
      title: "Family & Matrimonial Law",

      short:
        "Divorce, maintenance, domestic violence, child custody, visitation and family settlement.",

      intro:
        "Advice and representation may be undertaken in mutual-consent and contested divorce, maintenance, domestic violence proceedings, child custody and visitation, matrimonial complaints, family settlement and mediation.",

      points: [
        [
          "Divorce",
          "Mutual-consent and contested divorce proceedings depending on facts and law."
        ],
        [
          "Maintenance",
          "Maintenance proceedings and execution where applicable."
        ],
        [
          "Child Custody",
          "Custody and visitation matters with appropriate consideration of the child's welfare."
        ],
        [
          "Settlement & Mediation",
          "Settlement or mediation may be considered where suitable."
        ]
      ]
    },

    gu: {
      title: "ફેમિલી અને લગ્નવિષયક કાયદો",

      short:
        "છૂટાછેડા, ભરણપોષણ, ઘરેલુ હિંસા, બાળકની કસ્ટડી અને પારિવારિક સમાધાન.",

      intro:
        "પરસ્પર સંમતિ અથવા વિવાદિત છૂટાછેડા, ભરણપોષણ, ઘરેલુ હિંસા, બાળકની કસ્ટડી અને મુલાકાતનો હક, લગ્નજીવન સંબંધિત ફરિયાદ, પારિવારિક સમાધાન અને મીડિયેશન બાબતો હાથ ધરવામાં આવી શકે છે.",

      points: [
        [
          "છૂટાછેડા",
          "હકીકત અને કાયદા મુજબ પરસ્પર સંમતિ અથવા વિવાદિત કાર્યવાહી."
        ],
        [
          "ભરણપોષણ",
          "લાગુ પડે ત્યાં ભરણપોષણ અને અમલવારી."
        ],
        [
          "બાળકની કસ્ટડી",
          "બાળકના કલ્યાણને ધ્યાનમાં રાખી કસ્ટડી અને મુલાકાત બાબતો."
        ],
        [
          "સમાધાન",
          "યોગ્ય પરિસ્થિતિમાં સમાધાન અથવા મીડિયેશન."
        ]
      ]
    }
  },


  {
    slug: "consumer-law",

    en: {
      title: "Consumer Protection",

      short:
        "Consumer disputes concerning insurance, banking, housing, goods and services.",

      intro:
        "Consumer complaint, reply, evidence, written arguments, execution and appeal work may be undertaken in disputes relating to insurance, banking, housing, defective goods and deficiency in services.",

      points: [
        [
          "Consumer Complaints",
          "Complaint and reply proceedings before the appropriate consumer forum."
        ],
        [
          "Insurance Disputes",
          "Consumer matters involving insurance claims and policy disputes."
        ],
        [
          "Banking Disputes",
          "Consumer issues relating to banking services where maintainable."
        ],
        [
          "Execution & Appeal",
          "Execution and appellate proceedings under the applicable framework."
        ]
      ]
    },

    gu: {
      title: "ગ્રાહક સુરક્ષા",

      short:
        "વીમા, બેંકિંગ, હાઉસિંગ, વસ્તુ અને સેવામાં ખામી સંબંધિત ગ્રાહક કાર્યવાહી.",

      intro:
        "વીમા, બેંકિંગ, હાઉસિંગ અથવા ડેવલપમેન્ટ, ખામીવાળી વસ્તુ અને સેવામાં ખામી સંબંધિત ગ્રાહક ફરિયાદ, જવાબ, પુરાવા, લેખિત દલીલ, અમલવારી અને અપીલ હાથ ધરવામાં આવી શકે છે.",

      points: [
        [
          "ગ્રાહક ફરિયાદ",
          "યોગ્ય ગ્રાહક ફોરમ સમક્ષ ફરિયાદ અને જવાબ."
        ],
        [
          "વીમા વિવાદ",
          "વીમા ક્લેમ અથવા પોલિસી સંબંધિત ગ્રાહક વિવાદ."
        ],
        [
          "બેંકિંગ વિવાદ",
          "કાયદેસર રીતે જાળવાય ત્યાં બેંકિંગ સેવા સંબંધિત બાબતો."
        ],
        [
          "અમલવારી અને અપીલ",
          "લાગુ કાયદા હેઠળ અમલવારી અથવા અપીલ."
        ]
      ]
    }
  },


  /* =======================================================
     REVENUE / LAND FINAL CLIENT VERSION
  ======================================================= */

  {
    slug: "revenue-land",

    en: {
      title: "Revenue, Land & Tenancy",

      short:
        "Revenue records, mutation, RTS, agricultural land, tenure, Ganot/Tenancy, NA permission and proceedings before revenue authorities.",

      intro:
        "Revenue, land and tenancy work may include revenue record and mutation proceedings, RTS appeals and revisions, agricultural land and tenure matters, Ganot/Tenancy proceedings, NA permission and land-use matters, proceedings before the Mamlatdar and Agricultural Lands Tribunal, Prant Officer or Deputy Collector, District Collector, Additional Secretary (Revenue), Government of Gujarat, and Gujarat Revenue Tribunal (GRT) in Ganot/Tenancy matters.",

      points: [
        [
          "Revenue Record & Mutation",
          "Revenue record and mutation proceedings, including certification or challenge of relevant entries."
        ],
        [
          "RTS Appeals & Revisions",
          "RTS appeals and revisions before the competent revenue authority."
        ],
        [
          "Agricultural Land & Tenure",
          "Agricultural land, tenure conditions and related revenue-law matters."
        ],
        [
          "Ganot / Tenancy",
          "Ganot and tenancy proceedings under the applicable Gujarat land and tenancy framework."
        ],
        [
          "NA Permission & Land Use",
          "Non-agricultural permission and land-use related proceedings."
        ],
        [
          "Mamlatdar & Agricultural Lands Tribunal",
          "Proceedings before the Mamlatdar and Agricultural Lands Tribunal."
        ],
        [
          "Prant Officer / Deputy Collector",
          "Proceedings before the Prant Officer or Deputy Collector."
        ],
        [
          "District Collector",
          "Proceedings before the District Collector, as applicable."
        ],
        [
          "Additional Secretary (Revenue)",
          "Proceedings before the Additional Secretary (Revenue), Government of Gujarat."
        ],
        [
          "Gujarat Revenue Tribunal (GRT)",
          "Proceedings before the Gujarat Revenue Tribunal in Ganot and Tenancy matters."
        ]
      ]
    },

    gu: {
      title: "મહેસૂલ, જમીન અને ગણોત બાબતો",

      short:
        "મહેસૂલી રેકોર્ડ, મ્યુટેશન, RTS, ખેતીની જમીન, tenure, ગણોત, NA permission અને મહેસૂલી સત્તાધિકારીઓ સમક્ષ કાર્યવાહી.",

      intro:
        "મહેસૂલ, જમીન અને ગણોત સંબંધિત કામગીરીમાં revenue record અને mutation proceedings, RTS appeal અને revision, ખેતીની જમીન અને tenure matters, Ganot/Tenancy proceedings, NA permission અને land-use matters, Mamlatdar and Agricultural Lands Tribunal, Prant Officer અથવા Deputy Collector, District Collector, Additional Secretary (Revenue), Government of Gujarat તથા Ganot/Tenancy બાબતોમાં Gujarat Revenue Tribunal (GRT) સમક્ષની કાર્યવાહીનો સમાવેશ થઈ શકે છે.",

      points: [
        [
          "મહેસૂલી રેકોર્ડ અને મ્યુટેશન",
          "મહેસૂલી રેકોર્ડ અને mutation entry સંબંધિત કાર્યવાહી."
        ],
        [
          "RTS અપીલ અને રિવિઝન",
          "સક્ષમ મહેસૂલી સત્તાધિકારી સમક્ષ RTS appeal અને revision."
        ],
        [
          "ખેતીની જમીન અને Tenure",
          "ખેતીની જમીન, જમીનની શરતો અને સંબંધિત મહેસૂલી બાબતો."
        ],
        [
          "ગણોત / Tenancy",
          "લાગુ ગુજરાત જમીન અને tenancy framework હેઠળ ગણોત અને tenancy proceedings."
        ],
        [
          "NA Permission અને Land Use",
          "બિનખેતી પરવાનગી અને જમીનના ઉપયોગ સંબંધિત કાર્યવાહી."
        ],
        [
          "Mamlatdar અને Agricultural Lands Tribunal",
          "Mamlatdar and Agricultural Lands Tribunal સમક્ષ કાર્યવાહી."
        ],
        [
          "Prant Officer / Deputy Collector",
          "Prant Officer અથવા Deputy Collector સમક્ષ કાર્યવાહી."
        ],
        [
          "District Collector",
          "લાગુ પડે ત્યાં District Collector સમક્ષ કાર્યવાહી."
        ],
        [
          "Additional Secretary (Revenue)",
          "Additional Secretary (Revenue), Government of Gujarat સમક્ષ કાર્યવાહી."
        ],
        [
          "Gujarat Revenue Tribunal (GRT)",
          "Ganot/Tenancy બાબતોમાં Gujarat Revenue Tribunal સમક્ષ કાર્યવાહી."
        ]
      ]
    }
  },


  {
    slug: "property-title-registration",

    en: {
      title: "Property Title & Registration",

      short:
        "Title search, legal opinion, due diligence, conveyancing, stamp duty and registration.",

      intro:
        "Title search and legal opinion may include review of title chain, revenue records, Village Forms, 7/12 and 8-A extracts, mutation entries, property card, encumbrance material, tenure, non-agricultural status, town-planning implications and litigation.",

      points: [
        [
          "Title Search",
          "Review of available title documents and relevant public records."
        ],
        [
          "Due Diligence",
          "Review of revenue, encumbrance and other relevant property material."
        ],
        [
          "Documentation",
          "Agreements, conveyancing and other property-related documents may be prepared or reviewed within the scope of engagement."
        ],
        [
          "Stamp & Registration",
          "Support concerning stamp duty and registration requirements."
        ]
      ]
    },

    gu: {
      title: "મિલકત ટાઇટલ અને રજિસ્ટ્રેશન",

      short:
        "ટાઇટલ સર્ચ, કાનૂની અભિપ્રાય, મિલકત તપાસ, દસ્તાવેજ, સ્ટેમ્પ અને નોંધણી.",

      intro:
        "સ્થાવર મિલકતની ટાઇટલ સર્ચ માટે માલિકીની કડી, મહેસૂલી રેકોર્ડ, ગામ નમૂના, 7/12 અને 8-A ઉતારા, મ્યુટેશન એન્ટ્રી, પ્રોપર્ટી કાર્ડ, બોજા, જમીનની શરતો, બિનખેતી સ્થિતિ અને ટાઉન પ્લાનિંગ બાબતોની સમીક્ષા હાથ ધરવામાં આવી શકે છે.",

      points: [
        [
          "ટાઇટલ સર્ચ",
          "ઉપલબ્ધ ટાઇટલ દસ્તાવેજો અને સંબંધિત જાહેર રેકોર્ડની સમીક્ષા."
        ],
        [
          "કાયદાકીય તપાસ",
          "મહેસૂલી, બોજા અને અન્ય મિલકત સંબંધિત માહિતીની સમીક્ષા."
        ],
        [
          "દસ્તાવેજીકરણ",
          "લાગુ પડે ત્યાં મિલકત સંબંધિત કરાર અને દસ્તાવેજીકરણ."
        ],
        [
          "સ્ટેમ્પ અને નોંધણી",
          "સ્ટેમ્પ ડ્યૂટી અને નોંધણી સંબંધિત સહાય."
        ]
      ]
    }
  },


  /* =======================================================
     BANKING FINAL CLIENT VERSION
  ======================================================= */

  {
    slug: "banking-finance",

    en: {
      title: "Banking, Finance & Recovery",

      short:
        "Loan and security documentation, mortgage, cheque dishonour, SARFAESI, recovery suits, arbitration, execution and settlement advisory.",

      intro:
        "Banking, finance and recovery work may include loan and security documentation, mortgage documentation and enforcement, cheque dishonour proceedings under Section 138 of the Negotiable Instruments Act, ECS/NACH mandate dishonour proceedings, loan recall and demand notices, SARFAESI proceedings under Sections 13(2), 13(4) and 14, applications before the District Magistrate under Section 14 of the SARFAESI Act, Summary Suits under Order XXXVII CPC, commercial recovery suits, civil money-recovery suits, arbitration and execution proceedings, and loan settlement and recovery advisory. Acceptance of any matter remains subject to professional obligations, conflict checks, jurisdiction, document review and formal engagement.",

      points: [
        [
          "Loan & Security Documentation",
          "Preparation and review of loan documents, security documents and related finance documentation."
        ],
        [
          "Mortgage Documentation & Enforcement",
          "Mortgage documentation, review and enforcement-related legal work as applicable."
        ],
        [
          "Cheque Dishonour — Section 138",
          "Cheque dishonour proceedings under Section 138 of the Negotiable Instruments Act."
        ],
        [
          "ECS / NACH Dishonour",
          "Proceedings relating to dishonour of ECS or NACH mandates, where legally applicable."
        ],
        [
          "Loan Recall & Demand Notices",
          "Loan recall notices, demand notices and related recovery documentation."
        ],
        [
          "SARFAESI — Sections 13(2), 13(4) & 14",
          "Proceedings under Sections 13(2), 13(4) and 14 of the SARFAESI Act."
        ],
        [
          "District Magistrate — Section 14",
          "Applications before the District Magistrate under Section 14 of the SARFAESI Act."
        ],
        [
          "Summary Suits — Order XXXVII CPC",
          "Summary Suits under Order XXXVII of the Code of Civil Procedure, where applicable."
        ],
        [
          "Commercial Recovery Suits",
          "Commercial recovery proceedings subject to jurisdiction and maintainability."
        ],
        [
          "Civil Money-Recovery Suits",
          "Civil proceedings for recovery of money based on the relevant documents and cause of action."
        ],
        [
          "Arbitration & Execution",
          "Arbitration proceedings and execution proceedings, subject to applicable law and jurisdiction."
        ],
        [
          "Settlement & Recovery Advisory",
          "Loan settlement documentation and recovery advisory based on the scope of engagement."
        ]
      ]
    },

    gu: {
      title: "બેંકિંગ, ફાઇનાન્સ અને વસૂલાત",

      short:
        "લોન અને સિક્યુરિટી દસ્તાવેજો, મોર્ગેજ, ચેક ડિસઓનર, SARFAESI, વસૂલાતના દાવા, આર્બિટ્રેશન, અમલવારી અને સેટલમેન્ટ સલાહ.",

      intro:
        "બેંકિંગ, ફાઇનાન્સ અને વસૂલાત સંબંધિત કામગીરીમાં loan and security documentation, mortgage documentation and enforcement, Negotiable Instruments Act ની કલમ 138 હેઠળ cheque dishonour proceedings, ECS/NACH mandate dishonour proceedings, loan recall અને demand notices, SARFAESI Act ની કલમ 13(2), 13(4) અને 14 હેઠળની કાર્યવાહી, Section 14 હેઠળ District Magistrate સમક્ષ અરજી, Order XXXVII CPC હેઠળ Summary Suits, commercial recovery suits, civil money-recovery suits, arbitration અને execution proceedings તથા loan settlement અને recovery advisory નો સમાવેશ થઈ શકે છે.",

      points: [
        [
          "લોન અને સિક્યુરિટી દસ્તાવેજો",
          "Loan documents, security documents અને સંબંધિત finance documentation ની તૈયારી અને સમીક્ષા."
        ],
        [
          "મોર્ગેજ દસ્તાવેજીકરણ અને અમલ",
          "Mortgage documentation, review અને લાગુ કાયદા મુજબ enforcement સંબંધિત કામગીરી."
        ],
        [
          "ચેક ડિસઓનર — કલમ 138",
          "Negotiable Instruments Act ની કલમ 138 હેઠળ cheque dishonour કાર્યવાહી."
        ],
        [
          "ECS / NACH Dishonour",
          "કાયદેસર રીતે લાગુ પડે ત્યાં ECS અથવા NACH mandate dishonour સંબંધિત કાર્યવાહી."
        ],
        [
          "Loan Recall અને Demand Notice",
          "Loan recall notice, demand notice અને સંબંધિત recovery documentation."
        ],
        [
          "SARFAESI — કલમ 13(2), 13(4) અને 14",
          "SARFAESI Act ની કલમ 13(2), 13(4) અને 14 હેઠળની કાર્યવાહી."
        ],
        [
          "District Magistrate — Section 14",
          "SARFAESI Act ની Section 14 હેઠળ District Magistrate સમક્ષ અરજી."
        ],
        [
          "Summary Suits — Order XXXVII CPC",
          "લાગુ પડે ત્યાં Order XXXVII CPC હેઠળ Summary Suits."
        ],
        [
          "Commercial Recovery Suits",
          "અધિકારક્ષેત્ર અને maintainability ને આધીન commercial recovery suits."
        ],
        [
          "Civil Money-Recovery Suits",
          "દસ્તાવેજો અને cause of action ના આધારે civil money-recovery proceedings."
        ],
        [
          "Arbitration અને Execution",
          "લાગુ કાયદા અને અધિકારક્ષેત્રને આધીન arbitration અને execution proceedings."
        ],
        [
          "Settlement અને Recovery Advisory",
          "કામના વ્યાપ મુજબ loan settlement documentation અને recovery advisory."
        ]
      ]
    }
  },


  {
    slug: "insurance-mact",

    en: {
      title: "Insurance & Motor Accident Claims",

      short:
        "Insurance disputes, claim repudiation, consumer proceedings and motor accident claims.",

      intro:
        "Advice and representation may be undertaken in insurance-policy disputes, claim repudiation, consumer complaints, insurance recovery and motor accident claim matters.",

      points: [
        [
          "Insurance Claims",
          "Review of policy terms and claim-related material."
        ],
        [
          "Claim Repudiation",
          "Disputes concerning rejection or repudiation of claims."
        ],
        [
          "MACT",
          "Motor accident claim proceedings based on applicable records."
        ],
        [
          "Consumer Proceedings",
          "Consumer remedies where the dispute falls within applicable jurisdiction."
        ]
      ]
    },

    gu: {
      title: "વીમા અને મોટર અકસ્માત વળતર",

      short:
        "વીમા વિવાદ, ક્લેમ નામંજૂર થવો, ગ્રાહક કાર્યવાહી અને મોટર અકસ્માત વળતર.",

      intro:
        "વીમા પોલિસી સંબંધિત વિવાદ, ક્લેમ નામંજૂર થવો, ગ્રાહક ફરિયાદ, વીમા વસૂલાત અને મોટર અકસ્માત વળતર કેસોમાં લાગુ સલાહ અને રજૂઆત હાથ ધરવામાં આવી શકે છે.",

      points: [
        [
          "વીમા ક્લેમ",
          "પોલિસીની શરતો અને ક્લેમ રેકોર્ડની સમીક્ષા."
        ],
        [
          "ક્લેમ નામંજૂર",
          "વીમા ક્લેમ નામંજૂર અથવા રદ થવા સંબંધિત વિવાદ."
        ],
        [
          "MACT",
          "મોટર અકસ્માત વળતર સંબંધિત કાર્યવાહી."
        ],
        [
          "ગ્રાહક કાર્યવાહી",
          "લાગુ અધિકારક્ષેત્ર મુજબ ગ્રાહક ઉપચાર."
        ]
      ]
    }
  },


  {
    slug: "business-contracts",

    en: {
      title: "Business Contracts & Advisory",

      short:
        "Commercial agreements, MOU, partnership, LLP, service agreements, notices and settlement terms.",

      intro:
        "Drafting and vetting may be undertaken for commercial contracts, memoranda of understanding, partnership or LLP arrangements, service and consultancy agreements, employment documentation, notices, settlement terms and project-related documents.",

      points: [
        [
          "Commercial Agreements",
          "Drafting and review of contractual obligations and commercial terms."
        ],
        [
          "Partnership & LLP",
          "Documentation relating to partnership or LLP arrangements."
        ],
        [
          "Service Agreements",
          "Service and consultancy agreements as engaged."
        ],
        [
          "Notices & Settlements",
          "Legal notices and documented settlement terms."
        ]
      ]
    },

    gu: {
      title: "બિઝનેસ કરારો અને કાનૂની સલાહ",

      short:
        "વ્યાપારી કરાર, MOU, ભાગીદારી, LLP, સેવા કરાર, નોટિસ અને સમાધાનની શરતો.",

      intro:
        "વ્યાપારી કરાર, MOU, ભાગીદારી અથવા LLP વ્યવસ્થા, સેવા અને કન્સલ્ટન્સી એગ્રીમેન્ટ, રોજગાર સંબંધિત દસ્તાવેજો, નોટિસ, સમાધાનની શરતો અને પ્રોજેક્ટ દસ્તાવેજોનું ડ્રાફ્ટિંગ તથા ચકાસણી હાથ ધરવામાં આવી શકે છે.",

      points: [
        [
          "વ્યાપારી કરાર",
          "કરારની જવાબદારી અને વ્યાપારી શરતોનું ડ્રાફ્ટિંગ અને ચકાસણી."
        ],
        [
          "ભાગીદારી અને LLP",
          "ભાગીદારી અથવા LLP સંબંધિત દસ્તાવેજીકરણ."
        ],
        [
          "સેવા કરાર",
          "સેવા અને કન્સલ્ટન્સી એગ્રીમેન્ટ."
        ],
        [
          "નોટિસ અને સમાધાન",
          "કાનૂની નોટિસ અને દસ્તાવેજબદ્ધ સમાધાનની શરતો."
        ]
      ]
    }
  },


  {
    slug: "notarial-services",

    en: {
      title: "Notarial Services",

      short:
        "Notarial acts for affidavits, declarations, copies, execution and other documents where legally permissible.",

      intro:
        "Notarial acts may be undertaken for affidavits, declarations, copies, execution and other documents where legally permissible. The original document, identity, authority and personal presence requirements may be checked according to the applicable framework.",

      points: [
        [
          "Affidavits",
          "Notarial work concerning affidavits where legally permissible."
        ],
        [
          "Declarations",
          "Declarations and related documents subject to applicable requirements."
        ],
        [
          "Document Copies",
          "Notarial authentication of copies where legally permissible."
        ],
        [
          "Registration",
          "Notarisation does not replace compulsory registration where registration is required."
        ]
      ]
    },

    gu: {
      title: "નોટરી સેવાઓ",

      short:
        "લાગુ કાયદા મુજબ સોગંદનામા, ઘોષણા, નકલ અને અન્ય દસ્તાવેજોની નોટરી કામગીરી.",

      intro:
        "લાગુ કાયદા મુજબ સોગંદનામા, ઘોષણા, નકલ, હસ્તાક્ષર અથવા અન્ય માન્ય દસ્તાવેજોની નોટરી કામગીરી હાથ ધરવામાં આવી શકે છે. મૂળ દસ્તાવેજ, ઓળખ, સત્તા અને વ્યક્તિગત હાજરીની જરૂરિયાત તપાસવામાં આવી શકે છે.",

      points: [
        [
          "સોગંદનામા",
          "લાગુ કાયદા મુજબ સોગંદનામા સંબંધિત નોટરી કામગીરી."
        ],
        [
          "ઘોષણા",
          "લાગુ જરૂરિયાતો મુજબ ઘોષણા અને સંબંધિત દસ્તાવેજો."
        ],
        [
          "દસ્તાવેજ નકલ",
          "કાયદેસર રીતે માન્ય હોય ત્યાં દસ્તાવેજની નકલનું નોટરીકરણ."
        ],
        [
          "રજિસ્ટ્રેશન",
          "જ્યાં રજિસ્ટ્રેશન ફરજિયાત હોય ત્યાં નોટરી તેનો વિકલ્પ નથી."
        ]
      ]
    }
  }

];


/* =========================================================
   COURTS FINAL CLIENT VERSION
========================================================= */

const courts = {

  en: [
    "District and Sessions Court, Gandhinagar",
    "Civil Courts, Gandhinagar",
    "Criminal Courts, Gandhinagar",
    "Family Court, Gandhinagar",
    "District Consumer Disputes Redressal Commission, Gandhinagar",
    "Mamlatdar and Agricultural Lands Tribunal",
    "Prant Officer / Deputy Collector",
    "District Collector",
    "Additional Secretary (Revenue), Government of Gujarat",
    "Gujarat Revenue Tribunal (GRT)",
    "Gujarat High Court"
  ],

  gu: [
    "જિલ્લા અને સેશન્સ કોર્ટ, ગાંધીનગર",
    "સિવિલ કોર્ટ, ગાંધીનગર",
    "ફોજદારી કોર્ટ, ગાંધીનગર",
    "ફેમિલી કોર્ટ, ગાંધીનગર",
    "જિલ્લા ગ્રાહક તકરાર નિવારણ આયોગ, ગાંધીનગર",
    "મામલતદાર અને કૃષિ જમીન ટ્રિબ્યુનલ",
    "પ્રાંત અધિકારી / નાયબ કલેક્ટર",
    "જિલ્લા કલેક્ટર",
    "અધિક સચિવ (મહેસૂલ), ગુજરાત સરકાર",
    "ગુજરાત રેવન્યુ ટ્રિબ્યુનલ (GRT)",
    "ગુજરાત હાઈકોર્ટ"
  ]

};


/* =========================================================
   FAQ
========================================================= */

const faqs = {

  en: [
    [
      "What should I bring for the first meeting?",
      "Bring a short chronology, material notices or pleadings, agreements, relevant revenue or property records, payment proof and the next hearing or legal deadline. Do not send original documents unless specifically requested."
    ],
    [
      "Does contacting the office create an advocate-client relationship?",
      "No. A professional relationship begins only after conflict checks, acceptance of the matter, professional-fee confirmation and confirmation of the scope of engagement."
    ],
    [
      "How are professional fees decided?",
      "Fees depend on the nature, urgency, forum, stage, record and scope of work. Professional fees and applicable out-of-pocket expenses are communicated after an initial assessment."
    ],
    [
      "Can the duration or result of a case be predicted?",
      "No result can be guaranteed. Timelines depend on the court or authority, service of process, evidence, interim proceedings, conduct of parties and other factors."
    ],
    [
      "Can consultation be conducted in Gujarati?",
      "Yes. Communication and consultation may be conducted in Gujarati, Hindi or English."
    ],
    [
      "Are online consultations available?",
      "A telephone or video consultation may be arranged where appropriate and after an appointment is confirmed. Some matters require physical verification or personal presence."
    ]
  ],

  gu: [
    [
      "પ્રથમ મુલાકાત સમયે શું લાવવું?",
      "કેસની ટૂંકી તારીખવાર વિગત, મહત્વપૂર્ણ નોટિસ અથવા પ્લીડિંગ્સ, કરારો, મહેસૂલી અથવા મિલકત રેકોર્ડ, ચુકવણીનો પુરાવો અને આગામી તારીખ અથવા કાયદાકીય સમયમર્યાદાની માહિતી સાથે લાવો."
    ],
    [
      "ઓફિસનો સંપર્ક કરવાથી વકીલ-મુવક્કિલ સંબંધ બને છે?",
      "ના. હિતસંઘર્ષની તપાસ, કેસ સ્વીકારવાની પુષ્ટિ, વ્યાવસાયિક ફી અને કામગીરીનો વ્યાપ નક્કી થયા પછી જ વ્યાવસાયિક સંબંધ સ્થાપિત થાય છે."
    ],
    [
      "વ્યાવસાયિક ફી કેવી રીતે નક્કી થાય છે?",
      "કામના સ્વરૂપ, તાત્કાલિકતા, કોર્ટ અથવા સત્તાધિકારી, કેસના તબક્કા, દસ્તાવેજો અને કામના વ્યાપ મુજબ ફી નક્કી થાય છે."
    ],
    [
      "કેસનું પરિણામ અથવા કેટલો સમય લાગશે તે કહી શકાય?",
      "કોઈ પરિણામની ખાતરી આપી શકાતી નથી. સમય કોર્ટ અથવા સત્તાધિકારીની કાર્યવાહી, પુરાવા અને અન્ય પરિબળો પર આધારિત છે."
    ],
    [
      "ગુજરાતીમાં પરામર્શ થઈ શકે?",
      "હા. ગુજરાતી, હિન્દી અથવા અંગ્રેજીમાં વાતચીત અને પરામર્શ કરી શકાય છે."
    ],
    [
      "ઓનલાઇન પરામર્શ ઉપલબ્ધ છે?",
      "યોગ્ય બાબતમાં અને સમય નક્કી થયા પછી ફોન અથવા વિડિયો દ્વારા પરામર્શ ગોઠવી શકાય છે. કેટલાક કામમાં રૂબરૂ હાજરી જરૂરી હોઈ શકે છે."
    ]
  ]

};


/* =========================================================
   INSIGHTS
========================================================= */

const insights = {

  en: [
    [
      "Civil Procedure & Commercial Disputes",
      "General legal information relating to civil procedure and commercial disputes."
    ],
    [
      "Criminal Procedure & Bail",
      "General awareness information on criminal procedure and bail-related process."
    ],
    [
      "Family Court & Maintenance",
      "General information concerning family-court procedure and maintenance matters."
    ],
    [
      "Consumer Protection",
      "General information relating to consumer complaints and procedure."
    ],
    [
      "Land Revenue & Tenancy",
      "General information concerning revenue, land and tenancy procedure."
    ],
    [
      "Property Title & Registration",
      "General information on property documents, title review and registration."
    ],
    [
      "Banking, SARFAESI & NI Act",
      "General awareness material concerning banking recovery and related procedure."
    ],
    [
      "Insurance & MACT",
      "General information concerning insurance disputes and motor accident claims."
    ],
    [
      "Judgment Updates & Checklists",
      "General legal-awareness material and practical document checklists."
    ]
  ],

  gu: [
    [
      "સિવિલ પ્રક્રિયા અને વ્યાપારી વિવાદ",
      "સિવિલ પ્રક્રિયા અને વ્યાપારી વિવાદ અંગે સામાન્ય કાનૂની માહિતી."
    ],
    [
      "ફોજદારી પ્રક્રિયા અને જામીન",
      "ફોજદારી પ્રક્રિયા અને જામીન બાબતો અંગે સામાન્ય માહિતી."
    ],
    [
      "ફેમિલી કોર્ટ અને ભરણપોષણ",
      "ફેમિલી કોર્ટ પ્રક્રિયા અને ભરણપોષણ અંગે સામાન્ય માહિતી."
    ],
    [
      "ગ્રાહક સુરક્ષા",
      "ગ્રાહક ફરિયાદ અને પ્રક્રિયા અંગે સામાન્ય માહિતી."
    ],
    [
      "જમીન મહેસૂલ અને ગણોત",
      "મહેસૂલ, જમીન અને ગણોત પ્રક્રિયા અંગે સામાન્ય માહિતી."
    ],
    [
      "મિલકત ટાઇટલ અને રજિસ્ટ્રેશન",
      "મિલકત દસ્તાવેજ, ટાઇટલ તપાસ અને નોંધણી અંગે સામાન્ય માહિતી."
    ],
    [
      "બેંકિંગ, SARFAESI અને NI Act",
      "બેંકિંગ વસૂલાત અને સંબંધિત પ્રક્રિયા અંગે સામાન્ય માહિતી."
    ],
    [
      "વીમા અને MACT",
      "વીમા વિવાદ અને મોટર અકસ્માત વળતર અંગે સામાન્ય માહિતી."
    ],
    [
      "ચુકાદા અપડેટ અને ચેકલિસ્ટ",
      "કાનૂની જાગૃતિ અને ઉપયોગી દસ્તાવેજ ચેકલિસ્ટ."
    ]
  ]

};


/* =========================================================
   HELPERS
========================================================= */

function fileForPage(p) {
  return files[p] || "index.html";
}

function urlForPage(p) {
  return fileForPage(p);
}

function practiceFile(s) {
  return `${s}.html`;
}

function alternateUrl() {

  const current =
    page === "practice-detail"
      ? practiceFile(slug)
      : fileForPage(page);

  return isGu
    ? `../${current}`
    : `gu/${current}`;
}


/* =========================================================
   HEADER
========================================================= */

function renderHeader() {

  const l = labels[lang];

  document.getElementById("site-header").innerHTML = `
    <header class="site-header" id="header">

      <div class="container header-inner">

        <a class="brand" href="${urlForPage("home")}">
          <span class="brand-logo-wrap">
            <img class="brand-logo" src="${imagePath("btg-logo.png")}" alt="B T Gadhavi Advocate & Notary Logo" decoding="async">
          </span>
          <span class="brand-copy">

          <strong>
            B T Gadhavi
          </strong>

          <small>
            ${isGu
              ? "એડવોકેટ અને નોટરી · ગાંધીનગર"
              : "Advocate & Notary · Gandhinagar"}
          </small>

          </span>
        </a>

        <nav class="nav" id="nav">

          ${navLink("home", l.home)}

          ${navLink("about", l.about)}

          ${navLink("practice", l.practice)}

          ${navLink("courts", l.courts)}

          ${navLink("insights", l.insights)}

          ${navLink("contact", l.contact)}

          <a
            class="lang-switch"
            href="${alternateUrl()}"
          >
            ${isGu ? "EN" : "ગુજરાતી"}
          </a>

        </nav>

        <button
          class="menu-toggle"
          id="menuToggle"
          type="button"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="${isGu ? "નેવિગેશન ખોલો" : "Open navigation"}"
        >
          ☰
        </button>

      </div>

    </header>
  `;
}


function navLink(key, label) {

  const active =
    page === key ||
    (
      page === "practice-detail" &&
      key === "practice"
    );

  return `
    <a
      href="${urlForPage(key)}"
      class="${active ? "active" : ""}"
    >
      ${label}
    </a>
  `;
}


/* =========================================================
   FOOTER
========================================================= */

function renderFooter() {

  document.getElementById("site-footer").innerHTML = `

    <footer class="site-footer">

      <div class="container">

        <div class="footer-grid">

          <div>

            <div class="footer-identity">
              <span class="footer-logo-wrap">
                <img class="footer-logo" src="${imagePath("btg-logo.png")}" alt="B T Gadhavi Logo" loading="lazy" decoding="async">
              </span>
              <div>
                <div class="footer-brand">
              B T Gadhavi
            </div>

            <p>
              ${
                isGu
                  ? "એડવોકેટ અને નોટરી<br>ગાંધીનગર, ગુજરાત"
                  : "Advocate & Notary<br>Gandhinagar, Gujarat"
              }
            </p>
              </div>
            </div>

            <p style="opacity:.65">

              ${
                isGu
                  ? "બાર કાઉન્સિલ ઓફ ગુજરાત નોંધણી ક્રમાંક G/81/2004<br>ગુજરાત હાઈકોર્ટ કોડ 6092<br>વર્ષ 2004થી વકીલાત"
                  : "Bar Council of Gujarat Enrollment No. G/81/2004<br>Gujarat High Court Code 6092<br>Practising since 2004"
              }

            </p>

          </div>


          <div>

            <div class="footer-label">
              ${isGu ? "નેવિગેશન" : "Navigation"}
            </div>

            <div class="footer-nav">

              <a href="${urlForPage("home")}">
                ${labels[lang].home}
              </a>

              <a href="${urlForPage("about")}">
                ${labels[lang].about}
              </a>

              <a href="${urlForPage("courts")}">
                ${labels[lang].courts}
              </a>

              <a href="${urlForPage("insights")}">
                ${labels[lang].insights}
              </a>

              <a href="${urlForPage("contact")}">
                ${labels[lang].contact}
              </a>

            </div>

          </div>


          <div>

            <div class="footer-label">
              ${isGu ? "કાર્યક્ષેત્રો" : "Practice Areas"}
            </div>

            <div class="footer-nav">

              ${practiceAreas
                .slice(0, 6)
                .map(
                  x => `
                    <a href="${practiceFile(x.slug)}">
                      ${x[lang].title}
                    </a>
                  `
                )
                .join("")}

            </div>

          </div>


          <div>

            <div class="footer-label">
              ${isGu ? "સંપર્ક" : "Contact"}
            </div>

            <p>

              <a href="tel:+919687275908">
                +91 96872 75908
              </a>

              <br>

              <a href="mailto:btgadhavi78@gmail.com">
                btgadhavi78@gmail.com
              </a>

              <br>

              Gandhinagar, Gujarat

            </p>


            <div class="footer-nav">

              <a href="${urlForPage("disclaimer")}">
                ${isGu ? "ડિસ્ક્લેમર" : "Disclaimer"}
              </a>

              <a href="${urlForPage("privacy")}">
                ${isGu ? "ગોપનીયતા નીતિ" : "Privacy Policy"}
              </a>
              <a href="${urlForPage("terms")}">${isGu ? "વેબસાઇટ ઉપયોગની શરતો" : "Terms of Website Use"}</a>
              <a href="${urlForPage("cookies")}">${isGu ? "કૂકીઝ અને બ્રાઉઝર સ્ટોરેજ" : "Cookies & Browser Storage"}</a>

            </div>

          </div>

        </div>


        <div class="footer-bottom">

          <span>
            © ${new Date().getFullYear()}
            B. T. Gadhavi.
            All rights reserved.
          </span>

          <span class="footer-disclaimer">

            ${
              isGu
                ? "આ વેબસાઇટ પર આપવામાં આવેલી માહિતી માત્ર સામાન્ય માહિતી માટે છે અને તેને કાનૂની સલાહ માનવી નહીં. ઓફિસનો સંપર્ક કરવાથી આપમેળે વકીલ-મુવક્કિલ સંબંધ સ્થાપિત થતો નથી. કોઈ પણ બાબતની સ્વીકૃતિ હિતસંઘર્ષની તપાસ, અધિકારક્ષેત્ર, દસ્તાવેજોની સમીક્ષા, વ્યાવસાયિક ફી અને ઔપચારિક નિમણૂકને આધીન છે."
                : "The information provided on this website is for general informational purposes only and does not constitute legal advice. Contacting the office does not automatically create an advocate-client relationship. Acceptance of any matter is subject to conflict checks, jurisdiction, document review, professional fees and formal engagement."
            }

          </span>

        </div>

      </div>

    </footer>
  `;
}


/* =========================================================
   HERO ART
========================================================= */

function heroArt() {

  return `
    <div class="hero-art advocate-hero reveal">
      <div class="advocate-hero-frame">
        <img class="advocate-hero-image" src="${imagePath("advocate-bhupatdan-gadhavi.png")}" alt="Advocate Bhupatdan T. Gadhavi" fetchpriority="high" decoding="async">
        <div class="advocate-hero-overlay" aria-hidden="true"></div>
      </div>

      <div class="art-caption">

        <strong>
          ${
            isGu
              ? "હકીકતો. દસ્તાવેજો. કાયદો."
              : "Facts. Documents. Law."
          }
        </strong>

      </div>

    </div>
  `;
}


function metric(value, label) {

  return `
    <div class="metric reveal">

      <strong>
        ${value}
      </strong>

      <span>
        ${label}
      </span>

    </div>
  `;
}


function pageHero(title, copy) {

  return `
    <section class="page-hero">

      <div class="container reveal">

        <div class="eyebrow">

          B T Gadhavi ·

          ${
            isGu
              ? "એડવોકેટ અને નોટરી · ગાંધીનગર"
              : "Advocate & Notary · Gandhinagar"
          }

        </div>

        <h1>
          ${title}
        </h1>

        <p>
          ${copy}
        </p>

      </div>

    </section>
  `;
}


function breadcrumb(items) {

  return `
    <div class="breadcrumb-wrap">

      <div class="container">

        <nav
          class="breadcrumb"
          aria-label="Breadcrumb"
        >

          ${items
            .map((x, i) => {

              if (i === items.length - 1) {
                return `<span>${x.label}</span>`;
              }

              return `
                <a href="${x.href}">
                  ${x.label}
                </a>

                <span>/</span>
              `;

            })
            .join("")}

        </nav>

      </div>

    </div>
  `;
}


/* =========================================================
   HOME
========================================================= */

function renderHome() {

  return `

    <section class="hero">

      <div class="container hero-grid">

        <div class="reveal">

          <div class="eyebrow">

            ${
              isGu
                ? "ગાંધીનગર · ગુજરાત"
                : "Legal Practice · Gandhinagar, Gujarat"
            }

          </div>

          <h1>

            ${
              isGu
                ? "ભુપતદાન ટી. ગઢવી"
                : "Bhupatdan T. Gadhavi"
            }

          </h1>

          <div class="hero-subtitle">

            ${
              isGu
                ? "એડવોકેટ અને નોટરી, ગાંધીનગર"
                : "Advocate & Notary in Gandhinagar"
            }

          </div>

          <p class="lead">

            ${
              isGu
                ? "સિવિલ, ફોજદારી, ફેમિલી, ગ્રાહક સુરક્ષા, મહેસૂલ, જમીન, મિલકત, બેંકિંગ, વીમા અને વ્યવસાય સંબંધિત કાનૂની બાબતોમાં સલાહ, પ્રતિનિધિત્વ અને દસ્તાવેજી સહાય."
                : "Legal advice, representation and documentation support in civil, criminal, family, consumer, revenue, land, property, banking, insurance and business matters in Gandhinagar, Gujarat."
            }

          </p>

          <div class="btns">

            <a
              class="btn btn-light"
              href="${urlForPage("practice")}"
            >
              ${
                isGu
                  ? "કાર્યક્ષેત્રો જુઓ"
                  : "View Practice Areas"
              }
            </a>

            <a
              class="btn btn-outline"
              href="${urlForPage("contact")}"
            >
              ${
                isGu
                  ? "મુલાકાત માટે વિનંતી કરો"
                  : "Request an Appointment"
              }
            </a>

          </div>

        </div>

        ${heroArt()}

      </div>

    </section>


    <section class="metrics">

      <div class="container metric-grid">

        ${metric(
          "2004",
          isGu
            ? "વર્ષથી વકીલાત"
            : "Practising since"
        )}

        ${metric(
          "G/81/2004",
          isGu
            ? "બાર કાઉન્સિલ ઓફ ગુજરાત"
            : "Bar Council of Gujarat Enrollment"
        )}

        ${metric(
          "6092",
          isGu
            ? "ગુજરાત હાઈકોર્ટ કોડ"
            : "Gujarat High Court Code"
        )}

        ${metric(
          isGu
            ? "ગુજરાતી · हिन्दी · English"
            : "Gujarati · Hindi · English",
          isGu
            ? "પરામર્શની ભાષાઓ"
            : "Languages"
        )}

      </div>

    </section>


    <section class="section">

      <div class="container two-col">

        <div class="reveal">

          <div class="eyebrow">

            ${
              isGu
                ? "વ્યાવસાયિક અભિગમ"
                : "Legal Practice in Gandhinagar"
            }

          </div>

          <div class="large-statement">

            ${
              isGu
                ? "દરેક કાનૂની બાબત હકીકત, દસ્તાવેજ, અધિકારક્ષેત્ર, સમયમર્યાદા અને પ્રક્રિયાથી શરૂ થાય છે."
                : "Every legal matter begins with facts, documents, jurisdiction, limitation and procedure."
            }

          </div>

        </div>


        <div class="content-panel reveal">

          <p>

            ${
              isGu
                ? "વ્યક્તિઓ, પરિવારો, વેપાર-ઉદ્યોગ, ડેવલપરો, નાણાકીય સંસ્થાઓ અને અન્ય સંગઠનોને ગાંધીનગર, ગુજરાત ખાતે કોર્ટ કાર્યવાહી, મહેસૂલી કેસો, મિલકતની કાયદાકીય તપાસ, કાનૂની દસ્તાવેજો અને વિવાદ નિવારણ સંબંધિત કામગીરીમાં સહાય આપવામાં આવી શકે છે."
                : "The practice assists individuals, families, businesses, developers, financial institutions and other organisations in Gandhinagar, Gujarat in litigation, revenue matters, property due diligence, legal documentation and dispute resolution."
            }

          </p>

          <p>

            ${
              isGu
                ? "કોઈ પણ કામ સ્વીકારવું હિતસંઘર્ષની તપાસ, દસ્તાવેજોની સમીક્ષા, અધિકારક્ષેત્ર, વ્યાવસાયિક ફી, ઉપલબ્ધતા અને ઔપચારિક નિમણૂકને આધીન રહેશે."
                : "Acceptance of a matter remains subject to conflict checks, jurisdiction, document review, professional fees, availability and formal engagement."
            }

          </p>

        </div>

      </div>

    </section>


    <section class="section dark-section">

      <div class="container">

        <div class="section-head reveal">

          <div class="eyebrow">

            ${
              isGu
                ? "મુખ્ય કાર્યક્ષેત્રો"
                : "Legal Practice Areas"
            }

          </div>

          <h2 class="section-title">

            ${
              isGu
                ? "કાનૂની કામગીરીના મુખ્ય ક્ષેત્રો"
                : "Legal services and practice areas"
            }

          </h2>

          <p class="section-copy">

            ${
              isGu
                ? "દરેક બાબતની સ્વીકૃતિ હિતસંઘર્ષ, અધિકારક્ષેત્ર, દસ્તાવેજોની સમીક્ષા, વ્યાવસાયિક ફી અને ઔપચારિક નિમણૂકને આધીન છે."
                : "Each matter is considered subject to conflict checks, jurisdiction, document review, professional fees, availability and formal engagement."
            }

          </p>

        </div>


        <div class="practice-grid">

          ${practiceAreas
            .map(
              (item, i) => `

                <a
                  href="${practiceFile(item.slug)}"
                  class="practice-card reveal"
                >

                  <span class="practice-number">
                    ${String(i + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    ${item[lang].title}
                  </h3>

                  <p>
                    ${item[lang].short}
                  </p>

                  <span class="practice-link">
                    ↗
                  </span>

                </a>
              `
            )
            .join("")}

        </div>

      </div>

    </section>


    ${renderProcess()}

    ${renderCourtsPreview()}

    ${renderProfile()}

    ${renderInsightsPreview()}

    ${renderFAQ()}

    ${renderCTA()}
  `;
}


/* =========================================================
   PROCESS
========================================================= */

function renderProcess() {

  const en = [
    [
      "Initial Information",
      "Initial information and conflict check."
    ],
    [
      "Document Review",
      "Review of material facts, documents, dates and jurisdiction."
    ],
    [
      "Legal Options",
      "Explanation of available legal options and procedural risks."
    ],
    [
      "Scope Confirmation",
      "Confirmation of scope, professional fees and required documents."
    ],
    [
      "Legal Work",
      "Drafting, filing, representation, registration or advisory work as engaged."
    ],
    [
      "Updates",
      "Case updates and further instructions when required."
    ]
  ];

  const gu = [
    [
      "પ્રાથમિક માહિતી",
      "પ્રાથમિક માહિતી અને હિતસંઘર્ષની તપાસ."
    ],
    [
      "દસ્તાવેજોની સમીક્ષા",
      "હકીકતો, દસ્તાવેજો, તારીખો અને અધિકારક્ષેત્રની સમીક્ષા."
    ],
    [
      "કાનૂની વિકલ્પો",
      "ઉપલબ્ધ કાનૂની વિકલ્પો અને પ્રક્રિયાત્મક જોખમની સમજ."
    ],
    [
      "કામનો વ્યાપ",
      "વ્યાવસાયિક ફી અને જરૂરી દસ્તાવેજોની પુષ્ટિ."
    ],
    [
      "કાનૂની કામગીરી",
      "ડ્રાફ્ટિંગ, ફાઇલિંગ, રજૂઆત, નોંધણી અથવા કાનૂની સલાહ."
    ],
    [
      "અપડેટ",
      "જરૂર મુજબ કેસની માહિતી અને આગળની સૂચનાઓ."
    ]
  ];

  const items =
    isGu
      ? gu
      : en;


  return `

    <section class="section">

      <div class="container">

        <div class="section-head reveal">

          <div class="eyebrow">

            ${
              isGu
                ? "કાર્યપદ્ધતિ"
                : "How Matters Are Handled"
            }

          </div>

          <h2 class="section-title">

            ${
              isGu
                ? "સુવ્યવસ્થિત કાનૂની પ્રક્રિયા"
                : "A structured legal process"
            }

          </h2>

        </div>


        <div class="process-grid">

          ${items
            .map(
              (x, i) => `

                <div class="process-item reveal">

                  <div class="num">
                    ${String(i + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    ${x[0]}
                  </h3>

                  <p>
                    ${x[1]}
                  </p>

                </div>
              `
            )
            .join("")}

        </div>

      </div>

    </section>
  `;
}


/* =========================================================
   COURTS PREVIEW
========================================================= */

function renderCourtsPreview() {

  return `

    <section class="section forums">

      <div class="container">

        <div class="section-head reveal">

          <div class="eyebrow">

            ${
              isGu
                ? "કોર્ટ અને સત્તાધિકારીઓ"
                : "Courts, Tribunals & Authorities"
            }

          </div>

          <h2 class="section-title">

            ${
              isGu
                ? "અધિકારક્ષેત્ર મુજબ કાનૂની કાર્યવાહી"
                : "Courts and authorities"
            }

          </h2>

          <p class="section-copy">

            ${
              isGu
                ? "યોગ્ય ફોરમ વિવાદના સ્વરૂપ, પ્રાદેશિક અને વિષયવસ્તુ આધારિત અધિકારક્ષેત્ર તથા કાર્યવાહી કયા તબક્કે છે તેના આધારે નક્કી થાય છે."
                : "The appropriate forum depends on the nature of the dispute, territorial and subject-matter jurisdiction and the procedural stage."
            }

          </p>

        </div>


        <div class="forum-list">

          ${courts[lang]
            .slice(0, 7)
            .map(
              x => `

                <div class="forum-item reveal">

                  <span>
                    ${x}
                  </span>

                  <span>
                    ↗
                  </span>

                </div>
              `
            )
            .join("")}

        </div>


        <div class="btns">

          <a
            class="btn btn-outline"
            href="${urlForPage("courts")}"
          >

            ${
              isGu
                ? "બધી કોર્ટ અને સત્તાધિકારીઓ જુઓ"
                : "View Courts & Authorities"
            }

          </a>

        </div>

      </div>

    </section>
  `;
}


/* =========================================================
   PROFILE FINAL CLIENT VERSION
========================================================= */

function renderProfile() {

  return `

    <section class="section">

      <div class="container profile-grid">

        <div class="profile-art profile-photo-wrap reveal">
          <img class="profile-photo" src="${imagePath("advocate-bhupatdan-gadhavi.png")}" alt="Bhupatdan T. Gadhavi, Advocate and Notary" loading="lazy" decoding="async">
          <div class="profile-photo-overlay" aria-hidden="true"></div>
        </div>


        <div class="reveal">

          <div class="eyebrow">

            ${
              isGu
                ? "વ્યાવસાયિક પ્રોફાઇલ"
                : "Professional Profile"
            }

          </div>

          <h2 class="section-title">

            ${
              isGu
                ? "ભુપતદાન ટી. ગઢવી"
                : "Bhupatdan T. Gadhavi"
            }

          </h2>

          <p class="section-copy">

            ${
              isGu
                ? "એડવોકેટ અને નોટરી. ગાંધીનગર, ગુજરાત ખાતે કાનૂની પ્રેક્ટિસ."
                : "Advocate & Notary. Legal Practice in Gandhinagar, Gujarat."
            }

          </p>


          <div class="profile-data">

            ${profileData(
              isGu ? "નામ" : "Name",
              "Bhupatdan T. Gadhavi"
            )}

            ${profileData(
              isGu ? "હોદ્દો" : "Designation",
              "Advocate & Notary"
            )}

            ${profileData(
              isGu ? "લાયકાત" : "Qualification",
              "B.A., LL.B."
            )}

            ${profileData(
              isGu ? "વકીલાત" : "Practising since",
              "2004"
            )}

            ${profileData(
              isGu
                ? "બાર કાઉન્સિલ નોંધણી"
                : "Bar Council of Gujarat Enrollment No.",
              "G/81/2004"
            )}

            ${profileData(
              isGu
                ? "ગુજરાત હાઈકોર્ટ કોડ"
                : "Gujarat High Court Code",
              "6092"
            )}

            ${profileData(
              isGu
                ? "ભાષાઓ"
                : "Languages",
              "Gujarati, Hindi and English"
            )}

            ${profileData(
              isGu
                ? "કાનૂની પ્રેક્ટિસ"
                : "Legal Practice",
              "Gandhinagar, Gujarat"
            )}

          </div>


          <div class="btns">

            <a
              class="btn btn-dark"
              href="${urlForPage("about")}"
            >

              ${
                isGu
                  ? "પૂર્ણ પરિચય જુઓ"
                  : "View Professional Profile"
              }

            </a>

            <a
              class="btn btn-dark"
              href="${urlForPage("contact")}"
            >

              ${
                isGu
                  ? "મુલાકાત માટે વિનંતી કરો"
                  : "Request an Appointment"
              }

            </a>

          </div>

        </div>

      </div>

    </section>
  `;
}


function profileData(label, value) {

  return `

    <div>

      <small>
        ${label}
      </small>

      <strong>
        ${value}
      </strong>

    </div>
  `;
}


/* =========================================================
   INSIGHTS PREVIEW
========================================================= */

function renderInsightsPreview() {

  return `

    <section
      class="section"
      style="background:var(--paper-2)"
    >

      <div class="container">

        <div class="section-head reveal">

          <div class="eyebrow">

            ${
              isGu
                ? "કાનૂની માહિતી"
                : "Legal Information"
            }

          </div>

          <h2 class="section-title">

            ${
              isGu
                ? "કાનૂની જાગૃતિ માટેના વિષયો"
                : "Legal awareness and information"
            }

          </h2>

          <p class="section-copy">

            ${
              isGu
                ? "આ માહિતી સામાન્ય કાનૂની જાગૃતિ માટે છે અને ચોક્કસ કેસ માટેની કાનૂની સલાહ નથી."
                : "This information is intended for general legal awareness and is not a substitute for advice on specific facts and documents."
            }

          </p>

        </div>


        <div class="insight-grid">

          ${insights[lang]
            .slice(0, 6)
            .map(
              (x, i) => `

                <div class="insight-card reveal">

                  <span>
                    ${String(i + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    ${x[0]}
                  </h3>

                  <p>
                    ${x[1]}
                  </p>

                </div>
              `
            )
            .join("")}

        </div>


        <div class="btns">

          <a
            class="btn btn-dark"
            href="${urlForPage("insights")}"
          >

            ${
              isGu
                ? "કાનૂની માહિતી જુઓ"
                : "View Legal Insights"
            }

          </a>

        </div>

      </div>

    </section>
  `;
}


/* =========================================================
   FAQ
========================================================= */

function renderFAQ() {

  return `

    <section class="section faq-section">

      <div class="container">

        <div class="section-head reveal">

          <div class="eyebrow">

            ${
              isGu
                ? "વારંવાર પૂછાતા પ્રશ્નો"
                : "Frequently Asked Questions"
            }

          </div>

          <h2 class="section-title">

            ${
              isGu
                ? "પ્રથમ સંપર્ક પહેલાં ઉપયોગી માહિતી"
                : "Useful information before contacting the office"
            }

          </h2>

        </div>


        <div class="faq-list">

          ${faqs[lang]
            .map(
              x => `

                <details class="reveal">

                  <summary>
                    ${x[0]}
                  </summary>

                  <p>
                    ${x[1]}
                  </p>

                </details>
              `
            )
            .join("")}

        </div>

      </div>

    </section>
  `;
}


/* =========================================================
   ABOUT
========================================================= */

function renderAbout() {

  return `

    ${pageHero(
      isGu
        ? "એડવોકેટ ભુપતદાન ટી. ગઢવીનો પરિચય"
        : "About Adv. Bhupatdan T. Gadhavi",

      isGu
        ? "ગાંધીનગર, ગુજરાત ખાતે એડવોકેટ અને નોટરીનો વ્યાવસાયિક પરિચય, કાનૂની પ્રેક્ટિસ અને કાર્ય કરવાની પદ્ધતિ."
        : "Professional profile, legal practice and working approach of Adv. Bhupatdan T. Gadhavi, Advocate and Notary in Gandhinagar, Gujarat."
    )}


    ${breadcrumb([
      {
        label: labels[lang].home,
        href: "index.html"
      },
      {
        label: labels[lang].about
      }
    ])}


    <section class="section">

      <div class="container profile-grid">

        <div class="profile-art profile-photo-wrap reveal">
          <img class="profile-photo" src="${imagePath("advocate-bhupatdan-gadhavi.png")}" alt="Bhupatdan T. Gadhavi, Advocate and Notary" loading="lazy" decoding="async">
          <div class="profile-photo-overlay" aria-hidden="true"></div>
        </div>


        <div class="reveal">

          <div class="eyebrow">

            ${
              isGu
                ? "એડવોકેટ અને નોટરી"
                : "Advocate & Notary"
            }

          </div>

          <h2 class="section-title">

            ${
              isGu
                ? "ભુપતદાન ટી. ગઢવી"
                : "Bhupatdan T. Gadhavi"
            }

          </h2>

          <p>

            ${
              isGu
                ? "ભુપતદાન ટી. ગઢવી ગાંધીનગર, ગુજરાત ખાતે એડવોકેટ અને નોટરી તરીકે કાનૂની પ્રેક્ટિસ કરે છે અને વર્ષ 2004થી બાર કાઉન્સિલ ઓફ ગુજરાતમાં નોંધાયેલ છે."
                : "Bhupatdan T. Gadhavi is an Advocate and Notary practising in Gandhinagar, Gujarat and has been enrolled with the Bar Council of Gujarat since 2004."
            }

          </p>

          <p>

            ${
              isGu
                ? "કાનૂની પ્રેક્ટિસમાં સિવિલ અને વાણિજ્યિક વિવાદ, ફોજદારી કાર્યવાહી, ફેમિલી બાબતો, ગ્રાહક વિવાદ, મહેસૂલ અને જમીન, મિલકત ટાઇટલ, બેંકિંગ અને ફાઇનાન્સ, વીમા, બિઝનેસ દસ્તાવેજીકરણ અને નોટરી કામગીરીનો સમાવેશ થાય છે."
                : "The legal practice includes civil and commercial disputes, criminal proceedings, family matters, consumer disputes, revenue and land matters, property title work, banking and finance, insurance, business documentation and notarial work."
            }

          </p>

          <p>

            ${
              isGu
                ? "દરેક બાબતમાં મહત્વપૂર્ણ હકીકતો, દસ્તાવેજો, સમયમર્યાદા, અધિકારક્ષેત્ર, વ્યાવસાયિક ફી અને પ્રક્રિયાત્મક તબક્કાની તપાસ કરવામાં આવે છે."
                : "Each matter is approached by identifying the material facts, relevant documents, limitation, jurisdiction, professional-fee scope and procedural stage."
            }

          </p>


          <div class="profile-data">

            ${profileData(
              isGu ? "નામ" : "Name",
              "Bhupatdan T. Gadhavi"
            )}

            ${profileData(
              isGu ? "હોદ્દો" : "Designation",
              "Advocate & Notary"
            )}

            ${profileData(
              isGu ? "લાયકાત" : "Qualification",
              "B.A., LL.B."
            )}

            ${profileData(
              isGu ? "વકીલાત" : "Practising since",
              "2004"
            )}

            ${profileData(
              isGu
                ? "બાર કાઉન્સિલ નોંધણી"
                : "Bar Council of Gujarat Enrollment No.",
              "G/81/2004"
            )}

            ${profileData(
              isGu
                ? "ગુજરાત હાઈકોર્ટ કોડ"
                : "Gujarat High Court Code",
              "6092"
            )}

            ${profileData(
              isGu
                ? "ભાષાઓ"
                : "Languages",
              "Gujarati, Hindi and English"
            )}

            ${profileData(
              isGu
                ? "કાનૂની પ્રેક્ટિસ"
                : "Legal Practice",
              "Gandhinagar, Gujarat"
            )}

          </div>

        </div>

      </div>

    </section>


    <section class="section dark-section">

      <div class="container two-col">

        <div>

          <div class="eyebrow">

            ${
              isGu
                ? "વ્યાવસાયિક અભિગમ"
                : "Professional Approach"
            }

          </div>

          <h2 class="section-title">

            ${
              isGu
                ? "હકીકત અને દસ્તાવેજ આધારિત મૂલ્યાંકન"
                : "Fact and document based assessment"
            }

          </h2>

        </div>


        <div class="section-copy">

          <p>
            • ${
              isGu
                ? "અધિકારક્ષેત્ર, સમયમર્યાદા અને કાર્યવાહીનો તબક્કો સ્પષ્ટ કરવો"
                : "Clear identification of jurisdiction, limitation and procedural stage"
            }
          </p>

          <p>
            • ${
              isGu
                ? "સચોટ ડ્રાફ્ટિંગ અને વ્યવસ્થિત દસ્તાવેજી રેકોર્ડ"
                : "Focused drafting and organised documentary record"
            }
          </p>

          <p>
            • ${
              isGu
                ? "કાનૂની વિકલ્પો અને મહત્વપૂર્ણ જોખમની સમજ"
                : "Explanation of available options and material risks"
            }
          </p>

          <p>
            • ${
              isGu
                ? "પક્ષકારની માહિતીની ગોપનીયતા"
                : "Confidential handling of client information"
            }
          </p>

          <p>
            • ${
              isGu
                ? "કામનો વ્યાપ અને વ્યાવસાયિક ફી અંગે સ્પષ્ટતા"
                : "Professional fee and scope confirmation before substantive work"
            }
          </p>

        </div>

      </div>

    </section>


    ${renderCTA()}
  `;
}


/* =========================================================
   PRACTICE OVERVIEW
========================================================= */

function renderPracticeOverview() {

  return `

    ${pageHero(
      isGu
        ? "કાનૂની કાર્યક્ષેત્રો"
        : "Legal Practice Areas in Gandhinagar",

      isGu
        ? "સિવિલ, ફોજદારી, ફેમિલી, ગ્રાહક, જમીન, મિલકત, બેંકિંગ, વીમા અને વ્યવસાય સંબંધિત કાનૂની કામગીરીના મુખ્ય ક્ષેત્રો."
        : "Information about civil, criminal, family, consumer, revenue, land, property, banking, finance, recovery, insurance, business and notarial matters in Gandhinagar."
    )}


    ${breadcrumb([
      {
        label: labels[lang].home,
        href: "index.html"
      },
      {
        label: labels[lang].practice
      }
    ])}


    <section class="section">

      <div class="container">

        ${practiceAreas
          .map(
            (item, i) => `

              <a
                class="practice-detail reveal"
                href="${practiceFile(item.slug)}"
              >

                <span class="index">
                  ${String(i + 1).padStart(2, "0")}
                </span>

                <h2>
                  ${item[lang].title}
                </h2>

                <p>
                  ${item[lang].short}
                </p>

              </a>
            `
          )
          .join("")}

      </div>

    </section>


    ${renderCourtsPreview()}

    ${renderCTA()}
  `;
}


/* =========================================================
   PRACTICE DETAIL
========================================================= */

function renderPracticeDetail() {

  const item =
    practiceAreas.find(
      x => x.slug === slug
    );

  if (!item) {

    return `
      <section class="section">
        <div class="container">

          <h1>
            Page not found
          </h1>

        </div>
      </section>
    `;
  }

  const x = item[lang];


  return `

    ${pageHero(
      x.title,
      x.short
    )}


    ${breadcrumb([
      {
        label: labels[lang].home,
        href: "index.html"
      },
      {
        label: labels[lang].practice,
        href: "practice-areas.html"
      },
      {
        label: x.title
      }
    ])}


    <section class="section">

      <div class="container two-col">

        <div class="reveal">

          <div class="eyebrow">

            ${
              isGu
                ? "કાનૂની કામગીરી · ગાંધીનગર"
                : "Legal Practice · Gandhinagar"
            }

          </div>

          <h2 class="section-title">
            ${x.title}
          </h2>

        </div>


        <div class="content-panel reveal">

          <p>
            ${x.intro}
          </p>

          <p>

            ${
              isGu
                ? "બાબતની સ્વીકૃતિ હિતસંઘર્ષની તપાસ, અધિકારક્ષેત્ર, ઉપલબ્ધતા, દસ્તાવેજોની સમીક્ષા, વ્યાવસાયિક ફી અને ઔપચારિક નિમણૂકને આધીન છે."
                : "Acceptance of a matter remains subject to conflict checks, jurisdiction, availability, document review, professional fees and formal engagement."
            }

          </p>

        </div>

      </div>

    </section>


    <section
      class="section"
      style="background:var(--paper-2)"
    >

      <div class="container">

        <div class="section-head">

          <div class="eyebrow">

            ${
              isGu
                ? "સંબંધિત કામગીરી"
                : "Related Work"
            }

          </div>

          <h2 class="section-title">

            ${
              isGu
                ? "કાર્યક્ષેત્રની વિગતો"
                : "Scope of work"
            }

          </h2>

        </div>


        <div class="detail-points">

          ${x.points
            .map(
              p => `

                <div class="detail-point reveal">

                  <strong>
                    ${p[0]}
                  </strong>

                  <p>
                    ${p[1]}
                  </p>

                </div>
              `
            )
            .join("")}

        </div>

      </div>

    </section>


    <section class="section">

      <div class="container">

        <div class="section-head">

          <div class="eyebrow">
            ${
              isGu
                ? "અન્ય કાર્યક્ષેત્રો"
                : "Related Practice Areas"
            }
          </div>

          <h2 class="section-title">

            ${
              isGu
                ? "અન્ય કાનૂની વિષયો"
                : "Explore related legal matters"
            }

          </h2>

        </div>


        <div class="feature-strip">

          ${practiceAreas
            .filter(
              z => z.slug !== slug
            )
            .slice(0, 3)
            .map(
              (z, i) => `

                <a
                  class="feature"
                  href="${practiceFile(z.slug)}"
                >

                  <span>
                    ${String(i + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    ${z[lang].title}
                  </h3>

                  <p>
                    ${z[lang].short}
                  </p>

                </a>
              `
            )
            .join("")}

        </div>

      </div>

    </section>


    ${renderCTA()}
  `;
}


/* =========================================================
   COURTS PAGE
========================================================= */

function renderCourtsPage() {

  return `

    ${pageHero(
      isGu
        ? "કોર્ટ, ટ્રિબ્યુનલ અને સત્તાધિકારીઓ"
        : "Courts, Tribunals & Authorities",

      isGu
        ? "ગાંધીનગર, ગુજરાતની કાનૂની પ્રેક્ટિસમાં સંબંધિત કોર્ટ, ટ્રિબ્યુનલ અને મહેસૂલી સત્તાધિકારીઓ અંગે માહિતી."
        : "Information about courts, tribunals and revenue authorities relevant to the legal practice in Gandhinagar, Gujarat."
    )}


    ${breadcrumb([
      {
        label: labels[lang].home,
        href: "index.html"
      },
      {
        label: labels[lang].courts
      }
    ])}


    <section class="section forums">

      <div class="container">

        <div class="forum-list">

          ${courts[lang]
            .map(
              x => `

                <div class="forum-item reveal">

                  <span>
                    ${x}
                  </span>

                  <span>
                    ↗
                  </span>

                </div>
              `
            )
            .join("")}

        </div>


        <p
          class="section-copy"
          style="margin-top:35px"
        >

          ${
            isGu
              ? "કોઈ કોર્ટ અથવા સત્તાધિકારીનું નામ દર્શાવવાથી દરેક કેસ ત્યાં દાખલ કરી શકાય એવો અર્થ થતો નથી. અધિકારક્ષેત્ર લાગુ કાયદો, માંગેલી રાહત, વિષય, સ્થળ, દાવાની કિંમત અને કાર્યવાહીનો તબક્કો નક્કી કરે છે."
              : "Listing a court, tribunal or authority does not imply that every matter can be filed there. Jurisdiction is determined by applicable law, relief sought, subject matter, location, valuation and procedural stage."
          }

        </p>

      </div>

    </section>


    ${renderCTA()}
  `;
}


/* =========================================================
   INSIGHTS
========================================================= */

function renderInsightsPage() {

  return `

    ${pageHero(
      isGu
        ? "કાનૂની માહિતી"
        : "Legal Insights & Information",

      isGu
        ? "કોર્ટ પ્રક્રિયા, મિલકત દસ્તાવેજો, મહેસૂલ કાયદો, ફેમિલી કાયદો, ગ્રાહક વિવાદ, બેંકિંગ અને અન્ય કાનૂની વિષયો અંગે સામાન્ય માહિતી."
        : "General legal information on court procedure, property documentation, revenue law, family law, consumer disputes, banking recovery and related subjects."
    )}


    ${breadcrumb([
      {
        label: labels[lang].home,
        href: "index.html"
      },
      {
        label: labels[lang].insights
      }
    ])}


    <section class="section">

      <div class="container">

        <div class="insight-grid">

          ${insights[lang]
            .map(
              (x, i) => `

                <div class="insight-card reveal">

                  <span>
                    ${String(i + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    ${x[0]}
                  </h3>

                  <p>
                    ${x[1]}
                  </p>

                </div>
              `
            )
            .join("")}

        </div>


        <div
          class="content-panel"
          style="margin-top:45px"
        >

          <p>

            ${
              isGu
                ? "આ વિભાગની માહિતી માત્ર સામાન્ય કાનૂની જાગૃતિ માટે છે. તેને વ્યક્તિગત કેસ અંગેની કાનૂની સલાહ માનવી નહીં."
                : "Information in this section is for general legal awareness only. It is not legal advice and should not be treated as a substitute for advice after review of the facts and documents of a specific matter."
            }

          </p>

        </div>

      </div>

    </section>


    ${renderCTA()}
  `;
}


/* =========================================================
   CONTACT
========================================================= */

function renderContact() {

  return `

    ${pageHero(
      isGu
        ? "ઓફિસનો સંપર્ક કરો"
        : "Contact the Office",

      isGu
        ? "મુલાકાત અથવા કેસ સંબંધિત પૂછપરછ માટે પ્રાથમિક હિતસંઘર્ષ અને ઉપલબ્ધતાની તપાસ માટે જરૂરી એટલી જ માહિતી આપો."
        : "For an appointment or case-related enquiry, provide only the minimum information required for an initial conflict and availability check."
    )}


    ${breadcrumb([
      {
        label: labels[lang].home,
        href: "index.html"
      },
      {
        label: labels[lang].contact
      }
    ])}


    <section class="section">

      <div class="container contact-grid">

        <div class="contact-card reveal">

          <div class="eyebrow">

            ${
              isGu
                ? "સંપર્ક વિગતો"
                : "Office Details"
            }

          </div>

          <h2>

            ${
              isGu
                ? "ભુપતદાન ટી. ગઢવી"
                : "Bhupatdan T. Gadhavi"
            }

          </h2>

          <p>
            ${
              isGu
                ? "એડવોકેટ અને નોટરી"
                : "Advocate & Notary"
            }
          </p>

          ${contactLine(
            isGu ? "કાનૂની પ્રેક્ટિસ" : "Legal Practice",
            "Gandhinagar, Gujarat"
          )}

          ${contactLine(
            isGu ? "ફોન" : "Telephone",
            '<a href="tel:+919687275908">+91 96872 75908</a>'
          )}

          ${contactLine(
            isGu ? "ઇમેઇલ" : "Email",
            '<a href="mailto:btgadhavi78@gmail.com">btgadhavi78@gmail.com</a>'
          )}

          ${contactLine(
            isGu ? "ભાષાઓ" : "Languages",
            "Gujarati, Hindi and English"
          )}

        </div>


        <form
          id="contactForm"
          class="reveal"
        >

          <div class="form-grid">

            ${inputField(
              "name",
              isGu ? "પૂર્ણ નામ" : "Full name",
              "text",
              true
            )}

            ${inputField(
              "phone",
              isGu ? "ટેલિફોન નંબર" : "Telephone number",
              "tel",
              true
            )}

            ${inputField(
              "email",
              isGu ? "ઇમેઇલ" : "Email",
              "email"
            )}


            <div class="field">

              <label for="language">

                ${
                  isGu
                    ? "પસંદની ભાષા (વૈકલ્પિક)"
                    : "Preferred language (optional)"
                }

              </label>

              <select
                id="language"
                name="language"
              >

                <option value="">
                  ${isGu ? "પસંદ કરો" : "Select"}
                </option>

                <option>
                  Gujarati
                </option>

                <option>
                  Hindi
                </option>

                <option>
                  English
                </option>

              </select>

            </div>


            ${inputField(
              "matter",
              isGu ? "બાબતનો પ્રકાર" : "Type of matter",
              "text",
              true
            )}

            ${inputField(
              "court",
              isGu ? "કોર્ટ અથવા સત્તાધિકારી" : "Court or authority",
              "text"
            )}

            ${inputField(
              "case",
              isGu ? "કેસ નંબર" : "Case number, if any",
              "text"
            )}

            ${inputField(
              "deadline",
              isGu ? "આગામી તારીખ / સમયમર્યાદા" : "Next hearing / deadline",
              "text"
            )}


            <div class="field full">

              <label for="summary">

                ${
                  isGu
                    ? "ટૂંકી બિન-ગુપ્ત માહિતી"
                    : "Brief non-confidential summary"
                }

              </label>

              <textarea
                id="summary"
                name="summary"
                maxlength="500"
                required
              ></textarea>

            </div>


            <div class="field full">

              <label class="consent" for="privacyConsent">

                <input
                  id="privacyConsent"
                  name="privacyConsent"
                  type="checkbox"
                  required
                >

                <span>

                  ${
                    isGu
                      ? `મેં <a href="${urlForPage("privacy")}" target="_blank" rel="noopener">ગોપનીયતા નીતિ (નવા ટૅબમાં)</a> વાંચી છે અને આ પૂછપરછનો જવાબ આપવા, પ્રાથમિક હિતસંઘર્ષ તથા ઉપલબ્ધતા તપાસવા અને મુલાકાત ગોઠવવા મારી માહિતીના ઉપયોગ માટે સંમતિ આપું છું.`
                      : `I have read the <a href="${urlForPage("privacy")}" target="_blank" rel="noopener">Privacy Policy (opens in a new tab)</a> and consent to use of my information to respond to this enquiry, check conflicts and availability, and arrange an appointment.`
                  }

                </span>

              </label>

            </div>


            <div class="field full">

              <p
                style="
                  font-size:10px;
                  color:var(--muted)
                "
              >

                ${
                  isGu
                    ? "આ ફોર્મ મોકલવાથી વકીલ-મુવક્કિલ સંબંધ સ્થાપિત થતો નથી અને કેસ સ્વીકાર્યાની પુષ્ટિ થતી નથી. કોઈ પણ બાબતની સ્વીકૃતિ હિતસંઘર્ષ, અધિકારક્ષેત્ર, દસ્તાવેજોની સમીક્ષા, વ્યાવસાયિક ફી અને ઔપચારિક નિમણૂકને આધીન છે."
                    : "Submission of this form does not create an advocate-client relationship or confirm acceptance of the matter. Acceptance of any matter is subject to conflict checks, jurisdiction, document review, professional fees and formal engagement."
                }

              </p>

            </div>


            <div class="field full">

              <button
                type="submit"
                class="btn btn-dark"
              >

                ${
                  isGu
                    ? "ઇમેઇલ ડ્રાફ્ટ ખોલો"
                    : "Open Email Draft"
                }

              </button>

            </div>

          </div>

          <p class="enquiry-help">${isGu ? "આ બટન તમારી ઇમેઇલ ઍપમાં ડ્રાફ્ટ ખોલે છે; વેબસાઇટ પોતે પૂછપરછ મોકલતી કે સાચવતી નથી. ડ્રાફ્ટ તપાસીને જાતે મોકલો. ઇમેઇલ ઍપ ન ખૂલે તો btgadhavi78@gmail.com પર સીધો સંપર્ક કરો. નામ, ફોન, બાબતનો પ્રકાર, ટૂંકી માહિતી અને સંમતિ જરૂરી છે; અન્ય ક્ષેત્રો વૈકલ્પિક છે." : "This button opens a draft in your email app. The website does not itself send or save the enquiry. Review and send the draft yourself. If no email app opens, contact btgadhavi78@gmail.com directly. Name, telephone, type of matter, summary and consent are required; other fields are optional."}</p>
        </form>

      </div>

    </section>


    ${renderFAQ()}
  `;
}


function inputField(id, label, type, required = false) {

  return `

    <div class="field">

      <label for="${id}">
        ${label}${required ? "" : (isGu ? " (વૈકલ્પિક)" : " (optional)")}
      </label>

      <input
        id="${id}"
        name="${id}"
        type="${type}"
        ${required ? "required" : ""}
      >

    </div>
  `;
}


function contactLine(label, value) {

  return `

    <div class="contact-line">

      <small>
        ${label}
      </small>

      <strong>
        ${value}
      </strong>

    </div>
  `;
}


/* =========================================================
   DISCLAIMER
========================================================= */

function renderDisclaimer() {

  return `

    ${pageHero(
      isGu
        ? "વેબસાઇટ ડિસ્ક્લેમર"
        : "Website Disclaimer",

      isGu
        ? "વેબસાઇટના ઉપયોગ અને વ્યાવસાયિક સંબંધ અંગે મહત્વપૂર્ણ માહિતી."
        : "Important information concerning use of this website and professional engagement."
    )}


    <section class="section">

      <div class="container policy">

        <p>

          ${
            isGu
              ? "આ વેબસાઇટ માત્ર એડવોકેટ ભુપતદાન ટી. ગઢવીની વ્યાવસાયિક વિગતો, ગાંધીનગર, ગુજરાત ખાતે કાનૂની પ્રેક્ટિસ અને કાર્યક્ષેત્રો અંગે સામાન્ય માહિતી આપવા માટે જાળવવામાં આવે છે."
              : "This website is maintained solely to provide general information about Adv. Bhupatdan T. Gadhavi, his legal practice in Gandhinagar, Gujarat, professional particulars and areas of practice."
          }

        </p>

        <h2>
          ${isGu ? "સામાન્ય માહિતી" : "General Information"}
        </h2>

        <p>

          ${
            isGu
              ? "આ વેબસાઇટ પર આપવામાં આવેલી માહિતી માત્ર સામાન્ય માહિતી માટે છે અને તેને કાનૂની સલાહ માનવી નહીં."
              : "The information provided on this website is for general informational purposes only and does not constitute legal advice."
          }

        </p>

        <h2>
          ${
            isGu
              ? "વકીલ-મુવક્કિલ સંબંધ"
              : "Advocate-Client Relationship"
          }
        </h2>

        <p>

          ${
            isGu
              ? "ઓફિસનો સંપર્ક કરવાથી આપમેળે વકીલ-મુવક્કિલ સંબંધ સ્થાપિત થતો નથી."
              : "Contacting the office does not automatically create an advocate-client relationship."
          }

        </p>

        <h2>
          ${
            isGu
              ? "બાબતની સ્વીકૃતિ"
              : "Acceptance of Matters"
          }
        </h2>

        <p>

          ${
            isGu
              ? "કોઈ પણ બાબતની સ્વીકૃતિ હિતસંઘર્ષની તપાસ, અધિકારક્ષેત્ર, દસ્તાવેજોની સમીક્ષા, વ્યાવસાયિક ફી અને ઔપચારિક નિમણૂકને આધીન છે."
              : "Acceptance of any matter is subject to conflict checks, jurisdiction, document review, professional fees and formal engagement."
          }

        </p>

        <h2>
          ${
            isGu
              ? "પરિણામ અંગે"
              : "No Outcome Assurance"
          }
        </h2>

        <p>

          ${
            isGu
              ? "કોઈ નિવેદન કેસના પરિણામ, સમયગાળો અથવા ખર્ચ અંગે વચન, ખાતરી કે બાંયધરી નથી."
              : "No statement on this website is a promise, warranty or assurance regarding the result, duration or cost of a legal matter."
          }

        </p>

      </div>

    </section>


    ${renderCTA()}
  `;
}


/* =========================================================
   PRIVACY
========================================================= */

const legalPolicies = {
  "privacy": {
    "en": {
      "title": "Privacy Policy",
      "intro": "How website enquiries and browser information are handled.",
      "sections": [
        [
          "Who to contact",
          "This website provides information about B T Gadhavi Advocate &amp; Notary, Gandhinagar, Gujarat. For privacy questions, requests or grievances, contact the office at <a href=\"mailto:btgadhavi78@gmail.com\">btgadhavi78@gmail.com</a>."
        ],
        [
          "Information you choose to provide",
          "The enquiry form requires your name, telephone number, type of matter, a brief non-confidential summary and consent. Email, preferred language, court or authority, case number and hearing date or deadline are optional. Provide only information needed for an initial enquiry."
        ],
        [
          "How the email form works",
          "The form prepares a mailto draft in your email application. It does not submit the form to a website server or store form entries in website browser storage. You must review and send the email yourself. Your email provider handles the draft and message under its own terms. An email does not confirm receipt, an appointment or acceptance of a matter."
        ],
        [
          "Purpose and choice",
          "Information sent to the office is used to respond to your enquiry, check conflicts and availability, and arrange an appointment. Any professional engagement is separately agreed. If you do not wish to provide information, you may browse the information pages without submitting an enquiry."
        ],
        [
          "Sensitive and confidential material",
          "Do not send passwords, banking credentials, identity documents, privileged communications or detailed case documents through an initial enquiry. Ask the office about a suitable channel before sharing confidential material. Contact alone does not create an advocate-client relationship."
        ],
        [
          "Service providers and technical information",
          "Hosting and email providers may process technical information, such as IP addresses, browser information and access logs, as part of providing their services. The website loads Google Fonts, which makes requests to Google and may disclose your IP address and browser/request information. Provider processing is subject to their own policies. Information may also be disclosed when required by applicable law."
        ],
        [
          "Retention",
          "Enquiry information should be kept only as long as needed to respond, manage any resulting engagement or meet applicable legal and professional obligations. Ask the office about retention of your particular correspondence. No automatic email deletion period is implemented by this website."
        ],
        [
          "Requests, withdrawal and grievances",
          "Email <a href=\"mailto:btgadhavi78@gmail.com\">btgadhavi78@gmail.com</a> to request access to information you supplied, correction, updating or deletion where applicable, to withdraw consent for further enquiry processing, or to raise a grievance. Describe your request without including unnecessary sensitive documents. Identity verification may be needed. Withdrawal may limit the response the office can provide and does not undo earlier lawful processing. Retention or disclosure required by law may still apply."
        ],
        [
          "Security",
          "Email and internet communication cannot be guaranteed secure. Limit initial enquiries to non-confidential information and contact the office before sending sensitive material. This website does not provide a secure document-upload facility."
        ],
        [
          "Browser storage and updates",
          "The site uses <code>btg_ack</code> in localStorage to remember the entry disclaimer acknowledgement. The supplied site code contains no advertising or analytics trackers. See the <a href=\"cookie-policy.html\">Cookies &amp; Browser Storage Policy</a> for details. This notice may be updated when website features or practices change."
        ]
      ]
    },
    "gu": {
      "title": "ગોપનીયતા નીતિ",
      "intro": "વેબસાઇટની પૂછપરછ અને બ્રાઉઝર માહિતીના ઉપયોગ અંગે.",
      "sections": [
        [
          "સંપર્ક",
          "આ વેબસાઇટ બી ટી ગઢવી એડવોકેટ અને નોટરી, ગાંધીનગર, ગુજરાત વિશે માહિતી આપે છે. ગોપનીયતા અંગે પ્રશ્નો, વિનંતીઓ અથવા ફરિયાદો માટે ઓફિસનો <a href=\"mailto:btgadhavi78@gmail.com\">btgadhavi78@gmail.com</a> પર સંપર્ક કરો."
        ],
        [
          "તમે આપતી માહિતી",
          "પૂછપરછ ફોર્મમાં નામ, ટેલિફોન નંબર, બાબતનો પ્રકાર, ટૂંકી બિન-ગુપ્ત માહિતી અને સંમતિ જરૂરી છે. ઇમેઇલ, પસંદની ભાષા, કોર્ટ અથવા સત્તાધિકારી, કેસ નંબર અને સુનાવણીની તારીખ અથવા સમયમર્યાદા વૈકલ્પિક છે. પ્રાથમિક પૂછપરછ માટે જરૂરી માહિતી જ આપો."
        ],
        [
          "ઇમેઇલ ફોર્મ કેવી રીતે કામ કરે છે",
          "ફોર્મ તમારી ઇમેઇલ ઍપમાં mailto ડ્રાફ્ટ તૈયાર કરે છે. તે વેબસાઇટ સર્વરને ફોર્મ મોકલતું નથી કે ફોર્મની વિગતો વેબસાઇટના બ્રાઉઝર સ્ટોરેજમાં સાચવતું નથી. ઇમેઇલ તમે જાતે તપાસીને મોકલવાનો છે. તમારી ઇમેઇલ સેવા પોતાની શરતો મુજબ ડ્રાફ્ટ અને સંદેશ સંભાળે છે. ઇમેઇલથી પ્રાપ્તિ, મુલાકાત અથવા બાબતની સ્વીકૃતિની પુષ્ટિ થતી નથી."
        ],
        [
          "હેતુ અને પસંદગી",
          "ઓફિસને મોકલેલી માહિતીનો ઉપયોગ પૂછપરછનો જવાબ આપવા, હિતસંઘર્ષ અને ઉપલબ્ધતા તપાસવા તથા મુલાકાત ગોઠવવા થાય છે. વ્યાવસાયિક નિમણૂક માટે અલગ સંમતિ જરૂરી છે. માહિતી આપવા ન ઇચ્છતા હો તો પૂછપરછ મોકલ્યા વગર માહિતીવાળા પાનાં જોઈ શકો છો."
        ],
        [
          "સંવેદનશીલ અને ગુપ્ત માહિતી",
          "પ્રાથમિક પૂછપરછમાં પાસવર્ડ, બેંકિંગ ઓળખ, ઓળખપત્રો, વિશેષાધિકાર ધરાવતો પત્રવ્યવહાર અથવા કેસના વિગતવાર દસ્તાવેજો મોકલશો નહીં. ગુપ્ત માહિતી આપતા પહેલાં યોગ્ય માધ્યમ વિશે ઓફિસને પૂછો. માત્ર સંપર્ક કરવાથી વકીલ-મુવક્કિલ સંબંધ બનતો નથી."
        ],
        [
          "સેવા પ્રદાતાઓ અને ટેક્નિકલ માહિતી",
          "હોસ્ટિંગ અને ઇમેઇલ સેવા પ્રદાતાઓ સેવા આપવા માટે IP સરનામું, બ્રાઉઝરની માહિતી અને ઍક્સેસ લૉગ જેવી ટેક્નિકલ માહિતી પ્રક્રિયા કરી શકે છે. વેબસાઇટ Google Fonts લોડ કરે છે, તેથી Googleને વિનંતીઓ જાય છે અને તમારું IP સરનામું તથા બ્રાઉઝર/વિનંતીની માહિતી મળી શકે છે. સેવા પ્રદાતાઓની પ્રક્રિયા તેમની પોતાની નીતિઓને આધીન છે. લાગુ કાયદા મુજબ જરૂરી હોય ત્યારે માહિતી જાહેર પણ કરવી પડી શકે છે."
        ],
        [
          "માહિતી જાળવણી",
          "પૂછપરછનો જવાબ આપવા, અનુગામી નિમણૂક સંભાળવા અથવા લાગુ કાનૂની અને વ્યાવસાયિક ફરજો માટે જરૂરી હોય તેટલા સમય સુધી જ માહિતી રાખવી જોઈએ. તમારા પત્રવ્યવહારની જાળવણી વિશે ઓફિસને પૂછો. આ વેબસાઇટ ઇમેઇલ આપમેળે કાઢી નાખવાની કોઈ સમયમર્યાદા અમલમાં મૂકતી નથી."
        ],
        [
          "વિનંતીઓ, સંમતિ પાછી ખેંચવી અને ફરિયાદો",
          "તમે આપેલી માહિતી મેળવવા, સુધારવા, અપડેટ કરવા અથવા લાગુ પડતું હોય ત્યાં કાઢી નાખવા, આગળની પૂછપરછ પ્રક્રિયા માટે સંમતિ પાછી ખેંચવા કે ફરિયાદ કરવા <a href=\"mailto:btgadhavi78@gmail.com\">btgadhavi78@gmail.com</a> પર લખો. બિનજરૂરી સંવેદનશીલ દસ્તાવેજો વગર વિનંતી સમજાવો. ઓળખની ચકાસણી જરૂરી બની શકે છે. સંમતિ પાછી ખેંચવાથી ઓફિસનો પ્રતિસાદ મર્યાદિત થઈ શકે છે અને અગાઉની કાયદેસર પ્રક્રિયા રદ થતી નથી. કાયદા મુજબ જરૂરી જાળવણી અથવા જાહેર કરવાની ફરજ લાગુ રહી શકે છે."
        ],
        [
          "સુરક્ષા",
          "ઇમેઇલ અને ઇન્ટરનેટ સંચાર સંપૂર્ણ સુરક્ષિત હોવાની ખાતરી આપી શકાતી નથી. પ્રાથમિક પૂછપરછમાં બિન-ગુપ્ત માહિતી જ આપો અને સંવેદનશીલ માહિતી મોકલતા પહેલાં ઓફિસનો સંપર્ક કરો. આ વેબસાઇટ સુરક્ષિત દસ્તાવેજ અપલોડ સુવિધા આપતી નથી."
        ],
        [
          "બ્રાઉઝર સ્ટોરેજ અને ફેરફારો",
          "પ્રવેશ ડિસ્ક્લેમરની સ્વીકૃતિ યાદ રાખવા સાઇટ localStorageમાં <code>btg_ack</code> વાપરે છે. પૂરા પાડેલા સાઇટ કોડમાં જાહેરાત અથવા એનાલિટિક્સ ટ્રૅકર નથી. વિગતો માટે <a href=\"cookie-policy.html\">કૂકીઝ અને બ્રાઉઝર સ્ટોરેજ નીતિ</a> જુઓ. વેબસાઇટની સુવિધાઓ અથવા પદ્ધતિઓ બદલાય ત્યારે આ સૂચના સુધારવામાં આવી શકે છે."
        ]
      ]
    }
  },
  "terms": {
    "en": {
      "title": "Terms of Website Use",
      "intro": "Conditions for using this information website.",
      "sections": [
        [
          "General information only",
          "This website provides general information about the practice and legal topics. It is not legal advice or a substitute for advice on the facts of a particular matter. Laws and procedures can change. Do not rely on this website to calculate or meet a legal deadline."
        ],
        [
          "No automatic professional engagement",
          "Browsing, acknowledging the disclaimer or sending an enquiry does not create an advocate-client relationship. Acceptance requires conflict and availability checks, review of the matter and a separately confirmed professional engagement. Do not send confidential documents until the office confirms an appropriate arrangement."
        ],
        [
          "No assurance of results",
          "No result, timeline or outcome is guaranteed. Information on practice areas or professional experience is not a prediction of the outcome of any matter."
        ],
        [
          "Responsible use",
          "Use the website lawfully. Do not submit false or unlawful material, impersonate others, interfere with the website or attempt unauthorised access."
        ],
        [
          "Website materials",
          "Original text, design, logos and other materials are subject to applicable intellectual property rights. Reuse requires permission unless allowed by law. Third-party materials remain subject to their respective rights and licences."
        ],
        [
          "External services and availability",
          "External websites and services have their own terms and privacy practices. Links do not guarantee their accuracy or availability. This website may be unavailable or contain errors; contact the office to confirm information relevant to your matter."
        ],
        [
          "Fees and appointments",
          "This website does not take online payments or confirm appointments automatically. Any professional fees, scope of work and cancellation arrangements are agreed separately with the office."
        ],
        [
          "Applicable law and contact",
          "Website use is subject to applicable Indian law. Nothing here excludes rights or liabilities that cannot lawfully be excluded. For questions contact <a href=\"mailto:btgadhavi78@gmail.com\">btgadhavi78@gmail.com</a>. Also read the <a href=\"privacy-policy.html\">Privacy Policy</a> and <a href=\"disclaimer.html\">Disclaimer</a>."
        ]
      ]
    },
    "gu": {
      "title": "વેબસાઇટ ઉપયોગની શરતો",
      "intro": "આ માહિતીપ્રદ વેબસાઇટના ઉપયોગની શરતો.",
      "sections": [
        [
          "માત્ર સામાન્ય માહિતી",
          "આ વેબસાઇટ પ્રેક્ટિસ અને કાનૂની વિષયો વિશે સામાન્ય માહિતી આપે છે. તે કાનૂની સલાહ નથી અને ચોક્કસ બાબતના તથ્યો પરની સલાહનો વિકલ્પ નથી. કાયદા અને પ્રક્રિયાઓ બદલાઈ શકે છે. કાનૂની સમયમર્યાદા ગણવા કે પાળવા આ વેબસાઇટ પર આધાર રાખશો નહીં."
        ],
        [
          "આપમેળે વ્યાવસાયિક નિમણૂક થતી નથી",
          "વેબસાઇટ જોવાથી, ડિસ્ક્લેમર સ્વીકારવાથી કે પૂછપરછ મોકલવાથી વકીલ-મુવક્કિલ સંબંધ બનતો નથી. સ્વીકૃતિ માટે હિતસંઘર્ષ અને ઉપલબ્ધતાની તપાસ, બાબતની સમીક્ષા અને અલગથી પુષ્ટિ કરેલી વ્યાવસાયિક નિમણૂક જરૂરી છે. ઓફિસ યોગ્ય વ્યવસ્થાની પુષ્ટિ કરે ત્યાં સુધી ગુપ્ત દસ્તાવેજો મોકલશો નહીં."
        ],
        [
          "પરિણામની ખાતરી નથી",
          "કોઈ પરિણામ, સમયગાળો કે બાબતના નિષ્કર્ષની ખાતરી આપવામાં આવતી નથી. કાર્યક્ષેત્ર અથવા વ્યાવસાયિક અનુભવની માહિતી કોઈ બાબતના પરિણામની આગાહી નથી."
        ],
        [
          "જવાબદાર ઉપયોગ",
          "વેબસાઇટનો કાયદેસર ઉપયોગ કરો. ખોટી અથવા ગેરકાયદેસર સામગ્રી મોકલશો નહીં, બીજાની ઓળખ ધારણ કરશો નહીં, વેબસાઇટમાં વિક્ષેપ પાડશો નહીં કે અનધિકૃત પ્રવેશનો પ્રયાસ કરશો નહીં."
        ],
        [
          "વેબસાઇટની સામગ્રી",
          "મૂળ લખાણ, ડિઝાઇન, લોગો અને અન્ય સામગ્રી લાગુ બૌદ્ધિક સંપત્તિના અધિકારોને આધીન છે. કાયદા હેઠળ મંજૂરી ન હોય તો પુનઃઉપયોગ માટે પરવાનગી જરૂરી છે. તૃતીય પક્ષની સામગ્રી તેમના અધિકારો અને લાઇસન્સને આધીન રહે છે."
        ],
        [
          "બાહ્ય સેવાઓ અને ઉપલબ્ધતા",
          "બાહ્ય વેબસાઇટો અને સેવાઓની પોતાની શરતો અને ગોપનીયતા પદ્ધતિઓ હોય છે. લિંક તેમની ચોકસાઈ કે ઉપલબ્ધતાની ખાતરી નથી. આ વેબસાઇટ ઉપલબ્ધ ન હોય અથવા તેમાં ભૂલો હોય શકે છે; તમારી બાબતને લગતી માહિતીની પુષ્ટિ માટે ઓફિસનો સંપર્ક કરો."
        ],
        [
          "ફી અને મુલાકાત",
          "આ વેબસાઇટ ઑનલાઇન ચુકવણી લેતી નથી કે મુલાકાતની આપમેળે પુષ્ટિ કરતી નથી. વ્યાવસાયિક ફી, કામનો વ્યાપ અને રદ કરવાની વ્યવસ્થા ઓફિસ સાથે અલગથી નક્કી થાય છે."
        ],
        [
          "લાગુ કાયદો અને સંપર્ક",
          "વેબસાઇટનો ઉપયોગ લાગુ ભારતીય કાયદાને આધીન છે. કાયદેસર રીતે દૂર ન કરી શકાય એવા અધિકારો કે જવાબદારીઓને અહીં દૂર કરવામાં આવતાં નથી. પ્રશ્નો માટે <a href=\"mailto:btgadhavi78@gmail.com\">btgadhavi78@gmail.com</a> પર સંપર્ક કરો. <a href=\"privacy-policy.html\">ગોપનીયતા નીતિ</a> અને <a href=\"disclaimer.html\">ડિસ્ક્લેમર</a> પણ વાંચો."
        ]
      ]
    }
  },
  "cookies": {
    "en": {
      "title": "Cookies & Browser Storage",
      "intro": "What this website remembers in your browser.",
      "sections": [
        [
          "Cookies and localStorage",
          "Cookies and localStorage are different browser technologies. The supplied website code does not set cookies or include advertising or analytics trackers. It uses localStorage for the entry disclaimer acknowledgement. Hosting providers may separately process request logs; this notice does not describe an audit of their systems."
        ],
        [
          "The btg_ack entry",
          "Name: <code>btg_ack</code>. Value: <code>1</code>. Purpose: remember that you acknowledged the website entry disclaimer. Location: localStorage for the current website origin in this browser. It contains no enquiry fields and is not analytics or marketing consent. No automatic expiry is set; it remains until site data is cleared or the browser removes it. A different browser, device or domain may show the disclaimer again."
        ],
        [
          "Control and clearing",
          "You can block or clear site data in your browser settings. Clearing this entry resets the acknowledgement and the disclaimer may appear again. If storage is unavailable, you can still continue, but the acknowledgement will not be remembered after navigation or reload. The legal information pages remain readable without accepting the entry disclaimer."
        ],
        [
          "Google Fonts and email",
          "Styles load fonts from Google Fonts. This causes external requests and may share your IP address and browser/request information with Google even though this site has no analytics tracker. The enquiry form opens your email app; it does not save form values in localStorage. See the <a href=\"privacy-policy.html\">Privacy Policy</a>."
        ],
        [
          "Future changes and questions",
          "If optional tracking features are added, this notice and any applicable choice controls must be updated before those features are enabled. For questions about current browser storage, contact <a href=\"mailto:btgadhavi78@gmail.com\">btgadhavi78@gmail.com</a>."
        ]
      ]
    },
    "gu": {
      "title": "કૂકીઝ અને બ્રાઉઝર સ્ટોરેજ",
      "intro": "આ વેબસાઇટ તમારા બ્રાઉઝરમાં શું યાદ રાખે છે.",
      "sections": [
        [
          "કૂકીઝ અને localStorage",
          "કૂકીઝ અને localStorage બ્રાઉઝરની અલગ તકનીકો છે. પૂરા પાડેલો વેબસાઇટ કોડ કૂકીઝ સેટ કરતો નથી અને તેમાં જાહેરાત કે એનાલિટિક્સ ટ્રૅકર નથી. તે પ્રવેશ ડિસ્ક્લેમરની સ્વીકૃતિ માટે localStorage વાપરે છે. હોસ્ટિંગ પ્રદાતાઓ અલગથી વિનંતીના લૉગ પ્રક્રિયા કરી શકે છે; આ સૂચના તેમની સિસ્ટમોના ઑડિટનું વર્ણન નથી."
        ],
        [
          "btg_ack એન્ટ્રી",
          "નામ: <code>btg_ack</code>. મૂલ્ય: <code>1</code>. હેતુ: તમે પ્રવેશ ડિસ્ક્લેમર સ્વીકાર્યો તે યાદ રાખવો. સ્થાન: આ બ્રાઉઝરમાં વર્તમાન વેબસાઇટ ઓરિજિનનું localStorage. તેમાં પૂછપરછની વિગતો નથી અને તે એનાલિટિક્સ કે માર્કેટિંગ માટેની સંમતિ નથી. આપમેળે સમાપ્તિનો સમય સેટ કરેલો નથી; સાઇટ ડેટા સાફ થાય અથવા બ્રાઉઝર દૂર કરે ત્યાં સુધી રહે છે. બીજા બ્રાઉઝર, ઉપકરણ કે ડોમેન પર ડિસ્ક્લેમર ફરી દેખાઈ શકે છે."
        ],
        [
          "નિયંત્રણ અને સાફ કરવું",
          "બ્રાઉઝર સેટિંગ્સમાં સાઇટ ડેટા અટકાવી કે સાફ કરી શકો છો. આ એન્ટ્રી કાઢવાથી સ્વીકૃતિ રીસેટ થાય છે અને ડિસ્ક્લેમર ફરી દેખાઈ શકે છે. સ્ટોરેજ ઉપલબ્ધ ન હોય તો પણ આગળ વધી શકો છો, પરંતુ બીજા પાનાં પર જતાં કે રીલોડ કરતાં સ્વીકૃતિ યાદ રહેશે નહીં. પ્રવેશ ડિસ્ક્લેમર સ્વીકાર્યા વગર પણ કાનૂની માહિતીવાળા પાનાં વાંચી શકાય છે."
        ],
        [
          "Google Fonts અને ઇમેઇલ",
          "સ્ટાઇલ્સ Google Fonts પરથી ફોન્ટ લોડ કરે છે. તેથી બાહ્ય વિનંતીઓ થાય છે અને સાઇટમાં એનાલિટિક્સ ટ્રૅકર ન હોવા છતાં તમારું IP સરનામું તથા બ્રાઉઝર/વિનંતીની માહિતી Googleને મળી શકે છે. પૂછપરછ ફોર્મ તમારી ઇમેઇલ ઍપ ખોલે છે; ફોર્મની વિગતો localStorageમાં સાચવતું નથી. <a href=\"privacy-policy.html\">ગોપનીયતા નીતિ</a> જુઓ."
        ],
        [
          "ભવિષ્યના ફેરફારો અને પ્રશ્નો",
          "વૈકલ્પિક ટ્રૅકિંગ સુવિધાઓ ઉમેરાય તો તેને ચાલુ કરતાં પહેલાં આ સૂચના અને લાગુ પડતાં પસંદગીના નિયંત્રણો સુધારવા જરૂરી છે. વર્તમાન બ્રાઉઝર સ્ટોરેજ વિશે પ્રશ્નો માટે <a href=\"mailto:btgadhavi78@gmail.com\">btgadhavi78@gmail.com</a> પર સંપર્ક કરો."
        ]
      ]
    }
  }
};

function renderLegalPolicy(key) {
  const p = legalPolicies[key][lang];
  return `${pageHero(p.title, p.intro)}<section class="section"><div class="container policy">
    <p>${isGu ? "છેલ્લો સુધારો: 25 સપ્ટેમ્બર 2026" : "Last updated: 25 September 2026"}</p>
    ${p.sections.map(([heading, copy]) => `<h2>${heading}</h2><p>${copy}</p>`).join("")}
    </div></section>${renderCTA()}`;
}
function renderPrivacy() { return renderLegalPolicy("privacy"); }
function renderTerms() { return renderLegalPolicy("terms"); }
function renderCookies() { return renderLegalPolicy("cookies"); }

/* =========================================================
   GLOBAL CTA
========================================================= */

function renderCTA() {

  return `

    <section class="cta">

      <div class="container cta-inner">

        <div>

          <div
            class="eyebrow"
            style="
              color:white;
              opacity:.78
            "
          >

            ${
              isGu
                ? "મુલાકાત અને પૂછપરછ"
                : "Appointments & Enquiries"
            }

          </div>

          <h2>

            ${
              isGu
                ? "ઓફિસનો સંપર્ક કરો"
                : "Contact the Office"
            }

          </h2>

        </div>


        <div
          class="btns"
          style="margin-top:0"
        >

          <a
            class="btn btn-light"
            href="${urlForPage("contact")}"
          >

            ${
              isGu
                ? "મુલાકાત માટે વિનંતી કરો"
                : "Request an Appointment"
            }

          </a>

          <a
            class="btn btn-outline"
            href="${urlForPage("contact")}"
          >

            ${
              isGu
                ? "ઓફિસનો સંપર્ક કરો"
                : "Contact the Office"
            }

          </a>

        </div>

      </div>

    </section>
  `;
}


/* =========================================================
   PAGE ROUTER
========================================================= */

function renderPage() {

  const target =
    document.getElementById("page-content");

  const map = {

    home:
      renderHome,

    about:
      renderAbout,

    practice:
      renderPracticeOverview,

    "practice-detail":
      renderPracticeDetail,

    courts:
      renderCourtsPage,

    insights:
      renderInsightsPage,

    contact:
      renderContact,

    disclaimer:
      renderDisclaimer,

    privacy:
      renderPrivacy,
    terms: renderTerms,
    cookies: renderCookies

  };

  target.innerHTML =
    map[page]
      ? map[page]()
      : renderHome();
}


/* =========================================================
   DISCLAIMER MODAL
========================================================= */

function renderEntryDisclaimer() {

  if (["privacy", "terms", "cookies", "disclaimer"].includes(page)) return;
  try {
    if (localStorage.getItem("btg_ack") === "1") return;
  } catch (_) { /* Storage may be blocked; allow this visit to continue. */ }

  const modal =
    document.createElement("div");

  modal.className =
    "modal open";


  modal.innerHTML = `

    <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="entryDisclaimerTitle">

      <div class="eyebrow">

        ${
          isGu
            ? "વેબસાઇટ પ્રવેશ ડિસ્ક્લેમર"
            : "Website Entry Disclaimer"
        }

      </div>

      <h2 id="entryDisclaimerTitle">

        ${
          isGu
            ? "સામાન્ય માહિતી માટેની વેબસાઇટ"
            : "General Information Website"
        }

      </h2>

      <p>

        ${
          isGu
            ? "આ વેબસાઇટ એડવોકેટ ભુપતદાન ટી. ગઢવીની વ્યાવસાયિક વિગતો અને ગાંધીનગર, ગુજરાત ખાતેની કાનૂની પ્રેક્ટિસ અંગે સામાન્ય માહિતી માટે છે."
            : "This website provides general information about Adv. Bhupatdan T. Gadhavi and his legal practice in Gandhinagar, Gujarat."
        }

      </p>

      <p>

        ${
          isGu
            ? "આ સામગ્રી કાનૂની સલાહ નથી અને ઓફિસનો સંપર્ક કરવાથી આપમેળે વકીલ-મુવક્કિલ સંબંધ સ્થાપિત થતો નથી."
            : "The material does not constitute legal advice and contacting the office does not automatically create an advocate-client relationship."
        }

      </p>

      <p>

        ${
          isGu
            ? "કોઈ પણ બાબતની સ્વીકૃતિ હિતસંઘર્ષની તપાસ, અધિકારક્ષેત્ર, દસ્તાવેજોની સમીક્ષા, વ્યાવસાયિક ફી અને ઔપચારિક નિમણૂકને આધીન છે."
            : "Acceptance of any matter is subject to conflict checks, jurisdiction, document review, professional fees and formal engagement."
        }

      </p>


      <p><a href="${urlForPage("privacy")}">${isGu ? "ગોપનીયતા નીતિ" : "Privacy Policy"}</a> · <a href="${urlForPage("terms")}">${isGu ? "ઉપયોગની શરતો" : "Terms"}</a> · <a href="${urlForPage("cookies")}">${isGu ? "બ્રાઉઝર સ્ટોરેજ" : "Browser Storage"}</a></p>
      <div class="modal-actions">

        <button
          class="btn btn-dark"
          id="acceptDisclaimer"
        >

          ${
            isGu
              ? "હું સમજ્યો છું અને આગળ વધવા ઇચ્છું છું"
              : "I Understand and Wish to Continue"
          }

        </button>


        <button
          class="btn"
          id="exitWebsite"
          style="border:1px solid var(--line)"
        >

          ${
            isGu
              ? "વેબસાઇટમાંથી બહાર નીકળો"
              : "Exit Website"
          }

        </button>

      </div>

    </div>
  `;


  const previousFocus = document.activeElement;
  const background = Array.from(document.body.children).filter(el => el.tagName !== "SCRIPT");
  const inertStates = background.map(el => [el, el.inert]);
  const previousOverflow = document.body.style.overflow;
  background.forEach(el => { el.inert = true; });
  document.body.style.overflow = "hidden";
  document.body.appendChild(modal);
  const focusables = Array.from(modal.querySelectorAll("a[href], button"));
  modal.addEventListener("keydown", event => {
    if (event.key === "Tab") {
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  document.getElementById("acceptDisclaimer").focus();


  document
    .getElementById("acceptDisclaimer")
    .onclick = () => {

      try { localStorage.setItem("btg_ack", "1"); } catch (_) { /* Continue without persistence. */ }
      modal.remove();
      inertStates.forEach(([el, state]) => { el.inert = state; });
      document.body.style.overflow = previousOverflow;
      if (previousFocus && previousFocus !== document.body) previousFocus.focus();
      else document.querySelector(".brand")?.focus();

    };


  document
    .getElementById("exitWebsite")
    .onclick = () => {

      window.location.href =
        "https://www.google.com/";

    };
}


/* =========================================================
   HEADER BEHAVIOUR
========================================================= */

function setupHeader() {
  const header = document.getElementById("header");
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  const mobile = window.matchMedia("(max-width: 1050px)");
  const sync = () => {
    const open = nav.classList.contains("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", isGu ? (open ? "નેવિગેશન બંધ કરો" : "નેવિગેશન ખોલો") : (open ? "Close navigation" : "Open navigation"));
    nav.inert = mobile.matches && !open;
  };
  const close = () => { nav.classList.remove("open"); sync(); };
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), {passive: true});
  toggle.addEventListener("click", () => { nav.classList.toggle("open"); sync(); });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && nav.classList.contains("open")) { close(); toggle.focus(); }
  });
  mobile.addEventListener("change", close);
  sync();
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function setupReveal() {

  const els =
    document.querySelectorAll(".reveal");


  if (
    !("IntersectionObserver" in window)
  ) {

    els.forEach(
      x => x.classList.add("visible")
    );

    return;
  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry
                .target
                .classList
                .add("visible");

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: .08
      }
    );


  els.forEach(
    x => observer.observe(x)
  );
}


/* =========================================================
   CONTACT FORM
========================================================= */

function setupContactForm() {

  const form =
    document.getElementById("contactForm");

  if (!form) {
    return;
  }


  form.addEventListener(
    "submit",
    e => {

      e.preventDefault();
      if (!form.reportValidity()) return;

      const f =
        new FormData(form);


      const subject =
        encodeURIComponent(
          `Website enquiry - ${
            f.get("matter") ||
            "Legal matter"
          }`
        );


      const body =
        encodeURIComponent(
`Name: ${f.get("name")}
Telephone: ${f.get("phone")}
Email: ${f.get("email")}
Preferred language: ${f.get("language")}
Type of matter: ${f.get("matter")}
Court / Authority: ${f.get("court")}
Case number: ${f.get("case")}
Next hearing / deadline: ${f.get("deadline")}

Brief non-confidential summary:
${f.get("summary")}

Privacy consent: given for enquiry response, conflict/availability checks and appointment arrangements.
Privacy notice version: 25 September 2026`
        );


      window.location.href =
        `mailto:btgadhavi78@gmail.com?subject=${subject}&body=${body}`;

    }
  );
}


/* =========================================================
   STRUCTURED DATA
========================================================= */

function injectFavicon() {
  let icon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
  if (!icon) {
    icon = document.createElement("link");
    icon.rel = "icon";
    document.head.appendChild(icon);
  }
  icon.type = "image/png";
  icon.removeAttribute("sizes");
  icon.href = imagePath("btg-logo.png");
}

function injectSchema() {

  // Current served directory, including any project subpath and language.
  // This is not a declaration of the final canonical domain.
  if (!/^https?:$/.test(window.location.protocol)) return;
  const base = new URL("./", window.location.href).href;


  let schema;


  if (
    page === "home"
  ) {

    schema = {

      "@context":
        "https://schema.org",

      "@type":
        "LegalService",

      "name":
        "B T Gadhavi Advocate & Notary",

      "url":
        base,

      "telephone":
        "+91-96872-75908",

      "email":
        "btgadhavi78@gmail.com",

      "address": {

        "@type":
          "PostalAddress",

        "addressLocality":
          "Gandhinagar",

        "addressRegion":
          "Gujarat",

        "addressCountry":
          "IN"

      },

      "areaServed": {

        "@type":
          "City",

        "name":
          "Gandhinagar"

      },

      "knowsLanguage": [
        "Gujarati",
        "Hindi",
        "English"
      ]

    };

  }


  if (
    page === "practice-detail"
  ) {

    const item =
      practiceAreas.find(
        x => x.slug === slug
      );


    schema = {

      "@context":
        "https://schema.org",

      "@type":
        "BreadcrumbList",

      "itemListElement": [

        {
          "@type":
            "ListItem",

          "position":
            1,

          "name":
            "Home",

          "item":
            base
        },

        {
          "@type":
            "ListItem",

          "position":
            2,

          "name":
            "Practice Areas",

          "item":
            `${base}practice-areas.html`
        },

        {
          "@type":
            "ListItem",

          "position":
            3,

          "name":
            item?.en.title ||
            "Practice Area"
        }

      ]

    };

  }


  if (!schema) {
    return;
  }


  const script =
    document.createElement("script");

  script.type =
    "application/ld+json";

  script.textContent =
    JSON.stringify(schema);


  document.head.appendChild(script);
}


/* =========================================================
   INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    injectFavicon();

    renderHeader();

    renderPage();

    renderFooter();

    setupHeader();

    setupContactForm();

    requestAnimationFrame(
      setupReveal
    );

    injectSchema();

    renderEntryDisclaimer();

  }
);

/* =========================================================
   BASIC SOURCE-CODE DETERRENCE
========================================================= */

document.addEventListener("keydown", function (event) {

  const key = event.key.toLowerCase();

  // Ctrl + U
  if (
    event.ctrlKey &&
    key === "u"
  ) {
    event.preventDefault();
    return false;
  }

  // F12
  if (
    event.key === "F12"
  ) {
    event.preventDefault();
    return false;
  }

  // Ctrl + Shift + I
  if (
    event.ctrlKey &&
    event.shiftKey &&
    key === "i"
  ) {
    event.preventDefault();
    return false;
  }

  // Ctrl + Shift + J
  if (
    event.ctrlKey &&
    event.shiftKey &&
    key === "j"
  ) {
    event.preventDefault();
    return false;
  }

  // Ctrl + Shift + C
  if (
    event.ctrlKey &&
    event.shiftKey &&
    key === "c"
  ) {
    event.preventDefault();
    return false;
  }

});
