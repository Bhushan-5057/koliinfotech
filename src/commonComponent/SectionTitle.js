const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}) => {
  return (
    <div
      className={`w-100 ${center ? "text-center mx-auto" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2
        className="mb-4 text-black dark:text-white"
        style={{ fontSize: "2.25rem", fontWeight: "bold" }}
      >
        {title}
      </h2>
      <p
        className="text-body-secondary"
        style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
      >
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
