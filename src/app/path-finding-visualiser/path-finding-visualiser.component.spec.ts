import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PathFindingVisualiserComponent } from "./path-finding-visualiser.component";

describe("PathFindingVisualiserComponent", () => {
  let component: PathFindingVisualiserComponent;
  let fixture: ComponentFixture<PathFindingVisualiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PathFindingVisualiserComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathFindingVisualiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
