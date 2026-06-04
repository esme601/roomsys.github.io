import DOM, { withPlugins } from "just-dom";
import { createRouterPlugin } from "@just-dom/router";
import { lucidePlugin } from "@just-dom/lucide";


const router = createRouterPlugin();

export const jd = withPlugins(DOM, [router, lucidePlugin]);
// export type Jd = typeof jd;