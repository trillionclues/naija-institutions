import fs from "fs";
import path from "path";
import { Institution } from "./csvParser";

export function getLogoPath(institution: Institution): string | null {
  const { type, acronym } = institution;
  let basePath = "";

  // Determine the base path based on the institution's type
  if (type.toLowerCase() === "university") {
    basePath = `../src/logos/Universities/`;
    // basePath = `../src/logos/Universities/federal`;
  } else if (type.toLowerCase() === "polytechnic") {
    basePath = `../src/logos/Polytechnics/`;
  } else if (type.toLowerCase() === "college") {
    basePath = `../src/logos/Colleges/`;
  } else {
    console.error(`Invalid institution type: ${type}`);
    return null;
  }

  // Construct the logo file path
  const logoPath = path.join(basePath, `${acronym.toLowerCase()}.jpg`);
  // console.log(`Logo path for ${acronym}:`, logoPath);

  // Check if the logo file exists
  try {
    fs.accessSync(logoPath, fs.constants.R_OK);
    return logoPath;
  } catch (error) {
    console.error(`Logo file not found for ${acronym}:`, error);
    return null;
  }
}
