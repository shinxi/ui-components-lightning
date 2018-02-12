import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, select, boolean } from '@storybook/addon-knobs';
import { Modal, Button, Form, FieldSet, Input } from './../lib';

const { Header, Content, Footer } = Modal;
const { Row } = FieldSet;

storiesOf('Modal', module)
  .add(
    'Controlled with knobs',
    withInfo({
      inline: false,
      text: 'Modal controlled with knobs',
    })(() => (
      <Modal
        isOpened={boolean('isOpened', true)}
        size={select('size', { '': '(none)', large: 'large' })}
        onHide={action('hide')}
      >
        {boolean('header', true) ? (
          <Header title={text('header title')} closeButton={boolean('header closeButton')} />
        ) : (
          []
        )}
        <Content>
          <div className="slds-p-around--small">
            <p>
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
              consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem
              ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis aute
              consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat
              elit dolor adipisicing.
            </p>
            <p>
              Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem
              aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse
              laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud ad
              veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim
              ullamco mollit enim excepteur ea.
            </p>
          </div>
        </Content>
        {boolean('footer', true) ? (
          <Footer directional={boolean('footer directional')}>
            <Button type="neutral" label="Cancel" />
            <Button type="brand" label="Done" />
          </Footer>
        ) : (
          []
        )}
      </Modal>
    )),
  )
  .add(
    'Default',
    withInfo({
      inline: false,
      text: 'Default size modal dialog',
    })(() => (
      <Modal isOpened onHide={action('hide')}>
        <Header title="Default Modal" closeButton />
        <Content className="slds-p-around--small">
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
            consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco
            minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis aute consequat
            ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor
            adipisicing.
          </p>
          <p>
            Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem
            aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud ad
            veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim
            ullamco mollit enim excepteur ea.
          </p>
        </Content>
        <Footer>
          <Button type="neutral" label="Cancel" />
          <Button type="brand" label="Done" />
        </Footer>
      </Modal>
    )),
  )
  .add(
    'Large',
    withInfo({
      inline: false,
      text: 'Large size modal dialog',
    })(() => (
      <Modal isOpened size="large" onHide={action('hide')}>
        <Header title="Large Size Modal" closeButton />
        <Content className="slds-p-around--small">
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
            consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco
            minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis aute consequat
            ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor
            adipisicing.
          </p>
          <p>
            Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem
            aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud ad
            veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim
            ullamco mollit enim excepteur ea.
          </p>
        </Content>
        <Footer>
          <Button type="neutral" label="Cancel" />
          <Button type="brand" label="Done" />
        </Footer>
      </Modal>
    )),
  )
  .add(
    'Form elements',
    withInfo({
      inline: false,
      text: 'Modal with form elements in the content',
    })(() => (
      <Modal isOpened onHide={action('hide')}>
        <Header title="Modal Form" closeButton />
        <Content className="slds-p-around--small">
          <Form type="compound">
            <FieldSet label="Name">
              <Row>
                <Input label="First Name" placeholder="First Name" />
                <Input label="Last Name" placeholder="Last Name" />
              </Row>
            </FieldSet>
          </Form>
        </Content>
        <Footer>
          <Button type="neutral" label="Cancel" />
          <Button type="brand" label="Done" />
        </Footer>
      </Modal>
    )),
  );
