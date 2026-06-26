/**
 * Think 1 第二版 数据文件6：Unit 11-12 + 总结
 * Unit 11: Making a Difference - 现在完成时(ever/never/for/since)
 * Unit 12: The Way We Are - 时态总复习、should、表达观点
 */
var DATA6 = {

"unit-11": {
    title: "Unit 11：Making a Difference",
    lessonRange: "U11",
    badge: "u11-12",
    group: "🌟 Unit 11-12：影响力与自我",
    description: "改变世界、现在完成时(ever/never/for/since)、慈善与志愿",
    topics: ["现在完成时", "ever/never", "for/since", "have been to", "志愿活动"],
    sections: [
        {type:"lesson", icon:"📖", title:"单元概述", content:`
            <p>本单元主题为"有所作为"，学习现在完成时，讨论经历、变化和成就，以及志愿者和环保话题。</p>
            <div class="example"><div class="en">I've never been to Africa.</div><div class="cn">我从未去过非洲。</div></div>
            <div class="example"><div class="en">Have you ever done any charity work?</div><div class="cn">你做过慈善工作吗？</div></div>
            <div class="example"><div class="en">She has lived here for ten years.</div><div class="cn">她已经在这里住了十年了。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法重点：现在完成时", content:`
            <div class="sub-heading">1. 现在完成时的构成</div>
            <div class="formula"><span class="component subject">主语</span> + <span class="component verb">have/has</span> + <span class="component object">过去分词</span></div>
            <table class="grammar-table"><tr><th>主语</th><th>肯定</th><th>否定</th><th>疑问</th></tr>
            <tr><td>I/You/We/They</td><td>have done</td><td>haven't done</td><td>Have…done?</td></tr>
            <tr><td>He/She/It</td><td>has done</td><td>hasn't done</td><td>Has…done?</td></tr></table>

            <div class="sub-heading">2. 现在完成时的三大用法</div>
            <table class="grammar-table"><tr><th>用法</th><th>示例</th></tr>
            <tr><td>① 经历（ever/never）</td><td>I've never ridden a horse. / Have you ever been to London?</td></tr>
            <tr><td>② 持续状态（for/since）</td><td>She has known him for five years. / since 2020.</td></tr>
            <tr><td>③ 对现在有影响的结果</td><td>I've lost my keys. (现在找不到)</td></tr></table>

            <div class="sub-heading">3. for vs since</div>
            <div class="compare-box">
                <div class="compare-side left"><h4>for + 时间段</h4>
                    <div class="example success"><div class="en">for three days / for a week</div></div>
                    <div class="example success"><div class="en">for ten years / for a long time</div></div>
                </div>
                <div class="compare-side right"><h4>since + 时间点</h4>
                    <div class="example success"><div class="en">since Monday / since 2020</div></div>
                    <div class="example success"><div class="en">since I was a child / since last year</div></div>
                </div>
            </div>

            <div class="sub-heading">4. have been to vs have gone to</div>
            <div class="example"><div class="en">She has been to Paris. （去过，已回来）</div></div>
            <div class="example"><div class="en">She has gone to Paris. （去了，还在那）</div></div>
            <div class="tip-box">规则动词过去分词和过去式同形（played, watched）；不规则动词需单独记忆（go→went→gone, see→saw→seen）。</div>
        `},
        {type:"vocab", icon:"📒", title:"常用不规则动词过去分词", content:`
            <table class="grammar-table"><tr><th>原形</th><th>过去式</th><th>过去分词</th></tr>
            <tr><td>be</td><td>was/were</td><td>been</td></tr>
            <tr><td>go</td><td>went</td><td>gone</td></tr>
            <tr><td>do</td><td>did</td><td>done</td></tr>
            <tr><td>have</td><td>had</td><td>had</td></tr>
            <tr><td>eat</td><td>ate</td><td>eaten</td></tr>
            <tr><td>see</td><td>saw</td><td>seen</td></tr>
            <tr><td>write</td><td>wrote</td><td>written</td></tr>
            <tr><td>give</td><td>gave</td><td>given</td></tr>
            <tr><td>take</td><td>took</td><td>taken</td></tr>
            <tr><td>make</td><td>made</td><td>made</td></tr></table>
        `},
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 询问经历</div>
            <div class="example"><div class="en">Have you ever volunteered for a charity?</div><div class="cn">你曾为慈善机构做过志愿者吗？</div></div>
            <div class="example"><div class="en">I've never done anything like that before.</div><div class="cn">我以前从未做过那样的事。</div></div>

            <div class="sub-heading">2. 表达持续时间</div>
            <div class="example"><div class="en">How long have you lived here?</div><div class="cn">你在这里住多久了？</div></div>
            <div class="example"><div class="en">We've been friends since we were five.</div><div class="cn">我们从五岁起就是朋友了。</div></div>
            <div class="example"><div class="en">He has worked at the hospital for three years.</div><div class="cn">他在那家医院工作三年了。</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="C"><div class="question">1. She _____ never eaten sushi before.</div><div class="options">
                <button class="option-btn" data-value="A">A. is</button><button class="option-btn" data-value="B">B. have</button>
                <button class="option-btn" data-value="C">C. has</button><button class="option-btn" data-value="D">D. was</button></div>
                <div class="explanation">She是第三人称单数，现在完成时用has + 过去分词。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. I've lived in this city _____ 2015.</div><div class="options">
                <button class="option-btn" data-value="A">A. since</button><button class="option-btn" data-value="B">B. for</button>
                <button class="option-btn" data-value="C">C. in</button><button class="option-btn" data-value="D">D. during</button></div>
                <div class="explanation">2015是时间点，用since。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">3. _____ you ever _____ to a rock concert?</div><div class="options">
                <button class="option-btn" data-value="A">A. Did...go</button><button class="option-btn" data-value="B">B. Have...been</button>
                <button class="option-btn" data-value="C">C. Have...gone</button><button class="option-btn" data-value="D">D. Are...going</button></div>
                <div class="explanation">ever提示现在完成时，问"去过"用Have you been to。</div></div>
        `}
    ]
},

"unit-12": {
    title: "Unit 12：The Way We Are",
    lessonRange: "U12",
    badge: "u11-12",
    group: "🌟 Unit 11-12：影响力与自我",
    description: "自我认知、时态总复习、should提建议、表达观点",
    topics: ["时态总复习", "should", "表达观点", "生活方式", "健康"],
    sections: [
        {type:"lesson", icon:"📖", title:"单元概述", content:`
            <p>本单元作为Level 1的收官单元，综合复习前面11个单元的语法知识，学习表达观点、给出建议，并讨论生活方式的选择。</p>
            <div class="example"><div class="en">You should take more exercise.</div><div class="cn">你应该多运动。</div></div>
            <div class="example"><div class="en">In my opinion, eating healthy food is important.</div><div class="cn">在我看来，吃健康的食物很重要。</div></div>
            <div class="example"><div class="en">I think we should spend less time on our phones.</div><div class="cn">我觉得我们应该少花时间在手机上。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"时态体系总复习", content:`
            <div class="sub-heading">Think 1 · 五大时态全景</div>
            <table class="grammar-table"><tr><th>时态</th><th>结构</th><th>标志词</th><th>例句</th></tr>
            <tr><td>一般现在时</td><td>V原形 / V-s(es)</td><td>every day, usually, always</td><td>I play tennis every week.</td></tr>
            <tr><td>现在进行时</td><td>am/is/are + V-ing</td><td>now, at the moment</td><td>She is sleeping now.</td></tr>
            <tr><td>一般过去时</td><td>V-ed / 不规则</td><td>yesterday, ago, last</td><td>We went shopping yesterday.</td></tr>
            <tr><td>一般将来时</td><td>will / be going to + V原形</td><td>tomorrow, next, soon</td><td>I will call you later.</td></tr>
            <tr><td>现在完成时</td><td>have/has + 过去分词</td><td>ever, never, for, since</td><td>He has never been to Italy.</td></tr></table>

            <div class="sub-heading">should / shouldn't 提建议</div>
            <div class="formula"><span class="component subject">主语</span> + <span class="component verb">should/shouldn't</span> + <span class="component object">V原形</span></div>
            <div class="example"><div class="en">You should drink more water.</div><div class="cn">你应该多喝水。</div></div>
            <div class="example"><div class="en">He shouldn't stay up so late.</div><div class="cn">他不应该那么晚睡。</div></div>
        `},
        {type:"sentence", icon:"🔑", title:"表达观点句型", content:`
            <div class="sub-heading">常用表达观点的句型</div>
            <table class="grammar-table"><tr><th>句型</th><th>含义</th></tr>
            <tr><td>In my opinion, ...</td><td>在我看来……</td></tr>
            <tr><td>I think (that) ...</td><td>我认为……</td></tr>
            <tr><td>I believe (that) ...</td><td>我相信……</td></tr>
            <tr><td>I don't think (that) ...</td><td>我不认为……</td></tr>
            <tr><td>For me, ...</td><td>对我来说……</td></tr>
            <tr><td>I agree with you.</td><td>我同意你。</td></tr>
            <tr><td>I disagree because...</td><td>我不同意因为……</td></tr></table>

            <div class="sub-heading">同意与不同意</div>
            <div class="example"><div class="en">I totally agree. / I'm not so sure about that.</div><div class="cn">我完全同意。/ 我不太确定。</div></div>
            <div class="example"><div class="en">That's a good point. / I see what you mean, but...</div><div class="cn">说得有道理。/ 我懂你的意思，但是……</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"综合练习", content:`
            <div class="exercise-item" data-answer="C"><div class="question">1. You _____ eat so many sweets. They're bad for your teeth.</div><div class="options">
                <button class="option-btn" data-value="A">A. should</button><button class="option-btn" data-value="B">B. will</button>
                <button class="option-btn" data-value="C">C. shouldn't</button><button class="option-btn" data-value="D">D. must</button></div>
                <div class="explanation">对牙齿不好，应该用shouldn't表示"不应该"。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">2. While I _____ my homework, my sister was watching TV.</div><div class="options">
                <button class="option-btn" data-value="A">A. did</button><button class="option-btn" data-value="B">B. was doing</button>
                <button class="option-btn" data-value="C">C. have done</button><button class="option-btn" data-value="D">D. do</button></div>
                <div class="explanation">过去进行时：was/were + V-ing，表示过去某时刻正在发生的动作。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">3. _____, I think everyone should learn a second language.</div><div class="options">
                <button class="option-btn" data-value="A">A. In my opinion</button><button class="option-btn" data-value="B">B. Because</button>
                <button class="option-btn" data-value="C">C. For example</button><button class="option-btn" data-value="D">D. However</button></div>
                <div class="explanation">表达观点用In my opinion。</div></div>
        `}
    ]
},

"level1-summary": {
    title: "Think 1 第二版 · 全册知识点总览",
    lessonRange: "Level 1 · A2",
    badge: "u11-12",
    group: "🌟 Unit 11-12：影响力与自我",
    description: "Think 1 第二版全部12个单元+Welcome 知识点总复习",
    topics: ["总复习", "语法体系", "时态", "词汇总结", "KET备考"],
    sections: [
        {type:"lesson", icon:"📖", title:"全册内容总览", content:`
            <p>Think 1 第二版 Level 1 覆盖CEFR A2级别全部语言能力要求，共12个单元+Welcome单元。</p>
            <p>对标 <strong>剑桥KET考试</strong>，建议词汇量：<strong>1400-1800词</strong>。</p>
            <p>每单元涵盖：话题引入 → 语法学习 → 词汇积累 → 听说读写 → 批判性思维(THiNK!) → 文化拓展。</p>
        `},
        {type:"grammar", icon:"📝", title:"语法体系全览", content:`
            <div class="sub-heading">五大时态</div>
            <table class="grammar-table"><tr><th>时态</th><th>结构</th><th>主要分布</th></tr>
            <tr><td>一般现在时</td><td>V原形 / V-s(es)</td><td>Welcome, U1, U4</td></tr>
            <tr><td>现在进行时</td><td>am/is/are + V-ing</td><td>U1</td></tr>
            <tr><td>一般过去时</td><td>V-ed / 不规则</td><td>U6, U7, U8</td></tr>
            <tr><td>一般将来时</td><td>will / be going to + V原形</td><td>U10</td></tr>
            <tr><td>现在完成时</td><td>have/has + 过去分词</td><td>U11</td></tr></table>

            <div class="sub-heading">重点语法专题</div>
            <table class="grammar-table"><tr><th>专题</th><th>所在单元</th></tr>
            <tr><td>be动词 / 指示代词 / There be / 方位介词</td><td>Welcome, U5</td></tr>
            <tr><td>可数/不可数名词 / some, any, much, many</td><td>U2, U3</td></tr>
            <tr><td>所有格('s) / 物主代词</td><td>U4</td></tr>
            <tr><td>have got / has got</td><td>U3</td></tr>
            <tr><td>could / couldn't (过去能力)</td><td>U8</td></tr>
            <tr><td>比较级 / 最高级 / as...as</td><td>U9</td></tr>
            <tr><td>should / shouldn't (建议)</td><td>U6, U12</td></tr></table>
        `},
        {type:"vocab", icon:"📒", title:"主题词汇分布", content:`
            <table class="grammar-table"><tr><th>Unit</th><th>主题词汇</th></tr>
            <tr><td>Welcome</td><td>国籍、教室物品、方位介词、日期</td></tr>
            <tr><td>U1</td><td>爱好、活动、have搭配</td></tr>
            <tr><td>U2</td><td>购物场所、服装、货币</td></tr>
            <tr><td>U3</td><td>食物、烹饪方法、味道描述</td></tr>
            <tr><td>U4</td><td>家庭成员、情感情绪</td></tr>
            <tr><td>U5</td><td>家居、家具、look短语</td></tr>
            <tr><td>U6</td><td>性格形容词、描述友谊</td></tr>
            <tr><td>U7</td><td>科技产品、家务活动</td></tr>
            <tr><td>U8</td><td>体育运动、序词表达</td></tr>
            <tr><td>U9</td><td>自然地理、天气</td></tr>
            <tr><td>U10</td><td>城镇设施、交通</td></tr>
            <tr><td>U11</td><td>志愿者、慈善、经历</td></tr>
            <tr><td>U12</td><td>健康、生活方式、观点表达</td></tr></table>
        `},
        {type:"tip", icon:"💡", title:"备考建议", content:`
            <div class="sub-heading">KET备考衔接</div>
            <table class="grammar-table"><tr><th>Think 1核心能力</th><th>KET对应要求</th></tr>
            <tr><td>五大时态的掌握与运用</td><td>✅ 全部覆盖</td></tr>
            <tr><td>比较级、最高级</td><td>✅ 完全达标</td></tr>
            <tr><td>some/any/much/many</td><td>✅ 完全达标</td></tr>
            <tr><td>情态动词 can/could/should/must</td><td>✅ 基本覆盖</td></tr>
            <tr><td>现在完成时</td><td>✅ 超KET要求（为PET铺垫）</td></tr></table>
            <div class="tip-box">完成Think 1学习后，词汇量可达1500词以上，语法覆盖KET全部考点，建议搭配KET真题进行考前训练。</div>
        `}
    ]
}

};
