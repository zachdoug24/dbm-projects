{
  "name": "[Check]VerifyChannelContent",
  "temp": "message",
  "event-type": "2",
  "_id": "QLAIx",
  "actions": [
    {
      "message": "1",
      "varName": "message",
      "info": "4",
      "storage": "1",
      "varName2": "messagechannel",
      "name": "Store Message Info"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "3",
      "storage": "1",
      "varName2": "messageauthor",
      "name": "Store Message Info"
    },
    {
      "member": "2",
      "varName": "messageauthor",
      "info": "1",
      "storage": "1",
      "varName2": "messageauthorid",
      "name": "Store Member Info"
    },
    {
      "channel": "3",
      "varName": "messagechannel",
      "info": "1",
      "storage": "1",
      "varName2": "messagechannelid",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "messageauthorid",
      "comparison": "1",
      "value": "'BOT_ID'",
      "iftrue": "1",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "messagechannelid",
      "comparison": "1",
      "value": "'VERIFY_CHANNEL_ID'",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "2",
      "storage": "1",
      "varName2": "messagetext",
      "name": "Store Message Info"
    },
    {
      "storage": "1",
      "varName": "messagetext",
      "comparison": "1",
      "value": "'verify'",
      "iftrue": "1",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "message",
      "name": "Delete Message"
    }
  ]
}
