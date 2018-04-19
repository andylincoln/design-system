import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import Drawer from '@pluralsight/ps-design-system-drawer/react'
import Link from '@pluralsight/ps-design-system-link/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Table from '../react'

const tableStory = storiesOf('table', module)
  .addDecorator(themeDecorator(addons))
  .add('empty', _ => <Table />)
  .add('custom className', _ => (
    <Table className="some-class">
      <Table.Row>
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('custom style', _ => (
    <Table style={{ outline: '1px solid red' }}>
      <Table.Row>
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))

const rowStory = storiesOf('row', module)
  .addDecorator(themeDecorator(addons))
  .add('one row, empty', _ => (
    <Table>
      <Table.Row />
    </Table>
  ))
  .add('custom className', _ => (
    <Table>
      <Table.Row className="some-class">
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('custom style', _ => (
    <Table>
      <Table.Row style={{ outline: '1px solid red' }}>
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))

const cellStory = storiesOf('cell', module)
  .addDecorator(themeDecorator(addons))
  .add('empty', _ => (
    <Table>
      <Table.Row>
        <Table.Cell />
      </Table.Row>
    </Table>
  ))
  .add('text', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>Cell text</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('multiple text', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>Cell 1 text</Table.Cell>
        <Table.Cell>Cell 2 text</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('inner padding', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>
          Cell 1 text Cell 1 text Cell 1 text Cell 1 text Cell 1 text Cell 1
          text Cell 1 text Cell 1 text Cell 1 text Cell 1 text Cell 1 text Cell
        </Table.Cell>
        <Table.Cell>
          Cell 2 text Cell 2 text Cell 2 text Cell 2 text Cell 2 text Cell 2
          text Cell 2 text Cell 2 text Cell 2 text Cell 2 text Cell 2 text Cell
        </Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('emphasis text', _ => (
    <Table>
      <Table.Row>
        <Table.Cell emphasis>em-PHA-sis</Table.Cell>
        <Table.Cell>Non emphasized</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('flex 1 | 4', _ => (
    <Table>
      <Table.Row>
        <Table.Cell flex="1">
          Flex 1 Flex 1 Flex 1 Flex 1 Flex 1 Flex 1 Flex 1 Flex 1
        </Table.Cell>
        <Table.Cell flex="4">
          Flex 4 Flex 4 Flex 4 Flex 4 Flex 4 Flex 4 Flex 4 Flex 4
        </Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('flex 2 | 1', _ => (
    <Table>
      <Table.Row>
        <Table.Cell flex="2">Flex 2</Table.Cell>
        <Table.Cell flex="1">Flex 1</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('flex, multiple cell, multiple row', _ => (
    <Table>
      <Table.Row>
        <Table.Cell flex="2">Flex 2</Table.Cell>
        <Table.Cell flex="1">Flex 1</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell flex="2">Flex 2</Table.Cell>
        <Table.Cell flex="1">Flex 1</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('auto style anchor tag', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>
          <a href="https://duckduckgo.com">Native anchor tag</a>
        </Table.Cell>
        <Table.Cell>Cell 2</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Link>
            <a href="https://duckduckgo.com">Link component with anchor tag</a>
          </Link>
        </Table.Cell>
        <Table.Cell>Cell 2</Table.Cell>
      </Table.Row>
    </Table>
  ))
Object.keys(Table.cellAligns).forEach(align => {
  cellStory.add(`align ${align}`, _ => (
    <Table>
      <Table.Row>
        <Table.Cell align={align}>Cell aligned {align}</Table.Cell>
      </Table.Row>
    </Table>
  ))
})
cellStory.add('custom className', _ => (
  <Table>
    <Table.Row>
      <Table.Cell className="some-classname">cell text</Table.Cell>
    </Table.Row>
  </Table>
))
cellStory.add('custom style', _ => (
  <Table>
    <Table.Row>
      <Table.Cell style={{ outline: '1px solid red' }}>cell text</Table.Cell>
    </Table.Row>
  </Table>
))

const columnHeaderStory = storiesOf('columnHeader', module)
  .addDecorator(themeDecorator(addons))
  .add('text', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader>header text</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
  .add('w/ rows', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort>header text</Table.ColumnHeader>
        <Table.ColumnHeader sort>header2 text</Table.ColumnHeader>
      </Table.Row>
      <Table.Row>
        <Table.Cell>cell text</Table.Cell>
        <Table.Cell>cell2 text</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('w/ drawers', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort>header text</Table.ColumnHeader>
        <Table.ColumnHeader sort>header2 text</Table.ColumnHeader>
      </Table.Row>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell>cell text</Table.Cell>
            <Table.Cell>cell2 text</Table.Cell>
          </Table.Row>
        }
      >
        Panel contnet
      </Drawer>
    </Table>
  ))
  .add('sort default', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort>header text</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
Object.keys(Table.columnHeaderSorts).forEach(sort =>
  columnHeaderStory.add(`sort ${sort}`, _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort={sort}>sorted header</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
)
columnHeaderStory.add('sort default w/ onClick', _ => (
  <Table>
    <Table.Row>
      <Table.ColumnHeader sort onClick={action('click columnHeader')}>
        header text
      </Table.ColumnHeader>
    </Table.Row>
  </Table>
))
Object.keys(Table.columnHeaderSorts).forEach(sort =>
  columnHeaderStory.add(`sort ${sort} w/ onClick`, _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort={sort} onClick={action('click columnHeader')}>
          sorted header
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
)
columnHeaderStory
  .add('custom className', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader className="some-classname">
          header text
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
  .add('custom style', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader style={{ outline: '1px solid red' }}>
          column header
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))

const drawerStory = storiesOf('drawer', module)
  .addDecorator(themeDecorator(addons))
  .add('single', _ => (
    <Table>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell>wow</Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
    </Table>
  ))
  .add('mulitple', _ => (
    <Table>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell>wow</Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell>wow</Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
    </Table>
  ))
  .add('w/ flex, some wrap, some not', _ => (
    <Table>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell flex="2">
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
            </Table.Cell>
            <Table.Cell flex="1">
              flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1
            </Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell flex="2">
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
            </Table.Cell>
            <Table.Cell flex="1">
              flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1
            </Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell flex="2">
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
            </Table.Cell>
            <Table.Cell flex="1">
              flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1
            </Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
    </Table>
  ))