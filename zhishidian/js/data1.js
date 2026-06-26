/**
 * 新概念英语第一册 数据文件1：第1-24课
 * 基础be动词、代词、名词复数、指示代词、颜色、国籍
 */
var DATA1 = {

"lesson-1-2": {
    title: "第1-2课：Excuse me / Is this your...?",
    lessonRange: "L1-2",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "基础问候、道歉与询问物品归属",
    topics: ["Excuse me", "Is this your...?", "指示代词this", "物主代词my/your"],
    sections: [
        {type:"lesson", icon:"📖", title:"课文要点", content:`
            <p>第1课学习如何引起别人注意和道歉，第2课学习询问物品归属。</p>
            <div class="example"><div class="en">Excuse me!</div><div class="cn">打扰一下！</div></div>
            <div class="example"><div class="en">Is this your handbag?</div><div class="cn">这是你的手提包吗？</div></div>
            <div class="example"><div class="en">Pardon?</div><div class="cn">请再说一遍？</div></div>
        `},
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. Excuse me 打扰/劳驾</div>
            <div class="formula">Excuse me + 请求/问询</div>
            <div class="example"><div class="en">Excuse me, is this your book?</div><div class="cn">打扰一下，这是你的书吗？</div></div>
            <div class="example"><div class="en">Excuse me, where is the station?</div><div class="cn">打扰一下，车站在哪里？</div></div>
            <div class="tip-box">Excuse me用于请求帮助前；Sorry用于做错事后道歉。</div>

            <div class="sub-heading">2. Is this your...? 询问物品归属</div>
            <div class="formula">Is this your + 名词？</div>
            <div class="example"><div class="en">Is this your umbrella?</div><div class="cn">这是你的雨伞吗？</div></div>
            <div class="example"><div class="en">— Yes, it is. / — No, it isn't.</div><div class="cn">— 是的。/ — 不是。</div></div>

            <div class="sub-heading">3. 常用口语</div>
            <div class="example"><div class="en">Thank you very much.</div><div class="cn">非常感谢。</div></div>
            <div class="example"><div class="en">I beg your pardon?</div><div class="cn">请您再说一遍？</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 指示代词 this/that</div>
            <table class="grammar-table"><tr><th>代词</th><th>含义</th><th>用法</th></tr>
            <tr><td>this</td><td>这个</td><td>指近处的单数事物</td></tr>
            <tr><td>that</td><td>那个</td><td>指远处的单数事物</td></tr></table>
            <div class="example"><div class="en">This is my book.</div><div class="cn">这是我的书。</div></div>

            <div class="sub-heading">2. 物主代词</div>
            <table class="grammar-table"><tr><th>人称</th><th>形容词性物主代词</th><th>含义</th></tr>
            <tr><td>第一人称</td><td>my</td><td>我的</td></tr>
            <tr><td>第二人称</td><td>your</td><td>你的</td></tr>
            <tr><td>第三人称</td><td>his / her</td><td>他的 / 她的</td></tr></table>
            <div class="example"><div class="en">This is my handbag.</div><div class="cn">这是我的手提包。</div></div>

            <div class="sub-heading">3. be动词的基本形式</div>
            <table class="grammar-table"><tr><th>主语</th><th>be动词</th><th>缩写</th></tr>
            <tr><td>I</td><td>am</td><td>I'm</td></tr>
            <tr><td>You</td><td>are</td><td>You're</td></tr>
            <tr><td>He/She/It</td><td>is</td><td>He's/She's/It's</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. — Is this your book? — _____</div><div class="options">
                <button class="option-btn" data-value="A">A. Yes, it is.</button><button class="option-btn" data-value="B">B. Yes, this is.</button>
                <button class="option-btn" data-value="C">C. Yes, it's.</button><button class="option-btn" data-value="D">D. Yes, I am.</button></div>
                <div class="explanation">回答Is this...?时用it代替this，肯定回答Yes, it is.（is不能缩写）</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. _____ me, is this your pen?</div><div class="options">
                <button class="option-btn" data-value="A">A. Sorry</button><button class="option-btn" data-value="B">B. Pardon</button>
                <button class="option-btn" data-value="C">C. Excuse</button><button class="option-btn" data-value="D">D. Forgive</button></div>
                <div class="explanation">"Excuse me"是固定搭配，用于引起注意。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">3. This is _____ handbag.</div><div class="options">
                <button class="option-btn" data-value="A">A. I</button><button class="option-btn" data-value="B">B. my</button>
                <button class="option-btn" data-value="C">C. me</button><button class="option-btn" data-value="D">D. mine</button></div>
                <div class="explanation">名词前用形容词性物主代词my。</div></div>
        `}
    ]
},

"lesson-3-4": {
    title: "第3-4课：Sorry, sir / Is this your...?",
    lessonRange: "L3-4",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "道歉与确认物品，be动词否定形式",
    topics: ["Sorry", "Here is...", "be动词否定", "名词所有格"],
    sections: [
        {type:"lesson", icon:"📖", title:"课文要点", content:`
            <p>第3课学习道歉和确认物品，第4课继续练习Is this your...?句型。</p>
            <div class="example"><div class="en">My coat and my umbrella, please.</div><div class="cn">请把我的外套和雨伞给我。</div></div>
            <div class="example"><div class="en">Here is my ticket.</div><div class="cn">这是我的票。</div></div>
            <div class="example"><div class="en">This is not my umbrella.</div><div class="cn">这不是我的雨伞。</div></div>
        `},
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 名词 + please 请给我……</div>
            <div class="example"><div class="en">My coat, please.</div><div class="cn">请给我我的外套。</div></div>
            <div class="example"><div class="en">Two coffees, please.</div><div class="cn">请来两杯咖啡。</div></div>

            <div class="sub-heading">2. Here is... 这是……</div>
            <div class="formula">Here is + 名词.</div>
            <div class="example"><div class="en">Here is my ticket.</div><div class="cn">这是我的票。</div></div>
            <div class="example"><div class="en">Here is your umbrella.</div><div class="cn">这是你的雨伞。</div></div>

            <div class="sub-heading">3. This is not... 这不是……</div>
            <div class="example"><div class="en">This is not my umbrella.</div><div class="cn">这不是我的雨伞。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. be动词的否定形式</div>
            <table class="grammar-table"><tr><th>肯定</th><th>否定</th><th>缩写否定</th></tr>
            <tr><td>I am</td><td>I am not</td><td>I'm not</td></tr>
            <tr><td>You are</td><td>You are not</td><td>You aren't</td></tr>
            <tr><td>He/She/It is</td><td>He/She/It is not</td><td>He/She/It isn't</td></tr></table>

            <div class="sub-heading">2. 名词所有格</div>
            <div class="formula">名词 +'s 表示"……的"</div>
            <div class="example"><div class="en">This is Steven's umbrella.</div><div class="cn">这是史蒂文的雨伞。</div></div>
            <div class="example"><div class="en">Is this Paul's car?</div><div class="cn">这是保罗的车吗？</div></div>
            <div class="tip-box">以s结尾的复数名词只加'：the students' books 学生们的书</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. This _____ not my umbrella.</div><div class="options">
                <button class="option-btn" data-value="A">A. am</button><button class="option-btn" data-value="B">B. is</button>
                <button class="option-btn" data-value="C">C. are</button><button class="option-btn" data-value="D">D. be</button></div>
                <div class="explanation">This是第三人称单数，be动词用is。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. — Is this your ticket? — No, _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. it isn't</button><button class="option-btn" data-value="B">B. this isn't</button>
                <button class="option-btn" data-value="C">C. I'm not</button><button class="option-btn" data-value="D">D. it not</button></div>
                <div class="explanation">否定回答用No, it isn't. 不能用this代替it。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">3. _____ is my coat.</div><div class="options">
                <button class="option-btn" data-value="A">A. There</button><button class="option-btn" data-value="B">B. Their</button>
                <button class="option-btn" data-value="C">C. Here</button><button class="option-btn" data-value="D">D. Her</button></div>
                <div class="explanation">Here is... 意为"这是……"，用于展示物品。</div></div>
        `}
    ]
},

