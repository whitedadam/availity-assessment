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
      let oldInfo = new Set();
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

      for (let company in outObj) {
        //change back to insuranceArr.forEach((company)) to fix
        csvData.forEach((datum1, index1) => {
          csvData.forEach((datum2, index2) => {
            if (
              // Checking for duplicate within the current Company
              index1 !== index2 &&
              datum1.UserId === datum2.UserId &&
              datum1.InsuranceCompany === datum2.InsuranceCompany &&
              datum1.InsuranceCompany === company &&
              datum2.InsuranceCompany === company
            ) {
              if (!oldInfo.has(datum1.UserId)) {
                // Checking that UserId hasn't appeared before
                if (datum1.Version >= datum2.Version)
                  outObj[company].push(
                    datum1
                  ); // if datum1 is higher version add it
                else if (datum1.Version <= datum2.Version)
                  outObj[company].push(datum2); //if datum2 is higher version add it
                oldInfo.add(datum1.UserId); // track UserId within set
              }
            }
          }); // end datum2
          if (
            !oldInfo.has(datum1.UserId) &&
            datum1.InsuranceCompany === company
          ) {
            // if UserId hasn't been seen before and is not duplicate add it to array
            outObj[company].push(datum1);
            oldInfo.add(datum1.UserId);
          }
        }); // end datum1
        oldInfo.clear(); //cleaing tracking set
      } //end outObj
    } catch (err) {
      console.log(err);
    }

    // Sorting each array in outObj by first and last name ascending
    const sortArr = (arr) => {
      arr.sort((a, b) => {
        const nameA = a.FirstAndLastName.toUpperCase();
        const nameB = b.FirstAndLastName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    };
    
    // Sorting all data within outObj
    for (let company in outObj) {
      sortArr(outObj[company]);
    }

    // Adding final sorted data to finalArr for output
    for (let company in outObj) {
      finalArr.push(JSON.parse(JSON.stringify(outObj[company])))
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
