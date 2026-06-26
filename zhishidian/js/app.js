/**
 * 新概念英语第一册 主应用逻辑
 */

// 合并所有数据
const ALL_DATA = Object.assign({}, 
    typeof DATA1 !== 'undefined' ? DATA1 : {},
    typeof DATA2 !== 'undefined' ? DATA2 : {},
    typeof DATA3 !== 'undefined' ? DATA3 : {},
    typeof DATA4 !== 'undefined' ? DATA4 : {},
    typeof DATA5 !== 'undefined' ? DATA5 : {},
    typeof DATA6 !== 'undefined' ? DATA6 : {},
    {
        home: {
            title: '首页',
            isHome: true
        }
    }
);

// 页面顺序
const PAGE_ORDER = Object.keys(ALL_DATA).filter(k => k !== 'home');
let currentPage = 'home';
let currentGroup = null; // 当前选中的分组

// 获取所有分组
function getAllGroups() {
    const groups = new Set();
    PAGE_ORDER.forEach(key => {
        const item = ALL_DATA[key];
        if (item && item.group) {
            groups.add(item.group);
        }
    });
    return Array.from(groups);
}

// 获取分组下的所有课程
function getLessonsByGroup(groupName) {
    return PAGE_ORDER.filter(key => {
        const item = ALL_DATA[key];
        return item && item.group === groupName;
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    renderPage('home');
    bindEvents();
});

// 构建导航
function buildNav() {
    const navList = document.getElementById('navList');
    let html = '';
    let lastGroup = '';
    
    PAGE_ORDER.forEach(key => {
        const item = ALL_DATA[key];
        if (!item) return;
        const group = item.group || '';
        if (group && group !== lastGroup) {
            html += `<li class="group-title">${group}</li>`;
            lastGroup = group;
        }
        html += `<li><a href="#" data-page="${key}" class="nav-link">${item.title}</a></li>`;
    });
    navList.innerHTML = html;
}

// 渲染页面
function renderPage(pageId) {
    currentPage = pageId;
    const data = ALL_DATA[pageId];
    const contentArea = document.getElementById('contentArea');
    
    if (!data) {
        contentArea.innerHTML = '<p>页面未找到</p>';
        return;
    }
    
    if (pageId === 'home') {
        renderHome(contentArea);
    } else {
        renderLesson(contentArea, data);
    }
    
    // 更新导航高亮
    document.querySelectorAll('.nav-link').forEach(a => {
        a.classList.toggle('active', a.dataset.page === pageId);
    });
    
    // 更新面包屑
    document.getElementById('breadcrumb').textContent = pageId === 'home' ? '首页' : data.title;
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 渲染首页
function renderHome(container) {
    if (!currentGroup) {
        // 显示一级分组菜单
        let html = `<div class="page-header fade-in">
            <h1>📚 新概念英语第一册 · 知识点全解</h1>
            <p class="lesson-range">覆盖全部144课 | 句型 · 语法 · 词汇 · 练习</p>
        </div>
        <div class="home-grid">`;
        
        const groups = getAllGroups();
        groups.forEach(group => {
            const lessons = getLessonsByGroup(group);
            const lessonCount = lessons.length;
            html += `<div class="home-card group-card" data-group="${group}">
                <h3>${group}</h3>
                <p>共 ${lessonCount} 个课程单元</p>
                <div class="group-info">点击查看全部课程 →</div>
            </div>`;
        });
        
        html += '</div>';
        container.innerHTML = html;
        
        // 绑定分组点击事件
        container.querySelectorAll('.group-card').forEach(card => {
            card.addEventListener('click', () => {
                currentGroup = card.dataset.group;
                renderHome(container);
            });
        });
    } else {
        // 显示二级课程列表
        const lessons = getLessonsByGroup(currentGroup);
        let html = `<div class="page-header fade-in">
            <div class="breadcrumb-nav">
                <span class="breadcrumb-link" data-action="back">← 返回分组列表</span>
                <span class="breadcrumb-sep">/</span>
                <span>${currentGroup}</span>
            </div>
            <h1>${currentGroup}</h1>
            <p class="lesson-range">共 ${lessons.length} 个课程单元</p>
        </div>
        <div class="home-grid">`;
        
        lessons.forEach(key => {
            const item = ALL_DATA[key];
            if (!item) return;
            const badgeClass = item.badge || 'l1-24';
            const desc = item.description || '';
            const topics = (item.topics || []).map(t => `<span class="topic-tag">${t}</span>`).join('');
            html += `<div class="home-card" data-page="${key}">
                <h3><span class="lesson-badge ${badgeClass}">${item.lessonRange || ''}</span>${item.title}</h3>
                <p>${desc}</p>
                <div class="topics">${topics}</div>
            </div>`;
        });
        
        html += '</div>';
        container.innerHTML = html;
        
        // 绑定返回按钮事件
        container.querySelector('.breadcrumb-link').addEventListener('click', () => {
            currentGroup = null;
            renderHome(container);
        });
        
        // 绑定课程卡片点击
        container.querySelectorAll('.home-card:not(.group-card)').forEach(card => {
            card.addEventListener('click', () => renderPage(card.dataset.page));
        });
    }
}

// 渲染课程页
function renderLesson(container, data) {
    let html = `<div class="page-header fade-in">
        <h1>${data.title}</h1>
        <p class="lesson-range">${data.lessonRange || ''}</p>
    </div>`;
    
    (data.sections || []).forEach(section => {
        const cardClass = 'card-' + (section.type || 'lesson');
        html += `<div class="card ${cardClass} fade-in">
            <div class="card-header"><span class="icon">${section.icon || '📖'}</span>${section.title}</div>
            <div class="card-body">${section.content}</div>
        </div>`;
    });
    
    container.innerHTML = html;
    
    // 绑定练习题交互
    container.querySelectorAll('.exercise-item').forEach(item => {
        const answer = item.dataset.answer;
        const explanation = item.querySelector('.explanation');
        const buttons = item.querySelectorAll('.option-btn');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // 重置所有按钮
                buttons.forEach(b => {
                    b.classList.remove('correct', 'wrong');
                });
                
                const value = btn.dataset.value;
                if (value === answer) {
                    btn.classList.add('correct');
                    if (explanation) {
                        explanation.className = 'explanation show correct-exp';
                    }
                } else {
                    btn.classList.add('wrong');
                    // 高亮正确答案
                    buttons.forEach(b => {
                        if (b.dataset.value === answer) b.classList.add('correct');
                    });
                    if (explanation) {
                        explanation.className = 'explanation show wrong-exp';
                    }
                }
            });
        });
    });
}

