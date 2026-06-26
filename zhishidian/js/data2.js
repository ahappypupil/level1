/**
 * 新概念英语第一册 数据文件2：第25-48课
 * 现在进行时、there be、情态动词、一般现在时
 */
var DATA2 = {

"lesson-25-26": {
    title: "第25-26课：Mrs. Smith's kitchen / Where is it?",
    lessonRange: "L25-26",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "There is/are句型与方位介词",
    topics: ["There is/are", "方位介词", "a/some", "可数与不可数"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. There is/are ... 表示"存在"</div>
            <div class="formula">There is + 单数名词/不可数名词 / There are + 复数名词</div>
            <div class="example"><div class="en">There is a refrigerator in the kitchen.</div><div class="cn">厨房里有一台冰箱。</div></div>
            <div class="example"><div class="en">There are some books on the shelf.</div><div class="cn">架子上有一些书。</div></div>

            <div class="sub-heading">2. Where is it? 询问位置</div>
            <div class="formula">Where is + 单数？ / Where are + 复数？</div>
            <div class="example"><div class="en">Where is the cup? — It's on the table.</div><div class="cn">杯子在哪？— 在桌子上。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. There be 句型</div>
            <table class="grammar-table"><tr><th>句型</th><th>含义</th><th>例句</th></tr>
            <tr><td>There is + 单数</td><td>有一个……</td><td>There is a cup on the table.</td></tr>
            <tr><td>There is + 不可数</td><td>有一些……</td><td>There is some water in the glass.</td></tr>
            <tr><td>There are + 复数</td><td>有一些……</td><td>There are some magazines on the desk.</td></tr></table>
            <div class="tip-box">There be表示"某地有某物"，have表示"某人拥有"。</div>

            <div class="sub-heading">2. a/an vs some</div>
            <table class="grammar-table"><tr><th>用法</th><th>例词</th></tr>
            <tr><td>a/an + 单数可数名词</td><td>a cup, an egg</td></tr>
            <tr><td>some + 不可数名词/复数可数名词</td><td>some water, some books</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. There _____ a refrigerator in the kitchen.</div><div class="options">
                <button class="option-btn" data-value="A">A. is</button><button class="option-btn" data-value="B">B. are</button>
                <button class="option-btn" data-value="C">C. has</button><button class="option-btn" data-value="D">D. have</button></div>
                <div class="explanation">a refrigerator是单数，用There is。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. There are _____ books on the shelf.</div><div class="options">
                <button class="option-btn" data-value="A">A. a</button><button class="option-btn" data-value="B">B. an</button>
                <button class="option-btn" data-value="C">C. some</button><button class="option-btn" data-value="D">D. the</button></div>
                <div class="explanation">复数books前用some表示"一些"。</div></div>
        `}
    ]
},

"lesson-27-28": {
    title: "第27-28课：Mrs. Smith's living room / Where are they?",
    lessonRange: "L27-28",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "There are与复数方位表达",
    topics: ["There are", "方位介词综合", "near/behind/in front of"],
    sections: [
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. There be就近原则</div>
            <div class="tip-box">There be句型中，be动词由最靠近它的名词决定（就近原则）。</div>
            <div class="example"><div class="en">There is a pen and two books on the desk.</div><div class="cn">桌上有一支钢笔和两本书。（a pen最近，用is）</div></div>
            <div class="example"><div class="en">There are two books and a pen on the desk.</div><div class="cn">桌上有两本书和一支钢笔。（two books最近，用are）</div></div>

            <div class="sub-heading">2. 方位介词综合</div>
            <table class="grammar-table"><tr><th>介词</th><th>含义</th><th>例句</th></tr>
            <tr><td>in</td><td>在……里</td><td>The cat is in the room.</td></tr>
            <tr><td>on</td><td>在……上</td><td>The book is on the desk.</td></tr>
            <tr><td>under</td><td>在……下</td><td>The ball is under the chair.</td></tr>
            <tr><td>behind</td><td>在……后</td><td>The garden is behind the house.</td></tr>
            <tr><td>near</td><td>在……附近</td><td>The table is near the window.</td></tr>
            <tr><td>in front of</td><td>在……前面</td><td>There is a tree in front of the house.</td></tr></table>

            <div class="sub-heading">3. There be否定与疑问</div>
            <table class="grammar-table"><tr><th>类型</th><th>句型</th><th>例句</th></tr>
            <tr><td>否定</td><td>There isn't/aren't...</td><td>There isn't a book on the desk.</td></tr>
            <tr><td>疑问</td><td>Is/Are there...?</td><td>Is there a book on the desk?</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. There _____ a desk and two chairs in the room.</div><div class="options">
                <button class="option-btn" data-value="A">A. is</button><button class="option-btn" data-value="B">B. are</button>
                <button class="option-btn" data-value="C">C. has</button><button class="option-btn" data-value="D">D. have</button></div>
                <div class="explanation">就近原则：a desk最近，用is。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">2. The car is _____ the house.</div><div class="options">
                <button class="option-btn" data-value="A">A. in</button><button class="option-btn" data-value="B">B. behind</button>
                <button class="option-btn" data-value="C">C. on</button><button class="option-btn" data-value="D">D. under</button></div>
                <div class="explanation">在房子后面用behind。</div></div>
        `}
    ]
},

