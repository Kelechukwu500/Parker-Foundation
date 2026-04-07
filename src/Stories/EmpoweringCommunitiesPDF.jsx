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
const EmpoweringCommunitiesDocument = () => (
  <Document>
    {/* Page 1 */}
    <Page style={styles.page}>
      <Text style={styles.heading}>
        Empowering Communities: Clean Water for 500 Families
      </Text>
      <Text style={styles.paragraph}>
        Access to clean and safe water is not just a basic necessity; it is a
        foundation for healthy, thriving communities. Recognizing this, the{" "}
        <Text style={{ fontWeight: "bold" }}>
          Charlie Parker C. Global Foundation
        </Text>{" "}
        launched the Community Water Empowerment Project to bring sustainable
        clean water solutions to underserved areas. This initiative transformed
        the lives of more than 500 families who had long suffered from the
        effects of water scarcity and contamination.
      </Text>
      <Text style={styles.paragraph}>
        Before the project began, families in the community traveled long
        distances daily to fetch water from unsafe streams and ponds. Many
        suffered from waterborne diseases, and children often missed school to
        assist their parents in collecting water. The foundation’s intervention
        brought hope and restoration, marking a new chapter in the community’s
        history.
      </Text>
      <Text style={styles.paragraph}>
        The project combined compassion with technical expertise—installing
        solar-powered boreholes, water filtration systems, and safe storage
        facilities. It also included training for local residents on hygiene,
        sanitation, and sustainable water management, ensuring long-term
        maintenance and community ownership.
      </Text>
    </Page>

    {/* Page 2 */}
    <Page style={styles.page}>
      <Text style={styles.subheading}>Identifying the Need</Text>
      <Text style={styles.paragraph}>
        During an outreach visit, the foundation’s team witnessed firsthand the
        hardships caused by the lack of clean water. The sight of children
        carrying heavy containers through long, dusty paths under the sun
        highlighted the urgent need for change. Waterborne diseases such as
        cholera and typhoid were common, and many families struggled with
        medical expenses and lost productivity.
      </Text>
      <Text style={styles.paragraph}>
        A community assessment was carried out in collaboration with local
        leaders, health workers, and volunteers. Surveys revealed that nearly
        80% of households relied on contaminated sources for daily water use.
        This data shaped the design of a project that would provide clean water
        access points within walking distance for every family.
      </Text>
      <Text style={styles.paragraph}>
        With compassion as the foundation and data as the guide, the project was
        designed to bring immediate relief and long-lasting impact. Each
        borehole site was carefully chosen to serve clusters of families
        efficiently and sustainably.
      </Text>
    </Page>

    {/* Page 3 */}
    <Page style={styles.page}>
      <Text style={styles.subheading}>Implementation and Collaboration</Text>
      <Text style={styles.paragraph}>
        The success of the project relied on the active participation of the
        local community. The foundation worked closely with engineers, public
        health experts, and residents to ensure that the system was both
        effective and sustainable. Every stage—from drilling and installation to
        testing—was carried out with transparency and inclusiveness.
      </Text>
      <Text style={styles.paragraph}>
        Local youth were trained as “Water Stewards” to monitor the boreholes
        and filtration systems, learning vital technical skills that could
        create future employment opportunities. The project also empowered women
        by forming Water Committees, where female representatives took
        leadership roles in maintenance and decision-making.
      </Text>
      <Text style={styles.paragraph}>
        Collaboration with the Ministry of Health and community health officers
        ensured that the water provided met safety standards. Regular water
        quality testing was introduced to guarantee purity and prevent
        contamination, reinforcing the foundation’s commitment to long-term
        solutions rather than short-term fixes.
      </Text>
    </Page>

    {/* Page 4 */}
    <Page style={styles.page}>
      <Text style={styles.subheading}>Impact and Transformation</Text>
      <Text style={styles.paragraph}>
        The transformation was immediate and powerful. Within months, 500
        families gained direct access to safe drinking water, eliminating the
        need to walk long distances. School attendance improved, as children no
        longer needed to spend hours fetching water. Women, who bore the
        heaviest burden, could now focus on entrepreneurship, education, and
        family development.
      </Text>
      <Text style={styles.paragraph}>
        Health clinics recorded a sharp decline in waterborne diseases, and
        residents reported improved overall well-being. Clean water became a
        source of empowerment—fueling not only physical health but also economic
        growth and dignity. The ripple effects extended far beyond hydration;
        they fostered hope, unity, and resilience.
      </Text>
      <Text style={styles.paragraph}>
        The success of the project also strengthened trust between the
        foundation and local communities. Residents began participating in
        additional initiatives like hygiene training, tree planting, and
        waste-management campaigns, expanding the culture of sustainability.
      </Text>
    </Page>

    {/* Page 5 */}
    <Page style={styles.page}>
      <Text style={styles.subheading}>Sustaining the Legacy</Text>
      <Text style={styles.paragraph}>
        Sustainability is at the heart of every{" "}
        <Text style={{ fontWeight: "bold" }}>
          Charlie Parker C. Global Foundation
        </Text>{" "}
        project. For the Clean Water Empowerment Project, the goal was not only
        to provide water but to ensure it continues to flow for generations.
        Maintenance programs were established, supported by community
        contributions and periodic technical visits from the foundation.
      </Text>
      <Text style={styles.paragraph}>
        Educational campaigns continue to teach residents about proper water use
        and environmental conservation. Children are encouraged to see water as
        a shared treasure—one that requires care and respect. The foundation
        remains committed to replicating this success in other regions where
        clean water is still a dream.
      </Text>
      <Text style={styles.paragraph}>
        The Clean Water Empowerment Project stands as a testament to what can be
        achieved when compassion meets action. More than just a development
        initiative, it is a story of hope, unity, and transformation. Today,
        hundreds of families wake up each morning with access to safe, clean
        water—reminding us that every drop carries the promise of a better life.
      </Text>
    </Page>
  </Document>
);

// Component
const EmpoweringCommunitiesPDF = () => {
  const hasOpened = useRef(false);

  useEffect(() => {
    document.title = "Charlie Parker C. Global Foundation";

    if (hasOpened.current) return;
    hasOpened.current = true;

    const openPDF = async () => {
      const blob = await pdf(<EmpoweringCommunitiesDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    };

    openPDF();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Generating “Empowering Communities” PDF...
      </h2>
      <p className="text-gray-600">
        Please wait a moment — the document will open in a new browser tab.
      </p>
    </div>
  );
};

export default EmpoweringCommunitiesPDF;
