import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu_._dishId-x-9kBCVc.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[50vh] flex-col items-center justify-center p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-primary",
				children: "Dish Not Found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "The dish you are looking for does not exist."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/menu",
				className: "mt-8 text-terracotta underline underline-offset-4",
				children: "Return to Menu"
			})
		]
	});
};
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
