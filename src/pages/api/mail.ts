const mailjet = require("node-mailjet").connect(
  "7270c0a7f561cd98fde0ac9d4c872fcd",
  "d663303b6d8d190360a0e28ba0520198"
);

export default async function handler(req: any, res: any) {
  const { name, email, message } = req.body;

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "burak.erdem@clockwork.com.tr",
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
