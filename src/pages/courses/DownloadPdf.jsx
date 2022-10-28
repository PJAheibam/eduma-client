import React from "react";
import {
  Document as Doc,
  Text,
  Page,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import photo from "../../assets/images/eduma-logo-light.png";

const styles = StyleSheet.create({
  pageNumber: {
    marginVertical: 8,
    color: "#6b6b6b",
  },
  logo: {
    marginHorizontal: "auto",
    height: 60,
    marginBottom: "40px",
  },
  page: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    color: "#272727",
    fontSize: 14,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    marginBottom: 12,
  },
  listHeading: {
    fontSize: 15,
    fontWeight: 500,
    marginVertical: 10,
  },
  listItem: {
    paddingLeft: 10,
    marginBottom: 8,
  },
  price: {
    marginTop: "auto",
    fontWeight: 500,
    borderBottom: "2px solid #9c9c9c",
  },
  disabled: {
    color: "#b3b3b3",
  },
});

const DownloadPDF = ({ course }) => {
  const test = false;
  if (test)
    return (
      <Doc>
        <Page>
          <Text size="A4">Hello</Text>
        </Page>
      </Doc>
    );

  return (
    <Doc>
      <Page size="A4" style={styles.page}>
        <Image style={styles.logo} src={photo} />
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.text}>{course.desc}</Text>
        <Text style={styles.listHeading}>
          Work Experience-Based Learning Approach
        </Text>
        {course.bulletPoints.map((point, i) => (
          <Text key={i} style={styles.listItem}>
            {`${i + 1}) ${point}`}
          </Text>
        ))}
        <Text style={styles.price}>Price: {course.price}</Text>
        <Text style={styles.disabled}>One Time Only</Text>
      </Page>
    </Doc>
  );
};

export default DownloadPDF;