"lesson-29-30": {
    title: "第29-30课：Come in, Amy / What must I do?",
    lessonRange: "L29-30",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "祈使句与must表示必须",
    topics: ["祈使句", "must", "What must I do?", "Open/Shut"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 祈使句（命令/请求）</div>
            <div class="formula">动词原形 + 宾语</div>
            <div class="example"><div class="en">Come in, Amy.</div><div class="cn">进来，艾米。</div></div>
            <div class="example"><div class="en">Open the window.</div><div class="cn">打开窗户。</div></div>
            <div class="example"><div class="en">Shut the door.</div><div class="cn">关上门。</div></div>

            <div class="sub-heading">2. What must I do? 我必须做什么？</div>
            <div class="example"><div class="en">What must I do? — Open the window and air the room.</div><div class="cn">我必须做什么？— 打开窗户给房间通风。</div></div>
            <div class="example"><div class="en">You must clean the room.</div><div class="cn">你必须打扫房间。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. must 情态动词</div>
            <div class="formula">must + 动词原形（表示必须/应当）</div>
            <table class="grammar-table"><tr><th>肯定</th><th>含义</th><th>否定</th><th>含义</th></tr>
            <tr><td>must do</td><td>必须做</td><td>must not (mustn't) do</td><td>不准做/禁止做</td></tr></table>
            <div class="example"><div class="en">You must clean the room.</div><div class="cn">你必须打扫房间。</div></div>
            <div class="example"><div class="en">You mustn't open the door.</div><div class="cn">你不准开门。</div></div>
            <div class="warning-box">mustn't表示"禁止"，而不是"不必"。"不必"用needn't或don't have to。</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. You must _____ the room.</div><div class="options">
                <button class="option-btn" data-value="A">A. cleaning</button><button class="option-btn" data-value="B">B. clean</button>
                <button class="option-btn" data-value="C">C. cleans</button><button class="option-btn" data-value="D">D. cleaned</button></div>
                <div class="explanation">must后接动词原形。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. _____ the window, please.</div><div class="options">
                <button class="option-btn" data-value="A">A. Open</button><button class="option-btn" data-value="B">B. Opens</button>
                <button class="option-btn" data-value="C">C. Opening</button><button class="option-btn" data-value="D">D. To open</button></div>
                <div class="explanation">祈使句用动词原形Open。</div></div>
        `}
    ]
},

"lesson-31-32": {
    title: "第31-32课：Where's Sally? / What's he/she/it doing?",
    lessonRange: "L31-32",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "现在进行时（正在做某事）",
    topics: ["现在进行时", "be+doing", "What's he doing?"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 现在进行时：正在做某事</div>
            <div class="formula">主语 + be (am/is/are) + 动词ing</div>
            <div class="example"><div class="en">She is sitting under the tree.</div><div class="cn">她正坐在树下。</div></div>
            <div class="example"><div class="en">He is climbing the tree.</div><div class="cn">他正在爬树。</div></div>

            <div class="sub-heading">2. What's he/she doing? 询问正在做什么</div>
            <div class="example"><div class="en">What's she doing? — She's sitting in the garden.</div><div class="cn">她在做什么？— 她正坐在花园里。</div></div>
            <div class="example"><div class="en">What are they doing? — They're running across the grass.</div><div class="cn">他们在做什么？— 他们正跑过草地。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 现在分词(动词ing)的构成规则</div>
            <table class="grammar-table"><tr><th>规则</th><th>方法</th><th>例词</th></tr>
            <tr><td>一般情况</td><td>加-ing</td><td>read→reading, walk→walking</td></tr>
            <tr><td>以不发音e结尾</td><td>去e加-ing</td><td>make→making, write→writing</td></tr>
            <tr><td>重读闭音节结尾</td><td>双写末尾字母加-ing</td><td>run→running, sit→sitting, swim→swimming</td></tr>
            <tr><td>以ie结尾</td><td>变ie为y加-ing</td><td>lie→lying, die→dying</td></tr></table>

            <div class="sub-heading">2. 现在进行时的各种句式</div>
            <table class="grammar-table"><tr><th>类型</th><th>句型</th><th>例句</th></tr>
            <tr><td>肯定</td><td>S + be + doing</td><td>She is reading a book.</td></tr>
            <tr><td>否定</td><td>S + be + not + doing</td><td>She isn't reading a book.</td></tr>
            <tr><td>疑问</td><td>Be + S + doing?</td><td>Is she reading a book?</td></tr>
            <tr><td>特殊疑问</td><td>What + be + S + doing?</td><td>What is she doing?</td></tr></table>

            <div class="sub-heading">3. 现在进行时的时间标志</div>
            <div class="tip-box">now, right now, at the moment, Look!, Listen! 等提示词常与现在进行时连用。</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="C"><div class="question">1. She _____ sitting under the tree.</div><div class="options">
                <button class="option-btn" data-value="A">A. am</button><button class="option-btn" data-value="B">B. are</button>
                <button class="option-btn" data-value="C">C. is</button><button class="option-btn" data-value="D">D. be</button></div>
                <div class="explanation">She是第三人称单数，be动词用is。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. He is _____ the tree.</div><div class="options">
                <button class="option-btn" data-value="A">A. climbing</button><button class="option-btn" data-value="B">B. climb</button>
                <button class="option-btn" data-value="C">C. climbs</button><button class="option-btn" data-value="D">D. climbed</button></div>
                <div class="explanation">现在进行时be+doing，climb去e加ing不对，直接加ing：climbing。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">3. The dog is _____ across the grass. (run)</div><div class="options">
                <button class="option-btn" data-value="A">A. runing</button><button class="option-btn" data-value="B">B. running</button>
                <button class="option-btn" data-value="C">C. run</button><button class="option-btn" data-value="D">D. runs</button></div>
                <div class="explanation">run是重读闭音节，双写n加ing：running。</div></div>
        `}
    ]
},

