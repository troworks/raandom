let guy ={
        name:   "troworks",
        age: 11,
        print: "dear mr monster i hope your not fine remember me? yes its your old friend aeb dont ask to mush questions kay?",
        print2: "aeb im sorry i didn't mean to..",
        aaaaaa: 'i said be quiet',
        dogshit: 'im sorry i just wanted to apologize',
        PU_TUHS:'apologize?',
        hahahah:'please',
        HAHAhahaha:'oh you did apologize and what will happen next? take me to your house and after some days treat me like some piece of shit?',
        HAHAHAHAHA: 'no i wouldnt do that to my own so..',
        HAHAHAHAHAHAHHAHAHAHHAHAHHA:'now your are my father now but not for so long . yes you treat me like your son now but when i was a little boy you treat me like NO ONE'
};

console.log(guy)

var sites = [
        'https://youtu.be/1TgdJZ7zCSU',
        'https://youtu.be/x4SsMtmcf4w',
        'https://youtu.be/I6rKVVL1KEI',
        'https://youtu.be/Li4j82QbBvk',
        'https://youtu.be/PGJKeESLBpQ',
        'https://youtu.be/kZUPCB9533Y',
        'https://youtu.be/XbGs_qK2PQA',
        'https://youtu.be/boh92DrYEWs',
        'https://youtu.be/MtN1YnoL46Q',
        'https://youtu.be/J---aiyznGQ',
        'https://youtu.be/MkE2lxkw00w',
        'https://youtu.be/ZqzESY7SIqU',
        'https://youtu.be/ns1SGo3WCF4',
        'https://youtu.be/7iFXyLah2oQ',
        'https://youtu.be/3c66w6fVqOI',
        'https://youtu.be/6e6RK8o1fcs',
        'https://youtu.be/-RGhdxsQMHA',
        'https://youtu.be/DmgsKR1O00c',
        'https://youtu.be/FHviwdECNjU'
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    };
