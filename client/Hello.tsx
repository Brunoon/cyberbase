import * as React from "react";
import {Menu} from 'semantic-ui-react';

export interface HelloProps { compiler?: string; framework?: string; }

export const Hello = (props: HelloProps) => {
  <div>
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
  </div>
};