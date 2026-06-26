/**
 * Think 1 第二版 · 知识点总结 主应用逻辑
 */
const ALL_DATA = Object.assign({}, 
    typeof DATA1 !== 'undefined' ? DATA1 : {},
    typeof DATA2 !== 'undefined' ? DATA2 : {},
    typeof DATA3 !== 'undefined' ? DATA3 : {},
    typeof DATA4 !== 'undefined' ? DATA4 : {},
    typeof DATA5 !== 'undefined' ? DATA5 : {},
    typeof DATA6 !== 'undefined' ? DATA6 : {},
    {
        home: { title: '首页', isHome: true }
    }
);

const PAGE_ORDER = Object.keys(ALL_DATA).filter(k => k !== 'home');
let currentPage = 'home';
let currentGroup = null;

function getAllGroups() {
    const groups = new Set();
    PAGE_ORDER.forEach(key => {
        const item = ALL_DATA[key];
        if (item && item.group) groups.add(item.group);
    });
    return Array.from(groups);
}

function getLessonsByGroup(groupName) {
    return PAGE_ORDER.filter(key => {
        const item = ALL_DATA[key];
        return item && item.group === groupName;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    renderPage('home');
    bindEvents();
});

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

function renderPage(pageId) {
    currentPage = pageId;
    const data = ALL_DATA[pageId];
    const contentArea = document.getElementById('contentArea');
    if (!data) { contentArea.innerHTML = '<p>页面未找到</p>'; return; }
    
    if (pageId === 'home') renderHome(contentArea);
    else renderLesson(contentArea, data);
    
    document.querySelectorAll('.nav-link').forEach(a => {
        a.classList.toggle('active', a.dataset.page === pageId);
    });
    document.getElementById('breadcrumb').textContent = pageId === 'home' ? '首页' : data.title;
    window.scrollTo(0, 0);
}

function renderHome(container) {
    if (!currentGroup) {
        let html = `<div class="page-header fade-in">
            <h1>🧠 Think 1 第二版 · Level 1 知识点总结</h1>
            <p class="lesson-range">A2 级别 | 12个单元 + Welcome | 语法 · 词汇 · 句型 · 练习</p>
        </div>
        <div class="home-grid">`;
        const groups = getAllGroups();
        groups.forEach(group => {
            const lessons = getLessonsByGroup(group);
            html += `<div class="home-card group-card" data-group="${group}">
                <h3>${group}</h3><p>共 ${lessons.length} 个课程单元</p>
                <div class="group-info">点击查看全部课程 →</div></div>`;
        });
        html += '</div>';
        container.innerHTML = html;
        container.querySelectorAll('.group-card').forEach(card => {
            card.addEventListener('click', () => {
                currentGroup = card.dataset.group;
                renderHome(container);
            });
        });
    } else {
        const lessons = getLessonsByGroup(currentGroup);
        let html = `<div class="page-header fade-in">
            <div class="breadcrumb-nav">
                <span class="breadcrumb-link" data-action="back">← 返回分组列表</span>
                <span class="breadcrumb-sep">/</span><span>${currentGroup}</span></div>
            <h1>${currentGroup}</h1><p class="lesson-range">共 ${lessons.length} 个课程单元</p></div>
        <div class="home-grid">`;
        lessons.forEach(key => {
            const item = ALL_DATA[key];
            if (!item) return;
            const badgeClass = item.badge || 'u1-2';
            const desc = item.description || '';
            const topics = (item.topics || []).map(t => `<span class="topic-tag">${t}</span>`).join('');
            html += `<div class="home-card" data-page="${key}">
                <h3><span class="lesson-badge ${badgeClass}">${item.lessonRange || ''}</span>${item.title}</h3>
                <p>${desc}</p><div class="topics">${topics}</div></div>`;
        });
        html += '</div>';
        container.innerHTML = html;
        container.querySelector('.breadcrumb-link').addEventListener('click', () => {
            currentGroup = null; renderHome(container);
        });
        container.querySelectorAll('.home-card:not(.group-card)').forEach(card => {
            card.addEventListener('click', () => renderPage(card.dataset.page));
        });
    }
}

function renderLesson(container, data) {
    let html = `<div class="page-header fade-in">
        <h1>${data.title}</h1><p class="lesson-range">${data.lessonRange || ''}</p></div>`;
    (data.sections || []).forEach(section => {
        const cardClass = 'card-' + (section.type || 'lesson');
        html += `<div class="card ${cardClass} fade-in">
            <div class="card-header"><span class="icon">${section.icon || '📖'}</span>${section.title}</div>
            <div class="card-body">${section.content}</div></div>`;
    });
    container.innerHTML = html;
    container.querySelectorAll('.exercise-item').forEach(item => {
        const answer = item.dataset.answer;
        const explanation = item.querySelector('.explanation');
        const buttons = item.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => { b.classList.remove('correct', 'wrong'); });
                const value = btn.dataset.value;
                if (value === answer) {
                    btn.classList.add('correct');
                    if (explanation) { explanation.className = 'explanation show correct-exp'; }
                } else {
                    btn.classList.add('wrong');
                    buttons.forEach(b => { if (b.dataset.value === answer) b.classList.add('correct'); });
                    if (explanation) { explanation.className = 'explanation show wrong-exp'; }
                }
            });
        });
    });
}

function bindEvents() {
    document.getElementById('navList').addEventListener('click', e => {
        const link = e.target.closest('.nav-link');
        if (link) { e.preventDefault(); renderPage(link.dataset.page);
            if (window.innerWidth <= 768) document.getElementById('sidebar').classList.remove('mobile-open'); }
    });
    document.getElementById('toggleSidebar').addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const main = document.getElementById('mainContent');
        const topBar = document.getElementById('topBar');
        if (window.innerWidth <= 768) { sidebar.classList.toggle('mobile-open'); }
        else { sidebar.classList.toggle('collapsed'); main.classList.toggle('expanded'); topBar.classList.toggle('expanded'); }
    });
    document.getElementById('prevBtn').addEventListener('click', () => {
        const idx = PAGE_ORDER.indexOf(currentPage);
        if (idx > 0) renderPage(PAGE_ORDER[idx - 1]);
        else if (currentPage === 'home' && PAGE_ORDER.length > 0) renderPage(PAGE_ORDER[0]);
    });
    document.getElementById('nextBtn').addEventListener('click', () => {
        const idx = PAGE_ORDER.indexOf(currentPage);
        if (idx < PAGE_ORDER.length - 1) renderPage(PAGE_ORDER[idx + 1]);
    });
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => { backToTop.classList.toggle('visible', window.scrollY > 300); });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
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
