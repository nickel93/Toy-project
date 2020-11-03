import Kanbancontainer from './container/Kanbancontainer'
import { BrowserRouter, Route } from 'react-router-dom';
const app = () => {
  return (
    <BrowserRouter>
      <Kanbancontainer />
    </BrowserRouter>
  );
}

export default app;
