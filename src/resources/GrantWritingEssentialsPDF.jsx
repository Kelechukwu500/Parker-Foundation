// GrantWritingEssentialsPDF.jsx
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
    marginBottom: 8,
  },
  section: {
    marginBottom: 25,
  },
});

// PDF Document
const GrantWritingEssentialsDoc = () => (
  <Document>
    {/* PAGE 1 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>GRANT WRITING ESSENTIALS WORKBOOK</Text>
      <Text style={styles.heading}>Charlie Parker C. Global Foundation</Text>

      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Grant writing is a structured process combining research, strategy,
          and persuasive storytelling to secure funding for programs or
          projects.
        </Text>
        <Text style={styles.bullet}>
          • Successful proposals are clear, compelling, and demonstrate
          alignment with the funder’s mission and objectives.
        </Text>
        <Text style={styles.bullet}>
          • This workbook provides the foundational tools, frameworks, and
          exercises needed to create effective proposals that resonate with
          grantmakers.
        </Text>
        <Text style={styles.bullet}>
          • Whether you are new to grant writing or an experienced nonprofit
          professional, this guide will help you refine your approach and
          achieve better results.
        </Text>
        <Text style={styles.bullet}>
          • Grant writing requires attention to detail, precision in language,
          and the ability to present a strong case supported by data and
          evidence.
        </Text>
        <Text style={styles.bullet}>
          • In this workbook, you will also find practical exercises, templates,
          and tips to make your proposals stand out.
        </Text>
        <Text style={styles.bullet}>
          • Each page is designed to build your skills step-by-step, from
          understanding funding sources to crafting narratives and budgeting.
        </Text>
      </View>
    </Page>

    {/* PAGE 2 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>1. UNDERSTANDING GRANT FUNDING</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Grants are financial awards from governments, foundations, or
          corporations to support programs or initiatives that align with
          specific goals.
        </Text>
        <Text style={styles.bullet}>
          • Each grant comes with eligibility requirements, funding priorities,
          deadlines, and reporting expectations.
        </Text>
        <Text style={styles.bullet}>
          • Understanding funders’ objectives and priorities before writing your
          proposal is critical for success.
        </Text>
        <Text style={styles.bullet}>
          • Always carefully read the Request for Proposal (RFP) or funding
          guidelines to ensure your project meets their criteria.
        </Text>
        <Text style={styles.bullet}>
          • Build a database of potential funders whose mission aligns with your
          organization’s goals.
        </Text>
        <Text style={styles.bullet}>
          • Research previous successful proposals to understand what funders
          value and the kind of language and metrics they prefer.
        </Text>
        <Text style={styles.bullet}>
          • Attend workshops, webinars, or networking events to learn from
          funders and other grant professionals.
        </Text>
        <Text style={styles.bullet}>
          • Keep a record of funder contact information, proposal deadlines, and
          notes on past submissions for organized tracking.
        </Text>
      </View>
    </Page>

    {/* PAGE 3 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>2. COMPONENTS OF A STRONG PROPOSAL</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • **Executive Summary:** Provide a concise overview of your
          organization, project goals, and funding request. Capture attention
          quickly.
        </Text>
        <Text style={styles.bullet}>
          • **Statement of Need:** Clearly define the problem, supported by
          credible data, case studies, or testimonials. Show why your project is
          necessary.
        </Text>
        <Text style={styles.bullet}>
          • **Goals and Objectives:** Outline measurable, achievable outcomes.
          Use SMART goals (Specific, Measurable, Achievable, Relevant,
          Time-bound).
        </Text>
        <Text style={styles.bullet}>
          • **Program Description:** Describe your methods, timeline, staffing,
          and expected impact. Explain how activities link to your objectives.
        </Text>
        <Text style={styles.bullet}>
          • **Budget and Justification:** Provide a detailed budget with clear
          explanations for each line item. Align costs with project activities.
        </Text>
        <Text style={styles.bullet}>
          • **Evaluation Plan:** Explain how you will measure success, including
          tools, methods, and reporting schedules.
        </Text>
        <Text style={styles.bullet}>
          • **Sustainability Plan:** Describe how the project will continue
          after grant funding ends. Include alternative funding sources or
          organizational support.
        </Text>
        <Text style={styles.bullet}>
          • **Organizational Background:** Include your mission, history,
          achievements, and capacity to implement the project successfully.
        </Text>
      </View>
    </Page>

    {/* PAGE 4 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>3. CRAFTING A WINNING NARRATIVE</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Use persuasive, mission-driven language that connects emotionally
          with reviewers.
        </Text>
        <Text style={styles.bullet}>
          • Balance storytelling with facts: use statistics, charts, or brief
          case studies to support your narrative.
        </Text>
        <Text style={styles.bullet}>
          • Highlight your organization’s track record and credibility through
          previous successes and measurable outcomes.
        </Text>
        <Text style={styles.bullet}>
          • Avoid jargon or overly technical language; clarity and simplicity
          increase readability.
        </Text>
        <Text style={styles.bullet}>
          • Personalize proposals for each funder, aligning your language and
          goals with their priorities.
        </Text>
        <Text style={styles.bullet}>
          • Include compelling quotes, short stories, or community testimonials
          to illustrate the real-world impact.
        </Text>
        <Text style={styles.bullet}>
          • Use headings, subheadings, and bullet points to make the proposal
          scannable and easy to read.
        </Text>
      </View>
    </Page>

    {/* PAGE 5 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>4. BUDGETING AND SUSTAINABILITY</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Align your budget with your proposed activities and project goals.
        </Text>
        <Text style={styles.bullet}>
          • Include both direct costs (program materials, salaries, training)
          and indirect costs (administrative support, overhead).
        </Text>
        <Text style={styles.bullet}>
          • Be transparent and realistic. Avoid inflating numbers or including
          ineligible costs.
        </Text>
        <Text style={styles.bullet}>
          • Demonstrate sustainability by showing how your project will continue
          after the grant period ends.
        </Text>
        <Text style={styles.bullet}>
          • Diversify funding sources—grants, donations, sponsorships, and
          earned income—to strengthen financial stability.
        </Text>
        <Text style={styles.bullet}>
          • Provide a budget narrative explaining assumptions and justifying
          major expenses.
        </Text>
        <Text style={styles.bullet}>
          • Consider contingency planning for unexpected expenses or delays.
        </Text>
      </View>
    </Page>

    {/* PAGE 6 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>5. EVALUATION AND IMPACT</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Funders want measurable impact; clearly define how success will be
          tracked.
        </Text>
        <Text style={styles.bullet}>
          • Use both quantitative metrics (number of participants, surveys) and
          qualitative feedback (stories, testimonials).
        </Text>
        <Text style={styles.bullet}>
          • Set a timeline for evaluation activities to ensure timely reporting.
        </Text>
        <Text style={styles.bullet}>
          • Explain how evaluation results will be used to refine the program
          and inform future proposals.
        </Text>
        <Text style={styles.bullet}>
          • Provide examples of evaluation tools, like surveys, focus groups, or
          pre/post-tests.
        </Text>
        <Text style={styles.bullet}>
          • Include both short-term and long-term indicators of success.
        </Text>
        <Text style={styles.bullet}>
          • Communicate results to stakeholders, including funders, staff, and
          the community.
        </Text>
      </View>
    </Page>

    {/* PAGE 7 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>6. COMMON MISTAKES TO AVOID</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Submitting incomplete applications or ignoring funder guidelines.
        </Text>
        <Text style={styles.bullet}>
          • Using unclear, jargon-filled language that reduces readability.
        </Text>
        <Text style={styles.bullet}>
          • Providing unrealistic budgets without proper justification.
        </Text>
        <Text style={styles.bullet}>
          • Failing to align your project with the funder’s mission or
          priorities.
        </Text>
        <Text style={styles.bullet}>
          • Not proofreading; typos or grammatical errors reduce credibility.
        </Text>
        <Text style={styles.bullet}>
          • Ignoring follow-up communication or failing to maintain
          relationships with funders.
        </Text>
        <Text style={styles.bullet}>
          • Treat every rejection as an opportunity to improve future proposals.
        </Text>
      </View>
    </Page>

    {/* PAGE 8 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>7. PRACTICAL WORKBOOK EXERCISES</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Exercise 1: Identify a real or hypothetical project for your
          organization.
        </Text>
        <Text style={styles.bullet}>
          • Exercise 2: Draft a 3-sentence statement of need.
        </Text>
        <Text style={styles.bullet}>
          • Exercise 3: Outline measurable goals and objectives (3–5 key
          points).
        </Text>
        <Text style={styles.bullet}>
          • Exercise 4: Create a detailed one-page budget aligned with
          activities.
        </Text>
        <Text style={styles.bullet}>
          • Exercise 5: Write a one-paragraph executive summary.
        </Text>
        <Text style={styles.bullet}>
          • Exercise 6: Identify 3 potential funders and explain alignment.
        </Text>
        <Text style={styles.bullet}>
          • Exercise 7: Draft a 2–3 sentence sustainability plan.
        </Text>
        <Text style={styles.bullet}>
          • Exercise 8: Create 1–2 evaluation metrics and methods for the
          project.
        </Text>
      </View>
    </Page>

    {/* PAGE 9 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>8. RESOURCES & TEMPLATES</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • GrantSpace by Candid: Online tools, webinars, and sample proposals.
        </Text>
        <Text style={styles.bullet}>
          • Foundation Directory Online: Funders database to research
          foundations and corporate giving.
        </Text>
        <Text style={styles.bullet}>
          • Nonprofitready.org: Free courses for grant writing and nonprofit
          management.
        </Text>
        <Text style={styles.bullet}>
          • Charity Navigator: Evaluate potential funders and understand their
          giving priorities.
        </Text>
        <Text style={styles.bullet}>
          • Use provided templates for executive summaries, needs statements,
          budgets, and evaluation plans.
        </Text>
        <Text style={styles.bullet}>
          • Keep organized files for each proposal including past submissions,
          notes, and correspondence.
        </Text>
      </View>
    </Page>

    {/* PAGE 10 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>9. FINAL TIPS AND MOTIVATION</Text>
      <View style={styles.section}>
        <Text style={styles.bullet}>
          • Start early, allowing enough time for research, writing, revisions,
          and feedback.
        </Text>
        <Text style={styles.bullet}>
          • Proofread all sections carefully; clarity, accuracy, and
          professionalism matter.
        </Text>
        <Text style={styles.bullet}>
          • Build relationships with funders—thank them, provide updates, and
          maintain communication.
        </Text>
        <Text style={styles.bullet}>
          • Learn from every submission; incorporate feedback to improve future
          proposals.
        </Text>
        <Text style={styles.bullet}>
          • Remember: Strong proposals combine passion, purpose, and precision.
        </Text>
        <Text style={styles.bullet}>
          • Celebrate your achievements regardless of the outcome; writing
          grants is a skill that grows with practice.
        </Text>
        <Text style={styles.bullet}>
          • Stay motivated and confident—your work impacts lives and
          communities.
        </Text>
      </View>
    </Page>
  </Document>
);

// Scrollable Viewer Component
const GrantWritingEssentialsPDF = () => {
  const [pdfUrl, setPdfUrl] = React.useState(null);

  React.useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(<GrantWritingEssentialsDoc />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };
    generatePdf();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Grant Writing Essentials Workbook - Charlie Parker C. Global Foundation
      </h2>

      {/* Scrollable PDF */}
      <div
        className="overflow-y-scroll border w-full h-[80vh] p-2"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <iframe
          src={pdfUrl}
          title="Grant Writing Essentials Workbook"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>

      {/* Download Button */}
      <div className="text-center mt-4">
        <a
          href={pdfUrl}
          download="GrantWritingEssentialsWorkbook_CharlieParkerCGlobalFoundation.pdf"
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          Download Workbook
        </a>
      </div>
    </div>
  );
};

export default GrantWritingEssentialsPDF;
