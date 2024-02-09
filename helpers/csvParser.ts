import fs from "fs";
import csvParser from "csv-parser";

export interface Institution {
  name: string;
  type: string;
  acronym: string;
  ownership: string;
  url: string;
  year: number;
}

export function readAndParseCsv(filePath: string): Promise<Institution[]> {
  return new Promise((resolve, reject) => {
    const institutions: Institution[] = [];

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (row: any) => {
        // Assuming the CSV columns are: Name of Institution, Type, Acronym, Ownership, Url, Year

        const institution: Institution = {
          name: row["Name of Institution"],
          type: row["Type"],
          acronym: row["Acronym"],
          ownership: row["Ownership"],
          url: row["Url"],
          year: parseInt(row["Year"], 10),
        };

        institutions.push(institution);
      })
      .on("end", () => {
        resolve(institutions);
      })
      .on("error", (error: any) => {
        reject(error);
      });
  });
}

// Usage example
// const csvFilePath = 'data/institutions.csv';
// readAndParseCSV(csvFilePath)
//   .then((data: Institution[]) => {
//     console.log(data); // Parsed institution data
//   })
//   .catch((error: any) => {
//     console.error('Error reading or parsing CSV file:', error);
//   });