"lesson-33-34": {
    title: "第33-34课：A fine day / What are they doing?",
    lessonRange: "L33-34",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "现在进行时综合练习与介词短语",
    topics: ["现在进行时综合", "across/along/over/under", "with用法"],
    sections: [
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 介词表达运动方向</div>
            <table class="grammar-table"><tr><th>介词</th><th>含义</th><th>例句</th></tr>
            <tr><td>across</td><td>横过/穿过（表面）</td><td>The cat is running across the grass.</td></tr>
            <tr><td>along</td><td>沿着</td><td>He is walking along the river.</td></tr>
            <tr><td>over</td><td>越过/在上方</td><td>The plane is flying over the river.</td></tr>
            <tr><td>under</td><td>在下方</td><td>The ship is going under the bridge.</td></tr>
            <tr><td>into</td><td>进入</td><td>She is going into the shop.</td></tr>
            <tr><td>out of</td><td>从……出来</td><td>He is coming out of the school.</td></tr></table>

            <div class="sub-heading">2. with的用法</div>
            <div class="example"><div class="en">He is with his family.（和……一起）</div><div class="cn">他和家人在一起。</div></div>
            <div class="example"><div class="en">Cut it with a knife.（用……工具）</div><div class="cn">用刀切开它。</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. The plane is flying _____ the river.</div><div class="options">
                <button class="option-btn" data-value="A">A. over</button><button class="option-btn" data-value="B">B. under</button>
                <button class="option-btn" data-value="C">C. across</button><button class="option-btn" data-value="D">D. along</button></div>
                <div class="explanation">飞机在河上方飞过，用over。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. She is walking _____ the road.</div><div class="options">
                <button class="option-btn" data-value="A">A. over</button><button class="option-btn" data-value="B">B. under</button>
                <button class="option-btn" data-value="C">C. along</button><button class="option-btn" data-value="D">D. into</button></div>
                <div class="explanation">沿着路走用along。</div></div>
        `}
    ]
},

"lesson-35-36": {
    title: "第35-36课：Our village / Where...?",
    lessonRange: "L35-36",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "现在进行时与between/among等介词",
    topics: ["between/among", "beside/near", "现在进行时巩固"],
    sections: [
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. between 与 among</div>
            <table class="grammar-table"><tr><th>介词</th><th>用法</th><th>例句</th></tr>
            <tr><td>between</td><td>在两者之间</td><td>The house is between the two trees.</td></tr>
            <tr><td>among</td><td>在三者或以上之间</td><td>She is sitting among the children.</td></tr></table>

            <div class="sub-heading">2. beside 与 besides</div>
            <table class="grammar-table"><tr><th>词</th><th>含义</th><th>例句</th></tr>
            <tr><td>beside</td><td>在……旁边</td><td>He is sitting beside his mother.</td></tr>
            <tr><td>besides</td><td>除了……还</td><td>Besides English, he studies French.</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. The village is _____ two hills.</div><div class="options">
                <button class="option-btn" data-value="A">A. between</button><button class="option-btn" data-value="B">B. among</button>
                <button class="option-btn" data-value="C">C. beside</button><button class="option-btn" data-value="D">D. along</button></div>
                <div class="explanation">两座山之间用between。</div></div>
        `}
    ]
},

