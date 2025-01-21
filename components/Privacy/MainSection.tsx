import React from "react";

const MainSection = () => {
  return (
    <section className="p-6 space-y-8 bg-gray-200 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto ">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              1. Data Collection
            </h2>
            <p>
              We collect the following information to provide our financial
              management services:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Account information (email, name, profile image) using Google
              </li>
              <li>Financial data (transactions, account balances)</li>
              <li>Budget categories and planning information</li>
              <li>Usage analytics and preferences</li>
            </ul>

            <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              2. Data Usage
            </h2>
            <p>Your data is used to:</p>
            <ul className="list-disc pl-6">
              <li>Provide personal finance management features</li>
              <li>Generate spending analytics and insights</li>
              <li>Improve our services and user experience</li>
              <li>Send relevant notifications about your accounts</li>
            </ul>

            <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              3. Data Protection
            </h2>
            <p>We implement security measures including:</p>
            <ul className="list-disc pl-6">
              <li>Encrypted data storage and transmission</li>
              <li>Secure authentication</li>
              <li>Regular security audits and updates</li>
            </ul>
          </div>

          <div className="mt-12 space-y-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">1. Service Usage</h2>
              <ul className="list-disc pl-6">
                <li>Users are responsible for maintaining account security</li>
                <li>Prohibited from sharing account access</li>
              </ul>

              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                2. User Responsibilities
              </h2>
              <ul className="list-disc pl-6">
                <li>Maintain accurate financial records</li>
                <li>Report any security concerns promptly</li>
              </ul>

              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                3. Service Limitations
              </h2>
              <ul className="list-disc pl-6">
                <li>Data accuracy depends on user input</li>
                <li>Features may change with updates</li>
                <li>Export functionality subject to size limits</li>
              </ul>

              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                4. Contact Information
              </h2>
              <p>For any questions, concerns, or data-related requests:</p>
              <ul className="list-disc pl-6">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:ntwalipit@gmail.com"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold hover:underline"
                  >
                    ntwalipit@gmail.com
                  </a>
                </li>
                <li>Response time: Within 2 business days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainSection;
