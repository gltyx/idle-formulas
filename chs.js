/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "X Values": "X 值",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "UNLOCK": "解锁",
    "Unlock": "解锁",
    "Shop": "商店",
    "to enable Basic Resets": "去启用基础重置",
    "Options": "选项",
    "My Formulas": "我的公式",
    "Formulas": "公式",
    "more formula": "更多公式",
    "First formula is free!!!": "第一个公式是免费的！！！",
    "Basic Formula": "基础公式",
    "EQUIPPED": "已装备",
    "GET": "获得",
    "Unequip": "卸下",
    "First Steps": "第一步",
    "Hint: Apply formulas repeatedly by holding the button or using the 1/2/3-Keys.": "提示：通过按住按钮或使用 1/2/3 键重复应用公式。",
    "New Milestone": "新里程碑",
    "[FULL INVENTORY]": "[插槽已满]",
    "-Reset": "-重置",
    "← Reset the shop for a new differential": "← 重置商店以获得新的微分",
    "A new differential of x and its formulas become available, but the shop is reset and the unlock cost for all non-basic formulas is 4 times as high.": "新的 x 微分及其公式可用，但商店已重置，所有非基本公式的解锁成本高出 4 倍。",
    "Accelerated": "加速",
    "Back To Zero": "归零",
    "Fill the Green Progress Bar": "填充绿色进度条",
    "Getting Jerky": "变得生涩",
    "Making Progress": "取得进展",
    "NO": "否",
    "Perform a Basic Reset": "执行基本重置",
    "Perform an x'-Reset": "执行 x'-重置",
    "Perform an x''-Reset": "执行 x''-重置",
    "Perform an x'''-Reset": "执行 x'''-重置",
    "Speedy": "快速",
    "YES": "是",
    "Basic Reset Pop-Up": "基础重置弹窗",
    "Decreasing Formula Pop-Up": "减少公式弹窗",
    "SCIENTIFIC": "科学",
    "This game is created by Zilvarro.": "游戏作者是：Zilvarro。",
    "Shop Scrollbar": "商店滚动条",
    "Shop Price Labels": "商店价格标签",
    "Offline Progress Pop-Up": "离线进度弹窗",
    "Number Format": "数字格式",
    "Pop-Up-Settings": "弹窗设置",
    "Manual Save": "手动保存",
    "Hard Reset": "硬重置",
    "Hotkey-Settings": "快捷键设置",
    "Must have 3 Milestones to join the Discord ☹": "必须有 3 个里程碑才能加入 Discord ☹",
    "Basic Reset": "基础重置",
    "← Reset x, but you can adapt your equipped formulas.": "← 重置 x，但你可以调整你装备的公式。",
    "Your X values are reset, but you can change your equipped formulas.": "您的 X 值已重置，但您可以更改装备的公式。",
    "for the next x-Reset": "以进行 下一个 x-重置",
    "Next Formula at x=": "下一个公式在 x=",
    "New Formula available": "新公式可用",
    "Game Saved": "游戏已保存",
    "Join the Discord Community": "加入 Discord 社区",
    "This resets everything and you do not get anything in return. Are you really sure?": "这会重置所有内容，您不会得到任何回报。 你真的确定吗？",
    "Are you really really sure?": "你真的确定吗？",
    "Are you totally absolutely enthusiastically sure?": "你完全绝对肯定吗？",
    "Game Reset": "游戏已重置",
    "increased by": "增加了 ",
    "Your": "你的",
    "You were away for": "你离开了",
    "CLOSE": "关闭",
    "Abort Alpha Pop-Up": "中止 阿尔法 弹出窗口",
    "Abort Hotkey [C]": "中止热键 [C]",
    "Advanced Display Modes": "高级显示模式",
    "Alpha": "阿尔法",
    "ALPHA": "阿尔法",
    "Alpha Upgrade Pop-Up": "阿尔法 升级弹出窗口",
    "Alpha-Reset Hotkey [A]": "阿尔法 重置热键 [A]",
    "Alpha-Reset Pop-Up": "阿尔法 重置弹出窗口",
    "Challenge Tab Switch": "挑战标签切换",
    "Exit Challenge Pop-Up": "退出挑战弹出窗口",
    "Header Display": "标题显示",
    "HORIZONTAL": "水平",
    "increased by a factor of": "增加了一个因素",
    "Mails": "邮件",
    "Memorize Pop-Up": "记住弹出窗口",
    "Save Imported": "保存导入",
    "Toggle Auto Hotkey [T]": "切换自动热键 [T]",
    "VERTICAL": "垂直",
    "x-Reset Pop-Up": "x-重置弹出窗口",
    "As a part of our Academy, you may now use our institutions for Research. You find Research on the Alpha tab. For Research it is important to not do your x-Resets immediately, but instead aim for a better highscore. The speed of your research is directly proportional to your highscores. If a highscore gets very much ahead of a Research level, you can even claim multiple levels at once! Research may not seem to help much when you first start, but its benefits grow exponentially, and they will soon speed up your daily work greatly.": "作为我们学院的一部分，您现在可以使用我们的机构进行研究。 您可以在 阿尔法 选项卡上找到 研究。 对于研究，重要的是不要立即进行 x 重置，而是要争取更高的高分。 您的研究速度与您的高分成正比。 如果高分远远超过研究级别，您甚至可以同时申请多个级别！ 刚开始的时候，研究似乎没什么帮助，但它的好处呈指数增长，很快就会大大加快你的日常工作。",
    "Due to your outstanding research in the field of x differentials and formulas, the Academy decided to support you on your journey as one of our members. You should already have received your very first Alpha Token. Your Alpha Tokens can be traded with us for various upgrades. You can obtain additional Alpha Tokens by getting the three differentials and then performing an Alpha Reset. If you manage to Alpha Reset with a very high x, we will award you with multiple Alpha Tokens at once!": "由于您在 x 微分和公式领域的杰出研究，学院决定支持您成为我们的成员之一。 您应该已经收到了您的第一个 阿尔法 代币。 您的 Alpha 代币可以与我们交易以进行各种升级。 您可以通过获取三个差异然后执行 阿尔法 重置来获得额外的 阿尔法 代币。 如果您以非常高的 x 成功重置 阿尔法，我们将立即奖励您多个 阿尔法 代币！",
    "Hello again! x-Mail Prime includes unlimited access to: x-Books, our extensive e-Book library; x-Music, the only place where you can find the Idle Formulas Official Soundtrack; x-Games, our quadruple A gaming portal and x-Videos, our streaming service with only the best movies.": "再一次问好！ x-Mail Prime 包括无限制访问：x-Books，我们内容丰富的电子书库； x-Music，唯一可以找到 公式放置 官方配乐的地方； x-Games，我们的四重 A 游戏门户和 x-Videos，我们的流媒体服务，只提供最好的电影。",
    "Hi this is Henry again, thanks to you I learned that squaring a number is very powerful, the square increases really fast when the number increases. And it can even make negative numbers positive, how crazy is that? From now on I will use the square whenever I want to make big numbers!!!": "嗨，我还是 Henry，多亏了你，我才知道平方是非常强大的，当数字增加时，平方会增加得非常快。 而且它甚至可以让负数变成正数，这有多疯狂？ 从现在开始，每当我想做大数字时，我都会使用正方形！！！",
    "It is said there is a formula so powerful, that it can be used to alter the laws of reality. Some have dubbed it the \"Origin Formula\", others call it the \"God Formula\" but the name that resonates most with me is \"World Formula\". It seems that the World Formula is not something tangible: It's neither an object you can find, nor a formula you can just write down. Much rather, it appears to be a state of mind, some kind of enlightenment. A stream of conciousness that lets you unleash your full potential and ultimately allows you to go way beyond!": "据说有一个公式非常强大，可以用来改变现实的法则。 有人称它为“源方”，也有人称它为“神方”，但最让我产生共鸣的名字是“世界方”。 世界公式似乎不是有形的东西：它既不是你能找到的物体，也不是你可以写下来的公式。 更确切地说，它似乎是一种心态，某种启蒙。 一种意识流，让你释放你的全部潜能，并最终让你超越！",
    "I noticed how obsessed you were lately with researching formulas and large numbers, so I was sure you must have heard about it. About the mythical formula that is said to transcend maths itself. I've spent years following traces, not even sure why it is important or what my ultimate goal is. My curiousity led me deeper and deeper into the rabbit hole, but it was all in vain. Save yourself the trouble and stop digging deeper.": "我注意到你最近对研究公式和大数非常着迷，所以我相信你一定听说过。 关于据说超越数学本身的神话公式。 我花了数年时间追踪痕迹，甚至不确定它为什么重要或我的最终目标是什么。 好奇心让我越陷越深，但一切都是徒劳。 为自己省去麻烦，不要再深入挖掘了。",
    "So you've joined the Academy to aid your goals? They can be very helpful and you will need all help you can get. But be careful, you must not let them know you are looking for the world formula. We don't want the Academy to steal the fruits of our endeavors.": "所以你加入学院是为了帮助你实现目标？ 他们可能会非常有帮助，您将需要您所能获得的一切帮助。 但是要小心，千万不要让他们知道你在找世界公式。 我们不希望学院窃取我们努力的成果。",
    "Thank you for attempting the Formula God Challenge. That one is truly giving us nightmares. However, we are able to support you by multiplying your research speeds by your respective best scores in the Formula God Challenge. You can check this special boost on the Research tab. Keep trying and improving those highscores!": "感谢您尝试 公式上帝挑战。 那个真的让我们做噩梦。 但是，我们能够通过将您的研究速度乘以您在 公式上帝挑战 中各自的最佳成绩来为您提供支持。 您可以在“研究”选项卡上查看此特殊提升。 继续尝试并提高那些高分！",
    "We are very happy with the results of your Research so far. As such we would like to invite you to participate in more complex projects. Sometimes true wisdom can only be achieved by restricting ones options, forcing one to assume new perspectives. On the Alpha tab you can find our projects under Challenges. Every Challenge and Challenge segment you clear will allow us to make your formulas more efficient. And once you have proven yourself, there will be special rewards if you can help with the toughest Challenges our Academy faces right now.": "到目前为止，我们对您的研究结果感到非常满意。 因此，我们想邀请您参与更复杂的项目。 有时，真正的智慧只能通过限制一个人的选择，迫使一个人采取新的观点来实现。 在 阿尔法 选项卡上，您可以在挑战下找到我们的项目。 您清除的每个挑战和挑战部分都将使我们能够使您的公式更有效。 一旦你证明了自己，如果你能帮助我们学院目前面临的最严峻挑战，你将获得特别奖励。",
    "You are searching for it as well, aren't you? Please, stop before it is too late! The pursuit will rob you off your sleep, even once you know it is futile. For me it is too late to turn back, to give up. But I believe you can still be saved.": "你也在寻找它，是吗？ 请在为时已晚之前停下来！ 追求会夺走你的睡眠，即使你知道它是徒劳的。 对我来说，回头、放弃都为时已晚。 但我相信你还是可以得救的。",
    "Hi again, I hope you are doing well! Here's a small hint for you, since I have no idea where else to put it in the game: the result from applying a formula is generally rounded down (except for formulas that just add something to the current value). Maybe this will be helpful, or not, I don't know.": "再次问候，我希望你一切顺利！ 这是给你的一个小提示，因为我不知道在游戏中还能把它放在哪里：应用公式的结果通常会向下舍入（除了只是在当前值上加一些东西的公式）。 也许这会有所帮助，或者没有，我不知道。",
    "Hey, there are a lot of formulas in the shop now, and it's getting even more messy with each x-Reset. And many of the lower differential formulas seem pretty useless by now. But no worries, I have a solution: You can now highlight and filter your favorite formulas. Go, try it out!": "嘿，现在商店里有很多公式，而且每一次 x-重置 都变得更加混乱。 许多低微分公式现在看起来毫无用处。 但不用担心，我有一个解决方案：您现在可以突出显示和过滤您最喜欢的公式。 去，试试看！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "s": "",
    "for": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Need: ": "需要：",
    "Reach ": "达到 ",
    "Apply Formula Hotkeys ": "应用公式热键 ",
    "Basic Reset Hotkey ": "基础重置快捷键 ",
    "Version:": "版本：",
    "Playtime:": "游戏时长：",
    "x-Reset Hotkey ": "x-重置快捷键",
    "Cost:": "成本：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Click to apply!": "点击以允许！",
    "Need: x=": "需要: x=",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)m([\d\.]+)s$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^ ([\d\.,]+)$/,
    /^  ([\d\.,]+)$/,
    /^   ([\d\.,]+)$/,
    /^    ([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^x\=([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d([\d\.]+)h([\d\.]+)m([\d\.]+)s$/, '$1天 $2小时 $3分 $4秒'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);