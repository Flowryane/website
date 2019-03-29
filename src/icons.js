import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export const reseau = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Favorite reseau: 
    <FontAwesomeIcon icon="coffee" />
    <FontAwesomeIcon icon={['fab', 'linkedin']} />
  </div>
)