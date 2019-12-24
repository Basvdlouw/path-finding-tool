import { Component, Input, OnInit, HostBinding } from "@angular/core";
import { NodeProperties } from "./node-properties";

@Component({
  selector: "app-node",
  templateUrl: "./node.component.html",
  styleUrls: ["./node.component.css"]
})
export class NodeComponent implements NodeProperties {
  @Input()
  row: number;
  @Input()
  col: number;
  @Input()
  isStartNode: boolean;
  @Input()
  isFinishNode: boolean;
}
