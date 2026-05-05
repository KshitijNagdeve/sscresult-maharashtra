import mongoose from "mongoose";
import Result from "./models/Result.js";

mongoose.connect("mongodb://127.0.0.1:27017/resultDB")
  .then(async () => {
    console.log("Connected");

    await Result.insertMany([
      {
        seat: "J045830",
        mname: "Puja Sukesh Dhengre",
        name: "Saksham Sukesh Dhengre",
        division: "A",
        subjects: [
          { code: "03", name: "English", marks: 90 },
          { code: "16", name: "Marathi", marks: 87 },
          { code: "15", name: "Hindi", marks: 86 },
          { code: "71", name: "Mathematics", marks: 88 },
          { code: "72", name: "Science", marks: 93 },
          { code: "73", name: "Social Science", marks: 92 }
        ],
        total: 450,
        percentage: 90.0,
        status: "Pass"
      },

      {
        seat: "J045829",
        mname: "Varsha Sanjay Chaudhari",
        name: "Sanket Sanjay Chaudhari",
        division: "A",
        subjects: [
          { code: "03", name: "English", marks: 80 },
          { code: "16", name: "Marathi", marks: 86 },
          { code: "15", name: "Hindi", marks: 90 },
          { code: "71", name: "Mathematics", marks: 95 },
          { code: "72", name: "Science", marks: 85 },
          { code: "73", name: "Social Science", marks: 92 }
        ],
        total: 448,
        percentage: 89.2,
        status: "Pass"
      },

      {
        seat: "J046128",
        mname: "Priti Keshavrao Nagdeve",
        name: "Kshitij Keshavrao Nagdeve",
        division: "A",
        subjects: [
          { code: "03", name: "English", marks: "40" },
          { code: "16", name: "Marathi", marks: "45" },
          { code: "15", name: "Hindi", marks: "50" },
          { code: "71", name: "Mathematics", marks: "60" },
          { code: "72", name: "Science", marks: "65" },
          { code: "73", name: "Social Science", marks: "69" },
        ]
        ,
        total: 289,
        percentage: 57.8,
        status: "Pass"

      },
      {
        seat: "J046116",
        mname: "Sima Dinesh Shende",
        name: "Manthan Dinesh Shende",
        division: "A",
        subjects: [
          { code: "03", name: "English", marks: "68" },
          { code: "16", name: "Marathi", marks: "70" },
          { code: "15", name: "Hindi", marks: "75" },
          { code: "71", name: "Mathematics", marks: "80" },
          { code: "72", name: "Science", marks: "65" },
          { code: "73", name: "Social Science", marks: "73" },
        ],

        total: 366,
        percentage: 73.2,
        status: "Pass"
      }

    ]);


    console.log("Data inserted successfully");
    process.exit();

  })
  .catch(err => console.log(err));