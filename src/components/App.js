import React from "react";
import Container from 'react-bootstrap/Container';
import ItemControl from "./ItemControl";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <Container fluid>
        <Header />
        <ItemControl />
      </Container>
    </React.Fragment>
  );
}

export default App;