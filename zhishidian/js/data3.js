/**
 * 新概念英语第一册 数据文件3：第49-72课
 * 一般现在时、天气与季节、have的用法、一般过去时入门
 */
var DATA3 = {

"lesson-49-50": {
    title: "第49-50课：At the butcher's / He likes..., but he doesn't like...",
    lessonRange: "L49-50",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "一般现在时第三人称单数与like的用法",
    topics: ["一般现在时", "三单变化", "like/doesn't like", "but连接"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. He likes... but he doesn't like...</div>
            <div class="example"><div class="en">He likes lamb, but he doesn't like chicken.</div><div class="cn">他喜欢羊肉，但不喜欢鸡肉。</div></div>
            <div class="example"><div class="en">Does he like beef? — Yes, he does. / No, he doesn't.</div><div class="cn">他喜欢牛肉吗？— 是的。/ 不。</div></div>

            <div class="sub-heading">2. What about...? ……呢？</div>
            <div class="example"><div class="en">What about some steak?</div><div class="cn">来点牛排怎么样？</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 动词第三人称单数变化规则</div>
            <table class="grammar-table"><tr><th>规则</th><th>方法</th><th>例词</th></tr>
            <tr><td>一般情况</td><td>加-s</td><td>like→likes, read→reads</td></tr>
            <tr><td>ch, sh, s, x, o结尾</td><td>加-es</td><td>wash→washes, go→goes, watch→watches</td></tr>
            <tr><td>辅音+y结尾</td><td>变y为i加-es</td><td>study→studies, carry→carries</td></tr>
            <tr><td>特殊</td><td>have→has</td><td>have→has</td></tr></table>

            <div class="sub-heading">2. 一般现在时的用法</div>
            <table class="grammar-table"><tr><th>用法</th><th>例句</th></tr>
            <tr><td>经常性/习惯性动作</td><td>He goes to school every day.</td></tr>
            <tr><td>客观事实/真理</td><td>The sun rises in the east.</td></tr>
            <tr><td>状态/喜好</td><td>She likes music.</td></tr></table>
            <div class="tip-box">时间标志：always, usually, often, sometimes, never, every day/week/year</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. He _____ to work every day.</div><div class="options">
                <button class="option-btn" data-value="A">A. go</button><button class="option-btn" data-value="B">B. goes</button>
                <button class="option-btn" data-value="C">C. going</button><button class="option-btn" data-value="D">D. went</button></div>
                <div class="explanation">He是第三人称单数，go加es变为goes。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. — Does she like chicken? — No, she _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. don't</button><button class="option-btn" data-value="B">B. do</button>
                <button class="option-btn" data-value="C">C. doesn't</button><button class="option-btn" data-value="D">D. isn't</button></div>
                <div class="explanation">Does提问，否定回答No, she doesn't.</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">3. She _____ TV every evening. (watch)</div><div class="options">
                <button class="option-btn" data-value="A">A. watches</button><button class="option-btn" data-value="B">B. watchs</button>
                <button class="option-btn" data-value="C">C. watch</button><button class="option-btn" data-value="D">D. watching</button></div>
                <div class="explanation">watch以ch结尾，加es变为watches。</div></div>
        `}
    ]
},

"lesson-51-52": {
    title: "第51-52课：A pleasant climate / What nationality are they?",
    lessonRange: "L51-52",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "天气与季节，一般现在时描述气候",
    topics: ["天气表达", "季节", "It's always/never", "Where do you come from?"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. Where do you come from? 你来自哪里？</div>
            <div class="example"><div class="en">Where do you come from? — I come from Greece.</div><div class="cn">你来自哪里？— 我来自希腊。</div></div>
            <div class="example"><div class="en">Where are you from? — I'm from Brazil.</div><div class="cn">你是哪里人？— 我是巴西人。</div></div>

            <div class="sub-heading">2. 天气表达</div>
            <table class="grammar-table"><tr><th>表达</th><th>含义</th></tr>
            <tr><td>It's pleasant.</td><td>天气宜人。</td></tr>
            <tr><td>It's often windy.</td><td>经常刮风。</td></tr>
            <tr><td>It's always hot.</td><td>总是很热。</td></tr>
            <tr><td>It's sometimes cold.</td><td>有时很冷。</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 频度副词</div>
            <table class="grammar-table"><tr><th>频度副词</th><th>含义</th><th>位置</th></tr>
            <tr><td>always</td><td>总是 100%</td><td>be动词后/实义动词前</td></tr>
            <tr><td>usually</td><td>通常 80%</td><td>同上</td></tr>
            <tr><td>often</td><td>经常 60%</td><td>同上</td></tr>
            <tr><td>sometimes</td><td>有时 40%</td><td>句首或句中</td></tr>
            <tr><td>never</td><td>从不 0%</td><td>be动词后/实义动词前</td></tr></table>
            <div class="example"><div class="en">It is always warm in April.</div><div class="cn">四月份总是很温暖。（be动词后）</div></div>
            <div class="example"><div class="en">He never gets up early.</div><div class="cn">他从不起早。（实义动词前）</div></div>

            <div class="sub-heading">2. 季节与月份</div>
            <table class="grammar-table"><tr><th>季节</th><th>月份</th></tr>
            <tr><td>Spring 春天</td><td>March, April, May</td></tr>
            <tr><td>Summer 夏天</td><td>June, July, August</td></tr>
            <tr><td>Autumn 秋天</td><td>September, October, November</td></tr>
            <tr><td>Winter 冬天</td><td>December, January, February</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. He _____ goes to school late. (从来不错)</div><div class="options">
                <button class="option-btn" data-value="A">A. always</button><button class="option-btn" data-value="B">B. never</button>
                <button class="option-btn" data-value="C">C. often</button><button class="option-btn" data-value="D">D. sometimes</button></div>
                <div class="explanation">从来不错=从不迟到，用never。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. She is _____ happy.</div><div class="options">
                <button class="option-btn" data-value="A">A. always</button><button class="option-btn" data-value="B">B. usuallys</button>
                <button class="option-btn" data-value="C">C. oftens</button><button class="option-btn" data-value="D">D. never不</button></div>
                <div class="explanation">频度副词放在be动词后。</div></div>
        `}
    ]
},

