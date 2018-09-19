import "bootstrap";
import { RouterConfiguration, Router, NavModel } from "aurelia-router";

export class App {
  protected router: Router; 
  protected navbar: HTMLElement;
  private scrollEventHandler = (event: UIEvent) => { this.scrollEventHandlerMethod(event); };

  private configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Lorentzen Food";
    config.map([
      { route: ["", "home"],      name: "home",             moduleId: "home/index",             nav: true,    title: "Forside" },
      { route: "about-me",        name: "about-me",         moduleId: "about-me/index",         nav: true,    title: "Om mig" },
      { route: "menu",            name: "menu",             moduleId: "menu/index",                   nav: true,    title: "Menuer",          /*settings: { type: "dropdown", name: "menu", }*/ },
      // { route: "menu/vegetarian", name: "menu-vegetarian",  moduleId: "menu/vegetarian/index",  nav: true,    title: "Vegetar menu",    settings: { type: "dropdown-item", parent: "menu" } },
      // { route: "menu/gourmet",    name: "menu-gourmet",     moduleId: "menu/gourmet/index",     nav: true,    title: "Gourmet menu",    settings: { type: "dropdown-item", parent: "menu" } },
      { route: "reviews",         name: "reviews",          moduleId: "reviews/index",          nav: true,    title: "Kundeanmeldelser" }
    ]);
  }

  protected isDropdown(nav: NavModel): boolean {
    return nav.settings.type === "dropdown";
  }

  protected isLink(nav: NavModel): boolean {
    return !nav.settings.type || nav.settings.type === "link";
  }

  protected dropdownItems(nav: NavModel): NavModel[] {
    return this.router.navigation.filter(x => {
      return x.settings.parent === nav.settings.name;
    });
  }

  protected navItemClicked() {
     $(".navbar-collapse").collapse("hide");
  }

  private attached() {
    window.addEventListener("scroll", this.scrollEventHandler);
  }

  private detached() {
    window.removeEventListener("scroll", this.scrollEventHandler)
  }

  private scrollEventHandlerMethod(event: UIEvent): void {
    if (window.scrollY >= 250) {
        this.navbar.classList.add("fixed");
    }
    else {
      this.navbar.classList.remove("fixed");
    }
  }
}
