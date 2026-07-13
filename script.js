const DEMO_DATA = {
    matches: [
        {
            id: 1,
            league: { name: 'الدوري الانجليزي', logo: 'https://media.api-sports.io/football/leagues/39.png' },
            homeTeam: { name: 'مانشستر سيتي', logo: 'https://media.api-sports.io/football/teams/50.png' },
            awayTeam: { name: 'ليفربول', logo: 'https://media.api-sports.io/football/teams/40.png' },
            homeScore: 2, awayScore: 1, status: 'live', time: "67'", date: '2026-07-06'
        },
        {
            id: 2,
            league: { name: 'الدوري الاسباني', logo: 'https://media.api-sports.io/football/leagues/140.png' },
            homeTeam: { name: 'ريال مدريد', logo: 'https://media.api-sports.io/football/teams/541.png' },
            awayTeam: { name: 'برشلونة', logo: 'https://media.api-sports.io/football/teams/529.png' },
            homeScore: 1, awayScore: 1, status: 'live', time: "45'", date: '2026-07-06'
        },
        {
            id: 3,
            league: { name: 'دوري ابطال اوروبا', logo: 'https://media.api-sports.io/football/leagues/2.png' },
            homeTeam: { name: 'بايرن ميونخ', logo: 'https://media.api-sports.io/football/teams/157.png' },
            awayTeam: { name: 'باريس سان جيرمان', logo: 'https://media.api-sports.io/football/teams/85.png' },
            homeScore: 3, awayScore: 0, status: 'finished', time: 'انتهت', date: '2026-07-05'
        },
        {
            id: 4,
            league: { name: 'الدوري الايطالي', logo: 'https://media.api-sports.io/football/leagues/135.png' },
            homeTeam: { name: 'يوفنتوس', logo: 'https://media.api-sports.io/football/teams/496.png' },
            awayTeam: { name: 'انتر ميلان', logo: 'https://media.api-sports.io/football/teams/505.png' },
            homeScore: null, awayScore: null, status: 'scheduled', time: '21:00', date: '2026-07-07'
        },
        {
            id: 5,
            league: { name: 'الدوري الفرنسي', logo: 'https://media.api-sports.io/football/leagues/61.png' },
            homeTeam: { name: 'مارسيليا', logo: 'https://media.api-sports.io/football/teams/81.png' },
            awayTeam: { name: 'ليون', logo: 'https://media.api-sports.io/football/teams/80.png' },
            homeScore: null, awayScore: null, status: 'scheduled', time: '22:00', date: '2026-07-07'
        },
        {
            id: 6,
            league: { name: 'الدوري الالماني', logo: 'https://media.api-sports.io/football/leagues/78.png' },
            homeTeam: { name: 'بوروسيا دورتموند', logo: 'https://media.api-sports.io/football/teams/165.png' },
            awayTeam: { name: 'لايبزيغ', logo: 'https://media.api-sports.io/football/teams/173.png' },
            homeScore: 2, awayScore: 2, status: 'live', time: "78'", date: '2026-07-06'
        }
    ],
    news: [
        {
            id: 1,
            title: 'رسميا: مانشستر سيتي يتعاقد مع نجم برشلونة السابق',
            category: 'انتقالات',
            image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
            date: 'منذ 30 دقيقة', views: '12.5K'
        },
        {
            id: 2,
            title: 'ريال مدريد يعلن عن صفقة القرن الجديدة',
            category: 'انتقالات',
            image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400',
            date: 'منذ ساعة', views: '25.3K'
        },
        {
            id: 3,
            title: 'ميسي يكسر رقما قياسيا جديدا في الدوري الامريكي',
            category: 'احصائيات',
            image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400',
            date: 'منذ ساعتين', views: '18.7K'
        },
        {
            id: 4,
            title: 'تشيلسي يستعد لاقالة مدربه بعد سلسلة الهزائم',
            category: 'اخبار',
            image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400',
            date: 'منذ 3 ساعات', views: '31.2K'
        },
        {
            id: 5,
            title: 'حارس مرمى يدخل تاريخ دوري ابطال اوروبا',
            category: 'انجازات',
            image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400',
            date: 'منذ 4 ساعات', views: '9.8K'
        },
        {
            id: 6,
            title: 'الاتحاد الاوروبي يعلن عن تعديلات جديدة في دوري الابطال',
            category: 'اخبار',
            image: 'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?w=400',
            date: 'منذ 5 ساعات', views: '15.1K'
        }
    ],
    standings: {
        39: [
            { position: 1, team: 'ليفربول', logo: 'https://media.api-sports.io/football/teams/40.png', played: 38, won: 28, drawn: 7, lost: 3, gf: 86, ga: 33, gd: 53, points: 91 },
            { position: 2, team: 'مانشستر سيتي', logo: 'https://media.api-sports.io/football/teams/50.png', played: 38, won: 26, drawn: 7, lost: 5, gf: 93, ga: 40, gd: 53, points: 85 },
            { position: 3, team: 'ارسنال', logo: 'https://media.api-sports.io/football/teams/42.png', played: 38, won: 24, drawn: 8, lost: 6, gf: 78, ga: 42, gd: 36, points: 80 },
            { position: 4, team: 'تشيلسي', logo: 'https://media.api-sports.io/football/teams/49.png', played: 38, won: 21, drawn: 9, lost: 8, gf: 71, ga: 45, gd: 26, points: 72 },
            { position: 5, team: 'مانشستر يونايتد', logo: 'https://media.api-sports.io/football/teams/33.png', played: 38, won: 19, drawn: 10, lost: 9, gf: 65, ga: 48, gd: 17, points: 67 },
            { position: 6, team: 'نيوكاسل', logo: 'https://media.api-sports.io/football/teams/34.png', played: 38, won: 18, drawn: 8, lost: 12, gf: 58, ga: 52, gd: 6, points: 62 },
            { position: 7, team: 'توتنهام', logo: 'https://media.api-sports.io/football/teams/47.png', played: 38, won: 16, drawn: 10, lost: 12, gf: 62, ga: 55, gd: 7, points: 58 },
            { position: 8, team: 'استون فيلا', logo: 'https://media.api-sports.io/football/teams/66.png', played: 38, won: 15, drawn: 11, lost: 12, gf: 55, ga: 50, gd: 5, points: 56 },
            { position: 18, team: 'ايفرتون', logo: 'https://media.api-sports.io/football/teams/45.png', played: 38, won: 8, drawn: 10, lost: 20, gf: 38, ga: 65, gd: -27, points: 34 },
            { position: 19, team: 'بورنموث', logo: 'https://media.api-sports.io/football/teams/35.png', played: 38, won: 7, drawn: 8, lost: 23, gf: 35, ga: 72, gd: -37, points: 29 },
            { position: 20, team: 'شيفيلد يونايتد', logo: 'https://media.api-sports.io/football/teams/62.png', played: 38, won: 5, drawn: 7, lost: 26, gf: 28, ga: 85, gd: -57, points: 22 }
        ],
        140: [
            { position: 1, team: 'ريال مدريد', logo: 'https://media.api-sports.io/football/teams/541.png', played: 38, won: 29, drawn: 6, lost: 3, gf: 87, ga: 28, gd: 59, points: 93 },
            { position: 2, team: 'برشلونة', logo: 'https://media.api-sports.io/football/teams/529.png', played: 38, won: 26, drawn: 8, lost: 4, gf: 79, ga: 35, gd: 44, points: 86 },
            { position: 3, team: 'اتلتيكو مدريد', logo: 'https://media.api-sports.io/football/teams/530.png', played: 38, won: 23, drawn: 9, lost: 6, gf: 68, ga: 32, gd: 36, points: 78 },
            { position: 4, team: 'ريال سوسيداد', logo: 'https://media.api-sports.io/football/teams/548.png', played: 38, won: 19, drawn: 11, lost: 8, gf: 55, ga: 38, gd: 17, points: 68 },
            { position: 5, team: 'فياريال', logo: 'https://media.api-sports.io/football/teams/533.png', played: 38, won: 17, drawn: 10, lost: 11, gf: 60, ga: 45, gd: 15, points: 61 }
        ],
        135: [
            { position: 1, team: 'انتر ميلان', logo: 'https://media.api-sports.io/football/teams/505.png', played: 38, won: 29, drawn: 6, lost: 3, gf: 82, ga: 28, gd: 54, points: 93 },
            { position: 2, team: 'ميلان', logo: 'https://media.api-sports.io/football/teams/489.png', played: 38, won: 25, drawn: 8, lost: 5, gf: 72, ga: 35, gd: 37, points: 83 },
            { position: 3, team: 'يوفنتوس', logo: 'https://media.api-sports.io/football/teams/496.png', played: 38, won: 22, drawn: 10, lost: 6, gf: 65, ga: 30, gd: 35, points: 76 },
            { position: 4, team: 'اتالانتا', logo: 'https://media.api-sports.io/football/teams/499.png', played: 38, won: 20, drawn: 9, lost: 9, gf: 68, ga: 42, gd: 26, points: 69 },
            { position: 5, team: 'روما', logo: 'https://media.api-sports.io/football/teams/497.png', played: 38, won: 18, drawn: 11, lost: 9, gf: 58, ga: 40, gd: 18, points: 65 }
        ],
        78: [
            { position: 1, team: 'بايرن ميونخ', logo: 'https://media.api-sports.io/football/teams/157.png', played: 34, won: 25, drawn: 6, lost: 3, gf: 89, ga: 28, gd: 61, points: 81 },
            { position: 2, team: 'بوروسيا دورتموند', logo: 'https://media.api-sports.io/football/teams/165.png', played: 34, won: 22, drawn: 7, lost: 5, gf: 75, ga: 35, gd: 40, points: 73 },
            { position: 3, team: 'لايبزيغ', logo: 'https://media.api-sports.io/football/teams/173.png', played: 34, won: 20, drawn: 8, lost: 6, gf: 68, ga: 32, gd: 36, points: 68 },
            { position: 4, team: 'باير ليفركوزن', logo: 'https://media.api-sports.io/football/teams/168.png', played: 34, won: 18, drawn: 9, lost: 7, gf: 62, ga: 38, gd: 24, points: 63 },
            { position: 5, team: 'فرانكفورت', logo: 'https://media.api-sports.io/football/teams/169.png', played: 34, won: 15, drawn: 11, lost: 8, gf: 55, ga: 42, gd: 13, points: 56 }
        ],
        61: [
            { position: 1, team: 'باريس سان جيرمان', logo: 'https://media.api-sports.io/football/teams/85.png', played: 34, won: 26, drawn: 5, lost: 3, gf: 82, ga: 25, gd: 57, points: 83 },
            { position: 2, team: 'موناكو', logo: 'https://media.api-sports.io/football/teams/91.png', played: 34, won: 21, drawn: 8, lost: 5, gf: 65, ga: 32, gd: 33, points: 71 },
            { position: 3, team: 'ليل', logo: 'https://media.api-sports.io/football/teams/79.png', played: 34, won: 18, drawn: 9, lost: 7, gf: 55, ga: 35, gd: 20, points: 63 },
            { position: 4, team: 'مارسيليا', logo: 'https://media.api-sports.io/football/teams/81.png', played: 34, won: 16, drawn: 10, lost: 8, gf: 52, ga: 38, gd: 14, points: 58 },
            { position: 5, team: 'ليون', logo: 'https://media.api-sports.io/football/teams/80.png', played: 34, won: 15, drawn: 9, lost: 10, gf: 48, ga: 40, gd: 8, points: 54 }
        ],
        2: [
            { position: 1, team: 'ريال مدريد', logo: 'https://media.api-sports.io/football/teams/541.png', played: 8, won: 7, drawn: 0, lost: 1, gf: 22, ga: 8, gd: 14, points: 21 },
            { position: 2, team: 'مانشستر سيتي', logo: 'https://media.api-sports.io/football/teams/50.png', played: 8, won: 6, drawn: 1, lost: 1, gf: 20, ga: 7, gd: 13, points: 19 },
            { position: 3, team: 'بايرن ميونخ', logo: 'https://media.api-sports.io/football/teams/157.png', played: 8, won: 6, drawn: 0, lost: 2, gf: 18, ga: 9, gd: 9, points: 18 },
            { position: 4, team: 'باريس سان جيرمان', logo: 'https://media.api-sports.io/football/teams/85.png', played: 8, won: 5, drawn: 1, lost: 2, gf: 16, ga: 10, gd: 6, points: 16 },
            { position: 5, team: 'ليفربول', logo: 'https://media.api-sports.io/football/teams/40.png', played: 8, won: 5, drawn: 0, lost: 3, gf: 15, ga: 11, gd: 4, points: 15 }
        ]
    },
    scorers: [
        { rank: 1, name: 'ايرلينج هالاند', team: 'مانشستر سيتي', teamLogo: 'https://media.api-sports.io/football/teams/50.png', photo: 'https://media.api-sports.io/football/players/1100.png', goals: 36 },
        { rank: 2, name: 'كيليان مبابي', team: 'ريال مدريد', teamLogo: 'https://media.api-sports.io/football/teams/541.png', photo: 'https://media.api-sports.io/football/players/278.png', goals: 31 },
        { rank: 3, name: 'هاري كين', team: 'بايرن ميونخ', teamLogo: 'https://media.api-sports.io/football/teams/157.png', photo: 'https://media.api-sports.io/football/players/184.png', goals: 29 },
        { rank: 4, name: 'محمد صلاح', team: 'ليفربول', teamLogo: 'https://media.api-sports.io/football/teams/40.png', photo: 'https://media.api-sports.io/football/players/306.png', goals: 27 },
        { rank: 5, name: 'فيكتور اوسيمين', team: 'نابولي', teamLogo: 'https://media.api-sports.io/football/teams/492.png', photo: 'https://media.api-sports.io/football/players/1463.png', goals: 25 },
        { rank: 6, name: 'لاوتارو مارتينيز', team: 'انتر ميلان', teamLogo: 'https://media.api-sports.io/football/teams/505.png', photo: 'https://media.api-sports.io/football/players/304.png', goals: 24 },
        { rank: 7, name: 'روبرت ليفاندوفسكي', team: 'برشلونة', teamLogo: 'https://media.api-sports.io/football/teams/529.png', photo: 'https://media.api-sports.io/football/players/521.png', goals: 23 },
        { rank: 8, name: 'بوكايو ساكا', team: 'ارسنال', teamLogo: 'https://media.api-sports.io/football/teams/42.png', photo: 'https://media.api-sports.io/football/players/1460.png', goals: 21 }
    ],
    transfers: [
        { player: 'جود بيلينغهام', fromTeam: 'بوروسيا دورتموند', fromLogo: 'https://media.api-sports.io/football/teams/165.png', toTeam: 'ريال مدريد', toLogo: 'https://media.api-sports.io/football/teams/541.png', fee: '103M EUR', photo: 'https://media.api-sports.io/football/players/1101.png' },
        { player: 'ديكلان رايس', fromTeam: 'وست هام', fromLogo: 'https://media.api-sports.io/football/teams/48.png', toTeam: 'ارسنال', toLogo: 'https://media.api-sports.io/football/teams/42.png', fee: '116M EUR', photo: 'https://media.api-sports.io/football/players/2932.png' },
        { player: 'موسى ديابي', fromTeam: 'باير ليفركوزن', fromLogo: 'https://media.api-sports.io/football/teams/168.png', toTeam: 'استون فيلا', toLogo: 'https://media.api-sports.io/football/teams/66.png', fee: '55M EUR', photo: 'https://media.api-sports.io/football/players/85.png' },
        { player: 'كاي هافيرتز', fromTeam: 'تشيلسي', fromLogo: 'https://media.api-sports.io/football/teams/49.png', toTeam: 'ارسنال', toLogo: 'https://media.api-sports.io/football/teams/42.png', fee: '75M EUR', photo: 'https://media.api-sports.io/football/players/978.png' },
        { player: 'نيكو ويليامز', fromTeam: 'اتلتيك بلباو', fromLogo: 'https://media.api-sports.io/football/teams/531.png', toTeam: 'برشلونة', toLogo: 'https://media.api-sports.io/football/teams/529.png', fee: '58M EUR', photo: 'https://media.api-sports.io/football/players/1800.png' }
    ],
    upcoming: [
        { home: 'مانشستر يونايتد', homeLogo: 'https://media.api-sports.io/football/teams/33.png', away: 'ارسنال', awayLogo: 'https://media.api-sports.io/football/teams/42.png', time: '20:30', date: 'اليوم' },
        { home: 'برشلونة', homeLogo: 'https://media.api-sports.io/football/teams/529.png', away: 'اتلتيكو مدريد', awayLogo: 'https://media.api-sports.io/football/teams/530.png', time: '22:00', date: 'اليوم' },
        { home: 'يوفنتوس', homeLogo: 'https://media.api-sports.io/football/teams/496.png', away: 'ميلان', awayLogo: 'https://media.api-sports.io/football/teams/489.png', time: '21:45', date: 'غدا' },
        { home: 'بايرن ميونخ', homeLogo: 'https://media.api-sports.io/football/teams/157.png', away: 'بوروسيا دورتموند', awayLogo: 'https://media.api-sports.io/football/teams/165.png', time: '19:30', date: 'غدا' },
        { home: 'باريس سان جيرمان', homeLogo: 'https://media.api-sports.io/football/teams/85.png', away: 'موناكو', awayLogo: 'https://media.api-sports.io/football/teams/91.png', time: '21:00', date: 'بعد غد' }
    ]
};

