const mailjet = require("node-mailjet").connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

export default async function handler(req: any, res: any) {
  const { name, email, message } = req.body;

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "info@burakerdem.com",
          Name: "Contact Form",
        },
        To: [
          {
            Email: "falsemech@gmail.com",
            Name: "Burak Erdem",
          },
        ],
        Subject: "Contact Form Message",
        TextPart: `${name} | ${email} | ${message}`,
        HTMLPart: `<strong>Name:</strong> ${name},<br /> <strong>Email:</strong> ${email},<br /><strong>Message:</strong> ${message},<br />`,
      },
    ],
  });

  try {
    const result = await request;
    if (result) {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
