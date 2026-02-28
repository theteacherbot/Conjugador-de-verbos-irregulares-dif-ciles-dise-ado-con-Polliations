const verbs = [
    {
        infinitive: "tener",
        question: "¿Cómo se conjuga en presente?",
        conjugations: [
            { p: "yo", v: "tengo", irr: true },
            { p: "tú", v: "tienes", irr: true },
            { p: "él/ella", v: "tiene", irr: true },
            { p: "nosotros", v: "tenemos", irr: false },
            { p: "ustedes", v: "tienen", irr: true },
            { p: "ellos", v: "tienen", irr: true }
        ],
        note: "Irregularidad mixta: 'g' en 1ª persona y cambio e → ie en el resto (excepto nosotros)."
    },
    {
        infinitive: "venir",
        question: "¿Cuál es su forma en presente?",
        conjugations: [
            { p: "yo", v: "vengo", irr: true },
            { p: "tú", v: "vienes", irr: true },
            { p: "él/ella", v: "viene", irr: true },
            { p: "nosotros", v: "venimos", irr: false },
            { p: "ustedes", v: "vienen", irr: true },
            { p: "ellos", v: "vienen", irr: true }
        ],
        note: "Similar a 'tener'. Presenta 'g' en la 1ª persona y diptongación e → ie."
    },
    {
        infinitive: "decir",
        question: "¿Cómo cambia su raíz en presente?",
        conjugations: [
            { p: "yo", v: "digo", irr: true },
            { p: "tú", v: "dices", irr: true },
            { p: "él/ella", v: "dice", irr: true },
            { p: "nosotros", v: "decimos", irr: false },
            { p: "ustedes", v: "dicen", irr: true },
            { p: "ellos", v: "dicen", irr: true }
        ],
        note: "Cambio radical e → i y 1ª persona con 'g'."
    },
    {
        infinitive: "poder",
        question: "¿Qué ocurre con la 'o' al conjugar?",
        conjugations: [
            { p: "yo", v: "puedo", irr: true },
            { p: "tú", v: "puedes", irr: true },
            { p: "él/ella", v: "puede", irr: true },
            { p: "nosotros", v: "podemos", irr: false },
            { p: "ustedes", v: "pueden", irr: true },
            { p: "ellos", v: "pueden", irr: true }
        ],
        note: "Irregularidad por diptongación: la o → ue en sílaba tónica."
    },
    {
        infinitive: "hacer",
        question: "¿Cuál es la 1ª persona del singular?",
        conjugations: [
            { p: "yo", v: "hago", irr: true },
            { p: "tú", v: "haces", irr: false },
            { p: "él/ella", v: "hace", irr: false },
            { p: "nosotros", v: "hacemos", irr: false },
            { p: "ustedes", v: "hacen", irr: false },
            { p: "ellos", v: "hacen", irr: false }
        ],
        note: "Solo es irregular en la 1ª persona (yo hago)."
    },
    {
        infinitive: "poner",
        question: "¿Cómo se dice 'yo' en presente?",
        conjugations: [
            { p: "yo", v: "pongo", irr: true },
            { p: "tú", v: "pones", irr: false },
            { p: "él/ella", v: "pone", irr: false },
            { p: "nosotros", v: "ponemos", irr: false },
            { p: "ustedes", v: "ponen", irr: false },
            { p: "ellos", v: "ponen", irr: false }
        ],
        note: "Irregularidad de 'g' solo en la 1ª persona del singular."
    },
    {
        infinitive: "salir",
        question: "¿Presenta irregularidad en todas sus formas?",
        conjugations: [
            { p: "yo", v: "salgo", irr: true },
            { p: "tú", v: "sales", irr: false },
            { p: "él/ella", v: "sale", irr: false },
            { p: "nosotros", v: "salimos", irr: false },
            { p: "ustedes", v: "salen", irr: false },
            { p: "ellos", v: "salen", irr: false }
        ],
        note: "Verbo con 1ª persona irregular en 'g'. El resto es regular."
    },
    {
        infinitive: "saber",
        question: "¿Cuál es su forma especial en 'yo'?",
        conjugations: [
            { p: "yo", v: "sé", irr: true },
            { p: "tú", v: "sabes", irr: false },
            { p: "él/ella", v: "sabe", irr: false },
            { p: "nosotros", v: "sabemos", irr: false },
            { p: "ustedes", v: "saben", irr: false },
            { p: "ellos", v: "saben", irr: false }
        ],
        note: "La 1ª persona es totalmente irregular (sé) y lleva tilde diacrítica."
    },
    {
        infinitive: "querer",
        question: "¿Cómo cambia la 'e' radical?",
        conjugations: [
            { p: "yo", v: "quiero", irr: true },
            { p: "tú", v: "quieres", irr: true },
            { p: "él/ella", v: "quiere", irr: true },
            { p: "nosotros", v: "queremos", irr: false },
            { p: "ustedes", v: "quieren", irr: true },
            { p: "ellos", v: "quieren", irr: true }
        ],
        note: "Diptongación e → ie en todas las personas menos nosotros."
    },
    {
        infinitive: "traer",
        question: "¿Qué letra aparece en la 1ª persona?",
        conjugations: [
            { p: "yo", v: "traigo", irr: true },
            { p: "tú", v: "traes", irr: false },
            { p: "él/ella", v: "trae", irr: false },
            { p: "nosotros", v: "traemos", irr: false },
            { p: "ustedes", v: "traen", irr: false },
            { p: "ellos", v: "traen", irr: false }
        ],
        note: "Aparece el grupo 'ig' en la 1ª persona del singular."
    }
];