"lesson-5-6": {
    title: "第5-6课：Nice to meet you / What make is it?",
    lessonRange: "L5-6",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "问候介绍与询问品牌，不定冠词a/an",
    topics: ["问候语", "This is...", "Nice to meet you", "a/an", "What make"],
    sections: [
        {type:"lesson", icon:"📖", title:"课文要点", content:`
            <p>第5课学习问候和介绍他人，第6课学习询问品牌/型号。</p>
            <div class="example"><div class="en">Good morning.</div><div class="cn">早上好。</div></div>
            <div class="example"><div class="en">This is Miss Sophie Dupont.</div><div class="cn">这位是苏菲·杜邦小姐。</div></div>
            <div class="example"><div class="en">Nice to meet you.</div><div class="cn">很高兴见到你。</div></div>
        `},
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 问候语汇总</div>
            <table class="grammar-table"><tr><th>表达</th><th>含义</th><th>场合</th></tr>
            <tr><td>Good morning.</td><td>早上好</td><td>上午</td></tr>
            <tr><td>Good afternoon.</td><td>下午好</td><td>下午</td></tr>
            <tr><td>Good evening.</td><td>晚上好</td><td>晚间见面</td></tr>
            <tr><td>Good night.</td><td>晚安</td><td>睡前告别</td></tr>
            <tr><td>How do you do?</td><td>您好</td><td>正式初次见面</td></tr></table>

            <div class="sub-heading">2. This is... 介绍他人</div>
            <div class="formula">This is + 姓名/称谓</div>
            <div class="example"><div class="en">This is Mr. Blake.</div><div class="cn">这位是布莱克先生。</div></div>
            <div class="warning-box">介绍他人用This is...，不用He/She is...</div>

            <div class="sub-heading">3. What make is it? 询问品牌</div>
            <div class="example"><div class="en">What make is it? — It's a Volvo.</div><div class="cn">它是什么牌子？— 是沃尔沃。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 不定冠词 a / an</div>
            <table class="grammar-table"><tr><th>冠词</th><th>用法</th><th>例词</th></tr>
            <tr><td>a</td><td>辅音音素开头</td><td>a book, a car, a university</td></tr>
            <tr><td>an</td><td>元音音素开头</td><td>an apple, an egg, an hour</td></tr></table>
            <div class="warning-box">看发音而非字母！an hour（h不发音），a university（u发/juː/辅音）</div>

            <div class="sub-heading">2. 人称代词与be动词完整搭配</div>
            <table class="grammar-table"><tr><th>人称代词</th><th>be动词</th><th>缩写</th></tr>
            <tr><td>I</td><td>am</td><td>I'm</td></tr>
            <tr><td>You</td><td>are</td><td>You're</td></tr>
            <tr><td>He</td><td>is</td><td>He's</td></tr>
            <tr><td>She</td><td>is</td><td>She's</td></tr>
            <tr><td>It</td><td>is</td><td>It's</td></tr>
            <tr><td>We</td><td>are</td><td>We're</td></tr>
            <tr><td>They</td><td>are</td><td>They're</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. It's _____ English car.</div><div class="options">
                <button class="option-btn" data-value="A">A. a</button><button class="option-btn" data-value="B">B. an</button>
                <button class="option-btn" data-value="C">C. the</button><button class="option-btn" data-value="D">D. /</button></div>
                <div class="explanation">English以元音音素/ɪ/开头，用an。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. — How do you do? — _____</div><div class="options">
                <button class="option-btn" data-value="A">A. How do you do?</button><button class="option-btn" data-value="B">B. I'm fine.</button>
                <button class="option-btn" data-value="C">C. Nice to meet you.</button><button class="option-btn" data-value="D">D. How are you?</button></div>
                <div class="explanation">How do you do?是正式问候，回答也是How do you do?</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">3. It's _____ hour's walk.</div><div class="options">
                <button class="option-btn" data-value="A">A. a</button><button class="option-btn" data-value="B">B. the</button>
                <button class="option-btn" data-value="C">C. an</button><button class="option-btn" data-value="D">D. /</button></div>
                <div class="explanation">hour的h不发音，以元音/aʊ/开头，用an。</div></div>
        `}
    ]
},

"lesson-7-8": {
    title: "第7-8课：Are you a teacher? / What's your job?",
    lessonRange: "L7-8",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "询问职业，be动词一般疑问句",
    topics: ["职业", "Are you...?", "What's your job?", "a/an+职业"],
    sections: [
        {type:"lesson", icon:"📖", title:"课文要点", content:`
            <p>第7课学习询问和介绍职业，第8课继续练习职业相关表达。</p>
            <div class="example"><div class="en">I am a new student.</div><div class="cn">我是一名新学生。</div></div>
            <div class="example"><div class="en">Are you a teacher?</div><div class="cn">你是老师吗？</div></div>
            <div class="example"><div class="en">What's your job?</div><div class="cn">你的工作是什么？</div></div>
        `},
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. Are you a/an...? 询问身份/职业</div>
            <div class="formula">Are you + a/an + 职业？</div>
            <div class="example"><div class="en">Are you a teacher? — Yes, I am. / No, I'm not.</div><div class="cn">你是老师吗？— 是的。/ 不是。</div></div>
            <div class="tip-box">肯定简答不能缩写：Yes, I am. ✅ 不能说 Yes, I'm. ❌</div>

            <div class="sub-heading">2. What's your job? / What are you?</div>
            <div class="example"><div class="en">What's your job? — I'm a keyboard operator.</div><div class="cn">你的工作是什么？— 我是电脑操作员。</div></div>

            <div class="sub-heading">3. 常见职业</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>teacher</td><td>教师</td><td>nurse</td><td>护士</td></tr>
            <tr><td>mechanic</td><td>机械师</td><td>engineer</td><td>工程师</td></tr>
            <tr><td>hairdresser</td><td>理发师</td><td>housewife</td><td>家庭主妇</td></tr>
            <tr><td>milkman</td><td>送奶工</td><td>postman</td><td>邮递员</td></tr>
            <tr><td>taxi driver</td><td>出租车司机</td><td>sales rep</td><td>销售代表</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. be动词的一般疑问句</div>
            <div class="formula">Be动词 + 主语 + ...?</div>
            <table class="grammar-table"><tr><th>陈述句</th><th>一般疑问句</th><th>简答</th></tr>
            <tr><td>I am a student.</td><td>Are you a student?</td><td>Yes, I am. / No, I'm not.</td></tr>
            <tr><td>He is a mechanic.</td><td>Is he a mechanic?</td><td>Yes, he is. / No, he isn't.</td></tr>
            <tr><td>She is a nurse.</td><td>Is she a nurse?</td><td>Yes, she is. / No, she isn't.</td></tr></table>

            <div class="sub-heading">2. be动词缩写规则汇总</div>
            <div class="tip-box">缩写规则：肯定句可缩写（I'm, He's, She's），但肯定简答中am不缩写（Yes, I am.）。否定缩写：isn't, aren't。I am not只能缩写为I'm not。</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. — Are you a nurse? — _____</div><div class="options">
                <button class="option-btn" data-value="A">A. Yes, I am.</button><button class="option-btn" data-value="B">B. Yes, I'm.</button>
                <button class="option-btn" data-value="C">C. Yes, you are.</button><button class="option-btn" data-value="D">D. Yes, it is.</button></div>
                <div class="explanation">Are you...? 肯定简答为 Yes, I am.（am不能缩写）</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. She is _____ engineer.</div><div class="options">
                <button class="option-btn" data-value="A">A. a</button><button class="option-btn" data-value="B">B. the</button>
                <button class="option-btn" data-value="C">C. an</button><button class="option-btn" data-value="D">D. /</button></div>
                <div class="explanation">engineer以元音音素/e/开头，用an。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">3. — _____? — I'm a teacher.</div><div class="options">
                <button class="option-btn" data-value="A">A. What are you do</button><button class="option-btn" data-value="B">B. What's your job</button>
                <button class="option-btn" data-value="C">C. Where's your job</button><button class="option-btn" data-value="D">D. Who's your job</button></div>
                <div class="explanation">What's your job? 询问职业。</div></div>
        `}
    ]
},