"lesson-37-38": {
    title: "第37-38课：Making a bookcase / What are you going to do?",
    lessonRange: "L37-38",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "be going to 表示将来打算",
    topics: ["be going to", "将来打算", "What are you going to do?"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. be going to 打算/准备做某事</div>
            <div class="formula">主语 + be going to + 动词原形</div>
            <div class="example"><div class="en">I'm going to make a bookcase.</div><div class="cn">我打算做一个书架。</div></div>
            <div class="example"><div class="en">What are you going to do? — I'm going to paint it.</div><div class="cn">你打算做什么？— 我打算给它刷漆。</div></div>

            <div class="sub-heading">2. What colour are you going to paint it?</div>
            <div class="example"><div class="en">I'm going to paint it pink.</div><div class="cn">我打算把它漆成粉色。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. be going to 的各种句式</div>
            <table class="grammar-table"><tr><th>类型</th><th>句型</th><th>例句</th></tr>
            <tr><td>肯定</td><td>S + be going to + V</td><td>I am going to read a book.</td></tr>
            <tr><td>否定</td><td>S + be not going to + V</td><td>I'm not going to read a book.</td></tr>
            <tr><td>疑问</td><td>Be + S going to + V?</td><td>Are you going to read a book?</td></tr>
            <tr><td>特殊疑问</td><td>Wh- + be + S going to + V?</td><td>What are you going to do?</td></tr></table>

            <div class="sub-heading">2. be going to vs 现在进行时</div>
            <div class="compare-box">
                <div class="compare-side left"><h4>be going to</h4>
                    <p>表示打算/计划要做的事</p>
                    <p>I'm going to paint the door.（我打算漆门）</p></div>
                <div class="compare-side right"><h4>现在进行时</h4>
                    <p>表示此刻正在做的事</p>
                    <p>I'm painting the door.（我正在漆门）</p></div>
            </div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. She is going to _____ a bookcase.</div><div class="options">
                <button class="option-btn" data-value="A">A. making</button><button class="option-btn" data-value="B">B. make</button>
                <button class="option-btn" data-value="C">C. makes</button><button class="option-btn" data-value="D">D. made</button></div>
                <div class="explanation">be going to后接动词原形make。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. — What are you going to do? — I'm going to _____ it pink.</div><div class="options">
                <button class="option-btn" data-value="A">A. paint</button><button class="option-btn" data-value="B">B. colour</button>
                <button class="option-btn" data-value="C">C. paint</button><button class="option-btn" data-value="D">D. painting</button></div>
                <div class="explanation">paint it pink = 把它漆成粉色。paint sth. + 颜色。</div></div>
        `}
    ]
},

"lesson-39-40": {
    title: "第39-40课：Don't drop it! / What are you going to do?",
    lessonRange: "L39-40",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "否定祈使句与be going to综合",
    topics: ["Don't...", "否定祈使句", "be going to", "be careful"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. Don't... 不要……</div>
            <div class="formula">Don't + 动词原形</div>
            <div class="example"><div class="en">Don't drop it!</div><div class="cn">别摔了它！</div></div>
            <div class="example"><div class="en">Don't put it there.</div><div class="cn">别放在那儿。</div></div>
            <div class="example"><div class="en">Be careful!</div><div class="cn">小心！</div></div>

            <div class="sub-heading">2. 给建议/指令</div>
            <div class="example"><div class="en">Put it on this table.</div><div class="cn">把它放在这张桌子上。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 祈使句肯定与否定对比</div>
            <table class="grammar-table"><tr><th>肯定祈使句</th><th>否定祈使句</th></tr>
            <tr><td>Open the window.</td><td>Don't open the window.</td></tr>
            <tr><td>Come in.</td><td>Don't come in.</td></tr>
            <tr><td>Be careful.</td><td>Don't be careless.</td></tr>
            <tr><td>Give me that book.</td><td>Don't give me that book.</td></tr></table>

            <div class="sub-heading">2. be going to 与 Don't 的结合</div>
            <div class="example"><div class="en">Are you going to put it here? — Don't put it there. Put it here.</div><div class="cn">你打算放这儿吗？— 别放那里。放这儿。</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. _____ drop the vase!</div><div class="options">
                <button class="option-btn" data-value="A">A. Don't</button><button class="option-btn" data-value="B">B. Not</button>
                <button class="option-btn" data-value="C">C. Doesn't</button><button class="option-btn" data-value="D">D. No</button></div>
                <div class="explanation">否定祈使句用Don't + 动词原形。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. She _____ going to make a cake.</div><div class="options">
                <button class="option-btn" data-value="A">A. am</button><button class="option-btn" data-value="B">B. are</button>
                <button class="option-btn" data-value="C">C. is</button><button class="option-btn" data-value="D">D. be</button></div>
                <div class="explanation">She是第三人称单数，用is going to。</div></div>
        `}
    ]
},

