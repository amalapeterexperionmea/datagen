import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  overflow: hidden;
`;

const FormWrapper = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 450px;
  max-height: 85vh;
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  color: #1b4965;
  margin-bottom: 15px;
  font-family: "Arial", sans-serif;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-bottom: 8px;
`;

const Label = styled.label`
  color: #2a6f97;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 12px;
  &:focus {
    border-color: #2a6f97;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 12px;
  &:focus {
    border-color: #2a6f97;
    outline: none;
  }
`;

const Button = styled.button`
  width: 48%;
  padding: 6px;
  background-color: #2a6f97;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  margin-right: 2%;
  &:hover {
    background-color: #1b4965;
  }
`;

const CancelButton = styled(Button)`
  background-color: #e74c3c;
  &:hover {
    background-color: #c0392b;
  }
`;

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "fromtimePeriod" || name === "totimePeriod") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name.startsWith("duration")) {
      const key = name.split(".")[1];
      setFormData({
        ...formData,
        duration: {
          ...formData.duration,
          [key]: value,
        },
      });
    } else if (name.startsWith("modeattributes")) {
      const [, mode, key] = name.split(".");
      setFormData({
        ...formData,
        modeattributes: {
          ...formData.modeattributes,
          [mode]: {
            ...formData.modeattributes[mode],
            [key]: value,
          },
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formattedFromTime = `${formData.fromtime} ${formData.fromtimePeriod}`;
    const formattedToTime = `${formData.totime} ${formData.totimePeriod}`;

    const dataToSubmit = {
      ...formData,
      fromtime: formattedFromTime,
      totime: formattedToTime,
    };

    const requiredFields = [
      "organizationuri",
      "fromdate",
      "todate",
      "fromtime",
      "totime",
      "duration.min",
      "duration.max",
      "generationmode",
    ];

    const allFieldsFilled = requiredFields.every((field) => {
      const value = field.includes(".")
        ? field.split(".").reduce((acc, key) => acc[key], dataToSubmit)
        : dataToSubmit[field];
      return value && value.toString().trim() !== "";
    });

    if (!allFieldsFilled) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/generate", dataToSubmit);
      setLoading(false);
      alert("Data generation completed!");
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
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("There was an error submitting the form. Please try again.");
      setLoading(false);
    }
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
    <Container>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Title>Generate Data</Title>

          {/* Row 1 */}
          <FormRow>
            <FormField>
              <Label htmlFor="organizationuri">Organization URI:</Label>
              <Input
                type="text"
                name="organizationuri"
                value={formData.organizationuri}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="fromdate">From Date:</Label>
              <Input
                type="date"
                name="fromdate"
                value={formData.fromdate}
                onChange={handleChange}
                required
              />
            </FormField>
          </FormRow>

          {/* Row 2 */}
          <FormRow>
            <FormField>
              <Label htmlFor="todate">To Date:</Label>
              <Input
                type="date"
                name="todate"
                value={formData.todate}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="fromtime">From Time:</Label>
              <Input
                type="time"
                name="fromtime"
                value={formData.fromtime}
                onChange={handleChange}
                required
              />
            </FormField>
          </FormRow>

          {/* Row 3 */}
          <FormRow>
            <FormField>
              <Label htmlFor="fromtimePeriod">From Time Period:</Label>
              <Select
                name="fromtimePeriod"
                value={formData.fromtimePeriod}
                onChange={handleChange}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </Select>
            </FormField>

            <FormField>
              <Label htmlFor="totime">To Time:</Label>
              <Input
                type="time"
                name="totime"
                value={formData.totime}
                onChange={handleChange}
                required
              />
            </FormField>
          </FormRow>

          {/* Row 4 */}
          <FormRow>
            <FormField>
              <Label htmlFor="totimePeriod">To Time Period:</Label>
              <Select
                name="totimePeriod"
                value={formData.totimePeriod}
                onChange={handleChange}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </Select>
            </FormField>

            <FormField>
              <Label htmlFor="duration.min">Duration Min (minutes):</Label>
              <Input
                type="number"
                name="duration.min"
                value={formData.duration.min}
                onChange={handleChange}
                required
              />
            </FormField>
          </FormRow>

          {/* Row 5 */}
          <FormRow>
            <FormField>
              <Label htmlFor="duration.max">Duration Max (minutes):</Label>
              <Input
                type="number"
                name="duration.max"
                value={formData.duration.max}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="generationmode">Generation Mode:</Label>
              <Select
                name="generationmode"
                value={formData.generationmode}
                onChange={handleChange}
              >
                <option value="daily">Daily</option>
                <option value="bulk">Bulk</option>
              </Select>
            </FormField>
          </FormRow>

          
          <FormRow>
            <FormField>
              <Label htmlFor="includeweekends">Include Weekends:</Label>
              <Input
                type="checkbox"
                name="includeweekends"
                checked={formData.includeweekends}
                onChange={handleChange}
              />
            </FormField>
          </FormRow>
          {formData.generationmode === "daily" && (
            <FormRow>
              <FormField>
                <Label htmlFor="modeattributes.daily.daupercent.min">
                  DAU Percent Min (%):
                </Label>
                <Input
                  type="number"
                  name="modeattributes.daily.daupercent.min"
                  value={formData.modeattributes.daily.daupercent.min}
                  onChange={handleChange}
                />
              </FormField>
          
              <FormField>
                <Label htmlFor="modeattributes.daily.daupercent.max">
                  DAU Percent Max (%):
                </Label>
                <Input
                  type="number"
                  name="modeattributes.daily.daupercent.max"
                  value={formData.modeattributes.daily.daupercent.max}
                  onChange={handleChange}
                />
              </FormField>
            </FormRow>
          )}{/* Row 7: Bulk Mode */}
          {formData.generationmode === "bulk" && (
            <FormRow>
              <FormField>
                <Label htmlFor="modeattributes.bulk.batchsize">
                  Batch Size:
                </Label>
                <Input
                  type="number"
                  name="modeattributes.bulk.batchsize"
                  value={formData.modeattributes.bulk.batchsize}
                  onChange={handleChange}
                />
              </FormField>
          
              <FormField>
                <Label htmlFor="modeattributes.bulk.noofrecords">
                  Number of Records:
                </Label>
                <Input
                  type="number"
                  name="modeattributes.bulk.noofrecords"
                  value={formData.modeattributes.bulk.noofrecords}
                  onChange={handleChange}
                />
              </FormField>
            </FormRow>
          )}
          

          {/* Row 8 */}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <FormRow>
            <Button type="submit" disabled={loading}>
              {loading ? "Generating..." : "Generate"}
            </Button>
            <CancelButton type="button" onClick={handleCancel}>
              Cancel
            </CancelButton>
          </FormRow>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default DataGenerationForm;
