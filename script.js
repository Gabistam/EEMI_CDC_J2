// Données des quiz avec questions et explications détaillées
const quizData = {
    // Quiz 1 - Introduction
    1: [
        {
            question: "Qu'est-ce qui caractérise principalement un projet par rapport aux opérations courantes ?",
            answers: [
                "Il est répétitif et continu",
                "Il est temporaire, unique et progressivement élaboré",
                "Il ne nécessite pas de planification"
            ],
            correct: 1,
            explanation: "Un projet se distingue des opérations par trois caractéristiques fondamentales : il est temporaire (début et fin définis), unique (produit ou service spécifique), et progressivement élaboré (détaillé au fur et à mesure). Les opérations courantes sont répétitives et continues, contrairement aux projets."
        },
        {
            question: "Dans le triangle des contraintes projet, que se passe-t-il généralement si on réduit le délai ?",
            answers: [
                "La qualité et le coût restent identiques",
                "On doit généralement augmenter le coût ou réduire la qualité/périmètre",
                "Seule la qualité est impactée"
            ],
            correct: 1,
            explanation: "Le triangle coût/délai/qualité illustre que ces trois contraintes sont interdépendantes. Si on réduit le délai, il faut généralement soit augmenter les ressources (donc le coût) pour maintenir la qualité, soit accepter une réduction de la qualité ou du périmètre. C'est un principe fondamental de la gestion de projet."
        },
        {
            question: "Que signifie un objectif SMART ?",
            answers: [
                "Simple, Moderne, Adapté, Rapide, Technique",
                "Spécifique, Mesurable, Atteignable, Réaliste, Temporel",
                "Sécurisé, Méthodique, Agréable, Rigoureux, Testable"
            ],
            correct: 1,
            explanation: "SMART est un acronyme pour définir des objectifs de qualité : Spécifique (clair et précis), Mesurable (quantifiable), Atteignable (réaliste), Réaliste (adapté aux ressources), et Temporel (délimité dans le temps). Cette méthode garantit que les objectifs projet sont bien définis et réalisables."
        },
        {
            question: "Quel est le rôle principal du sponsor dans un projet ?",
            answers: [
                "Réaliser les tâches techniques du projet",
                "Financer le projet et assurer son soutien stratégique",
                "Tester le produit final"
            ],
            correct: 1,
            explanation: "Le sponsor (ou commanditaire) est la personne ou l'entité qui finance le projet et lui apporte un soutien stratégique. Il prend les décisions importantes, alloue les ressources et assure la liaison avec la direction. Son engagement est crucial pour le succès du projet."
        },
        {
            question: "Pourquoi le choix de la méthodologie doit-il être défini dès l'étude de faisabilité ?",
            answers: [
                "C'est une obligation légale",
                "La méthodologie impacte directement la planification, les coûts et l'organisation du projet",
                "Pour suivre les tendances du marché"
            ],
            correct: 1,
            explanation: "Le choix méthodologique influence profondément la structure du projet : planification des phases, estimation des coûts, organisation des équipes, processus de validation, et gestion des risques. Le définir dès l'étude de faisabilité permet d'évaluer correctement la faisabilité technique, économique et organisationnelle du projet."
        }
    ],
    // Quiz 2 - Waterfall
    2: [
        {
            question: "Qui a formalisé le modèle Cascade en 1970 ?",
            answers: [
                "Winston Royce",
                "Jeff Sutherland",
                "Frederick Taylor"
            ],
            correct: 0,
            explanation: "Winston Royce a formalisé le modèle Cascade en 1970 dans son article 'Managing the Development of Large Software Systems'. Ironiquement, Royce mettait en garde contre l'application stricte de ce modèle sans itérations, mais l'industrie a retenu la version purement séquentielle."
        },
        {
            question: "Quel est l'avantage principal du modèle Cascade pour un projet de système bancaire ?",
            answers: [
                "Flexibilité face aux changements",
                "Documentation exhaustive et traçabilité",
                "Feedback utilisateur rapide"
            ],
            correct: 1,
            explanation: "Dans le secteur bancaire, la documentation exhaustive et la traçabilité sont cruciales pour la conformité réglementaire et les audits. Le modèle Cascade excelle dans ce domaine car chaque phase produit une documentation détaillée avant de passer à la suivante, garantissant la conformité aux exigences strictes du secteur financier."
        },
        {
            question: "Quelle phase du modèle Cascade représente généralement 40-50% de la durée totale du projet ?",
            answers: [
                "Expression des besoins",
                "Analyse et conception",
                "Développement"
            ],
            correct: 2,
            explanation: "La phase de développement représente généralement 40-50% de la durée d'un projet en Cascade. C'est la phase la plus longue car elle consiste à traduire toutes les spécifications en code. L'expression des besoins prend 10-15%, l'analyse/conception 20-25%, et les tests/déploiement 15-20%."
        },
        {
            question: "Qu'est-ce qu'un 'jalon' (milestone) dans le modèle Cascade ?",
            answers: [
                "Une réunion d'équipe hebdomadaire",
                "Un point de contrôle entre deux phases pour valider les livrables",
                "Un outil de gestion de projet"
            ],
            correct: 1,
            explanation: "Un jalon est un point de contrôle critique entre deux phases qui permet de valider que les livrables sont complets et conformes avant de passer à la phase suivante. C'est le principe de 'porte de sortie' (gate) : si les critères ne sont pas remplis, on ne passe pas à l'étape suivante."
        },
        {
            question: "Quand doit-on éviter d'utiliser le modèle Cascade ?",
            answers: [
                "Pour tous les projets informatiques",
                "Quand les exigences sont évolutives et l'innovation est cruciale",
                "Uniquement pour les petits projets"
            ],
            correct: 1,
            explanation: "Le modèle Cascade devient inadapté quand les exigences sont susceptibles d'évoluer ou quand l'innovation est cruciale. Sa nature séquentielle rend les changements coûteux et difficiles à intégrer. Dans ces contextes, les approches agiles sont plus appropriées car elles embrassent le changement."
        }
    ],
    // Quiz 3 - Cycle en V
    3: [
        {
            question: "En quoi le Cycle en V améliore-t-il le modèle Cascade ?",
            answers: [
                "Il est plus rapide",
                "Il associe chaque phase de conception à une phase de test correspondante",
                "Il permet de changer les exigences en cours de projet"
            ],
            correct: 1,
            explanation: "Le Cycle en V améliore le modèle Cascade en créant une correspondance directe entre chaque phase de conception (descendante) et une phase de test (montante). Par exemple, l'expression des besoins est validée par les tests d'acceptation, la conception détaillée par les tests unitaires. Cela garantit une traçabilité complète."
        },
        {
            question: "Dans quel contexte le Cycle en V est-il particulièrement recommandé ?",
            answers: [
                "Développement d'une application mobile avec des exigences changeantes",
                "Système de contrôle aérien avec des exigences de sécurité critiques",
                "Projet de startup avec un MVP à tester rapidement"
            ],
            correct: 1,
            explanation: "Le Cycle en V est idéal pour les systèmes critiques comme le contrôle aérien car il associe chaque phase de conception à une phase de test correspondante. Cette approche garantit une validation rigoureuse à chaque niveau, essentielle pour des systèmes où une défaillance pourrait avoir des conséquences catastrophiques."
        },
        {
            question: "Quelle est la correspondance correcte dans le Cycle en V ?",
            answers: [
                "Spécifications fonctionnelles → Tests unitaires",
                "Conception détaillée → Tests unitaires",
                "Expression des besoins → Tests d'intégration"
            ],
            correct: 1,
            explanation: "Dans le Cycle en V, la conception détaillée correspond aux tests unitaires. Les autres correspondances sont : Expression des besoins → Tests d'acceptation, Spécifications fonctionnelles → Tests fonctionnels, et Conception architecturale → Tests d'intégration. Cette symétrie garantit la traçabilité."
        },
        {
            question: "Quel est l'avantage principal de définir les tests en amont dans le Cycle en V ?",
            answers: [
                "Réduire le coût total du projet",
                "Détecter les défauts plus tôt et garantir la traçabilité des exigences",
                "Accélérer la phase de développement"
            ],
            correct: 1,
            explanation: "Définir les plans de tests dès les phases de conception permet de détecter les incohérences et ambiguïtés dans les spécifications avant même de commencer le développement. Cela réduit considérablement le coût de correction des défauts et garantit que chaque exigence sera testée (traçabilité complète)."
        },
        {
            question: "Quelle métrique est particulièrement importante dans le Cycle en V ?",
            answers: [
                "La vélocité de l'équipe",
                "Le nombre de défauts détectés par phase",
                "Le nombre de réunions quotidiennes"
            ],
            correct: 1,
            explanation: "Le nombre de défauts détectés par phase est une métrique clé du Cycle en V. Elle permet de mesurer la qualité de chaque phase et l'efficacité des tests. Plus les défauts sont détectés tôt (phases de conception), moins ils coûtent cher à corriger. C'est un indicateur de la rigueur du processus."
        }
    ],
    // Quiz 4 - Agile
    4: [
        {
            question: "En quelle année et où le Manifeste Agile a-t-il été créé ?",
            answers: [
                "1995 à Seattle",
                "2001 à Snowbird, Utah",
                "2005 à San Francisco"
            ],
            correct: 1,
            explanation: "Le Manifeste Agile a été créé en février 2001 lors d'une réunion de 17 experts en développement logiciel à Snowbird, dans l'Utah. Face aux échecs répétés des projets informatiques des années 1990, ils ont défini les valeurs et principes d'une approche alternative aux méthodes lourdes."
        },
        {
            question: "Quelle est la première valeur du Manifeste Agile ?",
            answers: [
                "Logiciel fonctionnel plutôt que documentation exhaustive",
                "Individus et interactions plutôt que processus et outils",
                "Adaptation au changement plutôt que suivi d'un plan"
            ],
            correct: 1,
            explanation: "La première valeur du manifeste agile privilégie 'les individus et interactions plutôt que les processus et outils'. Cette valeur met l'accent sur l'importance des personnes et de leur collaboration, considérant que les meilleurs résultats proviennent d'équipes motivées et qui communiquent efficacement."
        },
        {
            question: "Selon les principes agiles, quelle est la mesure principale d'avancement d'un projet ?",
            answers: [
                "Le nombre de lignes de code produites",
                "Un logiciel fonctionnel",
                "Le nombre de réunions réalisées"
            ],
            correct: 1,
            explanation: "Le principe 7 du Manifeste Agile stipule : 'Un logiciel fonctionnel est la mesure principale d'avancement'. Contrairement aux méthodes traditionnelles qui mesurent l'avancement par rapport au plan, l'agile se concentre sur la valeur livrée : du logiciel qui fonctionne réellement."
        },
        {
            question: "Quel framework agile est utilisé par 87% des équipes agiles selon les statistiques ?",
            answers: [
                "Kanban",
                "Scrum",
                "Extreme Programming (XP)"
            ],
            correct: 1,
            explanation: "Scrum est de loin le framework agile le plus populaire, utilisé par environ 87% des équipes agiles. Sa structure claire (3 rôles, 5 événements, 3 artefacts) et sa focalisation sur la gestion de produit en font un choix privilégié pour de nombreuses organisations."
        },
        {
            question: "Dans quels contextes l'approche agile peut-elle échouer ?",
            answers: [
                "Uniquement dans les grandes entreprises",
                "Quand la culture organisationnelle résiste au changement et le client n'est pas disponible",
                "Seulement pour les projets techniques complexes"
            ],
            correct: 1,
            explanation: "L'agile peut échouer dans plusieurs contextes : culture organisationnelle hostile au changement, client indisponible pour les feedbacks fréquents, équipes immatures ou résistantes, contraintes réglementaires très strictes, ou projets nécessitant une prédictibilité absolue. L'agile n'est pas une solution universelle."
        }
    ],
    // Quiz 5 - Scrum
    5: [
        {
            question: "Qui sont les créateurs du framework Scrum ?",
            answers: [
                "Jeff McKenna et Ken Schwaber",
                "Jeff Sutherland et Ken Schwaber",
                "Martin Fowler et Kent Beck"
            ],
            correct: 1,
            explanation: "Jeff Sutherland et Ken Schwaber sont les co-créateurs de Scrum dans les années 1990. Jeff Sutherland a développé la première équipe Scrum chez Easel Corporation en 1993, tandis que Ken Schwaber a formalisé le processus. Ils continuent de maintenir le Scrum Guide officiel."
        },
        {
            question: "Quel est le rôle principal du Scrum Master ?",
            answers: [
                "Diriger l'équipe et prendre les décisions techniques",
                "Faciliter le processus Scrum et éliminer les obstacles",
                "Définir les priorités du Product Backlog"
            ],
            correct: 1,
            explanation: "Le Scrum Master est un facilitateur et un servant-leader, pas un chef de projet traditionnel. Son rôle principal est de s'assurer que l'équipe comprend et applique Scrum correctement, d'éliminer les obstacles qui empêchent l'équipe de progresser, et de protéger l'équipe des interruptions externes."
        },
        {
            question: "Quelle est la durée recommandée pour un Sprint ?",
            answers: [
                "1 semaine maximum",
                "2 à 4 semaines",
                "6 à 8 semaines"
            ],
            correct: 1,
            explanation: "Le Scrum Guide recommande des Sprints de 2 à 4 semaines maximum. Cette durée permet un équilibre entre la flexibilité (cycles courts pour s'adapter rapidement) et l'efficacité (suffisamment long pour livrer quelque chose de valeur). Des Sprints plus courts favorisent l'apprentissage et l'adaptation rapide."
        },
        {
            question: "Quelle est la taille idéale d'une équipe de développement Scrum ?",
            answers: [
                "3 à 9 personnes (idéalement 7±2)",
                "10 à 15 personnes",
                "Aucune limite, plus il y a de monde mieux c'est"
            ],
            correct: 0,
            explanation: "Une équipe de développement Scrum doit compter entre 3 et 9 personnes, avec un optimum autour de 7 (±2). En dessous de 3, il n'y a pas assez de compétences et de synergies. Au-delà de 9, la coordination devient trop complexe et la communication moins efficace. C'est basé sur la loi de Brooks."
        },
        {
            question: "Que signifie 'Definition of Done' (DoD) en Scrum ?",
            answers: [
                "La date de fin du Sprint",
                "L'engagement partagé sur les critères pour qu'un élément soit considéré comme terminé",
                "La liste des tâches à réaliser"
            ],
            correct: 1,
            explanation: "La Definition of Done est un accord partagé par toute l'équipe Scrum sur ce que signifie 'terminé' pour un élément du Product Backlog. Elle peut inclure : code testé, documenté, intégré, validé par le PO, etc. Plus elle est stricte, plus la qualité de l'incrément est assurée."
        }
    ],
    // Quiz 6 - Application pratique (Choix + Faisabilité + CDC)
    6: [
        {
            question: "Quel est le critère le plus important pour choisir entre Cascade et Agile ?",
            answers: [
                "La taille de l'équipe",
                "La stabilité et la clarté des exigences",
                "Le budget disponible"
            ],
            correct: 1,
            explanation: "La stabilité et la clarté des exigences constituent le critère de choix le plus déterminant. Des exigences stables et bien définies favorisent Cascade, tandis que des exigences évolutives ou incertaines orientent vers l'agile. Ce critère impacte directement la capacité du projet à s'adapter aux changements."
        },
        {
            question: "Dans un cahier des charges, comment justifier le choix d'une méthodologie agile ?",
            answers: [
                "C'est moderne et innovant",
                "Exigences évolutives et besoin de feedback utilisateur fréquent",
                "L'équipe préfère cette approche"
            ],
            correct: 1,
            explanation: "Le choix méthodologique doit être justifié par des critères objectifs liés au projet. 'Exigences évolutives et besoin de feedback utilisateur fréquent' sont des arguments factuels qui démontrent l'adéquation de l'agile au contexte. Les justifications basées sur la modernité ou les préférences personnelles manquent de rigueur professionnelle."
        },
        {
            question: "Que signifie adopter une approche 'hybride' en gestion de projet ?",
            answers: [
                "Mélanger aléatoirement les pratiques de différentes méthodologies",
                "Adapter la méthodologie selon les phases ou composants du projet",
                "Utiliser uniquement des outils numériques"
            ],
            correct: 1,
            explanation: "Une approche hybride consiste à adapter intelligemment la méthodologie selon le contexte. Par exemple, utiliser Cascade pour l'architecture globale (stable) et Agile pour les modules applicatifs (évolutifs). Cette approche pragmatique optimise les avantages de chaque méthodologie selon les besoins spécifiques du projet."
        },
        {
            question: "Dans une étude de faisabilité, pourquoi est-il important d'analyser la culture organisationnelle ?",
            answers: [
                "C'est une formalité administrative",
                "La culture impacte directement la réussite de l'adoption méthodologique",
                "Pour remplir le document"
            ],
            correct: 1,
            explanation: "La culture organisationnelle (hiérarchie, attitude face au changement, transparence, etc.) détermine largement la capacité de l'organisation à adopter une méthodologie. Une culture hiérarchique et rigide aura du mal avec l'agile, tandis qu'une culture ouverte et collaborative facilitera sa mise en œuvre."
        },
        {
            question: "Comment documenter le choix méthodologique dans un cahier des charges ?",
            answers: [
                "Mentionner simplement le nom de la méthodologie",
                "Analyser le contexte, justifier le choix et identifier les risques",
                "Copier une description générale trouvée sur internet"
            ],
            correct: 1,
            explanation: "Une documentation professionnelle du choix méthodologique doit inclure : analyse du contexte projet, justification basée sur des critères objectifs, identification des risques et stratégies de mitigation, et définition de points de contrôle pour ajustement éventuel. Cette approche démontre la réflexion professionnelle derrière le choix."
        }
    ]
};

