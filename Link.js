import React from "react";
import { jsPDF } from "jspdf";

const GeneratePDF = () => {
  const createPDF = () => {
    const doc = new jsPDF();
    doc.text("Hello, this is a dynamically generated PDF!", 10, 10);
    doc.save("example.pdf");
  };

  return (
    <div>
      <h2>Generate PDF Example</h2>
      <button onClick={createPDF}>Download PDF</button>
    </div>
  );
};

export default GeneratePDF;
