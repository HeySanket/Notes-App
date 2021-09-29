import { Suspense } from "react";
import MenuBar from "./component/menubar/MenuBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading.......</h1>}>
          <MenuBar />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
