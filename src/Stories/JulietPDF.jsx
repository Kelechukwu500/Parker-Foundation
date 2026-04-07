import React, { useEffect, useRef } from "react";
import { Document, Page, StyleSheet, Text, pdf } from "@react-pdf/renderer";

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e63946",
    marginBottom: 15,
    textAlign: "center",
  },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#457b9d",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    color: "#1d1d1d",
    lineHeight: 1.6,
    textAlign: "justify",
    marginBottom: 12,
  },
});

// PDF Document
const JulietDocument = () => (
  <Document>
    {/* Page 1 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>
        Juliet’s Journey: From Student to Mentor
      </Text>
      <Text style={styles.paragraph}>
        Juliet’s journey is one of courage, resilience, and opportunity. Coming
        from a modest background, she faced financial and social barriers that
        could have easily hindered her education. Through the generous support
        of the{" "}
        <Text style={{ fontWeight: "bold" }}>
          Charlie Parker C. Global Foundation
        </Text>
        , Juliet received a scholarship that covered her tuition and access to
        mentorship programs, enabling her to focus on her studies and personal
        growth without fear of missing out.
      </Text>
      <Text style={styles.paragraph}>
        From her very first day at school, Juliet demonstrated an unyielding
        commitment to learning. She excelled in both academics and
        extracurricular activities, participating in debates, science projects,
        and leadership programs. Each accomplishment reinforced her
        determination to succeed and make a difference.
      </Text>
      <Text style={styles.paragraph}>
        Juliet’s academic journey is a story of resilience, determination, and
        opportunity. With access to scholarships, educational resources, and
        mentorship programs, she thrived in her studies and developed skills
        that went far beyond the classroom.
      </Text>
    </Page>

    {/* Page 2 */}
    <Page style={styles.page}>
      <Text style={styles.subheading}>Overcoming Challenges</Text>
      <Text style={styles.paragraph}>
        Despite her strong determination, Juliet faced many challenges. Limited
        resources meant she often had to study late into the night and seek
        guidance from teachers and mentors. The foundation’s support played a
        pivotal role by providing educational materials, tutoring sessions, and
        access to online learning resources, allowing her to overcome these
        obstacles and maintain top performance.
      </Text>
      <Text style={styles.paragraph}>
        Juliet also learned the value of time management and resilience.
        Balancing academics, community service, and mentorship responsibilities
        taught her leadership and organizational skills. These experiences
        prepared her to face future challenges with confidence and grace.
      </Text>
      <Text style={styles.paragraph}>
        Her story serves as a beacon of hope for students who may be struggling,
        illustrating that obstacles can be overcome with support, determination,
        and guidance.
      </Text>
    </Page>

    {/* Page 3 */}
    <Page style={styles.page}>
      <Text style={styles.subheading}>Academic Success and Leadership</Text>
      <Text style={styles.paragraph}>
        Through dedication and the foundation’s programs, Juliet graduated at
        the top of her class. Her success was not just measured by grades but
        also by her active involvement in mentoring her peers, leading student
        projects, and organizing educational workshops. She consistently
        demonstrated that leadership is about empowering others as much as
        excelling personally.
      </Text>
      <Text style={styles.paragraph}>
        Juliet’s story emphasizes how structured support systems—like
        scholarships, mentorship, and educational resources—can transform a
        student’s potential into outstanding achievement. Her journey inspired
        many fellow students to strive for excellence and embrace opportunities
        they might otherwise have missed.
      </Text>
      <Text style={styles.paragraph}>
        Starting as a student with big dreams but limited resources, Juliet
        showed an unwavering commitment to her education. Her hard work, guided
        by the foundation’s mentorship programs, helped her graduate at the top
        of her class. Every exam she aced, every project she completed, and
        every leadership role she embraced was a testament to her perseverance
        and the foundation’s impactful support.
      </Text>
    </Page>

    {/* Page 4 */}
    <Page style={styles.page}>
      <Text style={styles.subheading}>Mentorship and Community Impact</Text>
      <Text style={styles.paragraph}>
        After graduating, Juliet became a mentor under the foundation’s
        scholarship programs. She guides younger students in academic pursuits,
        personal development, and navigating challenges. Her mentorship covers
        study techniques, leadership skills, and building confidence, helping
        mentees unlock their full potential.
      </Text>
      <Text style={styles.paragraph}>
        Beyond mentoring, Juliet has initiated community projects, organized
        workshops, and shared her story to inspire more students. Her work
        embodies the foundation’s mission: to empower students to succeed
        academically while fostering leadership, social responsibility, and
        community engagement.
      </Text>
      <Text style={styles.paragraph}>
        Juliet’s mentorship ensures that the foundation’s support multiplies:
        every student she guides has a better chance to achieve academic success
        and contribute positively to society.
      </Text>
    </Page>

    {/* Page 5 */}
    <Page style={styles.page}>
      <Text style={styles.subheading}>A Legacy of Empowerment</Text>
      <Text style={styles.paragraph}>
        Juliet’s journey illustrates the transformative power of education and
        mentorship. The{" "}
        <Text style={{ fontWeight: "bold" }}>
          Charlie Parker C. Global Foundation
        </Text>{" "}
        continues to celebrate such success stories, reinforcing its mission to
        provide equitable educational opportunities for all.
      </Text>
      <Text style={styles.paragraph}>
        Her legacy is one of empowerment, showing that when students receive
        support, guidance, and encouragement, they not only succeed but also
        help others thrive. Juliet’s story motivates both students and
        supporters of the foundation to continue striving for excellence and to
        invest in the next generation.
      </Text>
      <Text style={styles.paragraph}>
        By reading her story, students gain inspiration to persevere, dream big,
        and give back to their communities. Juliet’s life is a living example of
        how scholarships, mentorship, and opportunity can create a ripple effect
        of positive change for generations to come.
      </Text>
    </Page>
  </Document>
);

const JulietPDF = () => {
  const hasOpened = useRef(false); // ✅ Prevents multiple openings

  useEffect(() => {
    document.title = "Charlie Parker C. Global Foundation";

    if (hasOpened.current) return; // stop duplicate tab opening
    hasOpened.current = true;

    const openPDF = async () => {
      const blob = await pdf(<JulietDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank"); // open only once
    };

    openPDF();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Generating Juliet’s Story PDF...
      </h2>
      <p className="text-gray-600">
        Please wait a moment — the document will open in a new tab.
      </p>
    </div>
  );
};

export default JulietPDF;
