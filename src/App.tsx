import { Route, Routes } from "react-router";

import Index from "./routes/index.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