"lesson-9-10": {
    title: "第9-10课：How are you today? / Look at...",
    lessonRange: "L9-10",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "日常问候与描述人/物特征",
    topics: ["How are you", "Look at", "形容词作表语", "反义词", "人称代词宾格"],
    sections: [
        {type:"lesson", icon:"📖", title:"课文要点", content:`
            <p>第9课学习日常问候，第10课学习描述人/物的外观特征。</p>
            <div class="example"><div class="en">How are you today?</div><div class="cn">你今天好吗？</div></div>
            <div class="example"><div class="en">I'm very well, thank you.</div><div class="cn">我很好，谢谢。</div></div>
            <div class="example"><div class="en">Look at that dress!</div><div class="cn">看那条裙子！</div></div>
        `},
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. How are you? 及回答</div>
            <table class="grammar-table"><tr><th>问候</th><th>回答</th></tr>
            <tr><td>How are you?</td><td>I'm fine, thank you. / I'm very well.</td></tr>
            <tr><td>How are you today?</td><td>Fine, thanks. And you?</td></tr></table>

            <div class="sub-heading">2. Look at... 看……</div>
            <div class="formula">Look at + 宾语（名词/代词宾格）</div>
            <div class="example"><div class="en">Look at that dress.</div><div class="cn">看那条裙子。</div></div>
            <div class="example"><div class="en">Look at him.</div><div class="cn">看他。</div></div>
            <div class="warning-box">Look at后接代词宾格：me, him, her, us, them</div>

            <div class="sub-heading">3. 描述特征</div>
            <div class="formula">主语 + be + 形容词</div>
            <div class="example"><div class="en">That dress is nice.</div><div class="cn">那条裙子很漂亮。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 形容词作表语</div>
            <table class="grammar-table"><tr><th>主语</th><th>be</th><th>形容词</th><th>完整句</th></tr>
            <tr><td>It</td><td>is</td><td>nice</td><td>It is nice.</td></tr>
            <tr><td>She</td><td>is</td><td>busy</td><td>She is busy.</td></tr>
            <tr><td>They</td><td>are</td><td>dirty</td><td>They are dirty.</td></tr></table>

            <div class="sub-heading">2. 反义词对比</div>
            <table class="grammar-table"><tr><th>形容词</th><th>含义</th><th>反义词</th><th>含义</th></tr>
            <tr><td>hot</td><td>热的</td><td>cold</td><td>冷的</td></tr>
            <tr><td>fat</td><td>胖的</td><td>thin</td><td>瘦的</td></tr>
            <tr><td>tall</td><td>高的</td><td>short</td><td>矮的</td></tr>
            <tr><td>clean</td><td>干净的</td><td>dirty</td><td>脏的</td></tr>
            <tr><td>young</td><td>年轻的</td><td>old</td><td>老的</td></tr>
            <tr><td>busy</td><td>忙碌的</td><td>lazy</td><td>懒的</td></tr></table>

            <div class="sub-heading">3. 人称代词宾格</div>
            <table class="grammar-table"><tr><th>主格</th><th>宾格</th><th>含义</th></tr>
            <tr><td>I</td><td>me</td><td>我</td></tr><tr><td>he</td><td>him</td><td>他</td></tr>
            <tr><td>she</td><td>her</td><td>她</td></tr><tr><td>we</td><td>us</td><td>我们</td></tr>
            <tr><td>they</td><td>them</td><td>他们</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. Look at _____!</div><div class="options">
                <button class="option-btn" data-value="A">A. he</button><button class="option-btn" data-value="B">B. him</button>
                <button class="option-btn" data-value="C">C. his</button><button class="option-btn" data-value="D">D. he's</button></div>
                <div class="explanation">Look at后接宾格，he的宾格是him。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">2. — How are you? — _____</div><div class="options">
                <button class="option-btn" data-value="A">A. I'm fine, thank you.</button><button class="option-btn" data-value="B">B. How do you do?</button>
                <button class="option-btn" data-value="C">C. Nice to meet you.</button><button class="option-btn" data-value="D">D. Good morning.</button></div>
                <div class="explanation">How are you? 询问身体状况，回答I'm fine.</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">3. The opposite of "clean" is _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. old</button><button class="option-btn" data-value="B">B. thin</button>
                <button class="option-btn" data-value="C">C. dirty</button><button class="option-btn" data-value="D">D. cold</button></div>
                <div class="explanation">clean（干净的）反义词是dirty（脏的）。</div></div>
        `}
    ]
},

"lesson-11-12": {
    title: "第11-12课：Is this your shirt? / Whose is this...?",
    lessonRange: "L11-12",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "询问物品归属，whose疑问句与物主代词",
    topics: ["Whose", "物主代词", "名词所有格", "名词性物主代词"],
    sections: [
        {type:"lesson", icon:"📖", title:"课文要点", content:`
            <p>第11课学习询问物品归属，第12课学习whose引导的疑问句。</p>
            <div class="example"><div class="en">Whose shirt is that?</div><div class="cn">那是谁的衬衫？</div></div>
            <div class="example"><div class="en">Is this your shirt, Dave?</div><div class="cn">这是你的衬衫吗，戴夫？</div></div>
            <div class="example"><div class="en">Catch!</div><div class="cn">接着！</div></div>
        `},
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. Whose... is this/that?</div>
            <div class="formula">Whose + 名词 + is this/that?</div>
            <div class="example"><div class="en">Whose shirt is this?</div><div class="cn">这是谁的衬衫？</div></div>
            <div class="example"><div class="en">Whose handbag is that?</div><div class="cn">那是谁的手提包？</div></div>

            <div class="sub-heading">2. 回答</div>
            <div class="example"><div class="en">It's my shirt. / It's mine.</div><div class="cn">这是我的衬衫。/ 这是我的。</div></div>
            <div class="example"><div class="en">It's Tim's shirt. / It's Tim's.</div><div class="cn">这是蒂姆的衬衫。/ 这是蒂姆的。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 形容词性vs名词性物主代词</div>
            <table class="grammar-table"><tr><th>人称</th><th>形容词性</th><th>名词性</th><th>例句</th></tr>
            <tr><td>我</td><td>my</td><td>mine</td><td>This is my book. = This book is mine.</td></tr>
            <tr><td>你</td><td>your</td><td>yours</td><td>Is this your pen? = Is this pen yours?</td></tr>
            <tr><td>他</td><td>his</td><td>his</td><td>That is his coat. = That coat is his.</td></tr>
            <tr><td>她</td><td>her</td><td>hers</td><td>It's her bag. = The bag is hers.</td></tr>
            <tr><td>我们</td><td>our</td><td>ours</td><td>This is our room. = This room is ours.</td></tr>
            <tr><td>他们</td><td>their</td><td>theirs</td><td>That's their car. = That car is theirs.</td></tr></table>
            <div class="tip-box">形容词性物主代词后必须接名词，名词性物主代词后不接名词。</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="C"><div class="question">1. — Whose is this pen? — It's _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. my</button><button class="option-btn" data-value="B">B. me</button>
                <button class="option-btn" data-value="C">C. mine</button><button class="option-btn" data-value="D">D. I</button></div>
                <div class="explanation">It's后面单独用名词性物主代词mine。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">2. This is _____ book. The book is _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. her, her</button><button class="option-btn" data-value="B">B. her, hers</button>
                <button class="option-btn" data-value="C">C. hers, her</button><button class="option-btn" data-value="D">D. hers, hers</button></div>
                <div class="explanation">名词前用形容词性her，表语用名词性hers。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">3. _____ shirt is this?</div><div class="options">
                <button class="option-btn" data-value="A">A. Whose</button><button class="option-btn" data-value="B">B. Who</button>
                <button class="option-btn" data-value="C">C. What</button><button class="option-btn" data-value="D">D. Which</button></div>
                <div class="explanation">Whose用于询问"谁的"，后接名词。</div></div>
        `}
    ]
},

