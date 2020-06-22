import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector'


const CollectionPage = ({collection}) => (
   <div className = 'collection-page'>
      <h2>Collection Page</h2>
   </div>
)

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);