// Registers the import-in-the-middle ESM loader hook so that
// @opentelemetry/auto-instrumentations-node can patch ESM imports
// (this app is "type": "module"). Must be passed via --import
// BEFORE @opentelemetry/auto-instrumentations-node/register.
import { register } from "node:module";

register("@opentelemetry/instrumentation/hook.mjs", import.meta.url);
