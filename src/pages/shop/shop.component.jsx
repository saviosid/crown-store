import React from 'react';
import {connect} from 'react-redux';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
//import CollectionPage from '../collection/collection.component.jsx';
import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) => (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component= {CollectionsOverview }/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
   );



export default (ShopPage);
