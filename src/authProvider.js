// import decodeJwt from 'jwt-decode';

const authPro= {
    // called when the user attempts to log in
    login: ({ username, password }) => {
      const request = new Request('https://iotlog.azurewebsites.net/api/log/authenticate', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: new Headers({'Content-Type': 'application/json'}),
    });
    return fetch(request)
      .then(response => {
         console.log(response.body) 
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({token}) => {
        //const decodedToken = decodeJwt(token);
        console.log(token);
        localStorage.setItem('token', token);
        // localStorage.setItem('permissions', decodedToken.permissions);
      });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

export default authPro;