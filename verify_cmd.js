{
  "name": "verify",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "HviWF",
  "actions": [
    {
      "info": "1",
      "find": "Member",
      "storage": "1",
      "varName": "member",
      "name": "Find Role"
    },
    {
      "info": "1",
      "find": "verify",
      "storage": "1",
      "varName": "verifychannel",
      "name": "Find Channel"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "VERIFICATION_CODE",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "VERIFICATION_CODE",
      "name": "Store Member Data"
    },
    {
      "message": "0",
      "varName": "",
      "info": "4",
      "storage": "1",
      "varName2": "cmdchannel",
      "name": "Store Message Info"
    },
    {
      "storage": "1",
      "varName": "cmdchannel",
      "comparison": "1",
      "value": "tempVars(\"verifychannel\")",
      "iftrue": "3",
      "iftrueVal": "3",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "You have to use the command in the verify channel!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "codeparam",
      "name": "Store Command Params"
    },
    {
      "condition": "0",
      "comparison": "0",
      "value": "1",
      "iftrue": "2",
      "iftrueVal": "16",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "input": "A0",
      "wordLength": "10",
      "storage": "1",
      "varName": "code",
      "name": "Randomize Letters"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "Here is your code, `${tempVars(\"code\")}`.\n\nUse it in <#458799149136216075> by typing `s.verify ${tempVars(\"code\")}`.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "VERIFICATION_CODE",
      "changeType": "0",
      "value": "tempVars(\"code\")",
      "name": "Control Member Data"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "0",
      "varName": "codereply",
      "name": "Delete Message"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "VERIFICATION_CODE",
      "comparison": "1",
      "value": "tempVars(\"codeparam\")",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Member Data"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "That wasn't the right code.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName2": "",
      "role": "3",
      "varName": "member",
      "name": "Add Member Role"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "You are now a verified member of the server!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ]
}
