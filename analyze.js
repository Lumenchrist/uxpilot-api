export default async function handler(req, res) {
  const { text } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer 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`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a senior UX designer. Analyze UI and give actionable feedback."
        },
        {
          role: "user",
          content: text
        }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json(data.choices[0].message.content);
}