"lesson-53-54": {
    title: "第53-54课：An interesting climate / What country is it?",
    lessonRange: "L53-54",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "气候描述与方位表达",
    topics: ["方位", "in the north/south", "Which season", "一般现在时巩固"],
    sections: [
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 方位表达</div>
            <table class="grammar-table"><tr><th>表达</th><th>含义</th><th>例句</th></tr>
            <tr><td>in the north</td><td>在北方</td><td>It's cold in the north.</td></tr>
            <tr><td>in the south</td><td>在南方</td><td>It's warm in the south.</td></tr>
            <tr><td>in the east</td><td>在东方</td><td>The sun rises in the east.</td></tr>
            <tr><td>in the west</td><td>在西方</td><td>It's rainy in the west.</td></tr></table>

            <div class="sub-heading">2. Which season do you like best?</div>
            <div class="example"><div class="en">Which season do you like best? — I like summer best.</div><div class="cn">你最喜欢哪个季节？— 我最喜欢夏天。</div></div>
            <div class="tip-box">like...best = 最喜欢……；like...better than = 比……更喜欢</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="C"><div class="question">1. It's cold _____ the north.</div><div class="options">
                <button class="option-btn" data-value="A">A. on</button><button class="option-btn" data-value="B">B. at</button>
                <button class="option-btn" data-value="C">C. in</button><button class="option-btn" data-value="D">D. to</button></div>
                <div class="explanation">在某个方位用介词in。</div></div>
        `}
    ]
},

"lesson-55-56": {
    title: "第55-56课：The Sawyer family / What do they usually do?",
    lessonRange: "L55-56",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "一般现在时描述日常活动",
    topics: ["日常活动", "一般现在时", "the Sawyer family", "时间表达"],
    sections: [
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 一般现在时描述日常活动</div>
            <div class="example"><div class="en">Mr. Sawyer goes to work every morning.</div><div class="cn">索耶先生每天早上去上班。</div></div>
            <div class="example"><div class="en">The children go to school by car every day.</div><div class="cn">孩子们每天坐车去上学。</div></div>

            <div class="sub-heading">2. 时间表达法</div>
            <table class="grammar-table"><tr><th>时间</th><th>英文</th><th>时间</th><th>英文</th></tr>
            <tr><td>在早上</td><td>in the morning</td><td>在下午</td><td>in the afternoon</td></tr>
            <tr><td>在晚上</td><td>in the evening</td><td>在夜里</td><td>at night</td></tr>
            <tr><td>在中午</td><td>at noon</td><td>每天</td><td>every day</td></tr></table>
            <div class="tip-box">in + 早/午/晚，at + noon/night。注意：at night不用in！</div>

            <div class="sub-heading">3. by + 交通方式</div>
            <table class="grammar-table"><tr><th>表达</th><th>含义</th></tr>
            <tr><td>by car</td><td>坐汽车</td></tr>
            <tr><td>by bus</td><td>坐公共汽车</td></tr>
            <tr><td>by train</td><td>坐火车</td></tr>
            <tr><td>on foot</td><td>步行</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. She goes to work _____ bus.</div><div class="options">
                <button class="option-btn" data-value="A">A. on</button><button class="option-btn" data-value="B">B. by</button>
                <button class="option-btn" data-value="C">C. in</button><button class="option-btn" data-value="D">D. at</button></div>
                <div class="explanation">by + 交通方式，不加冠词。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. He arrives _____ home late at night.</div><div class="options">
                <button class="option-btn" data-value="A">A. to</button><button class="option-btn" data-value="B">B. at</button>
                <button class="option-btn" data-value="C">C. /</button><button class="option-btn" data-value="D">D. in</button></div>
                <div class="explanation">arrive home中home是副词，不加介词。</div></div>
        `}
    ]
},

