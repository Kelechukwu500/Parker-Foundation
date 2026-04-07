// VolunteerToolkitPDF.jsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
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

// PDF Document with expanded write-up
const VolunteerToolkitDoc = () => (
  <Document>
    {/* PAGE 1 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>VOLUNTEER TOOLKIT</Text>
      <Text style={styles.heading}>Charlie Parker C. Global Foundation</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Welcome to the Charlie Parker C. Global Foundation Volunteer
          Toolkit, your complete guide to serving with compassion, excellence,
          and purpose. This toolkit is crafted to provide every volunteer with
          practical direction and a clear sense of mission.
        </Text>
        <Text style={styles.bullet}>
          • Our foundation believes every act of service, no matter how small,
          contributes to a legacy of hope and transformation. Your support in
          education, health, and community initiatives matters greatly.
        </Text>
        <Text style={styles.bullet}>
          • This toolkit walks you through expectations, resources, and
          guidelines, ensuring a fulfilling and impactful volunteer experience.
        </Text>
        <Text style={styles.bullet}>
          • Each project offers opportunities to learn, lead, and grow while
          interacting with diverse individuals and witnessing firsthand how
          teamwork creates meaningful change.
        </Text>
        <Text style={styles.bullet}>
          • Approach your journey with humility, dedication, and an open heart —
          ready to serve beyond borders and bring joy where it is most needed.
        </Text>
        <Text style={styles.bullet}>
          • Volunteers embody the spirit of selflessness, building stronger
          communities and nurturing human dignity through consistent and
          compassionate service.
        </Text>
        <Text style={styles.bullet}>
          • Actively participate, communicate openly, and maintain a positive
          attitude to maximize the impact of your volunteering efforts.
        </Text>
        <Text style={styles.bullet}>
          • Ethical responsibility is key — always respect local culture, follow
          guidelines, and prioritize the welfare of the community.
        </Text>
      </View>
    </Page>

    {/* PAGE 2 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>
        VOLUNTEER RESPONSIBILITIES & EXPECTATIONS
      </Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Every volunteer is an ambassador of the foundation. Conduct yourself
          with professionalism, compassion, and respect toward everyone you
          encounter.
        </Text>
        <Text style={styles.bullet}>
          • Attend training sessions and briefings to understand project
          details, safety guidelines, and performance standards before starting
          any activity.
        </Text>
        <Text style={styles.bullet}>
          • Commit to scheduled hours and notify team leaders if you cannot
          attend a session or event.
        </Text>
        <Text style={styles.bullet}>
          • Practice integrity in communication and accountability in task
          completion. Transparency builds trust with volunteers, beneficiaries,
          and the organization.
        </Text>
        <Text style={styles.bullet}>
          • Maintain confidentiality of sensitive data. Protecting privacy is
          part of our ethical framework.
        </Text>
        <Text style={styles.bullet}>
          • Be adaptable. Projects may evolve depending on community needs;
          flexibility is key to effective service.
        </Text>
        <Text style={styles.bullet}>
          • Prioritize teamwork. Collaboration and mutual respect strengthen our
          collective ability to achieve long-term impact.
        </Text>
        <Text style={styles.bullet}>
          • Lead with empathy. Every community member deserves to be treated
          with kindness and dignity.
        </Text>
        <Text style={styles.bullet}>
          • Be proactive in problem-solving, suggest improvements, and embrace
          challenges as learning opportunities.
        </Text>
      </View>
    </Page>

    {/* PAGE 3 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>COMMUNITY IMPACT AREAS</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Education & Mentorship – Participate in literacy programs, student
          mentoring, after-school tutoring, and digital literacy workshops for
          all ages.
        </Text>
        <Text style={styles.bullet}>
          • Health & Wellness – Support preventive health awareness, assist in
          mobile clinics, and distribute essential medical supplies.
        </Text>
        <Text style={styles.bullet}>
          • Food Security & Nutrition – Aid in meal distribution, nutrition
          education, and sustainable community farming initiatives.
        </Text>
        <Text style={styles.bullet}>
          • Environmental Sustainability – Join cleanup drives, tree planting
          campaigns, and environmental awareness programs.
        </Text>
        <Text style={styles.bullet}>
          • Gender Equality & Youth Empowerment – Facilitate workshops that
          equip women and youth with skills, confidence, and opportunities to
          thrive.
        </Text>
        <Text style={styles.bullet}>
          • Disaster Response & Relief – Participate in emergency response
          efforts, coordinate supplies, provide emotional support, and help
          rebuild after crises.
        </Text>
        <Text style={styles.bullet}>
          • Advocacy & Awareness – Amplify our message through social media,
          community events, and local media to promote justice, inclusion, and
          positive change.
        </Text>
        <Text style={styles.bullet}>
          • Community Building – Encourage mentorship networks, volunteer clubs,
          and local partnerships to strengthen social cohesion.
        </Text>
      </View>
    </Page>

    {/* PAGE 4 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>
        TOOLS & RESOURCES AVAILABLE TO VOLUNTEERS
      </Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Volunteer Handbook – Overview of foundation policies, safety
          protocols, and contacts for coordinators and team leads.
        </Text>
        <Text style={styles.bullet}>
          • Digital Learning Portal – Access modules on communication,
          leadership, project management, and cultural sensitivity.
        </Text>
        <Text style={styles.bullet}>
          • Activity Planner – Tools to set personal volunteering goals, manage
          time, and track achievements across projects.
        </Text>
        <Text style={styles.bullet}>
          • Resource Library – Articles, templates, reports, and videos to help
          you learn and contribute effectively.
        </Text>
        <Text style={styles.bullet}>
          • Community Network – Connect with fellow volunteers, share success
          stories, and collaborate through our forum.
        </Text>
        <Text style={styles.bullet}>
          • Feedback & Support – Mentorship and feedback systems ensure
          volunteers feel guided and recognized.
        </Text>
        <Text style={styles.bullet}>
          • Recognition & Awards – Celebrate volunteer milestones via
          certificates, mentions, and annual appreciation events.
        </Text>
        <Text style={styles.bullet}>
          • Continuous Learning – Access webinars, workshops, and skill-building
          resources for personal and professional growth.
        </Text>
      </View>
    </Page>

    {/* PAGE 5 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>BUILDING A LEGACY OF SERVICE</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • The foundation aims to create sustainable systems of impact, not
          one-time interventions. Your projects contribute to a lasting legacy
          of hope and progress.
        </Text>
        <Text style={styles.bullet}>
          • Reflect on your volunteer experience, noting lessons learned, lives
          impacted, and personal growth.
        </Text>
        <Text style={styles.bullet}>
          • Inspire others to join by sharing your testimony and experiences.
        </Text>
        <Text style={styles.bullet}>
          • Extend your service beyond the foundation, applying empathy,
          discipline, and integrity in all areas of life.
        </Text>
        <Text style={styles.bullet}>
          • Stay connected through alumni programs, follow-up projects, and
          mentorship opportunities.
        </Text>
        <Text style={styles.bullet}>
          • Build a network of changemakers who turn challenges into
          opportunities for community transformation.
        </Text>
        <Text style={styles.bullet}>
          • Thank you for serving with Charlie Parker C. Global Foundation. Your
          time, skills, and compassion help shape a better and equitable world.
        </Text>
      </View>
    </Page>
  </Document>
);

// Scrollable Viewer Component
const VolunteerToolkitPDF = () => {
  const [pdfUrl, setPdfUrl] = React.useState(null);

  React.useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(<VolunteerToolkitDoc />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };
    generatePdf();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Volunteer Toolkit - Charlie Parker C. Global Foundation
      </h2>

      {/* Scrollable PDF */}
      <div
        className="overflow-y-scroll border w-full h-[80vh] p-2"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <iframe
          src={pdfUrl}
          title="Volunteer Toolkit"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>

      {/* Download Button */}
      <div className="text-center mt-4">
        <a
          href={pdfUrl}
          download="VolunteerToolkit_CharlieParkerCGlobalFoundation.pdf"
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default VolunteerToolkitPDF;
