
const fortune = {
    adjectives: ['Ambitious', 'Brave', 'Calm', 'Faithful', 'Gentle',
 'Lively', 'Nice', 'Proud', 'Witty'],
    quote: [
        'act as if what you do makes a difference. It does.',
        'believe you can and you\'re halfway there.',
        'when you have a dream, you\'ve got to grab it and never let go.',
        'life is like riding a bicycle. To keep your balance, you must keep moving.',
        'limit your "always" and your "nevers."',
        'nothing is impossible. The word itself says "I\'m possible!"',
        'you are never too old to set another goal or to dream a new dream.',
        'try to be a rainbow in someone else\'s cloud.',
        'you do not find the happy life. You make it.',
        'the most wasted of days is one without laughter.',
    ],
    advice: [
        'take time to know yourself.',
        'a narrow focus brings big results.',
        'show up fully.',
        'don\'t make assumptions.',
        'be patient and persistent.',
        'in order to get, you have to give.',
        'luck comes from hard work.',
        'be your best at all times.',
        'don\'t try to impress everyone.',
        'don\'t be afraid of being afraid.',
    ],
};

const randomIndex = () => {
    return Math.floor(Math.random() * 10);
};

const fortuneTeller = () => {
    return console.log(`\nYou are ${fortune.adjectives[randomIndex()]}.\nRemember, ${fortune.quote[randomIndex()]}\nFinally, ${fortune.advice[randomIndex()]}\n`);
};

console.log(" ______         _                      _______   _ _  ");
console.log("|  ____|       | |                    |__   __| | | |");
console.log("| |__ ___  _ __| |_ _   _ _ __   ___     | | ___| | | ___ _ __");
console.log("|  __/ _ \\| '__| __| | | | '_ \\ / _ \     | |/ _ \| | / _ \ '__|");
console.log("| | | (_) | |  | |_| |_| | | | |  __/    | |  __/ | |  __/ |");
console.log("|_|  \\___/|_|  \\__| \\__,_|_| |_|\___|     |_|\___ |_|_|\___|_|");
fortuneTeller();


