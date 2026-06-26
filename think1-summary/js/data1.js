/**
 * Think 1 第二版 数据文件1：Welcome + Unit 1-2
 * Welcome: be动词、指示代词、there be、方位介词
 * Unit 1: Having a Good Time - 一般现在时、现在进行时、爱好
 * Unit 2: Money and How to Spend It - 可数/不可数名词、some/any、购物
 */
var DATA1 = {

"welcome-a": {
    title: "Welcome-A：个人信息与国家",
    lessonRange: "Welcome A",
    badge: "u1-2",
    group: "🎯 Welcome + Unit 1-2：基础与爱好",
    description: "be动词、国籍、个人信息、指示代词this/that/these/those",
    topics: ["be动词", "国籍", "国家", "this/that", "物主代词"],
    sections: [
        {type:"lesson", icon:"📖", title:"Welcome A 要点", content:`
            <p>Welcome A 复习be动词的基本用法、国籍的表达、以及个人信息（姓名、年龄、地址）的问答。</p>
            <div class="example"><div class="en">I'm from the United States. I'm American.</div><div class="cn">我来自美国。我是美国人。</div></div>
            <div class="example"><div class="en">Where are you from? — I'm from Brazil.</div><div class="cn">你来自哪里？——我来自巴西。</div></div>
            <div class="example"><div class="en">What's your name? — My name's Alex.</div><div class="cn">你叫什么名字？——我叫Alex。</div></div>
        `},
        {type:"grammar", icon:"📝", title:"语法重点：be动词 + 国籍", content:`
            <div class="sub-heading">1. be动词完整形式与缩写</div>
            <table class="grammar-table"><tr><th>主语</th><th>完整形式</th><th>缩写</th><th>否定</th></tr>
            <tr><td>I</td><td>I am</td><td>I'm</td><td>I'm not</td></tr>
            <tr><td>You</td><td>You are</td><td>You're</td><td>You aren't</td></tr>
            <tr><td>He/She/It</td><td>He/She/It is</td><td>He's/She's/It's</td><td>He/She/It isn't</td></tr>
            <tr><td>We</td><td>We are</td><td>We're</td><td>We aren't</td></tr>
            <tr><td>They</td><td>They are</td><td>They're</td><td>They aren't</td></tr></table>

            <div class="sub-heading">2. 国家与国籍</div>
            <table class="grammar-table"><tr><th>国家</th><th>国籍</th><th>语言</th></tr>
            <tr><td>the United States</td><td>American</td><td>English</td></tr>
            <tr><td>Brazil</td><td>Brazilian</td><td>Portuguese</td></tr>
            <tr><td>China</td><td>Chinese</td><td>Chinese</td></tr>
            <tr><td>the UK / Britain</td><td>British</td><td>English</td></tr>
            <tr><td>Mexico</td><td>Mexican</td><td>Spanish</td></tr>
            <tr><td>Japan</td><td>Japanese</td><td>Japanese</td></tr></table>
            <div class="tip-box">国籍形容词首字母要大写：He's British. 不是 He's british.</div>
        `},
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. 询问来自哪里</div>
            <div class="formula"><span class="component subject">Where</span> + <span class="component verb">are</span> + <span class="component subject">you</span> + <span class="component verb">from</span>?</div>
            <div class="example"><div class="en">Where are you from? — I'm from China.</div><div class="cn">你来自哪里？——我来自中国。</div></div>

            <div class="sub-heading">2. 询问个人信息</div>
            <div class="example"><div class="en">What's your name? — My name's Maria.</div><div class="cn">你叫什么名字？——我叫Maria。</div></div>
            <div class="example"><div class="en">How old are you? — I'm fourteen.</div><div class="cn">你多大了？——我14岁。</div></div>
            <div class="example"><div class="en">What's your address? — It's 23 Park Street.</div><div class="cn">你的地址是什么？——公园街23号。</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. She _____ from Mexico.</div><div class="options">
                <button class="option-btn" data-value="A">A. are</button><button class="option-btn" data-value="B">B. is</button>
                <button class="option-btn" data-value="C">C. am</button><button class="option-btn" data-value="D">D. be</button></div>
                <div class="explanation">She是第三人称单数，用is。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. People from the UK are _____.</div><div class="options">
                <button class="option-btn" data-value="A">A. UK</button><button class="option-btn" data-value="B">B. English</button>
                <button class="option-btn" data-value="C">C. British</button><button class="option-btn" data-value="D">D. british</button></div>
                <div class="explanation">英国人用British（注意首字母大写），English指语言/英格兰。</div></div>
        `}
    ]
},

"welcome-b": {
    title: "Welcome-B：教室与方位",
    lessonRange: "Welcome B",
    badge: "u1-2",
    group: "🎯 Welcome + Unit 1-2：基础与爱好",
    description: "教室物品、方位介词、there is/are、祈使句",
    topics: ["教室物品", "方位介词", "there be", "祈使句", "宾语代词"],
    sections: [
        {type:"lesson", icon:"📖", title:"Welcome B 要点", content:`
            <p>Welcome B 主要学习教室内常用物品词汇、方位介词、There is/are 句型以及简单课堂用语。</p>
            <div class="example"><div class="en">There is a pen on the desk.</div><div class="cn">桌子上有一支笔。</div></div>
            <div class="example"><div class="en">There are some books in the bag.</div><div class="cn">书包里有一些书。</div></div>
            <div class="example"><div class="en">Open your books, please.</div><div class="cn">请打开书。</div></div>
        `},
        {type:"vocab", icon:"📒", title:"核心词汇", content:`
            <div class="sub-heading">1. 教室物品</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>desk</td><td>书桌</td><td>chair</td><td>椅子</td></tr>
            <tr><td>board</td><td>黑板</td><td>ruler</td><td>尺子</td></tr>
            <tr><td>pencil</td><td>铅笔</td><td>notebook</td><td>笔记本</td></tr>
            <tr><td>backpack</td><td>背包</td><td>scissors</td><td>剪刀</td></tr>
            <tr><td>dictionary</td><td>词典</td><td>calculator</td><td>计算器</td></tr></table>

            <div class="sub-heading">2. 方位介词</div>
            <table class="grammar-table"><tr><th>介词</th><th>含义</th><th>介词</th><th>含义</th></tr>
            <tr><td>on</td><td>在……上面</td><td>in</td><td>在……里面</td></tr>
            <tr><td>under</td><td>在……下面</td><td>behind</td><td>在……后面</td></tr>
            <tr><td>next to</td><td>在……旁边</td><td>between</td><td>在……之间</td></tr>
            <tr><td>in front of</td><td>在……前面</td><td>near</td><td>在……附近</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法重点", content:`
            <div class="sub-heading">1. There is / There are</div>
            <div class="formula"><span class="component verb">There is</span> + <span class="component subject">单数名词</span> + <span class="component object">方位</span></div>
            <div class="formula"><span class="component verb">There are</span> + <span class="component subject">复数名词</span> + <span class="component object">方位</span></div>
            <div class="example"><div class="en">There is a computer on the desk.</div><div class="cn">桌子上有一台电脑。</div></div>
            <div class="example"><div class="en">There are five students in the classroom.</div><div class="cn">教室里有5个学生。</div></div>
            <div class="tip-box">There be 句型遵循"就近原则"：There is a pen and two books on the desk.</div>

            <div class="sub-heading">2. 宾语代词</div>
            <table class="grammar-table"><tr><th>主格</th><th>宾格</th><th>主格</th><th>宾格</th></tr>
            <tr><td>I</td><td>me</td><td>we</td><td>us</td></tr>
            <tr><td>you</td><td>you</td><td>you</td><td>you</td></tr>
            <tr><td>he</td><td>him</td><td>she</td><td>her</td></tr>
            <tr><td>it</td><td>it</td><td>they</td><td>them</td></tr></table>
            <div class="example"><div class="en">Give me the book, please.</div><div class="cn">请把书给我。</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. There _____ some students in the classroom.</div><div class="options">
                <button class="option-btn" data-value="A">A. is</button><button class="option-btn" data-value="B">B. are</button>
                <button class="option-btn" data-value="C">C. am</button><button class="option-btn" data-value="D">D. be</button></div>
                <div class="explanation">some students是复数，用There are。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. The cat is _____ the table.</div><div class="options">
                <button class="option-btn" data-value="A">A. between</button><button class="option-btn" data-value="B">B. next</button>
                <button class="option-btn" data-value="C">C. under</button><button class="option-btn" data-value="D">D. front</button></div>
                <div class="explanation">猫在桌子"下面"用under。between需要两个对象，next需要加to。</div></div>
        `}
    ]
},

"unit-1": {
    title: "Unit 1：Having a Good Time",
    lessonRange: "U1",
    badge: "u1-2",
    group: "🎯 Welcome + Unit 1-2：基础与爱好",
    description: "爱好、一般现在时、现在进行时、频率副词、like + -ing",
    topics: ["爱好", "一般现在时", "现在进行时", "频率副词", "like+ing", "have搭配"],
    sections: [
        {type:"lesson", icon:"📖", title:"单元概述", content:`
            <p>本单元主题为"享受美好时光"，学习讨论爱好和休闲活动，掌握一般现在时和现在进行时的区别。</p>
            <div class="example"><div class="en">I play the guitar every day.</div><div class="cn">我每天弹吉他。</div></div>
            <div class="example"><div class="en">She is playing the piano right now.</div><div class="cn">她现在正在弹钢琴。</div></div>
            <div class="example"><div class="en">Do you enjoy life?</div><div class="cn">你享受生活吗？</div></div>
        `},
        {type:"vocab", icon:"📒", title:"核心词汇：爱好", content:`
            <div class="sub-heading">1. 爱好与活动</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>play an instrument</td><td>演奏乐器</td><td>write a blog</td><td>写博客</td></tr>
            <tr><td>take photos</td><td>拍照</td><td>keep a pet</td><td>养宠物</td></tr>
            <tr><td>collect things</td><td>收集物品</td><td>play the piano</td><td>弹钢琴</td></tr>
            <tr><td>be in a club</td><td>参加俱乐部</td><td>join a club</td><td>加入俱乐部</td></tr>
            <tr><td>do exercise</td><td>锻炼</td><td>go shopping</td><td>去购物</td></tr></table>

            <div class="sub-heading">2. have 的常用搭配</div>
            <table class="grammar-table"><tr><th>搭配</th><th>含义</th><th>搭配</th><th>含义</th></tr>
            <tr><td>have fun</td><td>玩得开心</td><td>have a good time</td><td>玩得愉快</td></tr>
            <tr><td>have a rest</td><td>休息一下</td><td>have dinner</td><td>吃晚饭</td></tr>
            <tr><td>have time</td><td>有时间</td><td>have hobbies</td><td>有爱好</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法重点：一般现在时 vs 现在进行时", content:`
            <div class="compare-box">
                <div class="compare-side left"><h4>一般现在时 Present Simple</h4>
                    <p>表示<strong>经常性、习惯性</strong>的动作或状态</p>
                    <div class="formula"><span class="component subject">I/You/We/They</span> + <span class="component verb">V原形</span></div>
                    <div class="formula"><span class="component subject">He/She/It</span> + <span class="component verb">V-s/es</span></div>
                    <p>时间标志：every day, usually, always, sometimes, never</p>
                    <div class="example success"><div class="en">I play tennis every weekend.</div><div class="cn">我每周末打网球。</div></div>
                </div>
                <div class="compare-side right"><h4>现在进行时 Present Continuous</h4>
                    <p>表示<strong>此刻正在发生</strong>的动作</p>
                    <div class="formula"><span class="component subject">主语</span> + <span class="component verb">be</span> + <span class="component object">V-ing</span></div>
                    <p>时间标志：now, right now, at the moment, Look!, Listen!</p>
                    <div class="example success"><div class="en">He is playing tennis right now.</div><div class="cn">他现在正在打网球。</div></div>
                </div>
            </div>
            <div class="tip-box">like / love / enjoy / hate + <strong>V-ing</strong>：I like playing the piano. She enjoys reading books.</div>
        `},
        {type:"sentence", icon:"🔑", title:"核心句型", content:`
            <div class="sub-heading">1. like + V-ing 表达喜好</div>
            <div class="formula"><span class="component subject">主语</span> + <span class="component verb">like/love/enjoy</span> + <span class="component object">V-ing</span></div>
            <div class="example"><div class="en">I like taking photos.</div><div class="cn">我喜欢拍照。</div></div>
            <div class="example"><div class="en">She loves playing the guitar.</div><div class="cn">她热爱弹吉他。</div></div>
            <div class="example"><div class="en">He doesn't like collecting things.</div><div class="cn">他不喜欢收集东西。</div></div>

            <div class="sub-heading">2. 询问爱好</div>
            <div class="example"><div class="en">What do you do in your free time?</div><div class="cn">你空闲时间做什么？</div></div>
            <div class="example"><div class="en">What are your hobbies?</div><div class="cn">你的爱好是什么？</div></div>
            <div class="example"><div class="en">Do you enjoy reading?</div><div class="cn">你喜欢阅读吗？</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. She _____ the piano at the moment.</div><div class="options">
                <button class="option-btn" data-value="A">A. plays</button><button class="option-btn" data-value="B">B. is playing</button>
                <button class="option-btn" data-value="C">C. play</button><button class="option-btn" data-value="D">D. played</button></div>
                <div class="explanation">at the moment是现在进行时的标志，She is playing...。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. I enjoy _____ photos in my free time.</div><div class="options">
                <button class="option-btn" data-value="A">A. take</button><button class="option-btn" data-value="B">B. to take</button>
                <button class="option-btn" data-value="C">C. taking</button><button class="option-btn" data-value="D">D. took</button></div>
                <div class="explanation">enjoy后接动词-ing形式：enjoy + doing。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">3. He _____ goes to the club. He goes twice a week.</div><div class="options">
                <button class="option-btn" data-value="A">A. often</button><button class="option-btn" data-value="B">B. never</button>
                <button class="option-btn" data-value="C">C. yesterday</button><button class="option-btn" data-value="D">D. now</button></div>
                <div class="explanation">一周去两次说明"经常"，用often。</div></div>
        `}
    ]
},

"unit-2": {
    title: "Unit 2：Money and How to Spend It",
    lessonRange: "U2",
    badge: "u1-2",
    group: "🎯 Welcome + Unit 1-2：基础与爱好",
    description: "金钱与消费、可数/不可数名词、some/any/much/many、购物用语",
    topics: ["购物", "可数名词", "不可数名词", "some/any", "much/many", "服装"],
    sections: [
        {type:"lesson", icon:"📖", title:"单元概述", content:`
            <p>本单元主题为"钱和怎么花"，学习购物场所和服装词汇，掌握可数/不可数名词的区别以及数量表达。</p>
            <div class="example"><div class="en">How much money do you have?</div><div class="cn">你有多少钱？</div></div>
            <div class="example"><div class="en">I'd like to buy a new jacket.</div><div class="cn">我想买一件新夹克。</div></div>
            <div class="example"><div class="en">There are some shops near my house.</div><div class="cn">我家附近有一些商店。</div></div>
        `},
        {type:"vocab", icon:"📒", title:"核心词汇", content:`
            <div class="sub-heading">1. 商店类型</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>bookshop</td><td>书店</td><td>chemist's</td><td>药店</td></tr>
            <tr><td>clothes shop</td><td>服装店</td><td>coffee shop</td><td>咖啡店</td></tr>
            <tr><td>department store</td><td>百货商店</td><td>supermarket</td><td>超市</td></tr>
            <tr><td>mobile phone shop</td><td>手机店</td><td>sports shop</td><td>体育用品店</td></tr></table>

            <div class="sub-heading">2. 服装词汇</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>belt</td><td>皮带</td><td>dress</td><td>连衣裙</td></tr>
            <tr><td>jumper</td><td>套头衫</td><td>shoes</td><td>鞋子</td></tr>
            <tr><td>trainers</td><td>运动鞋</td><td>boots</td><td>靴子</td></tr>
            <tr><td>jacket</td><td>夹克</td><td>shirt</td><td>衬衫</td></tr>
            <tr><td>shorts</td><td>短裤</td><td>trousers</td><td>裤子</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法重点：可数/不可数名词", content:`
            <div class="compare-box">
                <div class="compare-side left"><h4>可数名词 Countable</h4>
                    <p>可以数出个数的名词</p>
                    <div class="example success"><div class="en">a book → two books</div></div>
                    <div class="example success"><div class="en">an apple → three apples</div></div>
                    <p>修饰词：many, a few, some, any, a lot of</p>
                </div>
                <div class="compare-side right"><h4>不可数名词 Uncountable</h4>
                    <p>不能直接数出个数的名词</p>
                    <div class="example success"><div class="en">money, water, time, bread</div></div>
                    <div class="example success"><div class="en">homework, information, music</div></div>
                    <p>修饰词：much, a little, some, any, a lot of</p>
                </div>
            </div>
            <div class="sub-heading">some / any 区别</div>
            <table class="grammar-table"><tr><th>用法</th><th>some</th><th>any</th></tr>
            <tr><td>肯定句</td><td>✅ I have some money.</td><td>❌</td></tr>
            <tr><td>否定句</td><td>❌</td><td>✅ I don't have any money.</td></tr>
            <tr><td>一般疑问句</td><td>（请求/建议时可用）</td><td>✅ Do you have any money?</td></tr></table>
            <div class="tip-box">How many + 可数名词复数：How many books? <br>How much + 不可数名词：How much money?</div>
        `},
        {type:"sentence", icon:"🔑", title:"购物用语", content:`
            <div class="sub-heading">1. 购物常用句型</div>
            <div class="example"><div class="en">Can I help you? — I'd like to buy a dress.</div><div class="cn">需要帮忙吗？——我想买一条连衣裙。</div></div>
            <div class="example"><div class="en">How much is this jacket? — It's £45.</div><div class="cn">这件夹克多少钱？——45英镑。</div></div>
            <div class="example"><div class="en">What size are you? — I'm a medium.</div><div class="cn">你穿什么尺码？——我穿中号。</div></div>
            <div class="example"><div class="en">Can I try it on? — Of course.</div><div class="cn">我可以试穿吗？——当然可以。</div></div>

            <div class="sub-heading">2. 表达价格和意见</div>
            <div class="example"><div class="en">It's too expensive for me.</div><div class="cn">对我来说太贵了。</div></div>
            <div class="example"><div class="en">That's a good price!</div><div class="cn">这个价格不错！</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="C"><div class="question">1. How _____ money do you have?</div><div class="options">
                <button class="option-btn" data-value="A">A. many</button><button class="option-btn" data-value="B">B. few</button>
                <button class="option-btn" data-value="C">C. much</button><button class="option-btn" data-value="D">D. some</button></div>
                <div class="explanation">money是不可数名词，用How much提问。</div></div>
            <div class="exercise-item" data-answer="B"><div class="question">2. There aren't _____ shops in this street.</div><div class="options">
                <button class="option-btn" data-value="A">A. some</button><button class="option-btn" data-value="B">B. any</button>
                <button class="option-btn" data-value="C">C. a</button><button class="option-btn" data-value="D">D. much</button></div>
                <div class="explanation">否定句中用any，不用some。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">3. I'd like _____ a new pair of trainers.</div><div class="options">
                <button class="option-btn" data-value="A">A. to buy</button><button class="option-btn" data-value="B">B. buying</button>
                <button class="option-btn" data-value="C">C. buy</button><button class="option-btn" data-value="D">D. bought</button></div>
                <div class="explanation">would like (I'd like) 后面接 to + 动词原形。</div></div>
        `}
    ]
}

};