"lesson-13-14": {
    title: "第13-14课：A new dress / What colour is...?",
    lessonRange: "L13-14",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "颜色表达与祈使句",
    topics: ["What colour", "颜色形容词", "祈使句", "Come and..."],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. What colour is/are...?</div>
            <div class="formula">What colour is + 单数？ / What colour are + 复数？</div>
            <div class="example"><div class="en">What colour is your dress? — It's green.</div><div class="cn">你的裙子什么颜色？— 绿色的。</div></div>
            <div class="example"><div class="en">What colour are your shoes? — They're black.</div><div class="cn">你的鞋什么颜色？— 黑色的。</div></div>

            <div class="sub-heading">2. Here it is / Here they are / Here you are</div>
            <div class="example"><div class="en">Here it is. (单数)</div><div class="cn">它在这里。</div></div>
            <div class="example"><div class="en">Here they are. (复数)</div><div class="cn">它们在这里。</div></div>
            <div class="example"><div class="en">Here you are.</div><div class="cn">给你。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 颜色形容词</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>red</td><td>红色</td><td>green</td><td>绿色</td></tr>
            <tr><td>blue</td><td>蓝色</td><td>yellow</td><td>黄色</td></tr>
            <tr><td>black</td><td>黑色</td><td>white</td><td>白色</td></tr>
            <tr><td>orange</td><td>橙色</td><td>grey/gray</td><td>灰色</td></tr>
            <tr><td>brown</td><td>棕色</td><td>pink</td><td>粉色</td></tr></table>

            <div class="sub-heading">2. 形容词的位置</div>
            <div class="formula">a/an + 形容词 + 名词</div>
            <div class="example"><div class="en">a red dress, an orange hat, a blue car</div><div class="cn">一条红裙子，一顶橙帽子，一辆蓝车</div></div>

            <div class="sub-heading">3. 祈使句</div>
            <table class="grammar-table"><tr><th>类型</th><th>句型</th><th>例句</th></tr>
            <tr><td>肯定</td><td>动词原形 + 其他</td><td>Come upstairs. / Look at this.</td></tr>
            <tr><td>否定</td><td>Don't + 动词原形</td><td>Don't touch it. / Don't worry.</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. What colour _____ your shoes?</div><div class="options">
                <button class="option-btn" data-value="A">A. is</button><button class="option-btn" data-value="B">B. are</button>
                <button class="option-btn" data-value="C">C. am</button><button class="option-btn" data-value="D">D. be</button></div>
                <div class="explanation">shoes是复数，be动词用are。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. — What colour is it? — It's _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. a orange</button><button class="option-btn" data-value="B">B. an orange hat</button>
                <button class="option-btn" data-value="C">C. orange</button><button class="option-btn" data-value="D">D. oranges</button></div>
                <div class="explanation">问颜色直接回答颜色名，不需冠词。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">3. _____ upstairs and see it.</div><div class="options">
                <button class="option-btn" data-value="A">A. Come</button><button class="option-btn" data-value="B">B. Comes</button>
                <button class="option-btn" data-value="C">C. Coming</button><button class="option-btn" data-value="D">D. To come</button></div>
                <div class="explanation">祈使句用动词原形Come。</div></div>
        `}
    ]
},

"lesson-15-16": {
    title: "第15-16课：Your passports, please / Are you...?",
    lessonRange: "L15-16",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "复数表达与国籍",
    topics: ["名词复数", "these/those", "国籍表达", "不规则复数"],
    sections: [
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 名词复数规则</div>
            <table class="grammar-table"><tr><th>规则</th><th>方法</th><th>例词</th></tr>
            <tr><td>一般情况</td><td>加-s</td><td>book→books, case→cases</td></tr>
            <tr><td>s, x, sh, ch结尾</td><td>加-es</td><td>box→boxes, watch→watches</td></tr>
            <tr><td>辅音+y结尾</td><td>变y为i加-es</td><td>city→cities, country→countries</td></tr>
            <tr><td>f/fe结尾</td><td>变f/fe为v加-es</td><td>knife→knives, wife→wives</td></tr>
            <tr><td>o结尾</td><td>加-es/-s</td><td>potato→potatoes, photo→photos</td></tr></table>

            <div class="sub-heading">2. 不规则复数</div>
            <table class="grammar-table"><tr><th>单数</th><th>复数</th><th>含义</th></tr>
            <tr><td>man</td><td>men</td><td>男人</td></tr><tr><td>woman</td><td>women</td><td>女人</td></tr>
            <tr><td>child</td><td>children</td><td>孩子</td></tr><tr><td>foot</td><td>feet</td><td>脚</td></tr>
            <tr><td>tooth</td><td>teeth</td><td>牙齿</td></tr><tr><td>sheep</td><td>sheep</td><td>羊(同形)</td></tr></table>

            <div class="sub-heading">3. 指示代词变化</div>
            <table class="grammar-table"><tr><th>单数</th><th>复数</th><th>含义</th></tr>
            <tr><td>this</td><td>these</td><td>这个→这些</td></tr>
            <tr><td>that</td><td>those</td><td>那个→那些</td></tr></table>
            <div class="example"><div class="en">This is my book. → These are my books.</div><div class="cn">这是我的书。→ 这些是我的书。</div></div>

            <div class="sub-heading">4. 国籍表达</div>
            <table class="grammar-table"><tr><th>国家</th><th>国籍(形容词)</th><th>人</th></tr>
            <tr><td>England</td><td>English</td><td>an Englishman</td></tr>
            <tr><td>America</td><td>American</td><td>an American</td></tr>
            <tr><td>France</td><td>French</td><td>a Frenchman</td></tr>
            <tr><td>Germany</td><td>German</td><td>a German</td></tr>
            <tr><td>China</td><td>Chinese</td><td>a Chinese</td></tr>
            <tr><td>Sweden</td><td>Swedish</td><td>a Swede</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. The plural of "child" is _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. childs</button><button class="option-btn" data-value="B">B. children</button>
                <button class="option-btn" data-value="C">C. childes</button><button class="option-btn" data-value="D">D. childrens</button></div>
                <div class="explanation">child是不规则名词，复数children。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. _____ are our passports.</div><div class="options">
                <button class="option-btn" data-value="A">A. This</button><button class="option-btn" data-value="B">B. That</button>
                <button class="option-btn" data-value="C">C. These</button><button class="option-btn" data-value="D">D. It</button></div>
                <div class="explanation">passports复数，用指示代词these。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">3. There are three _____ in the room.</div><div class="options">
                <button class="option-btn" data-value="A">A. women</button><button class="option-btn" data-value="B">B. womans</button>
                <button class="option-btn" data-value="C">C. woman</button><button class="option-btn" data-value="D">D. womens</button></div>
                <div class="explanation">woman复数为不规则变化women。</div></div>
        `}
    ]
},