// Variables globales pour les quiz
let currentQuizzes = {
    1: { questions: [], currentQuestion: 0, score: 0, answered: 0 },
    2: { questions: [], currentQuestion: 0, score: 0, answered: 0 },
    3: { questions: [], currentQuestion: 0, score: 0, answered: 0 },
    4: { questions: [], currentQuestion: 0, score: 0, answered: 0 },
    5: { questions: [], currentQuestion: 0, score: 0, answered: 0 },
    6: { questions: [], currentQuestion: 0, score: 0, answered: 0 }
};

// Fonction de mélange Fisher-Yates pour randomiser les réponses
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialisation des quiz avec randomisation
function initializeQuiz(quizNumber) {
    const quiz = currentQuizzes[quizNumber];
    quiz.questions = quizData[quizNumber].map(q => {
        const shuffledAnswers = shuffleArray(q.answers);
        const correctAnswerText = q.answers[q.correct];
        const newCorrectIndex = shuffledAnswers.indexOf(correctAnswerText);
        
        return {
            ...q,
            answers: shuffledAnswers,
            correct: newCorrectIndex
        };
    });
    quiz.currentQuestion = 0;
    quiz.score = 0;
    quiz.answered = 0;
    
    displayQuestion(quizNumber);
}

// Affichage d'une question
function displayQuestion(quizNumber) {
    const quiz = currentQuizzes[quizNumber];
    const question = quiz.questions[quiz.currentQuestion];
    
    const questionText = document.getElementById(`quiz${quizNumber}-question-text`);
    const answersContainer = document.getElementById(`quiz${quizNumber}-answers`);
    const progress = document.getElementById(`quiz${quizNumber}-progress`);
    const score = document.getElementById(`quiz${quizNumber}-score`);
    
    questionText.textContent = question.question;
    
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-answer';
        button.textContent = answer;
        button.onclick = () => selectAnswer(quizNumber, index);
        answersContainer.appendChild(button);
    });
    
    progress.textContent = `Question ${quiz.currentQuestion + 1}/5`;
    score.textContent = `Score: ${quiz.score}/${quiz.answered}`;
    
    // Reset des états des boutons
    document.getElementById(`quiz${quizNumber}-submit`).disabled = true;
    document.getElementById(`quiz${quizNumber}-question`).style.display = 'block';
    document.getElementById(`quiz${quizNumber}-result`).style.display = 'none';
}

