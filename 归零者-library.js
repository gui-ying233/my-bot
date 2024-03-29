"use strict";

const { MediaWikiJS } = require("@lavgup/mediawiki.js");
const bot = new MediaWikiJS(require("./config.json").library);
const pageList = ["模板:沙盒", "帮助:沙盒"];
bot.login().then(async () => {
	for (const title of pageList) {
		try {
			const result0 = await bot.doEdit({
				title,
				text: "",
				summary:
					"沙盒清理作业，若想保留较长时间，可以在[[特殊:我的用户页/Sandbox|个人测试区]]作测试，或者翻阅历史记录。",
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
	try {
		const result1 = await bot.doEdit({
			title: "模块:沙盒",
			text: "",
			summary:
				"沙盒清理作业，若想保留较长时间，可以在个人测试区作测试，或者翻阅历史记录。",
			tags: "Bot",
			Bot: true,
		});
		console.log(
			result1.edit.result,
			result1.edit.nochange ? "无更改" : "有更改"
		);
	} catch (e1) {
		console.error(e1);
	}
});
