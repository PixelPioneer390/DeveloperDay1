import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippets = {
  javascript: `const login = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
};`,

  ios: `func login() {
  Auth0
    .webAuth()
    .start {
      result in
      switch result {
        case .success(let credentials):
          print("Obtained credentials: \\(credentials)")
        case .failure(let error):
          print("Failed with: \\(error)")
      }
    }
}`,

  android: `fun login() {
  Auth0.authentication()
    .login()
    .start(object : Callback<Credentials> {
      override fun onSuccess(credentials: Credentials) {
        Log.d("Auth", "Login successful")
      }

      override fun onFailure(error: AuthenticationException) {
        Log.e("Auth", "Login failed")
      }
    })
}`,

  angular: `login() {
  this.auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  }).subscribe({
    next: () => console.log('Logged in'),
    error: err => console.error(err)
  });
}`
};

const IntegrationSection = () => {
  const [activeLang, setActiveLang] = useState("javascript");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippets[activeLang]);
      alert("Code copied to clipboard!");
    } catch (err) {
      alert("Failed to copy code.");
    }
  };

  return (
    <section className=" text-white xl:py-16 px-4 my-7 2xl:my-15">
      <div className="lg:max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 xl:gap-20">
        {/* Code Block */}
        <div className="bg-[#111] rounded-lg lg:w-full w-[75%] shadow-xl relative border-2 border-gray-700">
          <div className="flex space-x-4 bg-black py-3 rounded-t-lg px-5 text-sm text-gray-400">
            {["javascript", "ios", "android", "angular"].map((lang) => (
              <span
                key={lang}
                className={`cursor-pointer capitalize ${
                  activeLang === lang ? "text-white pb-1" : "hover:text-white"
                }`}
                onClick={() => setActiveLang(lang)}
              >
                {lang}
              </span>
            ))}
          </div>

          {/* Copy Button with Icon */}
          <button
            onClick={handleCopy}
            className="absolute top-2 right-4  bg-black p-2 rounded shadow transition"
            title="Copy code"
          >
            <FiCopy className="w-4 h-4" />
          </button>

          <div className="text-sm leading-7 bg-[#1a1a1a] p-4 rounded-md h-[300px] max-h-[300px] try overflow-auto whitespace-pre overflow-x-auto try-scrollbar scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            <SyntaxHighlighter
              language={["ios", "javascript", "android", "angular"].includes(activeLang) ? "swift" : activeLang}
              style={oneDark}
              customStyle={{ background: "transparent", margin: 0 }}
              wrapLines
              showLineNumbers={false}
            >
              {codeSnippets[activeLang]}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Implement Auth0 in any<br /> application in just 5 minutes
          </h2>
          <p className="text-gray-400 mb-8 text-center">
            With a few lines of code you can have Auth0 integrated in any app
            written in any language, and any framework. We provide 30+ SDKs & Quickstarts
            to help you succeed on your implementation.
          </p>

          {/* Icons Marquee */}
          {/* <div className="relative group overflow-hidden whitespace-nowrap h-24 mx-auto w-[85%] ">
            <div className="flex gap-18 animate-marquee">
              <img src="/icons8-android-logo-50.png" alt="android" className="h-13  filter invert brightness-100" />
              <img src="/icons8-angularjs-50.png" alt="angularjs" className="h-13 filter invert brightness-100" />
              <img src="/icons8-css-logo-50.png" alt="css" className="h-13  filter invert brightness-100" />
              <img src="/icons8-ios-logo-50.png" alt="ios" className="h-13  filter invert brightness-100" />
              <img src="/icons8-javascript-logo-50.png" alt="javascript" className="h-13  filter invert brightness-100" />
              <img src="/icons8-node-js-32.png" alt="node" className="h-13  filter invert brightness-100" />
              <img src="/icons8-android-logo-50.png" alt="android" className="h-13  filter invert brightness-100" />
              <img src="/icons8-angularjs-50.png" alt="angularjs" className="h-13  filter invert brightness-100" />
              <img src="/icons8-css-logo-50.png" alt="css" className="h-13  filter invert brightness-100" />
              <img src="/icons8-ios-logo-50.png" alt="ios" className="h-13  filter invert brightness-100" />

            </div> */}

            {/* Hover Button */}
            {/* <button className="absolute top-[35%] left-1/2 -translate-x-1/2 hover:cursor-pointer -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-3 rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
