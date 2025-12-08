document.addEventListener('DOMContentLoaded', () => {

    // ------------------- ABOUT TOGGLE -------------------
    const aboutToggle = document.getElementById('about-toggle');
    const aboutContent = document.getElementById('about-content');

    if (aboutToggle && aboutContent) {
        aboutToggle.addEventListener('click', () => {
            const isHidden = aboutContent.classList.contains('hidden');
            aboutContent.classList.toggle('hidden');
            aboutToggle.textContent = isHidden ? "Less ▲" : "More ▼";
        });
    }

    // ------------------- QUIZ SCRIPT -------------------
    const questionEl = document.getElementById('question');
    if (!questionEl) return; // Exit if not on quiz page

    const answerEl = document.getElementById('answer');
    const feedbackEl = document.getElementById('feedback');
    const romanizedInput = document.getElementById('romanized-answer-input');
    const englishInput = document.getElementById('english-answer-input');
    const submitRomanizedBtn = document.getElementById('submit-romanized-btn');
    const submitEnglishBtn = document.getElementById('submit-english-btn');
    const prevBtn = document.getElementById('prev-card-btn');
    const nextBtn = document.getElementById('next-card-btn');
    const englishModeBtn = document.getElementById('english-mode-btn');
    const showRomanBtn = document.getElementById('show-roman-answer-btn');
    const showEnglishBtn = document.getElementById('show-english-answer-btn');
    const filterDropdown = document.getElementById('filter-dropdown');
    const randomizeToggle = document.getElementById('random-toggle');
    const multipleChoiceToggle = document.getElementById('multiple-choice-toggle');
    const categoryLimitedToggle = document.getElementById('category-limited-toggle');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results-container');
    const searchResultsList = document.getElementById('search-results-list');
    const quizContent = document.getElementById('quiz-content');
    const backToQuizBtn = document.getElementById('back-to-quiz-btn');
    const multipleChoiceContainer = document.getElementById('multiple-choice-container');
    const secondaryMCContainer = document.getElementById('secondary-mc-container');
    const romanActionRow = document.getElementById('romanized-action-row');
    const englishActionRowCorrected = document.getElementById('english-action-row');

    let quizData = [];
    let filteredQuizData = [];
    let currentCardIndex = 0;
    let isEnglishMode = false;

    const tracker = {
        roman: { correct: 0, incorrect: 0 },
        english: { correct: 0, incorrect: 0 },
        devanagari: { correct: 0, incorrect: 0 }
    };

    function updateTracker() {
        // Tracker code here (same as your previous script)
    }

    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function normalizeAnswer(ans) {
        return String(ans || '').toLowerCase().trim().replace(/[āīūṛṭḍñ]/g, match => {
            if (match === 'ā') return 'a';
            if (match === 'ī') return 'i';
            if (match === 'ū') return 'u';
            if (match === 'ṛ') return 'r';
            if (match === 'ṭ') return 't';
            if (match === 'ḍ') return 'd';
            if (match === 'ñ') return 'n';
            return match;
        });
    }

    function isAnswerCorrect(userAnswer, cardAnswer) {
        userAnswer = normalizeAnswer(userAnswer);
        cardAnswer = normalizeAnswer(cardAnswer);
        const bracketIndex = cardAnswer.indexOf('(');
        if (bracketIndex !== -1) cardAnswer = cardAnswer.slice(0, bracketIndex).trim();
        return cardAnswer.split('/').map(e => e.trim()).includes(userAnswer);
    }

    function initializeQuiz() {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                quizData = data;
                filteredQuizData = quizData.slice();
                // Populate dropdown and display card functions go here
            })
            .catch(err => {
                console.error('Error loading data.json:', err);
                questionEl.textContent = 'Failed to load flashcards.';
            });
    }

    initializeQuiz();
});
