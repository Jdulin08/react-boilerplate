import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});





// const db = {
//   users: {
//     uidsad: {
//       expenses: {
//         asdasf: {
//
//         }
//       }
//     }
//   }
// };

// Practice methods
// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//   );
// };
//
// ReactDOM.render((
//   <Layout>
//     <div>
//       <h1>Page title</h1>
//       <p>This is my page</p>
//     </div>
//   </Layout>
// ), document.getElementById('app'));




// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi my name is ${this.name}.`;
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());
//
// //
//
// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return `Hi my name is ${this.name}.`;
//   }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