"lesson-41-42": {
    title: "第41-42课：Penny's bag / Is there a...?",
    lessonRange: "L41-42",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "不可数名词与some/any",
    topics: ["不可数名词", "some/any", "Is there...?", "a piece of"],
    sections: [
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 可数名词与不可数名词</div>
            <table class="grammar-table"><tr><th>类型</th><th>特点</th><th>例词</th></tr>
            <tr><td>可数名词</td><td>有单复数形式，可用a/an/数字修饰</td><td>book→books, egg→eggs</td></tr>
            <tr><td>不可数名词</td><td>无复数形式，不能用a/an修饰</td><td>water, milk, bread, cheese, soap, tea, coffee</td></tr></table>
            <div class="warning-box">不可数名词不能直接加s，也不能用a/an修饰！不能说 a water ❌，要说 some water ✅</div>

            <div class="sub-heading">2. 不可数名词的量词表达</div>
            <table class="grammar-table"><tr><th>表达</th><th>含义</th></tr>
            <tr><td>a piece of bread</td><td>一块面包</td></tr>
            <tr><td>a piece of cheese</td><td>一块奶酪</td></tr>
            <tr><td>a bar of soap</td><td>一条肥皂</td></tr>
            <tr><td>a bottle of milk</td><td>一瓶牛奶</td></tr>
            <tr><td>a pound of sugar</td><td>一磅糖</td></tr>
            <tr><td>a cup of tea</td><td>一杯茶</td></tr></table>

            <div class="sub-heading">3. some 与 any</div>
            <table class="grammar-table"><tr><th>词</th><th>用法</th><th>例句</th></tr>
            <tr><td>some</td><td>肯定句中</td><td>There is some water in the glass.</td></tr>
            <tr><td>any</td><td>否定句和疑问句中</td><td>Is there any water? There isn't any water.</td></tr></table>
            <div class="tip-box">some/any既可修饰可数复数也可修饰不可数名词。</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. There is _____ bread on the table.</div><div class="options">
                <button class="option-btn" data-value="A">A. a</button><button class="option-btn" data-value="B">B. some</button>
                <button class="option-btn" data-value="C">C. an</button><button class="option-btn" data-value="D">D. two</button></div>
                <div class="explanation">bread不可数，不能用a/an修饰，用some。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. Is there _____ milk in the bottle?</div><div class="options">
                <button class="option-btn" data-value="A">A. any</button><button class="option-btn" data-value="B">B. some</button>
                <button class="option-btn" data-value="C">C. a</button><button class="option-btn" data-value="D">D. an</button></div>
                <div class="explanation">疑问句中用any代替some。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">3. Can I have _____ cheese?</div><div class="options">
                <button class="option-btn" data-value="A">A. a</button><button class="option-btn" data-value="B">B. an</button>
                <button class="option-btn" data-value="C">C. some</button><button class="option-btn" data-value="D">D. two</button></div>
                <div class="explanation">表示请求时，疑问句也可用some（期待肯定回答）。</div></div>
        `}
    ]
},

"lesson-43-44": {
    title: "第43-44课：Hurry up! / Are there any...?",
    lessonRange: "L43-44",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "祈使句与some/any综合",
    topics: ["Hurry up", "Can you...?", "some/any巩固", "不可数名词综合"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. Can you...? 请求</div>
            <div class="formula">Can you + 动词原形？</div>
            <div class="example"><div class="en">Can you make the tea, Sam?</div><div class="cn">你会泡茶吗，萨姆？</div></div>
            <div class="example"><div class="en">Yes, of course I can.</div><div class="cn">是的，当然会。</div></div>

            <div class="sub-heading">2. Is there any...? / Are there any...?</div>
            <div class="example"><div class="en">Is there any water in this kettle?</div><div class="cn">这个水壶里有水吗？</div></div>
            <div class="example"><div class="en">There's some in the cupboard.</div><div class="cn">碗橱里有一些。</div></div>

            <div class="sub-heading">3. Hurry up! 赶快！</div>
            <div class="example"><div class="en">Hurry up! The tea is ready.</div><div class="cn">赶快！茶准备好了。</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. Are there _____ biscuits in the tin?</div><div class="options">
                <button class="option-btn" data-value="A">A. some</button><button class="option-btn" data-value="B">B. any</button>
                <button class="option-btn" data-value="C">C. a</button><button class="option-btn" data-value="D">D. an</button></div>
                <div class="explanation">疑问句中用any。</div></div>
        `}
    ]
},

