import {InputGroup, DropdownButton, Dropdown, Form} from 'react-bootstrap'
const Search = (props) => {
    return (
        <>
        <InputGroup className="mb-3" onChange={props.onChange} value={props.Search}>
        <Form.Control aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      </>
    )
}

export default Search;