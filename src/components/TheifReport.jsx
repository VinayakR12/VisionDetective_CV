import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../styles/image.png";
import placeholderImg from "../styles/image.png";
const apiURL = import.meta.env.VITE_API_URL;

const styles = StyleSheet.create({
  page: { padding: 20, backgroundColor: "#eef2ff" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottom: "3 solid #1e40af", paddingBottom: 12, marginBottom: 15 },
  logo: { width: 60, height: 60 },
  reportNumber: { fontSize: 10, fontWeight: "bold", color: "#1e40af" },
  titleContainer: { textAlign: "center", marginBottom: 10 },
  title: { fontSize: 24, fontWeight: "bold", color: "#1e40af" },
  subtitle: { fontSize: 13, color: "#4b5563" },
  subtitle1: { fontSize: 10, color: "#4b5563" },
  sectionTitle: { fontSize: 13, fontWeight: "bold", color: "#1e3a8a", marginBottom: 4, textDecoration: "underline" },
  reportTitle: { textAlign: "center", fontSize: 18, fontWeight: "bold", color: "#1e3a8a", marginBottom: 6, textTransform: "uppercase" },
  table: { display: "flex", flexDirection: "column", marginBottom: 7, border: "1 solid #1e40af", borderRadius: 5, overflow: "hidden" },
  tableRow: { flexDirection: "row", backgroundColor: "#e0e7ff", borderBottom: "1 solid #1e40af", padding: 3 },
  tableCell: { flex: 1, fontSize: 11, padding: 3, textAlign: "center", color: "#1e3a8a" },
  section: { marginBottom: 10, padding: 12, backgroundColor: "#ffffff", borderRadius: 6, borderLeft: "5 solid #1e3a8a", shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 3 },
  alert: { fontSize: 14, color: "#dc2626", fontWeight: "bold" },
  detectedImage: { width: "100%", height: 180, borderRadius: 5, marginBottom: 5, border: "2 solid #1e3a8a" },
  imageTitle: { textAlign: "center", fontSize: 14, fontWeight: "bold", color: "#1e3a8a", marginBottom: 5 },
  footer: { textAlign: "center", fontSize: 10, color: "#6b7280", marginTop: 10, borderTop: "1 solid #1e3a8a", paddingTop: 5 },
});

const getCurrentDateTime = () => new Date().toLocaleString();
const getRandomReportNumber = () => "REP-" + Math.floor(100000 + Math.random() * 900000);
const getThreatColor = (level) => (level === "High" ? "#ff3b30" : level === "Medium" ? "#ff9500" : "#34c759");

const DetectiveReport = ({ detectionResult }) => {
  if (!detectionResult) return null;
  const threatLevel = detectionResult.thief_detected ? "High" : "Low";
  const threatColor = getThreatColor(threatLevel);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Report Number */}
       
        {/* Header */}
        <View style={styles.header}>
          <Image src={logo} style={styles.logo} />
          <View>
            <Text style={styles.title}>VisionDetective</Text>
            <Text style={styles.subtitle}>AI-Powered Security Analysis</Text>
             <Text style={styles.reportNumber}>Report No: {getRandomReportNumber()}</Text>
            <Text style={styles.subtitle1}>{getCurrentDateTime()}</Text>
          </View>
        </View>

        {/* Report Title */}
        <Text style={styles.reportTitle}>Detection Report</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}> About VisionDetective</Text>
          <Text style={{ fontSize: 11 }}>VisionDetective is an AI-powered security analysis tool that detects potential threats based on real-time image processing. This report provides detailed insights into detected individuals and objects.</Text>
        </View>

        {/* Report Info */}
        <View style={[styles.section, { backgroundColor: threatColor }]}>
  <Text style={{ fontSize: 14, fontWeight: "bold", color: "#06038D" }}>
    Threat Level: {threatLevel}
  </Text>
</View>

        {/* Detection Details */}
        {detectionResult.thief_detected && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Detected Person Details</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Age</Text>
                <Text style={styles.tableCell}>Gender</Text>
                <Text style={styles.tableCell}>Height</Text>
                <Text style={styles.tableCell}>Weight</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>{detectionResult.age} yrs</Text>
                <Text style={styles.tableCell}>{detectionResult.gender}</Text>
                <Text style={styles.tableCell}>{detectionResult.estimated_height_cm} cm</Text>
                <Text style={styles.tableCell}>{detectionResult.estimated_weight_kg} kg</Text>
              </View>
            </View>
          </View>
        )}

        {/* Image Evidence */}
         <View style={styles.section}>
        <Text style={styles.sectionTitle}>Evidence Detected</Text>
        <Image src={`${apiURL}/get_image` || placeholderImg} style={styles.detectedImage} />

               {/* Harmful Objects */}
               {detectionResult.harmful_objects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.alert}>🛑 Dangerous Objects Detected</Text>
            {detectionResult.harmful_objects.map((obj, index) => (
              <Text key={index} style={{ fontSize: 10 }}>- {obj}</Text>
            ))}
          </View>
        )}
</View>
        {/* Other Objects */}
        {detectionResult.detected_objects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Other Objects Detected:</Text>
            {detectionResult.detected_objects.map((obj, index) => (
              <Text key={index} style={{ fontSize: 10 }}>- {obj}</Text>
            ))}
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}> Recommended Actions</Text>
          {threatLevel === "High" ? (
  <>
    <Text style={{ fontSize: 10 }}>- Contact authorities immediately.</Text>
    <Text style={{ fontSize: 10 }}>- Lock all entry points and secure valuables.</Text>
    <Text style={{ fontSize: 10 }}>- Monitor live CCTV feed for any movement.</Text>
  </>
) : (
  <>
    <Text style={{ fontSize: 10 }}>- Stay alert and observe surroundings.</Text>
    <Text  style={{ fontSize: 10 }}>- Review security footage regularly.</Text>
    <Text style={{ fontSize: 10 }}>- Ensure all security systems are active.</Text>
  </>
)}

        </View>

        {/* Footer */}
        <Text style={styles.footer}>This is an AI-generated report and may not be 100% accurate. Use it as a reference, not as a final verdict.</Text>

      </Page>
    </Document>
  );
};

export default DetectiveReport;
