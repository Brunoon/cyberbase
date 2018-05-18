import * as React from "react";
import {Menu} from "semantic-ui-react";

/*
export class Header extends React.Component<{}, {}> {
    render() {
        return <Menu>
        <Menu.Item
          name='1'
        >
          1
        </Menu.Item>
        <Menu.Item
          name='2'
        >
          2
        </Menu.Item>
        <Menu.Item
          name='3'
        >
          3
        </Menu.Item>
      </Menu>;
    }
}*/

const items = [
    { key: '1', name: '1' },
    { key: '2', name: '2' },
    { key: '3', name: '3' },
]
  
export const Header = () => (
    <Menu items={items} />
)