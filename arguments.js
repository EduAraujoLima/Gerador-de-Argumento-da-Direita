exports.problema = function () {
    var vet = [];
    vet[0] = 'A miséria';
    vet[1] = 'A inflação';
    vet[2] = 'O golpe de 64';
    vet[3] = 'A violência';
    vet[4] = 'A crise';
    vet[5] = 'O crime';
    vet[6] = 'O nazismo';
    vet[7] = 'O Bolsa Família';
    vet[8] = 'O problema da educação';
    vet[9] = 'A corrupção';

    var random = vet[Math.floor(Math.random() * vet.length)];
    return random;
};

exports.natureza = function () {
    var vet = [];
    vet[0] = ' é uma invenção';
    vet[1] = ' é uma estratégia';
    vet[2] = ' é uma manobra';
    vet[3] = ' é um complô';
    vet[4] = ' é culpa';
    vet[5] = ' é uma criação';
    vet[6] = ' é uma conspiração';
    vet[7] = ' é uma forma orquestrada';
    vet[8] = ' é a doutrinação ideológica ';
    vet[9] = ' é uma articulação';

    var random = vet[Math.floor(Math.random() * vet.length)];
    return random;
};

exports.culpado = function () {
    var vet = [];
    vet[0] = ' do PT';
    vet[1] = ' do Comunismo';
    vet[2] = ' dos esquerdopatas';
    vet[3] = ' da Dilma';
    vet[4] = ' do Socialismo';
    vet[5] = ' do estado';
    vet[6] = ' da ditadura gay';
    vet[7] = ' da esquerda caviar';
    vet[8] = ' dos vândalos';
    vet[9] = ' das feminazis';

    var random = vet[Math.floor(Math.random() * vet.length)];
    return random;
};

exports.motivacao = function () {
    var vet = [];
    vet[0] = ' para deslegitimar';
    vet[1] = ' para vandalizar';
    vet[2] = ' para desmoralizar';
    vet[3] = ' para destruir';
    vet[4] = ' para regular';
    vet[5] = ' para ameaçar';
    vet[6] = ' para superar';
    vet[7] = ' para roubar';
    vet[8] = ' para aterrorizar';
    vet[9] = ' para transgredir';

    var random = vet[Math.floor(Math.random() * vet.length)];
    return random;
};

exports.vitima = function () {
    var vet = [];
    vet[0] = ' a economia';
    vet[1] = ' o livre mercado';
    vet[2] = ' a classe média';
    vet[3] = ' a propriedade privada';
    vet[4] = ' a nação';
    vet[5] = ' o progresso';
    vet[6] = ' a família';
    vet[7] = ' a democracia';
    vet[8] = ' a liberdade';
    vet[9] = ' os bons costumes';

    var random = vet[Math.floor(Math.random() * vet.length)];
    return random;
};