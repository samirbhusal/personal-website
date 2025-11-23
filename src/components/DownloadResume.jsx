export default function DownloadResume() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <a 
        href="/Samir-Bhusal-Resume.pdf"
        download="Samir-Bhusal-Resume.pdf"
        className="download-btn"
      >
        ⬇️ Download Resume (PDF)
      </a>
    </div>
  );
}