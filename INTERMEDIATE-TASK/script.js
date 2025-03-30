// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Sample data for players
const players = [
    {
        name: 'MS Dhoni',
        role: 'Wicket-keeper',
        category: 'wicket-keeper',
        image: 'https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png',
        stats: '4,000+ runs, 100+ stumpings',
        jerseyNumber: '7',
        nationality: 'Indian',
        description: 'Captain Cool, legendary wicket-keeper batsman and CSK\'s most successful captain'
    },
    {
        name: 'Ravindra Jadeja',
        role: 'All-rounder',
        category: 'all-rounder',
        image: 'https://assets.iplt20.com/ipl/IPLHeadshot2022/9.png',
        stats: '2,000+ runs, 100+ wickets',
        jerseyNumber: '8',
        nationality: 'Indian',
        description: 'One of the best all-rounders in world cricket'
    },
    {
        name: 'Ruturaj Gaikwad',
        role: 'Batsman',
        category: 'batsman',
        image: 'https://assets.iplt20.com/ipl/IPLHeadshot2022/5443.png',
        stats: '1,500+ runs',
        jerseyNumber: '31',
        nationality: 'Indian',
        description: 'Elegant opener and future star of Indian cricket'
    },
    {
        name: 'Deepak Chahar',
        role: 'Bowler',
        category: 'bowler',
        image: 'https://assets.iplt20.com/ipl/IPLHeadshot2022/140.png',
        stats: '50+ wickets',
        jerseyNumber: '90',
        nationality: 'Indian',
        description: 'Swing bowling specialist who excels in powerplay overs'
    },
    {
        name: 'Shivam Dube',
        role: 'All-rounder',
        category: 'all-rounder',
        image: 'https://assets.iplt20.com/ipl/IPLHeadshot2022/5431.png',
        stats: '800+ runs, 10+ wickets',
        jerseyNumber: '28',
        nationality: 'Indian',
        description: 'Hard-hitting middle-order batsman and useful medium pacer'
    },
    {
        name: 'Moeen Ali',
        role: 'All-rounder',
        category: 'all-rounder',
        image: 'https://assets.iplt20.com/ipl/IPLHeadshot2022/1735.png',
        stats: '1,000+ runs, 30+ wickets',
        jerseyNumber: '18',
        nationality: 'English',
        description: 'Explosive batsman and crafty off-spinner'
    },
    {
        name: 'Devon Conway',
        role: 'Batsman',
        category: 'batsman',
        image: 'assets/images/devon.avif',
        stats: '800+ runs',
        jerseyNumber: '88',
        nationality: 'New Zealand',
        description: 'Technically sound opening batsman'
    },
    {
        name: 'Ajinkya Rahane',
        role: 'Batsman',
        category: 'batsman',
        image: 'https://assets.iplt20.com/ipl/IPLHeadshot2022/135.png',
        stats: '4,000+ runs',
        jerseyNumber: '27',
        nationality: 'Indian',
        description: 'Experienced middle-order batsman with excellent technique'
    },
    {
        name: 'Mitchell Santner',
        role: 'All-rounder',
        category: 'all-rounder',
        image: 'https://assets.iplt20.com/ipl/IPLHeadshot2022/1903.png',
        stats: '200+ runs, 30+ wickets',
        jerseyNumber: '74',
        nationality: 'New Zealand',
        description: 'Left-arm spinner and useful lower-order batsman'
    },
    {
        name: 'Tushar Deshpande',
        role: 'Bowler',
        category: 'bowler',
        image: 'https://assets.iplt20.com/ipl/IPLHeadshot2022/19351.png',
        stats: '25+ wickets',
        jerseyNumber: '73',
        nationality: 'Indian',
        description: 'Fast bowler with good yorkers and variations'
    },
    {
        name: 'Matheesha Pathirana',
        role: 'Bowler',
        category: 'bowler',
        image: 'assets/images/matheesh.jpeg',
        stats: '20+ wickets',
        jerseyNumber: '96',
        nationality: 'Sri Lankan',
        description: 'Young fast bowler with unique slinging action'
    }
];

// Function to populate players grid
function populatePlayers() {
    const playersGrid = document.getElementById('players-grid');
    if (!playersGrid) return;

    playersGrid.innerHTML = '';
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300';
        playerCard.setAttribute('data-category', player.category);
        
        playerCard.innerHTML = `
            <div class="relative">
                <img src="${player.image}" alt="${player.name}" class="w-full h-64 object-cover">
                <div class="absolute top-0 right-0 bg-yellow-400 text-blue-900 px-3 py-1 rounded-bl-lg font-bold">
                    #${player.jerseyNumber}
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 class="text-white text-xl font-bold">${player.name}</h3>
                    <p class="text-yellow-400">${player.role}</p>
                </div>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-gray-600">${player.nationality}</span>
                    <span class="text-sm text-gray-500">${player.stats}</span>
                </div>
                <p class="text-gray-700 text-sm">${player.description}</p>
            </div>
        `;
        
        playersGrid.appendChild(playerCard);
    });
}

// Sample data for news
const news = [
    {
        title: 'CSK Wins Opening Match',
        date: 'March 22, 2024',
        summary: 'Chennai Super Kings started their IPL 2024 campaign with a convincing victory.',
        image: 'https://www.chennaisuperkings.com/assets/images/csk-team.jpg'
    },
    {
        title: 'Team Practice Session',
        date: 'March 20, 2024',
        summary: 'The team completed an intensive practice session ahead of the tournament.',
        image: 'https://www.chennaisuperkings.com/assets/images/practice.jpg'
    },
    {
        title: 'Fan Meet Announced',
        date: 'March 18, 2024',
        summary: 'CSK announces special fan meet event at Chepauk Stadium.',
        image: 'https://www.chennaisuperkings.com/assets/images/fans.jpg'
    }
];

