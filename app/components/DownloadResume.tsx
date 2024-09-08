"use client";
import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const DownloadResume: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadResume = () => {
    const input = document.getElementById("resume");
    if (input) {
      setIsLoading(true); // Set loading state to true when starting to generate PDF
      html2canvas(input, {
        scale: 2, // Increase scale for better resolution
      })
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");

          // Create PDF document with page size matching the content
          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "pt",
            format: [canvas.width, canvas.height],
          });

          pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
          pdf.save("resume.pdf");
          setIsLoading(false); // Reset loading state after generating PDF
        })
        .catch((error) => {
          console.error("Error generating PDF:", error);
          setIsLoading(false); // Reset loading state on error
        });
    }
  };

  return (
    <button
      onClick={downloadResume}
      className={`text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-10 my-2 mx-5 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ${
        isLoading ? "cursor-not-allowed opacity-50" : ""
      }`}
      disabled={isLoading} // Disable the button while loading
    >
      {isLoading ? "Downloading..." : "Download Resume"}
    </button>
  );
};

export default DownloadResume;
