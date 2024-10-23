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
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #1b4965;
  margin-bottom: 20px;
  font-family: "Arial", sans-serif;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

const Label = styled.label`
  color: #2a6f97;
  font-weight: bold;
  font-size: 13px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 14px;
  &:focus {
    border-color: #2a6f97;
    outline: none;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const CheckboxLabel = styled.label`
  margin-left: 10px;
  color: #2a6f97;
  font-weight: bold;
  font-size: 13px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 14px;
  &:focus {
    border-color: #2a6f97;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2a6f97;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 15px;
  &:hover {
    background-color: #1b4965;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const DataGenerationForm = () => {
  const [formData, setFormData] = useState({
    organizationuri: "",
    fromdate: "",
    todate: "",
    includeweekends: false,
    fromtime: "",
    fromtimePeriod: "AM", // Initial state for from time period
    totime: "",
    totimePeriod: "AM", // Initial state for to time period
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
    setError(""); // Reset error message

    // Format the fromtime and totime with AM/PM
    const formattedFromTime = `${formData.fromtime} ${formData.fromtimePeriod}`;
    const formattedToTime = `${formData.totime} ${formData.totimePeriod}`;

    // Prepare the data for submission
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
      // Optionally reset the form after successful submission
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

  return (
    <Container>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Title>Data Generation</Title>

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
              <TimeContainer>
                <Input
                  type="time"
                  name="fromtime"
                  value={formData.fromtime}
                  onChange={handleChange}
                  required
                />
                <Select name="fromtimePeriod" value={formData.fromtimePeriod} onChange={handleChange}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </Select>
              </TimeContainer>
            </FormField>
          </FormRow>

          <FormField>
            <CheckboxWrapper>
              <Checkbox
                name="includeweekends"
                checked={formData.includeweekends}
                onChange={handleChange}
              />
              <CheckboxLabel htmlFor="includeweekends">
                Include Weekends
              </CheckboxLabel>
            </CheckboxWrapper>
          </FormField>

          {/* Row 3 */}
          <FormRow>
            <FormField>
              <Label htmlFor="totime">To Time:</Label>
              <TimeContainer>
                <Input
                  type="time"
                  name="totime"
                  value={formData.totime}
                  onChange={handleChange}
                  required
                />
                <Select name="totimePeriod" value={formData.totimePeriod} onChange={handleChange}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </Select>
              </TimeContainer>
            </FormField>

            <FormField>
              <Label htmlFor="duration.min">Min Duration:</Label>
              <Input
                type="number"
                name="duration.min"
                value={formData.duration.min}
                onChange={handleChange}
                required
              />
            </FormField>
          </FormRow>

          {/* Row 4 */}
          <FormRow>
            <FormField>
              <Label htmlFor="duration.max">Max Duration:</Label>
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

          {/* Dynamic Fields Based on Generation Mode */}
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
                  min="1"
                  required
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
                  min="1"
                  required
                />
              </FormField>
            </FormRow>
          )}

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
                  min="1"
                  required
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
                  min="1"
                  required
                />
              </FormField>
            </FormRow>
          )}

          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Generate Data"}
          </Button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </FormWrapper>
    </Container>
  );
};

export default DataGenerationForm;
