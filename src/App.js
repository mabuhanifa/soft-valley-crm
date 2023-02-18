import { Button, Stack } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div>
      <Stack spacing={4} direction="row">
        <Button variant="contained" color="primary">
          Button
        </Button>
        <Button variant="contained" color="secondary">
          Button
        </Button>
      </Stack>
    </div>
  );
}

export default App;
