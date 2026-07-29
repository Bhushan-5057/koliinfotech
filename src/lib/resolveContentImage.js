
import aiblogs from "@/assets/images/aiblogs.jpg";
import generativeai from "@/assets/images/generativeai.jpg";
import aiagents from "@/assets/images/aiagents.jpg";
import mcp from "@/assets/images/mcp.jpg";
import saasdev from "@/assets/images/saasdev.jpg";
import cloudmigration from "@/assets/images/cloudmigration.jpg";
import devops from "@/assets/images/devops.jpg";
import fintech from "@/assets/images/fintech.jpg";
import healthcare from "@/assets/images/healthcare.jpg";
import cybersecurity from "@/assets/images/cybersecurity.jpg";
import webDevimg2 from "@/assets/images/webDevimg-2.webp";
import mobileAppDev from "@/assets/images/mobile_app_dev.webp";
import logistic from "@/assets/images/logistic.jpg";
import rideBooking from "@/assets/images/ride_booking.jpg";
import realEstate from "@/assets/images/real_estate.jpg";
import education from "@/assets/images/education.jpg";
import manufacturing from "@/assets/images/manufacturing.jpg";
import crm from "@/assets/images/crm.jpg";
import ecommerce from "@/assets/images/ecommerce.jpg";
import erp from "@/assets/images/erp.jpg";

const IMAGE_MAP = {
  "aiblogs.jpg": aiblogs,
  "generativeai.jpg": generativeai,
  "aiagents.jpg": aiagents,
  "mcp.jpg": mcp,
  "saasdev.jpg": saasdev,
  "cloudmigration.jpg": cloudmigration,
  "devops.jpg": devops,
  "fintech.jpg": fintech,
  "healthcare.jpg": healthcare,
  "cybersecurity.jpg": cybersecurity,
  "webdevimg-2.webp": webDevimg2,
  "mobile_app_dev.webp": mobileAppDev,
  "logistic.jpg": logistic,
  "logistics.jpg": logistic,
  "ride_booking.jpg": rideBooking,
  "real_estate.jpg": realEstate,
  "education.jpg": education,
  "manufacturing.jpg": manufacturing,
  "crm.jpg": crm,
  "ecommerce.jpg": ecommerce,
  "erp.jpg": erp,
};

const getFileName = (path) => {
  if (!path || typeof path !== "string") return "";
  const cleaned = path.split("?")[0].split("#")[0].replace(/\\/g, "/");
  const parts = cleaned.split("/");
  return (parts[parts.length - 1] || "").toLowerCase();
};

export const resolveContentImage = (path) => {
  if (!path) return null;
  if (typeof path !== "string") return path;

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("/") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  const fileName = getFileName(path);
  return IMAGE_MAP[fileName] || null;
};

export default resolveContentImage;
