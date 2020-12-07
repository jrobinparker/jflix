import React from 'react';
import { Container, Title, Subtitle } from './styles/feature';

export default function FeatureContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

FeatureContainer.Title = function FeatureContainerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

FeatureContainer.Subtitle = function FeatureContainerSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}
