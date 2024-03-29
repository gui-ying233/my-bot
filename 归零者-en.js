"use strict";

const { MediaWikiJS } = require("@lavgup/mediawiki.js");
const bot = new MediaWikiJS(require("./config.json").en);
const pageList = ["Help:Sandbox", "Template:Sandbox"];
bot.login().then(async () => {
	for (const title of pageList) {
		try {
			const result0 = await bot.doEdit({
				title,
				text: "<noinclude>{{Sandbox heading}}</noinclude>\n== Please test below ==<!--DO NOT DELETE NOR CHANGE ANYTHING ABOVE THIS LINE, INCLUDING THIS LINE!-->",
				summary: "Clearing the sandbox",
				tags: "Bot",
				Bot: true,
			});
			console.log(
				result0.edit.result,
				result0.edit.nochange ? "无更改" : "有更改"
			);
		} catch (e0) {
			console.error(e0);
		}
	}
});
