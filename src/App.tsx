import React from 'react';
import './App.css';
import AddressList from './containers/AddressList';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Navbar from './components/Navbar';

function App() {
  const queryClient = new QueryClient()

 return ( <QueryClientProvider client={queryClient}>
  <Navbar />
  <AddressList />
  </QueryClientProvider>)
 }

export default App;
