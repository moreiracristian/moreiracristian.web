const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function sendContact(data: {
  name: string;
  email: string;
  company: string;
  message: string;
}) {
  const res = await fetch(`${API_BASE}/api/contact/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("contact_failed");
  return res.json();
}

export async function subscribe(email: string) {
  const res = await fetch(`${API_BASE}/api/subscribe/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error("subscribe_failed");
  return res.json();
}