"lesson-17-18": {
    title: "第17-18课：How do you do? / What are their jobs?",
    lessonRange: "L17-18",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "介绍他人与询问多人职业",
    topics: ["Come and meet", "What are their jobs?", "Who疑问句"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. Come and meet... 来见见……</div>
            <div class="formula">Come and + 动词原形</div>
            <div class="example"><div class="en">Come and meet our employees.</div><div class="cn">来见见我们的员工。</div></div>

            <div class="sub-heading">2. What are their jobs? 询问多人职业</div>
            <div class="example"><div class="en">They're keyboard operators.</div><div class="cn">她们是电脑操作员。</div></div>
            <div class="example"><div class="en">They're sales reps.</div><div class="cn">他们是销售代表。</div></div>

            <div class="sub-heading">3. Who is that...? 询问身份</div>
            <div class="example"><div class="en">Who is that young man?</div><div class="cn">那个年轻人是谁？</div></div>
            <div class="example"><div class="en">He's our office assistant.</div><div class="cn">他是我们的办公室助理。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. Who引导的特殊疑问句</div>
            <div class="formula">Who is + 单数？ / Who are + 复数？</div>
            <div class="example"><div class="en">Who is he? — He's Mr. Blake.</div><div class="cn">他是谁？— 他是布莱克先生。</div></div>

            <div class="sub-heading">2. 复数主语与be动词</div>
            <table class="grammar-table"><tr><th>主语</th><th>be</th><th>缩写</th><th>例句</th></tr>
            <tr><td>We</td><td>are</td><td>We're</td><td>We're engineers.</td></tr>
            <tr><td>You</td><td>are</td><td>You're</td><td>You're teachers.</td></tr>
            <tr><td>They</td><td>are</td><td>They're</td><td>They're nurses.</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="C"><div class="question">1. What are _____ jobs?</div><div class="options">
                <button class="option-btn" data-value="A">A. his</button><button class="option-btn" data-value="B">B. her</button>
                <button class="option-btn" data-value="C">C. their</button><button class="option-btn" data-value="D">D. they</button></div>
                <div class="explanation">询问they的职业用their。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">2. Come _____ meet our employees.</div><div class="options">
                <button class="option-btn" data-value="A">A. or</button><button class="option-btn" data-value="B">B. and</button>
                <button class="option-btn" data-value="C">C. but</button><button class="option-btn" data-value="D">D. so</button></div>
                <div class="explanation">Come and do sth. 是固定结构。</div></div>
        `}
    ]
},

"lesson-19-20": {
    title: "第19-20课：Tired and thirsty / Look at them!",
    lessonRange: "L19-20",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "表达身体感受与描述状态",
    topics: ["What's the matter?", "tired/thirsty/hungry", "形容词描述状态", "There's a..."],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. What's the matter? 怎么了？</div>
            <div class="formula">What's the matter (with ...)?</div>
            <div class="example"><div class="en">What's the matter, children?</div><div class="cn">怎么了，孩子们？</div></div>
            <div class="example"><div class="en">What's the matter with you?</div><div class="cn">你怎么了？</div></div>

            <div class="sub-heading">2. 表达身体感受</div>
            <table class="grammar-table"><tr><th>表达</th><th>含义</th></tr>
            <tr><td>I'm tired.</td><td>我累了。</td></tr>
            <tr><td>I'm thirsty.</td><td>我渴了。</td></tr>
            <tr><td>I'm hungry.</td><td>我饿了。</td></tr>
            <tr><td>I'm cold.</td><td>我冷。</td></tr>
            <tr><td>I'm hot.</td><td>我热。</td></tr></table>

            <div class="sub-heading">3. There's a... / There are...</div>
            <div class="example"><div class="en">There's an ice cream man.</div><div class="cn">有一个卖冰淇淋的人。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 形容词描述身体/心理状态</div>
            <div class="formula">主语 + be + 形容词（状态）</div>
            <div class="example"><div class="en">We are tired and thirsty.</div><div class="cn">我们又累又渴。</div></div>
            <div class="example"><div class="en">The boy is ill.</div><div class="cn">那个男孩生病了。</div></div>
            <div class="tip-box">英语中表达"感觉怎样"用be+形容词，不用have+名词（不像中文说"有……感觉"）</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. — What's the matter? — I'm _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. thirst</button><button class="option-btn" data-value="B">B. thirsty</button>
                <button class="option-btn" data-value="C">C. thirstily</button><button class="option-btn" data-value="D">D. thirstiness</button></div>
                <div class="explanation">用形容词thirsty描述状态。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. There _____ an ice cream man.</div><div class="options">
                <button class="option-btn" data-value="A">A. are</button><button class="option-btn" data-value="B">B. has</button>
                <button class="option-btn" data-value="C">C. is</button><button class="option-btn" data-value="D">D. have</button></div>
                <div class="explanation">There is + 单数名词。</div></div>
        `}
    ]
},

