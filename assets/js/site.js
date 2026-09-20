const lang = document.documentElement.lang.startsWith("gu") ? "gu" : "en";
const page = document.body.dataset.page || "home";
const isGujarati = lang === "gu";

const root = isGujarati ? "../" : "";
const guRoot = isGujarati ? "" : "gu/";

const pageFiles = {
  home: "index.html",
  about: "about.html",
  practice: "practice-areas.html",
  contact: "contact.html",
  disclaimer: "disclaimer.html",
  privacy: "privacy-policy.html"
};

function href(target) {
  if (isGujarati) return target === "home" ? "index.html" : pageFiles[target];
  return target === "home" ? "index.html" : pageFiles[target];
}

function alternateHref() {
  const file = pageFiles[page];
  return isGujarati ? `../${file}` : `gu/${file}`;
}

const labels = {
  en: {
    home: "Home",
    about: "About",
    practice: "Practice Areas",
    contact: "Contact",
    disclaimer: "Disclaimer",
    privacy: "Privacy Policy"
  },
  gu: {
    home: "મુખ્ય પાનું",
    about: "પરિચય",
    practice: "કાર્યક્ષેત્રો",
    contact: "સંપર્ક",
    disclaimer: "ડિસ્ક્લેમર",
    privacy: "ગોપનીયતા નીતિ"
  }
};

function renderHeader() {
  const l = labels[lang];

  document.getElementById("site-header").innerHTML = `
    <header class="site-header" id="header">
      <div class="container header-inner">

        <a class="brand" href="${href("home")}">
          <strong>B T Gadhavi</strong>
          <small>${isGujarati ? "એડવોકેટ અને નોટરી" : "Advocate & Notary"}</small>
        </a>

        <nav class="nav" id="nav">
          ${navLink("home", l.home)}
          ${navLink("about", l.about)}
          ${navLink("practice", l.practice)}
          ${navLink("contact", l.contact)}
          <a class="lang-switch" href="${alternateHref()}">
            ${isGujarati ? "EN" : "ગુજરાતી"}
          </a>
        </nav>

        <button class="menu-toggle" id="menuToggle" aria-label="Menu">
          ☰
        </button>

      </div>
    </header>
  `;
}

function navLink(target, text) {
  return `
    <a href="${href(target)}" class="${page === target ? "active" : ""}">
      ${text}
    </a>
  `;
}

function renderFooter() {
  const l = labels[lang];

  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="container">

        <div class="footer-grid">

          <div>
            <div class="footer-brand">B T Gadhavi</div>
            <p>
              ${isGujarati
                ? "એડવોકેટ અને નોટરી<br>ગાંધીનગર, ગુજરાત"
                : "Advocate & Notary<br>Gandhinagar, Gujarat"}
            </p>
            <p style="font-size:12px; opacity:.62;">
              ${isGujarati
                ? "બાર કાઉન્સિલ ઓફ ગુજરાત ક્રમાંક G/81/2004<br>ગુજરાત હાઈકોર્ટ કોડ 6092<br>વર્ષ 2004થી વકીલાત"
                : "Bar Council of Gujarat No. G/81/2004<br>Gujarat High Court Code 6092<br>Practising since 2004"}
            </p>
          </div>

          <div>
            <div class="footer-label">${isGujarati ? "નેવિગેશન" : "Navigation"}</div>
            <div class="footer-nav">
              <a href="${href("home")}">${l.home}</a>
              <a href="${href("about")}">${l.about}</a>
              <a href="${href("practice")}">${l.practice}</a>
              <a href="${href("contact")}">${l.contact}</a>
            </div>
          </div>

          <div>
            <div class="footer-label">${isGujarati ? "સંપર્ક" : "Contact"}</div>

            <p>
              <a href="tel:+919687275908">+91 96872 75908</a><br>
              <a href="mailto:btgadhavi78@gmail.com">btgadhavi78@gmail.com</a><br>
              Gandhinagar, Gujarat
            </p>

            <div class="footer-nav">
              <a href="${href("disclaimer")}">${l.disclaimer}</a>
              <a href="${href("privacy")}">${l.privacy}</a>
            </div>
          </div>

        </div>

        <div class="footer-bottom">
          <span>© <span id="year"></span> B. T. Gadhavi. All rights reserved.</span>

          <span>
            ${isGujarati
              ? "આ વેબસાઇટની માહિતી સામાન્ય સ્વરૂપની છે અને કાનૂની સલાહ નથી."
              : "Website information is general in nature and does not constitute legal advice."}
          </span>
        </div>

      </div>
    </footer>
  `;

  document.getElementById("year").textContent = new Date().getFullYear();
}

const practicesEn = [
  ["Civil & Commercial Litigation",
    "Civil suits, injunctions, recovery, contracts, property disputes, specific performance, execution, appeals and settlement."],

  ["Criminal Law",
    "Complaints, FIR-related proceedings, bail, remand, discharge, trial, revision and appeal, as applicable."],

  ["Family & Matrimonial Law",
    "Divorce, maintenance, domestic violence, custody, visitation, family settlement and related proceedings."],

  ["Consumer Protection",
    "Consumer disputes involving insurance, banking, housing, goods and services, including complaint and appeal proceedings."],

  ["Revenue & Land Matters",
    "Mutation, RTS, agricultural land, tenure, tenancy, non-agricultural permission and revenue proceedings."],

  ["Property Title & Registration",
    "Title search, legal opinion, mortgage due diligence, conveyancing, stamp duty and registration support."],

  ["Banking & Finance",
    "Loan documentation, mortgage work, recovery, SARFAESI, arbitration and Negotiable Instruments Act matters."],

  ["Insurance & MACT",
    "Insurance claim disputes, consumer proceedings, motor accident claims and related legal opinions."],

  ["Business Contracts",
    "Commercial agreements, notices, partnership and business documentation, drafting and vetting."],

  ["Notarial Work",
    "Notarial acts and document authentication within the applicable legal and administrative framework."]
];

const practicesGu = [
  ["સિવિલ અને વાણિજ્યિક કેસો",
    "દાવા, મનાઈહુકમ, વસૂલાત, કરાર, મિલકત વિવાદ, ચોક્કસ પાલન, અમલવારી, અપીલ અને સમાધાન."],

  ["ફોજદારી કાયદો",
    "ફરિયાદ, FIR સંબંધિત કાર્યવાહી, આગોતરા તથા નિયમિત જામીન, રિમાન્ડ, ડિસ્ચાર્જ, ટ્રાયલ, રિવિઝન અને અપીલ."],

  ["ફેમિલી અને લગ્નવિષયક કેસો",
    "છૂટાછેડા, ભરણપોષણ, ઘરેલુ હિંસા, બાળકની કસ્ટડી, મુલાકાતનો હક અને પારિવારિક સમાધાન."],

  ["ગ્રાહક સુરક્ષા",
    "વીમા, બેંક, આવાસ, વસ્તુ અને સેવામાં ખામી સંબંધિત ગ્રાહક કાર્યવાહી."],

  ["મહેસૂલ અને જમીન બાબતો",
    "મ્યુટેશન એન્ટ્રી, RTS, જમીનની શરતો, ખેતીની જમીન, ગણોત, બિનખેતી પરવાનગી અને અપીલ-રિવિઝન."],

  ["મિલકત ટાઇટલ અને રજિસ્ટ્રેશન",
    "ટાઇટલ સર્ચ, કાનૂની અભિપ્રાય, મોર્ગેજ તપાસ, દસ્તાવેજ, સ્ટેમ્પ ડ્યૂટી અને નોંધણી."],

  ["બેંકિંગ અને ફાઇનાન્સ",
    "લોન અને સિક્યુરિટી દસ્તાવેજો, મોર્ગેજ, વસૂલાત, SARFAESI, આર્બિટ્રેશન અને NI Act કેસો."],

  ["વીમા અને MACT",
    "વીમા દાવાના વિવાદ, ગ્રાહક કાર્યવાહી અને મોટર અકસ્માત વળતર સંબંધિત બાબતો."],

  ["બિઝનેસ કરારો",
    "વ્યાપારી કરારો, MOU, ભાગીદારી અને બિઝનેસ દસ્તાવેજોનું ડ્રાફ્ટિંગ તથા ચકાસણી."],

  ["નોટરી કામગીરી",
    "લાગુ કાયદા અને પ્રક્રિયા મુજબ સોગંદનામા, ઘોષણા તથા અન્ય દસ્તાવેજોની નોટરી કામગીરી."]
];

function heroCourtArt() {
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
          ${isGujarati
            ? "હકીકતો. દસ્તાવેજો. કાયદો."
            : "Facts. Documents. Law."}
        </strong>
      </div>
    </div>
  `;
}

