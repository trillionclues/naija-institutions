import { Institution } from "../../helpers/csvParser";

export function fetchSingleUniversity(
  institutions: Institution[],
  nameOrAcronym: string
): Institution | undefined {
  // Find the university by name or acronym
  const university = institutions.find(
    (institution) =>
      institution.name.toLowerCase() === nameOrAcronym.toLowerCase() ||
      institution.acronym.toLowerCase() === nameOrAcronym.toLowerCase()
  );
  return university;
}
