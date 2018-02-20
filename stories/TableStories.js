import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean } from '@storybook/addon-knobs';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn,
  TableRowColumnActions,
  DropdownButton,
  MenuItem,
} from './../lib';
import { Icon } from '../lib/components/Icon/index';

const headerNames = 'Opportunity Name,Account Name,Close Date,Stage,Confidence,Amount,Contact'.split(
  ',',
);

const records = new Array(6)
  .join('_')
  .split('')
  .map((_, i) => [
    `Cloudhub ${i + 1}`,
    'Cloudhub',
    '4/14/2015',
    'Prospecting',
    '20%',
    '$25k',
    'jrogers@cloudhub.com',
  ]);

storiesOf('Table', module)
  .add(
    'Controlled with knobs',
    withInfo('Table controlled with knobs')(() => {
      const hasRowBorder = boolean('hasRowBorder');
      const isSortable = boolean('isSortable');
      const isStriped = boolean('isStriped');
      const hasRowHover = boolean('hasRowHover');
      const hasColumnBorder = boolean('hasColumnBorder');
      const hasFixedLayout = boolean('hasFixedLayout');
      const hasActions = boolean('hasActions', true);
      return (
        <Table
          hasRowBorder={hasRowBorder}
          isSortable={isSortable}
          isStriped={isStriped}
          hasRowHover={hasRowHover}
          hasColumnBorder={hasColumnBorder}
          hasFixedLayout={hasFixedLayout}
        >
          <TableHeader hasActions={hasActions}>
            <TableRow>
              {headerNames.map(name => (
                <TableHeaderColumn key={name}>{name}</TableHeaderColumn>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record, idx) => (
              <TableRow key={record[0]} selected={idx === 2}>
                {hasActions &&
                  <TableRowColumnActions>
                    <DropdownButton>
                      <Icon category="utility" icon="down" size="x-small" />
                      <MenuItem>Edit</MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </DropdownButton>
                  </TableRowColumnActions>
                }
                {headerNames.map((name, i) => (
                  <TableRowColumn key={name}>{record[i]}</TableRowColumn>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }),
  )
  .add(
    'Default',
    withInfo('Default Table component')(() => (
      <Table hasRowBorder>
        <TableHeader>
          <TableRow>
            {headerNames.map(name => (
              <TableHeaderColumn key={name}>{name}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(record => (
            <TableRow key={record[0]}>
              {headerNames.map((name, i) => (
                <TableRowColumn key={name} truncate={false}>{record[i]}</TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )),
  )
  .add(
    'AutoWidth',
    withInfo('Default Table component with autoWidth')(() => (
      <Table hasRowBorder hasAutoWidth>
        <TableHeader>
          <TableRow>
            {headerNames.map(name => (
              <TableHeaderColumn key={name}>{name}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(record => (
            <TableRow key={record[0]}>
              {headerNames.map((name, i) => (
                <TableRowColumn key={name}>{record[i]}</TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )),
  )
  .add(
    'With Striped Row',
    withInfo('Table component with striped row')(() => (
      <Table hasRowBorder isStriped>
        <TableHeader>
          <TableRow>
            {headerNames.map(name => (
              <TableHeaderColumn key={name}>{name}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(record => (
            <TableRow key={record[0]}>
              {headerNames.map((name, i) => (
                <TableRowColumn key={name}>{record[i]}</TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )),
  )
  .add(
    'With No Row Hover',
    withInfo('Table component with row hovering highlight is disabled')(() => (
      <Table hasRowBorder hasRowHover>
        <TableHeader>
          <TableRow>
            {headerNames.map(name => (
              <TableHeaderColumn key={name}>{name}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(record => (
            <TableRow key={record[0]}>
              {headerNames.map((name, i) => (
                <TableRowColumn key={name}>{record[i]}</TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )),
  )
  .add(
    'With Vertical Borders',
    withInfo('Table component with vertical borders enabled')(() => (
      <Table hasRowBorder hasColumnBorder>
        <TableHeader>
          <TableRow>
            {headerNames.map(name => (
              <TableHeaderColumn key={name}>{name}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(record => (
            <TableRow key={record[0]}>
              {headerNames.map((name, i) => (
                <TableRowColumn key={name}>{record[i]}</TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )),
  )
  .add(
    'With Fixed Layout',
    withInfo('Table component with fixed layout')(() => (
      <Table hasRowBorder hasFixedLayout>
        <TableHeader>
          <TableRow>
            {headerNames.map(name => (
              <TableHeaderColumn key={name}>{name}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(record => (
            <TableRow key={record[0]}>
              {headerNames.map((name, i) => (
                <TableRowColumn key={name}>{record[i]}</TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )),
  )
  .add(
    'With Sort Enabled',
    withInfo(
      'Table component with sort feature enabled ("Account Name" column is disabled)',
    )(() => (
      <Table hasRowBorder isSortable>
        <TableHeader>
          <TableRow>
            {headerNames.map((name, i) => (
              <TableHeaderColumn key={name} isSortable={i !== 1}>
                {name}
              </TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map(record => (
            <TableRow key={record[0]}>
              {headerNames.map((name, i) => (
                <TableRowColumn key={name}>{record[i]}</TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )),
  );
