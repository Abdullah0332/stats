import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// INHERITANCE
// const reader = new MatchReader("football.csv");
// reader.read();

// COMPOSITION
// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");
// // Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHTMLReport("Man United");

matchReader.load();

summary.buildAndPrintReport(matchReader.matches);
