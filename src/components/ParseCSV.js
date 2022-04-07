import {
  Card,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  FormText,
  Table,
} from "reactstrap";
import papaparse from "papaparse";
import { useState } from "react";
import { CSVLink } from "react-csv";

const ParseCSV = () => {
  const [csvData] = useState([]);
  const [csvLoaded, setCsvLoaded] = useState(false);

  // Testing generality for code reusability
  const [outObj] = useState({});
  const [finalArr] = useState([]);

  const handleUpload = (e) => {
    // Using Papaparse package to parse the uploaded file to a state array
    papaparse.parse(document.getElementById("upload").files[0], {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        for (let i = 0; i < results.data.length; i++)
          csvData.push(results.data[i]);
        filterData();
        setCsvLoaded(true);
      },
    });
  };

  // Filtering Data pulled in from CSV to remove old row versions and sort by first and last name ascending
  const filterData = () => {
    try {
      // Temp array and set to use while filtering.
      let insuranceArr = [];
      let oldInsurance = new Set();

      // Grabbing each unique insurance company from the input doc
      csvData.forEach((datum) => {
        if (!oldInsurance.has(datum.InsuranceCompany)) {
          outObj[datum.InsuranceCompany] = [];
          insuranceArr.push(datum.InsuranceCompany);
          oldInsurance.add(datum.InsuranceCompany);
        }
      });

      // For each unique company found within input file,
      // push relevant people from input file to matching company arr
      for (let company in outObj) {
        outObj[company] = csvData.filter(
          (person) => person.InsuranceCompany === company
        );
      }

      // Sorting each company array in outObj by first and last name ascending
      for (let company in outObj) {
        outObj[company].sort((nameA, nameB) =>
          nameA.FirstAndLastName.toUpperCase() >
          nameB.FirstAndLastName.toUpperCase()
            ? 1
            : -1
        );
      }

      // I know that the time complexity of this solution is not great but it's cleaner than my first solution.
      // Removing duplicate users from each company, filtering by highest version number
      for (let company in outObj) {
        let filteredCompany = new Set(); // will prevent duplicates from arriving in output
        outObj[company].forEach((person1, index1) => {
          let maxVersion = person1;
          outObj[company].forEach((person2, index2) => {
            if (index1 !== index2 && person1.UserId === person2.UserId) {
              person1.Version > person2.Version
                ? (maxVersion = person1)
                : (maxVersion = person2); // taking the highest version profile
            }
          });
          filteredCompany.add(maxVersion);
        }); // end foreach
        finalArr.push(Array.from(filteredCompany)); // pushing that filtered array to the final presentation arr.
      } // end company for
    } catch (err) {
      console.log(err);
    }
  }; // end filterData
  return (
    <Card style={{ borderColor: "#333" }}>
      <CardTitle style={{ margin: "5px" }} tag={"h3"}>
        ParseCSV
      </CardTitle>
      <Form>
        <FormGroup style={{ margin: "10px" }}>
          <Label for="upload">Upload File</Label>
          <Input type="file" id="upload" accept=".csv"></Input>
          <FormText>
            Please upload a .csv file. <br />
            File headers: UserId, FirstAndLastName, Version, InsuranceCompany
            <br />
            You may use the "input1.csv" file within this directory as a test
            input.
            <br />
          </FormText>
          <Button
            id="uploadconfirm"
            color="warning"
            style={{ borderColor: "#333", margin: "5px" }}
            onClick={handleUpload}
          >
            Upload File
          </Button>
        </FormGroup>
      </Form>
      {csvLoaded ? (
        <>
          {finalArr.map((company, index) => (
            <Table>
              <caption>
                {finalArr[index][0].InsuranceCompany} Data from CSV{" "}
                <CSVLink data={finalArr[index]}>
                  Click to Download Table as CSV
                </CSVLink>
              </caption>
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>First and Last Name</th>
                  <th>Version</th>
                  <th>Insurance Company</th>
                </tr>
              </thead>
              <tbody>
                {finalArr[index].map((datum) => (
                  <tr>
                    <td>{datum.UserId}</td>
                    <td>{datum.FirstAndLastName}</td>
                    <td>{datum.Version}</td>
                    <td>{datum.InsuranceCompany}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ))}
        </>
      ) : null}
    </Card>
  );
};

export default ParseCSV;
