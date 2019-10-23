/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onNewMessage = `subscription OnNewMessage($messageGroupId: ID!) {
  onNewMessage(messageGroupId: $messageGroupId) {
    id
    message
    group {
      id
      members
    }
  }
}
`;
