import { InputGroup, DropdownButton, Dropdown, Form } from "react-bootstrap";
const Search = (props) => {
  return (
    <>
      <InputGroup
        className="mb-3"
        onChange={props.onChange}
        value={props.Search}
        style={{ border: "0px solid whitesmoke" }}
      >
        <Form.Control
          aria-label="Text input with dropdown button"
          placeholder="find a repository..."
          style={{ backgroundColor: "#282c34", color: "whitesmoke" }}
        />

        <DropdownButton
          variant="outline-secondary"
          title="Sort"
          id="input-group-dropdown-2"
          align="end"
        >
           <Dropdown.Item
            href="#"
            onClick={() => props.onClick("created&direction=desc")}
          >
            default
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={() => props.onClick("created&direction=asc")}
          >
            Created
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => props.onClick("updated")}>
            Last Updated
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => props.onClick("name")}>
            Name
          </Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </>
  );
};

export default Search;
