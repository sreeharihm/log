import * as React from "react";
import { Admin, Resource  } from 'react-admin';
import authProvider from './authProvider';
import myDataProvider from './dataProvider';
import Dashboard from './Dashboard';
import { UserList } from './users';

const dataProvider = myDataProvider('https://iotlog.azurewebsites.net/api');
const App = () => (
      <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="log" list={UserList} />
      </Admin>
  );
export default App;