"lesson-57-58": {
    title: "第57-58课：An unusual day / What's the time?",
    lessonRange: "L57-58",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "时间表达与一般现在时特殊用法",
    topics: ["时间表达", "o'clock", "half past", "一般现在时vs现在进行时"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 询问时间</div>
            <div class="example"><div class="en">What's the time? / What time is it?</div><div class="cn">几点了？</div></div>

            <div class="sub-heading">2. 时间表达法</div>
            <table class="grammar-table"><tr><th>时间</th><th>表达1</th><th>表达2</th></tr>
            <tr><td>8:00</td><td>eight o'clock</td><td>eight</td></tr>
            <tr><td>8:05</td><td>five past eight</td><td>eight oh five</td></tr>
            <tr><td>8:15</td><td>a quarter past eight</td><td>eight fifteen</td></tr>
            <tr><td>8:30</td><td>half past eight</td><td>eight thirty</td></tr>
            <tr><td>8:45</td><td>a quarter to nine</td><td>eight forty-five</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 一般现在时 vs 现在进行时</div>
            <div class="compare-box">
                <div class="compare-side left"><h4>一般现在时</h4>
                    <p>描述习惯性/经常性的动作</p>
                    <p>They go to school by car every day.</p>
                    <p>时间词：always, usually, every day</p></div>
                <div class="compare-side right"><h4>现在进行时</h4>
                    <p>描述此刻正在发生的动作</p>
                    <p>They are going to school on foot today.</p>
                    <p>时间词：now, at the moment, today</p></div>
            </div>
            <div class="tip-box">"今天"的动作如果与平时不同，用现在进行时。第57课标题An unusual day就暗示了这一点。</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. She usually _____ to work by bus, but today she _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. go, walks</button><button class="option-btn" data-value="B">B. goes, is walking</button>
                <button class="option-btn" data-value="C">C. goes, walks</button><button class="option-btn" data-value="D">D. go, is walking</button></div>
                <div class="explanation">usually用一般现在时goes，today用现在进行时is walking。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. 8:30 is _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. half past eight</button><button class="option-btn" data-value="B">B. half to nine</button>
                <button class="option-btn" data-value="C">C. thirty past eight</button><button class="option-btn" data-value="D">D. half eight</button></div>
                <div class="explanation">8:30 = half past eight。</div></div>
        `}
    ]
},

"lesson-59-60": {
    title: "第59-60课：Is that all? / What's the time?",
    lessonRange: "L59-60",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "have的用法与购物表达",
    topics: ["have got", "I want...", "购物用语", "Do you have...?"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. I want some..., please. 我想买……</div>
            <div class="example"><div class="en">I want some envelopes, please.</div><div class="cn">我想买一些信封。</div></div>
            <div class="example"><div class="en">Do you have any writing paper?</div><div class="cn">你们有信纸吗？</div></div>

            <div class="sub-heading">2. Is that all? 就这些吗？</div>
            <div class="example"><div class="en">Is that all? — That's all, thank you.</div><div class="cn">就这些吗？— 就这些，谢谢。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. have 的多种用法</div>
            <table class="grammar-table"><tr><th>用法</th><th>含义</th><th>例句</th></tr>
            <tr><td>have + 食物</td><td>吃/喝</td><td>I have breakfast at 7.</td></tr>
            <tr><td>have got</td><td>拥有</td><td>I've got a pen. = I have a pen.</td></tr>
            <tr><td>have to</td><td>不得不</td><td>I have to go now.</td></tr></table>

            <div class="sub-heading">2. have got 与 have 的区别</div>
            <div class="compare-box">
                <div class="compare-side left"><h4>have got</h4>
                    <p>英式英语常用</p>
                    <p>I've got a car.</p>
                    <p>Have you got a car?</p></div>
                <div class="compare-side right"><h4>have</h4>
                    <p>美式英语常用</p>
                    <p>I have a car.</p>
                    <p>Do you have a car?</p></div>
            </div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. — Have you got any envelopes? — _____</div><div class="options">
                <button class="option-btn" data-value="A">A. Yes, I have.</button><button class="option-btn" data-value="B">B. Yes, I've.</button>
                <button class="option-btn" data-value="C">C. Yes, I do.</button><button class="option-btn" data-value="D">D. Yes, I got.</button></div>
                <div class="explanation">Have you got...? 回答Yes, I have.</div></div>
        `}
    ]
},

