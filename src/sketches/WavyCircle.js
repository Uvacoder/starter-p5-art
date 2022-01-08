import { randomNormal } from "d3-random"

export default class WavyCircle {
  constructor(paper, settings) {
    this.paper = paper

    this.settings = {...{
      width: 800,
      height: 800,
      seedSource: null
    }, ...settings }
  }

  pageSetup() {
    const paper = this.paper
    const { width, height } = this.settings

    let paperSize = new paper.Size([width, height])

    paper.view.setViewSize(paperSize)
    paper.view.setCenter(paperSize.divide(2))
    paper.view.setScaling(1)

    paper.view.element.parentElement.style.aspectRatio = width / height
  }

  draw() {
    const paper = this.paper
    const { seedSource } = this.settings

    this.pageSetup()

    let randomX = randomNormal.source(seedSource)(paper.view.bounds.center.x, 100)()
    let randomY = randomNormal.source(seedSource)(paper.view.bounds.center.y, 100)()

    let circle = new paper.Path.Circle({
      center: [randomX, randomY],
      radius: paper.view.bounds.width * 0.25,
      strokeWidth: 5,
      strokeColor: "black"
    })
  }
}