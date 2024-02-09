import { Institution } from "../../helpers/csvParser";

export function searchUniversities(
  institutions: Institution[],
  criteria: string
): Institution[] {
  // search by matching criteria, can include name, type, ownership, etc.
  const results = institutions.filter((institution) =>
    institution.name.toLowerCase().includes(criteria.toLowerCase())
  );
  return results;
}
