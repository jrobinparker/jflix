import React from 'react';
import { FeatureContainer } from '../components';

export default function FeatureContainer({ children, ...restProps }) {
  return (
    <FeatureContainer>
      <FeatureContainer.Title>Feature Title</FeatureContainer.Title>
      <FeatureContainer.Subtitle>Feature Subtitle</FeatureContainer.Subtitle>
    </FeatureContainer>
  )
}