"lesson-45-46": {
    title: "第45-46课：The boss's letter / Can you...?",
    lessonRange: "L45-46",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "can表示能力与请求",
    topics: ["can", "can't", "Can you...?", "能力与请求"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. can 表示能力</div>
            <div class="formula">主语 + can + 动词原形</div>
            <div class="example"><div class="en">I can type this letter.</div><div class="cn">我能打这封信。</div></div>
            <div class="example"><div class="en">She can't read this word.</div><div class="cn">她读不出这个词。</div></div>

            <div class="sub-heading">2. Can you...? 请求/询问能力</div>
            <div class="example"><div class="en">Can you come here a minute, please?</div><div class="cn">你能过来一下吗？</div></div>
            <div class="example"><div class="en">Can you type this letter for me?</div><div class="cn">你能帮我打这封信吗？</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. can 的各种句式</div>
            <table class="grammar-table"><tr><th>类型</th><th>句型</th><th>例句</th></tr>
            <tr><td>肯定</td><td>S + can + V</td><td>I can swim.</td></tr>
            <tr><td>否定</td><td>S + cannot/can't + V</td><td>I can't swim.</td></tr>
            <tr><td>疑问</td><td>Can + S + V?</td><td>Can you swim?</td></tr></table>
            <div class="tip-box">can没有人称变化（I can, he can, they can都一样），后接动词原形。</div>

            <div class="sub-heading">2. can vs must</div>
            <div class="compare-box">
                <div class="compare-side left"><h4>can — 能力/许可</h4>
                    <p>I can swim. 我会游泳。</p>
                    <p>Can I go? 我可以走吗？</p></div>
                <div class="compare-side right"><h4>must — 必须/禁止</h4>
                    <p>You must go. 你必须走。</p>
                    <p>You mustn't go. 你不准走。</p></div>
            </div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. She _____ speak English.</div><div class="options">
                <button class="option-btn" data-value="A">A. can</button><button class="option-btn" data-value="B">B. cans</button>
                <button class="option-btn" data-value="C">C. can to</button><button class="option-btn" data-value="D">D. is can</button></div>
                <div class="explanation">can后接动词原形，can没有人称变化。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. — Can you type this letter? — No, I _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. don't</button><button class="option-btn" data-value="B">B. am not</button>
                <button class="option-btn" data-value="C">C. can't</button><button class="option-btn" data-value="D">D. mustn't</button></div>
                <div class="explanation">can的否定回答用No, I can't.</div></div>
        `}
    ]
},

"lesson-47-48": {
    title: "第47-48课：A cup of coffee / Do you like...?",
    lessonRange: "L47-48",
    badge: "l25-48",
    group: "📍 第25-48课：现在进行时与there be",
    description: "like/want与一般现在时入门",
    topics: ["like/want", "一般现在时入门", "Do you like...?", "可数/不可数巩固"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. Do you like...? 你喜欢……吗？</div>
            <div class="formula">Do you like + 名词/动名词？</div>
            <div class="example"><div class="en">Do you like coffee? — Yes, I do. / No, I don't.</div><div class="cn">你喜欢咖啡吗？— 是的。/ 不。</div></div>
            <div class="example"><div class="en">Do you want a cup?</div><div class="cn">你想要一杯吗？</div></div>

            <div class="sub-heading">2. like vs want</div>
            <table class="grammar-table"><tr><th>动词</th><th>含义</th><th>例句</th></tr>
            <tr><td>like</td><td>喜欢</td><td>I like black coffee.</td></tr>
            <tr><td>want</td><td>想要</td><td>I want some sugar.</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 一般现在时初步</div>
            <div class="formula">主语 + 动词原形（第三人称单数加s/es）</div>
            <table class="grammar-table"><tr><th>主语</th><th>动词形式</th><th>例句</th></tr>
            <tr><td>I/You/We/They</td><td>动词原形</td><td>I like coffee. They want tea.</td></tr>
            <tr><td>He/She/It</td><td>动词+s/es</td><td>He likes coffee. She wants tea.</td></tr></table>

            <div class="sub-heading">2. 助动词do/does构成疑问和否定</div>
            <table class="grammar-table"><tr><th>类型</th><th>句型</th><th>例句</th></tr>
            <tr><td>疑问</td><td>Do + S + V?</td><td>Do you like coffee?</td></tr>
            <tr><td>否定</td><td>S + don't + V</td><td>I don't like coffee.</td></tr>
            <tr><td>疑问(三单)</td><td>Does + S + V?</td><td>Does he like coffee?</td></tr>
            <tr><td>否定(三单)</td><td>S + doesn't + V</td><td>He doesn't like coffee.</td></tr></table>
            <div class="tip-box">第三人称单数用does，后面动词恢复原形！Does he like（不是likes）</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. She _____ black coffee.</div><div class="options">
                <button class="option-btn" data-value="A">A. like</button><button class="option-btn" data-value="B">B. likes</button>
                <button class="option-btn" data-value="C">C. liking</button><button class="option-btn" data-value="D">D. liked</button></div>
                <div class="explanation">She是第三人称单数，动词加s：likes。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. — Do you like biscuits? — _____</div><div class="options">
                <button class="option-btn" data-value="A">A. Yes, I do.</button><button class="option-btn" data-value="B">B. Yes, I like.</button>
                <button class="option-btn" data-value="C">C. Yes, I am.</button><button class="option-btn" data-value="D">D. Yes, I does.</button></div>
                <div class="explanation">Do you...? 回答用Yes, I do. / No, I don't.</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">3. He doesn't _____ sugar in his coffee.</div><div class="options">
                <button class="option-btn" data-value="A">A. likes</button><button class="option-btn" data-value="B">B. liking</button>
                <button class="option-btn" data-value="C">C. like</button><button class="option-btn" data-value="D">D. liked</button></div>
                <div class="explanation">doesn't后接动词原形like。</div></div>
        `}
    ]
}

};
