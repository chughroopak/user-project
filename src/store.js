import firebase from 'firebase/app';
import 'firebase/firestore';
import { createStore, combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'; // <- needed if using firestore

const firebaseConfig = {
	apiKey: 'AIzaSyB-y_LqauC0uAPZqiya8vyb38GHjOJ9u5w',
	authDomain: 'user-project-df69b.firebaseapp.com',
	databaseURL: 'https://user-project-df69b.firebaseio.com',
	projectId: 'user-project-df69b',
	storageBucket: 'user-project-df69b.appspot.com',
	messagingSenderId: '369842731111',
	appId: '1:369842731111:web:d71e007bb4e8cbb7c07cc2'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer // <- needed if using firestore
});

const initialState = {};
export const store = createStore(
	rootReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const rrfProps = {
	firebase,
	config: {},
	dispatch: store.dispatch,
	createFirestoreInstance // <- needed if using firestore
};
