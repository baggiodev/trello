import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./containers/App";
import store from "./store";
// components

// apollo client setup
const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});


render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<App />
		</Provider>
	</ApolloProvider>,
    window.document.getElementById("root"));