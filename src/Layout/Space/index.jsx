export default function Space({ size = "lg", type = "pad", className = "" }) {
  const padSizes = {
    sm: "pb-6",
    md: "pb-10",
    lg: "pb-16",
    xl: "pb-24",
  };

  const marginSizes = {
    sm: "mt-6",
    md: "mt-10",
    lg: "mt-16",
    xl: "mt-24",
  };

  const classes = type === "margin" ? marginSizes[size] : padSizes[size];

  return <div className={`${classes} ${className}`} aria-hidden="true" />;
}