const elements = {
    menuToggle: document.getElementById('menuToggle'),
    mainNav: document.getElementById('mainNav'),
    searchBtn: document.getElementById('searchBtn'),
    searchBar: document.getElementById('searchBar'),
    searchClose: document.getElementById('searchClose'),
    searchInput: document.getElementById('searchInput'),
    backToTop: document.getElementById('backToTop'),
    cookieBanner: document.getElementById('cookieBanner'),
    cookieAccept: document.getElementById('cookieAccept'),
    matchesGrid: document.getElementById('matchesGrid'),
    newsGrid: document.getElementById('newsGrid'),
    standingsContainer: document.getElementById('standingsContainer'),
    scorersGrid: document.getElementById('scorersGrid'),
    transfersList: document.getElementById('transfersList'),
    upcomingMatches: document.getElementById('upcomingMatches'),
    miniStandings: document.getElementById('miniStandings'),
    tickerText: document.getElementById('ticker-text')
};

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSearch();
    initScroll();
    initCookieBanner();
    initBackToTop();
    initMatchFilters();
    initLeagueTabs();
    loadMatches('all');
    loadNews();
    loadStandings(39);
    loadScorers();
    loadTransfers();
    loadUpcomingMatches();
    loadMiniStandings(39);
    updateTicker();
});

