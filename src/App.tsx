import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Client from './pages/client/client';
import RegisterClient from './pages/client/registerClient';
import UpdateClient from './pages/client/updateClient';
import DeleteClient from './pages/client/deleteClient';
import PageNotFound from './pages/pageNotFound';
import Product from './pages/product/product';
import RegisterProduct from './pages/product/registerProduct';
import UpdateProduct from './pages/product/updateProduct';
import DeleteProduct from './pages/product/deleteProduct';
import Service from './pages/service/service';
import RegisterService from './pages/service/registerService';
import DeleteService from './pages/service/deleteService';
import UpdateService from './pages/service/updateService';
import Pet from './pages/pet/pet';
import RegisterPet from './pages/pet/registerPet';
import DeletePet from './pages/pet/deletePet';
import UpdatePet from './pages/pet/updatePet';
import Lists from './pages/lists/lists';
import TopFiveValue from './pages/lists/topFiveValue';
import TopTenQuantity from './pages/lists/topTenQuantity';
import ProdMostCons from './pages/lists/prodMostConsumed';
import ServMostCons from './pages/lists/servMostConsumed';
import ServProdMostCons from './pages/lists/servProdMostConsumed';
import ProdMostConsSpecies from './pages/lists/prodMostConsSpecies';
import ProdMostConsBreed from './pages/lists/prodMostConsBreed';
import ServMostConsSpecies from './pages/lists/servMostConsSpecies';
import ServMostConsBreed from './pages/lists/servMostConsBreed';
import Consumption from './pages/consumptions/consumption';
import ConsProd from './pages/consumptions/consumeProd';
import ConsServ from './pages/consumptions/consumeServ';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/*' element = {<PageNotFound />} />
      <Route path = '/' element = {<Home />} />

      <Route path = '/lists' element = {<Lists />}>
        <Route path = '/lists/top-ten-quantity' element = {<TopTenQuantity />}/>
        <Route path = '/lists/top-five-value' element = {<TopFiveValue />}/>
        <Route path = '/lists/products-most-consumed' element = {<ProdMostCons />}/>
        <Route path = '/lists/services-most-consumed' element = {<ServMostCons />}/>
        <Route path = '/lists/serv-and-prod-most-consumed' element = {<ServProdMostCons />}/>
        <Route path = '/lists/prod-most-consumed-per-species' element = {<ProdMostConsSpecies />}/>
        <Route path = '/lists/prod-most-consumed-per-breed' element = {<ProdMostConsBreed />}/>
        <Route path = '/lists/serv-most-consumed-per-species' element = {<ServMostConsSpecies />}/>
        <Route path = '/lists/serv-most-consumed-per-breed' element = {<ServMostConsBreed />}/>
      </Route>

      <Route path = '/consumption' element = {<Consumption />}>
        <Route path = '/consumption/product' element = {<ConsProd />}/>
        <Route path  = '/consumption/service' element = {<ConsServ />}/>
      </Route>

      <Route path = '/client' element = {<Client />}/>
      <Route path = '/client/register' element = {<RegisterClient />}/>
      {/* <Route path = '/client/update' element = {<UpdateClient />}/>
      <Route path = '/client/delete' element = {<DeleteClient />}/> */}

      <Route path = '/product' element = {<Product />}/>
      <Route path = '/product/register' element = {<RegisterProduct />}/>
      {/* <Route path = '/product/update' element = {<UpdateProduct />}/>
      <Route path = '/product/delete' element = {<DeleteProduct />}/> */}

      <Route path = '/service' element = {<Service />}/>
      <Route path = '/service/register' element = {<RegisterService />}/>
      {/* <Route path = '/service/update' element = {<UpdateService />}/>
      <Route path = '/service/delete' element = {<DeleteService />}/> */}

      <Route path = '/pet' element = {<Pet />}/>
      <Route path = '/pet/register' element = {<RegisterPet />}/>
      {/* <Route path = '/pet/update' element = {<UpdatePet />}/>
      <Route path = '/pet/delete' element = {<DeletePet />}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
