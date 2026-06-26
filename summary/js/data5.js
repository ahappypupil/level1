/**
 * Think 1 第二版 数据文件5：Unit 9-10
 * Unit 9: The Wonders of the World - 比较级、最高级、自然地理、天气
 * Unit 10: People and Places - will/won't、be going to、城镇设施
 */
var DATA5 = {

"unit-9": {
    title: "Unit 9：The Wonders of the World",
    lessonRange: "U9",
    badge: "u9-10",
    group: "🌍 Unit 9-10：世界与未来",
    description: "自然奇观、比较级/最高级、地理词汇、天气描述",
    topics: ["比较级", "最高级", "自然", "地理", "天气", "as...as"],
    sections: [
        {type:"lesson", icon:"📖", title:"单元概述", content:`
            <p>本单元主题为"世界奇观"，学习比较级和最高级的构成与用法，掌握自然地理和天气相关的词汇。</p>
            <div class="example"><div class="en">The Amazon is longer than the Nile.</div><div class="cn">亚马逊河比尼罗河长。</div></div>
            <div class="example"><div class="en">Mount Everest is the highest mountain in the world.</div><div class="cn">珠穆朗玛峰是世界上最高的山。</div></div>
            <div class="example"><div class="en">It's as beautiful as I imagined.</div><div class="cn">它和我想象的一样美。</div></div>
        `},
        {type:"vocab", icon:"📒", title:"核心词汇", content:`
            <div class="sub-heading">1. 自然地理</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>beach</td><td>海滩</td><td>desert</td><td>沙漠</td></tr>
            <tr><td>forest</td><td>森林</td><td>hill</td><td>小山</td></tr>
            <tr><td>island</td><td>岛屿</td><td>jungle</td><td>丛林</td></tr>
            <tr><td>lake</td><td>湖泊</td><td>mountain</td><td>高山</td></tr>
            <tr><td>ocean</td><td>海洋</td><td>river</td><td>河流</td></tr></table>

            <div class="sub-heading">2. 天气 Weather</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>cloudy</td><td>多云的</td><td>sunny</td><td>晴朗的</td></tr>
            <tr><td>rainy</td><td>下雨的</td><td>windy</td><td>有风的</td></tr>
            <tr><td>foggy</td><td>有雾的</td><td>freezing</td><td>极冷的</td></tr>
            <tr><td>hot</td><td>炎热的</td><td>warm</td><td>温暖的</td></tr>
            <tr><td>dry</td><td>干燥的</td><td>wet</td><td>潮湿的</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法重点：比较级与最高级", content:`
            <div class="sub-heading">1. 比较级的构成</div>
            <table class="grammar-table"><tr><th>规则</th><th>原级</th><th>比较级</th></tr>
            <tr><td>一般单音节 + er</td><td>tall, fast, cold</td><td>taller, faster, colder</td></tr>
            <tr><td>以e结尾 + r</td><td>nice, large, safe</td><td>nicer, larger, safer</td></tr>
            <tr><td>辅音+y → ier</td><td>easy, happy, sunny</td><td>easier, happier, sunnier</td></tr>
            <tr><td>重读闭音节双写+er</td><td>big, hot, wet</td><td>bigger, hotter, wetter</td></tr>
            <tr><td>多音节 more + 原级</td><td>beautiful, dangerous</td><td>more beautiful, more dangerous</td></tr></table>

            <div class="sub-heading">2. 最高级的构成</div>
            <table class="grammar-table"><tr><th>规则</th><th>原级</th><th>最高级</th></tr>
            <tr><td>单音节 + est</td><td>tall, fast</td><td>the tallest, the fastest</td></tr>
            <tr><td>辅音+y → iest</td><td>easy, happy</td><td>the easiest, the happiest</td></tr>
            <tr><td>多音节 most + 原级</td><td>beautiful, expensive</td><td>the most beautiful, the most expensive</td></tr></table>

            <div class="sub-heading">3. 同级比较 as...as</div>
            <div class="formula"><span class="component subject">A</span> + <span class="component verb">is</span> + <span class="component verb">as</span> + 形容词 + <span class="component verb">as</span> + <span class="component subject">B</span></div>
            <div class="example"><div class="en">This beach is as beautiful as that one.</div><div class="cn">这个海滩和那个一样美。</div></div>
            <div class="example"><div class="en">It isn't as hot as yesterday.</div><div class="cn">没有昨天那么热。</div></div>
            <div class="warning-box">常见不规则变化：good → better → best；bad → worse → worst；far → farther/further → farthest/furthest</div>
        `},
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 比较两个事物</div>
            <div class="example"><div class="en">This mountain is higher than that one.</div><div class="cn">这座山比那座高。</div></div>
            <div class="example"><div class="en">The jungle is more dangerous than the forest.</div><div class="cn">丛林比森林更危险。</div></div>
            <div class="example"><div class="en">It's getting hotter and hotter.</div><div class="cn">天气变得越来越热。</div></div>

            <div class="sub-heading">2. 描述天气</div>
            <div class="example"><div class="en">What's the weather like today? — It's sunny and warm.</div><div class="cn">今天天气怎么样？——晴朗温暖。</div></div>
            <div class="example"><div class="en">It was freezing yesterday!</div><div class="cn">昨天冷死了！</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. The Pacific Ocean is _____ than the Atlantic Ocean.</div><div class="options">
                <button class="option-btn" data-value="A">A. big</button><button class="option-btn" data-value="B">B. bigger</button>
                <button class="option-btn" data-value="C">C. more big</button><button class="option-btn" data-value="D">D. biggest</button></div>
                <div class="explanation">than提示用比较级，big双写g+er→bigger。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. That was the _____ film I've ever seen!</div><div class="options">
                <button class="option-btn" data-value="A">A. worse</button><button class="option-btn" data-value="B">B. baddest</button>
                <button class="option-btn" data-value="C">C. worst</button><button class="option-btn" data-value="D">D. badder</button></div>
                <div class="explanation">bad的最高级是不规则变化worst。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">3. This city isn't _____ exciting as New York.</div><div class="options">
                <button class="option-btn" data-value="A">A. as</button><button class="option-btn" data-value="B">B. so</button>
                <button class="option-btn" data-value="C">C. more</button><button class="option-btn" data-value="D">D. than</button></div>
                <div class="explanation">not as...as结构表示"不如……"。</div></div>
        `}
    ]
},

"unit-10": {
    title: "Unit 10：People and Places",
    lessonRange: "U10",
    badge: "u9-10",
    group: "🌍 Unit 9-10：世界与未来",
    description: "城镇设施、will/won't将来时、be going to计划、交通与方向",
    topics: ["将来时", "will", "be going to", "城镇", "方向", "交通"],
    sections: [
        {type:"lesson", icon:"📖", title:"单元概述", content:`
            <p>本单元主题为"人与地方"，学习城镇各类设施的词汇，掌握一般将来时的两种表达方式：will和be going to。</p>
            <div class="example"><div class="en">I will visit my grandparents next weekend.</div><div class="cn">下周末我要去看祖父母。</div></div>
            <div class="example"><div class="en">I'm going to buy a new bike.</div><div class="cn">我打算买一辆新自行车。</div></div>
            <div class="example"><div class="en">There will be more parks in the future.</div><div class="cn">未来会有更多的公园。</div></div>
        `},
        {type:"vocab", icon:"📒", title:"核心词汇：城镇", content:`
            <div class="sub-heading">1. 城镇场所</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>concert hall</td><td>音乐厅</td><td>car park</td><td>停车场</td></tr>
            <tr><td>shopping mall</td><td>购物中心</td><td>bus station</td><td>公交总站</td></tr>
            <tr><td>police station</td><td>警察局</td><td>post office</td><td>邮局</td></tr>
            <tr><td>football stadium</td><td>足球场</td><td>sports centre</td><td>体育中心</td></tr>
            <tr><td>zebra crossing</td><td>斑马线</td><td>youth club</td><td>青少年俱乐部</td></tr></table>

            <div class="sub-heading">2. 街道与交通设施</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>speed camera</td><td>测速摄像头</td><td>graffiti wall</td><td>涂鸦墙</td></tr>
            <tr><td>cycle lane</td><td>自行车道</td><td>litter bin</td><td>垃圾桶</td></tr>
            <tr><td>billboard</td><td>广告牌</td><td>high street</td><td>商业街</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法重点：将来时", content:`
            <div class="compare-box">
                <div class="compare-side left"><h4>will + V原形</h4>
                    <p><strong>用法：</strong>临时决定、预测、承诺、未来事实</p>
                    <div class="formula"><span class="component subject">主语</span> + <span class="component verb">will</span> + <span class="component object">V原形</span></div>
                    <p>否定：won't (will not)</p>
                    <div class="example success"><div class="en">I think it will rain tomorrow.</div><div class="cn">我觉得明天会下雨。（预测）</div></div>
                    <div class="example success"><div class="en">I'll help you. （立刻决定）</div></div>
                </div>
                <div class="compare-side right"><h4>be going to + V原形</h4>
                    <p><strong>用法：</strong>事先计划、有迹象将发生</p>
                    <div class="formula"><span class="component subject">主语</span> + <span class="component verb">be going to</span> + <span class="component object">V原形</span></div>
                    <div class="example success"><div class="en">I'm going to travel to Japan next year.</div><div class="cn">我计划明年去日本。（计划）</div></div>
                    <div class="example success"><div class="en">Look! He's going to fall!（迹象）</div></div>
                </div>
            </div>
            <div class="sub-heading">将来时间状语</div>
            <div class="example"><div class="en">tomorrow, next week/month/year, in the future, soon, in 2050</div></div>
        `},
        {type:"sentence", icon:"🔑", title:"问路与指路", content:`
            <div class="sub-heading">1. 问路</div>
            <div class="example"><div class="en">Excuse me, how do I get to the post office?</div><div class="cn">打扰一下，邮局怎么走？</div></div>
            <div class="example"><div class="en">Is there a bus station near here?</div><div class="cn">这附近有公交站吗？</div></div>

            <div class="sub-heading">2. 指路</div>
            <div class="example"><div class="en">Go straight on, then turn left at the traffic lights.</div><div class="cn">直走，然后在红绿灯处左转。</div></div>
            <div class="example"><div class="en">It's on the right, opposite the shopping mall.</div><div class="cn">它在右边，购物中心对面。</div></div>
            <div class="example"><div class="en">You can't miss it!</div><div class="cn">你不会错过的！</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. I'm hungry. I _____ make a sandwich.</div><div class="options">
                <button class="option-btn" data-value="A">A. will</button><button class="option-btn" data-value="B">B. am going to</button>
                <button class="option-btn" data-value="C">C. going to</button><button class="option-btn" data-value="D">D. am</button></div>
                <div class="explanation">"我饿了"→临时决定做三明治，用will。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. We _____ visit our grandparents this weekend. We planned it last week.</div><div class="options">
                <button class="option-btn" data-value="A">A. will</button><button class="option-btn" data-value="B">B. won't</button>
                <button class="option-btn" data-value="C">C. are going to</button><button class="option-btn" data-value="D">D. go to</button></div>
                <div class="explanation">"上周就计划好了"→事先计划，用be going to。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">3. Go _____ on and you'll see the library on your left.</div><div class="options">
                <button class="option-btn" data-value="A">A. left</button><button class="option-btn" data-value="B">B. straight</button>
                <button class="option-btn" data-value="C">C. right</button><button class="option-btn" data-value="D">D. back</button></div>
                <div class="explanation">"直走"用go straight on。</div></div>
        `}
    ]
}

};
