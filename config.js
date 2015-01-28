var IRCConnector = require("./classes/IRCConnector.class");
var SlackConnector = require("./classes/SlackConnector.class");
var JSONConnector = require("./classes/persistence/JSONConnector.class");
var MongoConnector = require("./classes/persistence/MongoConnector.class");

// Sample Slack-thru-IRC config
module.exports = {
	environment: "zurdusDomain",
	channel: "foundrystories",
	server: "ffoundry.irc.slack.com",
	botName: "zurdbot",
	password: "ffoundry.MUr0IDVbPois5VgPtbYY",
	connector: SlackConnector,
	token: 'xoxb-3534963199-Lij8gBncUIfUBPDHnxIrduDg',
	autoReconnect: true,
	autoMark: true,
	persistence: JSONConnector
};

// Sample plain IRC config

// module.exports = {
// 	environment: "slashieMachine",
// 	channel: "#slashbot",
// 	server: "verne.freenode.net",
// 	botName: "obibot",
// 	connector: IRCConnector,
// 	persistence: MongoConnector,
// 	dbURL: 'mongodb://localhost:27017/slashbot'
// };
