const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
];

function stripExtraWord(name) {
    return name.replace(/^(a |the |an )/i, '').trim();
}

const sorterdBand = bands.sort((a, b) => (stripExtraWord(a) > stripExtraWord(b) ? 1 : -1));

document.querySelector('#bands').innerHTML = sorterdBand
    .map((band) => {
        return `
        <li>${band}</li>
    `;
    })
    .join('');
