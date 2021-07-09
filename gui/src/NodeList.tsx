import { gql, useQuery } from '@apollo/client'
import React, { FC } from 'react'
import { List } from 'semantic-ui-react'
import { DataNodeType, FindUserDocument } from './generated'

type Props = {}

const nodesQuery = gql`
  query {
    dataNodes{
      id
      __typename
    }
  }
`;

const NodeList: FC<Props> = (props) => {
  const user = useQuery(nodesQuery)

  return (
    <List>
      <List.Item>
        <List.Icon name="users"></List.Icon>
        <List.Content>TEST</List.Content>
      </List.Item>
    </List>
  )
}

export default NodeList