function initNavigation() {
    elements.menuToggle.addEventListener('click', () => {
        elements.menuToggle.classList.toggle('active');
        elements.mainNav.classList.toggle('active');
        document.body.style.overflow = elements.mainNav.classList.contains('active') ? 'hidden' : '';
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            elements.menuToggle.classList.remove('active');
            elements.mainNav.classList.remove('active');
            document.body.style.overflow = '';
            const section = link.dataset.section;
            const sectionMap = {
                'home': '.live-matches-section', 'matches': '.live-matches-section',
                'news': '.news-section', 'standings': '.standings-section',
                'players': '.top-scorers-section', 'transfers': '.transfers-section'
            };
            const target = document.querySelector(sectionMap[section]);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initSearch() {
    elements.searchBtn.addEventListener('click', () => {
        elements.searchBar.classList.toggle('active');
        if (elements.searchBar.classList.contains('active')) elements.searchInput.focus();
    });
    elements.searchClose.addEventListener('click', () => {
        elements.searchBar.classList.remove('active');
        elements.searchInput.value = '';
    });
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = elements.searchInput.value.trim();
            if (query) alert('جاري البحث عن: ' + query);
        }
    });
}

function initScroll() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        else header.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
    });
}

function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) elements.backToTop.classList.add('visible');
        else elements.backToTop.classList.remove('visible');
    });
    elements.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initCookieBanner() {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) setTimeout(() => elements.cookieBanner.classList.add('show'), 2000);
    elements.cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        elements.cookieBanner.classList.remove('show');
    });
}

function initMatchFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadMatches(btn.dataset.filter);
        });
    });
}

function initLeagueTabs() {
    document.querySelectorAll('.league-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.league-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const leagueId = parseInt(tab.dataset.league);
            loadStandings(leagueId);
            loadMiniStandings(leagueId);
        });
    });
}

function loadMatches(filter) {
    let matches = DEMO_DATA.matches;
    if (filter === 'live') matches = matches.filter(m => m.status === 'live');
    else if (filter === 'today') matches = matches.filter(m => m.date === '2026-07-06');
    else if (filter === 'tomorrow') matches = matches.filter(m => m.date === '2026-07-07');
    if (matches.length === 0) {
        elements.matchesGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--gray);">لا توجد مباريات في هذا التصنيف</div>';
        return;
    }
    elements.matchesGrid.innerHTML = matches.map((match, index) => `
        <div class="match-card ${match.status === 'live' ? 'live' : ''}" style="animation-delay: ${index * 0.1}s">
            <div class="match-league">
                <img src="${match.league.logo}" alt="${match.league.name}" onerror="this.style.display='none'">
                <span>${match.league.name}</span>
            </div>
            <div class="match-teams">
                <div class="team">
                    <img class="team-logo" src="${match.homeTeam.logo}" alt="${match.homeTeam.name}" onerror="this.src='https://via.placeholder.com/50'">
                    <span class="team-name">${match.homeTeam.name}</span>
                </div>
                <div class="match-score">
                    ${match.status !== 'scheduled' 
                        ? '<span class="score">' + match.homeScore + ' - ' + match.awayScore + '</span>'
                        : '<span class="score" style="font-size: 1.2rem; color: var(--gray);">VS</span>'
                    }
                    <span class="match-time">${match.time}</span>
                    <span class="match-status ${match.status}">
                        ${match.status === 'live' ? 'مباشر' : match.status === 'finished' ? 'انتهت' : 'لم تبدأ'}
                    </span>
                </div>
                <div class="team">
                    <img class="team-logo" src="${match.awayTeam.logo}" alt="${match.awayTeam.name}" onerror="this.src='https://via.placeholder.com/50'">
                    <span class="team-name">${match.awayTeam.name}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function loadNews() {
    elements.newsGrid.innerHTML = DEMO_DATA.news.map((news, index) => `
        <article class="news-card" style="animation-delay: ${index * 0.1}s">
            <div style="overflow: hidden; border-radius: var(--radius-md) var(--radius-md) 0 0;">
                <img class="news-image" src="${news.image}" alt="${news.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x180'">
            </div>
            <div class="news-content">
                <span class="news-category">${news.category}</span>
                <h3 class="news-title">${news.title}</h3>
                <div class="news-meta">
                    <span>${news.date}</span>
                    <span>${news.views}</span>
                </div>
            </div>
        </article>
    `).join('');
}

function loadStandings(leagueId) {
    const standings = DEMO_DATA.standings[leagueId] || DEMO_DATA.standings[39];
    elements.standingsContainer.innerHTML = `
        <table class="standings-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th style="text-align: right;">الفريق</th>
                    <th>لعب</th>
                    <th>ف</th>
                    <th>ت</th>
                    <th>خ</th>
                    <th>له</th>
                    <th>عليه</th>
                    <th>فارق</th>
                    <th>نقاط</th>
                </tr>
            </thead>
            <tbody>
                ${standings.map(team => {
                    let posClass = '';
                    if (team.position <= 4) posClass = 'champions';
                    else if (team.position === 5) posClass = 'europa';
                    else if (team.position === 6) posClass = 'conference';
                    else if (team.position >= 18) posClass = 'relegation';
                    return `
                        <tr>
                            <td><span class="position ${posClass}">${team.position}</span></td>
                            <td>
                                <div class="team-cell">
                                    <img class="team-logo" src="${team.logo}" alt="${team.team}" onerror="this.style.display='none'">
                                    <span class="team-name">${team.team}</span>
                                </div>
                            </td>
                            <td>${team.played}</td>
                            <td>${team.won}</td>
                            <td>${team.drawn}</td>
                            <td>${team.lost}</td>
                            <td>${team.gf}</td>
                            <td>${team.ga}</td>
                            <td>${team.gd > 0 ? '+' + team.gd : team.gd}</td>
                            <td class="points">${team.points}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;
}

function loadScorers() {
    elements.scorersGrid.innerHTML = DEMO_DATA.scorers.map((scorer, index) => `
        <div class="scorer-card" style="animation-delay: ${index * 0.1}s">
            <span class="scorer-rank">${scorer.rank}</span>
            <img class="scorer-photo" src="${scorer.photo}" alt="${scorer.name}" onerror="this.src='https://via.placeholder.com/70'">
            <h4 class="scorer-name">${scorer.name}</h4>
            <p class="scorer-team">
                <img src="${scorer.teamLogo}" alt="${scorer.team}" style="width: 16px; height: 16px; display: inline; vertical-align: middle; margin-left: 4px;" onerror="this.style.display='none'">
                ${scorer.team}
            </p>
            <div class="scorer-goals">${scorer.goals}</div>
            <div class="scorer-goals-label">هدف</div>
        </div>
    `).join('');
}

function loadTransfers() {
    elements.transfersList.innerHTML = DEMO_DATA.transfers.map((transfer, index) => `
        <div class="transfer-card" style="animation-delay: ${index * 0.1}s">
            <div class="transfer-player">
                <img src="${transfer.photo}" alt="${transfer.player}" onerror="this.src='https://via.placeholder.com/48'">
                <div class="transfer-player-info">
                    <h4>${transfer.player}</h4>
                    <p>انتقال جديد</p>
                </div>
            </div>
            <div class="transfer-teams">
                <img src="${transfer.fromLogo}" alt="${transfer.fromTeam}" title="${transfer.fromTeam}" onerror="this.style.display='none'">
                <span class="transfer-arrow">→</span>
                <img src="${transfer.toLogo}" alt="${transfer.toTeam}" title="${transfer.toTeam}" onerror="this.style.display='none'">
            </div>
            <span class="transfer-fee">${transfer.fee}</span>
        </div>
    `).join('');
}

function loadUpcomingMatches() {
    elements.upcomingMatches.innerHTML = DEMO_DATA.upcoming.map(match => `
        <div class="upcoming-match">
            <div class="upcoming-team">
                <img src="${match.homeLogo}" alt="${match.home}" onerror="this.style.display='none'">
                <span>${match.home}</span>
            </div>
            <div class="upcoming-time">
                <div class="time">${match.time}</div>
                <div class="date">${match.date}</div>
            </div>
            <div class="upcoming-team">
                <span>${match.away}</span>
                <img src="${match.awayLogo}" alt="${match.away}" onerror="this.style.display='none'">
            </div>
        </div>
    `).join('');
}

function loadMiniStandings(leagueId) {
    const standings = DEMO_DATA.standings[leagueId] || DEMO_DATA.standings[39];
    const top5 = standings.slice(0, 5);
    elements.miniStandings.innerHTML = top5.map(team => `
        <div class="mini-standings-row">
            <span class="mini-rank">${team.position}</span>
            <div class="mini-team">
                <img src="${team.logo}" alt="${team.team}" onerror="this.style.display='none'">
                <span>${team.team}</span>
            </div>
            <span class="mini-points">${team.points}</span>
        </div>
    `).join('');
}

function updateTicker() {
    const headlines = [
        'مانشستر سيتي يتعاقد رسميا مع نجم برشلونة السابق',
        'ريال مدريد يعلن عن صفقة القرن الجديدة',
        'ميسي يكسر رقما قياسيا جديدا في الدوري الامريكي',
        'تشيلسي يستعد لاقالة مدربه بعد سلسلة الهزائم',
        'الاتحاد الاوروبي يعلن عن تعديلات جديدة في دوري الابطال'
    ];
    let currentIndex = 0;
    setInterval(() => {
        elements.tickerText.textContent = headlines[currentIndex];
        currentIndex = (currentIndex + 1) % headlines.length;
    }, 5000);
}

console.log('كورة لايف - تم تحميل الموقع بنجاح!');