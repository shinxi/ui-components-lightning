import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  FieldSet,
  Form,
  FormElement,
  Input,
  Label,
  Option,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  Toggle,
} from './../lib';

const { Row } = FieldSet;

storiesOf('Form', module)
  .add(
    'Horizontal Form',
    withInfo('Horizontal Form')(() => (
      <Form type="horizontal" onSubmit={action('submit')}>
        <FormElement>
          <Label>Text Input Label</Label>
          <Input />
        </FormElement>
        <FormElement>
          <Label>Text Area Label</Label>
          <Textarea rows="3" />
        </FormElement>
        <FormElement>
          <Label>Toggle Label</Label>
          <Toggle />
        </FormElement>
        <FormElement>
          <Label>Checkbox Group Label</Label>
          <CheckboxGroup>
            <Checkbox label="All opportunities owned by you" />
            <Checkbox label="All contacts in the account owned by you" />
          </CheckboxGroup>
        </FormElement>
        <FormElement>
          <Label>Radio Group Label</Label>
          <RadioGroup name="radiogroup1">
            <Radio label="Lead Generation" />
            <Radio label="Education Leads" />
          </RadioGroup>
        </FormElement>
        <FormElement>
          <Label>Select Label</Label>
          <Select>
            <Option value="1">Option One</Option>
            <Option value="2">Option Two</Option>
          </Select>
        </FormElement>
      </Form>
    )),
  )
  .add(
    'Stacked Form',
    withInfo('Stacked Form')(() => (
      <Form type="stacked" onSubmit={action('submit')}>
        <FormElement>
          <Label>Text Input Label</Label>
          <Input />
        </FormElement>
        <FormElement>
          <Label>Text Area Label</Label>
          <Textarea />
        </FormElement>
        <FormElement>
          <Label>Checkbox Group Label</Label>
          <CheckboxGroup>
            <Checkbox label="All opportunities owned by you" />
            <Checkbox label="All contacts in the account owned by you" />
          </CheckboxGroup>
        </FormElement>
        <FormElement>
          <Label>Radio Group Label</Label>
          <RadioGroup name="radiogroup1">
            <Radio label="Lead Generation" />
            <Radio label="Education Leads" />
          </RadioGroup>
        </FormElement>
        <FormElement>
          <Label>Select Label</Label>
          <Select>
            <Option value="1">Option One</Option>
            <Option value="2">Option Two</Option>
          </Select>
        </FormElement>
      </Form>
    )),
  )
  .add(
    'Inline Form',
    withInfo('Inline Form')(() => (
      <Form type="inline" onSubmit={action('submit')}>
        <FormElement>
          <Label>Username</Label>
          <Input />
        </FormElement>
        <FormElement>
          <Label>Password</Label>
          <Input type="password" />
        </FormElement>
        <Button type="brand">Submit</Button>
      </Form>
    )),
  )
  .add(
    'Compound Form',
    withInfo('Compound Form')(() => (
      <Form type="compound" onSubmit={action('submit')}>
        <FieldSet label="Name">
          <Row cols={8}>
            <FormElement cols={2}>
              <Label>First Name</Label>
              <Input type="text" placeholder="Input first name here" />
            </FormElement>
            <FormElement cols={2}>
              <Label>Last Name</Label>
              <Input type="text" placeholder="Input last name here" />
            </FormElement>
          </Row>
        </FieldSet>
        <FieldSet label="Address">
          <Row>
            <FormElement>
              <Label>Street</Label>
              <Textarea rows="2" placeholder="Input street here" />
            </FormElement>
          </Row>
          <Row cols={6}>
            <FormElement cols={1}>
              <Label>City</Label>
              <Input placeholder="Input city here" />
            </FormElement>
          </Row>
          <Row>
            <FormElement>
              <Label>State</Label>
              <Select defaultValue={1}>
                <Option value="CA">California</Option>
                <Option value="OR">Oregon</Option>
                <Option value="WA">Washington</Option>
              </Select>
            </FormElement>
            <FormElement>
              <Label>Zip Code</Label>
              <Input type="number" placeholder="00000" />
            </FormElement>
            <FormElement>
              <Label>Country</Label>
              <Select defaultValue={1}>
                <Option value="us">United States</Option>
                <Option value="ca">Canada</Option>
                <Option value="other" disabled>
                  Others
                </Option>
              </Select>
            </FormElement>
          </Row>
        </FieldSet>
        <FieldSet label="Other">
          <Row>
            <FormElement>
              <Label>Gender</Label>
              <RadioGroup name="gender">
                <Radio label="Male" value={1} />
                <Radio label="Female" value={2} />
                <Radio label="Other" value={3} />
              </RadioGroup>
            </FormElement>
            <FormElement>
              <Label>Lead Source</Label>
              <CheckboxGroup name="leadSource">
                <Checkbox label="Web" value="1" />
                <Checkbox label="Email" value="2" />
                <Checkbox label="Phone" value="3" />
              </CheckboxGroup>
            </FormElement>
          </Row>
        </FieldSet>
      </Form>
    )),
  );
