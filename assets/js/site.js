const lang = document.documentElement.lang.startsWith("gu") ? "gu" : "en";
const isGu = lang === "gu";

const page = document.body.dataset.page || "home";
const slug = document.body.dataset.slug || "";

const root = isGu ? "../" : "";
const guPrefix = isGu ? "" : "gu/";

const files = {
  home: "index.html",
  about: "about.html",
  practice: "practice-areas.html",
  courts: "courts-forums.html",
  insights: "insights.html",
  contact: "contact.html",
  disclaimer: "disclaimer.html",
  privacy: "privacy-policy.html"
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

const practiceAreas = [
  {
    slug: "civil-commercial",
    en: {
      title: "Civil & Commercial Litigation",
      short: "Civil suits, injunctions, recovery, contracts, property disputes, execution, appeals and settlement.",
      intro: "Advice and representation may be undertaken in civil suits and commercial disputes involving declaration, injunction, possession, recovery, summary suits, specific performance, partition, succession, contractual disputes, partnership disputes, execution proceedings, appeals, revisions, mediation and settlement.",
      points: [
        ["Civil Suits", "Declaration, possession, injunction and other civil proceedings subject to facts and jurisdiction."],
        ["Recovery", "Recovery and execution proceedings based on the relevant record and applicable procedure."],
        ["Commercial Disputes", "Contractual, partnership and other business-related disputes."],
        ["Appeals & Revisions", "Appellate or revisional proceedings where legally maintainable."]
      ]
    },
    gu: {
      title: "સિવિલ અને વાણિજ્યિક કેસો",
      short: "દાવા, મનાઈહુકમ, વસૂલાત, કરાર, મિલકત વિવાદ, અમલવારી, અપીલ અને સમાધાન.",
      intro: "જાહેરાતના દાવા, મનાઈહુકમ, કબજો, નાણાં વસૂલાત, સમરી સૂટ, ચોક્કસ પાલન, ભાગલા, વારસાઈ, કરારભંગ, ભાગીદારી અથવા વ્યાપારી વિવાદ, ડિક્રીની અમલવારી, અપીલ, રિવિઝન, મીડિયેશન અને સમાધાન સંબંધિત સલાહ તથા રજૂઆત હાથ ધરવામાં આવી શકે છે.",
      points: [
        ["સિવિલ દાવા", "જાહેરાત, કબજો, મનાઈહુકમ અને અન્ય લાગુ સિવિલ કાર્યવાહી."],
        ["વસૂલાત", "રેકોર્ડ અને લાગુ પ્રક્રિયા મુજબ વસૂલાત અને અમલવારી બાબતો."],
        ["વ્યાપારી વિવાદ", "કરાર, ભાગીદારી અને અન્ય વ્યવસાયિક વિવાદો."],
        ["અપીલ અને રિવિઝન", "કાયદેસર રીતે જાળવાય ત્યાં અપીલ અથવા રિવિઝન કાર્યવાહી."]
      ]
    }
  },

  {
    slug: "criminal-law",
    en: {
      title: "Criminal Law & Proceedings",
      short: "Complaints, FIR-related proceedings, bail, remand, discharge, trial, revision and appeal.",
      intro: "Advice and representation may be undertaken in criminal complaints, FIR-related proceedings, anticipatory and regular bail, remand, discharge, trial, revision and appeal, as applicable. Strategy depends on the record, stage of investigation or trial and governing criminal law.",
      points: [
        ["FIR Proceedings", "Procedural advice and representation in FIR-related matters as applicable."],
        ["Bail", "Anticipatory and regular bail proceedings depending on the record and stage."],
        ["Trial Proceedings", "Defence, complainant or victim-related assistance where professionally permissible."],
        ["Revision & Appeal", "Revision or appellate proceedings based on applicable law and maintainability."]
      ]
    },
    gu: {
      title: "ફોજદારી કાયદો અને કાર્યવાહી",
      short: "ફરિયાદ, FIR, જામીન, રિમાન્ડ, ડિસ્ચાર્જ, ટ્રાયલ, રિવિઝન અને અપીલ.",
      intro: "ફોજદારી ફરિયાદ, FIR સંબંધિત કાર્યવાહી, આગોતરા અને નિયમિત જામીન, રિમાન્ડ, ડિસ્ચાર્જ, ટ્રાયલ, રિવિઝન અને અપીલમાં લાગુ પડતી સલાહ અને રજૂઆત હાથ ધરવામાં આવી શકે છે.",
      points: [
        ["FIR કાર્યવાહી", "લાગુ પડે ત્યાં FIR સંબંધિત પ્રક્રિયાત્મક સલાહ અને રજૂઆત."],
        ["જામીન", "રેકોર્ડ અને તબક્કા મુજબ આગોતરા અથવા નિયમિત જામીન કાર્યવાહી."],
        ["ટ્રાયલ", "લાગુ વ્યાવસાયિક નિયમો મુજબ ટ્રાયલ સંબંધિત સહાય."],
        ["રિવિઝન અને અપીલ", "લાગુ કાયદા મુજબ રિવિઝન અથવા અપીલ કાર્યવાહી."]
      ]
    }
  },

  {
    slug: "family-law",
    en: {
      title: "Family & Matrimonial Law",
      short: "Divorce, maintenance, domestic violence, child custody, visitation and family settlement.",
      intro: "Advice and representation may be undertaken in mutual-consent and contested divorce, maintenance, domestic violence proceedings, child custody and visitation, matrimonial complaints, family settlement and mediation.",
      points: [
        ["Divorce", "Mutual-consent and contested divorce proceedings depending on facts and law."],
        ["Maintenance", "Maintenance proceedings and execution where applicable."],
        ["Child Custody", "Custody and visitation matters with appropriate consideration of the child's welfare."],
        ["Settlement & Mediation", "Settlement or mediation may be considered where suitable."]
      ]
    },
    gu: {
      title: "ફેમિલી અને લગ્નવિષયક કાયદો",
      short: "છૂટાછેડા, ભરણપોષણ, ઘરેલુ હિંસા, બાળકની કસ્ટડી અને પારિવારિક સમાધાન.",
      intro: "પરસ્પર સંમતિ અથવા વિવાદિત છૂટાછેડા, ભરણપોષણ, ઘરેલુ હિંસા, બાળકની કસ્ટડી અને મુલાકાતનો હક, લગ્નજીવન સંબંધિત ફરિયાદ, પારિવારિક સમાધાન અને મીડિયેશન બાબતો હાથ ધરવામાં આવી શકે છે.",
      points: [
        ["છૂટાછેડા", "હકીકત અને કાયદા મુજબ પરસ્પર સંમતિ અથવા વિવાદિત કાર્યવાહી."],
        ["ભરણપોષણ", "લાગુ પડે ત્યાં ભરણપોષણ અને અમલવારી."],
        ["બાળકની કસ્ટડી", "બાળકના કલ્યાણને ધ્યાનમાં રાખી કસ્ટડી અને મુલાકાત બાબતો."],
        ["સમાધાન", "યોગ્ય પરિસ્થિતિમાં સમાધાન અથવા મીડિયેશન."]
      ]
    }
  },

  {
    slug: "consumer-law",
    en: {
      title: "Consumer Protection",
      short: "Consumer disputes concerning insurance, banking, housing, goods and services.",
      intro: "Consumer complaint, reply, evidence, written argument, execution and appeal work may be undertaken in disputes relating to insurance, banking, housing, defective goods and deficiency in services.",
      points: [
        ["Consumer Complaints", "Complaint and reply proceedings before the appropriate consumer forum."],
        ["Insurance Disputes", "Consumer matters involving insurance claims and policy disputes."],
        ["Banking Disputes", "Consumer issues relating to banking services where maintainable."],
        ["Execution & Appeal", "Execution and appellate proceedings under the applicable framework."]
      ]
    },
    gu: {
      title: "ગ્રાહક સુરક્ષા",
      short: "વીમા, બેંકિંગ, હાઉસિંગ, વસ્તુ અને સેવામાં ખામી સંબંધિત ગ્રાહક કાર્યવાહી.",
      intro: "વીમા, બેંકિંગ, હાઉસિંગ અથવા ડેવલપમેન્ટ, ખામીવાળી વસ્તુ અને સેવામાં ખામી સંબંધિત ગ્રાહક ફરિયાદ, જવાબ, પુરાવા, લેખિત દલીલ, અમલવારી અને અપીલ હાથ ધરવામાં આવી શકે છે.",
      points: [
        ["ગ્રાહક ફરિયાદ", "યોગ્ય ગ્રાહક ફોરમ સમક્ષ ફરિયાદ અને જવાબ."],
        ["વીમા વિવાદ", "વીમા ક્લેમ અથવા પોલિસી સંબંધિત ગ્રાહક વિવાદ."],
        ["બેંકિંગ વિવાદ", "કાયદેસર રીતે જાળવાય ત્યાં બેંકિંગ સેવા સંબંધિત બાબતો."],
        ["અમલવારી અને અપીલ", "લાગુ કાયદા હેઠળ અમલવારી અથવા અપીલ."]
      ]
    }
  },

  {
    slug: "revenue-land",
    en: {
      title: "Revenue & Land Matters",
      short: "Mutation, RTS, agricultural land, tenure, tenancy, NA permission and revenue proceedings.",
      intro: "Proceedings concerning mutation entries, RTS disputes, certification or cancellation of entries, agricultural land, tenure conditions, tenancy, non-agricultural permission and other matters under applicable Gujarat revenue and land laws may be undertaken.",
      points: [
        ["Mutation & RTS", "Mutation entries, certification and RTS-related proceedings."],
        ["Agricultural Land", "Agricultural land and tenure-related matters."],
        ["Tenancy", "Tenancy proceedings before the appropriate authority or tribunal."],
        ["Revenue Appeals", "Appeals or revisions before competent revenue authorities."]
      ]
    },
    gu: {
      title: "મહેસૂલ અને જમીન બાબતો",
      short: "મ્યુટેશન એન્ટ્રી, RTS, ખેતીની જમીન, શરતો, ગણોત, બિનખેતી પરવાનગી અને મહેસૂલી કાર્યવાહી.",
      intro: "મ્યુટેશન એન્ટ્રી, RTS વિવાદ, એન્ટ્રી પ્રમાણિત અથવા રદ કરાવવાની કાર્યવાહી, ખેતીની જમીન, જમીનની શરતો, ગણોત, બિનખેતી પરવાનગી તથા લાગુ મહેસૂલ અને જમીન કાયદા હેઠળની બાબતો હાથ ધરવામાં આવી શકે છે.",
      points: [
        ["મ્યુટેશન અને RTS", "મ્યુટેશન એન્ટ્રી, પ્રમાણિત કરાવવી અને RTS કાર્યવાહી."],
        ["ખેતીની જમીન", "ખેતીની જમીન અને શરતો સંબંધિત બાબતો."],
        ["ગણોત", "યોગ્ય સત્તાધિકારી અથવા ટ્રિબ્યુનલ સમક્ષ ગણોત કાર્યવાહી."],
        ["મહેસૂલી અપીલ", "સક્ષમ મહેસૂલી સત્તાધિકારી સમક્ષ અપીલ અથવા રિવિઝન."]
      ]
    }
  },

  {
    slug: "property-title-registration",
    en: {
      title: "Property Title & Registration",
      short: "Title search, legal opinion, due diligence, conveyancing, stamp duty and registration.",
      intro: "Title search and legal opinion may include review of title chain, revenue records, Village Forms, 7/12 and 8-A extracts, mutation entries, property card, encumbrance material, tenure, non-agricultural status, town-planning implications and litigation.",
      points: [
        ["Title Search", "Review of available title documents and relevant public records."],
        ["Due Diligence", "Review of revenue, encumbrance and other relevant property material."],
        ["Documentation", "Agreements, conveyancing and other property-related documents as engaged."],
        ["Stamp & Registration", "Support concerning stamp duty and registration requirements."]
      ]
    },
    gu: {
      title: "મિલકત ટાઇટલ અને રજિસ્ટ્રેશન",
      short: "ટાઇટલ સર્ચ, કાનૂની અભિપ્રાય, મિલકત તપાસ, દસ્તાવેજ, સ્ટેમ્પ અને નોંધણી.",
      intro: "સ્થાવર મિલકતની ટાઇટલ સર્ચ માટે માલિકીની કડી, મહેસૂલી રેકોર્ડ, ગામ નમૂના, 7/12 અને 8-A ઉતારા, મ્યુટેશન એન્ટ્રી, પ્રોપર્ટી કાર્ડ, બોજા, જમીનની શરતો, બિનખેતી સ્થિતિ અને ટાઉન પ્લાનિંગ બાબતોની સમીક્ષા હાથ ધરવામાં આવી શકે છે.",
      points: [
        ["ટાઇટલ સર્ચ", "ઉપલબ્ધ ટાઇટલ દસ્તાવેજો અને સંબંધિત જાહેર રેકોર્ડની સમીક્ષા."],
        ["કાયદાકીય તપાસ", "મહેસૂલી, બોજા અને અન્ય મિલકત સંબંધિત માહિતીની સમીક્ષા."],
        ["દસ્તાવેજીકરણ", "લાગુ પડે ત્યાં મિલકત સંબંધિત કરાર અને દસ્તાવેજીકરણ."],
        ["સ્ટેમ્પ અને નોંધણી", "સ્ટેમ્પ ડ્યૂટી અને નોંધણી સંબંધિત સહાય."]
      ]
    }
  },

  {
    slug: "banking-finance",
    en: {
      title: "Banking, Finance & Recovery",
      short: "Loan documents, mortgage, recovery, SARFAESI, arbitration and NI Act matters.",
      intro: "Legal work may be undertaken for borrowers, lenders or institutions subject to professional obligations and conflict checks, including title investigation, mortgage creation or vetting, loan and security documentation, recovery proceedings, SARFAESI, arbitration and Negotiable Instruments Act matters.",
      points: [
        ["Loan Documentation", "Review or drafting of loan and security documents as engaged."],
        ["Mortgage", "Mortgage-related documentation and title review."],
        ["Recovery & SARFAESI", "Recovery and SARFAESI-related proceedings where applicable."],
        ["NI Act & Arbitration", "Negotiable Instruments Act and arbitration matters subject to jurisdiction."]
      ]
    },
    gu: {
      title: "બેંકિંગ, ફાઇનાન્સ અને વસૂલાત",
      short: "લોન દસ્તાવેજો, મોર્ગેજ, વસૂલાત, SARFAESI, આર્બિટ્રેશન અને NI Act બાબતો.",
      intro: "વ્યાવસાયિક ફરજો અને હિતસંઘર્ષની તપાસને આધીન રહી ઉધારકર્તા, ધિરાણકર્તા અથવા સંસ્થા માટે ટાઇટલ તપાસ, મોર્ગેજ, લોન અને સિક્યુરિટી દસ્તાવેજો, વસૂલાત, SARFAESI, આર્બિટ્રેશન અને NI Act સંબંધિત કામગીરી હાથ ધરવામાં આવી શકે છે.",
      points: [
        ["લોન દસ્તાવેજો", "લોન અને સિક્યુરિટી દસ્તાવેજોની સમીક્ષા અથવા ડ્રાફ્ટિંગ."],
        ["મોર્ગેજ", "મોર્ગેજ દસ્તાવેજો અને સંબંધિત ટાઇટલ તપાસ."],
        ["વસૂલાત અને SARFAESI", "લાગુ પડે ત્યાં વસૂલાત અને SARFAESI કાર્યવાહી."],
        ["NI Act અને આર્બિટ્રેશન", "અધિકારક્ષેત્રને આધીન NI Act અને આર્બિટ્રેશન બાબતો."]
      ]
    }
  },

  {
    slug: "insurance-mact",
    en: {
      title: "Insurance & Motor Accident Claims",
      short: "Insurance disputes, claim repudiation, consumer proceedings and motor accident claims.",
      intro: "Advice and representation may be undertaken in insurance-policy disputes, claim repudiation, consumer complaints, insurance recovery and motor accident claim matters.",
      points: [
        ["Insurance Claims", "Review of policy terms and claim-related material."],
        ["Claim Repudiation", "Disputes concerning rejection or repudiation of claims."],
        ["MACT", "Motor accident claim proceedings based on applicable records."],
        ["Consumer Proceedings", "Consumer remedies where the dispute falls within applicable jurisdiction."]
      ]
    },
    gu: {
      title: "વીમા અને મોટર અકસ્માત વળતર",
      short: "વીમા વિવાદ, ક્લેમ નામંજૂર થવો, ગ્રાહક કાર્યવાહી અને મોટર અકસ્માત વળતર.",
      intro: "વીમા પોલિસી સંબંધિત વિવાદ, ક્લેમ નામંજૂર થવો, ગ્રાહક ફરિયાદ, વીમા વસૂલાત અને મોટર અકસ્માત વળતર કેસોમાં લાગુ સલાહ અને રજૂઆત હાથ ધરવામાં આવી શકે છે.",
      points: [
        ["વીમા ક્લેમ", "પોલિસીની શરતો અને ક્લેમ રેકોર્ડની સમીક્ષા."],
        ["ક્લેમ નામંજૂર", "વીમા ક્લેમ નામંજૂર અથવા રદ થવા સંબંધિત વિવાદ."],
        ["MACT", "મોટર અકસ્માત વળતર સંબંધિત કાર્યવાહી."],
        ["ગ્રાહક કાર્યવાહી", "લાગુ અધિકારક્ષેત્ર મુજબ ગ્રાહક ઉપચાર."]
      ]
    }
  },

  {
    slug: "business-contracts",
    en: {
      title: "Business Contracts & Advisory",
      short: "Commercial agreements, MOU, partnership, LLP, service agreements, notices and settlement terms.",
      intro: "Drafting and vetting may be undertaken for commercial contracts, memoranda of understanding, partnership or LLP arrangements, service and consultancy agreements, employment documentation, notices, settlement terms and project-related documents.",
      points: [
        ["Commercial Agreements", "Drafting and review of contractual obligations and commercial terms."],
        ["Partnership & LLP", "Documentation relating to partnership or LLP arrangements."],
        ["Service Agreements", "Service and consultancy agreements as engaged."],
        ["Notices & Settlements", "Legal notices and documented settlement terms."]
      ]
    },
    gu: {
      title: "બિઝનેસ કરારો અને કાનૂની સલાહ",
      short: "વ્યાપારી કરાર, MOU, ભાગીદારી, LLP, સેવા કરાર, નોટિસ અને સમાધાનની શરતો.",
      intro: "વ્યાપારી કરાર, MOU, ભાગીદારી અથવા LLP વ્યવસ્થા, સેવા અને કન્સલ્ટન્સી એગ્રીમેન્ટ, રોજગાર સંબંધિત દસ્તાવેજો, નોટિસ, સમાધાનની શરતો અને પ્રોજેક્ટ દસ્તાવેજોનું ડ્રાફ્ટિંગ તથા ચકાસણી હાથ ધરવામાં આવી શકે છે.",
      points: [
        ["વ્યાપારી કરાર", "કરારની જવાબદારી અને વ્યાપારી શરતોનું ડ્રાફ્ટિંગ અને ચકાસણી."],
        ["ભાગીદારી અને LLP", "ભાગીદારી અથવા LLP સંબંધિત દસ્તાવેજીકરણ."],
        ["સેવા કરાર", "સેવા અને કન્સલ્ટન્સી એગ્રીમેન્ટ."],
        ["નોટિસ અને સમાધાન", "કાનૂની નોટિસ અને દસ્તાવેજબદ્ધ સમાધાનની શરતો."]
      ]
    }
  },

  {
    slug: "notarial-services",
    en: {
      title: "Notarial Services",
      short: "Notarial acts for affidavits, declarations, copies, execution and other documents where legally permissible.",
      intro: "Notarial acts may be undertaken for affidavits, declarations, copies, execution and other documents where legally permissible. The original document, identity, authority and personal-presence requirements may be checked according to the applicable framework.",
      points: [
        ["Affidavits", "Notarial work concerning affidavits where legally permissible."],
        ["Declarations", "Declarations and related documents subject to applicable requirements."],
        ["Document Copies", "Notarial authentication of copies where legally permissible."],
        ["Registration", "Notarisation does not replace compulsory registration where registration is required."]
      ]
    },
    gu: {
      title: "નોટરી સેવાઓ",
      short: "લાગુ કાયદા મુજબ સોગંદનામા, ઘોષણા, નકલ અને અન્ય દસ્તાવેજોની નોટરી કામગીરી.",
      intro: "લાગુ કાયદા મુજબ સોગંદનામા, ઘોષણા, નકલ, હસ્તાક્ષર અથવા અન્ય માન્ય દસ્તાવેજોની નોટરી કામગીરી હાથ ધરવામાં આવી શકે છે. મૂળ દસ્તાવેજ, ઓળખ, સત્તા અને વ્યક્તિગત હાજરીની જરૂરિયાત તપાસવામાં આવી શકે છે.",
      points: [
        ["સોગંદનામા", "લાગુ કાયદા મુજબ સોગંદનામા સંબંધિત નોટરી કામગીરી."],
        ["ઘોષણા", "લાગુ જરૂરિયાતો મુજબ ઘોષણા અને સંબંધિત દસ્તાવેજો."],
        ["દસ્તાવેજ નકલ", "કાયદેસર રીતે માન્ય હોય ત્યાં દસ્તાવેજની નકલનું નોટરીકરણ."],
        ["રજિસ્ટ્રેશન", "જ્યાં રજિસ્ટ્રેશન ફરજિયાત હોય ત્યાં નોટરી તેનો વિકલ્પ નથી."]
      ]
    }
  }
];

const courts = {
  en: [
    "District and Sessions Court, Gandhinagar",
    "Civil and criminal courts having territorial and subject-matter jurisdiction",
    "Family Court, Gandhinagar",
    "District Consumer Disputes Redressal Commission",
    "Gujarat High Court",
    "Mamlatdar and Agricultural Lands Tribunal",
    "Prant Officer / Deputy Collector and District Collector",
    "Additional Secretary, Revenue Department, Government of Gujarat",
    "Gujarat Revenue Tribunal",
    "Gujarat Real Estate Regulatory Authority, where applicable",
    "Sub-Registrar, stamp and registration authorities"
  ],

  gu: [
    "જિલ્લા અને સેશન્સ કોર્ટ, ગાંધીનગર",
    "પ્રાદેશિક અને વિષયવસ્તુ આધારિત અધિકાર ધરાવતી સિવિલ તથા ફોજદારી કોર્ટ",
    "ફેમિલી કોર્ટ, ગાંધીનગર",
    "જિલ્લા ગ્રાહક તકરાર નિવારણ આયોગ",
    "ગુજરાત હાઈકોર્ટ",
    "મામલતદાર અને કૃષિ જમીન પંચ",
    "પ્રાંત અધિકારી / નાયબ કલેક્ટર અને જિલ્લા કલેક્ટર",
    "અધિક સચિવ, મહેસૂલ વિભાગ, ગુજરાત સરકાર",
    "ગુજરાત રેવન્યુ ટ્રિબ્યુનલ",
    "લાગુ પડે ત્યાં ગુજરાત રિયલ એસ્ટેટ રેગ્યુલેટરી ઓથોરિટી",
    "સબ-રજિસ્ટ્રાર, સ્ટેમ્પ અને નોંધણી સત્તાધિકારી"
  ]
};

const faqs = {
  en: [
    [
      "What should I bring for the first meeting?",
      "Bring a short chronology, material notices or pleadings, agreements, relevant revenue or property records, payment proof and the next hearing or legal deadline. Do not send original documents unless specifically requested."
    ],
    [
      "Does contacting the office create an advocate-client relationship?",
      "No. A professional relationship begins only after conflict checks, acceptance of the matter and confirmation of the scope of engagement."
    ],
    [
      "How are professional fees decided?",
      "Fees depend on the nature, urgency, forum, stage, record and scope of work. Applicable professional fees and out-of-pocket expenses are communicated after an initial assessment."
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
      "ના. હિતસંઘર્ષની તપાસ, કેસ સ્વીકારવાની પુષ્ટિ અને કામગીરીનો વ્યાપ નક્કી થયા પછી જ વ્યાવસાયિક સંબંધ સ્થાપિત થાય છે."
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

const insights = {
  en: [
    ["Civil Procedure & Commercial Disputes", "General legal information relating to civil procedure and commercial disputes."],
    ["Criminal Procedure & Bail", "General awareness information on criminal procedure and bail-related process."],
    ["Family Court & Maintenance", "General information concerning family-court procedure and maintenance matters."],
    ["Consumer Protection", "General information relating to consumer complaints and procedure."],
    ["Land Revenue & Tenancy", "General information concerning revenue, land and tenancy procedure."],
    ["Property Title & Registration", "General information on property documents, title review and registration."],
    ["Banking, SARFAESI & NI Act", "General awareness material concerning banking recovery and related procedure."],
    ["Insurance & MACT", "General information concerning insurance disputes and motor accident claims."],
    ["Judgment Updates & Checklists", "General legal-awareness material and practical document checklists."]
  ],

  gu: [
    ["સિવિલ પ્રક્રિયા અને વ્યાપારી વિવાદ", "સિવિલ પ્રક્રિયા અને વ્યાપારી વિવાદ અંગે સામાન્ય કાનૂની માહિતી."],
    ["ફોજદારી પ્રક્રિયા અને જામીન", "ફોજદારી પ્રક્રિયા અને જામીન બાબતો અંગે સામાન્ય માહિતી."],
    ["ફેમિલી કોર્ટ અને ભરણપોષણ", "ફેમિલી કોર્ટ પ્રક્રિયા અને ભરણપોષણ અંગે સામાન્ય માહિતી."],
    ["ગ્રાહક સુરક્ષા", "ગ્રાહક ફરિયાદ અને પ્રક્રિયા અંગે સામાન્ય માહિતી."],
    ["જમીન મહેસૂલ અને ગણોત", "મહેસૂલ, જમીન અને ગણોત પ્રક્રિયા અંગે સામાન્ય માહિતી."],
    ["મિલકત ટાઇટલ અને રજિસ્ટ્રેશન", "મિલકત દસ્તાવેજ, ટાઇટલ તપાસ અને નોંધણી અંગે સામાન્ય માહિતી."],
    ["બેંકિંગ, SARFAESI અને NI Act", "બેંકિંગ વસૂલાત અને સંબંધિત પ્રક્રિયા અંગે સામાન્ય માહિતી."],
    ["વીમા અને MACT", "વીમા વિવાદ અને મોટર અકસ્માત વળતર અંગે સામાન્ય માહિતી."],
    ["ચુકાદા અપડેટ અને ચેકલિસ્ટ", "કાનૂની જાગૃતિ અને ઉપયોગી દસ્તાવેજ ચેકલિસ્ટ."]
  ]
};

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

function renderHeader() {
  const l = labels[lang];

  document.getElementById("site-header").innerHTML = `
    <header class="site-header" id="header">
      <div class="container header-inner">

        <a class="brand" href="${urlForPage("home")}">
          <strong>B T Gadhavi</strong>
          <small>${isGu ? "એડવોકેટ અને નોટરી" : "Advocate & Notary"}</small>
        </a>

        <nav class="nav" id="nav">
          ${navLink("home", l.home)}
          ${navLink("about", l.about)}
          ${navLink("practice", l.practice)}
          ${navLink("courts", l.courts)}
          ${navLink("insights", l.insights)}
          ${navLink("contact", l.contact)}

          <a class="lang-switch" href="${alternateUrl()}">
            ${isGu ? "EN" : "ગુજરાતી"}
          </a>
        </nav>

        <button class="menu-toggle" id="menuToggle" aria-label="Open navigation">
          ☰
        </button>

      </div>
    </header>
  `;
}

function navLink(key, label) {
  const active =
    page === key ||
    (page === "practice-detail" && key === "practice");

  return `
    <a href="${urlForPage(key)}" class="${active ? "active" : ""}">
      ${label}
    </a>
  `;
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="container">

        <div class="footer-grid">

          <div>
            <div class="footer-brand">B T Gadhavi</div>

            <p>
              ${isGu
                ? "એડવોકેટ અને નોટરી<br>ગાંધીનગર, ગુજરાત"
                : "Advocate & Notary<br>Gandhinagar, Gujarat"}
            </p>

            <p style="opacity:.65">
              ${isGu
                ? "બાર કાઉન્સિલ ઓફ ગુજરાત ક્રમાંક G/81/2004<br>ગુજરાત હાઈકોર્ટ કોડ 6092<br>વર્ષ 2004થી વકીલાત"
                : "Bar Council of Gujarat No. G/81/2004<br>Gujarat High Court Code 6092<br>Practising since 2004"}
            </p>
          </div>

          <div>
            <div class="footer-label">
              ${isGu ? "નેવિગેશન" : "Navigation"}
            </div>

            <div class="footer-nav">
              <a href="${urlForPage("home")}">${labels[lang].home}</a>
              <a href="${urlForPage("about")}">${labels[lang].about}</a>
              <a href="${urlForPage("courts")}">${labels[lang].courts}</a>
              <a href="${urlForPage("insights")}">${labels[lang].insights}</a>
              <a href="${urlForPage("contact")}">${labels[lang].contact}</a>
            </div>
          </div>

          <div>
            <div class="footer-label">
              ${isGu ? "કાર્યક્ષેત્રો" : "Practice Areas"}
            </div>

            <div class="footer-nav">
              ${practiceAreas.slice(0, 6).map(x => `
                <a href="${practiceFile(x.slug)}">${x[lang].title}</a>
              `).join("")}
            </div>
          </div>

          <div>
            <div class="footer-label">
              ${isGu ? "સંપર્ક" : "Contact"}
            </div>

            <p>
              <a href="tel:+919687275908">+91 96872 75908</a><br>
              <a href="mailto:btgadhavi78@gmail.com">btgadhavi78@gmail.com</a><br>
              Gandhinagar, Gujarat
            </p>

            <div class="footer-nav">
              <a href="${urlForPage("disclaimer")}">
                ${isGu ? "ડિસ્ક્લેમર" : "Disclaimer"}
              </a>

              <a href="${urlForPage("privacy")}">
                ${isGu ? "ગોપનીયતા નીતિ" : "Privacy Policy"}
              </a>
            </div>
          </div>

        </div>

        <div class="footer-bottom">
          <span>
            © ${new Date().getFullYear()} B. T. Gadhavi. All rights reserved.
          </span>

          <span>
            ${isGu
              ? "વેબસાઇટની માહિતી સામાન્ય સ્વરૂપની છે અને કાનૂની સલાહ નથી."
              : "Website information is general in nature and does not constitute legal advice."}
          </span>
        </div>

      </div>
    </footer>
  `;
}

function heroArt() {
  return `
    <div class="hero-art reveal">
      <div class="court">
        <div class="court-roof"></div>
        <div class="court-beam"></div>

        <div class="columns">
          <div class="column"></div>
          <div class="column"></div>
          <div class="column"></div>
          <div class="column"></div>
          <div class="column"></div>
        </div>
      </div>

      <div class="art-caption">
        <strong>
          ${isGu
            ? "હકીકતો. દસ્તાવેજો. કાયદો."
            : "Facts. Documents. Law."}
        </strong>
      </div>
    </div>
  `;
}

function metric(value, label) {
  return `
    <div class="metric reveal">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `;
}

function pageHero(title, copy) {
  return `
    <section class="page-hero">
      <div class="container reveal">

        <div class="eyebrow">
          B T Gadhavi · ${isGu ? "એડવોકેટ અને નોટરી" : "Advocate & Notary"}
        </div>

        <h1>${title}</h1>

        <p>${copy}</p>

      </div>
    </section>
  `;
}

function breadcrumb(items) {
  return `
    <div class="breadcrumb-wrap">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          ${items.map((x, i) => {
            if (i === items.length - 1) {
              return `<span>${x.label}</span>`;
            }

            return `
              <a href="${x.href}">${x.label}</a>
              <span>/</span>
            `;
          }).join("")}
        </nav>
      </div>
    </div>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="container hero-grid">

        <div class="reveal">

          <div class="eyebrow">
            ${isGu ? "ગાંધીનગર · ગુજરાત" : "Legal Practice · Gandhinagar, Gujarat"}
          </div>

          <h1>
            ${isGu
              ? "ભુપતદાન ટી. ગઢવી"
              : "Bhupatdan T. Gadhavi"}
          </h1>

          <div class="hero-subtitle">
            ${isGu
              ? "એડવોકેટ અને નોટરી, ગાંધીનગર"
              : "Advocate & Notary in Gandhinagar"}
          </div>

          <p class="lead">
            ${isGu
              ? "સિવિલ, ફોજદારી, ફેમિલી, ગ્રાહક સુરક્ષા, મહેસૂલ, જમીન, મિલકત, બેંકિંગ, વીમા અને વ્યવસાય સંબંધિત કાનૂની બાબતોમાં સલાહ, પ્રતિનિધિત્વ અને દસ્તાવેજી સહાય."
              : "Legal advice, representation and documentation support in civil, criminal, family, consumer, revenue, land, property, banking, insurance and business matters in Gandhinagar, Gujarat."}
          </p>

          <div class="btns">
            <a class="btn btn-light" href="${urlForPage("practice")}">
              ${isGu ? "કાર્યક્ષેત્રો જુઓ" : "View Practice Areas"}
            </a>

            <a class="btn btn-outline" href="${urlForPage("contact")}">
              ${isGu ? "સંપર્ક વિગતો" : "Contact Details"}
            </a>
          </div>

        </div>

        ${heroArt()}

      </div>
    </section>

    <section class="metrics">
      <div class="container metric-grid">

        ${metric("2004", isGu ? "વર્ષથી વકીલાત" : "Practising since")}
        ${metric("G/81/2004", isGu ? "બાર કાઉન્સિલ ઓફ ગુજરાત" : "Bar Council of Gujarat")}
        ${metric("6092", isGu ? "ગુજરાત હાઈકોર્ટ કોડ" : "Gujarat High Court Code")}
        ${metric(
          isGu ? "ગુજરાતી · हिन्दी · English" : "Gujarati · Hindi · English",
          isGu ? "પરામર્શની ભાષાઓ" : "Consultation languages"
        )}

      </div>
    </section>

    <section class="section">
      <div class="container two-col">

        <div class="reveal">

          <div class="eyebrow">
            ${isGu ? "વ્યાવસાયિક અભિગમ" : "Legal Practice in Gandhinagar"}
          </div>

          <div class="large-statement">
            ${isGu
              ? "દરેક કાનૂની બાબત હકીકત, દસ્તાવેજ, અધિકારક્ષેત્ર, સમયમર્યાદા અને પ્રક્રિયાથી શરૂ થાય છે."
              : "Every legal matter begins with facts, documents, jurisdiction, limitation and procedure."}
          </div>

        </div>

        <div class="content-panel reveal">

          <p>
            ${isGu
              ? "વ્યક્તિઓ, પરિવારો, વેપાર-ઉદ્યોગ, ડેવલપરો, નાણાકીય સંસ્થાઓ અને અન્ય સંગઠનોને કોર્ટ કાર્યવાહી, મહેસૂલી કેસો, મિલકતની કાયદાકીય તપાસ, કાનૂની દસ્તાવેજો અને વિવાદ નિવારણ સંબંધિત કામગીરીમાં સહાય આપવામાં આવી શકે છે."
              : "The practice assists individuals, families, businesses, developers, financial institutions and other organisations in court proceedings, revenue matters, property due diligence, legal documentation and dispute resolution."}
          </p>

          <p>
            ${isGu
              ? "કોઈ પણ કામ સ્વીકારવું હિતસંઘર્ષની તપાસ, દસ્તાવેજોની સમીક્ષા, અધિકારક્ષેત્ર, ઉપલબ્ધતા અને ઔપચારિક નિમણૂકને આધીન રહેશે."
              : "Acceptance of a matter remains subject to conflict checks, jurisdiction, document review, availability and formal engagement."}
          </p>

        </div>

      </div>
    </section>

    <section class="section dark-section">
      <div class="container">

        <div class="section-head reveal">
          <div class="eyebrow">
            ${isGu ? "મુખ્ય કાર્યક્ષેત્રો" : "Legal Practice Areas"}
          </div>

          <h2 class="section-title">
            ${isGu
              ? "કાનૂની કામગીરીના મુખ્ય ક્ષેત્રો"
              : "Legal services and practice areas"}
          </h2>

          <p class="section-copy">
            ${isGu
              ? "દરેક બાબતની સ્વીકૃતિ હિતસંઘર્ષ, અધિકારક્ષેત્ર, દસ્તાવેજોની સમીક્ષા અને ઔપચારિક નિમણૂકને આધીન છે."
              : "Each matter is considered subject to conflict checks, jurisdiction, document review, availability and formal engagement."}
          </p>
        </div>

        <div class="practice-grid">
          ${practiceAreas.map((item, i) => `
            <a href="${practiceFile(item.slug)}" class="practice-card reveal">

              <span class="practice-number">
                ${String(i + 1).padStart(2, "0")}
              </span>

              <h3>${item[lang].title}</h3>

              <p>${item[lang].short}</p>

              <span class="practice-link">↗</span>

            </a>
          `).join("")}
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

function renderProcess() {
  const en = [
    ["Initial information", "Initial information and conflict check."],
    ["Document review", "Review of material facts, documents, dates and jurisdiction."],
    ["Legal options", "Explanation of available legal options and procedural risks."],
    ["Scope confirmation", "Confirmation of scope, professional fees and required documents."],
    ["Legal work", "Drafting, filing, representation, registration or advisory work as engaged."],
    ["Updates", "Case updates and further instructions when required."]
  ];

  const gu = [
    ["પ્રાથમિક માહિતી", "પ્રાથમિક માહિતી અને હિતસંઘર્ષની તપાસ."],
    ["દસ્તાવેજોની સમીક્ષા", "હકીકતો, દસ્તાવેજો, તારીખો અને અધિકારક્ષેત્રની સમીક્ષા."],
    ["કાનૂની વિકલ્પો", "ઉપલબ્ધ કાનૂની વિકલ્પો અને પ્રક્રિયાત્મક જોખમની સમજ."],
    ["કામનો વ્યાપ", "વ્યાવસાયિક ફી અને જરૂરી દસ્તાવેજોની પુષ્ટિ."],
    ["કાનૂની કામગીરી", "ડ્રાફ્ટિંગ, ફાઇલિંગ, રજૂઆત, નોંધણી અથવા કાનૂની સલાહ."],
    ["અપડેટ", "જરૂર મુજબ કેસની માહિતી અને આગળની સૂચનાઓ."]
  ];

  const items = isGu ? gu : en;

  return `
    <section class="section">
      <div class="container">

        <div class="section-head reveal">
          <div class="eyebrow">
            ${isGu ? "કાર્યપદ્ધતિ" : "How Matters Are Handled"}
          </div>

          <h2 class="section-title">
            ${isGu ? "સુવ્યવસ્થિત કાનૂની પ્રક્રિયા" : "A structured legal process"}
          </h2>
        </div>

        <div class="process-grid">
          ${items.map((x, i) => `
            <div class="process-item reveal">
              <div class="num">${String(i + 1).padStart(2, "0")}</div>
              <h3>${x[0]}</h3>
              <p>${x[1]}</p>
            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}

function renderCourtsPreview() {
  return `
    <section class="section forums">
      <div class="container">

        <div class="section-head reveal">

          <div class="eyebrow">
            ${isGu ? "કોર્ટ અને સત્તાધિકારીઓ" : "Courts & Legal Forums"}
          </div>

          <h2 class="section-title">
            ${isGu
              ? "અધિકારક્ષેત્ર મુજબ કાનૂની કાર્યવાહી"
              : "Courts, tribunals and authorities"}
          </h2>

          <p class="section-copy">
            ${isGu
              ? "કોર્ટ અથવા સત્તાધિકારીનું નામ દર્શાવવાથી દરેક બાબત ત્યાં દાખલ કરી શકાય એવો અર્થ થતો નથી."
              : "The appropriate forum depends on subject matter, territorial jurisdiction, relief, valuation and procedural stage."}
          </p>

        </div>

        <div class="forum-list">
          ${courts[lang].slice(0, 7).map(x => `
            <div class="forum-item reveal">
              <span>${x}</span>
              <span>↗</span>
            </div>
          `).join("")}
        </div>

        <div class="btns">
          <a class="btn btn-outline" href="${urlForPage("courts")}">
            ${isGu ? "બધી કોર્ટ અને ફોરમ જુઓ" : "View Courts & Forums"}
          </a>
        </div>

      </div>
    </section>
  `;
}

function renderProfile() {
  return `
    <section class="section">
      <div class="container profile-grid">

        <div class="profile-art reveal">
          <div class="profile-monogram">BTG</div>
        </div>

        <div class="reveal">

          <div class="eyebrow">
            ${isGu ? "વ્યાવસાયિક પરિચય" : "Professional Profile"}
          </div>

          <h2 class="section-title">
            ${isGu ? "ભુપતદાન ટી. ગઢવી" : "Bhupatdan T. Gadhavi"}
          </h2>

          <p class="section-copy">
            ${isGu
              ? "એડવોકેટ અને નોટરી, ગાંધીનગર, ગુજરાત. વર્ષ 2004થી બાર કાઉન્સિલ ઓફ ગુજરાતમાં નોંધાયેલ."
              : "Advocate and Notary practising in Gandhinagar, Gujarat. Enrolled with the Bar Council of Gujarat since 2004."}
          </p>

          <div class="profile-data">
            ${profileData(isGu ? "લાયકાત" : "Qualification", "B.A., LL.B.")}
            ${profileData(isGu ? "વકીલાત" : "Practice since", "2004")}
            ${profileData(isGu ? "નોંધણી" : "Enrollment", "G/81/2004")}
            ${profileData(isGu ? "હાઈકોર્ટ કોડ" : "High Court Code", "6092")}
            ${profileData(isGu ? "ભાષાઓ" : "Languages", "Gujarati, Hindi, English")}
            ${profileData(isGu ? "સ્થળ" : "Location", "Gandhinagar, Gujarat")}
          </div>

          <div class="btns">
            <a class="btn btn-dark" href="${urlForPage("about")}">
              ${isGu ? "પૂર્ણ પરિચય" : "View Professional Profile"}
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
      <small>${label}</small>
      <strong>${value}</strong>
    </div>
  `;
}

function renderInsightsPreview() {
  return `
    <section class="section" style="background:var(--paper-2)">
      <div class="container">

        <div class="section-head reveal">
          <div class="eyebrow">
            ${isGu ? "કાનૂની માહિતી" : "Legal Information"}
          </div>

          <h2 class="section-title">
            ${isGu ? "કાનૂની જાગૃતિ માટેના વિષયો" : "Legal awareness and information"}
          </h2>

          <p class="section-copy">
            ${isGu
              ? "આ માહિતી સામાન્ય કાનૂની જાગૃતિ માટે છે અને ચોક્કસ કેસ માટેની કાનૂની સલાહ નથી."
              : "This information is intended for general legal awareness and is not a substitute for advice on specific facts and documents."}
          </p>
        </div>

        <div class="insight-grid">
          ${insights[lang].slice(0, 6).map((x, i) => `
            <div class="insight-card reveal">
              <span>${String(i + 1).padStart(2, "0")}</span>
              <h3>${x[0]}</h3>
              <p>${x[1]}</p>
            </div>
          `).join("")}
        </div>

        <div class="btns">
          <a class="btn btn-dark" href="${urlForPage("insights")}">
            ${isGu ? "કાનૂની માહિતી જુઓ" : "View Legal Insights"}
          </a>
        </div>

      </div>
    </section>
  `;
}

function renderFAQ() {
  return `
    <section class="section faq-section">
      <div class="container">

        <div class="section-head reveal">
          <div class="eyebrow">
            ${isGu ? "વારંવાર પૂછાતા પ્રશ્નો" : "Frequently Asked Questions"}
          </div>

          <h2 class="section-title">
            ${isGu
              ? "પ્રથમ સંપર્ક પહેલાં ઉપયોગી માહિતી"
              : "Useful information before contacting the office"}
          </h2>
        </div>

        <div class="faq-list">
          ${faqs[lang].map(x => `
            <details class="reveal">
              <summary>${x[0]}</summary>
              <p>${x[1]}</p>
            </details>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    ${pageHero(
      isGu ? "એડવોકેટ ભુપતદાન ટી. ગઢવીનો પરિચય" : "About Adv. Bhupatdan T. Gadhavi",
      isGu
        ? "ગાંધીનગર, ગુજરાત ખાતે એડવોકેટ અને નોટરીનો વ્યાવસાયિક પરિચય, કાનૂની પ્રેક્ટિસ અને કાર્ય કરવાની પદ્ધતિ."
        : "Professional profile, legal practice and working approach of Adv. Bhupatdan T. Gadhavi, Advocate and Notary in Gandhinagar, Gujarat."
    )}

    ${breadcrumb([
      { label: labels[lang].home, href: "index.html" },
      { label: labels[lang].about }
    ])}

    <section class="section">
      <div class="container profile-grid">

        <div class="profile-art reveal">
          <div class="profile-monogram">BTG</div>
        </div>

        <div class="reveal">

          <div class="eyebrow">
            ${isGu ? "એડવોકેટ અને નોટરી" : "Advocate & Notary"}
          </div>

          <h2 class="section-title">
            ${isGu ? "ભુપતદાન ટી. ગઢવી" : "Bhupatdan T. Gadhavi"}
          </h2>

          <p>
            ${isGu
              ? "હું ભુપતદાન ટી. ગઢવી, એડવોકેટ અને નોટરી છું અને ગાંધીનગર, ગુજરાત ખાતે વકીલાત કરું છું. વર્ષ 2004થી બાર કાઉન્સિલ ઓફ ગુજરાતમાં નોંધાયેલ છું."
              : "I am Bhupatdan T. Gadhavi, an Advocate and Notary practising in Gandhinagar, Gujarat. I have been enrolled with the Bar Council of Gujarat since 2004."}
          </p>

          <p>
            ${isGu
              ? "મારી પ્રેક્ટિસમાં કોર્ટ કેસો, કાનૂની સલાહ, જમીન અને મિલકત બાબતો, બેંકિંગ અને ફાઇનાન્સ, ગ્રાહક વિવાદો, ફેમિલી કાર્યવાહી તથા કાનૂની દસ્તાવેજોનો સમાવેશ થાય છે."
              : "My practice includes litigation, advisory work, land and property matters, banking and finance work, consumer disputes, family proceedings and legal documentation."}
          </p>

          <p>
            ${isGu
              ? "દરેક બાબતમાં મહત્વપૂર્ણ હકીકતો, દસ્તાવેજો, સમયમર્યાદા, અધિકારક્ષેત્ર અને પ્રક્રિયાત્મક તબક્કાની તપાસ કરવામાં આવે છે."
              : "Each matter is approached by first identifying the material facts, relevant documents, limitation, jurisdiction and procedural stage."}
          </p>

          <div class="profile-data">
            ${profileData(isGu ? "હોદ્દો" : "Designation", isGu ? "એડવોકેટ અને નોટરી, ભારત સરકાર" : "Advocate and Notary, Government of India")}
            ${profileData(isGu ? "લાયકાત" : "Qualification", "B.A., LL.B.")}
            ${profileData(isGu ? "નોંધણી" : "Enrollment", "G/81/2004")}
            ${profileData(isGu ? "ગુજરાત હાઈકોર્ટ કોડ" : "Gujarat High Court Code", "6092")}
            ${profileData(isGu ? "વકીલાતની શરૂઆત" : "Practice since", "2004")}
            ${profileData(isGu ? "સ્થળ" : "Practice location", "Gandhinagar, Gujarat")}
          </div>

        </div>

      </div>
    </section>

    <section class="section dark-section">
      <div class="container two-col">

        <div>
          <div class="eyebrow">
            ${isGu ? "વ્યાવસાયિક અભિગમ" : "Professional Approach"}
          </div>

          <h2 class="section-title">
            ${isGu
              ? "હકીકત અને દસ્તાવેજ આધારિત મૂલ્યાંકન"
              : "Fact and document based assessment"}
          </h2>
        </div>

        <div class="section-copy">
          <p>• ${isGu ? "અધિકારક્ષેત્ર, સમયમર્યાદા અને કાર્યવાહીનો તબક્કો સ્પષ્ટ કરવો" : "Clear identification of jurisdiction, limitation and procedural stage"}</p>
          <p>• ${isGu ? "સચોટ ડ્રાફ્ટિંગ અને વ્યવસ્થિત દસ્તાવેજી રેકોર્ડ" : "Focused drafting and organised documentary record"}</p>
          <p>• ${isGu ? "કાનૂની વિકલ્પો અને મહત્વપૂર્ણ જોખમની સમજ" : "Explanation of available options and material risks"}</p>
          <p>• ${isGu ? "પક્ષકારની માહિતીની ગોપનીયતા" : "Confidential handling of client information"}</p>
          <p>• ${isGu ? "કામનો વ્યાપ અને વ્યાવસાયિક ફી અંગે સ્પષ્ટતા" : "Professional fee and scope confirmation before substantive work"}</p>
        </div>

      </div>
    </section>

    ${renderCTA()}
  `;
}

function renderPracticeOverview() {
  return `
    ${pageHero(
      isGu ? "કાનૂની કાર્યક્ષેત્રો" : "Legal Practice Areas in Gandhinagar",
      isGu
        ? "સિવિલ, ફોજદારી, ફેમિલી, ગ્રાહક, જમીન, મિલકત, બેંકિંગ, વીમા અને વ્યવસાય સંબંધિત કાનૂની કામગીરીના મુખ્ય ક્ષેત્રો."
        : "Information about civil, criminal, family, consumer, revenue, property, banking, insurance, business and notarial matters handled in Gandhinagar."
    )}

    ${breadcrumb([
      { label: labels[lang].home, href: "index.html" },
      { label: labels[lang].practice }
    ])}

    <section class="section">
      <div class="container">

        ${practiceAreas.map((item, i) => `
          <a class="practice-detail reveal" href="${practiceFile(item.slug)}">

            <span class="index">
              ${String(i + 1).padStart(2, "0")}
            </span>

            <h2>${item[lang].title}</h2>

            <p>${item[lang].short}</p>

          </a>
        `).join("")}

      </div>
    </section>

    ${renderCourtsPreview()}
    ${renderCTA()}
  `;
}

function renderPracticeDetail() {
  const item = practiceAreas.find(x => x.slug === slug);

  if (!item) {
    return `<section class="section"><div class="container"><h1>Page not found</h1></div></section>`;
  }

  const x = item[lang];

  return `
    ${pageHero(
      x.title,
      x.short
    )}

    ${breadcrumb([
      { label: labels[lang].home, href: "index.html" },
      { label: labels[lang].practice, href: "practice-areas.html" },
      { label: x.title }
    ])}

    <section class="section">
      <div class="container two-col">

        <div class="reveal">

          <div class="eyebrow">
            ${isGu ? "કાનૂની કામગીરી" : "Legal Practice"}
          </div>

          <h2 class="section-title">${x.title}</h2>

        </div>

        <div class="content-panel reveal">

          <p>${x.intro}</p>

          <p>
            ${isGu
              ? "બાબતની સ્વીકૃતિ હિતસંઘર્ષની તપાસ, અધિકારક્ષેત્ર, ઉપલબ્ધતા, દસ્તાવેજોની સમીક્ષા અને ઔપચારિક નિમણૂકને આધીન છે."
              : "Acceptance of a matter remains subject to conflict checks, jurisdiction, availability, document review and formal engagement."}
          </p>

        </div>

      </div>
    </section>

    <section class="section" style="background:var(--paper-2)">
      <div class="container">

        <div class="section-head">
          <div class="eyebrow">
            ${isGu ? "સંબંધિત બાબતો" : "Related Matters"}
          </div>

          <h2 class="section-title">
            ${isGu ? "કાર્યક્ષેત્રની વિગતો" : "Scope of work"}
          </h2>
        </div>

        <div class="detail-points">
          ${x.points.map(p => `
            <div class="detail-point reveal">
              <strong>${p[0]}</strong>
              <p>${p[1]}</p>
            </div>
          `).join("")}
        </div>

      </div>
    </section>

    <section class="section">
      <div class="container">

        <div class="section-head">
          <div class="eyebrow">
            ${isGu ? "અન્ય કાર્યક્ષેત્રો" : "Related Practice Areas"}
          </div>

          <h2 class="section-title">
            ${isGu ? "અન્ય કાનૂની વિષયો" : "Explore related legal matters"}
          </h2>
        </div>

        <div class="feature-strip">
          ${practiceAreas
            .filter(z => z.slug !== slug)
            .slice(0, 3)
            .map((z, i) => `
              <a class="feature" href="${practiceFile(z.slug)}">
                <span>${String(i + 1).padStart(2, "0")}</span>
                <h3>${z[lang].title}</h3>
                <p>${z[lang].short}</p>
              </a>
            `).join("")}
        </div>

      </div>
    </section>

    ${renderCTA()}
  `;
}

function renderCourtsPage() {
  return `
    ${pageHero(
      isGu ? "કોર્ટ અને સત્તાધિકારીઓ" : "Courts, Tribunals & Authorities",
      isGu
        ? "અધિકારક્ષેત્ર, વિવાદના સ્વરૂપ અને કાર્યવાહી કયા તબક્કે છે તેના આધારે યોગ્ય કોર્ટ, ટ્રિબ્યુનલ અથવા સત્તાધિકારી સમક્ષ કામગીરી હાથ ધરવામાં આવી શકે છે."
        : "Depending on jurisdiction, the nature of the dispute and the stage of proceedings, matters may be undertaken before appropriate courts, tribunals and authorities."
    )}

    ${breadcrumb([
      { label: labels[lang].home, href: "index.html" },
      { label: labels[lang].courts }
    ])}

    <section class="section forums">
      <div class="container">

        <div class="forum-list">
          ${courts[lang].map(x => `
            <div class="forum-item reveal">
              <span>${x}</span>
              <span>↗</span>
            </div>
          `).join("")}
        </div>

        <p class="section-copy" style="margin-top:35px">
          ${isGu
            ? "કોઈ કોર્ટ અથવા સત્તાધિકારીનું નામ દર્શાવવાથી દરેક કેસ ત્યાં દાખલ કરી શકાય એવો અર્થ થતો નથી. અધિકારક્ષેત્ર લાગુ કાયદો, માંગેલી રાહત, વિષય, સ્થળ, દાવાની કિંમત અને કાર્યવાહીનો તબક્કો નક્કી કરે છે."
            : "Listing a court or authority does not imply that every matter can be filed there. Jurisdiction is determined from the statute, relief, subject matter, location, valuation and procedural stage."}
        </p>

      </div>
    </section>

    ${renderCTA()}
  `;
}

function renderInsightsPage() {
  return `
    ${pageHero(
      isGu ? "કાનૂની માહિતી" : "Legal Insights & Information",
      isGu
        ? "કોર્ટ પ્રક્રિયા, મિલકત દસ્તાવેજો, મહેસૂલ કાયદો, ફેમિલી કાયદો, ગ્રાહક વિવાદ, બેંકિંગ અને અન્ય કાનૂની વિષયો અંગે સામાન્ય માહિતી."
        : "General legal information on court procedure, property documentation, revenue law, family law, consumer disputes, banking recovery and related subjects."
    )}

    ${breadcrumb([
      { label: labels[lang].home, href: "index.html" },
      { label: labels[lang].insights }
    ])}

    <section class="section">
      <div class="container">

        <div class="insight-grid">
          ${insights[lang].map((x, i) => `
            <div class="insight-card reveal">
              <span>${String(i + 1).padStart(2, "0")}</span>
              <h3>${x[0]}</h3>
              <p>${x[1]}</p>
            </div>
          `).join("")}
        </div>

        <div class="content-panel" style="margin-top:45px">
          <p>
            ${isGu
              ? "આ વિભાગની માહિતી માત્ર સામાન્ય કાનૂની જાગૃતિ માટે છે. તેને વ્યક્તિગત કેસ અંગેની કાનૂની સલાહ માનવી નહીં. ચોક્કસ બાબતમાં હકીકત અને દસ્તાવેજોની તપાસ બાદ સલાહ લેવી."
              : "Information in this section is for general legal awareness only. It is not legal advice and should not be treated as a substitute for advice after review of the facts and documents of a specific matter."}
          </p>
        </div>

      </div>
    </section>
  `;
}

function renderContact() {
  return `
    ${pageHero(
      isGu ? "સંપર્ક" : "Contact Adv. Bhupatdan T. Gadhavi",
      isGu
        ? "મુલાકાત અથવા કેસ સંબંધિત પૂછપરછ માટે પ્રાથમિક હિતસંઘર્ષ અને ઉપલબ્ધતાની તપાસ માટે જરૂરી એટલી જ માહિતી આપો."
        : "For an appointment or case-related enquiry, provide only the minimum information required for an initial conflict and availability check."
    )}

    ${breadcrumb([
      { label: labels[lang].home, href: "index.html" },
      { label: labels[lang].contact }
    ])}

    <section class="section">
      <div class="container contact-grid">

        <div class="contact-card reveal">

          <div class="eyebrow">
            ${isGu ? "ઓફિસ વિગતો" : "Office Details"}
          </div>

          <h2>
            ${isGu ? "ભુપતદાન ટી. ગઢવી" : "Bhupatdan T. Gadhavi"}
          </h2>

          <p>
            ${isGu ? "એડવોકેટ અને નોટરી" : "Advocate & Notary"}
          </p>

          ${contactLine(isGu ? "સ્થળ" : "Location", "Gandhinagar, Gujarat")}
          ${contactLine(isGu ? "ફોન" : "Telephone", '<a href="tel:+919687275908">+91 96872 75908</a>')}
          ${contactLine(isGu ? "ઇમેઇલ" : "Email", '<a href="mailto:btgadhavi78@gmail.com">btgadhavi78@gmail.com</a>')}
          ${contactLine(isGu ? "ભાષાઓ" : "Languages", "Gujarati, Hindi, English")}

        </div>

        <form id="contactForm" class="reveal">

          <div class="form-grid">

            ${inputField("name", isGu ? "પૂર્ણ નામ" : "Full name", "text")}
            ${inputField("phone", isGu ? "ટેલિફોન નંબર" : "Telephone number", "tel")}
            ${inputField("email", isGu ? "ઇમેઇલ" : "Email", "email")}

            <div class="field">
              <label for="language">
                ${isGu ? "પસંદની ભાષા" : "Preferred language"}
              </label>

              <select id="language" name="language" required>
                <option value="">${isGu ? "પસંદ કરો" : "Select"}</option>
                <option>Gujarati</option>
                <option>Hindi</option>
                <option>English</option>
              </select>
            </div>

            ${inputField("matter", isGu ? "બાબતનો પ્રકાર" : "Type of matter", "text")}
            ${inputField("court", isGu ? "કોર્ટ અથવા સત્તાધિકારી" : "Court or authority", "text")}
            ${inputField("case", isGu ? "કેસ નંબર" : "Case number, if any", "text")}
            ${inputField("deadline", isGu ? "આગામી તારીખ / સમયમર્યાદા" : "Next hearing / deadline", "text")}

            <div class="field full">
              <label for="summary">
                ${isGu ? "ટૂંકી બિન-ગુપ્ત માહિતી" : "Brief non-confidential summary"}
              </label>

              <textarea
                id="summary"
                name="summary"
                maxlength="500"
                required
              ></textarea>
            </div>

            <div class="field full">
              <label class="consent">
                <input type="checkbox" required>

                <span>
                  ${isGu
                    ? "હું ગોપનીયતા નીતિ અને સંપર્ક પ્રતિસાદની શરતો સ્વીકારું છું."
                    : "I consent to the privacy policy and contact response conditions."}
                </span>
              </label>
            </div>

            <div class="field full">
              <p style="font-size:10px;color:var(--muted)">
                ${isGu
                  ? "આ ફોર્મ મોકલવાથી વકીલ-મુવક્કિલ સંબંધ સ્થાપિત થતો નથી અને કેસ સ્વીકાર્યાની પુષ્ટિ થતી નથી. પુષ્ટિ મળ્યા પહેલાં ગુપ્ત અથવા સમયમર્યાદાવાળી માહિતી મોકલશો નહીં."
                  : "Submission of this form does not create an advocate-client relationship or confirm acceptance of the matter. Do not send confidential or time-sensitive information until engagement is confirmed."}
              </p>
            </div>

            <div class="field full">
              <button type="submit" class="btn btn-dark">
                ${isGu ? "ઇમેઇલ તૈયાર કરો" : "Prepare Email"}
              </button>
            </div>

          </div>

        </form>

      </div>
    </section>

    ${renderFAQ()}
  `;
}

function inputField(id, label, type) {
  return `
    <div class="field">
      <label for="${id}">${label}</label>
      <input id="${id}" name="${id}" type="${type}" required>
    </div>
  `;
}

function contactLine(label, value) {
  return `
    <div class="contact-line">
      <small>${label}</small>
      <strong>${value}</strong>
    </div>
  `;
}

function renderDisclaimer() {
  return `
    ${pageHero(
      isGu ? "વેબસાઇટ ડિસ્ક્લેમર" : "Website Disclaimer",
      isGu
        ? "વેબસાઇટના ઉપયોગ અને વ્યાવસાયિક સંબંધ અંગે મહત્વપૂર્ણ માહિતી."
        : "Important information concerning use of this website and professional engagement."
    )}

    <section class="section">
      <div class="container policy">

        <p>
          ${isGu
            ? "બાર કાઉન્સિલ ઓફ ઇન્ડિયાના નિયમો મુજબ વકીલ દ્વારા કામ મેળવવા માટે જાહેરાત અથવા પ્રલોભન આપવું માન્ય નથી. આ વેબસાઇટ માત્ર એડવોકેટ ભુપતદાન ટી. ગઢવીની વ્યાવસાયિક વિગતો અને કાર્યક્ષેત્રો અંગે સામાન્ય માહિતી આપવા માટે જાળવવામાં આવે છે."
            : "The Bar Council of India does not permit advocates to solicit work or advertise. This website is maintained solely to provide general information about Adv. Bhupatdan T. Gadhavi, his professional particulars and areas of practice."}
        </p>

        <h2>${isGu ? "સામાન્ય માહિતી" : "General information"}</h2>

        <p>
          ${isGu
            ? "વેબસાઇટની સામગ્રી માત્ર સામાન્ય માહિતી માટે છે. તે કાનૂની સલાહ, કાનૂની અભિપ્રાય અથવા ચોક્કસ બાબતમાં હકીકત અને દસ્તાવેજ આધારીત સલાહનો વિકલ્પ નથી."
            : "The content of this website is for general informational purposes only. It is not legal advice, a legal opinion or a substitute for advice based on the facts and documents of a particular matter."}
        </p>

        <h2>${isGu ? "વકીલ-મુવક્કિલ સંબંધ" : "Advocate-client relationship"}</h2>

        <p>
          ${isGu
            ? "વેબસાઇટ જોવાથી, પૂછપરછ ફોર્મ ભરવાથી, ઇમેઇલ મોકલવાથી અથવા ઓફિસનો સંપર્ક કરવાથી વકીલ-મુવક્કિલ સંબંધ સ્થાપિત થતો નથી."
            : "Accessing the website, using the enquiry form, sending an email or contacting the office does not create an advocate-client relationship."}
        </p>

        <h2>${isGu ? "પરિણામ અંગે" : "No outcome assurance"}</h2>

        <p>
          ${isGu
            ? "કોઈ નિવેદન કેસના પરિણામ, સમયગાળો અથવા ખર્ચ અંગે વચન, ખાતરી કે બાંયધરી નથી."
            : "No statement on this website is a promise, warranty or assurance regarding the result, duration or cost of a legal matter."}
        </p>

      </div>
    </section>
  `;
}

function renderPrivacy() {
  return `
    ${pageHero(
      isGu ? "ગોપનીયતા નીતિ" : "Privacy Policy",
      isGu
        ? "વેબસાઇટ દ્વારા આપવામાં આવતી વ્યક્તિગત માહિતીના ઉપયોગ અંગે."
        : "Information about how information submitted through this website may be handled."
    )}

    <section class="section">
      <div class="container policy">

        <h2>${isGu ? "એકત્ર થતી માહિતી" : "Information that may be collected"}</h2>

        <p>
          ${isGu
            ? "નામ, સંપર્ક વિગતો, પસંદની ભાષા, બાબતનો પ્રકાર અને ટૂંકી માહિતી જેવી વિગતો સ્વૈચ્છિક રીતે આપવામાં આવી શકે છે."
            : "Information voluntarily provided may include name, contact details, preferred language, matter category and a brief message."}
        </p>

        <h2>${isGu ? "માહિતીનો ઉપયોગ" : "Use of information"}</h2>

        <p>
          ${isGu
            ? "માહિતીનો ઉપયોગ પૂછપરછનો જવાબ આપવા, પ્રાથમિક હિતસંઘર્ષ અથવા ઉપલબ્ધતા તપાસવા અને મુલાકાત ગોઠવવા માટે થઈ શકે છે."
            : "Information may be used to respond to enquiries, conduct an initial conflict or availability check and arrange appointments."}
        </p>

        <h2>${isGu ? "સંવેદનશીલ માહિતી" : "Sensitive information"}</h2>

        <p>
          ${isGu
            ? "સામાન્ય વેબ ફોર્મ દ્વારા મૂળ દસ્તાવેજો, પાસવર્ડ, બેંકિંગ ઓળખ અથવા અત્યંત સંવેદનશીલ માહિતી મોકલશો નહીં."
            : "Do not submit original documents, passwords, banking credentials, privileged communications or highly sensitive information through the general enquiry form."}
        </p>

        <h2>${isGu ? "સંપર્ક" : "Privacy contact"}</h2>

        <p>
          btgadhavi78@gmail.com
        </p>

      </div>
    </section>
  `;
}

function renderCTA() {
  return `
    <section class="cta">
      <div class="container cta-inner">

        <div>
          <div class="eyebrow" style="color:white;opacity:.75">
            ${isGu ? "મુલાકાત અને પૂછપરછ" : "Appointments & Enquiries"}
          </div>

          <h2>
            ${isGu ? "ઓફિસનો સંપર્ક કરો" : "Contact the office"}
          </h2>
        </div>

        <a class="btn btn-light" href="${urlForPage("contact")}">
          ${isGu ? "સંપર્ક વિગતો" : "Contact Details"} →
        </a>

      </div>
    </section>
  `;
}

function renderPage() {
  const target = document.getElementById("page-content");

  const map = {
    home: renderHome,
    about: renderAbout,
    practice: renderPracticeOverview,
    "practice-detail": renderPracticeDetail,
    courts: renderCourtsPage,
    insights: renderInsightsPage,
    contact: renderContact,
    disclaimer: renderDisclaimer,
    privacy: renderPrivacy
  };

  target.innerHTML =
    map[page]
      ? map[page]()
      : renderHome();
}

function renderEntryDisclaimer() {
  if (localStorage.getItem("btg_ack") === "1") return;

  const modal = document.createElement("div");

  modal.className = "modal open";

  modal.innerHTML = `
    <div class="modal-card">

      <div class="eyebrow">
        ${isGu ? "વેબસાઇટ પ્રવેશ ડિસ્ક્લેમર" : "Website Entry Disclaimer"}
      </div>

      <h2>
        ${isGu ? "સામાન્ય માહિતી માટેની વેબસાઇટ" : "General information website"}
      </h2>

      <p>
        ${isGu
          ? "બાર કાઉન્સિલ ઓફ ઇન્ડિયાના નિયમો મુજબ વકીલ દ્વારા કામ મેળવવા માટે જાહેરાત અથવા પ્રલોભન આપવું માન્ય નથી. આ વેબસાઇટમાં પ્રવેશ કરીને તમે સ્વીકારો છો કે તમે એડવોકેટ ભુપતદાન ટી. ગઢવી વિશેની માહિતી તમારી પોતાની ઇચ્છાથી મેળવી રહ્યા છો."
          : "The Bar Council of India does not permit advocates to solicit work or advertise. By entering this website, you confirm that you are seeking information about Adv. Bhupatdan T. Gadhavi on your own initiative."}
      </p>

      <p>
        ${isGu
          ? "આ સામગ્રી માત્ર સામાન્ય માહિતી માટે છે, કાનૂની સલાહ નથી અને તેનાથી વકીલ-મુવક્કિલ સંબંધ સ્થાપિત થતો નથી."
          : "The material is for general information only, does not constitute legal advice and does not create an advocate-client relationship."}
      </p>

      <p>
        ${isGu
          ? "ઔપચારિક નિમણૂકની પુષ્ટિ ન થાય ત્યાં સુધી ગુપ્ત અથવા સમયમર્યાદાવાળી માહિતી મોકલશો નહીં."
          : "Do not send confidential or time-sensitive information until an engagement is formally confirmed."}
      </p>

      <div class="modal-actions">

        <button class="btn btn-dark" id="acceptDisclaimer">
          ${isGu
            ? "હું સમજ્યો છું અને આગળ વધવા ઇચ્છું છું"
            : "I Understand and Wish to Continue"}
        </button>

        <button class="btn" id="exitWebsite" style="border:1px solid var(--line)">
          ${isGu ? "વેબસાઇટમાંથી બહાર નીકળો" : "Exit Website"}
        </button>

      </div>

    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("acceptDisclaimer").onclick = () => {
    localStorage.setItem("btg_ack", "1");
    modal.remove();
  };

  document.getElementById("exitWebsite").onclick = () => {
    window.location.href = "https://www.google.com/";
  };
}

function setupHeader() {
  const header = document.getElementById("header");
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });

  toggle?.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav?.querySelectorAll("a").forEach(a => {
    a.onclick = () => nav.classList.remove("open");
  });
}

function setupReveal() {
  const els = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    els.forEach(x => x.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: .08
  });

  els.forEach(x => observer.observe(x));
}

function setupContactForm() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const f = new FormData(form);

    const subject = encodeURIComponent(
      `Website enquiry - ${f.get("matter") || "Legal matter"}`
    );

    const body = encodeURIComponent(
`Name: ${f.get("name")}
Telephone: ${f.get("phone")}
Email: ${f.get("email")}
Preferred language: ${f.get("language")}
Type of matter: ${f.get("matter")}
Court / Authority: ${f.get("court")}
Case number: ${f.get("case")}
Next hearing / deadline: ${f.get("deadline")}

Brief non-confidential summary:
${f.get("summary")}`
    );

    window.location.href =
      `mailto:btgadhavi78@gmail.com?subject=${subject}&body=${body}`;
  });
}

function injectSchema() {
  const base =
    "https://abhishekkayastha74-cloud.github.io/B.T.-website-view-/";

  let schema;

  if (page === "home") {
    schema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "B T Gadhavi Advocate & Notary",
      "url": base,
      "telephone": "+91-96872-75908",
      "email": "btgadhavi78@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gandhinagar",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "City",
        "name": "Gandhinagar"
      },
      "knowsLanguage": [
        "Gujarati",
        "Hindi",
        "English"
      ]
    };
  }

  if (page === "practice-detail") {
    const item = practiceAreas.find(x => x.slug === slug);

    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": base
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Practice Areas",
          "item": `${base}practice-areas.html`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": item?.en.title || "Practice Area"
        }
      ]
    };
  }

  if (!schema) return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);

  document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderPage();
  renderFooter();

  setupHeader();
  setupContactForm();
  setupReveal();
  injectSchema();

  renderEntryDisclaimer();
});
