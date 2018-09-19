import { autoinject } from 'aurelia-framework';
import { RouteConfig } from "aurelia-router";

@autoinject
export class Index {
  private element: Element;

  constructor(element: Element) {
    this.element = element;
  }
}
