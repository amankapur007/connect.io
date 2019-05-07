import { USER_LIST } from '../users/users';
import { Message } from '../../models/messages/messages.model'

const userList=USER_LIST;
const messageList:Message[]=[];

for(var i=0;i<userList.length;i++){
  messageList.push({user:userList[i],date:new Date(),lastMessage:"Hello "+userList[i].firstName});
}

export const MESSAGE_LIST=messageList;