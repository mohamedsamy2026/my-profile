const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const esc = (t) =>
  String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { name, phone, email, msg } = await req.json();

    if (!name || !phone || !email || !msg) return json({ error: "Missing fields" }, 400);
    if (msg.length > 2000 || name.length > 100) return json({ error: "Too long" }, 400);

    const token = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const chatId = Deno.env.get("TELEGRAM_CHAT_ID");

    const text =
      `📩 <b>رسالة جديدة من البورتفوليو</b>\n\n` +
      `<b>الاسم:</b> ${esc(name)}\n` +
      `<b>الموبايل:</b> ${esc(phone)}\n` +
      `<b>الإيميل:</b> ${esc(email)}\n` +
      `<b>الرسالة:</b>\n${esc(msg)}`;

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });

    if (!res.ok) return json({ error: "Telegram failed" }, 500);
    return json({ success: true });
  } catch {
    return json({ error: "Server error" }, 500);
  }
});