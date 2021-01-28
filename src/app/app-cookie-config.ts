import { NgcCookieConsentConfig } from "ngx-cookieconsent";

export const cookieConfig: NgcCookieConsentConfig = {
    "cookie": {
      "domain": "tinesoft.github.io"
    },
    "position": "bottom",
    "theme": "classic",
    "palette": {
      "popup": {
        "background": "#000000",
        "text": "#ffffff",
        "link": "#ffffff"
      },
      "button": {
        "background": "#f1d600",
        "text": "#000000",
        "border": "transparent"
      }
    },
    "type": "info",
    "content": {
      "message": "This website uses cookies to ensure you get the best experience on our website.",
      "dismiss": "Got it!",
      "deny": "Refuse cookies",
      "link": "Learn more",
      "href": "privacy-policy",
      "policy": "Cookie Policy"
  }
};
