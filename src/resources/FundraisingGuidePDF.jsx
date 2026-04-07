// FundraisingGuidePDF.jsx
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
const FundraisingGuideDoc = () => (
  <Document>
    {/* PAGE 1 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>FUNDRAISING BEST PRACTICES</Text>
      <Text style={styles.heading}>Charlie Parker C. Global Foundation</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Welcome to the Fundraising Best Practices guide. This resource is
          designed to help volunteers, staff, and partners raise funds
          efficiently, ethically, and sustainably.
        </Text>
        <Text style={styles.bullet}>
          • Effective fundraising begins with a clear understanding of the
          organization’s mission, goals, and funding needs.
        </Text>
        <Text style={styles.bullet}>
          • Ethical practices are essential: always be transparent about how
          funds will be used and ensure donors are fully informed.
        </Text>
        <Text style={styles.bullet}>
          • Build strong relationships with donors through regular updates,
          appreciation, and recognition of their contributions.
        </Text>
        <Text style={styles.bullet}>
          • Set realistic targets and plan campaigns with detailed timelines,
          budget considerations, and resource allocation.
        </Text>
        <Text style={styles.bullet}>
          • Utilize both online and offline fundraising channels to reach a
          wider audience.
        </Text>
        <Text style={styles.bullet}>
          • Engage volunteers and staff to participate actively in fundraising
          events and campaigns, ensuring consistency and collaboration.
        </Text>
        <Text style={styles.bullet}>
          • Monitor fundraising progress regularly and make adjustments as
          needed to achieve goals efficiently.
        </Text>
      </View>
    </Page>

    {/* PAGE 2 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>PLANNING AND STRATEGY</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Start by defining fundraising objectives: identify what programs or
          projects require funding and how much is needed.
        </Text>
        <Text style={styles.bullet}>
          • Segment potential donors based on interests, giving capacity, and
          engagement history.
        </Text>
        <Text style={styles.bullet}>
          • Develop a calendar of fundraising events and campaigns with clear
          roles, responsibilities, and deadlines.
        </Text>
        <Text style={styles.bullet}>
          • Research and utilize various fundraising techniques such as direct
          mail, email campaigns, crowdfunding, grant writing, and community
          events.
        </Text>
        <Text style={styles.bullet}>
          • Incorporate storytelling to demonstrate impact. Share success
          stories, testimonials, and real-life examples of the foundation’s
          work.
        </Text>
        <Text style={styles.bullet}>
          • Establish measurable KPIs to track progress, including donor
          acquisition, retention rates, and funds raised.
        </Text>
        <Text style={styles.bullet}>
          • Always review past campaigns to identify successes, challenges, and
          areas for improvement.
        </Text>
      </View>
    </Page>

    {/* PAGE 3 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>ETHICAL FUNDRAISING PRINCIPLES</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Transparency – Clearly communicate how funds will be used and report
          outcomes to donors.
        </Text>
        <Text style={styles.bullet}>
          • Accountability – Ensure all funds are tracked properly and utilized
          as promised.
        </Text>
        <Text style={styles.bullet}>
          • Respect – Treat donors with respect, acknowledging their preferences
          and privacy.
        </Text>
        <Text style={styles.bullet}>
          • Inclusivity – Provide opportunities for donors of all levels to
          contribute and feel valued.
        </Text>
        <Text style={styles.bullet}>
          • Honesty – Avoid exaggeration or misleading statements regarding the
          impact of contributions.
        </Text>
        <Text style={styles.bullet}>
          • Sustainability – Focus on long-term relationships with donors rather
          than one-time contributions.
        </Text>
        <Text style={styles.bullet}>
          • Compliance – Follow all local, state, and international fundraising
          regulations and legal requirements.
        </Text>
        <Text style={styles.bullet}>
          • Continuous Improvement – Regularly assess fundraising policies and
          practices to enhance effectiveness and ethical standards.
        </Text>
      </View>
    </Page>

    {/* PAGE 4 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>COMMUNICATION & ENGAGEMENT</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Build a donor engagement plan that includes personalized
          communication, newsletters, and impact updates.
        </Text>
        <Text style={styles.bullet}>
          • Use multiple platforms for outreach: email, social media, website,
          events, and community channels.
        </Text>
        <Text style={styles.bullet}>
          • Encourage donor participation through events, volunteer
          opportunities, and advocacy campaigns.
        </Text>
        <Text style={styles.bullet}>
          • Maintain accurate records of interactions and preferences to enhance
          relationship management.
        </Text>
        <Text style={styles.bullet}>
          • Celebrate milestones and achievements to show appreciation and
          strengthen donor loyalty.
        </Text>
        <Text style={styles.bullet}>
          • Engage with partners and sponsors to expand fundraising reach and
          collaborative opportunities.
        </Text>
        <Text style={styles.bullet}>
          • Provide training for volunteers and staff on effective communication
          and ethical fundraising practices.
        </Text>
      </View>
    </Page>

    {/* PAGE 5 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>SUSTAINABILITY & IMPACT MEASUREMENT</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Track and measure the impact of funds raised to demonstrate
          transparency and accountability to donors.
        </Text>
        <Text style={styles.bullet}>
          • Develop long-term strategies to maintain consistent funding streams
          and nurture ongoing relationships with donors.
        </Text>
        <Text style={styles.bullet}>
          • Evaluate campaigns regularly, identifying lessons learned to improve
          efficiency and ethical practices in the future.
        </Text>
        <Text style={styles.bullet}>
          • Foster a culture of gratitude by recognizing contributions publicly
          and privately, enhancing donor trust and loyalty.
        </Text>
        <Text style={styles.bullet}>
          • Share detailed reports, including successes, challenges, and program
          outcomes, with all stakeholders.
        </Text>
        <Text style={styles.bullet}>
          • Promote continuous learning, ensuring that staff, volunteers, and
          partners are trained to uphold the highest standards in fundraising
          ethics.
        </Text>
        <Text style={styles.bullet}>
          • Encourage community involvement and feedback to improve fundraising
          strategies and align them with local needs and values.
        </Text>
        <Text style={styles.bullet}>
          • Celebrate achievements collectively, motivating ongoing engagement
          and reinforcing a shared mission for positive impact.
        </Text>
      </View>
    </Page>
  </Document>
);

// Scrollable Viewer Component
const FundraisingGuidePDF = () => {
  const [pdfUrl, setPdfUrl] = React.useState(null);

  React.useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(<FundraisingGuideDoc />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };
    generatePdf();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Fundraising Best Practices - Charlie Parker C. Global Foundation
      </h2>

      {/* Scrollable PDF */}
      <div
        className="overflow-y-scroll border w-full h-[80vh] p-2"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <iframe
          src={pdfUrl}
          title="Fundraising Best Practices Guide"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>

      {/* Download Button */}
      <div className="text-center mt-4">
        <a
          href={pdfUrl}
          download="FundraisingGuide_CharlieParkerCGlobalFoundation.pdf"
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default FundraisingGuidePDF;