// Sélection d'une réponse
function selectAnswer(quizNumber, selectedIndex) {
    const answers = document.querySelectorAll(`#quiz${quizNumber}-answers .quiz-answer`);
    answers.forEach((answer, index) => {
        answer.classList.remove('selected');
        if (index === selectedIndex) {
            answer.classList.add('selected');
        }
    });
    
    currentQuizzes[quizNumber].selectedAnswer = selectedIndex;
    document.getElementById(`quiz${quizNumber}-submit`).disabled = false;
}

// Validation de la réponse
function submitAnswer(quizNumber) {
    const quiz = currentQuizzes[quizNumber];
    const question = quiz.questions[quiz.currentQuestion];
    const selectedAnswer = quiz.selectedAnswer;
    
    if (selectedAnswer === undefined) return;
    
    const answers = document.querySelectorAll(`#quiz${quizNumber}-answers .quiz-answer`);
    const isCorrect = selectedAnswer === question.correct;
    
    // Coloration des réponses
    answers.forEach((answer, index) => {
        if (index === question.correct) {
            answer.classList.add('correct');
        } else if (index === selectedAnswer) {
            answer.classList.add('incorrect');
        }
        answer.onclick = null; // Désactive les clics
    });
    
    // Mise à jour du score
    quiz.answered++;
    if (isCorrect) {
        quiz.score++;
    }
    
    // Affichage du résultat
    const explanation = document.getElementById(`quiz${quizNumber}-explanation`);
    explanation.innerHTML = `
        <strong>${isCorrect ? '✅ Correct !' : '❌ Incorrect'}</strong><br><br>
        ${question.explanation}
    `;
    
    document.getElementById(`quiz${quizNumber}-question`).style.display = 'none';
    document.getElementById(`quiz${quizNumber}-result`).style.display = 'block';
    
    // Mise à jour du score affiché
    const scoreElement = document.getElementById(`quiz${quizNumber}-score`);
    scoreElement.textContent = `Score: ${quiz.score}/${quiz.answered}`;
}

