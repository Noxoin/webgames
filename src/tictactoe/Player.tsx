enum Player {
    UNKNOWN,
    PLAYER_1,
    PLAYER_2,
}

function playerName(player: Player): string {
    switch(player) {
        case Player.PLAYER_1: return 'Player 1';
        case Player.PLAYER_2: return 'Player 2';
        default: return 'Unknown';
    }
}

function playerValue(player: Player): string {
    switch(player) {
        case Player.PLAYER_1: return 'X';
        case Player.PLAYER_2: return 'O';
        default: return '';
    }
}

export {
    Player,
    playerName,
    playerValue,
};