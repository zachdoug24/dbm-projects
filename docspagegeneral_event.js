{
  "name": "[help]DocsPageGeneral",
  "temp": "",
  "event-type": "0",
  "_id": "help_doc_pg_general",
  "actions": [
    {
      "title": "Help Documents > General Module",
      "author": "",
      "color": "407CDD",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "helpdocs",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "helpdocs",
      "message": "The following is all information regarding the aforementioned module.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "helpdocs",
      "fieldName": "Command List",
      "message": "`commandname` - description",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "helpdocs",
      "message": "${tempVars(\"authorname\")} asked in #${tempVars(\"channel\")} on ${tempVars(\"server\")}",
      "footerIcon": "${tempVars(\"authoravatar\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "helpdocs",
      "channel": "5",
      "varName2": "author",
      "name": "Send Embed Message"
    }
  ]
}