"lesson-21-22": {
    title: "第21-22课：Which book? / Give me...",
    lessonRange: "L21-22",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "Which选择与双宾语动词",
    topics: ["Which", "Give me...", "双宾语", "one代替名词"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. Which...? 哪一个？</div>
            <div class="formula">Which + 名词？</div>
            <div class="example"><div class="en">Which book? — The red one.</div><div class="cn">哪一本书？— 红色的那本。</div></div>
            <div class="example"><div class="en">Which glass? — The empty one.</div><div class="cn">哪个杯子？— 空的那个。</div></div>

            <div class="sub-heading">2. Give me... 给我……</div>
            <div class="formula">Give + 间接宾语 + 直接宾语 = Give + 直接宾语 + to + 间接宾语</div>
            <div class="example"><div class="en">Give me a book, please. = Give a book to me, please.</div><div class="cn">请给我一本书。</div></div>
            <div class="example"><div class="en">Give him a glass, please.</div><div class="cn">请给他一个杯子。</div></div>

            <div class="sub-heading">3. one代替上文提到的名词</div>
            <div class="example"><div class="en">Which book? The red one. (one = book)</div><div class="cn">哪本书？红色的那本。</div></div>
            <div class="example"><div class="en">Which ones? The ones on the desk. (ones复数)</div><div class="cn">哪些？桌子上的那些。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 双宾语动词</div>
            <table class="grammar-table"><tr><th>句型</th><th>例句</th></tr>
            <tr><td>give sb. sth.</td><td>Give me a book.</td></tr>
            <tr><td>give sth. to sb.</td><td>Give a book to me.</td></tr>
            <tr><td>show sb. sth.</td><td>Show me your passport.</td></tr>
            <tr><td>show sth. to sb.</td><td>Show your passport to me.</td></tr></table>

            <div class="sub-heading">2. Which vs What</div>
            <table class="grammar-table"><tr><th>疑问词</th><th>用法</th><th>例句</th></tr>
            <tr><td>Which</td><td>在确定范围内选择</td><td>Which book do you want? (特定几本书中选)</td></tr>
            <tr><td>What</td><td>泛指，无范围限制</td><td>What book are you reading? (什么类型的书)</td></tr></table>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="A"><div class="question">1. Give _____ a book, please.</div><div class="options">
                <button class="option-btn" data-value="A">A. me</button><button class="option-btn" data-value="B">B. my</button>
                <button class="option-btn" data-value="C">C. I</button><button class="option-btn" data-value="D">D. mine</button></div>
                <div class="explanation">Give后接间接宾语，用宾格me。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">2. Which book? — The red _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. it</button><button class="option-btn" data-value="B">B. one</button>
                <button class="option-btn" data-value="C">C. book</button><button class="option-btn" data-value="D">D. that</button></div>
                <div class="explanation">one代替上文提到的book，避免重复。</div></div>
        `}
    ]
},

"lesson-23-24": {
    title: "第23-24课：Which glasses? / Give me some...",
    lessonRange: "L23-24",
    badge: "l1-24",
    group: "📍 第1-24课：be动词与基础句型",
    description: "介词on/in与方位表达",
    topics: ["on/in/under", "方位介词", "Give me some...", "ones复数"],
    sections: [
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 方位介词</div>
            <table class="grammar-table"><tr><th>介词</th><th>含义</th><th>例句</th></tr>
            <tr><td>on</td><td>在……上面</td><td>The book is on the desk.</td></tr>
            <tr><td>in</td><td>在……里面</td><td>The pen is in the box.</td></tr>
            <tr><td>under</td><td>在……下面</td><td>The cat is under the table.</td></tr>
            <tr><td>behind</td><td>在……后面</td><td>The car is behind the house.</td></tr>
            <tr><td>near</td><td>在……附近</td><td>The school is near the park.</td></tr></table>

            <div class="sub-heading">2. Give me some... 给我一些……</div>
            <div class="example"><div class="en">Give me some glasses, please.</div><div class="cn">请给我一些杯子。</div></div>
            <div class="example"><div class="en">Which ones? The ones on the shelf.</div><div class="cn">哪些？架子上的那些。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法知识点", content:`
            <div class="sub-heading">1. 介词短语作后置定语</div>
            <div class="formula">名词 + 介词 + 介词宾语</div>
            <div class="example"><div class="en">the book on the desk（桌子上的书）</div><div class="cn">介词短语on the desk修饰book</div></div>
            <div class="example"><div class="en">the cups on the table（桌子上的杯子）</div><div class="cn">介词短语on the table修饰cups</div></div>

            <div class="sub-heading">2. ones代替复数名词</div>
            <div class="example"><div class="en">Which glasses? The ones on the shelf.</div><div class="cn">哪些杯子？架子上的那些。</div></div>
            <div class="tip-box">one代替单数，ones代替复数，避免重复。</div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="C"><div class="question">1. The book is _____ the shelf.</div><div class="options">
                <button class="option-btn" data-value="A">A. in</button><button class="option-btn" data-value="B">B. under</button>
                <button class="option-btn" data-value="C">C. on</button><button class="option-btn" data-value="D">D. behind</button></div>
                <div class="explanation">在架子上用介词on。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">2. Which cups? The _____ on the table.</div><div class="options">
                <button class="option-btn" data-value="A">A. one</button><button class="option-btn" data-value="B">B. ones</button>
                <button class="option-btn" data-value="C">C. cup</button><button class="option-btn" data-value="D">D. it</button></div>
                <div class="explanation">复数名词cups用ones代替。</div></div>
        `}
    ]
}

};
