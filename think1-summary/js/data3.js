/**
 * Think 1 第二版 数据文件3：Unit 5-6
 * Unit 5: It's My Life - 家居词汇、方位介词深化、phrasal verbs (look)
 * Unit 6: Best Friends / Keeping Healthy - 过去式(be动词/规则动词)、should/shouldn't
 */
var DATA3 = {

"unit-5": {
    title: "Unit 5：It's My Life",
    lessonRange: "U5",
    badge: "u5-6",
    group: "🏠 Unit 5-6：生活与友谊",
    description: "家居生活、房间与家具、方位介词、look短语动词、描述感受",
    topics: ["家居", "家具", "方位介词", "look短语", "情感状态"],
    sections: [
        {type:"lesson", icon:"📖", title:"单元概述", content:`
            <p>本单元主题为"这是我的生活"，学习家居环境词汇、房间家具名称，巩固方位介词，掌握look相关的短语动词。</p>
            <div class="example"><div class="en">There's a sofa in the living room.</div><div class="cn">客厅里有一张沙发。</div></div>
            <div class="example"><div class="en">I'm looking for my keys.</div><div class="cn">我在找我的钥匙。</div></div>
            <div class="example"><div class="en">She looks after her little sister.</div><div class="cn">她照顾她的小妹妹。</div></div>
        `},
        {type:"vocab", icon:"📒", title:"核心词汇：家居", content:`
            <div class="sub-heading">1. 家具与房间设施</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>armchair</td><td>扶手椅</td><td>carpet</td><td>地毯</td></tr>
            <tr><td>cooker</td><td>炉灶</td><td>curtains</td><td>窗帘</td></tr>
            <tr><td>desk</td><td>书桌</td><td>lamp</td><td>台灯</td></tr>
            <tr><td>mirror</td><td>镜子</td><td>shelves</td><td>架子</td></tr>
            <tr><td>shower</td><td>淋浴</td><td>sofa</td><td>沙发</td></tr>
            <tr><td>toilet</td><td>马桶/厕所</td><td>wardrobe</td><td>衣柜</td></tr></table>

            <div class="sub-heading">2. look短语动词</div>
            <table class="grammar-table"><tr><th>短语</th><th>含义</th><th>例句</th></tr>
            <tr><td>look after</td><td>照顾</td><td>look after a pet</td></tr>
            <tr><td>look for</td><td>寻找</td><td>look for my bag</td></tr>
            <tr><td>look at</td><td>看</td><td>look at the photo</td></tr>
            <tr><td>look up</td><td>查阅/查找</td><td>look up the word</td></tr>
            <tr><td>look into</td><td>调查</td><td>look into the problem</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法重点", content:`
            <div class="sub-heading">1. 方位介词综合</div>
            <table class="grammar-table"><tr><th>介词</th><th>含义</th><th>例句</th></tr>
            <tr><td>on</td><td>在…上面（接触）</td><td>The book is on the desk.</td></tr>
            <tr><td>above</td><td>在…上方（不接触）</td><td>The lamp is above the table.</td></tr>
            <tr><td>in</td><td>在…里面</td><td>The clothes are in the wardrobe.</td></tr>
            <tr><td>next to</td><td>在…旁边</td><td>The sofa is next to the window.</td></tr>
            <tr><td>opposite</td><td>在…对面</td><td>The mirror is opposite the bed.</td></tr>
            <tr><td>between…and…</td><td>在…和…之间</td><td>It's between the lamp and the books.</td></tr></table>

            <div class="sub-heading">2. 描述感受的状态形容词</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>annoyed</td><td>恼怒的</td><td>relaxed</td><td>放松的</td></tr>
            <tr><td>bored</td><td>无聊的</td><td>interested</td><td>感兴趣的</td></tr>
            <tr><td>amazed</td><td>惊讶的</td><td></td><td></td></tr></table>
            <div class="tip-box">-ed结尾的形容词描述"人的感受"；-ing结尾的形容词描述"事物的特性"。<br/>I'm bored.（我很无聊） vs The film is boring.（这电影很无聊）</div>
        `},
        {type:"sentence", icon:"🔑", title:"描述房间布局", content:`
            <div class="sub-heading">1. 描述房间</div>
            <div class="example"><div class="en">In my bedroom, there's a bed next to the window.</div><div class="cn">我的卧室里，床在窗户旁边。</div></div>
            <div class="example"><div class="en">There are some shelves on the wall above my desk.</div><div class="cn">我书桌上方的墙上有几个架子。</div></div>
            <div class="example"><div class="en">The wardrobe is opposite the bed.</div><div class="cn">衣柜在床的对面。</div></div>

            <div class="sub-heading">2. 询问和描述位置</div>
            <div class="example"><div class="en">Where's the mirror? — It's on the wall.</div><div class="cn">镜子在哪？——在墙上。</div></div>
            <div class="example"><div class="en">What's in front of the sofa?</div><div class="cn">沙发前面是什么？</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="C"><div class="question">1. Can you _____ my cat while I'm away?</div><div class="options">
                <button class="option-btn" data-value="A">A. look for</button><button class="option-btn" data-value="B">B. look up</button>
                <button class="option-btn" data-value="C">C. look after</button><button class="option-btn" data-value="D">D. look at</button></div>
                <div class="explanation">"我不在时照顾我的猫"，用look after。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. The TV is _____ the window and the bookshelf.</div><div class="options">
                <button class="option-btn" data-value="A">A. between</button><button class="option-btn" data-value="B">B. next</button>
                <button class="option-btn" data-value="C">C. under</button><button class="option-btn" data-value="D">D. on</button></div>
                <div class="explanation">在两个物体之间用between...and...。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">3. I was so _____ during the lesson. The teacher just talked and talked.</div><div class="options">
                <button class="option-btn" data-value="A">A. boring</button><button class="option-btn" data-value="B">B. bored</button>
                <button class="option-btn" data-value="C">C. interesting</button><button class="option-btn" data-value="D">D. amazing</button></div>
                <div class="explanation">描述"我"的感受，用bored（感到无聊）。</div></div>
        `}
    ]
},

"unit-6": {
    title: "Unit 6：Best Friends / Keeping Healthy",
    lessonRange: "U6",
    badge: "u5-6",
    group: "🏠 Unit 5-6：生活与友谊",
    description: "友谊与健康、一般过去时（was/were + 规则动词）、时间状语、建议句型",
    topics: ["过去式", "was/were", "规则动词过去式", "时间状语", "should"],
    sections: [
        {type:"lesson", icon:"📖", title:"单元概述", content:`
            <p>本单元主题涵盖友谊和保持健康，重点学习一般过去时的构成和用法，包括be动词的过去式was/were，以及规则动词的过去式变化。</p>
            <div class="example"><div class="en">Yesterday I was at home all day.</div><div class="cn">昨天我一整天都在家。</div></div>
            <div class="example"><div class="en">My friends were very helpful last week.</div><div class="cn">上周我的朋友们都很乐于助人。</div></div>
            <div class="example"><div class="en">She played tennis three days ago.</div><div class="cn">她三天前打了网球。</div></div>
        `},
        {type:"vocab", icon:"📒", title:"核心词汇", content:`
            <div class="sub-heading">1. 过去时间状语</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>示例</th></tr>
            <tr><td>yesterday</td><td>昨天</td><td>yesterday morning/afternoon/evening</td></tr>
            <tr><td>last + 时间</td><td>上…</td><td>last year/month/week/Monday</td></tr>
            <tr><td>时间 + ago</td><td>…以前</td><td>a year ago / three weeks ago</td></tr></table>

            <div class="sub-heading">2. 描述性格的形容词</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>intelligent</td><td>聪明的</td><td>cheerful</td><td>快乐的</td></tr>
            <tr><td>jealous</td><td>嫉妒的</td><td>helpful</td><td>乐于助人的</td></tr>
            <tr><td>confident</td><td>自信的</td><td>generous</td><td>慷慨的</td></tr>
            <tr><td>easy-going</td><td>随和的</td><td>funny</td><td>有趣的/搞笑的</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法重点：一般过去时", content:`
            <div class="sub-heading">1. be动词的过去式：was / were</div>
            <table class="grammar-table"><tr><th>主语</th><th>肯定</th><th>否定</th><th>疑问</th></tr>
            <tr><td>I / He / She / It</td><td>was</td><td>wasn't (was not)</td><td>Was I…?</td></tr>
            <tr><td>You / We / They</td><td>were</td><td>weren't (were not)</td><td>Were you…?</td></tr></table>
            <div class="example"><div class="en">I was at the park yesterday.</div><div class="cn">昨天我在公园。</div></div>
            <div class="example"><div class="en">They weren't at school last Monday.</div><div class="cn">上周一他们不在学校。</div></div>

            <div class="sub-heading">2. 规则动词过去式变化</div>
            <table class="grammar-table"><tr><th>规则</th><th>示例</th></tr>
            <tr><td>一般 + ed</td><td>play → played, walk → walked</td></tr>
            <tr><td>以e结尾 + d</td><td>like → liked, live → lived</td></tr>
            <tr><td>辅音+y → ied</td><td>study → studied, carry → carried</td></tr>
            <tr><td>重读闭音节双写 + ed</td><td>stop → stopped, plan → planned</td></tr></table>
            <div class="warning-box">以元音+y结尾直接加ed：play → played，enjoy → enjoyed（不是enjoyied!）</div>
        `},
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 谈论过去的经历</div>
            <div class="example"><div class="en">What did you do yesterday? — I watched a film.</div><div class="cn">你昨天做什么了？——我看了一部电影。</div></div>
            <div class="example"><div class="en">Where were you last night? — I was at my friend's house.</div><div class="cn">昨晚你在哪？——我在朋友家。</div></div>
            <div class="example"><div class="en">She didn't go to the party last Saturday.</div><div class="cn">上周六她没去聚会。</div></div>

            <div class="sub-heading">2. 提建议（should / shouldn't）</div>
            <div class="formula"><span class="component subject">You</span> + <span class="component verb">should/shouldn't</span> + <span class="component object">V原形</span></div>
            <div class="example"><div class="en">You should do more exercise.</div><div class="cn">你应该多做运动。</div></div>
            <div class="example"><div class="en">You shouldn't eat too much junk food.</div><div class="cn">你不应该吃太多垃圾食品。</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="C"><div class="question">1. My parents _____ at home yesterday evening.</div><div class="options">
                <button class="option-btn" data-value="A">A. was</button><button class="option-btn" data-value="B">B. is</button>
                <button class="option-btn" data-value="C">C. were</button><button class="option-btn" data-value="D">D. are</button></div>
                <div class="explanation">My parents是复数，昨天是过去时，用were。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. She _____ tennis with her friends three days ago.</div><div class="options">
                <button class="option-btn" data-value="A">A. played</button><button class="option-btn" data-value="B">B. plays</button>
                <button class="option-btn" data-value="C">C. play</button><button class="option-btn" data-value="D">D. playing</button></div>
                <div class="explanation">three days ago是过去时间，用过去式played。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">3. You _____ eat more vegetables. They're good for you.</div><div class="options">
                <button class="option-btn" data-value="A">A. shouldn't</button><button class="option-btn" data-value="B">B. should</button>
                <button class="option-btn" data-value="C">C. mustn't</button><button class="option-btn" data-value="D">D. must</button></div>
                <div class="explanation">建议"应该做"，用should + V原形。</div></div>
        `}
    ]
}

};
