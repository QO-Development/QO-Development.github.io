import Nav from "./components/nav";
import Billboard from "./components/billboard";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Josh's Website";
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />

      <Nav />
      <Billboard />
    </>
  );
}

export default App;
