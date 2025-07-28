import { RouterProvider } from "react-router"
import { routes } from "./router/Router"

function App() {

  return (
    <>
        <RouterProvider
          router={routes}
        />
    </>
  )
}

export default App
