import { Component, OnInit } from "@angular/core";
import { NodeProperties } from "../node/node-properties";

@Component({
  selector: "app-path-finding-visualiser",
  templateUrl: "./path-finding-visualiser.component.html",
  styleUrls: ["./path-finding-visualiser.component.css"]
})
export class PathFindingVisualiserComponent implements OnInit {
  private readonly START_NODE_PROPERTIES: NodeProperties = {
    row: 10,
    col: 5
  };
  private readonly FINISH_NODE_PROPERTIES: NodeProperties = {
    row: 10,
    col: 45
  };
  private readonly AMOUNT_OF_ROWS = 20;
  private readonly AMOUNT_OF_COLS = 50;
  nodes: NodeProperties[][];

  constructor() {
    this.nodes = [];
  }

  ngOnInit(): void {
    this.createNodes();
  }

  createNodes(): void {
    for (let row = 0; row < this.AMOUNT_OF_ROWS; row++) {
      const currentRow = [];
      for (let col = 0; col < this.AMOUNT_OF_COLS; col++) {
        currentRow.push(this.createNode(row, col));
      }
      this.nodes.push(currentRow);
    }
  }

  createNode(row: number, col: number): NodeProperties {
    return {
      row,
      col,
      isStartNode:
        row === this.START_NODE_PROPERTIES.row &&
        col === this.START_NODE_PROPERTIES.col,
      isFinishNode:
        row === this.FINISH_NODE_PROPERTIES.row &&
        col === this.FINISH_NODE_PROPERTIES.col
    };
  }
}
