import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

function Search(props) {
  
  const [query, setQuery] = useState(null);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(query);
  };

  return (
    <Form
      className="search d-flex"
      onChange={handleChange}
      onSubmit={handleSubmit}
      type="text"
      name="image"
      placeholder="Search for images"
    >
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default Search;
