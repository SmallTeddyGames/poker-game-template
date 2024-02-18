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
 * 卡牌数字类型
 */
type NumType = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'
/**
 * 卡牌颜色类型
 */
type ColorType = 'spade' | 'diamond' | 'club' | 'heart' // 黑桃、方片、梅花、红心
/**
 * 卡牌信息
 */
type CardType = {
    number: NumType
    color: ColorType
}
export type {
    DifficultyType,
    GameStateType,
    GameInfoType,
    NumType,
    ColorType,
    CardType
}