// BreakingBarriersPDF.jsx
import React, { useEffect, useRef } from "react";
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  pdf,
} from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    padding: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  thumbnailSidebar: {
    width: 40,
    marginRight: 15,
    justifyContent: "flex-start",
  },
  thumbnail: {
    width: 30,
    height: 40,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    textAlign: "center",
    fontSize: 10,
    lineHeight: 40,
  },
  content: {
    flex: 1,
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

// PDF Document with expanded content
const BreakingBarriersDocument = () => {
  const pages = [
    {
      heading: "Breaking Barriers: John’s Journey",
      content: [
        {
          type: "paragraph",
          text: "John grew up in a small town with limited opportunities and persistent economic challenges. His family struggled to make ends meet, and basic necessities were often scarce. From a young age, John dreamed of pursuing a meaningful career that could not only improve his life but also uplift his community. His parents encouraged him to work hard, but the reality of financial constraints often made him question whether his dreams were achievable.",
        },
        {
          type: "paragraph",
          text: "Despite these challenges, John displayed remarkable resilience. He would wake up early to help his family with chores before school and then dedicate long hours to studying. Books, stationery, and access to learning resources were limited, but John’s passion for education kept him motivated. He found creative ways to learn, borrowed materials from neighbors, and spent evenings under dim candlelight studying complex subjects.",
        },
        { type: "subheading", text: "Curiosity and Learning" },
        {
          type: "paragraph",
          text: "John also had a natural curiosity about the world. He would often engage in discussions with teachers and peers, exploring ideas beyond the classroom. He read newspapers, watched educational programs, and sought knowledge wherever possible. This curiosity drove him to excel academically and shaped his vision for the future.",
        },
        {
          type: "paragraph",
          text: "Even in the face of setbacks, John never gave up. He maintained a rigorous study routine, attended school diligently, and sought advice whenever needed. His determination laid the foundation for a transformative journey, one that would later be guided by the support of the Charlie Parker C. Global Foundation.",
        },
        {
          type: "paragraph",
          text: "John’s story is a testament to perseverance, creativity, and unwavering focus. Even at a young age, he demonstrated that challenges do not define one’s potential—actions and determination do.",
        },
      ],
    },
    {
      heading: "A Life-Changing Opportunity",
      content: [
        {
          type: "paragraph",
          text: "John’s life took a pivotal turn when he was introduced to the Charlie Parker C. Global Foundation. Recognizing his potential and perseverance, the Foundation offered him a scholarship that covered tuition, school supplies, and access to educational programs. For the first time, John could concentrate fully on his studies without worrying about financial burdens.",
        },
        {
          type: "paragraph",
          text: "Beyond financial aid, the Foundation connected John with experienced mentors who guided him through academic challenges and career planning. These mentors provided insight into the skills he needed to develop, introduced him to career opportunities, and encouraged him to pursue his goals with confidence.",
        },
        { type: "subheading", text: "Workshops and Skill-Building" },
        {
          type: "paragraph",
          text: "Through workshops, skill-building sessions, and networking events, John gained exposure to opportunities he had never imagined. The Foundation’s programs helped him enhance both his academic knowledge and personal development. He learned the value of goal setting, discipline, and resilience in navigating challenges, preparing him for future success.",
        },
        {
          type: "paragraph",
          text: "The Foundation also organized community projects that allowed John to develop leadership, teamwork, and communication skills. By participating in these initiatives, he learned to manage projects, work with diverse groups, and give back meaningfully to his town.",
        },
        {
          type: "paragraph",
          text: "The Foundation’s holistic support ignited a new sense of hope in John. He realized that talent, hard work, and mentorship combined could overcome even the most daunting obstacles. With renewed determination, John began to excel in his studies, participate in community initiatives, and take on leadership roles in school projects.",
        },
      ],
    },
    {
      heading: "Overcoming Challenges",
      content: [
        {
          type: "paragraph",
          text: "John’s journey was not without obstacles. He had to manage a delicate balance between school, part-time work, and family responsibilities. Many nights, he would stay awake late, juggling assignments and household duties. At times, the weight of expectations and financial strain felt overwhelming.",
        },
        { type: "subheading", text: "Mentorship and Guidance" },
        {
          type: "paragraph",
          text: "The Foundation’s mentorship and support proved critical during these moments. Tutors and mentors offered guidance, emotional encouragement, and strategies for effective time management. John learned to prioritize tasks, set realistic goals, and persevere despite setbacks. Every challenge became an opportunity for growth and learning.",
        },
        {
          type: "paragraph",
          text: "Additionally, the Foundation facilitated internships and hands-on training in John’s chosen field. These experiences allowed him to apply theoretical knowledge practically, build a professional portfolio, and connect with industry professionals. The exposure enhanced his confidence and broadened his perspective on career possibilities.",
        },
        {
          type: "paragraph",
          text: "John also developed soft skills such as communication, problem-solving, and critical thinking through the Foundation’s mentoring programs. These skills became essential as he navigated academic competitions, volunteer projects, and leadership roles.",
        },
        {
          type: "paragraph",
          text: "Over time, John’s resilience and the Foundation’s comprehensive support transformed his life. Challenges that once seemed insurmountable became milestones he overcame. His story is a testament to how guidance, mentorship, and opportunity can empower an individual to break through barriers.",
        },
      ],
    },
    {
      heading: "Chasing Dreams",
      content: [
        {
          type: "paragraph",
          text: "Today, John is actively pursuing his career dreams, equipped with the skills, confidence, and experience he gained through the Foundation’s programs. He has completed certifications, participated in advanced training, and secured internships that strengthen his professional path. His perseverance and the Foundation’s support have turned obstacles into stepping stones.",
        },
        {
          type: "paragraph",
          text: "John’s journey extends beyond personal achievement. He has begun mentoring other students in his community, sharing his story, and teaching essential skills. Through guidance, encouragement, and example, he is helping others overcome similar economic and educational challenges.",
        },
        { type: "subheading", text: "Ripple Effect" },
        {
          type: "paragraph",
          text: "The Foundation’s holistic approach—combining financial aid, mentorship, and career development—ensures that John is not only prepared to succeed but also empowered to uplift others. His efforts reflect the ripple effect of support, showing how one empowered individual can inspire a whole community.",
        },
        {
          type: "paragraph",
          text: "John actively participates in local education initiatives, volunteers for mentorship programs, and shares his knowledge on financial literacy and career planning. His story motivates younger students to dream bigger and embrace learning as a path to success.",
        },
        {
          type: "paragraph",
          text: "John’s story demonstrates the transformative impact of opportunity, guidance, and personal determination. With mentorship, resources, and hard work, he has shown that barriers to success can be overcome and dreams can be achieved.",
        },
      ],
    },
    {
      heading: "A Message of Hope",
      content: [
        {
          type: "paragraph",
          text: "John’s journey exemplifies the power of resilience, guidance, and opportunity. The Charlie Parker C. Global Foundation has proven that investing in a person’s potential can break cycles of poverty, nurture talent, and create lasting impact.",
        },
        {
          type: "paragraph",
          text: "His story inspires anyone facing adversity, showing that determination, mentorship, and access to resources can turn challenges into achievements. John continues to pursue his professional goals while mentoring others and giving back to his community.",
        },
        { type: "subheading", text: "Empowering Generations" },
        {
          type: "paragraph",
          text: "By sharing John’s journey, the Foundation highlights the importance of empowering individuals. Support, encouragement, and opportunity not only transform one life but can create a ripple effect, inspiring generations to come.",
        },
        {
          type: "paragraph",
          text: "John actively engages with local youth programs, shares his experiences in community talks, and mentors dozens of students each year. His life story encourages the next generation to dream bigger and strive for excellence despite economic challenges.",
        },
        {
          type: "paragraph",
          text: "John’s story is a living example of how education, mentorship, and perseverance can overcome economic barriers. The Foundation remains committed to empowering individuals like John, ensuring that each person can achieve their potential and positively impact society.",
        },
      ],
    },
  ];

  return (
    <Document>
      {pages.map((page, index) => (
        <Page style={styles.page} key={index}>
          {/* Left-side Thumbnail Sidebar */}
          <View style={styles.thumbnailSidebar}>
            {pages.map((_, idx) => (
              <View
                key={idx}
                style={{
                  ...styles.thumbnail,
                  backgroundColor: idx === index ? "#e63946" : "#f0f0f0",
                  color: idx === index ? "#fff" : "#555",
                }}
              >
                {idx + 1}
              </View>
            ))}
          </View>
          {/* Page Content */}
          <View style={styles.content}>
            <Text style={styles.heading}>{page.heading}</Text>
            {page.content.map((item, i) =>
              item.type === "subheading" ? (
                <Text key={i} style={styles.subheading}>
                  {item.text}
                </Text>
              ) : (
                <Text key={i} style={styles.paragraph}>
                  {item.text}
                </Text>
              )
            )}
          </View>
        </Page>
      ))}
    </Document>
  );
};

const BreakingBarriersPDF = () => {
  const hasOpened = useRef(false);

  useEffect(() => {
    document.title = "Charlie Parker C. Global Foundation";

    if (hasOpened.current) return;
    hasOpened.current = true;

    const openPDF = async () => {
      const blob = await pdf(<BreakingBarriersDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    };

    openPDF();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Generating John’s Story PDF...
      </h2>
      <p className="text-gray-600">
        Please wait a moment — the document will open in a new tab.
      </p>
    </div>
  );
};

export default BreakingBarriersPDF;