// Sample data for schedule
const schedule = [
    {
        date: 'March 24, 2024',
        opponent: 'Mumbai Indians',
        venue: 'MA Chidambaram Stadium',
        time: '7:30 PM IST'
    },
    {
        date: 'March 28, 2024',
        opponent: 'Royal Challengers Bangalore',
        venue: 'M. Chinnaswamy Stadium',
        time: '7:30 PM IST'
    },
    {
        date: 'April 1, 2024',
        opponent: 'Rajasthan Royals',
        venue: 'MA Chidambaram Stadium',
        time: '7:30 PM IST'
    }
];

// Sample data for statistics
const statistics = [
    {
        title: 'IPL Titles',
        value: '4',
        icon: '🏆'
    },
    {
        title: 'Matches Won',
        value: '121',
        icon: '✨'
    },
    {
        title: 'Win Percentage',
        value: '59.8%',
        icon: '📈'
    },
    {
        title: 'Final Appearances',
        value: '9',
        icon: '🎯'
    }
];

// Quiz data
const quizQuestions = [
    {
        question: "How many IPL titles has CSK won?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Who is known as 'Thala' in CSK?",
        options: ["Suresh Raina", "Ravindra Jadeja", "MS Dhoni", "Ruturaj Gaikwad"],
        correct: 2
    },
    {
        question: "What is CSK's home ground?",
        options: ["Eden Gardens", "Wankhede Stadium", "MA Chidambaram Stadium", "Chinnaswamy Stadium"],
        correct: 2
    },
    {
        question: "What year did CSK win their first IPL title?",
        options: ["2008", "2009", "2010", "2011"],
        correct: 2
    },
    {
        question: "What is CSK's team motto?",
        options: ["Play Bold", "Whistle Podu", "Korbo Lorbo Jeetbo", "Sadda Haq"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

// Function to start quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

// Function to show question
function showQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const question = quizQuestions[currentQuestion];
    
    quizContainer.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-4">Question ${currentQuestion + 1}/${quizQuestions.length}</h3>
            <p class="text-lg mb-4">${question.question}</p>
            <div class="space-y-2">
                ${question.options.map((option, index) => `
                    <button onclick="checkAnswer(${index})" 
                            class="w-full text-left p-3 rounded border border-gray-300 hover:bg-yellow-100 transition">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// Function to check answer
function checkAnswer(selectedOption) {
    const question = quizQuestions[currentQuestion];
    
    if (selectedOption === question.correct) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Function to show result
function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    const percentage = (score / quizQuestions.length) * 100;
    
    quizContainer.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 class="text-2xl font-bold mb-4">Quiz Complete!</h3>
            <p class="text-lg mb-4">Your score: ${score}/${quizQuestions.length} (${percentage}%)</p>
            <p class="mb-4">${getResultMessage(percentage)}</p>
            <button onclick="startQuiz()" 
                    class="bg-yellow-400 text-blue-900 px-6 py-2 rounded font-bold hover:bg-yellow-500 transition">
                Try Again
            </button>
        </div>
    `;
}

// Function to get result message
function getResultMessage(percentage) {
    if (percentage === 100) return "Perfect! You're a true Super King!";
    if (percentage >= 80) return "Great job! You're a dedicated CSK fan!";
    if (percentage >= 60) return "Good effort! Keep supporting CSK!";
    if (percentage >= 40) return "Not bad! Time to watch more CSK matches!";
    return "Keep learning about CSK! Whistle Podu!";
}

// Populate news section
function populateNews() {
    const newsGrid = document.querySelector('#news .grid');
    news.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'bg-white rounded-lg shadow-lg overflow-hidden';
        newsCard.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-bold text-blue-900">${item.title}</h3>
                <p class="text-sm text-gray-500 mb-2">${item.date}</p>
                <p class="text-gray-600">${item.summary}</p>
            </div>
        `;
        newsGrid.appendChild(newsCard);
    });
}

// Populate schedule section
function populateSchedule() {
    const table = document.querySelector('#schedule table');
    table.innerHTML = `
        <thead class="bg-blue-900 text-white">
            <tr>
                <th class="px-6 py-3 text-left">Date</th>
                <th class="px-6 py-3 text-left">Opponent</th>
                <th class="px-6 py-3 text-left">Venue</th>
                <th class="px-6 py-3 text-left">Time</th>
            </tr>
        </thead>
        <tbody>
            ${schedule.map(match => `
                <tr class="border-b hover:bg-gray-50">
                    <td class="px-6 py-4">${match.date}</td>
                    <td class="px-6 py-4">${match.opponent}</td>
                    <td class="px-6 py-4">${match.venue}</td>
                    <td class="px-6 py-4">${match.time}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
}

// Populate statistics section
function populateStatistics() {
    const statsGrid = document.querySelector('#statistics .grid');
    statistics.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300';
        statCard.innerHTML = `
            <div class="text-4xl mb-2">${stat.icon}</div>
            <h3 class="text-2xl font-bold text-blue-900">${stat.value}</h3>
            <p class="text-gray-600">${stat.title}</p>
        `;
        statsGrid.appendChild(statCard);
    });
}

// Initialize all sections when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populatePlayers();
    populateNews();
    populateSchedule();
    populateStatistics();
    startQuiz();
});

// Fan engagement form handling
const fanForm = document.querySelector('#fan-zone form');
if (fanForm) {
    fanForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        alert('Thank you for your message! We will get back to you soon.');
        fanForm.reset();
    });
}

// Newsletter subscription handling
const newsletterForm = document.querySelector('footer form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
} 
