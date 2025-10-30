import React, { useEffect, useState } from "react";

export default function TestApi() {
  const [status, setStatus] = useState("");
  const [headers, setHeaders] = useState({});
  const [body, setBody] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const payload = {
          context: "nerdpack/dev/7131997", // <-- STRING
          question: "ping" // <-- STRING
        };

        const res = await fetch("https://bambas-be.onrender.com/ai/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        setStatus(`${res.status} ${res.statusText}`);
        const h = {};
        res.headers.forEach((v, k) => (h[k] = v));
        setHeaders(h);

        const data = await res.json().catch(async () => ({ raw: await res.text() }));
        setBody(data);
      } catch (e) {
        setError(String(e));
      }
    })();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "monospace" }}>
      <h2>API Test</h2>
      {status && <pre>STATUS: {status}</pre>}
      {!!Object.keys(headers).length && (
        <>
          <div>HEADERS:</div>
          <pre>{JSON.stringify(headers, null, 2)}</pre>
        </>
      )}
      {!!Object.keys(body).length && (
        <>
          <div>BODY:</div>
          <pre>{JSON.stringify(body, null, 2)}</pre>
        </>
      )}
      {error && <pre style={{ color: "red" }}>ERROR: {error}</pre>}
    </div>
  );
}
