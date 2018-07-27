{
  "name": "help",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "help_module",
  "actions": [
    {
      "comment": "Storing Information (Don't touch)",
      "color": "#ffff00",
      "name": "Comment"
    },
    {
      "member": "1",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "author",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "authorname",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "authoravatar",
      "name": "Store Member Info"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "channel",
      "name": "Store Channel Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "server",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "serverid",
      "name": "Store Server Info"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "page",
      "name": "Store Command Params"
    },
    {
      "comment": "Help Module > Overview",
      "color": "#ffff00",
      "name": "Comment"
    },
    {
      "storage": "1",
      "varName": "page",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "4",
      "iffalse": "0",
      "iffalseVal": "4",
      "name": "Check Variable"
    },
    {
      "source": "help_doc_overview",
      "type": "true",
      "name": "Call Command/Event"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${member}, The help documents overview has been sent to you via DM.\nIf you did not receive them, please check to make sure you have DMs enabled.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "comment": "Module Page > General",
      "color": "#ffff00",
      "name": "Comment"
    },
    {
      "storage": "1",
      "varName": "page",
      "comparison": "2",
      "value": "'general'",
      "iftrue": "0",
      "iftrueVal": "4",
      "iffalse": "3",
      "iffalseVal": "4",
      "name": "Check Variable"
    },
    {
      "source": "help_doc_pg_general",
      "type": "true",
      "name": "Call Command/Event"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${member}, The help documents for the specified module has been sent to you via DM.\nIf you did not receive them, please check to make sure you have DMs enabled.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    }
  ]
}
