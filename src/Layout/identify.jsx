import { useState, useRef, useEffect } from "react";

const IdentityDashboard = () => {
  const [activeIndustry, setActiveIndustry] = useState("B2B SaaS");

  const convenienceRef = useRef(null);
  const privacyRef = useRef(null);
  const securityRef = useRef(null);

  const [convenienceWidth, setConvenienceWidth] = useState(120);
  const [privacyWidth, setPrivacyWidth] = useState(80);
  const [securityWidth, setSecurityWidth] = useState(160);

  const industries = [
    "B2B SaaS",
    "Retail",
    "Financial Services",
    "Publishing",
    "Travel",
    "Healthcare",
  ];

  const industryMetrics = {
    "B2B SaaS": { convenience: 60, privacy: 40, security: 80 },
    "Retail": { convenience: 80, privacy: 30, security: 50 },
    "Financial Services": { convenience: 40, privacy: 90, security: 95 },
    "Publishing": { convenience: 70, privacy: 60, security: 40 },
    "Travel": { convenience: 85, privacy: 50, security: 60 },
    "Healthcare": { convenience: 50, privacy: 95, security: 90 },
  };

  useEffect(() => {
    const metrics = industryMetrics[activeIndustry];

    if (!metrics) return;

    setConvenienceWidth(metrics.convenience * 2);
    setPrivacyWidth(metrics.privacy * 2);
    setSecurityWidth(metrics.security * 2);

    if (convenienceRef.current) {
      convenienceRef.current.textContent = activeIndustry;
    }
    if (privacyRef.current) {
      privacyRef.current.textContent = activeIndustry;
    }
    if (securityRef.current) {
      securityRef.current.textContent = activeIndustry;
    }
  }, [activeIndustry]);

  const tabs = [
    {
      label: "Registration",
      icon: "📝",
      textColor: "text-orange-500",
      borderColor: "border-orange-500",
    },
    {
      label: "Login",
      icon: "🔐",
      textColor: "text-indigo-500",
      borderColor: "border-indigo-500",
    },
    {
      label: "Access",
      icon: "🛡️",
      textColor: "text-blue-400",
      borderColor: "border-blue-400",
    },
    {
      label: "Transactions",
      icon: "🧾",
      textColor: "text-teal-400",
      borderColor: "border-teal-400",
    },
  ];

  const contentData = {
    "B2B SaaS": {
      Registration: ["Bot Detection", "Provisioning"],
      Login: ["Universal Login", "Directory", "Enterprise Federation", "Directory Synchronization"],
      Access: ["Delegated Administration", "Policy Engine", "Fine-Grained Authorization"],
      Transactions: ["RBAC", "ABAC"],
    },
    Retail: {
      Registration: ["Onboarding Flow", "Referral Codes"],
      Login: ["Social Login", "Biometric Auth"],
      Access: ["Store-Level Access", "Audit Logs"],
      Transactions: ["Loyalty Points", "Coupon Validation"],
    },
    "Financial Services": {
      Registration: ["KYC Verification", "Document Upload"],
      Login: ["Multi-factor Auth", "PIN Login"],
      Access: ["Transaction Limits", "Fraud Monitoring"],
      Transactions: ["Secure Transfers", "Account History"],
    },
    Publishing: {
      Registration: ["Subscriber Setup", "Newsletter Signup"],
      Login: ["One-click Login", "Email Magic Link"],
      Access: ["Premium Access", "Content Paywalls"],
      Transactions: ["Subscription Billing", "Promo Codes"],
    },
    Travel: {
      Registration: ["Traveler Profiles", "Itinerary Setup"],
      Login: ["Federated Auth", "Mobile Login"],
      Access: ["Partner Portals", "Role Management"],
      Transactions: ["Booking Verification", "Loyalty Tracking"],
    },
    Healthcare: {
      Registration: ["Patient Intake", "ID Validation"],
      Login: ["HIPAA-Compliant Login", "Device Trust"],
      Access: ["EHR Access", "Role-Based Permissions"],
      Transactions: ["Billing Info", "Claims Processing"],
    },
  };

  const hasLink = (category, item) => {
    return (
      (category === "Login" && item === "Universal Login") ||
      (category === "Access" && item === "Fine-Grained Authorization") ||
      (category === "Footer" && item === "Learn more about Auth0 FGA")
    );
  };

  const renderContent = (industry) => {
    const industryContent = contentData[industry] || {};

    return (
      <div className="relative mt-12 ">
  {/* Tab Headers */}
  <div className="overflow-x-auto sm:overflow-visible scrollbar-hide ">
  <div className="grid  grid-cols-4  md:min-w-[1400px] bg-white border-b border-gray-800 mb-6">
    {tabs.map(({ label, icon, textColor }, index) => (
      <div
        key={label}
        className="flex items-center gap-4 pb-3 px-4"
        style={{
          borderBottom:
            index === 0
              ? "2px solid #f97316"
              : index === 1
              ? "2px solid #6366f1"
              : index === 2
              ? "2px solid #60a5fa"
              : "2px solid #2dd4bf",
        }}
      >
        <span className={textColor}>{icon}</span>
        <h3 className={`text-xs font-medium ${textColor}`}>
          {label.toUpperCase()}
        </h3>
      </div>
    ))}
  </div>
</div>

  {/* Grid Content with horizontal scroll on small screens */}
  <div className="overflow-x-auto sm:overflow-visible scrollbar-hide">
    <div className="flex sm:grid sm:grid-cols-4 gap-4 min-w-[640px] sm:min-w-0">
      {tabs.map(({ label }, index) => (
        <div
          key={label}
          className={`min-w-[50%] sm:min-w-0 ${
            index > 0 ? "sm:border-l border-gray-800 h-48" : "h-48"
          } pl-4 first:pl-0`}
        >
          <div className="flex flex-wrap gap-2">
            {(industryContent[label] || []).map((item, i) =>
              hasLink(label, item) ? (
                <a
                  key={i}
                  href="#"
                  className="bg-gray-800/80 text-sm px-3 py-2 rounded-full text-white hover:bg-gray-700 transition-colors inline-flex items-center w-fit"
                >
                  {item} <span className="ml-1">→</span>
                </a>
              ) : (
                <span
                  key={i}
                  className="bg-gray-800/80 text-sm px-3 py-2 rounded-full text-white w-fit"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    );
  };

  return (
    <div className="min-h-screen text-white font-sans">
      <div className="md:max-w-6xl mx-auto md:px-8 px-4 py-12 md:rounded-3xl overflow-hidden relative">
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `radial-gradient(circle at top, #372A91, #1A1A1A, #111111)`,
          }}
        ></div>

        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-2 max-w-2xl leading-tight">
            Identity is so much more than just the login box
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Let's take a look at everything you can do.
          </p>

          {/* Industry Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  activeIndustry === industry
                    ? "bg-white text-black border-white font-medium"
                    : "border-gray-600 text-gray-400 hover:border-white hover:text-white"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          <p className="text-gray-400 max-w-3xl mb-10">
            Design for security and convenience. Delegate access for B2B2C SaaS
            services. Incorporate an organizational portal, access controls, and
            multiple extensions.
          </p>

          {/* Content Tabs + Data */}
          {renderContent(activeIndustry)}

          {/* Footer */}
          <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 flex-wrap">
            <div>
              <p className="text-white font-semibold text-lg mb-1">
                <span className="text-orange-500 text-xl mr-1">_</span>zapier
              </p>
              <p className="text-gray-400 max-w-xl">
                Zapier is one of many companies harnessing the power of
                Fine-Grained Authorization.{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  Learn more about Auth0 FGA →
                </a>
              </p>
            </div>
            <div className="text-xs text-gray-400 space-y-3 max-w-md">
              <div className="flex items-center justify-between gap-4">
                <h1>CONVENIENCE</h1>
                <div className="relative flex w-full">
                  <span
                    ref={convenienceRef}
                    className="text-white text-sm font-medium absolute opacity-0 pointer-events-none"
                  >
                    {activeIndustry}
                  </span>
                  <div
                    className="h-[1px] bg-white mt-1 transition-all duration-500"
                    style={{ width: `${convenienceWidth}px` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <h1>PRIVACY</h1>
                <div className="relative flex w-full">
                  <span
                    ref={privacyRef}
                    className="text-white text-sm font-medium absolute opacity-0 pointer-events-none"
                  >
                    {activeIndustry}
                  </span>
                  <div
                    className="h-[1px] bg-white mt-1 transition-all duration-500"
                    style={{ width: `${privacyWidth}px` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <h1>SECURITY</h1>
                <div className="relative flex w-full">
                  <span
                    ref={securityRef}
                    className="text-white text-sm font-medium absolute opacity-0 pointer-events-none"
                  >
                    {activeIndustry}
                  </span>
                  <div
                    className="h-[1px] bg-white mt-1 transition-all duration-500"
                    style={{ width: `${securityWidth}px` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityDashboard;