"lesson-61-62": {
    title: "第61-62课：A bad cold / What's the matter with them?",
    lessonRange: "L61-62",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "must表必须与看病表达",
    topics: ["must", "看病用语", "What's the matter?", "take medicine"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 看病用语</div>
            <div class="example"><div class="en">What's the matter with him?</div><div class="cn">他怎么了？</div></div>
            <div class="example"><div class="en">He has a bad cold.</div><div class="cn">他得了重感冒。</div></div>
            <div class="example"><div class="en">He must stay in bed for a week.</div><div class="cn">他必须卧床一周。</div></div>

            <div class="sub-heading">2. 常见疾病表达</div>
            <table class="grammar-table"><tr><th>表达</th><th>含义</th></tr>
            <tr><td>have a cold</td><td>感冒</td></tr>
            <tr><td>have a headache</td><td>头疼</td></tr>
            <tr><td>have a fever</td><td>发烧</td></tr>
            <tr><td>have a stomach ache</td><td>胃疼</td></tr>
            <tr><td>have toothache</td><td>牙疼</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. must 表必须 / mustn't 表禁止</div>
            <div class="example"><div class="en">He must stay in bed.（他必须卧床休息）</div><div class="cn">must + 动词原形</div></div>
            <div class="example"><div class="en">He mustn't get up.（他不能起床）</div><div class="cn">mustn't + 动词原形</div></div>

            <div class="sub-heading">2. must vs have to</div>
            <div class="compare-box">
                <div class="compare-side left"><h4>must</h4>
                    <p>主观上的"必须"</p>
                    <p>I must study hard. 我必须努力学习。</p></div>
                <div class="compare-side right"><h4>have to</h4>
                    <p>客观上的"不得不"</p>
                    <p>I have to work on Sunday. 我不得不周日工作。</p></div>
            </div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. He has a bad cold, so he _____ stay in bed.</div><div class="options">
                <button class="option-btn" data-value="A">A. can</button><button class="option-btn" data-value="B">B. must</button>
                <button class="option-btn" data-value="C">C. musts</button><button class="option-btn" data-value="D">D. may</button></div>
                <div class="explanation">must表示必须，无人称变化。</div></div>
        `}
    ]
},

"lesson-63-64": {
    title: "第63-64课：Thank you, doctor / Don't...!",
    lessonRange: "L63-64",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "医嘱与否定祈使句",
    topics: ["Don't...", "mustn't", "医嘱", "each/every"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 医嘱（否定祈使句）</div>
            <div class="example"><div class="en">Don't eat rich food.</div><div class="cn">不要吃油腻食物。</div></div>
            <div class="example"><div class="en">Don't talk.</div><div class="cn">不要说话。</div></div>
            <div class="example"><div class="en">You mustn't get up yet.</div><div class="cn">你还不能起床。</div></div>

            <div class="sub-heading">2. 肯定医嘱</div>
            <div class="example"><div class="en">Stay in bed.</div><div class="cn">卧床休息。</div></div>
            <div class="example"><div class="en">Keep the room warm.</div><div class="cn">保持房间温暖。</div></div>
            <div class="example"><div class="en">Take this medicine.</div><div class="cn">吃这个药。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. Don't vs mustn't</div>
            <div class="compare-box">
                <div class="compare-side left"><h4>Don't + 动词原形</h4>
                    <p>否定祈使句，语气较温和</p>
                    <p>Don't worry. 别担心。</p></div>
                <div class="compare-side right"><h4>mustn't + 动词原形</h4>
                    <p>表示禁止，语气更强烈</p>
                    <p>You mustn't eat that. 你绝不能吃那个。</p></div>
            </div>

            <div class="sub-heading">2. each 与 every</div>
            <table class="grammar-table"><tr><th>词</th><th>用法</th><th>例句</th></tr>
            <tr><td>each</td><td>强调个体，可作代词</td><td>Each of them has a book.</td></tr>
            <tr><td>every</td><td>强调整体，只能作形容词</td><td>Every student must come.</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. You mustn't _____ rich food.</div><div class="options">
                <button class="option-btn" data-value="A">A. eat</button><button class="option-btn" data-value="B">B. eating</button>
                <button class="option-btn" data-value="C">C. eats</button><button class="option-btn" data-value="D">D. ate</button></div>
                <div class="explanation">mustn't后接动词原形。</div></div>
        `}
    ]
},

