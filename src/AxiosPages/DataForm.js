import { Form, Button,Card } from "react-bootstrap";
function DataForm({
  handleChange,
  handleSubmit,
  inputData,
  handleUpdate,
  buttonType
}) {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
       <Card className="text-center" style={{width:450}}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            onChange={handleChange}
            value={inputData.firstName}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            onChange={handleChange}
            value={inputData.lastName}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Role</Form.Label>
          <Form.Control
            name="role"
            type="text"
            onChange={handleChange}
            value={inputData.role}
            placeholder="Enter Role"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Companey</Form.Label>
          <Form.Control
            name="company"
            type="text"
            onChange={handleChange}
            value={inputData.company}
            placeholder="Enter company name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>State</Form.Label>
          <Form.Control
            name="state"
            type="text"
            onChange={handleChange}
            value={inputData.state}
            placeholder="Enter State name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            type="text"
            onChange={handleChange}
            value={inputData.city}
            placeholder="Enter City"
          />
        </Form.Group>
        {buttonType ? (
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
        ) : (
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleUpdate(e)}
          >
            Update
          </Button>
        )}
      </Form>
      </Card>
    </div>
  );
}

export default DataForm;
