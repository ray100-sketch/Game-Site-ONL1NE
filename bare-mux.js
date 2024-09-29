import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

app.use("/epoxy/", express.static(epoxyPath));
app.use("/baremux/", express.static(baremuxPath));
import { BareMuxConnection } from "@mercuryworkshop/bare-mux"
let connection = new BareMuxConnection("/baremux/worker.js")
await connection.setTransport("/epoxy/index.mjs", [{ wisp: "wss://wisp.mercurywork.shop/" }]);
await connection.setTransport("/baremod/index.mjs", ["https://tomp.app/"]);