// Question suivante
function nextQuestion(quizNumber) {
    const quiz = currentQuizzes[quizNumber];
    quiz.currentQuestion++;
    
    if (quiz.currentQuestion < quiz.questions.length) {
        displayQuestion(quizNumber);
    } else {
        showFinalScore(quizNumber);
    }
}

// Affichage du score final
function showFinalScore(quizNumber) {
    const quiz = currentQuizzes[quizNumber];
    const percentage = Math.round((quiz.score / quiz.answered) * 100);
    
    let message = '';
    let emoji = '';
    
    if (percentage >= 80) {
        message = "Excellent ! Vous maîtrisez parfaitement ces concepts.";
        emoji = "🎉";
    } else if (percentage >= 60) {
        message = "Bien joué ! Quelques révisions vous permettront d'atteindre l'excellence.";
        emoji = "👍";
    } else if (percentage >= 40) {
        message = "C'est un début ! Revoyez les sections correspondantes pour améliorer votre compréhension.";
        emoji = "📚";
    } else {
        message = "Il est recommandé de relire attentivement les sections avant de refaire le quiz.";
        emoji = "💪";
    }
    
    const resultContainer = document.getElementById(`quiz${quizNumber}-result`);
    resultContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                ${emoji} Quiz terminé !
            </h3>
            <p style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">
                Score final : ${quiz.score}/${quiz.answered} (${percentage}%)
            </p>
            <p style="margin-bottom: 2rem; font-size: 1.1rem;">
                ${message}
            </p>
            <button class="quiz-btn" onclick="initializeQuiz(${quizNumber})">
                Recommencer le quiz
            </button>
        </div>
    `;
    
    document.getElementById(`quiz${quizNumber}-question`).style.display = 'none';
    resultContainer.style.display = 'block';
}

// Navigation fluide
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Gestion du clic sur les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Compensation pour la navbar fixe
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mise à jour de la navigation active au scroll
    function updateActiveNavigation() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavigation);
    updateActiveNavigation(); // Initialisation
}

// Gestion des dropdowns
function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const title = dropdown.querySelector('.dropdown-title');
        title.addEventListener('click', function() {
            dropdown.classList.toggle('active');
        });
    });
}

// Gestion de la checklist interactive
function initializeChecklist() {
    const checklistItems = document.querySelectorAll('.checklist-item');
    
    checklistItems.forEach(item => {
        item.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            
            // Animation de validation
            if (checkbox.checked) {
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            }
            
            updateChecklistProgress();
        });
    });
}

// Mise à jour du progrès de la checklist
function updateChecklistProgress() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const checkedBoxes = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked');
    const percentage = Math.round((checkedBoxes.length / checkboxes.length) * 100);
    
    // Vous pouvez ajouter ici un indicateur de progression si souhaité
    if (percentage === 100) {
        // Animation de félicitation quand tout est coché
        const checklistContainer = document.querySelector('.checklist-container');
        checklistContainer.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
        checklistContainer.style.color = 'white';
        
        setTimeout(() => {
            checklistContainer.style.background = 'var(--bg-white)';
            checklistContainer.style.color = 'var(--text-dark)';
        }, 2000);
    }
}

// Gestion des événements des quiz
function initializeQuizEvents() {
    // Quiz 1
    document.getElementById('quiz1-submit').addEventListener('click', () => submitAnswer(1));
    document.getElementById('quiz1-next').addEventListener('click', () => nextQuestion(1));

    // Quiz 2
    document.getElementById('quiz2-submit').addEventListener('click', () => submitAnswer(2));
    document.getElementById('quiz2-next').addEventListener('click', () => nextQuestion(2));

    // Quiz 3
    document.getElementById('quiz3-submit').addEventListener('click', () => submitAnswer(3));
    document.getElementById('quiz3-next').addEventListener('click', () => nextQuestion(3));

    // Quiz 4
    document.getElementById('quiz4-submit').addEventListener('click', () => submitAnswer(4));
    document.getElementById('quiz4-next').addEventListener('click', () => nextQuestion(4));

    // Quiz 5
    document.getElementById('quiz5-submit').addEventListener('click', () => submitAnswer(5));
    document.getElementById('quiz5-next').addEventListener('click', () => nextQuestion(5));

    // Quiz 6
    document.getElementById('quiz6-submit').addEventListener('click', () => submitAnswer(6));
    document.getElementById('quiz6-next').addEventListener('click', () => nextQuestion(6));
}

// Animation d'apparition des sections au scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Fonction utilitaire pour gérer le stockage local (optionnel)
function saveProgress() {
    const progress = {
        quiz1: currentQuizzes[1],
        quiz2: currentQuizzes[2],
        quiz3: currentQuizzes[3],
        quiz4: currentQuizzes[4],
        quiz5: currentQuizzes[5],
        quiz6: currentQuizzes[6],
        timestamp: Date.now()
    };

    localStorage.setItem('courseProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('courseProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        // Vérifier que la sauvegarde n'est pas trop ancienne (24h)
        if (Date.now() - progress.timestamp < 24 * 60 * 60 * 1000) {
            return progress;
        }
    }
    return null;
}

// Initialisation principale
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initialisation du cours Méthodologies de Gestion de Projet');
    
    // Initialiser toutes les fonctionnalités
    initializeNavigation();
    initializeDropdowns();
    initializeChecklist();
    initializeQuizEvents();
    initializeScrollAnimations();
    
    // Initialiser les quiz
    initializeQuiz(1);
    initializeQuiz(2);
    initializeQuiz(3);
    initializeQuiz(4);
    initializeQuiz(5);
    initializeQuiz(6);

    // Affichage d'un message de bienvenue
    console.log('✅ Application prête ! Bonne formation !');
    
    // Ajouter une classe pour indiquer que le JS est chargé
    document.body.classList.add('js-loaded');
});

// Gestion des erreurs JavaScript
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
    // En cas d'erreur, on peut afficher un message à l'utilisateur
    const errorMessage = document.createElement('div');
    errorMessage.className = 'alert alert-warning';
    errorMessage.innerHTML = `
        <strong>⚠️ Information :</strong> Une erreur technique mineure s'est produite. 
        Rechargez la page si vous rencontrez des problèmes d'interactivité.
    `;
    errorMessage.style.position = 'fixed';
    errorMessage.style.top = '70px';
    errorMessage.style.right = '20px';
    errorMessage.style.maxWidth = '300px';
    errorMessage.style.zIndex = '1001';
    
    document.body.appendChild(errorMessage);
    
    // Faire disparaître le message après 5 secondes
    setTimeout(() => {
        errorMessage.remove();
    }, 5000);
});

// Fonctions d'accessibilité - navigation au clavier
document.addEventListener('keydown', function(e) {
    // Navigation avec les flèches dans les quiz
    if (e.target.classList.contains('quiz-answer')) {
        const answers = document.querySelectorAll('.quiz-answer');
        const currentIndex = Array.from(answers).indexOf(e.target);
        
        if (e.key === 'ArrowDown' && currentIndex < answers.length - 1) {
            e.preventDefault();
            answers[currentIndex + 1].focus();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            answers[currentIndex - 1].focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.target.click();
        }
    }
    
    // Fermer les dropdowns avec Escape
    if (e.key === 'Escape') {
        document.querySelectorAll('.dropdown.active').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Fonction pour imprimer ou exporter (bonus)
function printSummary() {
    const summaryContent = document.getElementById('synthese').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Synthèse - Méthodologies de Gestion de Projet</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .checklist-item { margin: 10px 0; }
                    .alert { border-left: 4px solid #007bff; padding: 10px; margin: 10px 0; }
                </style>
            </head>
            <body>
                <h1>Synthèse - Méthodologies de Gestion de Projet</h1>
                ${summaryContent}
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Export des fonctions principales pour usage global
window.CourseApp = {
    initializeQuiz,
    selectAnswer,
    submitAnswer,
    nextQuestion,
    printSummary,
    saveProgress,
    loadProgress
};