import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8", (api) => {
  api.registerValueTransformer("home-logo-image-url", ({ value, context }) => {
    if (context.dark) {
      return ""; // Disable dark-mode-specific things. This theme component overrides logo in all modes
    }

    if (context.name === "logo") {
      return settings.Alternative_logo_url || value;
    } else if (context.name === "mobile_logo") {
      return settings.Alternative_mobile_logo_url || value;
    } else if (context.name === "logo_small") {
      return settings.Alternative_small_logo_url || value;
    }

    return value;
  });
});
