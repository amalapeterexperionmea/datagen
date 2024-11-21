import React, { useState } from "react";
import { Container, Card} from "react-bootstrap";
import Form from "../../Components/FormLibrary/Form";
import { useNavigate } from "react-router-dom";

const DataGenerationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const fields = [
    { type: "text", name: "organizationuri", label: "Organization URI", required: true },
    { type: "date", name: "fromdate", label: "From Date", required: true },
    { type: "date", name: "todate", label: "To Date", required: true },
    { type: "checkbox", name: "includeweekends", label: "Include Weekends" },
    { type: "time", name: "fromtime", label: "From Time", required: true },
    { type: "select", name: "fromtimePeriod", label: "From Time Period", options: [{ label: "AM", value: "AM" }, { label: "PM", value: "PM" }] },
    { type: "time", name: "totime", label: "To Time", required: true },
    { type: "select", name: "totimePeriod", label: "To Time Period", options: [{ label: "AM", value: "AM" }, { label: "PM", value: "PM" }] },
    { type: "number", name: "durationMin", label: "Duration Min", required: true },
    { type: "number", name: "durationMax", label: "Duration Max", required: true },
    { type: "select", name: "generationmode", label: "Generation Mode", options: [{ label: "Daily", value: "daily" }, { label: "Bulk", value: "bulk" }] },
    ...(formData.generationmode === "daily"
      ? [
          { type: "number", name: "dailyDauPercentMin", label: "Daily DAU Percent Min", required: true },
          { type: "number", name: "dailyDauPercentMax", label: "Daily DAU Percent Max", required: true }
        ]
      : [
          { type: "number", name: "bulkBatchSize", label: "Bulk Batch Size", required: true },
          { type: "number", name: "bulkNoOfRecords", label: "Bulk No. of Records", required: true }
        ]),
  ];

  return (
    <Container
      style={{ width: "100%", marginTop: "40px", padding: "20px" }}
    >
      <Card className="shadow-sm" >
        <Card.Body style={{ padding: "10px", backgroundColor: "#f4f4f9", maxHeight: "100vh",overflowY:"auto", overflow:"hidden" }}>
          <h2>Data Generation Form</h2>
          <Form
            fields={fields}
            formData={formData}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            showGenerate={true}
            layout="grid"
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DataGenerationForm;
