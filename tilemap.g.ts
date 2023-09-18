// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100007110808080108080811010808081101090e0b00000300000a0e0f00000a0e03090c0d00000300000c0d0f00000c0d03090000000003000000000f0000000003090000000000000000000f0000000003040606060000000505050200000505020900000000000000000000000000000309000000000f00000000000000000003120e0b00000f05050505000000000003090c0d00000f00000000000300000003090505050502000000000003000000030900000000000000000000030000000309000000000000000505050200000003090a0e0000030000000a0e0300000003090c0d0000030000000c0d030000100304061306060206060606130606061302`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 2 2 2 . . . 2 2 2 2 . . 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 2 2 2 2 . . . . . 2 
2 . . . . 2 . . . . . 2 . . . 2 
2 2 2 2 2 2 . . . . . 2 . . . 2 
2 . . . . . . . . . . 2 . . . 2 
2 . . . . . . . 2 2 2 2 . . . 2 
2 . . . . 2 . . . . . 2 . . . 2 
2 . . . . 2 . . . . . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.chestClosed,sprites.dungeon.greenOuterEast0,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouth2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
