import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Form from '../../Components/FormLibrary/Form';
import { useNavigate } from 'react-router-dom';

const DataGenerationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    organizationuri: "",
    fromdate: "",
    todate: "",
    includeweekends: false,
    fromtime: "",
    fromtimePeriod: "AM",
    totime: "",
    totimePeriod: "AM",
    durationMin: "",
    durationMax: "",
    generationmode: "daily",
    dailyDauPercentMin: "",
    dailyDauPercentMax: "",
    bulkBatchSize: "",
    bulkNoOfRecords: ""
  });

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
    { type: 'text', name: 'organizationuri', label: 'Organization URI' },
    { type: 'date', name: 'fromdate', label: 'From Date' },
    { type: 'date', name: 'todate', label: 'To Date' },
    { type: 'checkbox', name: 'includeweekends', label: 'Include Weekends' },
    { type: 'time', name: 'fromtime', label: 'From Time' },
    { type: 'select', name: 'fromtimePeriod', label: 'From Time Period', options: [{ label: 'AM', value: 'AM' }, { label: 'PM', value: 'PM' }] },
    { type: 'time', name: 'totime', label: 'To Time' },
    { type: 'select', name: 'totimePeriod', label: 'To Time Period', options: [{ label: 'AM', value: 'AM' }, { label: 'PM', value: 'PM' }] },
    { type: 'number', name: 'durationMin', label: 'Duration Min' },
    { type: 'number', name: 'durationMax', label: 'Duration Max' },
    { type: 'select', name: 'generationmode', label: 'Generation Mode', options: [{ label: 'Daily', value: 'daily' }, { label: 'Bulk', value: 'bulk' }] },
  
  ];

  return (
    <Container style={{ width: '100%', marginTop: '40px', padding: '20px' }}>
      <Card className="shadow-sm">
        <Card.Body style={{ padding: '10px', backgroundColor: '#f4f4f9', height:'100vh' , overflow:'hidden' }}>
          <h2 className="mb-3">Data Generation Form</h2>
          <Form 
            fields={fields} 
            formData={formData} 
            onChange={handleInputChange} 
            onSubmit={handleSubmit} 
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DataGenerationForm;
