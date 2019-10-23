/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onNewMessage = `subscription OnNewMessage($groupId: ID!) {
  onNewMessage(groupId: $groupId) {
    id
    message
    group {
      id
      members
    }
  }
}
`;
