// NonprofitLegalGuidePDF.jsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    lineHeight: 1.9,
  },
  heading: {
    fontSize: 20,
    color: "blue",
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
  bullet: {
    marginBottom: 10,
  },
  section: {
    marginBottom: 25,
  },
});

// PDF Document
const NonprofitLegalGuideDoc = () => (
  <Document>
    {/* PAGE 1 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>NONPROFIT LEGAL BASICS</Text>
      <Text style={styles.heading}>Charlie Parker C. Global Foundation</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Nonprofit organizations must operate within the framework of local,
          state, and federal laws to maintain compliance and legitimacy.
        </Text>
        <Text style={styles.bullet}>
          • Understanding legal obligations helps protect the organization, its
          donors, staff, and beneficiaries.
        </Text>
        <Text style={styles.bullet}>
          • Key areas include governance, tax compliance, reporting
          requirements, employment law, and intellectual property protection.
        </Text>
        <Text style={styles.bullet}>
          • Establishing a clear organizational structure ensures that roles,
          responsibilities, and authority are well defined.
        </Text>
        <Text style={styles.bullet}>
          • Maintaining proper records of meetings, decisions, and financial
          transactions strengthens transparency and accountability.
        </Text>
        <Text style={styles.bullet}>
          • Board members and leadership must understand their fiduciary duties,
          including duty of care, loyalty, and obedience.
        </Text>
        <Text style={styles.bullet}>
          • Compliance with registration and licensing requirements prevents
          penalties and maintains public trust.
        </Text>
      </View>
    </Page>

    {/* PAGE 2 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>TAX & FINANCIAL COMPLIANCE</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Apply for tax-exempt status where applicable, and ensure annual
          filings are submitted on time.
        </Text>
        <Text style={styles.bullet}>
          • Maintain accurate bookkeeping practices, including tracking
          donations, grants, and expenses.
        </Text>
        <Text style={styles.bullet}>
          • Generate financial statements regularly to review income,
          expenditures, and overall organizational health.
        </Text>
        <Text style={styles.bullet}>
          • Ensure proper handling of restricted funds in accordance with donor
          intent and legal requirements.
        </Text>
        <Text style={styles.bullet}>
          • Implement internal controls to prevent fraud, misuse of funds, and
          noncompliance.
        </Text>
        <Text style={styles.bullet}>
          • Understand payroll obligations, including employee benefits, taxes,
          and recordkeeping.
        </Text>
        <Text style={styles.bullet}>
          • Plan and document financial audits and reviews to maintain
          accountability and donor confidence.
        </Text>
      </View>
    </Page>

    {/* PAGE 3 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>GOVERNANCE & BOARD RESPONSIBILITIES</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Board members are legally responsible for guiding the organization,
          making informed decisions, and monitoring operations.
        </Text>
        <Text style={styles.bullet}>
          • Establish bylaws that outline governance structure, voting
          procedures, and board responsibilities.
        </Text>
        <Text style={styles.bullet}>
          • Regularly schedule board meetings and keep detailed minutes of
          discussions and decisions.
        </Text>
        <Text style={styles.bullet}>
          • Ensure that conflicts of interest are disclosed and managed
          appropriately.
        </Text>
        <Text style={styles.bullet}>
          • Promote transparency in all governance matters to maintain
          stakeholder trust.
        </Text>
        <Text style={styles.bullet}>
          • Provide ongoing training for board members on legal responsibilities
          and nonprofit best practices.
        </Text>
        <Text style={styles.bullet}>
          • Evaluate board performance periodically to ensure accountability and
          effective leadership.
        </Text>
      </View>
    </Page>

    {/* PAGE 4 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>EMPLOYMENT & VOLUNTEER MANAGEMENT</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Comply with labor laws for staff, including contracts, minimum wage,
          working hours, and benefits.
        </Text>
        <Text style={styles.bullet}>
          • Establish clear policies for volunteer engagement, expectations, and
          responsibilities.
        </Text>
        <Text style={styles.bullet}>
          • Implement training programs to ensure safe and effective operations.
        </Text>
        <Text style={styles.bullet}>
          • Maintain a safe and inclusive workplace and volunteer environment,
          preventing discrimination and harassment.
        </Text>
        <Text style={styles.bullet}>
          • Protect sensitive personal information for staff, volunteers, and
          beneficiaries in compliance with privacy laws.
        </Text>
        <Text style={styles.bullet}>
          • Provide channels for grievance reporting and resolution to safeguard
          ethical practices.
        </Text>
        <Text style={styles.bullet}>
          • Document personnel policies and procedures to ensure consistency and
          legal compliance.
        </Text>
      </View>
    </Page>

    {/* PAGE 5 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>
        RISK MANAGEMENT & INTELLECTUAL PROPERTY
      </Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Identify potential risks to the organization, including financial,
          operational, legal, and reputational risks.
        </Text>
        <Text style={styles.bullet}>
          • Implement risk mitigation strategies, including insurance coverage,
          internal controls, and emergency preparedness plans.
        </Text>
        <Text style={styles.bullet}>
          • Ensure compliance with copyright, trademark, and intellectual
          property laws to protect organizational materials.
        </Text>
        <Text style={styles.bullet}>
          • Draft contracts and agreements carefully, seeking legal counsel when
          necessary.
        </Text>
        <Text style={styles.bullet}>
          • Keep accurate records of policies, licenses, and legal documents for
          audits and reference.
        </Text>
        <Text style={styles.bullet}>
          • Monitor regulatory changes and adapt policies to remain compliant.
        </Text>
        <Text style={styles.bullet}>
          • Promote a culture of compliance, ethics, and accountability
          throughout the organization.
        </Text>
        <Text style={styles.bullet}>
          • Ensure that volunteers, staff, and leadership are aware of legal
          requirements and adhere to best practices consistently.
        </Text>
      </View>
    </Page>
  </Document>
);

// Scrollable Viewer Component
const NonprofitLegalGuidePDF = () => {
  const [pdfUrl, setPdfUrl] = React.useState(null);

  React.useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(<NonprofitLegalGuideDoc />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };
    generatePdf();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Nonprofit Legal Basics - Charlie Parker C. Global Foundation
      </h2>

      {/* Scrollable PDF */}
      <div
        className="overflow-y-scroll border w-full h-[80vh] p-2"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <iframe
          src={pdfUrl}
          title="Nonprofit Legal Basics Guide"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>

      {/* Download Button */}
      <div className="text-center mt-4">
        <a
          href={pdfUrl}
          download="NonprofitLegalBasics_CharlieParkerCGlobalFoundation.pdf"
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default NonprofitLegalGuidePDF;
