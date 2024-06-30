
export default class Layers {

    _shapes = [
        [],
        ['enemyIcon','left','right','playerIcon','fire1','fire2'],
    ]

    _containers = [
        ['left','right'],
        ['enemyInfo','movie','playerInfo','actions'],
    ];

     add(layer,value){
        this._containers[layer].push(value)
    }

    get(){
        return this._containers;
    }


}