const grid = document.getElementById('flashcards-grid');
const flipAllBtn = document.getElementById('flip-all');
const themeToggle = document.getElementById('theme-toggle');
const progressCount = document.getElementById('progress-count');
const progressFill = document.getElementById('progress-fill');

let flippedCount = new Set();
let allFlipped = false;

// Inicializar Tarjetas
function createCards() {
    verbs.forEach((verb, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'card-wrapper';
        wrapper.dataset.index = index;

        const inner = document.createElement('div');
        inner.className = 'card-inner';

        // Lado Frontal
        const front = document.createElement('div');
        front.className = 'card-front';
        front.innerHTML = `
            <span class="badge">Verbo Irregular Crítico</span>
            <h2 class="verb-title">${verb.infinitive}</h2>
            <p class="question">${verb.question}</p>
            <div style="margin-top: 20px; font-size: 0.8rem; opacity: 0.6;">Haz clic para voltear</div>
        `;

        // Lado Posterior
        const back = document.createElement('div');
        back.className = 'card-back';
        
        let conjugationsHtml = '<ul class="conjugation-list">';
        verb.conjugations.forEach(c => {
            conjugationsHtml += `
                <li>
                    <span class="pronoun">${c.p}</span>
                    <span class="verb-form ${c.irr ? 'highlight' : ''}">${c.v}</span>
                </li>
            `;
        });
        conjugationsHtml += '</ul>';

        back.innerHTML = `
            <h3 style="margin-bottom: 10px; color: var(--accent-color)">${verb.infinitive.toUpperCase()}</h3>
            ${conjugationsHtml}
            <div class="note"><strong>Nota:</strong> ${verb.note}</div>
        `;

        inner.appendChild(front);
        inner.appendChild(back);
        wrapper.appendChild(inner);
        
        // Evento Click
        wrapper.addEventListener('click', () => {
            wrapper.classList.toggle('is-flipped');
            if(wrapper.classList.contains('is-flipped')) {
                updateProgress(index);
            }
        });

        grid.appendChild(wrapper);
    });
}

// Control de Progreso
function updateProgress(index) {
    flippedCount.add(index);
    const count = flippedCount.size;
    progressCount.innerText = count;
    progressFill.style.width = `${(count / verbs.length) * 100}%`;
}

// Voltear todas
flipAllBtn.addEventListener('click', () => {
    allFlipped = !allFlipped;
    const cards = document.querySelectorAll('.card-wrapper');
    cards.forEach((card, index) => {
        if (allFlipped) {
            card.classList.add('is-flipped');
            updateProgress(index);
        } else {
            card.classList.remove('is-flipped');
        }
    });
    flipAllBtn.innerText = allFlipped ? "Restaurar Todas" : "Voltear Todas";
});

// Modo Oscuro
themeToggle.addEventListener('click', () => {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.innerText = "Modo Oscuro";
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerText = "Modo Claro";
    }
});

// Iniciar aplicación
createCards();