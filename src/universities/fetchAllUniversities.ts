import { Institution } from "../../helpers/csvParser";
import { getLogoPath } from "../../helpers/getLogoPath";

export interface UniversityWithLogo extends Institution {
  logoPath: string | null;
}

export function fetchAllUniversities(
  institutions: Institution[]
): (Institution & { logoPath: string | null })[] {
  // Filter institutions to include only universities
  const universities = institutions.filter(
    (institution) => institution.type.toLowerCase() === "university"
  );

  // Attach logo paths to each university object
  const universitiesWithLogos = universities.map((university) => ({
    ...university,
    logoPath: getLogoPath(university),
  }));

  console.log("Universities with logos:", universitiesWithLogos);
  return universitiesWithLogos;
}
