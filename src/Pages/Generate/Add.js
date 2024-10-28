import React, { useState } from "react";
import { Button, Col, Form, Row, Container, Card } from "react-bootstrap";

const DataGenerationForm = () => {
  const [formData, setFormData] = useState({
    organizationuri: "",
    fromdate: "",
    todate: "",
    includeweekends: false,
    fromtime: "",
    fromtimePeriod: "AM",
    totime: "",
    totimePeriod: "AM",
    duration: { min: "", max: "" },
    generationmode: "daily",
    modeattributes: {
      daily: { daupercent: { min: "", max: "" } },
      bulk: { batchsize: "", noofrecords: "" },
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (name.includes(".")) {
      const [parent, child, subchild] = name.split(".");
      setFormData((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: subchild
            ? { ...prevState[parent][child], [subchild]: value }
            : value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleCancel = () => {
    setFormData({
      organizationuri: "",
      fromdate: "",
      todate: "",
      includeweekends: false,
      fromtime: "",
      fromtimePeriod: "AM",
      totime: "",
      totimePeriod: "AM",
      duration: { min: "", max: "" },
      generationmode: "daily",
      modeattributes: {
        daily: { daupercent: { min: "", max: "" } },
        bulk: { batchsize: "", noofrecords: "" },
      },
    });
  };

  return (
    <Container style={{ width: "100%", marginTop: "40px" , padding:"20px"}}>
      <Card className="shadow-sm">
        <Card.Body style={{ padding:"10px" , backgroundColor: "#f4f4f9", maxHeight: "100vh", overflow: "hidden" }}>
          <h2 className="mb-3">Data Generation Form</h2>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-2">
              <Form.Group as={Col} md={6} controlId="formOrganizationUri">
                <Form.Label>Organization URI:</Form.Label>
                <Form.Control
                  type="text"
                  name="organizationuri"
                  value={formData.organizationuri}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="formGenerationMode">
                <Form.Label>Generation Mode:</Form.Label>
                <Form.Select
                  name="generationmode"
                  value={formData.generationmode}
                  onChange={handleInputChange}
                >
                  <option value="daily">Daily</option>
                  <option value="bulk">Bulk</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group as={Col} md={6} controlId="formFromDate">
                <Form.Label>From Date:</Form.Label>
                <Form.Control
                  type="date"
                  name="fromdate"
                  value={formData.fromdate}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="formToDate">
                <Form.Label>To Date:</Form.Label>
                <Form.Control
                  type="date"
                  name="todate"
                  value={formData.todate}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-2" controlId="formIncludeWeekends">
              <Form.Check
                type="checkbox"
                label="Include Weekends"
                name="includeweekends"
                checked={formData.includeweekends}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Row className="mb-2">
              <Form.Group as={Col} md={3} controlId="formFromTime">
                <Form.Label>From Time:</Form.Label>
                <Form.Control
                  type="time"
                  name="fromtime"
                  value={formData.fromtime}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group as={Col} md={3} controlId="formFromTimePeriod">
                <Form.Label>From Time Period:</Form.Label>
                <Form.Select
                  name="fromtimePeriod"
                  value={formData.fromtimePeriod}
                  onChange={handleInputChange}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md={3} controlId="formToTime">
                <Form.Label>To Time:</Form.Label>
                <Form.Control
                  type="time"
                  name="totime"
                  value={formData.totime}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group as={Col} md={3} controlId="formToTimePeriod">
                <Form.Label>To Time Period:</Form.Label>
                <Form.Select
                  name="totimePeriod"
                  value={formData.totimePeriod}
                  onChange={handleInputChange}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group as={Col} md={6} controlId="formDurationMin">
                <Form.Label>Duration Min:</Form.Label>
                <Form.Control
                  type="number"
                  name="duration.min"
                  value={formData.duration.min}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="formDurationMax">
                <Form.Label>Duration Max:</Form.Label>
                <Form.Control
                  type="number"
                  name="duration.max"
                  value={formData.duration.max}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>
            {formData.generationmode === "daily" && (
              <Row className="mb-2">
                <Form.Group as={Col} md={6} controlId="formDAUMin">
                  <Form.Label>DAU Percent Min:</Form.Label>
                  <Form.Control
                    type="number"
                    name="modeattributes.daily.daupercent.min"
                    value={formData.modeattributes.daily.daupercent.min}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md={6} controlId="formDAUMax">
                  <Form.Label>DAU Percent Max:</Form.Label>
                  <Form.Control
                    type="number"
                    name="modeattributes.daily.daupercent.max"
                    value={formData.modeattributes.daily.daupercent.max}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Row>
            )}
            {formData.generationmode === "bulk" && (
              <Row className="mb-2">
                <Form.Group as={Col} md={6} controlId="formBatchSize">
                  <Form.Label>Batch Size:</Form.Label>
                  <Form.Control
                    type="number"
                    name="modeattributes.bulk.batchsize"
                    value={formData.modeattributes.bulk.batchsize}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md={6} controlId="formNoOfRecords">
                  <Form.Label>No. of Records:</Form.Label>
                  <Form.Control
                    type="number"
                    name="modeattributes.bulk.noofrecords"
                    value={formData.modeattributes.bulk.noofrecords}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Row>
            )}
            <div className="d-flex justify-content-end mt-3">
              <Button variant="primary" type="submit">
                Generate
              </Button>
              <Button
                variant="secondary"
                type="button"
                onClick={handleCancel}
                className="ms-2"
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DataGenerationForm;