"lesson-65-66": {
    title: "第65-66课：Not a baby / What's the time?",
    lessonRange: "L65-66",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "反身代词与时间介词",
    topics: ["反身代词", "时间介词at/on/in", "enjoy oneself"],
    sections: [
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 反身代词</div>
            <table class="grammar-table"><tr><th>人称</th><th>反身代词</th><th>含义</th></tr>
            <tr><td>I</td><td>myself</td><td>我自己</td></tr>
            <tr><td>you</td><td>yourself</td><td>你自己</td></tr>
            <tr><td>he</td><td>himself</td><td>他自己</td></tr>
            <tr><td>she</td><td>herself</td><td>她自己</td></tr>
            <tr><td>it</td><td>itself</td><td>它自己</td></tr>
            <tr><td>we</td><td>ourselves</td><td>我们自己</td></tr>
            <tr><td>they</td><td>themselves</td><td>他们自己</td></tr></table>
            <div class="example"><div class="en">Enjoy yourself! = Have a good time!</div><div class="cn">玩得开心！</div></div>
            <div class="example"><div class="en">She can dress herself.</div><div class="cn">她会自己穿衣服。</div></div>

            <div class="sub-heading">2. 时间介词 at/on/in</div>
            <table class="grammar-table"><tr><th>介词</th><th>用法</th><th>例句</th></tr>
            <tr><td>at</td><td>具体时刻</td><td>at 8 o'clock, at half past ten</td></tr>
            <tr><td>on</td><td>具体某一天</td><td>on Monday, on July 1st</td></tr>
            <tr><td>in</td><td>较长时段（月/年/季）</td><td>in January, in 2024, in summer</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="C"><div class="question">1. Enjoy _____, children!</div><div class="options">
                <button class="option-btn" data-value="A">A. yourself</button><button class="option-btn" data-value="B">B. yourselves</button>
                <button class="option-btn" data-value="C">C. yourselves</button><button class="option-btn" data-value="D">D. themselves</button></div>
                <div class="explanation">children是复数，用yourselves。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">2. He gets up _____ 7 o'clock.</div><div class="options">
                <button class="option-btn" data-value="A">A. in</button><button class="option-btn" data-value="B">B. at</button>
                <button class="option-btn" data-value="C">C. on</button><button class="option-btn" data-value="D">D. /</button></div>
                <div class="explanation">具体时刻前用at。</div></div>
        `}
    ]
},

"lesson-67-68": {
    title: "第67-68课：The weekend / What's the time?",
    lessonRange: "L67-68",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "一般过去时入门（was/were）",
    topics: ["一般过去时", "was/were", "at the butcher's", "时间介词巩固"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. was/were 过去式的be动词</div>
            <div class="formula">I/he/she/it was + ... / You/we/they were + ...</div>
            <div class="example"><div class="en">I was at the butcher's on Sunday.</div><div class="cn">我周日在肉铺。</div></div>
            <div class="example"><div class="en">Were you at the butcher's? — No, I wasn't.</div><div class="cn">你在肉铺吗？— 不，我不在。</div></div>
            <div class="example"><div class="en">They were at church on Sunday.</div><div class="cn">他们周日做礼拜。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. be动词过去式</div>
            <table class="grammar-table"><tr><th>现在时</th><th>过去时</th><th>否定过去时</th></tr>
            <tr><td>I am</td><td>I was</td><td>I was not (wasn't)</td></tr>
            <tr><td>You are</td><td>You were</td><td>You were not (weren't)</td></tr>
            <tr><td>He/She/It is</td><td>He/She/It was</td><td>He/She/It wasn't</td></tr>
            <tr><td>We/They are</td><td>We/They were</td><td>We/They weren't</td></tr></table>

            <div class="sub-heading">2. was/were的疑问句</div>
            <table class="grammar-table"><tr><th>陈述句</th><th>疑问句</th><th>简答</th></tr>
            <tr><td>He was at home.</td><td>Was he at home?</td><td>Yes, he was. / No, he wasn't.</td></tr>
            <tr><td>They were at school.</td><td>Were they at school?</td><td>Yes, they were. / No, they weren't.</td></tr></table>

            <div class="sub-heading">3. at + 名词's 表示在某店</div>
            <div class="example"><div class="en">at the butcher's（在肉铺）, at the greengrocer's（在蔬菜水果店）, at the baker's（在面包店）</div><div class="cn">'s表示"……的店铺"</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. I _____ at the butcher's yesterday.</div><div class="options">
                <button class="option-btn" data-value="A">A. was</button><button class="option-btn" data-value="B">B. were</button>
                <button class="option-btn" data-value="C">C. am</button><button class="option-btn" data-value="D">D. is</button></div>
                <div class="explanation">I的过去式be动词用was。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. — Were you at school? — No, I _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. wasn't</button><button class="option-btn" data-value="B">B. weren't</button>
                <button class="option-btn" data-value="C">C. wasn't</button><button class="option-btn" data-value="D">D. am not</button></div>
                <div class="explanation">I的否定用wasn't。</div></div>
        `}
    ]
},

