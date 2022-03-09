import React from 'react';
import {DocumentNode, gql, useQuery} from "@apollo/client";

const EXCHANGE_RATES: DocumentNode = gql`
    query{
        characters{
            info{
                count,
                pages,
                next,
                prev
            }
            results{
                id,
                name,
                status,
                species,
                type,
                gender,
                image,
                created
            }
        }
    }
`;

function App() {
  const exchange_rates_query = useQuery(EXCHANGE_RATES);
  console.log('exchange_rates_query => ', exchange_rates_query);
  return (
    <div className="App">
      React-ApolloClient
    </div>
  );
}

export default App;
