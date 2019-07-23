import * as React from 'react';

export interface Props {
    title: string;
}

export default class Card extends React.PureComponent<Props> {
  render(): React.ReactNode {
    return <p>{this.props.title}</p>;
  }
}
