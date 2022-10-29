class Block {

    constructor()
    {
     this.block = block
  const group = Body.nextGroup(true);
  const rects = Composites.stack(100, 100, this.block, 1, 5, 5, function(x, y) {
      return Bodies.rectangle(x, y, 30, 5, { collisionFilter: { } });
  });


    this.body = Composites.chain(rects, 0.1, 0, -0.6, 0, {stiffness: 0.2, length: 0.3, render: {type: 'block'}});
    World.add(engine.world, this.body);
}


}
