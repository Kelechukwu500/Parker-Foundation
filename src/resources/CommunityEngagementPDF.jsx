// CommunityEngagementPDFScroll.jsx
import React from "react";
import {
  Document,
  Page,
  PDFDownloadLink,
  pdf,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

// Styles for PDF
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

// PDF Document with expanded content
const CommunityEngagementDoc = () => (
  <Document>
    {/* PAGE 1 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>COMMUNITY ENGAGEMENT GUIDE</Text>
      <Text style={styles.heading}>Charlie Parker C. Global Foundation</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Welcome to the Community Engagement Guide — a comprehensive resource
          for volunteers, staff, and partners to create meaningful community
          impact.
        </Text>
        <Text style={styles.bullet}>
          • Community engagement is essential for sustainable development and
          social change.
        </Text>
        <Text style={styles.bullet}>
          • Understanding community needs is crucial: observe, listen, and
          document insights to inform planning.
        </Text>
        <Text style={styles.bullet}>
          • Approach engagement with empathy, respect, and cultural sensitivity
          to foster trust and collaboration.
        </Text>
        <Text style={styles.bullet}>
          • Every volunteer has the opportunity to inspire, educate, and empower
          community members, leaving a lasting positive impact.
        </Text>
        <Text style={styles.bullet}>
          • Use this guide to learn strategies for planning, executing, and
          sustaining projects while measuring outcomes effectively.
        </Text>
        <Text style={styles.bullet}>
          • Ethical considerations: always respect local customs, involve the
          community in decision-making, and avoid actions that may harm social
          cohesion.
        </Text>
        <Text style={styles.bullet}>
          • Successful engagement requires consistency, patience, and
          dedication. Small steps can lead to large, long-term changes.
        </Text>
      </View>
    </Page>

    {/* PAGE 2 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>PLANNING COMMUNITY INITIATIVES</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Conduct a comprehensive community needs assessment, identifying gaps
          in education, health, infrastructure, and social services.
        </Text>
        <Text style={styles.bullet}>
          • Engage community leaders, local organizations, and volunteers for a
          collaborative approach.
        </Text>
        <Text style={styles.bullet}>
          • Define clear objectives and measurable outcomes to ensure
          accountability and track success.
        </Text>
        <Text style={styles.bullet}>
          • Allocate resources efficiently, ensuring volunteers, materials, and
          funding are used effectively.
        </Text>
        <Text style={styles.bullet}>
          • Develop contingency plans for unexpected challenges, such as
          weather, supply shortages, or local events.
        </Text>
        <Text style={styles.bullet}>
          • Maintain transparency by documenting each step: planning notes,
          meetings, agreements, and resource allocation.
        </Text>
        <Text style={styles.bullet}>
          • Set up feedback loops: include community members in decision-making
          to refine plans and improve ownership.
        </Text>
        <Text style={styles.bullet}>
          • Align initiatives with the foundation's mission to strengthen
          communities through education, health, and social programs.
        </Text>
      </View>
    </Page>

    {/* PAGE 3 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>
        ENGAGING EFFECTIVELY WITH THE COMMUNITY
      </Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Build trust by showing consistency, active listening, and genuine
          interest in community well-being.
        </Text>
        <Text style={styles.bullet}>
          • Involve community members in planning and execution to promote
          ownership and sustainability.
        </Text>
        <Text style={styles.bullet}>
          • Communicate clearly using culturally appropriate language, visuals,
          and examples.
        </Text>
        <Text style={styles.bullet}>
          • Encourage inclusivity, ensuring participation from youth, women,
          elders, and marginalized groups.
        </Text>
        <Text style={styles.bullet}>
          • Facilitate mentorship by pairing experienced volunteers with
          newcomers to transfer skills and knowledge.
        </Text>
        <Text style={styles.bullet}>
          • Monitor engagement activities, gather feedback, and adjust
          strategies to enhance outcomes.
        </Text>
        <Text style={styles.bullet}>
          • Recognize achievements publicly to motivate volunteers and community
          members.
        </Text>
        <Text style={styles.bullet}>
          • Use documentation to capture lessons learned, inspiring future
          projects and sharing success stories.
        </Text>
      </View>
    </Page>

    {/* PAGE 4 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>TOOLS & RESOURCES</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Communication templates: emails, surveys, announcements, and social
          media posts for effective engagement.
        </Text>
        <Text style={styles.bullet}>
          • Project planning sheets: detailed templates for timelines, budgets,
          and resource management.
        </Text>
        <Text style={styles.bullet}>
          • Evaluation forms: structured tools to measure impact, identify areas
          for improvement, and track progress.
        </Text>
        <Text style={styles.bullet}>
          • Volunteer handbook: guidance on ethics, roles, safety, and reporting
          procedures.
        </Text>
        <Text style={styles.bullet}>
          • Case studies: real examples of successful community initiatives for
          inspiration and guidance.
        </Text>
        <Text style={styles.bullet}>
          • Networking: connect with other volunteers, NGOs, and community
          leaders for collaboration.
        </Text>
        <Text style={styles.bullet}>
          • Training materials: workshops, tutorials, and resources for
          leadership, project management, and communication skills.
        </Text>
        <Text style={styles.bullet}>
          • Recognition programs: certificates, awards, and appreciation events
          to honor contributions.
        </Text>
      </View>
    </Page>

    {/* PAGE 5 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>SUSTAINING COMMUNITY IMPACT</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Maintain long-term relationships with community stakeholders to
          ensure ongoing collaboration.
        </Text>
        <Text style={styles.bullet}>
          • Empower community members with skills, knowledge, and leadership
          opportunities to continue initiatives independently.
        </Text>
        <Text style={styles.bullet}>
          • Conduct regular monitoring and evaluation to assess effectiveness
          and adapt strategies for future success.
        </Text>
        <Text style={styles.bullet}>
          • Advocate for policies and programs that promote sustainable social,
          educational, and economic development.
        </Text>
        <Text style={styles.bullet}>
          • Share success stories to inspire continued engagement and attract
          further support from donors and volunteers.
        </Text>
        <Text style={styles.bullet}>
          • Recognize contributions of all participants to reinforce commitment
          and motivate ongoing involvement.
        </Text>
        <Text style={styles.bullet}>
          • Encourage continuous learning and adaptability to maximize positive
          community impact.
        </Text>
        <Text style={styles.bullet}>
          • Build a culture of transparency, accountability, and ethical
          practice to earn and maintain community trust.
        </Text>
      </View>
    </Page>
  </Document>
);

// Scrollable Viewer Component
const CommunityEngagementPDF = () => {
  const [pdfUrl, setPdfUrl] = React.useState(null);

  React.useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(<CommunityEngagementDoc />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };
    generatePdf();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Community Engagement Guide - Charlie Parker C. Global Foundation
      </h2>

      {/* Scrollable PDF */}
      <div
        className="overflow-y-scroll border w-full h-[80vh] p-2"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <iframe
          src={pdfUrl}
          title="Community Engagement Guide"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>

      {/* Download Button */}
      <div className="text-center mt-4">
        <a
          href={pdfUrl}
          download="CommunityEngagementGuide_CharlieParkerCGlobalFoundation.pdf"
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default CommunityEngagementPDF;