function renderHome() {
  const practices = isGujarati ? practicesGu : practicesEn;

  return `
    <section class="hero">
      <div class="container hero-grid">

        <div class="reveal">
          <div class="eyebrow">
            ${isGujarati ? "ગાંધીનગર · ગુજરાત" : "Gandhinagar · Gujarat"}
          </div>

          <h1>
            ${isGujarati
              ? "ભુપતદાન ટી. ગઢવી"
              : "Bhupatdan T. Gadhavi"}
          </h1>

          <p class="lead">
            ${isGujarati
              ? "એડવોકેટ અને નોટરી. સિવિલ, ફોજદારી, ફેમિલી, ગ્રાહક સુરક્ષા, મહેસૂલ, મિલકત, બેંકિંગ તથા સંબંધિત કાનૂની બાબતોમાં પ્રતિનિધિત્વ, સલાહ અને દસ્તાવેજી સહાય."
              : "Advocate and Notary. Representation, advisory and documentation support in civil, criminal, family, consumer, revenue, property, banking and related legal matters."}
          </p>

          <div class="btns">
            <a class="btn btn-light" href="${href("practice")}">
              ${isGujarati ? "કાર્યક્ષેત્રો જુઓ" : "View Practice Areas"}
            </a>

            <a class="btn btn-outline" href="${href("contact")}">
              ${isGujarati ? "સંપર્ક વિગતો" : "Contact Details"}
            </a>
          </div>
        </div>

        ${heroCourtArt()}

      </div>
    </section>

    <section class="metrics">
      <div class="container metric-grid">

        ${metric("2004", isGujarati ? "વર્ષથી વકીલાત" : "Practising since")}
        ${metric("G/81/2004", isGujarati ? "બાર કાઉન્સિલ ઓફ ગુજરાત" : "Bar Council of Gujarat")}
        ${metric("6092", isGujarati ? "ગુજરાત હાઈકોર્ટ કોડ" : "Gujarat High Court Code")}
        ${metric(
          isGujarati ? "ગુજરાતી · हिन्दी · English" : "Gujarati · Hindi · English",
          isGujarati ? "પરામર્શની ભાષાઓ" : "Consultation languages"
        )}

      </div>
    </section>

    <section class="section">
      <div class="container two-col">

        <div class="reveal">
          <div class="eyebrow">
            ${isGujarati ? "વ્યાવસાયિક અભિગમ" : "Professional approach"}
          </div>

          <div class="large-statement">
            ${isGujarati
              ? "દરેક કાનૂની બાબત હકીકત, દસ્તાવેજ, અધિકારક્ષેત્ર અને પ્રક્રિયાથી શરૂ થાય છે."
              : "Every legal matter begins with facts, documents, jurisdiction and procedure."}
          </div>
        </div>

        <div class="content-panel reveal">
          <p>
            ${isGujarati
              ? "વ્યક્તિઓ, પરિવારો, વ્યવસાયિક સંસ્થાઓ, ડેવલપરો, નાણાકીય સંસ્થાઓ તથા અન્ય સંગઠનોને કોર્ટ કાર્યવાહી, મહેસૂલી કેસો, મિલકતની કાયદાકીય તપાસ, કાનૂની દસ્તાવેજો અને વિવાદ નિવારણ સંબંધિત કામગીરીમાં સહાય આપવામાં આવે છે."
              : "The practice assists individuals, families, businesses, developers, financial institutions and other organisations in court proceedings, revenue matters, property due diligence, legal documentation and dispute resolution."}
          </p>

          <p>
            ${isGujarati
              ? "કોઈ પણ કામ સ્વીકારવું હિતસંઘર્ષની તપાસ, દસ્તાવેજોની સમીક્ષા, ઉપલબ્ધતા અને ઔપચારિક નિમણૂકને આધીન રહેશે."
              : "Advice and representation are undertaken subject to conflict checks, document review, availability and formal engagement."}
          </p>
        </div>

      </div>
    </section>

    <section class="section dark-section">
      <div class="container">

        <div class="section-head reveal">
          <div class="eyebrow">
            ${isGujarati ? "મુખ્ય કાર્યક્ષેત્રો" : "Core practice areas"}
          </div>

          <h2 class="section-title">
            ${isGujarati
              ? "કાનૂની કામગીરીના મુખ્ય ક્ષેત્રો"
              : "Areas of legal practice"}
          </h2>

          <p class="section-copy">
            ${isGujarati
              ? "કોઈ પણ બાબતની સ્વીકૃતિ અધિકારક્ષેત્ર, હિતસંઘર્ષ, દસ્તાવેજોની સમીક્ષા અને ઔપચારિક નિમણૂકને આધીન છે."
              : "Acceptance of a matter depends on jurisdiction, conflict checks, document review, availability and formal engagement."}
          </p>
        </div>

        <div class="practice-grid">
          ${practices.map((p, i) => `
            <article class="practice-card reveal">
              <div class="practice-number">
                ${String(i + 1).padStart(2, "0")}
              </div>
              <h3>${p[0]}</h3>
              <p>${p[1]}</p>
            </article>
          `).join("")}
        </div>

      </div>
    </section>

    ${renderProcess()}

    ${renderForums()}

    <section class="section">
      <div class="container profile-grid">

        <div class="profile-art reveal">
          <div class="profile-monogram">BTG</div>
        </div>

        <div class="reveal">
          <div class="eyebrow">
            ${isGujarati ? "વ્યાવસાયિક પરિચય" : "Professional profile"}
          </div>

          <h2 class="section-title">
            ${isGujarati
              ? "ભુપતદાન ટી. ગઢવી"
              : "Bhupatdan T. Gadhavi"}
          </h2>

          <p class="section-copy">
            ${isGujarati
              ? "એડવોકેટ અને નોટરી, ગાંધીનગર, ગુજરાત. વર્ષ 2004થી બાર કાઉન્સિલ ઓફ ગુજરાતમાં નોંધાયેલ."
              : "Advocate and Notary practising in Gandhinagar, Gujarat. Enrolled with the Bar Council of Gujarat since 2004."}
          </p>

          <div class="profile-data">
            ${profileItem(isGujarati ? "લાયકાત" : "Qualification", "B.A., LL.B.")}
            ${profileItem(isGujarati ? "વકીલાત" : "Practice since", "2004")}
            ${profileItem(isGujarati ? "નોંધણી" : "Enrollment", "G/81/2004")}
            ${profileItem(isGujarati ? "હાઈકોર્ટ કોડ" : "High Court Code", "6092")}
            ${profileItem(isGujarati ? "ભાષાઓ" : "Languages", isGujarati ? "ગુજરાતી, हिन्दी, English" : "Gujarati, Hindi, English")}
            ${profileItem(isGujarati ? "સ્થળ" : "Location", "Gandhinagar, Gujarat")}
          </div>

          <div class="btns">
            <a class="btn btn-dark" href="${href("about")}">
              ${isGujarati ? "પૂર્ણ પરિચય જુઓ" : "View Full Profile"}
            </a>
          </div>

        </div>

      </div>
    </section>

    ${renderCTA()}
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

function profileItem(label, value) {
  return `
    <div>
      <small>${label}</small>
      <strong>${value}</strong>
    </div>
  `;
}

function renderProcess() {
  const en = [
    ["Initial information", "Initial information and conflict check."],
    ["Document review", "Review of facts, documents, dates and jurisdiction."],
    ["Legal options", "Explanation of available legal options and procedural risks."],
    ["Scope confirmation", "Confirmation of scope, professional fees and required documents."],
    ["Legal work", "Drafting, filing, representation, registration or advisory work as engaged."],
    ["Updates", "Case updates and further instructions when required."]
  ];

  const gu = [
    ["પ્રાથમિક માહિતી", "પ્રાથમિક માહિતી અને હિતસંઘર્ષની તપાસ."],
    ["દસ્તાવેજોની સમીક્ષા", "હકીકતો, દસ્તાવેજો, તારીખો અને અધિકારક્ષેત્રની સમીક્ષા."],
    ["કાનૂની વિકલ્પો", "ઉપલબ્ધ કાનૂની વિકલ્પો અને પ્રક્રિયાત્મક જોખમની સમજ."],
    ["કામનો વ્યાપ", "વ્યાવસાયિક ફી, કામનો વ્યાપ અને જરૂરી દસ્તાવેજોની પુષ્ટિ."],
    ["કાનૂની કામગીરી", "ડ્રાફ્ટિંગ, ફાઇલિંગ, રજૂઆત, નોંધણી અથવા કાનૂની સલાહ."],
    ["અપડેટ", "જરૂર મુજબ કેસની માહિતી અને આગળની સૂચનાઓ."]
  ];

  const items = isGujarati ? gu : en;

  return `
    <section class="section">
      <div class="container">

        <div class="section-head reveal">
          <div class="eyebrow">
            ${isGujarati ? "કાર્યપદ્ધતિ" : "How matters are handled"}
          </div>

          <h2 class="section-title">
            ${isGujarati
              ? "સુવ્યવસ્થિત પ્રક્રિયા"
              : "A structured legal process"}
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

function renderForums() {
  const en = [
    "District and Sessions Court, Gandhinagar",
    "Civil and criminal courts having jurisdiction",
    "Family Court, Gandhinagar",
    "District Consumer Disputes Redressal Commission",
    "Gujarat High Court",
    "Mamlatdar and Agricultural Lands Tribunal",
    "Deputy Collector and District Collector",
    "Additional Secretary, Revenue Department",
    "Gujarat Revenue Tribunal",
    "Gujarat Real Estate Regulatory Authority",
    "Sub-Registrar, stamp and registration authorities"
  ];

  const gu = [
    "જિલ્લા અને સેશન્સ કોર્ટ, ગાંધીનગર",
    "અધિકાર ધરાવતી સિવિલ અને ફોજદારી કોર્ટ",
    "ફેમિલી કોર્ટ, ગાંધીનગર",
    "જિલ્લા ગ્રાહક તકરાર નિવારણ આયોગ",
    "ગુજરાત હાઈકોર્ટ",
    "મામલતદાર અને કૃષિ જમીન પંચ",
    "નાયબ કલેક્ટર અને જિલ્લા કલેક્ટર",
    "અધિક સચિવ, મહેસૂલ વિભાગ",
    "ગુજરાત રેવન્યુ ટ્રિબ્યુનલ",
    "ગુજરાત રિયલ એસ્ટેટ રેગ્યુલેટરી ઓથોરિટી",
    "સબ-રજિસ્ટ્રાર, સ્ટેમ્પ અને નોંધણી સત્તાધિકારી"
  ];

  const items = isGujarati ? gu : en;

  return `
    <section class="section forums">
      <div class="container">

        <div class="section-head reveal">
          <div class="eyebrow">
            ${isGujarati ? "કોર્ટ અને સત્તાધિકારીઓ" : "Courts & authorities"}
          </div>

          <h2 class="section-title">
            ${isGujarati
              ? "યોગ્ય અધિકારક્ષેત્ર મુજબ કાર્યવાહી"
              : "Representation subject to jurisdiction"}
          </h2>

          <p class="section-copy">
            ${isGujarati
              ? "કોઈ કોર્ટ અથવા સત્તાધિકારીનું નામ દર્શાવવાથી દરેક કેસ ત્યાં દાખલ કરી શકાય એવો અર્થ થતો નથી."
              : "Listing a court or authority does not imply that every matter can be filed there. Jurisdiction depends on the applicable law, relief, subject matter, location, valuation and procedural stage."}
          </p>
        </div>

        <div class="forum-list">
          ${items.map(x => `
            <div class="forum-item reveal">
              <span>${x}</span>
              <span>↗</span>
            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    ${pageHero(
      isGujarati ? "પરિચય" : "Professional Profile",
      isGujarati
        ? "એડવોકેટ ભુપતદાન ટી. ગઢવીનો વ્યાવસાયિક પરિચય અને કાર્ય કરવાની પદ્ધતિ."
        : "Professional profile, legal approach and practice information for Adv. Bhupatdan T. Gadhavi."
    )}

    <section class="section">
      <div class="container profile-grid">

        <div class="profile-art reveal">
          <div class="profile-monogram">BTG</div>
        </div>

        <div class="reveal">
          <div class="eyebrow">
            ${isGujarati ? "એડવોકેટ અને નોટરી" : "Advocate & Notary"}
          </div>

          <h2 class="section-title">
            ${isGujarati ? "ભુપતદાન ટી. ગઢવી" : "Bhupatdan T. Gadhavi"}
          </h2>

          <p class="section-copy">
            ${isGujarati
              ? "હું ભુપતદાન ટી. ગઢવી, એડવોકેટ અને નોટરી છું અને ગાંધીનગર, ગુજરાત ખાતે વકીલાત કરું છું. વર્ષ 2004થી બાર કાઉન્સિલ ઓફ ગુજરાતમાં નોંધાયેલ છું."
              : "I am Bhupatdan T. Gadhavi, an Advocate and Notary practising in Gandhinagar, Gujarat. I have been enrolled with the Bar Council of Gujarat since 2004."}
          </p>

          <p>
            ${isGujarati
              ? "મારી પ્રેક્ટિસમાં કોર્ટ કેસો, કાનૂની સલાહ, જમીન અને મિલકત બાબતો, બેંકિંગ અને ફાઇનાન્સ, ગ્રાહક વિવાદો, ફેમિલી કોર્ટની કાર્યવાહી તથા કાનૂની દસ્તાવેજોનો સમાવેશ થાય છે."
              : "My practice includes litigation, advisory work, land and property matters, banking and finance work, consumer disputes, family proceedings and legal documentation."}
          </p>

          <p>
            ${isGujarati
              ? "દરેક કેસમાં મહત્વપૂર્ણ હકીકતો, દસ્તાવેજો, કાયદાકીય સમયમર્યાદા, અધિકારક્ષેત્ર અને કાર્યવાહી કયા તબક્કે છે તેની તપાસ કરવામાં આવે છે."
              : "Each matter is approached by first identifying the material facts, relevant documents, limitation, jurisdiction and procedural stage."}
          </p>

          <div class="profile-data">
            ${profileItem(isGujarati ? "હોદ્દો" : "Designation", isGujarati ? "એડવોકેટ અને નોટરી, ભારત સરકાર" : "Advocate and Notary, Government of India")}
            ${profileItem(isGujarati ? "લાયકાત" : "Qualification", "B.A., LL.B.")}
            ${profileItem(isGujarati ? "નોંધણી" : "Enrollment", "G/81/2004")}
            ${profileItem(isGujarati ? "ગુજરાત હાઈકોર્ટ કોડ" : "Gujarat High Court Code", "6092")}
            ${profileItem(isGujarati ? "વકીલાતની શરૂઆત" : "Practice since", "2004")}
            ${profileItem(isGujarati ? "સ્થળ" : "Practice location", "Gandhinagar, Gujarat")}
          </div>
        </div>

      </div>
    </section>

    <section class="section dark-section">
      <div class="container two-col">

        <div class="reveal">
          <div class="eyebrow">
            ${isGujarati ? "કાર્ય કરવાની પદ્ધતિ" : "Professional approach"}
          </div>

          <h2 class="section-title">
            ${isGujarati
              ? "હકીકત અને દસ્તાવેજ આધારિત મૂલ્યાંકન"
              : "Fact and document based assessment"}
          </h2>
        </div>

        <div class="reveal section-copy">
          <p>${isGujarati ? "• અધિકારક્ષેત્ર, સમયમર્યાદા અને કાર્યવાહીનો તબક્કો સ્પષ્ટ કરવો" : "• Clear identification of jurisdiction, limitation and procedural stage"}</p>
          <p>${isGujarati ? "• સચોટ ડ્રાફ્ટિંગ અને વ્યવસ્થિત દસ્તાવેજી રેકોર્ડ" : "• Focused drafting and organised documentary record"}</p>
          <p>${isGujarati ? "• કાનૂની વિકલ્પો અને મહત્વપૂર્ણ જોખમની સમજ" : "• Explanation of available options and material risks"}</p>
          <p>${isGujarati ? "• પક્ષકારની માહિતીની ગોપનીયતા" : "• Confidential handling of client information"}</p>
          <p>${isGujarati ? "• મુખ્ય કામગીરી પહેલાં કામનો વ્યાપ અને વ્યાવસાયિક ફી અંગે સ્પષ્ટતા" : "• Professional fee and scope confirmation before substantive work"}</p>
        </div>

      </div>
    </section>

    ${renderCTA()}
  `;
}

function renderPractice() {
  const p = isGujarati ? practicesGu : practicesEn;

  return `
    ${pageHero(
      isGujarati ? "કાર્યક્ષેત્રો" : "Practice Areas",
      isGujarati
        ? "કાનૂની સલાહ, પ્રતિનિધિત્વ અને દસ્તાવેજી કામગીરીના મુખ્ય ક્ષેત્રો."
        : "Principal areas in which legal advice, representation or documentation may be undertaken."
    )}

    <section class="section">
      <div class="container">

        ${p.map((x, i) => `
          <article class="practice-detail reveal">

            <div class="index">
              ${String(i + 1).padStart(2, "0")}
            </div>

            <h2>${x[0]}</h2>

            <p>${practiceLong(i)}</p>

          </article>
        `).join("")}

      </div>
    </section>

    ${renderForums()}

    ${renderCTA()}
  `;
}

function practiceLong(i) {
  const en = [
    "Advice and representation in civil suits and commercial disputes, including declaration, injunction, possession, recovery, specific performance, partition, succession, contractual disputes, business disputes, execution proceedings, appeals, revisions, mediation and settlement.",

    "Advice and representation in criminal complaints, FIR-related proceedings, anticipatory and regular bail, remand, discharge, trial, revision and appeal, as applicable. Strategy depends on the record, stage of investigation or trial and governing law.",

    "Advice and representation in mutual-consent and contested divorce, maintenance, domestic violence proceedings, child custody and visitation, matrimonial complaints, family settlement and mediation.",

    "Consumer complaint, reply, evidence, written argument, execution and appeal work in disputes relating to insurance, banking, housing, defective goods and deficiency in services.",

    "Proceedings concerning mutation entries, RTS disputes, agricultural land, tenure conditions, tenancy, non-agricultural permission and related Gujarat revenue and land laws.",

    "Title search and legal opinion for immovable property including title chain, revenue records, mutation entries, property card, encumbrance material, tenure, non-agricultural status, town-planning implications and documentation.",

    "Legal work for borrowers, lenders or institutions subject to professional obligations and conflict checks, including title investigation, mortgage documents, loan and security documentation, recovery, SARFAESI, arbitration and Negotiable Instruments Act matters.",

    "Advice and representation in insurance-policy disputes, claim repudiation, consumer complaints, insurance recovery and motor accident claim matters, including review of relevant policy and accident documents.",

    "Drafting and vetting of commercial contracts, memoranda of understanding, partnership or LLP arrangements, service agreements, consultancy agreements, notices, settlement terms and project-related documents.",

    "Notarial acts may be undertaken for affidavits, declarations, copies, execution and other documents where legally permissible. Notarisation does not replace compulsory registration where registration is required by law."
  ];

  const gu = [
    "જાહેરાતના દાવા, મનાઈહુકમ, કબજો, નાણાં વસૂલાત, ચોક્કસ પાલન, ભાગલા, વારસાઈ, કરારભંગ, ભાગીદારી અથવા વ્યાપારી વિવાદ, ડિક્રીની અમલવારી, અપીલ, રિવિઝન, મીડિયેશન અને સમાધાન સંબંધિત કામગીરી.",

    "ફોજદારી ફરિયાદ, FIR સંબંધિત કાર્યવાહી, આગોતરા અને નિયમિત જામીન, રિમાન્ડ, ડિસ્ચાર્જ, ટ્રાયલ, રિવિઝન અને અપીલમાં લાગુ પડતી સલાહ અને રજૂઆત.",

    "પરસ્પર સંમતિ અથવા વિવાદિત છૂટાછેડા, ભરણપોષણ, ઘરેલુ હિંસા, બાળકની કસ્ટડી અને મુલાકાતનો હક, પારિવારિક સમાધાન અને મીડિયેશન.",

    "વીમા, બેંકિંગ, હાઉસિંગ અથવા ડેવલપમેન્ટ, ખામીવાળી વસ્તુ અને સેવામાં ખામી સંબંધિત ગ્રાહક ફરિયાદ, જવાબ, પુરાવા, લેખિત દલીલ, અમલવારી અને અપીલ.",

    "મ્યુટેશન એન્ટ્રી, RTS વિવાદ, ખેતીની જમીન, જમીનની શરતો, ગણોત, બિનખેતી પરવાનગી તથા લાગુ મહેસૂલ અને જમીન કાયદા હેઠળની બાબતો.",

    "સ્થાવર મિલકતની ટાઇટલ સર્ચ, માલિકીની કડી, મહેસૂલી રેકોર્ડ, 7/12 અને 8-A ઉતારા, મ્યુટેશન એન્ટ્રી, પ્રોપર્ટી કાર્ડ, બોજા, ટાઉન પ્લાનિંગ અને દસ્તાવેજી કામગીરી.",

    "ઉધારકર્તા, ધિરાણકર્તા અથવા સંસ્થા માટે ટાઇટલ તપાસ, મોર્ગેજ, લોન અને સિક્યુરિટી દસ્તાવેજો, વસૂલાત, SARFAESI, આર્બિટ્રેશન અને NI Act સંબંધિત કામગીરી.",

    "વીમા પોલિસી સંબંધિત વિવાદ, ક્લેમ નામંજૂર થવો, ગ્રાહક ફરિયાદ, વીમા વસૂલાત અને મોટર અકસ્માત વળતર બાબતો.",

    "વ્યાપારી કરાર, MOU, ભાગીદારી અથવા LLP વ્યવસ્થા, સેવા અને કન્સલ્ટન્સી એગ્રીમેન્ટ, નોટિસ, સમાધાનની શરતો અને પ્રોજેક્ટ દસ્તાવેજોનું ડ્રાફ્ટિંગ તથા ચકાસણી.",

    "લાગુ કાયદા મુજબ સોગંદનામા, ઘોષણા, નકલ, હસ્તાક્ષર અથવા અન્ય માન્ય દસ્તાવેજોની નોટરી કામગીરી. જ્યાં કાયદા મુજબ રજિસ્ટ્રેશન ફરજિયાત હોય ત્યાં નોટરી તેનો વિકલ્પ નથી."
  ];

  return (isGujarati ? gu : en)[i];
}

function renderContact() {
  return `
    ${pageHero(
      isGujarati ? "સંપર્ક" : "Contact the Office",
      isGujarati
        ? "પ્રાથમિક હિતસંઘર્ષ અને ઉપલબ્ધતાની તપાસ માટે જરૂરી એટલી જ માહિતી આપો."
        : "For an appointment or case-related enquiry, provide only the minimum information required for an initial conflict and availability check."
    )}

    <section class="section">
      <div class="container contact-grid">

        <div class="contact-card reveal">
          <div class="eyebrow">${isGujarati ? "સંપર્ક વિગતો" : "Office details"}</div>

          <h2>
            ${isGujarati ? "ભુપતદાન ટી. ગઢવી" : "Bhupatdan T. Gadhavi"}
          </h2>

          <p>${isGujarati ? "એડવોકેટ અને નોટરી" : "Advocate & Notary"}</p>

          ${contactLine(isGujarati ? "સ્થળ" : "Location", "Gandhinagar, Gujarat")}
          ${contactLine(isGujarati ? "ફોન" : "Telephone", '<a href="tel:+919687275908">+91 96872 75908</a>')}
          ${contactLine(isGujarati ? "ઇમેઇલ" : "Email", '<a href="mailto:btgadhavi78@gmail.com">btgadhavi78@gmail.com</a>')}
          ${contactLine(isGujarati ? "ભાષાઓ" : "Languages", isGujarati ? "ગુજરાતી, हिन्दी અને English" : "Gujarati, Hindi and English")}
        </div>

        <div class="reveal">

          <form id="contactForm">

            <div class="form-grid">

              ${field("name", isGujarati ? "પૂર્ણ નામ" : "Full name", "text")}
              ${field("phone", isGujarati ? "ટેલિફોન નંબર" : "Telephone number", "tel")}
              ${field("email", isGujarati ? "ઇમેઇલ" : "Email", "email")}

              <div class="field">
                <label for="language">${isGujarati ? "પસંદની ભાષા" : "Preferred language"}</label>

                <select id="language" name="language" required>
                  <option value="">${isGujarati ? "પસંદ કરો" : "Select"}</option>
                  <option>Gujarati</option>
                  <option>Hindi</option>
                  <option>English</option>
                </select>
              </div>

              ${field("matter", isGujarati ? "બાબતનો પ્રકાર" : "Type of matter", "text")}
              ${field("court", isGujarati ? "કોર્ટ અથવા સત્તાધિકારી" : "Court or authority", "text")}
              ${field("case", isGujarati ? "કેસ નંબર" : "Case number, if any", "text")}
              ${field("deadline", isGujarati ? "આગામી તારીખ / સમયમર્યાદા" : "Next hearing / deadline", "text")}

              <div class="field full">
                <label for="summary">
                  ${isGujarati
                    ? "ટૂંકી બિન-ગુપ્ત માહિતી"
                    : "Brief non-confidential summary"}
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
                  <input type="checkbox" id="consent" required>

                  <span>
                    ${isGujarati
                      ? "હું ગોપનીયતા નીતિ અને સંપર્ક માટેની શરતો સ્વીકારું છું."
                      : "I consent to the privacy policy and contact response conditions."}
                  </span>
                </label>
              </div>

              <div class="field full">
                <p style="font-size:12px;color:var(--muted);">
                  ${isGujarati
                    ? "આ ફોર્મ મોકલવાથી વકીલ-મુવક્કિલ સંબંધ સ્થાપિત થતો નથી અને કેસ સ્વીકાર્યાની પુષ્ટિ થતી નથી. પુષ્ટિ મળ્યા પહેલાં ગુપ્ત અથવા સમયમર્યાદાવાળી માહિતી મોકલશો નહીં."
                    : "Submission of this form does not create an advocate-client relationship or confirm acceptance of the matter. Do not send confidential or time-sensitive information until engagement is confirmed."}
                </p>
              </div>

              <div class="field full">
                <button class="btn btn-dark" type="submit">
                  ${isGujarati ? "ઇમેઇલ તૈયાર કરો" : "Prepare Email"}
                </button>
              </div>

            </div>

          </form>

        </div>

      </div>
    </section>
  `;
}

function field(id, label, type) {
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
      isGujarati ? "વેબસાઇટ ડિસ્ક્લેમર" : "Website Disclaimer",
      isGujarati
        ? "વેબસાઇટના ઉપયોગ અને વ્યાવસાયિક સંબંધ વિશે મહત્વપૂર્ણ માહિતી."
        : "Important information regarding use of this website and professional engagement."
    )}

    <section class="section">
      <div class="container policy reveal">

        <p>
          ${isGujarati
            ? "બાર કાઉન્સિલ ઓફ ઇન્ડિયાના નિયમો મુજબ વકીલ દ્વારા કામ મેળવવા માટે જાહેરાત અથવા પ્રલોભન આપવું માન્ય નથી. આ વેબસાઇટ માત્ર એડવોકેટ ભુપતદાન ટી. ગઢવીની વ્યાવસાયિક વિગતો અને કાર્યક્ષેત્રો અંગે સામાન્ય માહિતી આપવા માટે જાળવવામાં આવે છે."
            : "The Bar Council of India does not permit advocates to solicit work or advertise. This website is maintained solely to provide general information about Adv. Bhupatdan T. Gadhavi, his professional particulars and areas of practice."}
        </p>

        <p>
          ${isGujarati
            ? "વેબસાઇટનો ઉપયોગ કરનાર વ્યક્તિ સ્વીકારે છે કે તે પોતાની ઇચ્છાથી માહિતી મેળવી રહી છે અને એડવોકેટ અથવા તેમના વતી કોઈ વ્યક્તિ દ્વારા જાહેરાત, આમંત્રણ અથવા પ્રલોભન આપવામાં આવ્યું નથી."
            : "By accessing this website, the user confirms that the information is being sought voluntarily and that there has been no advertisement, personal communication, solicitation, invitation or inducement by the advocate or anyone acting on his behalf."}
        </p>

        <h2>${isGujarati ? "સામાન્ય માહિતી" : "General information"}</h2>

        <p>
          ${isGujarati
            ? "વેબસાઇટની સામગ્રી માત્ર સામાન્ય માહિતી માટે છે. તે કાનૂની સલાહ, કાનૂની અભિપ્રાય અથવા ચોક્કસ કેસની હકીકતો અને દસ્તાવેજોના આધારે આપવામાં આવતી સલાહનો વિકલ્પ નથી."
            : "The content of this website is for general informational purposes only. It is not legal advice, a legal opinion or a substitute for advice based on the facts and documents of a particular matter."}
        </p>

        <h2>${isGujarati ? "વકીલ-મુવક્કિલ સંબંધ" : "Advocate-client relationship"}</h2>

        <p>
          ${isGujarati
            ? "વેબસાઇટ જોવાથી, પૂછપરછ ફોર્મ ભરવાથી, ઇમેઇલ મોકલવાથી અથવા ઓફિસ સાથે વાત કરવાથી વકીલ-મુવક્કિલ સંબંધ સ્થાપિત થતો નથી."
            : "Accessing the website, using the enquiry form, sending an email or speaking with office personnel does not create an advocate-client relationship."}
        </p>

        <p>
          ${isGujarati
            ? "કેસ સ્વીકારવામાં આવે, હિતસંઘર્ષની તપાસ પૂર્ણ થાય અને કામગીરીનો વ્યાપ નક્કી થાય ત્યાર પછી જ એવો સંબંધ સ્થાપિત થાય છે."
            : "Such a relationship arises only after the matter is accepted, conflict checks are completed and the scope of engagement is confirmed."}
        </p>

        <h2>${isGujarati ? "પરિણામ અંગે" : "No outcome assurance"}</h2>

        <p>
          ${isGujarati
            ? "વેબસાઇટ પરનું કોઈ નિવેદન કેસના પરિણામ, સમયગાળો અથવા ખર્ચ અંગે વચન, ખાતરી કે બાંયધરી નથી."
            : "No statement on this website is a promise, warranty or assurance regarding the result, duration or cost of a legal matter."}
        </p>

      </div>
    </section>
  `;
}

function renderPrivacy() {
  return `
    ${pageHero(
      isGujarati ? "ગોપનીયતા નીતિ" : "Privacy Policy",
      isGujarati
        ? "વેબસાઇટ દ્વારા આપવામાં આવતી માહિતીના ઉપયોગ વિશે."
        : "Information about how data submitted through this website may be handled."
    )}

    <section class="section">
      <div class="container policy reveal">

        <h2>${isGujarati ? "કઈ માહિતી એકત્ર થઈ શકે" : "Information that may be collected"}</h2>

        <p>
          ${isGujarati
            ? "વેબસાઇટ દ્વારા નામ, સંપર્ક વિગતો, પસંદની ભાષા, બાબતનો પ્રકાર અને ટૂંકી માહિતી જેવી વિગતો સ્વૈચ્છિક રીતે આપવામાં આવી શકે છે."
            : "This website may collect information voluntarily provided through an enquiry form, email, telephone call or appointment request, such as name, contact details, preferred language, matter category and a brief message."}
        </p>

        <h2>${isGujarati ? "માહિતીનો ઉપયોગ" : "Use of information"}</h2>

        <p>
          ${isGujarati
            ? "માહિતીનો ઉપયોગ પૂછપરછનો જવાબ આપવા, પ્રાથમિક હિતસંઘર્ષ અથવા ઉપલબ્ધતા તપાસવા, મુલાકાત ગોઠવવા અને લાગુ કાનૂની અથવા વ્યાવસાયિક ફરજો માટે થઈ શકે છે."
            : "Information may be used to respond to enquiries, conduct an initial conflict or availability check, arrange appointments, maintain website security and comply with legal or professional obligations."}
        </p>

        <h2>${isGujarati ? "સંવેદનશીલ માહિતી" : "Sensitive information"}</h2>

        <p>
          ${isGujarati
            ? "સામાન્ય વેબ ફોર્મ દ્વારા મૂળ દસ્તાવેજો, બેંકિંગ પાસવર્ડ, વિશેષાધિકૃત સંદેશાવ્યવહાર અથવા અત્યંત સંવેદનશીલ માહિતી મોકલશો નહીં."
            : "Users should not submit unnecessary personal data, original documents, privileged communications, banking credentials, passwords or highly sensitive information through the general enquiry form."}
        </p>

        <h2>${isGujarati ? "સંપર્ક" : "Privacy contact"}</h2>

        <p>
          ${isGujarati
            ? "વ્યક્તિગત માહિતી સંબંધિત પ્રશ્નો btgadhavi78@gmail.com પર મોકલી શકાય છે."
            : "Requests concerning personal information may be sent to btgadhavi78@gmail.com."}
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
          <div class="eyebrow" style="color:white;opacity:.72;">
            ${isGujarati ? "મુલાકાત અને પૂછપરછ" : "Appointments & enquiries"}
          </div>

          <h2>
            ${isGujarati
              ? "ઓફિસનો સંપર્ક કરો"
              : "Contact the office"}
          </h2>
        </div>

        <a class="btn btn-light" href="${href("contact")}">
          ${isGujarati ? "સંપર્ક વિગતો" : "Contact Details"} →
        </a>

      </div>
    </section>
  `;
}

function pageHero(title, copy) {
  return `
    <section class="page-hero">
      <div class="container reveal">
        <div class="eyebrow">
          B T Gadhavi · ${isGujarati ? "એડવોકેટ અને નોટરી" : "Advocate & Notary"}
        </div>

        <h1>${title}</h1>

        <p>${copy}</p>
      </div>
    </section>
  `;
}

function renderPage() {
  const target = document.getElementById("page-content");

  if (!target) return;

  const renderers = {
    home: renderHome,
    about: renderAbout,
    practice: renderPractice,
    contact: renderContact,
    disclaimer: renderDisclaimer,
    privacy: renderPrivacy
  };

  target.innerHTML = renderers[page]();
}

function renderEntryDisclaimer() {
  if (localStorage.getItem("btg_disclaimer_ack") === "1") return;

  const modal = document.createElement("div");
  modal.className = "modal open";
  modal.id = "disclaimerModal";

  modal.innerHTML = `
    <div class="modal-card">

      <div class="eyebrow">
        ${isGujarati ? "વેબસાઇટ પ્રવેશ ડિસ્ક્લેમર" : "Website Entry Disclaimer"}
      </div>

      <h2>
        ${isGujarati ? "માહિતી માટેની વેબસાઇટ" : "General information website"}
      </h2>

      <p>
        ${isGujarati
          ? "બાર કાઉન્સિલ ઓફ ઇન્ડિયાના નિયમો મુજબ વકીલ દ્વારા કામ મેળવવા માટે જાહેરાત અથવા પ્રલોભન આપવું માન્ય નથી. આ વેબસાઇટમાં પ્રવેશ કરીને તમે સ્વીકારો છો કે તમે એડવોકેટ ભુપતદાન ટી. ગઢવી વિશેની માહિતી તમારી પોતાની ઇચ્છાથી મેળવી રહ્યા છો."
          : "The Bar Council of India does not permit advocates to solicit work or advertise. By entering this website, you confirm that you are seeking information about Adv. Bhupatdan T. Gadhavi on your own initiative."}
      </p>

      <p>
        ${isGujarati
          ? "અહીંની સામગ્રી માત્ર સામાન્ય માહિતી માટે છે; તેને કાનૂની સલાહ માનવી નહીં અને તેનાથી વકીલ-મુવક્કિલ સંબંધ સ્થાપિત થતો નથી."
          : "The material on this website is for general information only, does not constitute legal advice and does not create an advocate-client relationship."}
      </p>

      <p>
        ${isGujarati
          ? "ઔપચારિક નિમણૂકની પુષ્ટિ ન થાય ત્યાં સુધી ગુપ્ત અથવા સમયમર્યાદાવાળી માહિતી મોકલશો નહીં."
          : "Please do not send confidential or time-sensitive information until an engagement is formally confirmed."}
      </p>

      <div class="modal-actions">

        <button class="btn btn-dark" id="acceptDisclaimer">
          ${isGujarati
            ? "હું સમજ્યો છું અને આગળ વધવા ઇચ્છું છું"
            : "I Understand and Wish to Continue"}
        </button>

        <button class="btn" style="border:1px solid var(--line);" id="exitWebsite">
          ${isGujarati ? "વેબસાઇટમાંથી બહાર નીકળો" : "Exit Website"}
        </button>

      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("acceptDisclaimer").addEventListener("click", () => {
    localStorage.setItem("btg_disclaimer_ack", "1");
    modal.remove();
  });

  document.getElementById("exitWebsite").addEventListener("click", () => {
    window.location.href = "https://www.google.com/";
  });
}

function setupNavigation() {
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
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(x => x.classList.add("visible"));
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
    threshold: 0.10
  });

  elements.forEach(el => observer.observe(el));
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
Phone: ${f.get("phone")}
Email: ${f.get("email")}
Preferred language: ${f.get("language")}
Matter: ${f.get("matter")}
Court / Authority: ${f.get("court")}
Case number: ${f.get("case")}
Next hearing / deadline: ${f.get("deadline")}

Brief summary:
${f.get("summary")}

This enquiry was prepared through the website contact form.`
    );

    window.location.href =
      `mailto:btgadhavi78@gmail.com?subject=${subject}&body=${body}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderPage();
  renderFooter();

  setupNavigation();
  setupContactForm();

  requestAnimationFrame(setupReveal);

  renderEntryDisclaimer();
});
