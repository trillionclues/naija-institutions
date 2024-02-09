import { readAndParseCsv } from "../helpers/csvParser";
import { fetchAllUniversities } from "./universities/fetchAllUniversities";
import { fetchSingleUniversity } from "./universities/fetchSingleUniversity";
import { searchUniversities } from "./universities/searchUniversities";

async function initializePackage() {
  try {
    const institutions = await readAndParseCsv("./data/institutions.csv");

    // Fetch all universities
    const allUniversities = fetchAllUniversities(institutions);

    // // Fetch single university (name as parameter)
    // const universityName = "MOUAU";
    // const singleUniversity = fetchSingleUniversity(
    //   institutions,
    //   universityName
    // );

    // // Search universities  query
    // const searchQuery = "Federal";
    // const searchResult = searchUniversities(institutions, searchQuery);
  } catch (error) {
    console.error("Error reading and parsing CSV:", error);
  }
}
initializePackage();
