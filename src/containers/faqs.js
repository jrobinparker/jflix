import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map(item => {
          return (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder='Email Address' />
        <OptForm.Button>Try it Now</OptForm.Button>
        <OptForm.Text>Ready to watch? Enter your email address to create or restart your membership.</OptForm.Text>
      </OptForm>
    </Accordion>
  )
}