// 绑定事件
function bindEvents() {
    // 导航点击
    document.getElementById('navList').addEventListener('click', e => {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            renderPage(link.dataset.page);
            // 移动端关闭侧栏
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('mobile-open');
            }
        }
    });
    
    // 侧栏切换
    document.getElementById('toggleSidebar').addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const main = document.getElementById('mainContent');
        const topBar = document.getElementById('topBar');
        
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('mobile-open');
        } else {
            sidebar.classList.toggle('collapsed');
            main.classList.toggle('expanded');
            topBar.classList.toggle('expanded');
        }
    });
    
    // 上一页/下一页
    document.getElementById('prevBtn').addEventListener('click', () => {
        const idx = PAGE_ORDER.indexOf(currentPage);
        if (idx > 0) renderPage(PAGE_ORDER[idx - 1]);
        else if (currentPage === 'home' && PAGE_ORDER.length > 0) renderPage(PAGE_ORDER[0]);
    });
    
    document.getElementById('nextBtn').addEventListener('click', () => {
        const idx = PAGE_ORDER.indexOf(currentPage);
        if (idx < PAGE_ORDER.length - 1) renderPage(PAGE_ORDER[idx + 1]);
    });
    
    // 返回顶部
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 300);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    
    // 搜索
    document.getElementById('searchInput').addEventListener('input', e => {
        const query = e.target.value.toLowerCase().trim();
        document.querySelectorAll('.nav-link').forEach(link => {
            const text = link.textContent.toLowerCase();
            const pageData = ALL_DATA[link.dataset.page];
            const searchData = text + ' ' + (pageData?.topics || []).join(' ') + ' ' + (pageData?.description || '');
            link.parentElement.style.display = (!query || searchData.toLowerCase().includes(query)) ? '' : 'none';
        });
    });
}
