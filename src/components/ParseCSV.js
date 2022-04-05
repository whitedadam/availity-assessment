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

const ParseCSV = () => {
  const [csvData] = useState([]);
  const [csvLoaded, setCsvLoaded] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

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
        console.log(csvData);
      },
    });
  };

  const filterData = () => {
    try {
      let arr = JSON.parse(JSON.stringify(csvData));
      arr.filter((datum) => {
        return datum.FirstAndLastName !== "Bob Smith";
      });
      console.log(arr);
      setFilteredData(JSON.parse(JSON.stringify(arr)));
    } catch (err) {
      console.log(err);
    }
  };
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
            File headers: User Id, First and Last Name, Version, Insurance
            Company
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
        <Table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>First and Last Name</th>
              <th>Version</th>
              <th>Insurance Company</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.forEach((datum) => {
              <tr>
                <td>{datum.UserId}</td>
                <td>{datum.FirstAndLastName}</td>
                <td>{datum.Version}</td>
                <td>{datum.InsuranceCompany}</td>
              </tr>
            })}
          </tbody>
        </Table>
      ) : null}
    </Card>
  );
};

export default ParseCSV;
