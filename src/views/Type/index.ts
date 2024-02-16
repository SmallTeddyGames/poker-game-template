/**
 * 游戏难度
 */
type DifficultyType = 'easy' | 'middle' | 'hard'
/**
 * 游戏状态
 */
type GameStateType = 'init' | 'start' | 'pause' | 'win' | 'lose'
/**
 * 游戏信息
 */
type GameInfoType = {
    // 游戏难度
    difficulty: DifficultyType;
    // 当前局此
    rounds: number;
    // 游戏状态
    gameState: GameStateType;
    // 背景图片
    bgImage: string;
    // 是否显示游戏日志
    isShowGameInfo: boolean;
    // 游戏日志(Todo: 数据结构待定)
    gameLogItems: any[];
}
/**
 * 卡牌信息
 */
type CardType = {
    number: 'K' | 'Q' | 'J' | 'A' | '10' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2'
    color: 'club' | 'heart' | 'spade' | 'diamond'  // 梅花、红心、黑桃、方片
}
export type {
    DifficultyType,
    GameStateType,
    GameInfoType,
    CardType
}