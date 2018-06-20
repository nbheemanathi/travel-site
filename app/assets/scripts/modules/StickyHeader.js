import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

export default class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.pageSection = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.addSmoothScrolling();
    this.createHeaderWaypoint();
    this.createPageSectionWayPoints();
    this.refreshWayPoints();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  refreshWayPoints() {
    this.lazyImages.on("load", () => {
        Waypoint.refreshAll();
    });
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWayPoints() {
    var that = this;
    this.pageSection.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentItem.getAttribute(
              "data-matching-link"
            );
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentItem.getAttribute(
              "data-matching-link"
            );
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}
