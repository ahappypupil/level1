/**
 * Think 1 第二版 数据文件2：Unit 3-4
 * Unit 3: Food for Life - have got、食物词汇、可数不可数名词（食物）
 * Unit 4: Family Ties - 所有格('s)、物主代词、家庭成员、描述人物
 */
var DATA2 = {

"unit-3": {
    title: "Unit 3：Food for Life",
    lessonRange: "U3",
    badge: "u3-4",
    group: "🍕 Unit 3-4：饮食与家庭",
    description: "食物与饮食、have got/has got、可数/不可数名词深化、点餐用语",
    topics: ["食物", "have got", "可数名词", "不可数名词", "点餐", "烹饪方法"],
    sections: [
        {type:"lesson", icon:"📖", title:"单元概述", content:`
            <p>本单元主题为"生活中的食物"，学习各种食物名称、烹饪方式，掌握 have got 表示"拥有"的用法，以及可数/不可数名词在食物中的运用。</p>
            <div class="example"><div class="en">I've got some carrots and peppers.</div><div class="cn">我有一些胡萝卜和辣椒。</div></div>
            <div class="example"><div class="en">Have you got any coffee?</div><div class="cn">你有咖啡吗？</div></div>
            <div class="example"><div class="en">I'd like a grilled fish, please.</div><div class="cn">请给我一条烤鱼。</div></div>
        `},
        {type:"vocab", icon:"📒", title:"核心词汇：食物", content:`
            <div class="sub-heading">1. 食材 Food</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>carrots</td><td>胡萝卜</td><td>peppers</td><td>辣椒/甜椒</td></tr>
            <tr><td>yoghurt</td><td>酸奶</td><td>omelette</td><td>煎蛋卷</td></tr>
            <tr><td>chilli</td><td>辣椒</td><td>coffee</td><td>咖啡</td></tr>
            <tr><td>beans</td><td>豆子</td><td>salad</td><td>沙拉</td></tr>
            <tr><td>tacos</td><td>墨西哥卷饼</td><td>cake</td><td>蛋糕</td></tr></table>

            <div class="sub-heading">2. 烹饪方法</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>roast</td><td>烤（大块肉/蔬菜）</td><td>boil</td><td>煮</td></tr>
            <tr><td>grill</td><td>烤（用烤架）</td><td>fry</td><td>煎/炸</td></tr></table>

            <div class="sub-heading">3. 描述食物的形容词</div>
            <table class="grammar-table"><tr><th>正面</th><th>负面</th></tr>
            <tr><td>delicious, tasty, yummy, nice, sweet, spicy, savoury, fresh</td><td>horrible, disgusting, fatty, salty, boring</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法重点：have got", content:`
            <div class="sub-heading">1. have got / has got 表示"有"</div>
            <table class="grammar-table"><tr><th>肯定句</th><th>否定句</th><th>疑问句</th></tr>
            <tr><td>I/You/We/They <strong>have got</strong></td><td>I/You/We/They <strong>haven't got</strong></td><td><strong>Have</strong> I/you/we/they <strong>got</strong>?</td></tr>
            <tr><td>He/She/It <strong>has got</strong></td><td>He/She/It <strong>hasn't got</strong></td><td><strong>Has</strong> he/she/it <strong>got</strong>?</td></tr></table>
            <div class="example"><div class="en">I've got an omelette for breakfast.</div><div class="cn">我早餐吃了个煎蛋卷。</div></div>
            <div class="example"><div class="en">She hasn't got any yoghurt.</div><div class="cn">她没有酸奶。</div></div>
            <div class="example"><div class="en">Have you got any salad?</div><div class="cn">你有沙拉吗？</div></div>

            <div class="sub-heading">2. have got 的多种含义</div>
            <table class="grammar-table"><tr><th>搭配</th><th>含义</th></tr>
            <tr><td>have got a problem</td><td>有问题</td></tr>
            <tr><td>have got a headache</td><td>头疼</td></tr>
            <tr><td>have got my reasons</td><td>有我的理由</td></tr>
            <tr><td>have got time</td><td>有时间</td></tr></table>

            <div class="sub-heading">3. 可数与不可数（食物）</div>
            <div class="compare-box">
                <div class="compare-side left"><h4>可数</h4>
                    <div class="example success"><div class="en">an apple → three apples</div></div>
                    <div class="example success"><div class="en">a carrot → some carrots</div></div>
                    <div class="example success"><div class="en">an omelette → two omelettes</div></div>
                </div>
                <div class="compare-side right"><h4>不可数</h4>
                    <div class="example success"><div class="en">some rice / some bread</div></div>
                    <div class="example success"><div class="en">some water / some milk</div></div>
                    <div class="example success"><div class="en">some coffee / some yoghurt</div></div>
                </div>
            </div>
        `},
        {type:"sentence", icon:"🔑", title:"点餐用语", content:`
            <div class="sub-heading">在餐厅点餐</div>
            <div class="example"><div class="en">Are you ready to order?</div><div class="cn">您准备好点餐了吗？</div></div>
            <div class="example"><div class="en">I'd like the grilled fish, please.</div><div class="cn">我要烤鱼，谢谢。</div></div>
            <div class="example"><div class="en">What would you like to drink?</div><div class="cn">您想喝点什么？</div></div>
            <div class="example"><div class="en">Can I have the bill, please?</div><div class="cn">请给我账单。</div></div>
            <div class="example"><div class="en">How would you like your steak? — Well done, please.</div><div class="cn">您的牛排要几分熟？——全熟。</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. My brother _____ got a new coffee machine.</div><div class="options">
                <button class="option-btn" data-value="A">A. have</button><button class="option-btn" data-value="B">B. has</button>
                <button class="option-btn" data-value="C">C. is</button><button class="option-btn" data-value="D">D. are</button></div>
                <div class="explanation">My brother是第三人称单数，用has got。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. _____ you got any bread at home?</div><div class="options">
                <button class="option-btn" data-value="A">A. Has</button><button class="option-btn" data-value="B">B. Do</button>
                <button class="option-btn" data-value="C">C. Have</button><button class="option-btn" data-value="D">D. Is</button></div>
                <div class="explanation">have got的一般疑问句：Have + 主语 + got...?</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">3. This soup is _____! I love it.</div><div class="options">
                <button class="option-btn" data-value="A">A. delicious</button><button class="option-btn" data-value="B">B. disgusting</button>
                <button class="option-btn" data-value="C">C. fatty</button><button class="option-btn" data-value="D">D. horrible</button></div>
                <div class="explanation">"I love it"说明是正面评价，用delicious。</div></div>
        `}
    ]
},

"unit-4": {
    title: "Unit 4：Family Ties",
    lessonRange: "U4",
    badge: "u3-4",
    group: "🍕 Unit 3-4：饮食与家庭",
    description: "家庭关系、所有格's、物主代词、描述情感/情绪",
    topics: ["家庭成员", "所有格", "物主代词", "情感描述", "celebrate"],
    sections: [
        {type:"lesson", icon:"📖", title:"单元概述", content:`
            <p>本单元主题为"家庭纽带"，学习家庭成员称呼、名词所有格's的用法、物主代词、以及描述情感和情绪的词汇。</p>
            <div class="example"><div class="en">My uncle's name is David.</div><div class="cn">我叔叔的名字叫David。</div></div>
            <div class="example"><div class="en">These are my grandparents' photos.</div><div class="cn">这些是我祖父母的照片。</div></div>
            <div class="example"><div class="en">She feels proud of her son.</div><div class="cn">她为儿子感到骄傲。</div></div>
        `},
        {type:"vocab", icon:"📒", title:"核心词汇", content:`
            <div class="sub-heading">1. 家庭成员</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>grandparents</td><td>祖父母</td><td>grandma/grandpa</td><td>奶奶/爷爷</td></tr>
            <tr><td>uncle</td><td>叔叔/舅舅</td><td>aunt</td><td>阿姨/姑姑</td></tr>
            <tr><td>cousin</td><td>表/堂兄弟姐妹</td><td>sister-in-law</td><td>嫂子/弟媳</td></tr>
            <tr><td>little brother</td><td>弟弟</td><td>big sister</td><td>姐姐</td></tr>
            <tr><td>granddaughter</td><td>孙女</td><td>grandson</td><td>孙子</td></tr></table>

            <div class="sub-heading">2. 情感/情绪词汇</div>
            <table class="grammar-table"><tr><th>英文</th><th>中文</th><th>英文</th><th>中文</th></tr>
            <tr><td>proud</td><td>自豪的</td><td>worried</td><td>担心的</td></tr>
            <tr><td>upset</td><td>难过的</td><td>confused</td><td>困惑的</td></tr>
            <tr><td>surprised</td><td>惊讶的</td><td>angry</td><td>生气的</td></tr>
            <tr><td>scared</td><td>害怕的</td><td>relieved</td><td>释然的</td></tr>
            <tr><td>celebrate</td><td>庆祝</td><td>relatives</td><td>亲戚</td></tr></table>
        `},
        {type:"grammar", icon:"📝", title:"语法重点：所有格与物主代词", content:`
            <div class="sub-heading">1. 名词所有格 's / s'</div>
            <table class="grammar-table"><tr><th>规则</th><th>示例</th><th>含义</th></tr>
            <tr><td>单数名词 + 's</td><td>Tom's book</td><td>Tom的书</td></tr>
            <tr><td>以s结尾的复数 + '</td><td>my parents' house</td><td>我父母的房子</td></tr>
            <tr><td>不以s结尾的复数 + 's</td><td>the children's toys</td><td>孩子们的玩具</td></tr>
            <tr><td>共同拥有</td><td>Sam and Kate's mum</td><td>Sam和Kate的妈妈</td></tr>
            <tr><td>分别拥有</td><td>Sam's and Kate's books</td><td>Sam和Kate各自的书</td></tr></table>

            <div class="sub-heading">2. 物主代词</div>
            <table class="grammar-table"><tr><th>形容词性</th><th>名词性</th><th>含义</th></tr>
            <tr><td>my</td><td>mine</td><td>我的</td></tr>
            <tr><td>your</td><td>yours</td><td>你的/你们的</td></tr>
            <tr><td>his</td><td>his</td><td>他的</td></tr>
            <tr><td>her</td><td>hers</td><td>她的</td></tr>
            <tr><td>our</td><td>ours</td><td>我们的</td></tr>
            <tr><td>their</td><td>theirs</td><td>他们的</td></tr></table>
            <div class="example"><div class="en">This is my book. → This book is mine.</div><div class="cn">这是我的书。→这本书是我的。</div></div>
        `},
        {type:"sentence", icon:"🔑", title:"描述家人与情感", content:`
            <div class="sub-heading">1. 介绍家庭成员</div>
            <div class="example"><div class="en">I've got two brothers and one sister.</div><div class="cn">我有两个兄弟和一个姐妹。</div></div>
            <div class="example"><div class="en">My cousin lives in Australia.</div><div class="cn">我的表亲住在澳大利亚。</div></div>
            <div class="example"><div class="en">She looks like her mother.</div><div class="cn">她长得像她妈妈。</div></div>

            <div class="sub-heading">2. 表达情感</div>
            <div class="example"><div class="en">I feel proud when I get good marks.</div><div class="cn">得高分时我感到自豪。</div></div>
            <div class="example"><div class="en">He's worried about his exam.</div><div class="cn">他为考试而担心。</div></div>
            <div class="example"><div class="en">Are you upset with me?</div><div class="cn">你生我的气了吗？</div></div>
        `},
        {type:"exercise", icon:"✏️", title:"练习", content:`
            <div class="exercise-item" data-answer="B"><div class="question">1. This is _____ teacher. She's very nice.</div><div class="options">
                <button class="option-btn" data-value="A">A. we</button><button class="option-btn" data-value="B">B. our</button>
                <button class="option-btn" data-value="C">C. us</button><button class="option-btn" data-value="D">D. ours</button></div>
                <div class="explanation">名词前用形容词性物主代词our。</div></div>
            <div class="exercise-item" data-answer="C"><div class="question">2. That is my _____ car. He drives it every day.</div><div class="options">
                <button class="option-btn" data-value="A">A. fathers'</button><button class="option-btn" data-value="B">B. fathers</button>
                <button class="option-btn" data-value="C">C. father's</button><button class="option-btn" data-value="D">D. fathers's</button></div>
                <div class="explanation">单数名词的所有格用's：father's。</div></div>
            <div class="exercise-item" data-answer="A"><div class="question">3. I was really _____ when I saw the big birthday cake.</div><div class="options">
                <button class="option-btn" data-value="A">A. surprised</button><button class="option-btn" data-value="B">B. proud</button>
                <button class="option-btn" data-value="C">C. angry</button><button class="option-btn" data-value="D">D. worried</button></div>
                <div class="explanation">突然看到大蛋糕应该是"惊讶的"surprised。</div></div>
        `}
    ]
}

};
