const mailjet = require("node-mailjet").connect(
  "af89eec4c2ba6df69b2dbe8e2d03ccaf",
  "0da66a6931d5ea9bcbf1edd8b5045330"
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
