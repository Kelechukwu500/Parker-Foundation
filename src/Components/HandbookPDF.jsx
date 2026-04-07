import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    lineHeight: 1.6,
    fontFamily: "Times-Roman",
    color: "#333",
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 8,
    color: "#3B82F6", // Tailwind blue-500
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 14,
    marginBottom: 6,
    color: "#4B5563", // Medium Gray
    fontWeight: "bold",
  },
  paragraph: {
    marginBottom: 10,
    textAlign: "justify",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    fontSize: 10,
    textAlign: "center",
    width: "100%",
    color: "#6B7280",
  },
});

const HandbookDocument = () => (
  <Document>
    {/* Page 1: Welcome */}
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>
          Charlie Parker C. Global Foundation Handbook
        </Text>
        <Text style={styles.paragraph}>
          Welcome to the Charlie Parker C. Global Foundation. This handbook is
          designed to provide you with comprehensive guidance about our
          programs, policies, and community impact. Our mission is to empower
          children, families, and communities across Nigeria through education,
          health, and social development initiatives.
        </Text>
        <Text style={styles.paragraph}>
          Whether you are a staff member, volunteer, donor, or program
          participant, this handbook will give you the tools, resources, and
          knowledge needed to contribute effectively and responsibly.
        </Text>
        <Text style={styles.paragraph}>
          Please read each section carefully and refer back to this document
          whenever needed. Together, we can create lasting change and meaningful
          opportunities for the communities we serve.
        </Text>
      </View>
    </Page>

    {/* Page 2: About Us */}
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>About Us</Text>
        <Text style={styles.paragraph}>
          The Charlie Parker C. Global Foundation is dedicated to transforming
          lives through education, healthcare, protection, and community
          development programs. Our vision is a world where every child has
          equal access to growth opportunities, safety, and holistic
          development.
        </Text>
        <Text style={styles.paragraph}>
          We are committed to integrity, compassion, accountability, and
          excellence in all programs and interactions. Our team of dedicated
          professionals and volunteers work tirelessly to ensure that every
          initiative is impactful and sustainable.
        </Text>
        <Text style={styles.paragraph}>
          Over the years, we have partnered with schools, healthcare providers,
          and local communities to implement innovative solutions that address
          social challenges and create positive, measurable outcomes.
        </Text>
      </View>
    </Page>

    {/* Page 3: Programs Overview */}
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Programs Overview</Text>
        <Text style={styles.paragraph}>
          Our programs are designed to empower individuals and communities. Key
          areas of focus include:
        </Text>
        <Text style={styles.subheading}>Education & Skill Development</Text>
        <Text style={styles.paragraph}>
          Academic support, vocational training, mentorship, scholarships, and
          programs that nurture talents and prepare children and youth for
          meaningful futures.
        </Text>
        <Text style={styles.subheading}>Health & Nutrition</Text>
        <Text style={styles.paragraph}>
          Access to healthcare services, nutrition programs, and wellness
          initiatives to ensure the physical and mental well-being of children
          and families.
        </Text>
        <Text style={styles.subheading}>Child Protection & Safeguarding</Text>
        <Text style={styles.paragraph}>
          Policies, safe spaces, and programs designed to protect children from
          abuse, neglect, and exploitation, ensuring a secure environment for
          growth.
        </Text>
        <Text style={styles.paragraph}>
          Each program is continuously evaluated to ensure it meets the needs of
          participants and achieves measurable impact, using data-driven
          strategies and feedback mechanisms.
        </Text>
      </View>
    </Page>

    {/* Page 4: Volunteer Guidelines */}
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Volunteer Guidelines</Text>
        <Text style={styles.paragraph}>
          Volunteers are essential to our mission. Expectations include
          professional conduct, adherence to safeguarding policies, and active
          participation in program activities.
        </Text>
        <Text style={styles.subheading}>Roles & Responsibilities</Text>
        <Text style={styles.paragraph}>
          Volunteers may assist with teaching, mentoring, administrative tasks,
          fundraising, event organization, or community outreach. Each volunteer
          is provided training to ensure alignment with program objectives.
        </Text>
        <Text style={styles.subheading}>Code of Conduct</Text>
        <Text style={styles.paragraph}>
          Volunteers must maintain integrity, respect confidentiality, avoid
          discrimination, and follow all Foundation policies. Positive
          collaboration and professionalism are critical.
        </Text>
        <Text style={styles.paragraph}>
          Regular check-ins and feedback sessions help volunteers understand
          their contributions and identify areas for growth and development.
        </Text>
      </View>
    </Page>

    {/* Page 5: Safety & Protection */}
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Safety & Protection Policies</Text>
        <Text style={styles.paragraph}>
          Child safeguarding is a top priority. All staff, volunteers, and
          participants must follow protection protocols, including reporting
          concerns and maintaining safe environments.
        </Text>
        <Text style={styles.subheading}>Emergency Procedures</Text>
        <Text style={styles.paragraph}>
          Clear protocols exist for medical emergencies, fire, natural
          disasters, and security incidents. Training and drills are conducted
          regularly to ensure readiness.
        </Text>
        <Text style={styles.paragraph}>
          Our commitment is to create a secure and welcoming environment where
          children and staff feel safe and supported at all times.
        </Text>
      </View>
    </Page>

    {/* Page 6: Communication & Reporting */}
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Communication & Reporting</Text>
        <Text style={styles.paragraph}>
          Open communication is encouraged at every level of the Foundation.
          Staff, volunteers, and participants should report issues promptly,
          provide feedback, and share ideas to improve programs.
        </Text>
        <Text style={styles.paragraph}>
          Channels include in-person meetings, digital reporting tools, and
          dedicated supervisors for handling queries or concerns confidentially.
        </Text>
        <Text style={styles.paragraph}>
          Effective communication strengthens teamwork, ensures accountability,
          and enhances program outcomes for the communities we serve.
        </Text>
      </View>
    </Page>

    {/* Page 7: Resources & Tools */}
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Resources & Tools</Text>
        <Text style={styles.paragraph}>
          Staff and volunteers have access to forms, templates, training guides,
          and online tools. These resources support efficient and effective
          program delivery and continuous professional development.
        </Text>
        <Text style={styles.paragraph}>
          Educational materials, workshops, and interactive platforms are
          available for skill enhancement and learning opportunities.
        </Text>
      </View>
    </Page>

    {/* Page 8: Policies & Procedures */}
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Policies & Procedures</Text>
        <Text style={styles.paragraph}>
          The Foundation operates with ethical and transparent practices. Staff
          and volunteers are required to follow all operational guidelines,
          internal regulations, and legal requirements.
        </Text>
        <Text style={styles.paragraph}>
          Clear policies ensure consistency, accountability, and protection for
          all stakeholders involved in our programs.
        </Text>
      </View>
    </Page>

    {/* Page 9: Impact & Reporting */}
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Impact & Reporting</Text>
        <Text style={styles.paragraph}>
          Program outcomes are monitored and evaluated regularly. Reports track
          progress, measure results, and identify opportunities for program
          improvement.
        </Text>
        <Text style={styles.paragraph}>
          Stakeholders receive transparent updates on the foundation's impact,
          ensuring trust and confidence in all initiatives.
        </Text>
      </View>
    </Page>

    {/* Page 10: Closing & Acknowledgment */}
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Acknowledgment & Commitment</Text>
        <Text style={styles.paragraph}>
          By joining Charlie Parker C. Global Foundation as a staff member,
          volunteer, or participant, you commit to uphold our values, follow
          policies, and contribute to a safe and empowering environment for all.
        </Text>
        <Text style={styles.paragraph}>
          We thank you for your dedication and support. Together, we create
          lasting impact and transform lives, ensuring hope and opportunity for
          generations to come.
        </Text>
      </View>
      <Text style={styles.footer}>
        Charlie Parker C. Global Foundation | © 2025
      </Text>
    </Page>
  </Document>
);

export const HandbookPDFDownload = () => {
  return (
    <div className="py-10 text-center">
      <PDFDownloadLink
        document={<HandbookDocument />}
        fileName="Charlie_Parker_Handbook.pdf"
        className="bg-yellow-500 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-yellow-600 transition"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Preparing Handbook..." : "Download Handbook PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default HandbookPDFDownload;