"lesson-69-70": {
    title: "第69-70课：The car race / When were they?",
    lessonRange: "L69-70",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "一般过去时与方位介词",
    topics: ["一般过去时巩固", "in/on/at", "人群表达", "比赛用语"],
    sections: [
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. there be 的过去时</div>
            <table class="grammar-table"><tr><th>现在时</th><th>过去时</th></tr>
            <tr><td>There is...</td><td>There was...</td></tr>
            <tr><td>There are...</td><td>There were...</td></tr></table>
            <div class="example"><div class="en">There were hundreds of people at the race.</div><div class="cn">比赛现场有数百人。</div></div>

            <div class="sub-heading">2. 方位介词 at/in/on</div>
            <div class="example"><div class="en">at the station（在车站）, in the crowd（在人群中）, on the way home（在回家的路上）</div><div class="cn">不同语境用不同介词</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. There _____ a lot of people at the race yesterday.</div><div class="options">
                <button class="option-btn" data-value="A">A. is</button><button class="option-btn" data-value="B">B. were</button>
                <button class="option-btn" data-value="C">C. was</button><button class="option-btn" data-value="D">D. are</button></div>
                <div class="explanation">a lot of people=复数，过去时用were。</div></div>
        `}
    ]
},

"lesson-71-72": {
    title: "第71-72课：He's awful / When did you...?",
    lessonRange: "L71-72",
    badge: "l49-72",
    group: "📍 第49-72课：一般现在时与一般过去时",
    description: "一般过去时实义动词（did）",
    topics: ["一般过去时", "did", "didn't", "When did you...?"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. When did you...? 过去时特殊疑问句</div>
            <div class="formula">When did + 主语 + 动词原形？</div>
            <div class="example"><div class="en">When did you see him? — I saw him yesterday.</div><div class="cn">你什么时候见到他的？— 我昨天见到他的。</div></div>

            <div class="sub-heading">2. What did he do? 他做了什么？</div>
            <div class="example"><div class="en">He telephoned me four times yesterday.</div><div class="cn">他昨天给我打了四次电话。</div></div>
            <div class="example"><div class="en">Did he telephone again last night? — Yes, he did.</div><div class="cn">他昨晚又打电话了吗？— 是的。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 实义动词过去式规则</div>
            <table class="grammar-table"><tr><th>规则</th><th>方法</th><th>例词</th></tr>
            <tr><td>一般情况</td><td>加-ed</td><td>work→worked, play→played</td></tr>
            <tr><td>以e结尾</td><td>加-d</td><td>live→lived, arrive→arrived</td></tr>
            <tr><td>辅音+y结尾</td><td>变y为i加-ed</td><td>study→studied, carry→carried</td></tr>
            <tr><td>重读闭音节结尾</td><td>双写末尾加-ed</td><td>stop→stopped, plan→planned</td></tr></table>

            <div class="sub-heading">2. 常见不规则过去式</div>
            <table class="grammar-table"><tr><th>原形</th><th>过去式</th><th>原形</th><th>过去式</th></tr>
            <tr><td>go</td><td>went</td><td>see</td><td>saw</td></tr>
            <tr><td>come</td><td>came</td><td>take</td><td>took</td></tr>
            <tr><td>have</td><td>had</td><td>give</td><td>gave</td></tr>
            <tr><td>do</td><td>did</td><td>say</td><td>said</td></tr>
            <tr><td>get</td><td>got</td><td>make</td><td>made</td></tr>
            <tr><td>buy</td><td>bought</td><td>think</td><td>thought</td></tr>
            <tr><td>speak</td><td>spoke</td><td>write</td><td>wrote</td></tr></table>

            <div class="sub-heading">3. 一般过去时的句式</div>
            <table class="grammar-table"><tr><th>类型</th><th>句型</th><th>例句</th></tr>
            <tr><td>肯定</td><td>S + V-ed/不规则</td><td>He telephoned me.</td></tr>
            <tr><td>否定</td><td>S + didn't + V原形</td><td>He didn't telephone me.</td></tr>
            <tr><td>疑问</td><td>Did + S + V原形?</td><td>Did he telephone you?</td></tr>
            <tr><td>特殊疑问</td><td>Wh- + did + S + V原形?</td><td>When did he telephone?</td></tr></table>
            <div class="warning-box">过去时否定/疑问中，did后动词恢复原形！He didn't go（不是went）</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. He _____ me yesterday. (telephone)</div><div class="options">
                <button class="option-btn" data-value="A">A. telephone</button><button class="option-btn" data-value="B">B. telephoned</button>
                <button class="option-btn" data-value="C">C. telephoning</button><button class="option-btn" data-value="D">D. telephones</button></div>
                <div class="explanation">yesterday表示过去，用过去式telephoned。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. — Did she go to school? — No, she _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. didn't went</button><button class="option-btn" data-value="B">B. didn't goes</button>
                <button class="option-btn" data-value="C">C. didn't go</button><button class="option-btn" data-value="D">D. doesn't go</button></div>
                <div class="explanation">did后接动词原形go。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">3. She _____ to the park last Sunday. (go)</div><div class="options">
                <button class="option-btn" data-value="A">A. went</button><button class="option-btn" data-value="B">B. go</button>
                <button class="option-btn" data-value="C">C. goes</button><button class="option-btn" data-value="D">D. going</button></div>
                <div class="explanation">go的过去式是不规则变化went。</div></div>
        `}
    ]
}

};
